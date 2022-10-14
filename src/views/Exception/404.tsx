import { hot } from 'react-hot-loader/root'
import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'

import { Helmet } from 'react-helmet-async'

import exceptionPageStyle from '../../assets/jss/views/exceptionPageStyle'
import ExceptionImageUrl, { ReactComponent as ExceptionImage } from '../../assets/images/404.svg'

type Props = {
  routeComponent: RouteComponentProps
}

const Exception: FC<Props> = ({ children, routeComponent, ...props }) => {
  const classes = exceptionPageStyle(props)
  return (
    <>
      <Helmet>
        <title>Error 404</title>
        <meta name="description" content="Page not found" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className={classes.box}>
        <div className={classes.container}>
          <div className={classes.containerPage}>
            <img src={ExceptionImageUrl} className={classes.exceptionImage} alt="Exception" />
            <div className={classes.containerText}>
              <p className={classes.title}>Error 404</p>
              <p className={classes.subtitle}>Page not found</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default hot(Exception)
