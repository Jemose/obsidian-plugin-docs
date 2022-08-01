"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[4689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?o.createElement(f,s(s({ref:t},d),{},{components:n})):o.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(83117),r=(n(67294),n(3905));const i={sidebar_position:3},s="Viewport",a={unversionedId:"editor/extensions/viewport",id:"editor/extensions/viewport",title:"Viewport",description:"The Obsidian editor supports huge documents with millions of lines. One of the reasons why this is possible, is because the editor only renders what's visible (and a little bit more).",source:"@site/docs/editor/extensions/viewport.md",sourceDirName:"editor/extensions",slug:"/editor/extensions/viewport",permalink:"/obsidian-plugin-docs/editor/extensions/viewport",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/editor/extensions/viewport.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"State fields",permalink:"/obsidian-plugin-docs/editor/extensions/state-fields"},next:{title:"View plugins",permalink:"/obsidian-plugin-docs/editor/extensions/view-plugins"}},p={},l=[],d={toc:l};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"viewport"},"Viewport"),(0,r.kt)("p",null,"The Obsidian editor supports ",(0,r.kt)("a",{parentName:"p",href:"https://codemirror.net/examples/million/"},"huge documents")," with millions of lines. One of the reasons why this is possible, is because the editor only renders what's visible (and a little bit more)."),(0,r.kt)("p",null,"Imagine that you want to edit a document that is too big to fit on your monitor. The Obsidian editor creates a \"window\" that moves across the document, only rendering the content within the window (and ignoring what's outside). This window is known as the editor's ",(0,r.kt)("em",{parentName:"p"},"viewport"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Viewport",src:n(79566).Z,width:"666",height:"332"})),(0,r.kt)("p",null,"Whenever the user scrolls through the document, or when the document itself changes, the viewport becomes out-of-date and needs to be recomputed."),(0,r.kt)("p",null,"If you want to build an editor extension that depends on the viewport, refer to ",(0,r.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/editor/extensions/view-plugins"},"View plugins"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This page aims to distill the official CodeMirror 6 documentation for Obsidian plugin developers. For more information on state management, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://codemirror.net/docs/guide/#viewport"},"Viewport"),".")))}c.isMDXComponent=!0},79566:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/viewport-9a7a340c097436fc3e091e982c022c0c.svg"}}]);