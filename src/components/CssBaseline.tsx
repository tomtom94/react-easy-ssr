import React, { FC, ReactNode } from 'react'

import cssBaseline from '../assets/jss/components/cssBaselineStyle'

interface Props {
  children?: ReactNode
}

const CssBaseline: FC<Props> = ({ children, ...props }) => {
  cssBaseline(props)
  return <>{children}</>
}

export default CssBaseline
