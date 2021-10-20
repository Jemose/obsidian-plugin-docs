"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[8011],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=p;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},59852:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),l=["components"],s={},a="Insert link",u={unversionedId:"examples/insert-link",id:"examples/insert-link",isDocsHomePage:!1,title:"Insert link",description:"This example adds a command that opens a modal to insert a Markdown link. It uses the editor to set the current selection as the default link text, and then replaces the selection when user inserts the link.",source:"@site/docs/examples/insert-link.md",sourceDirName:"examples",slug:"/examples/insert-link",permalink:"/obsidian-plugin-docs/examples/insert-link",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/examples/insert-link.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Svelte",permalink:"/obsidian-plugin-docs/advanced-guides/svelte"},next:{title:"Submit your plugin",permalink:"/obsidian-plugin-docs/publishing/submit-your-plugin"}},c=[],d={toc:c};function p(e){var n=e.components,s=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"insert-link"},"Insert link"),(0,o.kt)("p",null,"This example adds a command that opens a modal to insert a Markdown link. It uses the editor to set the current selection as the default link text, and then replaces the selection when user inserts the link."),(0,o.kt)("p",null,"This example assumes knowledge of ",(0,o.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/commands"},"commands"),", ",(0,o.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/modals"},"modals"),", and the ",(0,o.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/editor"},"editor"),". If you have difficulties to understand this example, refer to the corresponding guides before you continue reading."),(0,o.kt)("p",null,"Here's what you'll create:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Insert link modal",src:t(71693).Z})),(0,o.kt)("p",null,"Here's the full source code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts"',title:'"main.ts"'},'import { Editor, Plugin } from "obsidian";\nimport { InsertLinkModal } from "./modal";\n\nexport default class InsertLinkPlugin extends Plugin {\n  async onload() {\n    this.addCommand({\n      id: "insert-link",\n      name: "Insert link",\n      editorCallback: (editor: Editor) => {\n        const selectedText = editor.getSelection();\n\n        const onSubmit = (text: string, url: string) => {\n          editor.replaceSelection(`[${text}](${url})`);\n        };\n\n        new InsertLinkModal(this.app, selectedText, onSubmit).open();\n      },\n    });\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modal.ts"',title:'"modal.ts"'},'import { App, Modal, Setting } from "obsidian";\n\nexport class InsertLinkModal extends Modal {\n  linkText: string;\n  linkUrl: string;\n\n  onSubmit: (linkText: string, linkUrl: string) => void;\n\n  constructor(\n    app: App,\n    defaultLinkText: string,\n    onSubmit: (linkText: string, linkUrl: string) => void\n  ) {\n    super(app);\n    this.linkText = defaultLinkText;\n    this.onSubmit = onSubmit;\n  }\n\n  onOpen() {\n    const { contentEl } = this;\n\n    contentEl.createEl("h1", { text: "Insert link" });\n\n    new Setting(contentEl).setName("Link text").addText((text) =>\n      text.setValue(this.linkText).onChange((value) => {\n        this.linkText = value;\n      })\n    );\n\n    new Setting(contentEl).setName("Link URL").addText((text) =>\n      text.setValue(this.linkUrl).onChange((value) => {\n        this.linkUrl = value;\n      })\n    );\n\n    new Setting(contentEl).addButton((btn) =>\n      btn\n        .setButtonText("Insert")\n        .setCta()\n        .onClick(() => {\n          this.close();\n          this.onSubmit(this.linkText, this.linkUrl);\n        })\n    );\n  }\n\n  onClose() {\n    let { contentEl } = this;\n    contentEl.empty();\n  }\n}\n')))}p.isMDXComponent=!0},71693:function(e,n,t){n.Z=t.p+"assets/images/example-insert-link-49da8f4538d03b0f70b20968e8ed2639.gif"}}]);