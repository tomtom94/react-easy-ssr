import React, { Component, PureComponent, useEffect, FC } from 'react'
import { hot } from 'react-hot-loader/root'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet-async'
import { RouteComponentProps } from 'react-router'
import { useTheme } from 'react-jss'

import Grid from '../components/Grid'
import aboutUsStyle from '../assets/jss/views/aboutUsStyle'

import { ReduxState } from '../store/rootReducer'
import { ActionsRedux } from '../store/actions/index'

interface Props extends RouteComponentProps, ReduxState, ActionsRedux {}

const AboutUs: FC<Props> = props => {
  const theme = useTheme()
  const classes: any = aboutUsStyle({ theme })

  const { app } = props

  const title = 'About us'
  const description = 'Details about the app'

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
                <p>We do what we do because we have to do it.</p>
                <p>We do what we do because we deserve to do it.</p>
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

export default hot(connect(mapStateToProps, {})(AboutUs))
