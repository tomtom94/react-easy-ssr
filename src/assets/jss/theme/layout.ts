import breakpoints, { breakpointValues } from './breakpoints'
import spacing from './spacing'

export interface Layout {
  containerFluid: Record<string, string | number | undefined | Record<string, string | number | undefined>>
  container: Record<string, string | number | undefined | Record<string, string | number | undefined>>
  box: Record<string, string | number | undefined | Record<string, string | number | undefined>>
}

const containerFluid = {
  width: '100%',
  marginLeft: 'auto',
  boxSizing: 'border-box',
  marginRight: 'auto',
  paddingLeft: spacing(1),
  paddingRight: spacing(1),
  [breakpoints('up', 'sm')]: {
    paddingLeft: spacing(2),
    paddingRight: spacing(2)
  },
  [breakpoints('up', 'sm')]: {
    paddingLeft: spacing(3),
    paddingRight: spacing(3)
  },
  [breakpoints('up', 'md')]: {
    paddingLeft: spacing(4),
    paddingRight: spacing(4)
  }
}

const container = {
  width: '100%',
  marginLeft: 'auto',
  boxSizing: 'border-box',
  marginRight: 'auto',
  [breakpoints('up', 'xs')]: {
    maxWidth: Math.max(breakpointValues.xs, 444),
    paddingLeft: spacing(1),
    paddingRight: spacing(1)
  },
  [breakpoints('up', 'sm')]: {
    maxWidth: breakpointValues.sm,
    paddingLeft: spacing(3),
    paddingRight: spacing(3)
  },
  [breakpoints('up', 'md')]: {
    maxWidth: breakpointValues.md,
    paddingLeft: spacing(4),
    paddingRight: spacing(4)
  },
  [breakpoints('up', 'lg')]: {
    maxWidth: breakpointValues.lg
  },
  [breakpoints('up', 'xl')]: {
    maxWidth: breakpointValues.xl
  }
}

const box = {
  boxSizing: 'border-box',
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center'
}

export default {
  containerFluid,
  container,
  box
}
