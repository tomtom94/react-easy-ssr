import React from 'react'
import { StaticRouter } from 'react-router-dom/server'
import { renderToPipeableStream, renderToString } from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'
import { Provider } from 'react-redux'
import path from 'path'
import compression from 'compression'
import { HelmetProvider, HelmetServerState } from 'react-helmet-async'
import express, { Request, Response } from 'express'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { JssProvider, SheetsRegistry, createGenerateId, jss } from 'react-jss'
import serialize from 'serialize-javascript'
import { ServerStyleSheet } from 'styled-components'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import { UAParser } from 'ua-parser-js'
import CleanCSS from 'clean-css'
import { makeStore, RootState } from '../store'
import App from '../App'
import { paths } from '../../scripts/utils'
import StaticContextProvider from './StaticContext'
import { pageFirstPart, pageSecondPart } from './renderFullPage'
import indexRoutes from 'views/routes'
import { apiSlices } from 'store/reducers'

const PORT = process.env.PORT || 3000

const app = express()

app.enable('trust proxy')

app.disable('x-powered-by')

app.use(compression())

if (process.env.NODE_ENV === 'production') {
  app.get('/health', (req: Request, res: Response) => {
    res.json({ status: 'UP' })
  })
}

if (process.env.NODE_ENV === 'development' || (!process.env.STATIC_FILES_URL && process.env.NODE_ENV === 'production')) {
  /**
   * This middleware is only used in development mode.
   * In production mode, we separate static files from the main Express.js frontend server.
   * By separating them, you reduce the load on this Express.js frontend server.
   * It now depends on what kind of router you are using—Nginx (my favorite), Traefik, etc.
   * The best thing to do is to create a domain alias (e.g., static) and set up a CNAME record pointing to it,
   * like https://static.mywebsite.com/15.bundle-832a294529dcad5060bd.js.
   * Now, the static bundle file 15.bundle-832a294529dcad5060bd.js is served directly.
   */
  app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)))
}

const extractor = new ChunkExtractor({
  statsFile: path.join(paths.clientBuild, paths.publicPath, 'loadable-stats.json'),
  entrypoints: ['bundle']
})

indexRoutes.forEach((indexRoute) => indexRoute.Component.preload()) // avoid side effect due to split code on server side

app.use(async (req: Request, res: Response) => {
  try {
    const userAgent = new UAParser(req.headers['user-agent']).getResult()
    const acceptedLanguages = Array.isArray(req.acceptsLanguages()) ? req.acceptsLanguages()[0] : req.acceptsLanguages()
    const hostname = req.header('host')
    let language: string | string[] = 'fr-FR'
    const timezone = 'Europe/Paris'

    if (acceptedLanguages && acceptedLanguages !== '*') {
      language = acceptedLanguages
    }

    const initialState: RootState = {
      ...makeStore().getState(),
      main: {
        language,
        timezone,
        hostname: hostname || null,
        userAgent
      }
    }

    const store = makeStore(initialState)
    const sheet = new ServerStyleSheet()
    const staticContext = { statusCode: 200 }

    const jsx = (helmetContext = {}) => (
      <StaticContextProvider staticContext={staticContext}>
        <StaticRouter location={req.url}>
          <Provider store={store}>
            <HelmetProvider context={helmetContext}>
              <App />
            </HelmetProvider>
          </Provider>
        </StaticRouter>
      </StaticContextProvider>
    )

    const helmetContext: { helmet?: HelmetServerState } = {}
    const generateId = createGenerateId()
    const sheets = new SheetsRegistry()

    /**
     * Step 1 trigger all React hooks during the initial renderToString call.
     */
    renderToString(jsx())

    /**
     * Step 2 wait for as many apiSlices as are configured in your store.
     */
    await Promise.all(apiSlices.flatMap((apiSlice) => store.dispatch(apiSlice.util.getRunningQueriesThunk())))

    /**
     * Step 3 render all the HTML from React with the populated data using renderToPipeableStream.
     */
    const { pipe, abort } = renderToPipeableStream(
      <JssProvider jss={jss} registry={sheets} generateId={generateId} classNamePrefix="app-">
        {sheet.collectStyles(extractor.collectChunks(jsx(helmetContext)))}
      </JssProvider>,
      {
        onShellReady() {
          let css = sheets.toString()
          const prefixer = postcss([autoprefixer])
          const cleanCSS = new CleanCSS()
          const prefixerTreated = prefixer.process(css, { from: undefined })
          css = prefixerTreated.css
          css = cleanCSS.minify(css).styles

          let fontAwesomeCss = dom.css()
          fontAwesomeCss = cleanCSS.minify(fontAwesomeCss).styles
          const styleTags = sheet.getStyleTags()
          const { helmet } = helmetContext

          res.status(staticContext.statusCode)
          res.setHeader('Content-Type', 'text/html')
          res.write(pageFirstPart(css, fontAwesomeCss, styleTags, helmet))
          pipe(res)
        },
        onShellError(error) {
          console.error('Shell error:', error)
          res.status(500).send('Shell error')
        },
        onAllReady() {
          const scriptTags = extractor.getScriptTags()

          res.write(pageSecondPart(serialize(store.getState()), scriptTags))
          res.end()
        },
        onError(error) {
          console.error('Rendering error:', error)
          res.status(500).send('Rendering error')
        }
      }
    )

    setTimeout(() => {
      abort()
    }, 10000)
  } catch (error) {
    if (error instanceof Error) {
      console.error('Unknown error:', error.message)
      res.status(500).send(error.message)
    } else {
      console.error('Unknown error')
      res.status(500).send('Unknown error')
    }
  }
})

app.listen(PORT, () => {
  console.log(`App SSR running ${process.env.NODE_ENV === 'production' ? `port : ${PORT}` : `http://localhost:${PORT}`} 🌎`)
})
