import { createUseStyles } from 'react-jss'
import { Theme } from '../theme'

export default createUseStyles((theme: Theme) => ({
  container: { ...theme.layout.container },
  box: { ...theme.layout.box, flexDirection: 'column', justifyContent: 'flex-start' },
  message: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 20,
    '& $errorMessage': {
      display: 'flex',
      alignItems: 'center',
      minWidth: 200,
      backgroundColor: theme.palette.error,
      padding: '10px 25px',
      '& span': {
        fontSize: 40,
        marginRight: 15
      }
    }
  },
  errorMessage: {},
  title: { ...theme.typography.h3, margin: 0, letterSpacing: -1 },
  subtitle: { ...theme.typography.h5, margin: 0, letterSpacing: -1 },
  listMovies: {
    margin: '20px 0 0 0',
    padding: 0,
    '& li': {
      listStyleType: 'none',
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
      },
      margin: '0 0 20px 0',
      backgroundColor: '#eee',
      '&:last-of-type': {
        margin: '0 0 0 0'
      },
      '& $movieJacket': {
        display: 'flex',
        justifyContent: 'center',
        '& img': {
          width: 200
        }
      },
      '& $movieDetails': {
        '& h2': { ...theme.typography.h4, margin: 0, letterSpacing: -1 },
        padding: '20px 30px'
      }
    }
  },
  movieJacket: {},
  movieDetails: {}
}))
