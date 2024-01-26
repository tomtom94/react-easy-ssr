import { NormalCssProperties } from '.'
import palette from './palette'

export interface Typography {
  h1: NormalCssProperties
  h2: NormalCssProperties
  h3: NormalCssProperties
  h4: NormalCssProperties
  h5: NormalCssProperties
  h6: NormalCssProperties
  subtitle1: NormalCssProperties
  subtitle2: NormalCssProperties
  body1: NormalCssProperties
  body2: NormalCssProperties
}

const typography = {
  fontFamily: ['Playfair Display', 'serif'].join(','),
  fontSize: 12,
  fontWeight: 'normal',
  color: palette.text.primary,
  lineHeight: '1.5em'
}

export default {
  h1: {
    ...typography,
    fontSize: 60,
    letterSpacing: -0.9
  },
  h2: {
    ...typography,
    fontSize: 48,
    letterSpacing: -0.7
  },
  h3: {
    ...typography,
    fontSize: 40,
    letterSpacing: -0.5
  },
  h4: {
    ...typography,
    fontSize: 34,
    letterSpacing: -0.3
  },
  h5: {
    ...typography,
    fontSize: 26,
    letterSpacing: -0.1
  },
  h6: {
    ...typography,
    fontSize: 22,
    letterSpacing: 0
  },
  subtitle1: {
    ...typography,
    fontSize: 18,
    letterSpacing: 0.05
  },
  subtitle2: {
    ...typography,
    fontSize: 16,
    letterSpacing: 0.1
  },
  body1: {
    ...typography,
    fontSize: 14,
    letterSpacing: 0.2
  },
  body2: {
    ...typography,
    fontSize: 12,
    letterSpacing: 0.3
  }
}
