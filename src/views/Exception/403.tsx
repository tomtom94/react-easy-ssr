import React, { FunctionComponent } from 'react'
import { hot } from 'react-hot-loader/root'
import { useTheme } from 'react-jss'

import { Helmet } from 'react-helmet-async'

import exceptionPageStyle from '../../assets/jss/views/exceptionPageStyle'
import ExceptionImageUrl, { ReactComponent as ExceptionImage } from '../../assets/images/403.svg'

const Exception: FunctionComponent<any> = props => {
  const theme: any = useTheme()
  const classes: any = exceptionPageStyle({ theme })
  return (
    <>
      <Helmet>
        <title>Error 403</title>
        <meta name="description" content="Forbidden page" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className={classes.box}>
        <div className={classes.container}>
          <div className={classes.containerPage}>
            <img src={ExceptionImageUrl} className={classes.exceptionImage} alt="Exception" />
            <div className={classes.containerText}>
              <p className={classes.title}>Error 403</p>
              <p className={classes.subtitle}>Forbidden page</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default hot(Exception)
