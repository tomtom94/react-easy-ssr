import { createUseStyles } from 'react-jss'
import { Theme } from '../theme'

export default createUseStyles((theme: Theme) => ({
  container: { ...theme.layout.container },
  box: { ...theme.layout.box, flexDirection: 'column', justifyContent: 'flex-start' },
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
      backgroundColor: '#fffeee',
      '&:last-of-type': {
        margin: '0 0 0 0'
      },
      '& $movieJacket': {
        display: 'flex',
        justifyContent: 'center',
        '& img': {
          width: 200,
          height: 300
        }
      },
      '& $movieDetails': {
        '& h2': { ...theme.typography.h4, margin: 0, letterSpacing: -1, lineHeight: '2.5rem' },
        '& p': { ...theme.typography.subtitle2, margin: '1rem 0 0 0', lineHeight: '1.3rem' },
        padding: '20px 30px'
      }
    }
  },
  movieJacket: {},
  movieDetails: {}
}))
