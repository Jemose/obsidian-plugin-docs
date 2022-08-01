"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[2205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),g=u(n),d=s,m=g["".concat(i,".").concat(d)]||g[d]||p[d]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,o=new Array(l);o[0]=g;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},41524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=n(83117),s=(n(67294),n(3905));const l={},o="SuggestModal",a={unversionedId:"reference/typescript/classes/SuggestModal",id:"reference/typescript/classes/SuggestModal",title:"SuggestModal",description:"Extends Modal",source:"@site/docs/reference/typescript/classes/SuggestModal.md",sourceDirName:"reference/typescript/classes",slug:"/reference/typescript/classes/SuggestModal",permalink:"/obsidian-plugin-docs/reference/typescript/classes/SuggestModal",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/reference/typescript/classes/SuggestModal.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SliderComponent",permalink:"/obsidian-plugin-docs/reference/typescript/classes/SliderComponent"},next:{title:"TAbstractFile",permalink:"/obsidian-plugin-docs/reference/typescript/classes/TAbstractFile"}},i={},u=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"limit",id:"limit",level:3},{value:"emptyStateText",id:"emptystatetext",level:3},{value:"inputEl",id:"inputel",level:3},{value:"resultContainerEl",id:"resultcontainerel",level:3},{value:"Methods",id:"methods",level:2},{value:"setPlaceholder",id:"setplaceholder",level:3},{value:"setInstructions",id:"setinstructions",level:3},{value:"onNoSuggestion",id:"onnosuggestion",level:3},{value:"selectSuggestion",id:"selectsuggestion",level:3},{value:"getSuggestions",id:"getsuggestions",level:3},{value:"renderSuggestion",id:"rendersuggestion",level:3},{value:"onChooseSuggestion",id:"onchoosesuggestion",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"suggestmodal"},"SuggestModal"),(0,s.kt)("p",null,"Extends ",(0,s.kt)("inlineCode",{parentName:"p"},"Modal")),(0,s.kt)("p",null,"Implements ",(0,s.kt)("inlineCode",{parentName:"p"},"ISuggestOwner<T>")),(0,s.kt)("h2",{id:"constructor"},"Constructor"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(app: App);\n")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"limit"},"limit"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"limit: number\n")),(0,s.kt)("h3",{id:"emptystatetext"},"emptyStateText"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"emptyStateText: string\n")),(0,s.kt)("h3",{id:"inputel"},"inputEl"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"inputEl: HTMLInputElement\n")),(0,s.kt)("h3",{id:"resultcontainerel"},"resultContainerEl"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"resultContainerEl: HTMLElement\n")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"setplaceholder"},"setPlaceholder"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"setPlaceholder(placeholder: string): void;\n")),(0,s.kt)("h3",{id:"setinstructions"},"setInstructions"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"setInstructions(instructions: Instruction[]): void;\n")),(0,s.kt)("h3",{id:"onnosuggestion"},"onNoSuggestion"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"onNoSuggestion(): void;\n")),(0,s.kt)("h3",{id:"selectsuggestion"},"selectSuggestion"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"selectSuggestion(value: T, evt: MouseEvent | KeyboardEvent): void;\n")),(0,s.kt)("p",null,"Called when the user makes a selection."),(0,s.kt)("h3",{id:"getsuggestions"},"getSuggestions"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"abstract getSuggestions(query: string): T[] | Promise<T[]>;\n")),(0,s.kt)("h3",{id:"rendersuggestion"},"renderSuggestion"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"abstract renderSuggestion(value: T, el: HTMLElement): any;\n")),(0,s.kt)("p",null,"Render the suggestion item into DOM."),(0,s.kt)("h3",{id:"onchoosesuggestion"},"onChooseSuggestion"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"abstract onChooseSuggestion(item: T, evt: MouseEvent | KeyboardEvent): any;\n")))}p.isMDXComponent=!0}}]);