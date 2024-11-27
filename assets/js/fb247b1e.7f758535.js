"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6864],{19841:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=r(74848),o=r(15680);const a={id:"gc"},l="A Moving Garbage Collector",s={id:"developers/starlark/gc",title:"A Moving Garbage Collector",description:"This page describes a two-space garbage collector that can deal with cycles.",source:"@site/../docs/developers/starlark/gc.generated.md",sourceDirName:"developers/starlark",slug:"/developers/starlark/gc",permalink:"/docs/developers/starlark/gc",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"gc"},sidebar:"main",previous:{title:"Environments",permalink:"/docs/developers/starlark/environment"},next:{title:"Heaps and Heap References",permalink:"/docs/developers/starlark/heaps"}},i={},c=[{value:"A worked example",id:"a-worked-example",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.useMDXComponents)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"a-moving-garbage-collector",children:"A Moving Garbage Collector"})}),"\n",(0,t.jsx)(n.p,{children:"This page describes a two-space garbage collector that can deal with cycles."}),"\n",(0,t.jsx)(n.p,{children:"In Starlark, this pattern is used both when doing a real garbage collection, and\nwhen freezing. For both cases, it starts out with a memory block, which has\npointers referring to things inside it, and ends up with a new memory block with\nequivalent pointers inside it. However, only pointers reachable from outside the\noriginal memory block are available in the new memory block. The garbage\ncollector can deal with cyclic data structures and the time spent is\nproportional to the amount of live data in the heap (memory that is dropped is\nnot even visited)."}),"\n",(0,t.jsx)(n.h2,{id:"a-worked-example",children:"A worked example"}),"\n",(0,t.jsx)(n.p,{children:"Given a heap with the following layout:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'X := Data("world")\nY := Data("hello", X, Y)\nZ := Data("universe")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["All of ",(0,t.jsx)(n.code,{children:"X"}),", ",(0,t.jsx)(n.code,{children:"Y"})," and ",(0,t.jsx)(n.code,{children:"Z"})," are memory locations. The ",(0,t.jsx)(n.code,{children:"Y"})," memory location has both\nsome data of its own (",(0,t.jsx)(n.code,{children:'"hello"'}),") and two pointers (",(0,t.jsx)(n.code,{children:"X"})," and ",(0,t.jsx)(n.code,{children:"Y"})," itself)."]}),"\n",(0,t.jsxs)(n.p,{children:["The pointers from outside the heap into the heap are known as ",(0,t.jsx)(n.em,{children:"roots"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Assuming, in the above example, that ",(0,t.jsx)(n.code,{children:"Y"})," is the only root, then, since ",(0,t.jsx)(n.code,{children:"Y"})," is\nused from outside, ",(0,t.jsx)(n.code,{children:"Y"})," must be moved to the new memory block. Consequently, the\ndata ",(0,t.jsx)(n.code,{children:"X"})," needs to be copied, but ",(0,t.jsx)(n.code,{children:"Z"})," can be dropped."]}),"\n",(0,t.jsx)(n.p,{children:"Following are the required steps for using a garbage collector:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To copy ",(0,t.jsx)(n.code,{children:"Y"}),", allocate a value in the new heap ",(0,t.jsx)(n.code,{children:"A"})," with a sentinel value in it\n(that that sentinel is called a ",(0,t.jsx)(n.code,{children:"Blackhole"}),"). Then, turn ",(0,t.jsx)(n.code,{children:"Y"})," into a\n",(0,t.jsx)(n.code,{children:"Forward(A)"})," pointer, so that if anyone else in this cycle tries to collect\n",(0,t.jsx)(n.code,{children:"Y"}),' they immediately "forward" to the new value and the data from ',(0,t.jsx)(n.code,{children:"Y"})," is\ngrabbed so its pointers can be traversed. That results in the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'X := Data("world")\nY := Forward(A)\nZ := Data("universe")\n\nA := Blackhole\n'})}),"\n",(0,t.jsxs)(n.p,{children:["With ",(0,t.jsx)(n.code,{children:'Data("hello", X, Y)'})," as the current item being processed."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Walk the pointers of the current value, performing a garbage collection on\neach of them. To copy ",(0,t.jsx)(n.code,{children:"Y"}),", it can be seen that ",(0,t.jsx)(n.code,{children:"Y"})," points at a ",(0,t.jsx)(n.code,{children:"Forward(A)"}),"\nnode, so there's no need to do anything. To copy ",(0,t.jsx)(n.code,{children:"X"}),", follow the process\nstarting at step 1, but for ",(0,t.jsx)(n.code,{children:"X"})," (which ends up at ",(0,t.jsx)(n.code,{children:"B"}),"). Performing that move\nleads to the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'X := Forward(B)\nY := Forward(A)\nZ := Data("universe")\n\nA := Blackhole\nB := Data("world")\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Replace all the pointers with the forwarded value, and write it back over the\n",(0,t.jsx)(n.code,{children:"Blackhole"})," in ",(0,t.jsx)(n.code,{children:"A"}),". This gives the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'X := Forward(B)\nY := Forward(A)\nZ := Data("universe")\n\nA := Data("hello", B, A)\nB := Data("world")\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Adjust any roots pointing at ",(0,t.jsx)(n.code,{children:"Y"})," to point at ",(0,t.jsx)(n.code,{children:"A"})," and throw away the original\nheap, which produces the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'A := Data("hello", B, A)\nB := Data("world")\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These above four steps successfully garbage collects a cyclic data structure,\nwhile preserving the cycles and getting rid of the unused data."})]})}function h(e={}){const{wrapper:n}={...(0,o.useMDXComponents)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},15680:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>j,useMDXComponents:()=>h,withMDXComponents:()=>d});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},a.apply(this,arguments)}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),d=function(e){return function(n){var r=h(n.components);return t.createElement(e,a({},n,{components:r}))}},h=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=h(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=h(r),p=o,u=d["".concat(l,".").concat(p)]||d[p]||m[p]||a;return r?t.createElement(u,s(s({ref:n},c),{},{components:r})):t.createElement(u,s({ref:n},c))}));function j(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=g;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);