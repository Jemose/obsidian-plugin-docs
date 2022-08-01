"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[7082],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>w});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),w=a,m=u["".concat(s,".").concat(w)]||u[w]||p[w]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function w(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},56e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const o={},i="MarkdownView",l={unversionedId:"reference/typescript/classes/MarkdownView",id:"reference/typescript/classes/MarkdownView",title:"MarkdownView",description:"Extends TextFileView",source:"@site/docs/reference/typescript/classes/MarkdownView.md",sourceDirName:"reference/typescript/classes",slug:"/reference/typescript/classes/MarkdownView",permalink:"/obsidian-plugin-docs/reference/typescript/classes/MarkdownView",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/reference/typescript/classes/MarkdownView.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"MarkdownSourceView",permalink:"/obsidian-plugin-docs/reference/typescript/classes/MarkdownSourceView"},next:{title:"Menu",permalink:"/obsidian-plugin-docs/reference/typescript/classes/Menu"}},s={},c=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"editor",id:"editor",level:3},{value:"previewMode",id:"previewmode",level:3},{value:"currentMode",id:"currentmode",level:3},{value:"Methods",id:"methods",level:2},{value:"getViewType",id:"getviewtype",level:3},{value:"getMode",id:"getmode",level:3},{value:"getViewData",id:"getviewdata",level:3},{value:"clear",id:"clear",level:3},{value:"setViewData",id:"setviewdata",level:3},{value:"showSearch",id:"showsearch",level:3}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"markdownview"},"MarkdownView"),(0,a.kt)("p",null,"Extends ",(0,a.kt)("inlineCode",{parentName:"p"},"TextFileView")),(0,a.kt)("h2",{id:"constructor"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(leaf: WorkspaceLeaf);\n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"editor"},"editor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"editor: Editor\n")),(0,a.kt)("h3",{id:"previewmode"},"previewMode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"previewMode: MarkdownPreviewView\n")),(0,a.kt)("h3",{id:"currentmode"},"currentMode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"currentMode: MarkdownSubView\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"getviewtype"},"getViewType"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"getViewType(): string;\n")),(0,a.kt)("h3",{id:"getmode"},"getMode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"getMode(): MarkdownViewModeType;\n")),(0,a.kt)("h3",{id:"getviewdata"},"getViewData"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"getViewData(): string;\n")),(0,a.kt)("p",null,"Gets the data from the editor. This will be called to save the editor contents to the file."),(0,a.kt)("h3",{id:"clear"},"clear"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"clear(): void;\n")),(0,a.kt)("p",null,"Clear the editor. This is usually called when we're about to open a completely\ndifferent file, so it's best to clear any editor states like undo-redo history,\nand any caches/indexes associated with the previous file contents."),(0,a.kt)("h3",{id:"setviewdata"},"setViewData"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"setViewData(data: string, clear: boolean): void;\n")),(0,a.kt)("p",null,"Set the data to the editor. This is used to load the file contents."),(0,a.kt)("p",null,"If clear is set, then it means we're opening a completely different file.\nIn that case, you should call clear(), or implement a slightly more efficient\nclearing mechanism given the new data to be set."),(0,a.kt)("h3",{id:"showsearch"},"showSearch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"showSearch(replace?: boolean): void;\n")))}p.isMDXComponent=!0}}]);