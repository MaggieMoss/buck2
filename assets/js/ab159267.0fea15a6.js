"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[852],{76242:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(74848),i=t(15680),a=t(28774);const o={},l="ValidationInfo",c={id:"api/build/ValidationInfo",title:"ValidationInfo",description:"Provider describing how a given target node should be validated. Validations are run when target with ValidationInfo provider is a transitive dependency of a requested target.",source:"@site/../docs/api/build/ValidationInfo.md",sourceDirName:"api/build",slug:"/api/build/ValidationInfo",permalink:"/docs/api/build/ValidationInfo",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"TransitiveSetJsonProjection",permalink:"/docs/api/build/TransitiveSetJsonProjection"},next:{title:"ValidationSpec",permalink:"/docs/api/build/ValidationSpec"}},d={},s=[{value:"ValidationInfo.validations",id:"validationinfovalidations",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,i.useMDXComponents)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"validationinfo",children:"ValidationInfo"})}),"\n",(0,r.jsxs)(n.p,{children:["Provider describing how a given target node should be validated. Validations are run when target with ",(0,r.jsx)(n.code,{children:"ValidationInfo"})," provider is a transitive dependency of a requested target."]}),"\n",(0,r.jsx)(n.h2,{id:"validationinfovalidations",children:"ValidationInfo.validations"}),"\n",(0,r.jsx)("pre",{class:"language-python",children:(0,r.jsxs)("code",{children:["ValidationInfo.validations: list[",(0,r.jsx)(a.default,{to:"/docs/api/build/ValidationSpec",children:"ValidationSpec"}),"]"]})}),"\n",(0,r.jsxs)(n.p,{children:["List of ",(0,r.jsx)(n.code,{children:"ValidationSpec"})," values each representing a single validation."]})]})}function u(e={}){const{wrapper:n}={...(0,i.useMDXComponents)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>b,useMDXComponents:()=>p,withMDXComponents:()=>s});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),s=function(e){return function(n){var t=p(n.components);return r.createElement(e,a({},n,{components:t}))}},p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},f="mdxType",v={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(t),u=i,f=s["".concat(o,".").concat(u)]||s[u]||v[u]||a;return t?r.createElement(f,l(l({ref:n},d),{},{components:t})):r.createElement(f,l({ref:n},d))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[f]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);