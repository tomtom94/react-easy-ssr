import transition, { Transition } from './transition'
import breakpoints, { breakpointValues, BreakpointsKeys, Breakpoints } from './breakpoints'
import spacing, { Spacing } from './spacing'
import layout, { Layout } from './layout'
import palette, { Palette } from './palette'
import typography, { Typography } from './typography'
import { Properties as CSSProperties } from 'csstype'

export type NormalCssProperties = CSSProperties<string | number>

export interface Theme {
  transition: Transition
  palette: Palette
  spacing: Spacing
  breakpoints: Breakpoints
  layout: Layout
  typography: Typography
}

const theme: Theme = {
  transition,
  spacing: (coef) => spacing(coef),
  breakpoints: {
    up: (key: BreakpointsKeys) => breakpoints('up', key),
    down: (key: BreakpointsKeys) => breakpoints('down', key),
    values: breakpointValues,
    keys: ['xs', 'sm', 'md', 'lg', 'xl']
  },
  layout,
  palette,
  typography
}

export default theme
