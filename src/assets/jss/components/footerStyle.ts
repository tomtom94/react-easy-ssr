import { createUseStyles } from 'react-jss'
import { Theme } from '../theme'
import grassBackground from '../../images/5023.png'

export default createUseStyles((theme: Theme) => ({
  containerFluid: {
    ...theme.layout.containerFluid,
    padding: '5px 0',
    backgroundImage: `url(${grassBackground})`,
    backgroundRepeat: 'repeat'
  },
  container: { ...theme.layout.container },
  footer: {
    display: 'flex',
    '& $list': {
      listStyleType: 'none',
      padding: '0px 15px',
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
      },
      '& $listItem': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '5px 10px',

        '& $listItemText': {
          display: 'flex',
          justifyContent: 'center',
          padding: '4px 6px',

          '& $listItemIconLink': {
            textDecoration: 'none',
            fontSize: 40,
            color: 'black',
            '@media(hover: hover) and (pointer: fine)': {
              '&:hover': { color: '#ffd24d' }
            },
            '@media (hover: none)': {
              '&:active': { color: '#ffd24d' }
            },
            marginRight: 20,
            '&:last-of-type': {
              marginRight: 0
            }
          }
        }
      }
    }
  },
  list: {},
  listItem: {},
  listItemText: {
    '& div': {
      '& a': {
        textDecoration: 'none',
        color: 'black',
        margin: '0.5em',
        '&:first-of-type': {
          marginLeft: 0
        },
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
    '& p': {
      ...theme.typography.body2,
      margin: '0.6em 0 0.6em 0',
      '&:first-of-type': {
        marginTop: '0.3em'
      },
      '&:last-of-type': {
        marginBottom: '0.3em'
      }
    }
  },
  listItemIconLink: {}
}))
