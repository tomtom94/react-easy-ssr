# ⚛ React boilerplate app with SSR

React App not initiated with CRA `create-react-app`, that's for junior at school ;)

Webpack 4 installed manually. In dev mode `webpack-dev-server` isn't used. Because we are using live reload thanks to `webpack-dev-middleware` & `webpack-hot-middleware` modules.

The app is SSR Server Side Rendering, and we use `redux-saga`, `loadable-component`, `react-jss` and `Typescript` but not a hardcore level of typescript.

Check out this app in live [react-easy-ssr.herokuapp.com](https://react-easy-ssr.herokuapp.com)

## Why do we make such a complicated setup ?

Well you can use a Framework to do all of this, but to me you are locking yourself behind walls.
You can use `Next.js` or `Gatsby.js` but you will loose some powerful React functions.
React is a library, and you are gonna put yourself in a fucking framework. Which is great by the way ;)

## Do you want to maintain this repo ?

Yes you can do whatever you want, to train yourself.
You just need to follow the main guidelines of this project : To give the simplest example how modern apps in React make a SSR

## Getting started

Clone the repo

```git
git clone https://github.com/tomtom94/react-easy-ssr.git
```

```git
cd react-easy-ssr
```

## Start in dev mode

```npm
npm install
```

Run dev mode with

```npm
npm run dev
```

it's gonna start an hot dev middleware with an express server ;) ready to work `http://localhost:3000`

## Start in production mode

### With Node.js

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
npm start
```

or

```npm
npm run start
```

;) it's gonna start the only one SSR express server out of the box for internet `http://localhost:3000` or environment port used.

### With Docker

```docker
docker build -t react-easy-ssr .
```

```docker
docker run -p 80:80 react-easy-ssr
```

Then open `http://localhost:80`

## Must know about the app

You wanna work on the application ? it's better to use prettier and eslint. Just note by default prettier don't touch `.ts` and `.tsx` extension files, [you must make a speacial manipulation in Visual Studio Code](https://levelup.gitconnected.com/setting-up-eslint-with-prettier-typescript-and-visual-studio-code-d113bbec9857?) in your `settings.json`

### Checks to do sometimes

- Check typescript `npm run tsc`

- Check eslint `npm run lint`

- Check prettier `npm run prettier`

### Components

The main rule is we don't use a frontend framework. All the components come from wherever we need it, but we are not stick to one. We are not stick to Material-ui, we are not stick to Bootstrap etc... However I am used to copy past source code of them. For example I made a copy past of the wonderfull Material-ui `<Grid />` which is so much powerful [check it out in this repo](https://github.com/tomtom94/react-easy-ssr/blob/master/src/components/Grid.tsx)

However [Styled-Components](https://styled-components.com/) is also installed if ever you wanna use it.

### imports possible in JSX

You can import files with ES6 in type

- .js .jsx .ts .tsx

- .png .jpe .jpeg .gif .ico

- .woff .woff2

- .css

Please note we don't use classical CSS style. We use [JSS](https://cssinjs.org/react-jss) (it means js in css).

### Disadvantages of redux-saga and react-jss

- With this you can't use the powerful React function unveiled in 2018 called `renderToNodeStream`. We must use the old one which is `rendeToString`.
Of course we make a classical `hydratation` afterwards.
You wanna know more about this ? check out this issue [on github](https://github.com/redux-saga/redux-saga/issues/2112)

- Another big issue is the split code, which affects also the SSR when it reads the app.
You wanna know more about this ? check out this issue [on github](https://github.com/gregberge/loadable-components/issues/473#issuecomment-561973760)

### Notes

I am using this frontend architecture for
- [footlivezone.com](https://www.footlivezone.com)
- [soccerlivezone.com](https://www.soccerlivezone.com)
- And also for other clients in Paris

If ever you encounter issues during critical moment at work just contact me ASAP
- [thomasdeveloper-react.com](https://www.thomasdeveloper-react.com)
