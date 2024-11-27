"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5152],{83525:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=r(74848),t=r(15680);const i={},o=void 0,a={id:"rfcs/drafts/plugin-deps",title:"plugin-deps",description:"Plugin Deps",source:"@site/../docs/rfcs/drafts/plugin-deps.md",sourceDirName:"rfcs/drafts",slug:"/rfcs/drafts/plugin-deps",permalink:"/docs/rfcs/drafts/plugin-deps",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Plugin Deps",id:"plugin-deps",level:2},{value:"Background on Rust proc macros",id:"background-on-rust-proc-macros",level:3},{value:"Plugins deps",id:"plugins-deps",level:3},{value:"Using a target&#39;s plugin lists",id:"using-a-targets-plugin-lists",level:3},{value:"Creating a target&#39;s plugin lists",id:"creating-a-targets-plugin-lists",level:3},{value:"Example: Proc macros",id:"example-proc-macros",level:3},{value:"Alias",id:"alias",level:4}];function d(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.useMDXComponents)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"plugin-deps",children:"Plugin Deps"}),"\n",(0,s.jsx)(n.h3,{id:"background-on-rust-proc-macros",children:"Background on Rust proc macros"}),"\n",(0,s.jsxs)(n.p,{children:["Rust proc macros are compiler plugins. They are a special kind of crate that is\ncompiled to a dylib, which is then loaded by the compiler when another crate\ndepends on the proc macro. Notably, like all Rust crates, proc macros may also\nbe re-exported. This means that if there is a dependency chain like\n",(0,s.jsx)(n.code,{children:"bin -> lib -> proc_macro"}),", the proc macro must be made available when compiling\nthe binary, even though it does not appear directly in the dependencies."]}),"\n",(0,s.jsx)(n.p,{children:"Proc macros have posed a challenge to buck2, for two reasons:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Rust users generally expect to not have to distinguish between proc macros\nand normal crates when specifying their dependencies. This means it is not\neasily possible to make the ",(0,s.jsx)(n.code,{children:"lib -> proc_macro"})," edge an ",(0,s.jsx)(n.code,{children:"exec_dep"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bin"})," and ",(0,s.jsx)(n.code,{children:"lib"})," might end up with different exec platforms. This means that\neven if ",(0,s.jsx)(n.code,{children:"proc_macro"})," were to be correctly configured as an exec dep of\n",(0,s.jsx)(n.code,{children:"lib"}),", that configuration might be wrong for ",(0,s.jsx)(n.code,{children:"bin"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"FIXME: Other use cases for this feature"}),"\n",(0,s.jsx)(n.h3,{id:"plugins-deps",children:"Plugins deps"}),"\n",(0,s.jsx)(n.p,{children:'This RFC proposes introducing a concept of "plugin deps" to solve this problem.\nPlugin deps are deps that can be propagated up the build graph at configuration\ntime, instead of at analysis time. Here\'s what this looks like:'}),"\n",(0,s.jsxs)(n.p,{children:['First, plugin deps come in "kinds." Plugin kinds can be created like\n',(0,s.jsx)(n.code,{children:"MyKind = plugins.kind()"}),". These act as identifiers that can be used to divide\nall the possible plugin deps up however users need to."]}),"\n",(0,s.jsxs)(n.p,{children:["Each configured target has plugin lists: There is one list for each plugin kind.\nThe elements of these list are an ",(0,s.jsx)(n.em,{children:"unconfigured"})," target, together with a\n",(0,s.jsx)(n.code,{children:"should_propagate"})," bool. The same unconfigured target cannot appear more than\nonce. In other words, this is a ",(0,s.jsx)(n.code,{children:"HashMap<String, HashMap<Target, bool>>"}),". We\nneed to describe two things: How to ",(0,s.jsx)(n.em,{children:"use"})," these list, and how to ",(0,s.jsx)(n.em,{children:"create"})," them."]}),"\n",(0,s.jsx)(n.h3,{id:"using-a-targets-plugin-lists",children:"Using a target's plugin lists"}),"\n",(0,s.jsxs)(n.p,{children:["Using plugin lists is very simple: The rule sets ",(0,s.jsx)(n.code,{children:"uses_plugins = [MyKind]"})," when\ndeclared. Setting this make the elements of the plugin list for the given kind\nappear as exec deps on the configured nodes for this rule. This also means that\nthe plugins participate in exec dep resolution like all other exec deps."]}),"\n",(0,s.jsxs)(n.p,{children:["Analysis will then be able to access a list of the providers for each of the\nplugins via ",(0,s.jsx)(n.code,{children:"ctx.plugins[MyKind]"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"should_propagate"})," bool that is associated with each element of the list is\nignored at this stage."]}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-targets-plugin-lists",children:"Creating a target's plugin lists"}),"\n",(0,s.jsx)(n.p,{children:"Plugin lists are created by accumulating from two sources:"}),"\n",(0,s.jsxs)(n.p,{children:["The first of these is direct plugin deps. They are defined via a new\n",(0,s.jsx)(n.code,{children:'attrs.plugin_dep(kind = "foo")'}),". This attribute (like other deps), is set to a\nlabel when the target is declared. It then resolves as follows:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In the unconfigured graph: To the appropriate unconfigured target"}),"\n",(0,s.jsxs)(n.li,{children:["In the configured graph: To the label of the unconfigured target. In other\nwords, this will still be displayed in ",(0,s.jsx)(n.code,{children:"buck2 cquery -A"}),", but will not appear\nin the deps."]}),"\n",(0,s.jsx)(n.li,{children:"During analysis: Also to the unconfigured target label."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The target that appears in the ",(0,s.jsx)(n.code,{children:"plugin_dep"})," is added to the ",(0,s.jsx)(n.code,{children:"MyKind"})," plugin list\nwith ",(0,s.jsx)(n.code,{children:"should_propagate"})," set."]}),"\n",(0,s.jsxs)(n.p,{children:["The second way to add to the plugin list is by inheriting from regular deps.\nThis works as follows: Elements of the plugin lists for which the\n",(0,s.jsx)(n.code,{children:"should_propagate"})," value is true are made available to the immediate rdeps of a\nconfigured target. The rdep can use them by setting ",(0,s.jsx)(n.code,{children:"pulls_plugins = [MyKind]"}),"\nin the appropriate ",(0,s.jsx)(n.code,{children:"attrs.dep()"})," invocation. This will make the targets appear\nin the plugin list for the rdep with ",(0,s.jsx)(n.code,{children:"should_propagate"})," unset. Alternatively,\nthe rdep can set ",(0,s.jsx)(n.code,{children:"pulls_and_pushes_plugins = [MyKind]"})," to add the targets to the\nplugin lists with ",(0,s.jsx)(n.code,{children:"should_propagate"})," set to true. This enables transitive\npropagation further up the configured graph."]}),"\n",(0,s.jsx)(n.p,{children:"To decide later: Should we allow plugin rules to appear in regular/exec deps,\nwith no special behavior? I don't see why not."}),"\n",(0,s.jsx)(n.h3,{id:"example-proc-macros",children:"Example: Proc macros"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'RustProcMacro = plugins.kind()\n\nrust_proc_macro_propagation = rule(\n    impl = _propagation_impl,\n    attrs = {\n        "actual": attrs.plugin_dep(kind = RustProcMacro),\n    },\n)\n\nrust_library = rule(\n    impl = _similar_to_before, # See some notes below\n    attrs = {\n        "proc_macro": attrs.bool(default = False),  # Same as before\n        "deps": attrs.list(attrs.dep(pulls_and_pushes_plugins = [RustProcMacro])),\n        # Here we avoid `pulls_and_pushes` because we do not want to make these deps available to rdeps\n        "doc_deps": attrs.list(attrs.dep(pulls_plugins = [RustProcMacro])),\n    },\n    uses_plugins = [RustProcMacro]\n)\n\nrust_binary = rule(\n    impl = _similar_to_before, # See some notes below\n    attrs = {\n        "deps": attrs.list(attrs.dep(pulls_plugins = [RustProcMacro])),\n        "doc_deps": attrs.list(attrs.dep(pulls_plugins = [RustProcMacro])),\n    },\n    uses_plugins = [RustProcMacro]\n)\n\ndef _propagation_impl(ctx):\n    return [\n        DefaultInfo(default_outputs = []),\n        # During analysis for rust libraries, the providers for proc macros will appear in\n        # `ctx.plugins`. However, this includes the transitive and direct proc macro deps, as\n        # well as the transitive and direct proc macro doc-deps. Analysis needs to be able to\n        # distinguish between all of these though.\n        #\n        # This dummy provider is passed to allow for precisely that. Generally, it will be passed\n        # everywhere where the providers of Rust proc macros are currently passed. That ensures that\n        # analysis on `rust_library` and `rust_binary` have all the information they need about\n        # where the plugin "entered the dependency graph."\n        RustProcMacroMarker(ctx.attrs.actual),\n    ]\n\n### TARGETS\n\n# Expanded by macro\nrust_library(\n    name = "p1_REAL",\n    proc_macro = True,\n)\n\n# Expanded by macro\nrust_proc_macro_propagation(\n    name = "p1",\n    actual = ":p1_REAL",\n)\n\n# Expanded by macro\nrust_library(\n    name = "p2_REAL",\n    proc_macro = True,\n)\n\n# Expanded by macro\nrust_proc_macro_propagation(\n    name = "p2",\n    actual = ":p2_REAL",\n)\n\nrust_library(\n    name = "l",\n    deps = [":p1"],\n    doc_deps = [":p2"],\n)\n\nrust_binary(\n    name = "b",\n    deps = [":l"],\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Analysis for ",(0,s.jsx)(n.code,{children:":l"})," will see:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"deps"})," which contains only the ",(0,s.jsx)(n.code,{children:'RustProcMacroMarker("p")'})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"doc_deps"})," which contains only the ",(0,s.jsx)(n.code,{children:'RustProcMacroMarker("p2")'})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ctx.plugins[RustProcMacro]"})," which contains the providers of ",(0,s.jsx)(n.code,{children:":p1_REAL"})," and\n",(0,s.jsx)(n.code,{children:":p2_REAL"}),", correctly configured for the execution platform of ",(0,s.jsx)(n.code,{children:":l"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Analysis for ",(0,s.jsx)(n.code,{children:":b"})," will see:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"deps"})," which contain the providers of ",(0,s.jsx)(n.code,{children:"l"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ctx.plugins[RustProcMacro]"})," which contain the providers of ",(0,s.jsx)(n.code,{children:":p1_REAL"}),", also\ncorrectly configured for its own execution platform (which may be different\nfrom ",(0,s.jsx)(n.code,{children:":l"}),"'s)."]}),"\n",(0,s.jsxs)(n.p,{children:["Note that because ",(0,s.jsx)(n.code,{children:"rust_library"})," does not re-push doc deps, ",(0,s.jsx)(n.code,{children:":b"})," will not\nsee ",(0,s.jsx)(n.code,{children:":p2_REAL"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["As a result, the implementation of the ",(0,s.jsx)(n.code,{children:"rust_library"})," rule should not propagate\nthe providers of its proc macro deps (unlike its regular deps)."]}),"\n",(0,s.jsxs)(n.p,{children:["There is one downside to this solution: ",(0,s.jsx)(n.code,{children:"buck2 build :p"})," does absolutely none of\nthe things that the user is probably expecting. They need ",(0,s.jsx)(n.code,{children:"buck2 build :p_REAL"}),".\nThat's a bit sad. Thankfully directly building proc macros is not that important\na use case?"]}),"\n",(0,s.jsx)(n.h4,{id:"alias",children:"Alias"}),"\n",(0,s.jsxs)(n.p,{children:["It is already the case today that we can't use the normal ",(0,s.jsx)(n.code,{children:"alias"}),' rule on\ntoolchains. A similar situation crops up here, where aliasing a target that\npushes plugins causes the plugins to "get lost." The right solution to this is\nto probably allow ',(0,s.jsx)(n.code,{children:"plugins.ALL"})," as a special value on ",(0,s.jsx)(n.code,{children:"pulls_plugins"})," and\n",(0,s.jsx)(n.code,{children:"pulls_and_pushes_plugins"}),", and then set that for the alias rule."]})]})}function p(e={}){const{wrapper:n}={...(0,t.useMDXComponents)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},15680:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>c,MDXProvider:()=>h,mdx:()=>m,useMDXComponents:()=>p,withMDXComponents:()=>d});var s=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},i.apply(this,arguments)}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,s,t=function(e,n){if(null==e)return{};var r,s,t={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=s.createContext({}),d=function(e){return function(n){var r=p(n.components);return s.createElement(e,i({},n,{components:r}))}},p=function(e){var n=s.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},h=function(e){var n=p(e.components);return s.createElement(c.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},f=s.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=t,u=d["".concat(o,".").concat(h)]||d[h]||g[h]||i;return r?s.createElement(u,a(a({ref:n},c),{},{components:r})):s.createElement(u,a({ref:n},c))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[u]="string"==typeof e?e:t,o[1]=a;for(var c=2;c<i;c++)o[c]=r[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);