"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[8107],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||a;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35652:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={},s="Submit your plugin",p={unversionedId:"submit-your-plugin",id:"submit-your-plugin",isDocsHomePage:!1,title:"Submit your plugin",description:"If you want to share your plugin with the Obsidian community, the best way is to submit it to the official list of plugins. Once your plugin has been reviewed, users can install your plugin directly from within Obsidian. It'll also be featured in the plugin directory on the Obsidian website. In this guide, you'll submit your own plugin.",source:"@site/docs/submit-your-plugin.md",sourceDirName:".",slug:"/submit-your-plugin",permalink:"/obsidian-plugin-docs/submit-your-plugin",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/submit-your-plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Insert link",permalink:"/obsidian-plugin-docs/examples/insert-link"},next:{title:"Manifest reference",permalink:"/obsidian-plugin-docs/manifest"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Step 1 \u2014 Create a release",id:"step-1--create-a-release",children:[]},{value:"Step 2 \u2014 Submit your plugin for review",id:"step-2--submit-your-plugin-for-review",children:[]},{value:"Step 3 \u2014 Address review comments",id:"step-3--address-review-comments",children:[]},{value:"Update an already published plugin",id:"update-an-already-published-plugin",children:[]}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"submit-your-plugin"},"Submit your plugin"),(0,a.kt)("p",null,"If you want to share your plugin with the Obsidian community, the best way is to submit it to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/obsidianmd/obsidian-releases/blob/master/community-plugins.json"},"official list of plugins"),". Once your plugin has been reviewed, users can install your plugin directly from within Obsidian. It'll also be featured in the ",(0,a.kt)("a",{parentName:"p",href:"https://obsidian.md/plugins"},"plugin directory")," on the Obsidian website. In this guide, you'll submit your own plugin."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The purpose of this guide is to provide richer instructions for how to submit a plugin. Before you submit your plugin however, make sure that you have reviewed the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/obsidianmd/obsidian-sample-plugin#adding-your-plugin-to-the-community-plugin-list"},"official instructions"),"."))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To follow this guide, make sure you have the following files at the root of your repository:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"README.md")," that describes the purpose of the plugin, and how to use it."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"LICENSE")," that determines how others are allowed to use the plugin and its source code. If you need help to pick a license for your plugin, refer to ",(0,a.kt)("a",{parentName:"li",href:"https://choosealicense.com/"},"Choose a License"),"."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"manifest.json")," that describes your plugin. For more information, refer to ",(0,a.kt)("a",{parentName:"li",href:"/obsidian-plugin-docs/manifest"},"Manifest"),".")),(0,a.kt)("h2",{id:"step-1--create-a-release"},"Step 1 \u2014 Create a release"),(0,a.kt)("p",null,"In this step, you'll prepare a release for your plugin that's ready to be submitted."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.json"),", update ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," to a new version that follows the ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning")," specification.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release"},"Create a GitHub release"),". The name of the release must match the version in your ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.json"),". Don't include a ",(0,a.kt)("inlineCode",{parentName:"p"},"v")," in the release name.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Upload the following plugin assets to the release, as binary attachments:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"main.js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"manifest.json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"styles.css")," (optional)")))),(0,a.kt)("h2",{id:"step-2--submit-your-plugin-for-review"},"Step 2 \u2014 Submit your plugin for review"),(0,a.kt)("p",null,"In this step, you'll submit your plugin to the Obsidian team for review."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fork the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/obsidianmd/obsidian-releases"},"obsidian-releases")," repository on GitHub. For more information on how to fork a repository, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"Fork a repo"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In ",(0,a.kt)("inlineCode",{parentName:"p"},"community-plugins.json"),", create a new entry in the JSON array. The following example shows the entry for the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tgrosinger/recent-files-obsidian"},"Recent Files")," plugin."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "recent-files-obsidian",\n  "name": "Recent Files",\n  "author": "Tony Grosinger",\n  "description": "Display a list of recently opened files",\n  "repo": "tgrosinger/recent-files-obsidian",\n  "branch": "main"\n}\n')),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"author"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"description")," determines how your plugin appears to the user, and should match the corresponding properties in your ",(0,a.kt)("a",{parentName:"li",href:"/obsidian-plugin-docs/manifest"},"plugin manifest"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repo")," is the path to your GitHub repository. For example, if your GitHub repo is located at ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/your-username/your-repo-name"},"https://github.com/your-username/your-repo-name"),", the path is ",(0,a.kt)("inlineCode",{parentName:"li"},"your-username/your-repo-name"),"."),(0,a.kt)("li",{parentName:"ul"},"(Optional) ",(0,a.kt)("inlineCode",{parentName:"li"},"branch")," lets you specify the Git branch you want to use. It defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"master"),", if omitted.")),(0,a.kt)("p",{parentName:"li"},"Remember to add a comma after the closing brace, ",(0,a.kt)("inlineCode",{parentName:"p"},"}"),", of the previous entry.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"},"Create a pull request"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the instructions in the description field for the pull request to create a pull request from the required template.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Create pull request"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill in the details in the description for the pull request. For the checkboxes, insert an ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," between the brackets, ",(0,a.kt)("inlineCode",{parentName:"p"},"[x]"),", to mark them as done.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Create pull request")," (for the last time \ud83e\udd1e)."))),(0,a.kt)("p",null,"You've now submitted your plugin to the Obsidian plugin directory. Sit back and wait for the team to review your plugin. The time it takes to review your plugin depends on the current workload of the Obsidian team. The team is still small, so please be patient while you wait for your plugin to be reviewed."),(0,a.kt)("h2",{id:"step-3--address-review-comments"},"Step 3 \u2014 Address review comments"),(0,a.kt)("p",null,"Once a reviewer has reviewed your plugin, they'll add a comment to your pull request with the result of the review. The reviewer may require that you update your plugin, or they can offer suggestions on how you can improve it."),(0,a.kt)("p",null,"While only Obsidian team members can publish your plugin, other community members may also offer to review your submission in the meantime."),(0,a.kt)("p",null,"Users can install your plugin as soon as your pull request has been merged."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Want to help?")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you'd like to help review community plugins, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://liamca.in/Obsidian/Plugin+Review+Guide/index"},"Plugin Review Guidelines")," by Liam Cain."))),(0,a.kt)("h2",{id:"update-an-already-published-plugin"},"Update an already published plugin"),(0,a.kt)("p",null,"You only need to submit the initial version of your plugin. After that, users can automatically download any new updates to your plugin directly from within Obsidian."),(0,a.kt)("p",null,"To release a new update of your plugin, follow the instructions in ",(0,a.kt)("a",{parentName:"p",href:"#step-1--create-a-release"},"Create a release"),"."),(0,a.kt)("p",null,"For more information about how Obsidian pulls new versions of community plugins, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/obsidianmd/obsidian-releases#how-community-plugins-are-pulled"},"How community plugins are pulled"),"."))}d.isMDXComponent=!0}}]);