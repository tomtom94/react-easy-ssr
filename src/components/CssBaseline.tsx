import React, { FC, ReactChild } from 'react'

import cssBaseline from '../assets/jss/components/cssBaselineStyle'

interface Props {
  children?: ReactChild
}

const CssBaseline: FC<Props> = ({ children, ...props }) => {
  cssBaseline(props)
  return <>{children}</>
}

export default CssBaseline
