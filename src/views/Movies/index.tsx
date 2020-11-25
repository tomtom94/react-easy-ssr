import React, { Component, PureComponent, useEffect, FC, useRef } from 'react'
import { hot } from 'react-hot-loader/root'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet-async'
import { RouteComponentProps } from 'react-router'
import { useTheme } from 'react-jss'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Grid from '../../components/Grid'
import moviesStyle from '../../assets/jss/views/moviesStyle'

import { ReduxState } from '../../store/rootReducer'
import { ActionsRedux, triggerMovies } from '../../store/actions/index'
import Loading from '../Exception/Loading'

interface Props extends RouteComponentProps, ReduxState, ActionsRedux {}

const Movies: FC<Props> = props => {
  const theme = useTheme()
  const classes: any = moviesStyle({ theme })
  const willMount = useRef(true)

  const { triggerMovies: triggerMoviesAction } = props
  const { app } = props

  if (willMount.current) {
    triggerMoviesAction('get')
    willMount.current = false
  }

  if (props.staticContext && Object.prototype.hasOwnProperty.call(props.app.movies, 'error')) {
    props.staticContext.statusCode = props.app.movies.error.status
  }

  if (app.movies.isLoading) {
    return <Loading />
  }

  const title = 'Movies'
  const description = 'List of the most recent movies'

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

              {Object.prototype.hasOwnProperty.call(app.movies, 'error') && (
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className={classes.message}>
                    <div className={classes.errorMessage}>
                      <span>
                        <FontAwesomeIcon icon="exclamation-triangle" />
                      </span>
                      <p>{app.movies.error.message}</p>
                    </div>
                  </div>
                </Grid>
              )}
              {app.movies.data.length > 0 && (
                <ul className={classes.listMovies}>
                  {app.movies.data.map(e => (
                    <li key={e.id}>
                      <div className={classes.movieJacket}>
                        <img src={`https://image.tmdb.org/t/p/original${e.poster_path}`} alt="jacket" />
                      </div>
                      <div className={classes.movieDetails}>
                        <h2>{e.title}</h2>
                        <p>{e.overview}</p>
                        <p>{`Release date ${e.release_date}`}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
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

export default hot(connect(mapStateToProps, { triggerMovies })(Movies))
