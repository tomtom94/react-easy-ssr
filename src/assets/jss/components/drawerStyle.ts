import { createUseStyles } from 'react-jss'
import { Theme } from '../theme'
import grassBackground from '../../images/5023.png'

const drawerWidth = 260

export default createUseStyles((theme: Theme) => ({
  wrapperBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    opacity: 0,
    backgroundColor: 'transparent',
    transition: `background-color 350ms ${theme.transition.easing.sharp}, opacity 350ms ${theme.transition.easing.sharp}`
  },
  wrapperBackgroundVisible: {
    opacity: 1,
    visibility: 'visible',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  wrapperBackgroundHidden: {
    visibility: 'hidden'
  },
  paper: {
    flex: '1 0 auto',
    position: 'fixed',
    top: 0,
    left: 'auto',
    right: 0,
    bottom: 0,
    width: drawerWidth,
    height: 'auto',
    transform: `translateX(${+drawerWidth}px)`,
    willChange: 'transform',
    zIndex: 1001,
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
    // We disable the focus ring for mouse, touch and keyboard users.
    // At some point, it would be better to keep it for keyboard users.
    // :focus-ring CSS pseudo-class will help.
    outline: 0,
    // backgroundColor: theme.palette.common.white,

    backgroundImage: `url(${grassBackground})`,
    backgroundRepeat: 'repeat',
    transition: `transform 300ms ${theme.transition.easing.easeInOut}`
  },
  paperVisible: {
    opacity: 1,
    transform: 'translateX(0)',
    visibility: 'visible'
  },
  paperHidden: {
    visibility: 'hidden'
  }
}))
