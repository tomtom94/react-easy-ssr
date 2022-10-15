# ⚛ Ultra fast React boilerplate App (with SSR)

<img src="https://s1.qwant.com/thumbr/0x0/a/6/0907f0dc9f264507f87bd9e432db837ad058c8e565a07897fd2194c0a0873c/react-logo.png?u=https%3A%2F%2Fdaviseford.com%2Fblog%2Fpublic%2Fimg%2Fthumbnails%2Fmisc%2Freact-logo.png&q=0&b=1&p=0&a=0" width="100" alt="react"> <img src="https://s2.qwant.com/thumbr/0x380/e/6/a169601f165c89b10d94397e1f14ec4ccf40aec54061944b7ea8fb673563a5/1*xQCjgB2DVqhtqGoGw9E6TQ.png?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F2400%2F1*xQCjgB2DVqhtqGoGw9E6TQ.png&q=0&b=1&p=0&a=0" width="100" alt="webpack"> <img src="https://s2.qwant.com/thumbr/0x0/7/8/a90851441b2db05ae94e2ab8bb05a95330f319896e6589f7fe3f59f91ec669/babel_logo_in_react_js_best_practices_2016-1453212218011.png?u=http%3A%2F%2Fblog-assets.risingstack.com%2F2016%2FJan%2Fbabel_logo_in_react_js_best_practices_2016-1453212218011.png&q=0&b=1&p=0&a=0" width="120" alt="babel"> <img src="https://s1.qwant.com/thumbr/0x0/8/7/13bf8174f749ce452e6efaff7b2da4da691d8a5d5069c35d7b33f2fe80776b/jss-logo-2B9BC9020D-seeklogo.com.png?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FJ%2Fjss-logo-2B9BC9020D-seeklogo.com.png&q=0&b=1&p=0&a=0" width="100" alt="jss"> <img src="https://s1.qwant.com/thumbr/700x0/1/3/fadead1ef131e117581618fe92a6d62d674ab25d68b4f1772e100b69a3ea7a/Redux-Saga-Logo-Landscape.png?u=https%3A%2F%2Fraw.githubusercontent.com%2Fmskims%2Fredux-saga-in-korean%2Fmaster%2Flogo%2F0800%2FRedux-Saga-Logo-Landscape.png&q=0&b=1&p=0&a=0" width="200" alt="jss"> <img src="https://raw.githubusercontent.com/gregberge/loadable-components/master/resources/loadable-components.png" width="100" alt="jss">

<img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/gifs/wave.gif" width="15" alt="star github"> Hello, thanks to give me a star for this project.

## Introduction

React App with SSR Server Side Rendering. Webpack 5 installed manually. In dev mode we use live reload thanks to `webpack-dev-middleware` & `webpack-hot-middleware` modules.

Main modules used are `redux-saga`, `loadable-component`, `react-jss` and `typescript`.

