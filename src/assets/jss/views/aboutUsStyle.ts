import { createUseStyles } from 'react-jss'
import { Theme } from '../theme'

export default createUseStyles((theme: Theme) => ({
  container: { ...theme.layout.container },
  box: { ...theme.layout.box, flexDirection: 'column', justifyContent: 'flex-start' },
  title: { ...theme.typography.h3, margin: 0, letterSpacing: -1 },
  subtitle: { ...theme.typography.h5, margin: 0, letterSpacing: -1 },
  page: {
    '& p': {
      ...theme.typography.body2,
      margin: '0 0 20px 0',
      '&:first-of-type': {
        margin: '20px 0 20px 0'
      },
      '&:last-of-type': {
        margin: '20px 0 0 0'
      }
    }
  }
}))
