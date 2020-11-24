import React, { Component, PureComponent, useEffect, FC } from 'react'
import { hot } from 'react-hot-loader/root'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet-async'
import { RouteComponentProps } from 'react-router'
import { useTheme } from 'react-jss'

import Grid from '../../components/Grid'
import homeStyle from '../../assets/jss/views/homeStyle'

import { ReduxState } from '../../store/rootReducer'
import { ActionsRedux } from '../../store/actions/index'

interface Props extends RouteComponentProps, ReduxState, ActionsRedux {}

const Home: FC<Props> = props => {
  const theme = useTheme()
  const classes: any = homeStyle({ theme })

  const { app } = props

  const title = 'Home page'
  const description = 'Welcome'

  const { pathname } = props.router.location
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
                <p>React Easy SSR</p>
                <p>In this repo, all the configuration is about Server Side Rendering</p>
                <p>
                  We use renderToString on the server side to generate the DOM and make it download, then we make a React hydratation when
                  the client (the bundle.js files in the {`<script src="bundle.js">`} DOM) has been downloaded by the user.
                </p>
                <p>Main modules : Webpack, Typescript, React, Redux-saga, React-jss, Loadable-components.</p>
                <p>
                  The code architecture is home made, and is been made to be as simplest as possible (which means the less code the better,
                  and also the less files the better)
                </p>
                <p>
                  React Server side rendering is very complicated to understand, I have been installing this architecture for big companies,
                  just enjoy.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { app } = state
  return {
    app
  }
}

export default hot(connect(mapStateToProps, {})(Home))
