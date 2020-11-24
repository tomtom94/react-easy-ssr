import React, { FunctionComponent } from 'react'
import { hot } from 'react-hot-loader/root'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'react-jss'
import { Helmet } from 'react-helmet-async'
import exceptionPageStyle from '../../assets/jss/views/exceptionPageStyle'

const Exception: FunctionComponent<any> = props => {
  const theme = useTheme()
  const classes: any = exceptionPageStyle({ theme })
  return (
    <>
      <Helmet>
        <title>Loading...</title>
        <meta name="description" content="Loading page" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className={classes.box}>
        <div className={classes.container}>
          <div className={classes.containerPage}>
            <span className={classes.fontSpinner}>
              <FontAwesomeIcon icon="spinner" className={classes.spinner} />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
export default hot(Exception)
