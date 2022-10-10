import { hot } from 'react-hot-loader/root'
import React, { FC } from 'react'

import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import footerStyle from '../assets/jss/components/footerStyle'

type Props = {}

const Footer: FC<Props> = ({ children, ...props }) => {
  const classes = footerStyle(props)

  return (
    <footer className={classNames(classes.containerFluid)}>
      <div className={classNames(classes.container, classes.footer)}>
        <div className={classes.containerSocialLinks}>
          <a href="https://www.facebook.com/react-easy-ssr" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </a>
          <a href="https://www.twitter.com/react-easy-ssr" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </div>

        <div className={classes.containerAdministrationLinks}>
          <p>This is the big line of my website</p>
          <div>
            <Link to="/about-us">About us</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/privacy-policy">Privacy</Link>
          </div>
          <p>
            &copy;
            {`${new Date().getFullYear()} react-easy-ssr.`}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default hot(Footer)
