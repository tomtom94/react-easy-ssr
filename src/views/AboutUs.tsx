import React, { FC, ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { RouteComponentProps } from 'react-router'

import Grid from '../components/Grid'
import aboutUsStyle from '../assets/jss/views/aboutUsStyle'

type Props = {
  children?: ReactNode
  routeComponent: RouteComponentProps
}

const AboutUs: FC<Props> = ({ children, routeComponent, ...props }) => {
  const classes = aboutUsStyle(props)

  const title = 'About us'
  const description = 'Details about the app'

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
                <p>And we deserve to do it.</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default AboutUs
