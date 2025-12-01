import { HelmetServerState } from 'react-helmet-async'

export const pageFirstPart = (
  css: string,
  fontAwesomeCss: string,
  styleTags: string,
  helmet: Partial<HelmetServerState>
): string => `<!DOCTYPE html>
<html ${helmet?.htmlAttributes?.toString()}>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <link rel="stylesheet" type="text/css" href="${
      process.env.STATIC_FILES_URL ? `${process.env.STATIC_FILES_URL}/bundle.css` : `/bundle.css`
    }" />
    
    ${helmet?.title?.toString()}
    ${helmet?.meta?.toString()}
    ${helmet?.link?.toString()}
    ${styleTags}
    <style id="jss-server-side">${css}</style>
    <style id="fontawesome-server-side">${fontAwesomeCss}</style>
  </head>
  <body>
    <noscript>Sorry, your browser does not support JavaScript!</noscript>
    <div id="root">`

export const pageSecondPart = (store: string, scriptTags: string): string => `</div>
    <script>window.__PRELOADED_STATE__ = ${store}</script>
    ${scriptTags}
  </body>
</html>`
