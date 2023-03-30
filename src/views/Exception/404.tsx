import React, { FC, useContext, ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { StaticContext } from '../../server/StaticContext'
import exceptionPageStyle from '../../assets/jss/views/exceptionPageStyle'
import ExceptionImageUrl from '../../assets/images/404.svg'

type Props = {
  children?: ReactNode
}

const Exception: FC<Props> = ({ children, ...props }) => {
  const classes = exceptionPageStyle(props)
  const staticContext = useContext(StaticContext)

  if (!process.env.BROWSER && staticContext) {
    staticContext.statusCode = 404
  }
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

export default Exception
