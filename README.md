# ⚛ React boilerplate app with SSR

React App not initiated with CRA `create-react-app`, that's for junior at school ;)

Webpack 4 installed manually. In dev mode `webpack-dev-server` isn't used. Because we are using live reload thanks to `webpack-dev-middleware` & `webpack-hot-middleware` modules.

The app is SSR Server Side Rendering, and we use `redux-saga`, `loadable-component`, `react-jss` and `Typescript` but not a hardcore level of typescript.

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
- You won't be able to touch the webpack compilation and all the parameters (what if you want to put the polyfills in dynamic imports because modern browsers don't need them you make win 500mb at opening time). How can you manage the complex module `workbox-webpack-plugin` to make a PWA, apparently it's already all done by Next.js [look at that this messy code](https://github.com/vercel/next.js/blob/canary/examples/progressive-web-app/next.config.js), I doubt it's done like you want. Look at this poor guy, it took him 2 years (from 2017 to 2019 lol) to make something special works with an easy webpack plugin [check the github issue](https://github.com/vercel/next.js/issues/3444) :grin: :grin: :grin:
- You won't ever be able to use `renderToNodeStream` with Next.js & Gatsby.js forget it. You will only be able to use the old one React function `renderToString`, [so bad just check this github issue on their roadmap](https://github.com/vercel/next.js/issues/1209) and for [Gatsby.js they are even not talking about this check their issues](https://github.com/gatsbyjs/gatsby/issues?q=is%3Aissue+renderToNodeStream+). To me you can't make a switch to use one function or the other just with a boolean parameter true or false. It'll need you to change a part of the architecture of the app, and also some modules you are using may not be compatible with (`redux-saga` and `react-jss` for example)
- Do you find other reasons why not to use a framework ? make a contribution and commit something here

I am making this because we need to make lobbying us, the developers. Upper-layer module of React are kind of side effect of open source community perfectionism. We are making upper-layer module of upper-layer module WTF ?

## Contributors and mainteners

Yes you can do whatever you want, to train yourself.
You just need to follow the main guidelines of this project

To give the simplest example how modern apps in React make a SSR

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

### Checks to do sometimes

- Check typescript `npm run tsc`
- Check eslint `npm run lint`
- Check prettier `npm run prettier`

### Components

The main rule is we don't use a frontend framework. All the components come from wherever we need it, but we are not stick to one. We are not stick to Material-ui, we are not stick to Bootstrap etc... However I am used to copy past source code of them. For example I made a copy past of the wonderfull Material-ui `<Grid />` which is so much powerful [check it out in this repo](https://github.com/tomtom94/react-easy-ssr/blob/master/src/components/Grid.tsx)

However [Styled-Components](https://styled-components.com/) is also installed if ever you wanna use it.

### ES6 Imports possible in JSX

The Webpack setup only allows us to import files with ES6 in type

- .js .jsx .ts .tsx
- .png .jpe .jpeg .gif .ico
- .woff .woff2
- .css

But you can add more Webpack `loader` to your project

Please note we don't use classical CSS style. We use [JSS](https://cssinjs.org/react-jss) (it means js in css). There also is fontawesome which is installed.

### Disadvantages of redux-saga and react-jss

- With this you can't use the powerful React function unveiled in 2018 called `renderToNodeStream`. We must use the old one which is `rendeToString`.
Of course we make a classical `hydratation` afterwards.
You wanna know more about this ? check out this issue [on github](https://github.com/redux-saga/redux-saga/issues/2112)

- Another big issue is the split code, which affects also the SSR when it reads the app.
You wanna know more about this ? check out this issue [on github](https://github.com/gregberge/loadable-components/issues/473#issuecomment-561973760)

### I want to use renderToNodeStream to make a top notch app

Well then you must use a `redux-thunk` which is gonna give you easy promises to handle on the server side. And don't use `react-jss`, just use a classical SASS, LESS or CSS style. And you are good to go

## Notes

I am using this frontend architecture for

- [footlivezone.com](https://www.footlivezone.com)
- [soccerlivezone.com](https://www.soccerlivezone.com)
- And also for other clients in Paris

If ever you encounter issues during critical moment at work just contact me ASAP, download my resume you are gonna find my phone number

- [thomasdeveloper-react.com](https://www.thomasdeveloper-react.com)
