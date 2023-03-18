import React, { FC, ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'

import Grid from '../../components/Grid'
import homeStyle from '../../assets/jss/views/homeStyle'

type Props = {
  children?: ReactNode
}

const Home: FC<Props> = ({ children, ...props }) => {
  const classes = homeStyle(props)

  const title = 'Home page'
  const description = 'Welcome'

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className={classes.box}>
        <div className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <h1 className={classes.title}>{title}</h1>
              <h1 className={classes.subtitle}>{description}</h1>
              <div className={classes.page}>
                <p>
                  You can find the source code of this React App{' '}
                  <a href="https://github.com/tomtom94/react-easy-ssr" target="_blank" rel="noreferrer">
                    on this repository Github
                  </a>
                  .
                </p>
                <p>In this repo, all the configuration is about SSR Server Side Rendering</p>
                <p>
                  We use renderToString on the server side to generate the DOM and make it download to your browser like PHP or JAVA App
                  does naturally, then we make a React hydratation when the client has been downloaded via the <b>bundle.js</b> files in the{' '}
                  {`<script src="bundle.js">`} DOM.
                </p>
                <p>
                  This frontend architecture is home made, and is as efficient as possible, which means the less code the better, and also
                  the less files the better. React SSR is very complicated to understand, I have been installing this for big companies,
                  just enjoy.
                </p>
                <p>Thanks to give me a Github star for this project.</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Home
