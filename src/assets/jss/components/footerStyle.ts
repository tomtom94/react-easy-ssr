import { createUseStyles } from 'react-jss'
import { Theme } from '../theme'
import grassBackground from '../../images/free_repeating_background_texture-light_green.jpg'

export default createUseStyles((theme: Theme) => ({
  containerFluid: {
    ...theme.layout.containerFluid,
    backgroundImage: `url(${grassBackground})`,
    backgroundRepeat: 'repeat'
  },
  container: {
    ...theme.layout.container,

    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%'
    }
  },
  footer: {
    display: 'flex',
    '& $containerSocialLinks': {
      display: 'flex',
      alignItems: 'center',
      '& > a': {
        textDecoration: 'none',

        marginRight: '1rem',
        '&:last-of-type': {
          marginRight: 0
        },
        color: 'black',
        fontSize: 30,
        [theme.breakpoints.down('sm')]: {
          fontSize: 25
        },
        '@media(hover: hover) and (pointer: fine)': {
          '&:hover': { color: '#ffd24d' }
        },
        '@media (hover: none)': {
          '&:active': { color: '#ffd24d' }
        }
      }
    },
    '& $containerAdministrationLinks': {
      margin: '0 0 0 2rem',
      padding: '0.3rem 0',
      '& > div': {
        display: 'flex',

        '& > a': {
          textDecoration: 'none',
          color: 'black',
          marginRight: '0.5rem',
          '&:last-of-type': {
            marginRight: 0
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
        }
      },
      '& > p': {
        ...theme.typography.body1,
        margin: '0.3rem 0 0.3rem 0',
        '&:first-of-type': {
          marginTop: 0
        },
        '&:last-of-type': {
          marginBottom: 0
        }
      }
    }
  },
  containerSocialLinks: {},
  containerAdministrationLinks: {}
}))
