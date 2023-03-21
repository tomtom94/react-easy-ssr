import { createUseStyles } from 'react-jss'
import { Theme } from '../theme'

export default createUseStyles((theme: Theme) => ({
  message: {
    borderRadius: 3,
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
      '& > p': { ...theme.typography.body1 }
    },
    '& $closingButton': {
      borderRadius: 3,
      position: 'absolute',
      top: 0,
      right: 0,
      cursor: 'pointer',
      border: 'none',
      padding: '0.5rem',
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
