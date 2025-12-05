# ⚛ Ultra fast React boilerplate App with SSR (no Next.js used)

<img src="https://s1.qwant.com/thumbr/0x0/a/6/0907f0dc9f264507f87bd9e432db837ad058c8e565a07897fd2194c0a0873c/react-logo.png?u=https%3A%2F%2Fdaviseford.com%2Fblog%2Fpublic%2Fimg%2Fthumbnails%2Fmisc%2Freact-logo.png&q=0&b=1&p=0&a=0" width="100" alt="react"> <img src="https://s2.qwant.com/thumbr/0x380/e/6/a169601f165c89b10d94397e1f14ec4ccf40aec54061944b7ea8fb673563a5/1*xQCjgB2DVqhtqGoGw9E6TQ.png?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F2400%2F1*xQCjgB2DVqhtqGoGw9E6TQ.png&q=0&b=1&p=0&a=0" width="100" alt="webpack"> <img src="https://s2.qwant.com/thumbr/0x0/7/8/a90851441b2db05ae94e2ab8bb05a95330f319896e6589f7fe3f59f91ec669/babel_logo_in_react_js_best_practices_2016-1453212218011.png?u=http%3A%2F%2Fblog-assets.risingstack.com%2F2016%2FJan%2Fbabel_logo_in_react_js_best_practices_2016-1453212218011.png&q=0&b=1&p=0&a=0" width="120" alt="babel"> <img src="https://s1.qwant.com/thumbr/0x0/8/7/13bf8174f749ce452e6efaff7b2da4da691d8a5d5069c35d7b33f2fe80776b/jss-logo-2B9BC9020D-seeklogo.com.png?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FJ%2Fjss-logo-2B9BC9020D-seeklogo.com.png&q=0&b=1&p=0&a=0" width="100" alt="jss"> <img src="https://s1.qwant.com/thumbr/474x266/3/7/0509a7fe34d85f91138425088080ea3837a446c9fb0d869440219c333f4f20/OIP.6DMfZHtarN6LsCVFfTwBcgHaEK.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%2Fid%2FOIP.6DMfZHtarN6LsCVFfTwBcgHaEK%3Fpid%3DApi&q=0&b=1&p=0&a=0" width="200" alt="jss"> <img src="https://raw.githubusercontent.com/gregberge/loadable-components/master/resources/loadable-components.png" width="100" alt="jss">

<img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/gifs/wave.gif" width="15" alt="star github"> Hello, thanks to give me a star for this project.

## Introduction

React App with SSR Server Side Rendering. Webpack 5 installed manually. In dev mode we use live reload thanks to `webpack-dev-middleware` & `webpack-hot-middleware` modules.

Main modules used are `@reduxjs/toolkit`, `@loadable/component`, `react-refresh`, `react-jss` and `typescript`.

