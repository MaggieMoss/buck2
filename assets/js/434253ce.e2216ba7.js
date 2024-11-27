"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3550],{30911:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(74848),i=t(15680);const a={id:"glossary",title:"Glossary of Terms",toc_max_heading_level:4},s=".buckconfig",c={id:"concepts/glossary",title:"Glossary of Terms",description:"The root of your project must contain a configuration file named",source:"@site/../docs/concepts/glossary.md",sourceDirName:"concepts",slug:"/concepts/glossary",permalink:"/docs/concepts/glossary",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"glossary",title:"Glossary of Terms",toc_max_heading_level:4},sidebar:"main",previous:{title:"Configurations",permalink:"/docs/concepts/configurations"},next:{title:"aquery",permalink:"/docs/users/commands/aquery"}},o={},l=[];function d(e){const n={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,i.useMDXComponents)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"buckconfig",children:".buckconfig"})}),"\n",(0,r.jsxs)(n.p,{children:["The root of your ",(0,r.jsx)(n.a,{href:"#project",children:"project"})," must contain a configuration file named\n",(0,r.jsx)(n.code,{children:".buckconfig"}),". Before executing, Buck2 reads this file to incorporate specified\ncustomizations. See ",(0,r.jsx)(n.a,{href:"/docs/concepts/buckconfig",children:".buckconfig"})," for more info."]}),"\n",(0,r.jsx)(n.h1,{id:"action",children:"Action"}),"\n",(0,r.jsxs)(n.p,{children:["An individual, cacheable, ideally hermetic command that's run during the\n",(0,r.jsx)(n.a,{href:"#buck-file",children:"build"}),". It takes ",(0,r.jsx)(n.a,{href:"#artifact",children:"artifacts"})," as inputs and produces\nother artifacts as outputs. An example command could be ",(0,r.jsx)(n.code,{children:"gcc -o main main.c"}),",\nwhich takes the artifact ",(0,r.jsx)(n.code,{children:"main.c"})," (a source file) and produces the artifact\ncalled ",(0,r.jsx)(n.code,{children:"main"})," (the compiled binary)."]}),"\n",(0,r.jsx)(n.h1,{id:"action-digest",children:"Action digest"}),"\n",(0,r.jsxs)(n.p,{children:["Encoded ",(0,r.jsx)(n.a,{href:"#action",children:"action"})," representation. It is sent to\n",(0,r.jsx)(n.a,{href:"#remote-execution-re",children:"remote execution"}),". Used among other things to retrieve\naction inputs and to check for cache hits"]}),"\n",(0,r.jsx)(n.h1,{id:"action-graph",children:"Action graph"}),"\n",(0,r.jsxs)(n.p,{children:["The dependency graph of all ",(0,r.jsx)(n.a,{href:"#action",children:"actions"})," belonging to a target: it can be\nqueried with ",(0,r.jsx)(n.code,{children:"buck2 aquery"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"artifact",children:"Artifact"}),"\n",(0,r.jsxs)(n.p,{children:["A single input or output of an ",(0,r.jsx)(n.a,{href:"#action",children:"action"}),". These are files that\nparticipate as inputs or outputs of a build and can be source files or build\noutputs. For more information, see the\n",(0,r.jsx)(n.a,{href:"https://buck2.build/docs/api/build/Artifact/",children:"Artifact API"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"attribute",children:"Attribute"}),"\n",(0,r.jsxs)(n.p,{children:["Declared by a ",(0,r.jsx)(n.a,{href:"#rule",children:"rule"})," and used to express the properties of a particular\ninstance of a rule to create a ",(0,r.jsx)(n.a,{href:"#target",children:"target"}),". For example, srcs, deps and\ncopts, which declare a target's source files, dependencies, and custom compiler\noptions, respectively. The available attributes for a target depend on its rule\ntype."]}),"\n",(0,r.jsx)(n.h1,{id:"buck-file",children:"BUCK file"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"BUCK"})," file (the name is configurable, some projects use ",(0,r.jsx)(n.code,{children:"TARGETS"}),") is the\nmain configuration file that tells Buck2 what to build, what their dependencies\nare, and how to build them. Buck2 takes a ",(0,r.jsx)(n.code,{children:"BUCK"})," file as input and evaluates the\nfile to declare ",(0,r.jsx)(n.a,{href:"#target",children:"targets"}),", which are then used to create a graph of\ndependencies and to derive the ",(0,r.jsx)(n.a,{href:"#action",children:"actions"})," that must be completed to\nbuild intermediate and final software outputs. A ",(0,r.jsx)(n.code,{children:"BUCK"})," file marks a directory\nand any sub-directories not containing a ",(0,r.jsx)(n.code,{children:"BUCK"})," file as a ",(0,r.jsx)(n.a,{href:"#package",children:"package"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"bxl",children:"BXL"}),"\n",(0,r.jsxs)(n.p,{children:["BXL (",(0,r.jsx)(n.a,{href:"https://buck2.build/docs/developers/bxl",children:"Buck eXtension Language"}),") scripts\nare written in ",(0,r.jsx)(n.a,{href:"#starlark",children:"Starlark"})," (a restricted subset of Python) and give\nintegrators the ability to inspect and interact directly with the buck2 graph."]}),"\n",(0,r.jsxs)(n.p,{children:["BXL scripts can query the ",(0,r.jsx)(n.a,{href:"#action-graph",children:"action graph"}),",\n",(0,r.jsx)(n.a,{href:"#configured-graph",children:"configured graph"}),", and\n",(0,r.jsx)(n.a,{href:"#unconfigured-graph",children:"unconfigured graph"}),". They can also create\n",(0,r.jsx)(n.a,{href:"#action",children:"actions"})," and trigger builds."]}),"\n",(0,r.jsx)(n.h1,{id:"cell",children:"Cell"}),"\n",(0,r.jsxs)(n.p,{children:["The directory tree of one or more Buck2 ",(0,r.jsx)(n.a,{href:"#package",children:"packages"}),". A Buck2 build can\ninvolve multiple cells. The cell root always contains a\n",(0,r.jsx)(n.a,{href:"#buckconfig",children:".buckconfig"}),", although the presence of a .buckconfig file doesn't\nin itself define a cell. Rather, the cells involved in a build are defined at\nthe time Buck2 is invoked; they are specified in the .buckconfig for the Buck\n",(0,r.jsx)(n.a,{href:"#project",children:"project"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Configurations consist of a set of 'constraint values' that are used to resolve\n",(0,r.jsx)(n.code,{children:"select"})," ",(0,r.jsx)(n.a,{href:"#attribute",children:"attributes"})," prior to evaluating ",(0,r.jsx)(n.a,{href:"#rule",children:"rule"}),"\nimplementations: the attribute takes the value of the first branch in the\n",(0,r.jsx)(n.code,{children:"select"})," that matches the configuration."]}),"\n",(0,r.jsxs)(n.p,{children:["Configurations are instantiated by rules that produce a ",(0,r.jsx)(n.code,{children:"PlatformInfo"}),"\n",(0,r.jsx)(n.a,{href:"#provider",children:"provider"}),". Once created, targets can receive their configuration\nthrough a variety of mechanisms, such as:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Inheritance - by default, when following a dependency edge A -> B, B inherits\nA's configuration."}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"default_target_platform"})," attribute and ",(0,r.jsx)(n.code,{children:"--target-platforms"})," command line\nflag."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#transition",children:"Transitions"})," (see below)."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Configurations allow a single target to exist in multiple variants in the\nconfigured graph (for example, to build a given binary at differing optimization\nlevels or targeting different CPU architectures)."}),"\n",(0,r.jsx)(n.h1,{id:"configured-graph",children:"Configured graph"}),"\n",(0,r.jsxs)(n.p,{children:["The configured target graph is generated by configuring target nodes in the\n",(0,r.jsx)(n.a,{href:"#unconfigured-graph",children:"unconfigured target graph"}),". That is, ",(0,r.jsx)(n.code,{children:"selects"})," are fully\nresolved and configurations applied. The configured graph includes information\nabout the ",(0,r.jsx)(n.a,{href:"#configuration",children:"configurations"})," and ",(0,r.jsx)(n.a,{href:"#transition",children:"transitions"}),"\ninvolved in building targets. The same target may appear in multiple different\nconfigurations (when printed, the configuration is after the target in\nparentheses)."]}),"\n",(0,r.jsx)(n.h1,{id:"constraint",children:"Constraint"}),"\n",(0,r.jsxs)(n.p,{children:["A constraint represents a property that may differ across different\n",(0,r.jsx)(n.a,{href:"#target",children:"target"})," or build contexts, such as CPU architecture, the version of a\nsystem-installed compiler, optimization level, which version of a particular\nlibrary to use, etc."]}),"\n",(0,r.jsx)(n.h1,{id:"daemon",children:"Daemon"}),"\n",(0,r.jsxs)(n.p,{children:["The Daemon process lives between invocations and is designed to allow for cache\nreuse between Buck2 invocations, which can considerably speed up builds. For\nmore information, see ",(0,r.jsx)(n.a,{href:"/docs/concepts/daemon",children:"Daemon (buckd)"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"dependency",children:"Dependency"}),"\n",(0,r.jsxs)(n.p,{children:["A directed edge between two ",(0,r.jsx)(n.a,{href:"#target",children:"targets"}),". A target ",(0,r.jsx)(n.code,{children:"A"})," can have a\ndependency on target ",(0,r.jsx)(n.code,{children:"B"}),", for example, if any ",(0,r.jsx)(n.code,{children:"dep"})," attribute of ",(0,r.jsx)(n.code,{children:"A"})," mentions\n",(0,r.jsx)(n.code,{children:"B"}),". A target's dependence on another target is determined by the\n",(0,r.jsx)(n.a,{href:"#visibility",children:"visibility"})," of the latter."]}),"\n",(0,r.jsx)(n.h1,{id:"execution-platform",children:"Execution platform"}),"\n",(0,r.jsxs)(n.p,{children:["A type of ",(0,r.jsx)(n.a,{href:"#rule",children:"rule"})," that includes information such as what execution types a\n",(0,r.jsx)(n.a,{href:"#target",children:"target"})," supports, which can be ",(0,r.jsx)(n.a,{href:"#remote-execution-re",children:"remote"}),", local,\nand ",(0,r.jsx)(n.a,{href:"#hybrid-execution",children:"hybrid"})," execution. Also, whether it supports cache\nuploads, which allows users to get cache hits for things that executed locally."]}),"\n",(0,r.jsx)(n.h1,{id:"hybrid-execution",children:"Hybrid execution"}),"\n",(0,r.jsxs)(n.p,{children:["Allows Buck2 to race local and remote execution and get whichever finishes first\n(unless there's a cache hit, then it will get output from cache). This can\nprovide substantial speedup by eliminating the overhead of going to\n",(0,r.jsx)(n.a,{href:"#remote-execution-re",children:"remote execution"})," when there is enough capacity to\nservice the build locally."]}),"\n",(0,r.jsx)(n.h1,{id:"isolation-dir",children:"Isolation dir"}),"\n",(0,r.jsxs)(n.p,{children:["Instances of Buck2 share a ",(0,r.jsx)(n.a,{href:"#daemon",children:"daemon"})," if and only if their isolation\ndirectory is identical. The isolation directory also influences the output paths\nprovided by Buck2."]}),"\n",(0,r.jsx)(n.h1,{id:"modifiers",children:"Modifiers"}),"\n",(0,r.jsxs)(n.p,{children:["It's a modification of a constraint from the existing\n",(0,r.jsx)(n.a,{href:"#configuration",children:"configuration"})," to obtain a new configuration. They provide a\nunified way to specify build settings on a ",(0,r.jsx)(n.a,{href:"#project",children:"project"}),",\n",(0,r.jsx)(n.a,{href:"#target",children:"target"}),", and command line level. It is intended to replace\n",(0,r.jsx)(n.a,{href:"#target-platform",children:"target platforms"})," and most use cases of\n",(0,r.jsx)(n.a,{href:"#buckconfig",children:".buckconfigs"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"package",children:"Package"}),"\n",(0,r.jsxs)(n.p,{children:["A directory that contains a Buck2 ",(0,r.jsx)(n.a,{href:"#buck-file",children:"BUCK file"})," and all source files\nbelonging to the same directory as the BUCK file, or any of its subdirectories\nthat do not contain a BUCK file themselves."]}),"\n",(0,r.jsx)(n.h1,{id:"prelude",children:"Prelude"}),"\n",(0,r.jsxs)(n.p,{children:["The prelude is a unique ",(0,r.jsx)(n.code,{children:".bzl"})," file located at ",(0,r.jsx)(n.code,{children:"prelude//prelude.bzl"}),". Buck2\nimplicitly loads all the symbols defined in the prelude whenever it loads a\n",(0,r.jsx)(n.a,{href:"#buck-file",children:(0,r.jsx)(n.code,{children:"BUCK"})})," file. Symbols defined outside the prelude can be imported\nvia a ",(0,r.jsx)(n.code,{children:"load()"})," statement."]}),"\n",(0,r.jsxs)(n.p,{children:["When you create a Buck2 project using ",(0,r.jsx)(n.code,{children:"buck2 init --git"}),", it will contain the\nsame prelude used internally at Meta by Buck2 users. It is viewable at\n",(0,r.jsx)(n.a,{href:"https://github.com/facebook/buck2/tree/main/prelude",children:"https://github.com/facebook/buck2/tree/main/prelude"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"project",children:"Project"}),"\n",(0,r.jsxs)(n.p,{children:["The Outermost directory where there is a ",(0,r.jsx)(n.a,{href:"#buckconfig",children:".buckconfig"}),": also known\nas the ",(0,r.jsx)(n.a,{href:"#cell",children:"root cell"}),". The .buckconfig for the project specifies the\n",(0,r.jsx)(n.a,{href:"#cell",children:"cells"})," that constitute the Buck2 project. Specifically, these cells are\nspecified in the '[cells]' section of the ",(0,r.jsx)(n.code,{children:".buckconfig"}),". All command invocations\nare executed from the project root."]}),"\n",(0,r.jsx)(n.h1,{id:"provider",children:"Provider"}),"\n",(0,r.jsxs)(n.p,{children:["Data returned from a ",(0,r.jsx)(n.a,{href:"#rule",children:"rule"})," function. It's the only way that information\nfrom this rule is available to other rules that depend on it (see\n",(0,r.jsx)(n.a,{href:"#dependency",children:"dependency"}),"). For more information, see\n",(0,r.jsx)(n.a,{href:"https://buck2.build/docs/rule_authors/writing_rules/#providers",children:"Providers"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"platform",children:"Platform"}),"\n",(0,r.jsxs)(n.p,{children:["A named set of ",(0,r.jsx)(n.a,{href:"#constraint",children:"constraints"}),", defining a specific runtime\nenvironment. E.g. ",(0,r.jsx)(n.code,{children:"cpu=x86_64, os=windows"})]}),"\n",(0,r.jsx)(n.h1,{id:"remote-execution-re",children:"Remote execution (RE)"}),"\n",(0,r.jsxs)(n.p,{children:["Distributed execution of ",(0,r.jsx)(n.a,{href:"#action",children:"actions"})," on remote workers. It can speed up\nbuilds significantly by scaling the nodes available for parallel actions, and by\ncaching action outputs across Buck2 users."]}),"\n",(0,r.jsx)(n.h1,{id:"rule",children:"Rule"}),"\n",(0,r.jsxs)(n.p,{children:["A rule consists of an attribute spec and an implementation, which is a\n",(0,r.jsx)(n.a,{href:"#starlark",children:"Starlark"})," function."]}),"\n",(0,r.jsxs)(n.p,{children:["The attribute spec declares what attributes the rule expects to receive. The\nrule implementation receives the ",(0,r.jsx)(n.a,{href:"#attribute",children:"attributes"})," of a ",(0,r.jsx)(n.a,{href:"#target",children:"target"}),"\nand the ",(0,r.jsx)(n.a,{href:"#provider",children:"providers"})," of its ",(0,r.jsx)(n.a,{href:"#dependency",children:"dependencies"}),". It can\ndeclare new ",(0,r.jsx)(n.a,{href:"#action",children:"actions"})," and ",(0,r.jsx)(n.a,{href:"#artifact",children:"artifacts"})," and must return\n",(0,r.jsx)(n.a,{href:"#provider",children:"providers"})," that can be used to pass data to its dependents or to\nBuck2 itself."]}),"\n",(0,r.jsxs)(n.p,{children:["Rules are instantiated in ",(0,r.jsx)(n.a,{href:"#buck-file",children:"BUCK files"})," to declare targets and set\ntheir attributes. The rule implementation is called when Buck2 needs its\nproviders, which can happen when the target is built, or when one of its\ndependents is."]}),"\n",(0,r.jsxs)(n.p,{children:["As an example, the ",(0,r.jsx)(n.code,{children:"cxx_binary"})," rule could be used to create a C++ binary, but\n",(0,r.jsx)(n.code,{children:"android_binary"})," rule would be used to create an Android APK"]}),"\n",(0,r.jsx)(n.h1,{id:"starlark",children:"Starlark"}),"\n",(0,r.jsxs)(n.p,{children:["Starlark is a dialect of Python originally developed by Google for the\n",(0,r.jsx)(n.a,{href:"https://bazel.build/rules/language",children:"Bazel build tool"}),". It is the configuration\nlanguage of the Buck2 build system and the language you use in ",(0,r.jsx)(n.code,{children:".bzl"})," and\n",(0,r.jsxs)(n.a,{href:"#buck-file",children:[(0,r.jsx)(n.code,{children:"BUCK"})," files"]})," to define and instantiate ",(0,r.jsx)(n.a,{href:"#rule",children:"rules"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["There are many reasons why Meta has chosen Starlark, as detailed in\n",(0,r.jsx)(n.a,{href:"https://developers.facebook.com/blog/post/2021/04/08/rust-starlark-library/",children:"The Rust Starlark library"}),"\narticle."]}),"\n",(0,r.jsxs)(n.p,{children:["The Buck2 project maintains and uses an open source\n",(0,r.jsx)(n.a,{href:"https://github.com/facebook/starlark-rust",children:"Starlark interpreter in Rust"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"subtarget",children:"Subtarget"}),"\n",(0,r.jsxs)(n.p,{children:["Collection of ",(0,r.jsx)(n.a,{href:"#provider",children:"providers"})," that can be accesed by name. The subtargets\ncan have their own subtargets as well, which can be accessed by chaining them,\ne.g.: ",(0,r.jsx)(n.code,{children:"buck2 build cell//foo:bar[baz][qux]"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"target",children:"Target"}),"\n",(0,r.jsxs)(n.p,{children:["An object that is defined in a ",(0,r.jsx)(n.a,{href:"#buck-file",children:"BUCK file"}),". Targets represent the\nbuildable units of a build from the perspective of the end user. Declared by\ninstantiating a ",(0,r.jsx)(n.a,{href:"#rule",children:"rule"})," with attributes. A target has\n",(0,r.jsx)(n.a,{href:"#dependency",children:"dependencies"}),", which are references to other targets."]}),"\n",(0,r.jsx)(n.h1,{id:"target-label",children:"Target label"}),"\n",(0,r.jsxs)(n.p,{children:["The identifier for a ",(0,r.jsx)(n.a,{href:"#target",children:"target"}),". Structured as\n",(0,r.jsx)(n.code,{children:"cell_alias//path/to/package:target"}),", where ",(0,r.jsx)(n.code,{children:"cell_alias//"})," maps to a\n",(0,r.jsx)(n.a,{href:"#cell",children:"cell root"})," path (as defined in the ",(0,r.jsx)(n.a,{href:"#buckconfig",children:"./buckconfig"})," of the\ncell this target belongs to), ",(0,r.jsx)(n.code,{children:"path/to/package"})," is the ",(0,r.jsx)(n.a,{href:"#package",children:"package"}),"\ndirectory that contains the ",(0,r.jsx)(n.a,{href:"#buck-file",children:"BUCK file"})," declaring the target\n(relative to the mapped cell alias), and ",(0,r.jsx)(n.code,{children:":target"})," is the target's name."]}),"\n",(0,r.jsx)(n.h1,{id:"target-pattern",children:"Target pattern"}),"\n",(0,r.jsxs)(n.p,{children:["A string that resolves to a set of ",(0,r.jsx)(n.a,{href:"#target",children:"targets"}),". They can be used as\narguments to commands such as ",(0,r.jsx)(n.code,{children:"buck2 build"})," and ",(0,r.jsx)(n.code,{children:"buck2 uquery"}),". They can also be\nused in the ",(0,r.jsx)(n.a,{href:"#visibility",children:"visibility"})," argument of a ",(0,r.jsx)(n.a,{href:"#rule",children:"rule"}),". For more\ninformation, see ",(0,r.jsx)(n.a,{href:"/docs/concepts/target_pattern",children:"Target pattern"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"target-platform",children:"Target platform"}),"\n",(0,r.jsxs)(n.p,{children:["Represents the ",(0,r.jsx)(n.a,{href:"#platform",children:"platform"})," that the final output is built for residing\nand executing. If buck2 is a chef, and the output is the meal, the target\nplatform would be the people that eat the meal."]}),"\n",(0,r.jsx)(n.h1,{id:"target-universe",children:"Target universe"}),"\n",(0,r.jsxs)(n.p,{children:["A set of configured targets and their transitive deps. In the context of cquery\nand build in the Buck2 CLI, any literals are resolved to all matching targets\nwithin the universe. Target universe can be passed explicitly on the Buck2 CLI\nvia ",(0,r.jsx)(n.code,{children:"--target-universe"}),". If omitted, the target universe will be inferred by\nconstructing a universe using all the target literals (and their transitive\ndeps) within the query string for cquery."]}),"\n",(0,r.jsx)(n.h1,{id:"transition",children:"Transition"}),"\n",(0,r.jsxs)(n.p,{children:["Allows the ",(0,r.jsx)(n.a,{href:"#configuration",children:"configuration"})," to change across a\n",(0,r.jsx)(n.a,{href:"#dependency",children:"dependency"})," edge. That is, normally, if ",(0,r.jsx)(n.a,{href:"#target",children:"target"})," A\ndepends on target B, then if the configuration for A is X, then B is configured\nusing X too. By using a transition, you can produce X to configure B instead."]}),"\n",(0,r.jsx)(n.h1,{id:"unconfigured-graph",children:"Unconfigured graph"}),"\n",(0,r.jsxs)(n.p,{children:["A graph of ",(0,r.jsx)(n.a,{href:"#target",children:"targets"})," before ",(0,r.jsx)(n.a,{href:"#configuration",children:"configurations"})," are\napplied. Can be queried via ",(0,r.jsx)(n.code,{children:"buck2 uquery"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"visibility",children:"Visibility"}),"\n",(0,r.jsxs)(n.p,{children:["Determines whether a ",(0,r.jsx)(n.a,{href:"#target",children:"target"})," can include another ",(0,r.jsx)(n.a,{href:"#target",children:"target"})," as\nits ",(0,r.jsx)(n.a,{href:"#dependency",children:"dependency"}),". For more information, see\n",(0,r.jsx)(n.a,{href:"/docs/concepts/visibility",children:"Visibility"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.useMDXComponents)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>u,mdx:()=>x,useMDXComponents:()=>h,withMDXComponents:()=>d});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){return function(n){var t=h(n.components);return r.createElement(e,a({},n,{components:t}))}},h=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=h(e.components);return r.createElement(l.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=h(t),u=i,f=d["".concat(s,".").concat(u)]||d[u]||p[u]||a;return t?r.createElement(f,c(c({ref:n},l),{},{components:t})):r.createElement(f,c({ref:n},l))}));function x(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=g;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[f]="string"==typeof e?e:i,s[1]=c;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);