import palette from './palette'

export interface Typography {
  h1: any
  h2: any
  h3: any
  h4: any
  h5: any
  h6: any
  subtitle1: any
  subtitle2: any
  body1: any
  body2: any
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
