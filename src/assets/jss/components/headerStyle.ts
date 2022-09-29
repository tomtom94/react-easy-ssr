import { createUseStyles } from 'react-jss'
import { Theme } from '../theme'
import grassBackground from '../../images/free_repeating_background_texture-light_green.jpg'

export default createUseStyles((theme: Theme) => ({
  appBar: {
    display: 'flex',
    width: '100%',
    height: '4rem',
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
        textAlign: 'center',
        width: '100%',
        userSelect: 'none',
        padding: '0.5rem 1rem',
        '&:first-of-type': {
          margin: '0 0 0 1rem',
          [theme.breakpoints.down('md')]: {
            margin: '0.5rem 0 0 0'
          }
        },
        [theme.breakpoints.down('md')]: {
          ...theme.typography.h6,
          width: '100%',
          textDecoration: 'none',
          padding: '0.5rem 1rem',
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
        height: '4rem',
        '& > button': {
          cursor: 'pointer',
          textAlign: 'right',
          fontSize: 28,
          width: '100%',
          border: 0,
          paddingRight: '2.5rem',
          [theme.breakpoints.down('sm')]: {
            paddingRight: '1.5rem'
          },
          textDecoration: 'none',
          backgroundColor: 'transparent',
          '& img': {
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
        // color: 'inherit',
        textDecoration: 'none',
        '&:focus': {
          outline: 0
        },
        '@media(hover: hover) and (pointer: fine)': {
          '&:hover': {
            '& div': {
              '& span': {
                textDecoration: 'underline'
              }
            }
          }
        },
        '@media (hover: none)': {
          '&:active': {
            '& div': {
              '& span': {
                textDecoration: 'underline'
              }
            }
          }
        },
        '& div': {
          display: 'flex',
          alignItems: 'center',
          ...theme.typography.h4,
          [theme.breakpoints.down('md')]: {
            ...theme.typography.h5
          },
          '& span': {
            margin: '0 0 0 1rem',
            [theme.breakpoints.down('md')]: {
              margin: '0 0 0 0.5rem'
            }
          }
        }
      },
      '& button': {
        cursor: 'pointer',
        textAlign: 'center',
        fontSize: 28,
        width: '100%',
        border: 0,
        padding: '1rem',
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
  menuItems: {},
  closeMenuMobile: {},
  navLink: {}
}))
