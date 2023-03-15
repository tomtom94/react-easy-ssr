import React, { useEffect, useState, useRef, FC, ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Drawer from './Drawer'
import headerStyle from '../assets/jss/components/headerStyle'
import CloseImageUrl from '../assets/images/61155.svg'

type Props = { children?: ReactNode }

const Header: FC<Props> = ({ children, ...props }) => {
  const classes = headerStyle(props)
  const [mobileOpen, setMobileOpen] = useState(false)
  const oldMobileOpen = useRef(false)

  const { pathname } = useLocation()

  const oldPage = useRef(pathname)

  useEffect(() => {
    if (pathname !== oldPage.current) {
      oldPage.current = pathname
      setMobileOpen(false)
    }
  }, [pathname, props])

  useEffect(() => {
    if (oldMobileOpen.current !== mobileOpen && mobileOpen) {
      document.body.style.overflow = 'hidden hidden'
      try {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      } catch (error) {
        // for older browser
        window.scrollTo(0, 0)
      }
    }
    if (oldMobileOpen.current !== mobileOpen && !mobileOpen) {
      document.body.style.removeProperty('overflow')
    }
    oldMobileOpen.current = mobileOpen
  }, [mobileOpen])

  const headerLinks = () => (
    <nav className={classes.menuItems}>
      <div className={classNames(classes.closeMenuMobile)}>
        <button
          type="button"
          aria-label="close drawer"
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setMobileOpen(false)
            }
          }}
          onClick={() => {
            setMobileOpen(false)
          }}
        >
          <img src={CloseImageUrl} alt="Close" />
        </button>
      </div>
      <Link className={classNames(classes.navLink)} to="/">
        Home
      </Link>
      <Link className={classNames(classes.navLink)} to="/movies">
        Movies
      </Link>
    </nav>
  )

  return (
    <header className={classNames(classes.appBar)}>
      <div className={classNames(classes.toolBar)}>
        <Link to="/" className={classes.logoLink}>
          <div>
            <FontAwesomeIcon icon={['fab', 'github']} />
            <span>react-easy-ssr</span>
          </div>
        </Link>
        <div className={classes.hiddenSmDown}>{headerLinks()}</div>
        <div className={classes.hiddenMdUp}>
          <button type="button" aria-label="open drawer" onClick={() => setMobileOpen(true)}>
            <FontAwesomeIcon icon="bars" />
          </button>
        </div>
      </div>
      <div className={classes.hiddenMdUp}>
        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)} id="drawer">
          {headerLinks()}
        </Drawer>
      </div>
    </header>
  )
}

export default Header
