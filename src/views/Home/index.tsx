import React, { FC, ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'

import Grid from '../../components/Grid'
import homeStyle from '../../assets/jss/views/homeStyle'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { selectTimezone, setTimezone } from 'store/features/mainSlice'

type Props = {
  children?: ReactNode
}

const Home: FC<Props> = ({ children, ...props }) => {
  const classes = homeStyle(props)
  const dispatch = useAppDispatch()
  const timezone = useAppSelector(selectTimezone)

  const title = 'Home page'
  const description = 'Welcome'

  const allowedTimezones = [...new Set([timezone, 'Europe/Paris', 'Asia/Tokyo', 'America/New_York'])]

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
                <p>Thanks to give me a Github star for this project.</p>
                <br />
                <select
                  name="timezone"
                  value={timezone || ''}
                  onChange={(event) => dispatch(setTimezone({ timezone: event.target.value }))}
                >
                  {allowedTimezones.map((allowedTimezone) => (
                    <option key={allowedTimezone} value={allowedTimezone || ''}>
                      {allowedTimezone}
                    </option>
                  ))}
                </select>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Home
