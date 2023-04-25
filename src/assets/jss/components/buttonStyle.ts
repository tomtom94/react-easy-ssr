import { createUseStyles } from 'react-jss'
import { Theme } from '../theme'

export default createUseStyles((theme: Theme) => ({
  button: {
    ...theme.typography.body1,
    fontWeight: 500,
    fontFamily: 'Roboto,sans-serif',
    textDecoration: 'none',
    boxShadow: '0px 0px 0px 2px #9fb4f2',
    background: 'linear-gradient(to bottom, #7892c2 5%, #476e9e 100%)',
    backgroundColor: '#7892c2',
    borderRadius: 12,
    border: '1px solid #4e6096',
    display: 'inline-block',
    cursor: 'pointer',
    color: 'white',
    padding: '0.5em 1em',
    textShadow: '0px 1px 0px #283966',
    '&:focus': {
      outline: 0
    },
    '@media(hover: hover) and (pointer: fine)': {
      '&:hover': {
        background: 'linear-gradient(to bottom, #476e9e 5%, #7892c2 100%)',
        backgroundColor: '#476e9e'
      },
      '&:active': {
        position: 'relative',
        top: 1
      }
    },
    '@media (hover: none)': {
      '&:active': {
        position: 'relative',
        top: 1,
        background: 'linear-gradient(to bottom, #476e9e 5%, #7892c2 100%)',
        backgroundColor: '#476e9e'
      }
    }
  },
  eventModel: {
    boxShadow: 'none',
    border: 'none',
    background: 'none',
    backgroundColor: '#fff',
    color: 'black',
    textShadow: 'none',
    margin: 0,
    '@media(hover: hover) and (pointer: fine)': {
      '&:hover': {
        background: 'none',
        backgroundColor: '#eee'
      },
      '&:active': {
        position: 'relative',
        top: 1
      }
    },
    '@media (hover: none)': {
      '&:active': {
        position: 'relative',
        top: 1,
        background: 'none',
        backgroundColor: '#eee'
      }
    }
  }
}))
