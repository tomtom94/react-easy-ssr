# ⚛ React boilerplate app with SSR

<img src="https://s1.qwant.com/thumbr/0x0/a/6/0907f0dc9f264507f87bd9e432db837ad058c8e565a07897fd2194c0a0873c/react-logo.png?u=https%3A%2F%2Fdaviseford.com%2Fblog%2Fpublic%2Fimg%2Fthumbnails%2Fmisc%2Freact-logo.png&q=0&b=1&p=0&a=0" width="100" alt="react"> <img src="https://s2.qwant.com/thumbr/0x380/e/6/a169601f165c89b10d94397e1f14ec4ccf40aec54061944b7ea8fb673563a5/1*xQCjgB2DVqhtqGoGw9E6TQ.png?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F2400%2F1*xQCjgB2DVqhtqGoGw9E6TQ.png&q=0&b=1&p=0&a=0" width="100" alt="webpack"> <img src="https://s2.qwant.com/thumbr/0x0/7/8/a90851441b2db05ae94e2ab8bb05a95330f319896e6589f7fe3f59f91ec669/babel_logo_in_react_js_best_practices_2016-1453212218011.png?u=http%3A%2F%2Fblog-assets.risingstack.com%2F2016%2FJan%2Fbabel_logo_in_react_js_best_practices_2016-1453212218011.png&q=0&b=1&p=0&a=0" width="120" alt="babel"> <img src="https://s1.qwant.com/thumbr/0x0/8/7/13bf8174f749ce452e6efaff7b2da4da691d8a5d5069c35d7b33f2fe80776b/jss-logo-2B9BC9020D-seeklogo.com.png?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FJ%2Fjss-logo-2B9BC9020D-seeklogo.com.png&q=0&b=1&p=0&a=0" width="100" alt="jss"> <img src="https://s1.qwant.com/thumbr/700x0/1/3/fadead1ef131e117581618fe92a6d62d674ab25d68b4f1772e100b69a3ea7a/Redux-Saga-Logo-Landscape.png?u=https%3A%2F%2Fraw.githubusercontent.com%2Fmskims%2Fredux-saga-in-korean%2Fmaster%2Flogo%2F0800%2FRedux-Saga-Logo-Landscape.png&q=0&b=1&p=0&a=0" width="200" alt="jss"> <img src="https://raw.githubusercontent.com/gregberge/loadable-components/master/resources/loadable-components.png" width="100" alt="jss">


## Introduction

React App with SSR. Webpack 4 installed manually. In dev mode we use live reload thanks to `webpack-dev-middleware` & `webpack-hot-middleware` modules.

The other main modules used are `redux-saga`, `loadable-component`, `react-jss` and `Typescript`.

