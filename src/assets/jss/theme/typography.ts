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
  fontWeight: 400,
  color: palette.text.primary,
  lineHeight: '1.5em'
}

export default {
  h1: {
    ...typography,
    letterSpacing: -1,
    fontSize: 60
  },
  h2: {
    ...typography,
    letterSpacing: -0.85,
    fontSize: 48
  },
  h3: {
    ...typography,
    letterSpacing: -0.7,
    fontSize: 42
  },
  h4: {
    ...typography,
    letterSpacing: -0.5,
    fontSize: 36
  },
  h5: {
    ...typography,
    letterSpacing: -0.3,
    fontSize: 20
  },
  h6: {
    ...typography,
    letterSpacing: -0.2,
    fontSize: 18
  },
  subtitle1: {
    ...typography,
    letterSpacing: -0.1,
    fontSize: 16
  },
  subtitle2: {
    ...typography,
    fontSize: 14
  },
  body1: {
    ...typography,
    fontSize: 12
  },
  body2: {
    ...typography,
    fontSize: 10
  }
}
