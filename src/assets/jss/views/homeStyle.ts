import { createUseStyles } from 'react-jss'
import { Theme } from '../theme'

export default createUseStyles((theme: Theme) => ({
  container: { ...theme.layout.container },
  box: { ...theme.layout.box, flexDirection: 'column', justifyContent: 'flex-start' },
  title: { ...theme.typography.h3, margin: 0 },
  subtitle: { ...theme.typography.h5, margin: 0 },
  page: {
    '& > p': {
      ...theme.typography.body1,
      margin: '0 0 20px 0',
      '&:first-of-type': {
        margin: '20px 0 20px 0'
      },
      '&:last-of-type': {
        margin: '20px 0 0 0'
      }
    },
    '& a': {
      textDecoration: 'none',
      color: 'black',
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
  }
}))
