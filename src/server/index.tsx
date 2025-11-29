import React from 'react'
import { StaticRouter } from 'react-router-dom/server'
import { renderToString } from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'
import { Provider } from 'react-redux'
import path from 'path'
import compression from 'compression'
import cors from 'cors'
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
import renderFullPage from './renderFullPage'
import { paths } from '../../scripts/utils'
import StaticContextProvider from './StaticContext'
import { moviesApiSlice } from 'store/features/moviesApiSlice'

const PORT = process.env.PORT || 3000

const app = express()

app.enable('trust proxy')

app.use(cors())

app.use(compression())

if (process.env.NODE_ENV === 'production') {
  app.get('/health', (req: Request, res: Response) => {
    res.json({ status: 'UP' })
  })
}

if (process.env.NODE_ENV === 'development' || (!process.env.STATIC_FILES_URL && process.env.NODE_ENV === 'production')) {
  /**
   * This middleware is only used in development mode
   * In production mode we separate static files from the main Express.js frontend server
   * By separating them, you discharge tensions on this Express.js frontend server
   * It now depends what kind of router you are using, Nginx my favorite, Traefik. The best
   * thing to do is to create a domain alias static, and make a CNAME rediction to it, like
   * for example https://static.mywebsite.com/15.bundle-832a294529dcad5060bd.js
   * and now the static bundle file 15.bundle-832a294529dcad5060bd.js is served.
   */
  app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)))
}

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

    const extractor = new ChunkExtractor({
      statsFile: path.join(paths.clientBuild, paths.publicPath, 'loadable-stats.json'),
      entrypoints: ['bundle']
    })
    const store = makeStore(initialState)
    const sheet = new ServerStyleSheet()
    const staticContext = { statusCode: 200 }

    const jsx = (helmetContext = { helmet: {} }) => (
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

    const helmetContext: { helmet: Partial<HelmetServerState> } = { helmet: {} }
    const generateId = createGenerateId()
    const sheets = new SheetsRegistry()

    /**
     * Step 1 we are gonna execute all the React hook by doing the first renderToString.
     */
    renderToString(jsx())

    /**
     * Step 2 you must wait as much apiSlices as you have in your configureStore.
     */
    await Promise.all(store.dispatch(moviesApiSlice.util.getRunningQueriesThunk()))

    /**
     * Step 3 finally we are able to render all the html from React with the data inside thanks to this second call to renderToString.
     */
    const html = renderToString(
      <JssProvider jss={jss} registry={sheets} generateId={generateId} classNamePrefix="app-">
        {sheet.collectStyles(extractor.collectChunks(jsx(helmetContext)))}
      </JssProvider>
    )

    /**
     * Step 4 Due to side effect of split code on server side, reset queries stuck in pending status not detected in step 2.
     * This happens only when the App just started once the first page is opened by the server.
     * Split code from @loadable/component gets the server blind from the query hooks inside the page.
     * Hooks would be triggered only in step 3, which is something we don't want because we were waiting for them in step 2.
     */
    if (Object.values(store.getState().moviesApi.queries).some((query) => query?.status === 'pending')) {
      store.dispatch(moviesApiSlice.util.resetApiState())
    }

    let css = sheets.toString()
    const prefixer = postcss([autoprefixer])
    const cleanCSS = new CleanCSS()
    const prefixerTreated = await prefixer.process(css, { from: undefined })
    css = prefixerTreated.css
    css = cleanCSS.minify(css).styles

    let fontAwesomeCss = dom.css()
    fontAwesomeCss = cleanCSS.minify(fontAwesomeCss).styles
    const styleTags = sheet.getStyleTags()
    const { helmet } = helmetContext
    const scriptTags = extractor.getScriptTags()

    res
      .status(staticContext.statusCode)
      .send(renderFullPage(html, css, fontAwesomeCss, styleTags, serialize(store.getState()), helmet, scriptTags))
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      res.status(500).send(error.message)
    } else {
      console.log('Unknown error')
      res.status(500).send('Unknown error')
    }
  }
})

app.listen(PORT, () => {
  console.log(`App SSR running ${process.env.NODE_ENV === 'production' ? `port : ${PORT}` : `http://localhost:${PORT}`} 🌎`)
})
