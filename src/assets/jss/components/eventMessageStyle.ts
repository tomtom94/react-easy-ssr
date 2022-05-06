import { createUseStyles } from 'react-jss'
import { Theme } from '../theme'

export default createUseStyles((theme: Theme) => ({
  containerBlock: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  containerNotification: {
    position: 'fixed',
    zIndex: 3000,
    bottom: -400,
    right: 20,
    transition: `all 350ms ${theme.transition.easing.easeInOut}`
  },
  containerNotificationOpen: {
    bottom: 20
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
    padding: '18px 24px',
    position: 'relative',
    '& span': {
      fontSize: 50,
      marginRight: 15
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
