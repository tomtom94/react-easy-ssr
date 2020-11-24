import { createUseStyles } from 'react-jss'
import theme from '../theme'

export default createUseStyles({
  root: {
    display: 'flex'
  },
  app: {
    display: 'flex',
    flexFlow: 'column nowrap',
    minHeight: '100vh',
    width: '100%'
  },
  section: {
    display: 'flex',
    flex: '1 1 auto',
    padding: '30px 0',
    [theme.breakpoints.down('md')]: {
      padding: '20px 0'
    }
  }
})
