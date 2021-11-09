import { createUseStyles } from 'react-jss'
import { Theme } from '../theme'
import grassBackground from '../../images/free_repeating_background_texture-light_green.jpg'

export default createUseStyles((theme: Theme) => ({
  appBar: {
    display: 'flex',
    width: '100%',
    height: 60,
    backgroundImage: `url(${grassBackground})`,
    backgroundRepeat: 'repeat',
    transition: `background-color 300ms ${theme.transition.easing.easeInOut}, height 300ms ${theme.transition.easing.easeInOut}`,
    '& $menuItems': {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        height: 'auto',
        flexDirection: 'column',
        padding: '5px 0',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
      },

      '& > $navLink': {
        // Classical link
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'black',
        ...theme.typography.h5,
        letterSpacing: -1,
        textAlign: 'center',
        width: '100%',
        userSelect: 'none',
        padding: '4px 10px',
        [theme.breakpoints.down('md')]: {
          width: '100%',
          textDecoration: 'none',
          padding: '6px 14px',
          textAlign: 'left'
        },
        '@media(hover: hover) and (pointer: fine)': {
          '&:hover': {
            textDecoration: 'underline'
          }
        },
        '@media (hover: none)': {
          '&:active': {
            textDecoration: 'underline'
          }
        }
      },
      '& > $closeMenuMobile': {
        // Closing button for mobile
        [theme.breakpoints.up('md')]: {
          display: 'none'
        },
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        '& > button': {
          cursor: 'pointer',
          textAlign: 'right',
          ...theme.typography.h5,
          width: '100%',
          border: 0,
          padding: `9px ${theme.spacing(3)}px`,
          [theme.breakpoints.down('sm')]: {
            paddingRight: theme.spacing(1)
          },
          textDecoration: 'none',
          backgroundColor: 'transparent',
          '& img': {
            padding: 0,
            marginRight: theme.spacing(1),
            height: '28px'
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
      }
    },
    '& $toolBar': {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      ...theme.layout.containerFluid,
      '& $logoLink': {
        textDecoration: 'none',
        margin: '0 5px 0 0',

        '&:focus': {
          outline: 0
        },
        '& $logoImage': {
          display: 'block',
          color: '#ffd24d',
          transition: `all 300ms ${theme.transition.easing.easeInOut}`,
          height: 50,
          width: 'auto'
        }
      },
      '& button': {
        cursor: 'pointer',
        textAlign: 'center',
        fontSize: 28,
        width: '100%',
        border: 0,
        padding: '9px 10px',
        textDecoration: 'none',
        backgroundColor: 'transparent',
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
    }
  },
  hiddenSmDown: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  hiddenMdUp: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  toolBar: {},
  logoLink: {},
  logoImage: {},
  menuItems: {},
  closeMenuMobile: {},
  navLink: {}
}))
