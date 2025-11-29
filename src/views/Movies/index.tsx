import React, { FC, ReactNode, useContext } from 'react'
import { Helmet } from 'react-helmet-async'

import Grid from '../../components/Grid'
import moviesStyle from '../../assets/jss/views/moviesStyle'

import Loading from '../Exception/Loading'
import { StaticContext } from '../../server/StaticContext'
import { useGetMoviesQuery } from 'store/features/moviesApiSlice'

type Props = {
  children?: ReactNode
}

const Movies: FC<Props> = ({ children, ...props }) => {
  const classes = moviesStyle(props)

  const { data, error, isLoading, isSuccess, isError } = useGetMoviesQuery(undefined)

  const staticContext = useContext(StaticContext)

  if (!process.env.BROWSER && staticContext && isError) {
    staticContext.statusCode = 'status' in error && typeof error.status === 'number' ? error.status : 500
  }

  if (isLoading) {
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
              {isError && (
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  {error && 'data' in error && typeof error.data === 'object' && error.data && 'message' in error.data && (
                    <>
                      {Array.isArray((error.data as { message: string | string[] }).message) ? (
                        (error.data as { message: string[] }).message.map((message: string, index: number) => (
                          <p key={`error-${index}`} className="text-red-500 text-sm">
                            {message}
                          </p>
                        ))
                      ) : (
                        <p className="text-red-500 text-sm">{(error.data as { message: string }).message}</p>
                      )}
                    </>
                  )}
                </Grid>
              )}
              {isSuccess && data.results.length > 0 && (
                <ul className={classes.listMovies}>
                  {data.results.map((e) => (
                    <li key={e.id}>
                      <div className={classes.movieJacket}>
                        <img src={`https://image.tmdb.org/t/p/original${e.poster_path}`} alt="jacket" />
                      </div>
                      <div className={classes.movieDetails}>
                        <h2>{e.title}</h2>
                        <p>{e.overview}</p>
                        <p>{`Release date ${new Date(e.release_date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}`}</p>
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

export default Movies
