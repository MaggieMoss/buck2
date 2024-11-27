"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7877],{22044:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var t=r(74848),s=r(15680),i=r(28774);const a={},o="AnalysisResult",l={id:"api/bxl/AnalysisResult",title:"AnalysisResult",description:"The result of running an analysis in bxl.",source:"@site/../docs/api/bxl/AnalysisResult.md",sourceDirName:"api/bxl",slug:"/api/bxl/AnalysisResult",permalink:"/docs/api/bxl/AnalysisResult",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Actions",permalink:"/docs/api/bxl/Actions"},next:{title:"AqueryContext",permalink:"/docs/api/bxl/AqueryContext"}},c={},p=[{value:"AnalysisResult.as_dependency",id:"analysisresultas_dependency",level:2},{value:"AnalysisResult.providers",id:"analysisresultproviders",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",pre:"pre",...(0,s.useMDXComponents)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"analysisresult",children:"AnalysisResult"})}),"\n",(0,t.jsx)(n.p,{children:"The result of running an analysis in bxl."}),"\n",(0,t.jsx)(n.h2,{id:"analysisresultas_dependency",children:"AnalysisResult.as_dependency"}),"\n",(0,t.jsx)("pre",{class:"language-python",children:(0,t.jsxs)("code",{children:["def AnalysisResult.as_dependency(\n) -> ",(0,t.jsx)(i.default,{to:"/docs/api/build/Dependency",children:"dependency"})]})}),"\n",(0,t.jsxs)(n.p,{children:["Converts the analysis result into a ",(0,t.jsx)(n.code,{children:"dependency"}),". Currently, you can only get a ",(0,t.jsx)(n.code,{children:"dependency"})," without any transitions. This means that you cannot create an exec dep or toolchain from an analysis result. We may support other dependency transition types in the future. This is useful for passing in the results of ",(0,t.jsx)(n.code,{children:"ctx.analysis()"})," into anon targets."]}),"\n",(0,t.jsx)(n.p,{children:"Sample usage:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'def _impl_dependency(ctx):\n    node = ctx.configured_targets("root//bin:the_binary")\n    dependency = ctx.analysis(node).as_dependency()\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"analysisresultproviders",children:"AnalysisResult.providers"}),"\n",(0,t.jsx)("pre",{class:"language-python",children:(0,t.jsx)("code",{children:"def AnalysisResult.providers()"})}),"\n",(0,t.jsxs)(n.p,{children:["Access the providers of the rule. Returns a ",(0,t.jsx)(n.code,{children:"provider_collection"})," the same as accessing providers of dependencies within a rule implementation."]}),"\n",(0,t.jsx)(n.p,{children:"Sample usage:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'def _impl_providers(ctx):\n    node = ctx.configured_targets("root//bin:the_binary")\n    providers = ctx.analysis(node).providers()\n    ctx.output.print(providers[FooInfo])\n    providers = ctx.analysis("//:bin").providers()\n    ctx.output.print(providers[FooInfo])\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.useMDXComponents)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},15680:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>x,useMDXComponents:()=>d,withMDXComponents:()=>p});var t=r(96540);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=t.createContext({}),p=function(e){return function(n){var r=d(n.components);return t.createElement(e,i({},n,{components:r}))}},d=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(c.Provider,{value:n},e.children)},y="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),u=s,y=p["".concat(a,".").concat(u)]||p[u]||h[u]||i;return r?t.createElement(y,o(o({ref:n},c),{},{components:r})):t.createElement(y,o({ref:n},c))}));function x(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[y]="string"==typeof e?e:s,a[1]=o;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);