<img src="https://gifimage.net/wp-content/uploads/2017/10/new-icon-gif-animation-14.gif" width="25" alt="star github"> [Free and easy to use CI/CD](#Continuous-Integration-and-Continuous-Delivery) with Github Actions and Scaleway.

Check out this app in live [reacteasyssrjckf9fbl-reacteasyssrfront.functions.fnc.fr-par.scw.cloud](https://reacteasyssrjckf9fbl-reacteasyssrfront.functions.fnc.fr-par.scw.cloud)

## Table of contents

- [Motivations](#motivations)
- [Getting started](#Getting-started)
  - [Requirements](#Requirements)
  - [Start in dev mode](#Start-in-dev-mode)
  - [Start in production mode](#Start-in-production-mode)
    - [With Node.js](#With-Nodejs)
    - [With Docker](#With-Docker)
- [Must know about the app](#Must-know-about-the-app)
  - [Continuous Integration and Continuous Delivery](#Continuous-Integration-and-Continuous-Delivery)
  - [Checks to do sometimes](#Checks-to-do-sometimes)
  - [Components](#Components)
  - [Data-fetching and SSR](#Data-fetching-and-SSR)
  - [ES6 Imports possible in JSX](#ES6-Imports-possible-in-JSX)
  - [Disadvantages of redux-saga and react-jss](#Disadvantages-of-redux-saga-and-react-jss)
  - [I want to use renderToPipeableStream to make a top notch app](#I-want-to-use-renderToPipeableStream-to-make-a-top-notch-app)
- [Notes](#Notes)

## Motivations

All this project is turned about SSR Server Side Rendering. And this is not an easy task. This would be legitimate to wonder why do we make such a complicated setup ?

You can use a Framework to do all of this, but to me you are locking yourself behind walls.
You can use `Next.js` or `Gatsby.js` but you will loose some powerful React functions.

React is a library, then we would say don't put yourself in a framework. Which is great by the way ;)

Please find the list of disadvantages of frameworks

- The `React-router`module : you won't be able to handle this wonderful module, so bad with `Next.js` you create a file and it's added to your router automatically :sob:.
- You won't have access to what happen on the Server Side. Just go to [this project's page and you are done mate](https://github.com/tomtom94/react-easy-ssr/blob/master/src/server/index.tsx) :flushed:
- According to `Next.js` you can just install `redux-thunk` not the other ones, so bad how can we play with `redux-saga`or `redux-observable` ? :rage:
- You won't be able to touch the webpack compilation and all the parameters (what if you want to put the polyfills in dynamic imports because modern browsers don't need them you make win 119kb at opening time). How can you manage the complex module `workbox-webpack-plugin` to make a PWA, apparently it's already all done by Next.js [look at that this messy code](https://github.com/vercel/next.js/blob/canary/examples/progressive-web-app/next.config.js), we doubt it's done like you want. Look at this poor guy, it took him 2 years (from 2017 to 2019 lol) to make something special works with an easy webpack plugin [check the github issue](https://github.com/vercel/next.js/issues/3444) :grin:
- You won't ever be able to use `renderToPipeableStream` with Next.js & Gatsby.js forget it. You will only be able to use the old one React function `renderToString`, [so bad just check this github issue on their roadmap](https://github.com/vercel/next.js/issues/1209) and for [Gatsby.js they are even not talking about this check their issues](https://github.com/gatsbyjs/gatsby/issues?q=is%3Aissue+renderToPipeableStream+). To me you can't make a switch to use one function or the other just with a boolean parameter true or false. It requires you to change part of the App's architecture, and also some modules you are using may not be compatible with (`redux-saga` and `react-jss` for example but we'll see this that later)
- Do you find other reasons why not to use a framework ? make a contribution and commit something here

We are making this because we need to make lobbying us, the developers. Upper-layer module of React are kind of side effect of open source community perfectionism. We are making upper-layer module of upper-layer module WTF ?

## Getting started

Clone the repo

```git
git clone https://github.com/tomtom94/react-easy-ssr.git
```

```git
cd react-easy-ssr
```

### Requirements

Node.js version 16 minimum. Hopefully you got `nvm` command (best way to install node) already installed, hence just do

```nvm
nvm use
```

it's gonna use the `.nvmrc` file with v16.17.1

### Start in dev mode

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

Write in your server provider the environment variables `BACKEND_BASE_URL`

Run build mode with

```npm
npm run build
```

it's gonna build in `dist/`

Then run in production mode

```npm
npm run start
```

;) it's gonna start the only one SSR express server out of the box for internet `http://localhost:3000` or environment port used.

#### With Docker

```docker
docker build -t react-easy-ssr .
```

```docker
docker run -p 80:80 react-easy-ssr
```

Then open `http://localhost:80`

## Must know about the app

You better use a good search engine like [Qwant.com](https://qwant.com), don't use Google. please.

### Continuous Integration and Continuous Delivery

When pushing or merging on master branch, you can trigger Github Actions with a commit message that includes `#major`, `#minor` or `#patch`.

Example of commit message in order to start a deployment :

```git
git commit -m "#major this is a big commit"
```

```git
git commit -m "#patch this is a tiny commit"
```

### Checks to do sometimes

- Check typescript `npm run tsc`
- Check eslint `npm run lint`
- Check prettier `npm run prettier`

### Components

The main rule is we don't use a frontend framework. All components come from wherever we need it, but we are not stick to one. No need of `material-ui`, no need of `bootstrap` etc... However we are used to copy past source code from them. For example we made a copy past of the wonderfull `material-ui` `<Grid />` which is so much powerful [check it out in this repo](https://github.com/tomtom94/react-easy-ssr/blob/master/src/components/Grid.tsx). We don't use many components that generate their own css stylesheet, because we need to control this carefully in order to make the famous SSR.

`style-components` and `fontawesome` modules are also installed if ever you wanna use it. And yes we care of them for the SSR also.

Please note we don't use classical CSS style. We use [JSS](https://cssinjs.org/react-jss) (it means js in css). `material-ui` module also uses `react-jss` this is why we didn't installed `material-ui` else it would be stupid to generate twice the `react-jss` stylesheet on the SSR, and inefficiente to make an ultra fast App.

Either you install `material-ui` and you make all your css components with it (which is recommended if you do this for big company), or you get free and install `react-jss` like we did.

### Data-fetching and SSR

Let's see how we fetch our data to feed our redux store. You can find this code in the `<Movies />` [component](https://github.com/tomtom94/react-easy-ssr/blob/master/src/views/Movies/index.tsx).

```react
const willMount = useRef(true)
if (willMount.current && !process.env.BROWSER) {
  dispatch(triggerMovies('GET_MOVIES'))
  willMount.current = false
}

useEffect(() => {
  dispatch(triggerMovies('GET_MOVIES'))
  return () => {
    dispatch(clearMovies())
  }
}, [dispatch])
```

- 1st part is only for server side, we dispatch the redux action : with `useRef` you can be sure the action won't be trigger multiple times in an infinite loop.
- 2nd part is only for client side, we dispatch the redux action : but when you trigger this action there is a [redux-saga selector](https://github.com/tomtom94/react-easy-ssr/blob/master/src/store/reducers/selectors.ts) which will check if data hasn't been already fetched during 1st part, if yes no need to fetch again. And we clear the error if there are some before leaving the component.

This way your App is able to fetch data on the server & client side independantly.

### ES6 Imports possible in JSX

Webpack setup only allows us to import files with ES6 in type

- .js .jsx .ts .tsx
- .png .jpe .jpeg .gif .ico
- .woff .woff2
- .css (remember `react-jss` generates its own stylesheet via its own plugins, not via webpack loaders)

You can add more Webpack `loader` to your project...

### Some disadvantages

- With this configuration you can't easily use the powerful React function unveiled in `react` 17 called `renderToPipeableStream`. We must use the old one which is (from 2015) `rendeToString`. But no worries 99% of React Apps are on the old one `rendeToString`.
List of modules not compatible with `renderToPipeableStream` (We are telling you the ones we are sure of, this is not an exhaustive list). For example with `react-jss` check this issue [on github](https://github.com/cssinjs/jss/issues/807)

- Another important issue to know is the split code, the first time your frontend server reads one of your page it'll be blind of redux actions. This is so much interesting try to investigate yourself (use Postman and check if you have data in your redux store in the `__PRELOADED_STATE__` window attribute, turn off and on your server check again in Postman, then refresh again)
This is in fact a normal behavior check this issue [on github](https://github.com/gregberge/loadable-components/issues/473#issuecomment-561973760). After a new deployment the first time you render a page, data-fetching during SSR is something `loadable-component` could not carry about (because even your server is a casualty of split code). So the Google robot would not be able to treat a complete page in the DOM (this would be empty of data from the redux store except if another user has already opened this page before the Google robot) in this case only the client side will render. All the other times your page will open perfectly with data fetched. To conclude your app must always be able to render on the server & client side independantly.

Let's illustrate this last point with an example : you have 5 million pages to display with 5 React routes, each route renders a component which deals with 1 million different pages, you just have to open 1 page (by yourself or a crawler like Google robot, Bing robot etc...) and the other 999999 will render perfectly.

Please note, in the world there are approximately 10 big crawlers (Russian, American, European, Asian...) which will open a page around every 20 seconds each on your App, this is a statistic home made but quite reliable. Just watch by yourself in your Nginx router who opens your page it's written ;) This is something to take into account for your servers performances, internet network is crazy busy when you have 5 million pages for real in a `sitemap.xml`. Don't think Google robot would read your App if you just do CSR Client Side Rendering. You don't make loose time to crawlers if you wanna have a good SEO score in search engines, moreover if you have 5 million pages to crawl. 
According to my statistics I just said above this would take more than 3 years in the best case scenario for the Google robot to crawl all your 5 million pages this is why you can play with a parameter in your `sitemap.xml` files to set priorities in pages to crawl first.

### I want to use renderToPipeableStream to make a top notch app

Actually you can do it, but this would cost you too much computer power to aim the same goal. `redux-saga` needs to generate the dom fist via `renderToString` to get all its data fetched before finally rendering. `react-jss` it's the same also to make its stylesheets.

## Notes

If ever you wanna brainstorm, download my resume you are gonna find my phone number

- [thomasdeveloper-react.com](https://www.thomasdeveloper-react.com)
