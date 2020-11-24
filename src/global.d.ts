declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production'
    BROWSER: boolean
  }
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>

  const src: string
  export default src
}

interface Window {
  browserHistory: any
  __PRELOADED_STATE__: any
  adsbygoogle: any
  canRunAds: boolean
  fbAsyncInit: any
}

declare let FB: any
declare let gapi: any
