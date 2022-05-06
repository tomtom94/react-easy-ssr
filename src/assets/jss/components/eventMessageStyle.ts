import { createUseStyles } from 'react-jss'
import { Theme } from '../theme'

export default createUseStyles((theme: Theme) => ({
  containerBlock: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem'
  },
  containerNotification: {
    position: 'fixed',
    zIndex: 3000,
    bottom: -400,
    right: '2rem',
    [theme.breakpoints.down('sm')]: {
      right: '1rem'
    },
    transition: `all 350ms ${theme.transition.easing.easeInOut}`
  },
  containerNotificationOpen: {
    bottom: '2rem',
    [theme.breakpoints.down('sm')]: {
      bottom: '1rem'
    }
  },

  message: {
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    minWidth: 250,
    maxWidth: 400,
    [theme.breakpoints.down('sm')]: {
      width: 270
    },
    padding: '1rem 1.5rem',
    position: 'relative',
    '& span': {
      fontSize: 40,
      marginRight: '1.5rem'
    },
    '& > div': {
      '& > p': { ...theme.typography.body1, margin: 0 }
    },
    '& $closingButton': {
      borderRadius: '3px',
      position: 'absolute',
      top: 0,
      right: 0,
      cursor: 'pointer',
      border: 'none',
      padding: '5px 5px',
      backgroundColor: 'transparent',
      '& img': {
        padding: 0,
        height: '18px'
      },
      '&:focus': {
        outline: 0
      },
      '@media(hover: hover) and (pointer: fine)': {
        '&:hover': {
          backgroundColor: 'rgba(200, 200, 200, 0.25)'
        }
      },
      '@media (hover: none)': {
        '&:active': {
          backgroundColor: 'rgba(200, 200, 200, 0.25)'
        }
      }
    }
  },
  closingButton: {},
  error: {
    backgroundColor: theme.palette.error
  },
  success: {
    backgroundColor: theme.palette.success
  }
}))
