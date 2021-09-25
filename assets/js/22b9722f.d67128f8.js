"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[306],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(f,l(l({ref:n},c),{},{components:t})):o.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9208:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),l=["components"],i={sidebar_position:56},s="Modals",p={unversionedId:"modals",id:"modals",isDocsHomePage:!1,title:"Modals",description:"Modals display information and accept input from the user. To create a modal, create a class that extends Modal:",source:"@site/docs/modals.md",sourceDirName:".",slug:"/modals",permalink:"/obsidian-plugin-docs/modals",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/modals.md",tags:[],version:"current",sidebarPosition:56,frontMatter:{sidebar_position:56},sidebar:"tutorialSidebar",previous:{title:"Settings",permalink:"/obsidian-plugin-docs/settings"},next:{title:"Events",permalink:"/obsidian-plugin-docs/events"}},c=[{value:"Accept user input",id:"accept-user-input",children:[]}],u={toc:c};function d(e){var n=e.components,i=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modals"},"Modals"),(0,r.kt)("p",null,"Modals display information and accept input from the user. To create a modal, create a class that extends ",(0,r.kt)("inlineCode",{parentName:"p"},"Modal"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modal.ts"',title:'"modal.ts"'},'import { App, Modal } from "obsidian";\n\nexport class ExampleModal extends Modal {\n  constructor(app: App) {\n    super(app);\n  }\n\n  onOpen() {\n    let { contentEl } = this;\n    contentEl.setText("Look at me, I\'m a modal! \ud83d\udc40");\n  }\n\n  onClose() {\n    let { contentEl } = this;\n    contentEl.empty();\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onOpen()")," is called when the modal is opened and is responsible for building the content of your modal. For more information, refer to ",(0,r.kt)("a",{parentName:"li",href:"/obsidian-plugin-docs/html-elements"},"HTML elements"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onClose()")," is called when the modal is closed and is responsible for cleaning up any resources used by the modal.")),(0,r.kt)("p",null,"To open a modal, create a new instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleModal")," and call ",(0,r.kt)("inlineCode",{parentName:"p"},"open()")," on it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts"',title:'"main.ts"'},'import { Plugin } from "obsidian";\nimport { ExampleModal } from "./modal";\n\nexport default class ExamplePlugin extends Plugin {\n  async onload() {\n    this.addCommand({\n      id: "display-modal",\n      name: "Display modal",\n      callback: () => {\n        new ExampleModal(this.app).open();\n      },\n    });\n  }\n}\n')),(0,r.kt)("h2",{id:"accept-user-input"},"Accept user input"),(0,r.kt)("p",null,"The modal in the previous example only displayed some text. Let's look at a little more complex example that handles input from the user."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Modal with user input",src:t(9524).Z})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modal.ts" {21,30-31}',title:'"modal.ts"',"{21,30-31}":!0},'import { App, Modal, Setting } from "obsidian";\n\nexport class ExampleModal extends Modal {\n  result: string;\n  onSubmit: (result: string) => void;\n\n  constructor(app: App, onSubmit: (result: string) => void) {\n    super(app);\n    this.onSubmit = onSubmit;\n  }\n\n  onOpen() {\n    const { contentEl } = this;\n\n    contentEl.createEl("h1", { text: "What\'s your name?" });\n\n    new Setting(contentEl)\n      .setName("Name")\n      .addText((text) =>\n        text.onChange((value) => {\n          this.result = value\n        }));\n\n    new Setting(contentEl)\n      .addButton((btn) =>\n        btn\n          .setButtonText("Submit")\n          .setCta()\n          .onClick(() => {\n            this.close();\n            this.onSubmit(this.result);\n          }));\n  }\n\n  onClose() {\n    let { contentEl } = this;\n    contentEl.empty();\n  }\n}\n')),(0,r.kt)("p",null,"The result is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"this.result")," and returned in the ",(0,r.kt)("inlineCode",{parentName:"p"},"onSubmit")," callback when the user clicks ",(0,r.kt)("strong",{parentName:"p"},"Submit"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"new ExampleModal(this.app, (result) => {\n  new Notice(`Hello, ${result}!`);\n}).open();\n")))}d.isMDXComponent=!0},9524:function(e,n,t){n.Z=t.p+"assets/images/modal-input-806047f5d69c7859f836155a88f41a56.png"}}]);