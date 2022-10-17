export type BreakpointsKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface BreakpointsValues {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

export interface Breakpoints {
  up: (key: BreakpointsKeys) => string
  down: (key: BreakpointsKeys) => string
  values: BreakpointsValues
  keys: BreakpointsKeys[]
}

export const breakpointValues: BreakpointsValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

export default (direction: 'up' | 'down', key: BreakpointsKeys) => {
  interface Keys {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  const keys = ['xs', 'sm', 'md', 'lg', 'xl'].reduce((acc, curr) => {
    let cssMedia
    if (direction === 'up') {
      cssMedia = `@media (min-width: ${breakpointValues[curr as BreakpointsKeys]}px)`
    }
    if (direction === 'down') {
      cssMedia = `@media (max-width: ${Math.max(0, breakpointValues[curr as BreakpointsKeys] - 0.02)}px)`
    }
    return Object.assign(acc, { [curr]: cssMedia })
  }, {} as Keys)

  return keys[key]
}
