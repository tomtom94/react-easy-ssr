import React, { FC, useRef, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet-async'
import { RouteComponentProps } from 'react-router'
import EventMessage from '../../components/EventMessage'

import Grid from '../../components/Grid'
import moviesStyle from '../../assets/jss/views/moviesStyle'

import { ReduxState } from '../../store/rootReducer'
import { triggerMovies, clearMovies } from '../../store/actions/index'
import Loading from '../Exception/Loading'

type Props = {
  routeComponent: RouteComponentProps
}

const Movies: FC<Props> = ({ children, routeComponent, ...props }) => {
  const classes = moviesStyle(props)

  const dispatch = useDispatch()
  const { movies } = useSelector((state: ReduxState) => state.app)
  const { pathname, search } = routeComponent.location

  const willMount = useRef(true)
  if (willMount.current && !process.env.BROWSER) {
    dispatch(triggerMovies('GET_MOVIES'))
    willMount.current = false
  }

  useEffect(() => {
    dispatch(triggerMovies('GET_MOVIES'))
    return () => {
      dispatch(clearMovies())
    }
  }, [dispatch])

  if (routeComponent.staticContext && movies.error) {
    // eslint-disable-next-line no-param-reassign
    routeComponent.staticContext.statusCode = movies.error.status
  }

  if (movies.isLoading) {
    return <Loading />
  }

  const title = 'Movies'
  const description = 'List of the most recent movies'

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
              {movies.error && (
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <EventMessage event="error" message={movies.error.message} refresh />
                </Grid>
              )}
              {movies.data.length > 0 && (
                <ul className={classes.listMovies}>
                  {movies.data.map(e => (
                    <li key={e.id}>
                      <div className={classes.movieJacket}>
                        <img src={`https://image.tmdb.org/t/p/original${e.poster_path}`} alt="jacket" />
                      </div>
                      <div className={classes.movieDetails}>
                        <h2>{e.title}</h2>
                        <p>{e.overview}</p>
                        <p>{`Release date ${new Date(e.release_date).toLocaleDateString()}`}</p>
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

export default hot(Movies)