Check out this app in live [react-easy-ssr.herokuapp.com](https://react-easy-ssr.herokuapp.com)

## Table of contents

- [Motivations](#motivations)
- [Contributors and mainteners](#Contributors-and-mainteners)
- [Getting started](#Getting-started)
  - [Start in dev mode](#Start-in-dev-mode)
  - [Start in production mode](#Start-in-production-mode)
    - [With Node.js](#With-Nodejs)
    - [With Docker](#With-Docker)
- [Must know about the app](#Must-know-about-the-app)
  - [Checks to do sometimes](#Checks-to-do-sometimes)
  - [Components](#Components)
  - [ES6 Imports possible in JSX](#ES6-Imports-possible-in-JSX)
  - [Disadvantages of redux-saga and react-jss](#Disadvantages-of-redux-saga-and-react-jss)
  - [I want to use renderToNodeStream to make a top notch app](#I-want-to-use-renderToNodeStream-to-make-a-top-notch-app)
- [Notes](#Notes)

## Motivations

Why do we make such a complicated setup ?

Well you can use a Framework to do all of this, but to me you are locking yourself behind walls.
You can use `Next.js` or `Gatsby.js` but you will loose some powerful React functions.

React is a library, then I would say don't put yourself in a fucking framework. Which is great by the way ;)

Below the list of disadvantages of frameworks

- The `React-router`module : you won't be able to handle this wonderful module, hmmm so bad you can cry :sob: :sob: :sob:
- You won't have access to what happens on the Server Side, hmmm so bad, just go to [this page and you are done mate](https://github.com/tomtom94/react-easy-ssr/blob/master/src/server/index.tsx) :flushed: :flushed: :flushed:
- According to `Next.js` you can just install `redux-thunk` not the other ones, hmmm so bad how can I play with `redux-saga`or `redux-observable` ? :rage: :rage: :rage:
- You are gonna use a upper-layer module of React. What happens if one of them make an upgrade but not the other one :cold_sweat: :cold_sweat: :cold_sweat: (this is the cold sweat smiley)
- You won't be able to touch the webpack compilation and all the parameters (what if you want to put the polyfills in dynamic imports because modern browsers don't need them you make win 119kb at opening time). How can you manage the complex module `workbox-webpack-plugin` to make a PWA, apparently it's already all done by Next.js [look at that this messy code](https://github.com/vercel/next.js/blob/canary/examples/progressive-web-app/next.config.js), I doubt it's done like you want. Look at this poor guy, it took him 2 years (from 2017 to 2019 lol) to make something special works with an easy webpack plugin [check the github issue](https://github.com/vercel/next.js/issues/3444) :grin: :grin: :grin:
- You won't ever be able to use `renderToNodeStream` with Next.js & Gatsby.js forget it. You will only be able to use the old one React function `renderToString`, [so bad just check this github issue on their roadmap](https://github.com/vercel/next.js/issues/1209) and for [Gatsby.js they are even not talking about this check their issues](https://github.com/gatsbyjs/gatsby/issues?q=is%3Aissue+renderToNodeStream+). To me you can't make a switch to use one function or the other just with a boolean parameter true or false. It'll need you to change a part of the architecture of the app, and also some modules you are using may not be compatible with (`redux-saga` and `react-jss` for example)
- Do you find other reasons why not to use a framework ? make a contribution and commit something here

I am making this because we need to make lobbying us, the developers. Upper-layer module of React are kind of side effect of open source community perfectionism. We are making upper-layer module of upper-layer module WTF ?

## Contributors and mainteners

You can make a PR Pull Request whenever you want, you just need minimum 2 people (you and someone else) to validate your PR in order to merge it on the master branch. You don't even need the administrator to validate your PR.

Please just follow the main guidelines of this project => give the simplest example how modern apps in React make a SSR.
Node.js and React are enough complicated like that :smiley: :smiley: :smiley:

## Getting started

Clone the repo

```git
git clone https://github.com/tomtom94/react-easy-ssr.git
```

```git
cd react-easy-ssr
```

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

You wanna work on the application ?

it's recommended to use `prettier` and `eslint` on you IDE (Visual Studio Code for example). Just note by default prettier don't touch `.ts` and `.tsx` extension files, [you must make a speacial manipulation in Visual Studio Code](https://levelup.gitconnected.com/setting-up-eslint-with-prettier-typescript-and-visual-studio-code-d113bbec9857?) in your `settings.json`

You also better use another search engine sometimes. `Google.com` is enough. And enough is enough. We have a good search engine in Europe (finance by the European Investment Bank at 25 million in 2015) just use `Qwant.com` at least when you search for easy stuff, this is a good start. Moreover this is a french one ;) just use [Qwant.com](https://qwant.com)

### Checks to do sometimes

- Check typescript `npm run tsc`
- Check eslint `npm run lint`
- Check prettier `npm run prettier`

### Components

The main rule is we don't use a frontend framework. All the components come from wherever we need it, but we are not stick to one. We are not stick to Material-ui, we are not stick to Bootstrap etc... However I am used to copy past source code of them. For example I made a copy past of the wonderfull Material-ui `<Grid />` which is so much powerful [check it out in this repo](https://github.com/tomtom94/react-easy-ssr/blob/master/src/components/Grid.tsx)

However [Styled-Components](https://styled-components.com/) is also installed if ever you wanna use it. There also is fontawesome which is installed.

### ES6 Imports possible in JSX

The Webpack setup only allows us to import files with ES6 in type

- .js .jsx .ts .tsx
- .png .jpe .jpeg .gif .ico
- .woff .woff2
- .css

But you can add more Webpack `loader` to your project

Please note we don't use classical CSS style. We use [JSS](https://cssinjs.org/react-jss) (it means js in css).

### Some disadvantages

- With this configuration can't use the powerful React function unveiled in 2018 called `renderToNodeStream`. We must use the old one which is (from 2015) `rendeToString`. But no worries bro 90% of React websites are on the old one.
List of modules not compatible with `renderToNodeStream` (I am telling you the ones I am sure of, this is not a full list)
  - `redux-saga` check out this issue [on github](https://github.com/redux-saga/redux-saga/issues/2112)
  - `react-jss` check out this issue [on github](https://github.com/cssinjs/jss/issues/807)
  - `redux-observable` check out this issue [on github](https://github.com/redux-observable/redux-observable/issues?q=is%3Aissue+is%3Aopen+rendertonodestream)

- Another big issue is the split code, this is normal behavior no worries ;).
The first time your server (frontend) reads one of your page it'll be blind of redux actions. I can't explain you why but this is so much interesting try to investigate yourself (use Postman and check if you have data in your DOM, turn off and on your server check in Postman again)
You wanna know more about this ? check out this issue [on github](https://github.com/gregberge/loadable-components/issues/473#issuecomment-561973760). Hopefully we use the split code option `webpackPrefetch` which allows the server to read all the app by itself without having someone to open page per page. Understand this and you understand all about split code ;)

### I want to use renderToNodeStream to make a top notch app

Well then you must use a `redux-thunk` and/or a `apollographql` which is gonna give you easy promises to handle on the server side. And don't use `react-jss`, just use a classical SASS, LESS or CSS style. And you are good to go

## Notes

If ever you encounter issues during critical moment at work just contact me ASAP, download my resume you are gonna find my phone number

- [thomasdeveloper-react.com](https://www.thomasdeveloper-react.com)
