"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7773],{1355:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(74848),n=r(15680);const o={},s="RFC: labels -> metadata attribute",i={id:"rfcs/attr-metadata",title:"RFC: labels -> metadata attribute",description:"This RFC proposes to add new builtin per target attribute: metadata, as",source:"@site/../docs/rfcs/attr-metadata.md",sourceDirName:"rfcs",slug:"/rfcs/attr-metadata",permalink:"/docs/rfcs/attr-metadata",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Context: labels",id:"context-labels",level:2},{value:"Context: package values",id:"context-package-values",level:2},{value:"Context: metadata we use or we need",id:"context-metadata-we-use-or-we-need",level:2},{value:"Proposal: metadata attribute",id:"proposal-metadata-attribute",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.useMDXComponents)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"rfc-labels---metadata-attribute",children:"RFC: labels -> metadata attribute"})}),"\n",(0,a.jsxs)(t.p,{children:["This RFC proposes to add new builtin per target attribute: ",(0,a.jsx)(t.code,{children:"metadata"}),", as\nreplacement for ",(0,a.jsx)(t.code,{children:"labels"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"context-labels",children:"Context: labels"}),"\n",(0,a.jsxs)(t.p,{children:["In buck1 we have ",(0,a.jsx)(t.code,{children:"labels"})," builtin rule attribute, which is a list of strings."]}),"\n",(0,a.jsxs)(t.p,{children:["In buck2 we have ",(0,a.jsx)(t.code,{children:"labels"})," attribute which is configured in prelude, it does not\nhave special meaning."]}),"\n",(0,a.jsx)(t.h2,{id:"context-package-values",children:"Context: package values"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"PACKAGE"})," files have a function: ",(0,a.jsx)(t.code,{children:"write_package_value(key, value)"}),", where a key\nis a word-dot-word string, and value is arbitrary starlark value which should be\nserializable as JSON."]}),"\n",(0,a.jsx)(t.h2,{id:"context-metadata-we-use-or-we-need",children:"Context: metadata we use or we need"}),"\n",(0,a.jsx)(t.p,{children:"There are several spaces where we use or need metadata to be stored in buck2\ntarget graph."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["fbcode uses per-package values to switch code to new clang\n(",(0,a.jsx)(t.a,{href:"https://www.internalfb.com/code/fbsource/%5Bef740e6f2610c64621f7547a3b46d54d32af8600%5D/fbcode/ownership/code_metadata/PACKAGE?lines=3",children:"example"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["testinfra wants to use ",(0,a.jsx)(t.code,{children:"PACKAGE"})," values to mark a set of folders to a logical\nlarger project"]}),"\n",(0,a.jsxs)(t.li,{children:["it is likely that per-target ",(0,a.jsx)(t.code,{children:"metadata"})," attribute should be used in\nconfiguration factory function."]}),"\n",(0,a.jsxs)(t.li,{children:["TD wants to declare CI trigger jobs per-target or per-package, and this logic\nis to be specified in ",(0,a.jsx)(t.code,{children:"BUCK"})," or ",(0,a.jsx)(t.code,{children:"PACKAGE"})," files \u2014 as metadata"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"proposal-metadata-attribute",children:"Proposal: metadata attribute"}),"\n",(0,a.jsxs)(t.p,{children:["Add builtin ",(0,a.jsx)(t.code,{children:"metadata"})," attribute to all the targets."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"metadata"})," has the same structure as package values: word-dot-word to arbitrary\nvalue serializable to JSON."]}),"\n",(0,a.jsx)(t.p,{children:"For example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'cxx_library(\n    name = "mylib",\n    metadata = {\n        "td.run_on_windows": True,\n    },\n)\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Metadata attribute is not configurable (means ",(0,a.jsx)(t.code,{children:"select"})," cannot be used)."]})]})}function u(e={}){const{wrapper:t}={...(0,n.useMDXComponents)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},15680:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>m,useMDXComponents:()=>u,withMDXComponents:()=>d});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){return function(t){var r=u(t.components);return a.createElement(e,o({},t,{components:r}))}},u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,h=d["".concat(s,".").concat(p)]||d[p]||f[p]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);