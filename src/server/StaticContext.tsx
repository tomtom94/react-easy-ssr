import React, { createContext, FC, ReactNode } from 'react'

export const StaticContext = createContext<null | {
  statusCode?: number
}>(null)

type Props = {
  children: ReactNode
  staticContext: { statusCode: number }
}

const StaticContextProvider: FC<Props> = ({ children, staticContext }) => {
  return <StaticContext.Provider value={staticContext}>{children}</StaticContext.Provider>
}

export default StaticContextProvider
