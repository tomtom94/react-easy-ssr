import React, { FC, ReactNode } from 'react'
import { RouteComponentProps } from 'react-router'

import { Helmet } from 'react-helmet-async'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import exceptionPageStyle from '../../assets/jss/views/exceptionPageStyle'

type Props = {
  children?: ReactNode
  routeComponent?: RouteComponentProps
}

const Exception: FC<Props> = ({ children, routeComponent, ...props }) => {
  const classes = exceptionPageStyle(props)
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
export default Exception
