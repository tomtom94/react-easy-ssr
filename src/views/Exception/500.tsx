import React, { FC, ReactNode } from 'react'

import { Helmet } from 'react-helmet-async'

import exceptionPageStyle from '../../assets/jss/views/exceptionPageStyle'
import ExceptionImageUrl from '../../assets/images/500.svg'

type Props = {
  children?: ReactNode
}

const Exception: FC<Props> = ({ children, ...props }) => {
  const classes = exceptionPageStyle(props)
  return (
    <>
      <Helmet>
        <title>Error 500</title>
        <meta name="description" content="Internal error server" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className={classes.box}>
        <div className={classes.container}>
          <div className={classes.containerPage}>
            <img src={ExceptionImageUrl} className={classes.exceptionImage} alt="Exception" />
            <div className={classes.containerText}>
              <p className={classes.title}>Error 500</p>
              <p className={classes.subtitle}>Internal error server</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exception
