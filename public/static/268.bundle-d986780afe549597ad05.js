"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[268],{311:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(7294),i=n(4184),a=n.n(i),o=n(9100),c=["children","id","alignContent","alignItems","className","container","direction","item","justify","xs","sm","md","lg","xl","spacing","wrap","zeroMinWidth"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var m=(0,o.QM)((function(e){return u(u({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return f.forEach((function(t){var r=e.spacing(t);0!==r&&(n["spacing-".concat("xs","-").concat(t)]={margin:"-".concat(g(r,2)),width:"calc(100% + ".concat(g(r),")"),"& > $item":{padding:g(r,2)}})})),n}(e)),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={},i={};d.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(i[t]={},!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object.assign(e,r):Object.assign(e,i,p({},t.breakpoints.up(n),r))}(t,e,n),t}),{}))}));const b=function(e){var t,n=e.children,i=e.id,o=e.alignContent,l=void 0===o?"stretch":o,u=e.alignItems,f=void 0===u?"stretch":u,d=e.className,g=e.container,b=void 0!==g&&g,x=e.direction,y=void 0===x?"row":x,h=e.item,v=void 0!==h&&h,O=e.justify,j=void 0===O?"flex-start":O,w=e.xs,S=void 0!==w&&w,E=e.sm,P=void 0!==E&&E,D=e.md,C=void 0!==D&&D,W=e.lg,_=void 0!==W&&W,I=e.xl,k=void 0!==I&&I,M=e.spacing,N=void 0===M?0:M,R=e.wrap,L=void 0===R?"wrap":R,z=e.zeroMinWidth,A=void 0!==z&&z,B=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,c),G=m(B),H=a()(G.root,(p(t={},G.container,b),p(t,G.item,v),p(t,G.zeroMinWidth,A),p(t,G["spacing-xs-".concat(String(N))],b&&0!==N),p(t,G["direction-xs-".concat(String(y))],"row"!==y),p(t,G["wrap-xs-".concat(String(L))],"wrap"!==L),p(t,G["align-items-xs-".concat(String(f))],"stretch"!==f),p(t,G["align-content-xs-".concat(String(l))],"stretch"!==l),p(t,G["justify-xs-".concat(String(j))],"flex-start"!==j),p(t,G["grid-xs-".concat(String(S))],!1!==S),p(t,G["grid-sm-".concat(String(P))],!1!==P),p(t,G["grid-md-".concat(String(C))],!1!==C),p(t,G["grid-lg-".concat(String(_))],!1!==_),p(t,G["grid-xl-".concat(String(k))],!1!==k),t),d);return r.createElement("div",s({className:H},i&&{id:i},n&&{children:n}))}},868:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(7294),i=n(6458),a=n(405),o=n(311);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u=(0,n(9100).QM)((function(e){return{container:s({},e.layout.container),box:s(s({},e.layout.box),{},{flexDirection:"column",justifyContent:"flex-start"}),title:s(s({},e.typography.h3),{},{margin:0,letterSpacing:-1}),subtitle:s(s({},e.typography.h5),{},{margin:0,letterSpacing:-1}),page:{"& p":s(s({},e.typography.body2),{},{margin:"0 0 20px 0","&:first-of-type":{margin:"20px 0 20px 0"},"&:last-of-type":{margin:"20px 0 0 0"}})}}}));var p=["children","routeComponent"];const f=function(e){e.children;var t=e.routeComponent,n=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,p),c=u(n),s=((0,i.I0)(),(0,i.v9)((function(e){return e.app})),t.location),l=(s.pathname,s.search,"Home page"),f="Welcome";return r.createElement(r.Fragment,null,r.createElement(a.q,null,r.createElement("title",null,l),r.createElement("meta",{name:"description",content:f})),r.createElement("div",{className:c.box},r.createElement("div",{className:c.container},r.createElement(o.Z,{container:!0,spacing:2},r.createElement(o.Z,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.createElement("h1",{className:c.title},l),r.createElement("h1",{className:c.subtitle},f),r.createElement("div",{className:c.page},r.createElement("p",null,"React Easy SSR"),r.createElement("p",null,"In this repo, all the configuration is about Server Side Rendering"),r.createElement("p",null,"We use renderToString on the server side to generate the DOM and make it download, then we make a React hydratation when the client (the bundle.js files in the ",'<script src="bundle.js">'," DOM) has been downloaded by the user."),r.createElement("p",null,"Main modules : Webpack, Typescript, React, Redux-saga, React-jss, Loadable-components."),r.createElement("p",null,"The code architecture is home made, and is been made to be as simplest as possible (which means the less code the better, and also the less files the better)"),r.createElement("p",null,"React Server side rendering is very complicated to understand, I have been installing this architecture for big companies, just enjoy.")))))))}}}]);