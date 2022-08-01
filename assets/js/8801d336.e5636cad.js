"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[9475],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||c;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var o=2;o<c;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},41128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var n=r(83117),a=(r(67294),r(3905));const c={},s="CachedMetadata",i={unversionedId:"reference/typescript/interfaces/CachedMetadata",id:"reference/typescript/interfaces/CachedMetadata",title:"CachedMetadata",description:"Properties",source:"@site/docs/reference/typescript/interfaces/CachedMetadata.md",sourceDirName:"reference/typescript/interfaces",slug:"/reference/typescript/interfaces/CachedMetadata",permalink:"/obsidian-plugin-docs/reference/typescript/interfaces/CachedMetadata",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/reference/typescript/interfaces/CachedMetadata.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"CacheItem",permalink:"/obsidian-plugin-docs/reference/typescript/interfaces/CacheItem"},next:{title:"CloseableComponent",permalink:"/obsidian-plugin-docs/reference/typescript/interfaces/CloseableComponent"}},l={},o=[{value:"Properties",id:"properties",level:2},{value:"links",id:"links",level:3},{value:"embeds",id:"embeds",level:3},{value:"tags",id:"tags",level:3},{value:"headings",id:"headings",level:3},{value:"sections",id:"sections",level:3},{value:"listItems",id:"listitems",level:3},{value:"frontmatter",id:"frontmatter",level:3},{value:"blocks",id:"blocks",level:3}],p={toc:o};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cachedmetadata"},"CachedMetadata"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"links"},"links"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"links: LinkCache[]\n")),(0,a.kt)("h3",{id:"embeds"},"embeds"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"embeds: EmbedCache[]\n")),(0,a.kt)("h3",{id:"tags"},"tags"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"tags: TagCache[]\n")),(0,a.kt)("h3",{id:"headings"},"headings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"headings: HeadingCache[]\n")),(0,a.kt)("h3",{id:"sections"},"sections"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"sections: SectionCache[]\n")),(0,a.kt)("p",null,"Sections are root level markdown blocks, which can be used to divide the document up."),(0,a.kt)("h3",{id:"listitems"},"listItems"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"listItems: ListItemCache[]\n")),(0,a.kt)("h3",{id:"frontmatter"},"frontmatter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"frontmatter: FrontMatterCache\n")),(0,a.kt)("h3",{id:"blocks"},"blocks"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"blocks: Record<string, BlockCache>\n")))}d.isMDXComponent=!0}}]);