export interface Palette {
  common: { white: string; black: string }
  text: { primary: string }
  background: {
    default: string
  }
  primary: string
  secondary: string
  warning: string
  info: string
  error: string
  success: string
}

export default {
  common: { white: '#fff', black: '#000' },
  text: { primary: '#000' },
  background: {
    default: 'transparent'
  },
  primary: '#edf4f5',
  secondary: '#ffd24d',
  warning: '#ff9800',
  info: '#ff9800',
  error: '#f44336',
  success: '#4caf50'
}
