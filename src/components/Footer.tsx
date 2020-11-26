import React, { FC, ReactChild } from 'react'
import { useTheme } from 'react-jss'
import { hot } from 'react-hot-loader/root'
import classNames from 'classnames'
import { Link, RouteComponentProps } from 'react-router-dom'
import window from 'global/window'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import footerStyle from '../assets/jss/components/footerStyle'
import { ReduxState } from '../store/rootReducer'

type Props = RouteComponentProps

const Footer: FC<Props> = props => {
  const theme = useTheme()
  const classes: any = footerStyle({ theme })

  const { pathname, search } = props.location

  return (
    <footer className={classNames(classes.containerFluid)}>
      <div className={classNames(classes.container, classes.footer)}>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <div className={classes.listItemText}>
              <a
                href="https://www.facebook.com/mywebsite"
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(classes.listItemIconLink)}
              >
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </a>
            </div>
          </li>
          <li className={classes.listItem}>
            <div className={classes.listItemText}>
              <a
                href="https://www.twitter.com/mywebsite"
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(classes.listItemIconLink)}
              >
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
            </div>
          </li>
        </ul>
        <ul className={classes.list}>
          <li className={classes.ListItem}>
            <div className={classes.listItemText}>
              <p>My website can do this in React.</p>
              <div>
                <Link to="/about-us">About us</Link>
              </div>
              <p>
                &copy;
                {`${new Date().getFullYear()} mywebsite.`}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default hot(Footer)
