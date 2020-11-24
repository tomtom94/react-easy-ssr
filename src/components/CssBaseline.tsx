import React, { FC, ReactChild } from 'react'
import { useTheme } from 'react-jss'

import cssBaseline from '../assets/jss/components/cssBaselineStyle'

interface Props {
  children?: ReactChild
}

const CssBaseline: FC<Props> = props => {
  const theme = useTheme()
  cssBaseline({ theme })
  const { children } = props
  return <>{children}</>
}

export default CssBaseline