This project is accompanied with a [free and easy to use CI/CD](#Continuous-Integration-and-Continuous-Delivery) with Github Actions and Scaleway.

Checkout this app in live [https://reacteasyssrjckf9fbl-reacteasyssrfront.functions.fnc.fr-par.scw.cloud](https://reacteasyssrjckf9fbl-reacteasyssrfront.functions.fnc.fr-par.scw.cloud) (this is a free sleepy server, around 20 seconds to wake up)

## Table of contents

- [Motivations](#motivations)
- [Getting started](#getting-started)
  - [Requirements](#requirements)
  - [Start in dev mode](#start-in-dev-mode)
  - [Start in production mode](#start-in-production-mode)
    - [With Node.js](#with-nodejs)
    - [With Docker](#with-docker)
- [Must know about the app](#must-know-about-the-app)
  - [Components](#components)
  - [Data-fetching and SSR](#data-fetching-and-ssr)
  - [ES6 Imports possible in JSX](#es6-imports-possible-in-jsx)
  - [Continuous Integration and Continuous Delivery](#continuous-integration-and-continuous-delivery)
  - [Checks to do sometimes](#checks-to-do-sometimes)
- [Notes](#notes)

## Motivations

This project is about Server-Side Rendering (SSR). Building an isomorphic application that runs on both the server and the client is not an easy task. This boilerplate repository helps simplify and streamline that process.

<img src="illustration-SSR.png" width="auto" alt="jss">

## Getting started

Clone the repo

```git
git clone https://github.com/tomtom94/react-easy-ssr.git
```

```git
cd react-easy-ssr
```

### Requirements

Node.js version v23.5.0 minimum (because we need to use the [js optional chaining operator](https://node.green/#ES2020)). Hopefully you got `nvm` command already installed (best way to install node), hence just do

```nvm
nvm use
```

it's gonna use the `.nvmrc` file with v23.5.0

### Start in dev mode

Get prepared with the env vars

```sh
cp .env-development .env
```

```npm
npm install
```

Run dev mode with

```npm
npm run dev
```

it's gonna start an hot dev middleware with an express server ;) ready to work `http://localhost:3000`

### Start in production mode

#### With Node.js

```npm
npm install
```

Write in your cloud provider the following environment variables `BACKEND_BASE_URL` & `STATIC_FILES_URL`

Run build mode with

```npm
npm run build
```

it's gonna build in `dist/`

Then run in production mode

```npm
npm run start
```

it's gonna start the only one SSR express server out of the box for internet `http://localhost:3000` or environment port used.

#### With Docker

```docker
docker build -t react-easy-ssr .
```

```docker
docker run -p 80:80 react-easy-ssr
```

Then open `http://localhost:80`

To understand how it works, you need to be familiar with the [production deployment Github workflow](https://github.com/tomtom94/react-easy-ssr/blob/master/.github/workflows/build-and-deploy-to-scaleway.yaml).

This workflow operates as follows:

- First run `npm run build`
- Next, copy the client output from `./dist/client` to `./public/static`
- Then, build the static container image with this file `./public/Dockerfile` and push it to a registry
- After that, build the server container image with this file `./Dockerfile` and push it to a registry
- Finally, run the both images on a cloud provider.

## Must know about the app

### Components

The main rule is we don't use a frontend framework. All components come from wherever we need them, but we are not limited to just one source. No `material-ui` and no `bootstrap` installed etc...

`react-jss`, `style-components` and `fontawesome` modules are installed if ever you wanna use them.

The main goal is to care of them during the SSR in order to avoid a FOUC (Flash Of Unstyled Components)

Please note we don't use classical CSS style, we use [JSS](https://cssinjs.org/react-jss) (it means js in css). `material-ui` module also uses `react-jss` this is why we didn't installed `material-ui` else it would be stupid to generate twice the `react-jss` stylesheet on the SSR, and inefficiente to make an ultra fast App.

Either you install `material-ui` plus `tailwind` and you make all your css components with it (which is recommended if you do this for big company), or you get free and just install `react-jss` like we did.

Let's see how we manage it in our client side entry point [index.tsx](https://github.com/tomtom94/react-easy-ssr/blob/master/src/index.tsx).

```React
useEffect(() => {
  const jssStyles = document.querySelector('#jss-server-side')
  if (jssStyles?.parentNode) {
    jssStyles.parentNode.removeChild(jssStyles)
  }
  const fontAwesomeCssStyles = document.querySelector('#fontawesome-server-side')
  if (fontAwesomeCssStyles?.parentNode) {
    fontAwesomeCssStyles.parentNode.removeChild(fontAwesomeCssStyles)
  }
}, [])
```

We simply kill them from the DOM, no need of them once the server page is displayed.

### Data-fetching and SSR

Let's see how we fetch our data to feed our redux store. You can find this code in the `<Movies />` [component](https://github.com/tomtom94/react-easy-ssr/blob/master/src/views/Movies/index.tsx).

```react
const { data, error, isLoading, isSuccess, isError } = useGetMoviesQuery(undefined)
```

Its hook is gonna be used by either the SSR or CSR, however the second one won't fetch if the first already did.

This way our App is able to fetch data on the server & client side independantly.

Let's see how it's been done in our express [server](https://github.com/tomtom94/react-easy-ssr/blob/master/src/server/index.tsx).

```node
/**
 * Step 1 trigger all React hooks during the initial renderToString call.
 */
renderToString(jsx())

/**
 * Step 2 wait for as many apiSlices as are configured in your store.
 */
await Promise.all(store.dispatch(moviesApiSlice.util.getRunningQueriesThunk()))

/**
 * Step 3 render all the HTML from React with the populated data using renderToPipeableStream.
 */
const { pipe, abort } = renderToPipeableStream(
  <JssProvider jss={jss} registry={sheets} generateId={generateId} classNamePrefix="app-">
    {sheet.collectStyles(extractor.collectChunks(jsx(helmetContext)))}
  </JssProvider>,
  {
    onShellReady() {
      ...
    },
    onShellError(error) {
      ...
    },
    onAllReady() {
      ...
    },
    onError(error) {
      ...
    }
  }
)
```

### ES6 Imports possible in JSX

Webpack setup only allows us to import files with ES6 in type

- .js .jsx .ts .tsx
- .png .jpe .jpeg .gif .ico
- .woff .woff2
- .css (remember `react-jss` generates its own stylesheet via its own plugins, not via webpack loaders)

You can add more Webpack `loader` to your project...

### Continuous Integration and Continuous Delivery

When pushing or merging on master branch, you can trigger Github Actions with a commit message that includes `#major`, `#minor` or `#patch`.

Example of commit message in order to start a deployment :

```git
git commit -m "#major this is a big commit"
```

```git
git commit -m "#minor this is a medium commit"
```

```git
git commit -m "#patch this is a tiny commit"
```

### Checks to do sometimes

- Check typescript `npm run tsc`
- Check eslint `npm run lint`
- Check prettier `npm run prettier`

## Notes

If ever you wanna brainstorm, download my resume you are gonna find my phone number

- [thomasdeveloper-react.com](https://www.thomasdeveloper-react.com)
