import palette from './palette'

export interface Typography {
  h1: Record<string, string | number | Record<string, string | number>>
  h2: Record<string, string | number | Record<string, string | number>>
  h3: Record<string, string | number | Record<string, string | number>>
  h4: Record<string, string | number | Record<string, string | number>>
  h5: Record<string, string | number | Record<string, string | number>>
  h6: Record<string, string | number | Record<string, string | number>>
  subtitle1: Record<string, string | number | Record<string, string | number>>
  subtitle2: Record<string, string | number | Record<string, string | number>>
  body1: Record<string, string | number | Record<string, string | number>>
  body2: Record<string, string | number | Record<string, string | number>>
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
    letterSpacing: -1.1
  },
  h2: {
    ...typography,
    fontSize: 48,
    letterSpacing: -0.9
  },
  h3: {
    ...typography,
    fontSize: 40,
    letterSpacing: -0.6
  },
  h4: {
    ...typography,
    fontSize: 34,
    letterSpacing: -0.4
  },
  h5: {
    ...typography,
    fontSize: 26,
    letterSpacing: -0.3
  },
  h6: {
    ...typography,
    fontSize: 22,
    letterSpacing: -0.2
  },
  subtitle1: {
    ...typography,
    fontSize: 18,
    letterSpacing: -0.1
  },
  subtitle2: {
    ...typography,
    fontSize: 16,
    letterSpacing: -0.05
  },
  body1: {
    ...typography,
    fontSize: 14,
    letterSpacing: 0
  },
  body2: {
    ...typography,
    fontSize: 12,
    letterSpacing: 0
  }
}
