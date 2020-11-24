import { createUseStyles } from 'react-jss'
import { Theme } from '../theme'

export default createUseStyles((theme: Theme) => ({
  container: { ...theme.layout.container },
  box: { ...theme.layout.box },
  containerPage: {
    ...theme.layout.box,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    '& $containerText': { display: 'flex', flexDirection: 'column', alignItems: 'center' },
    '& $title': { ...theme.typography.h2 },
    '& $subtitle': { ...theme.typography.h5 },
    '& $exceptionImage': {
      maxWidth: '100%',
      height: 'auto',
      margin: '20px 0 20px 0'
    }
  },
  title: {},
  subtitle: {},
  containerText: {},
  exceptionImage: {},
  fontSpinner: {
    fontSize: 35,
    color: theme.palette.common.black
  },
  spinner: {
    animation: '$spin 2s linear infinite'
  },
  '@keyframes spin': {
    '100%': { transform: 'rotate(360deg)' }
  }
}))
