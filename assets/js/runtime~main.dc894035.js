(()=>{"use strict";var e,a,f,c,d,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=b,r.c=t,e=[],r.O=(a,f,c,d)=>{if(!f){var b=1/0;for(i=0;i<e.length;i++){f=e[i][0],c=e[i][1],d=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&d||b>=d)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,d<b&&(b=d));if(t){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,c,d]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var b={};a=a||[null,f({}),f([]),f(f)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(d,b),d},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({0:"e75be8b4",30:"8c39a99e",52:"43d1f236",53:"935f2afb",79:"23e9801a",94:"29dc197e",126:"13ce5257",238:"befbf297",264:"6d71c6e1",265:"fa81048f",354:"0b5c16f0",392:"de4787e9",436:"d6db9b0a",547:"d6e975a6",649:"7a4626a7",696:"15f75c5c",697:"0d48ad12",774:"12f26f77",778:"f6ef3423",784:"92b7c6cc",805:"4f8c0b8f",892:"8afbcb21",940:"fece26ca",973:"ea3cf842",975:"4f066016",1141:"d700bc26",1146:"b0d31037",1176:"be7f5006",1247:"33232263",1287:"eda617dc",1347:"74706d9b",1382:"915f967b",1393:"926024a6",1445:"1a29f8c9",1527:"dcb5fe88",1557:"f6f548d3",1601:"2f9c49ac",1649:"b888cc3c",1695:"b25679a6",1704:"b9cff02a",1737:"51043d28",1897:"46ccf277",1907:"0aa08435",1963:"d5495f85",2012:"dab6274c",2205:"49610ff9",2211:"956015b2",2272:"10b03419",2299:"a2570e22",2354:"14da5c76",2402:"4d2578b8",2441:"ea90771a",2524:"799614ab",2532:"d628f6ac",2595:"a36ffa01",2675:"38196ae4",2677:"4182bc82",2697:"25c08d2c",2799:"2be83f12",2823:"be1cbec8",2842:"28f44b45",2938:"67545522",3058:"0b00ed1b",3119:"a6e485cf",3126:"e8e4543d",3202:"0605e29e",3239:"392b1d3a",3256:"1dd5d7a0",3303:"c6d1a8d2",3354:"1bc3f855",3361:"9ba19d54",3554:"f3e520d4",3610:"83b08f11",3658:"180bfc4f",3682:"843244e4",3749:"cf155248",3811:"8205b5ae",3828:"82c3608b",3829:"4d101a71",3830:"a28521eb",3882:"8aa14ab8",3946:"a9769f6b",3962:"b4b2627e",3965:"43f55309",3970:"04fbbdc2",4008:"2c84989c",4109:"4b9284cd",4112:"0dfbf3b0",4128:"a09c2993",4171:"6c18ff08",4194:"50e2b989",4196:"95c99d92",4214:"8d8104b4",4279:"b8e90fec",4323:"b858bac3",4378:"20517dbb",4428:"afc8ade6",4485:"afbc42ac",4497:"7df44fae",4516:"56a4a2ae",4546:"6beea597",4566:"a73a0e3f",4609:"c1ff2bff",4615:"983dd9cf",4665:"db8879b3",4689:"102a5ed3",4715:"c0f50d54",4753:"ae0c3aaa",4905:"57042459",5e3:"b0acb65d",5081:"84af69ef",5090:"47c7af8a",5101:"36f10c62",5133:"4dd838f1",5158:"0544dd98",5211:"0ead0253",5451:"6bee5e29",5479:"b81f9dd7",5497:"0f1c37ab",5504:"b9279e93",5523:"7446c4ee",5575:"9c2458d0",5621:"caff9ef1",5639:"cff15f4e",5652:"825635bc",5672:"61dc6d0f",5686:"ced3b520",5687:"3f383611",5826:"a630df03",5894:"7e63da9a",5957:"004a50ca",5968:"e3499e12",6012:"a2d8b8b6",6085:"30a18b33",6149:"24aa57a5",6198:"700c8371",6199:"efd2cf03",6268:"2c4f620e",6329:"54c82979",6347:"39b0ea21",6368:"b9d17dc1",6388:"621f4b02",6411:"97ae10ab",6452:"1d62a97b",6464:"64bffb67",6478:"f0c5680f",6540:"ead081aa",6598:"7bb735b0",6709:"0e9828f8",6727:"eb945afa",6827:"855bbc46",6855:"fbb00b49",6953:"67b32cb3",6974:"ed982374",7039:"c05d2e7f",7072:"f219dfb0",7082:"4e7d025b",7099:"aaad64a3",7105:"7a3d7f56",7114:"d9430cee",7168:"34140d9c",7235:"4f366223",7309:"109bae49",7312:"53062d6a",7362:"618ada16",7431:"d81ce23a",7451:"597040e7",7469:"58300b87",7511:"153dfb3c",7543:"f25d48a1",7557:"09453f11",7639:"0d9ee793",7643:"9d98d0fa",7665:"825b8d42",7770:"7ddceb1c",7815:"ea0e2209",7918:"17896441",7920:"1a4e3797",7930:"0d8eb4ce",7959:"87c407db",8007:"3839e5fa",8011:"7776a642",8022:"332395be",8036:"f8ab0b8e",8059:"a8491093",8078:"a87ff71a",8155:"e730996c",8162:"61e33376",8172:"c9340476",8194:"8513aa73",8277:"7891f847",8406:"5b3c518a",8412:"ea620728",8435:"561534d7",8444:"bea5ad5c",8482:"30e0ecd2",8566:"047a5078",8568:"cf672314",8585:"6e871c86",8630:"c9bd862a",8631:"28a8ae78",8787:"ef17534e",9066:"a7392012",9072:"5b979ebf",9159:"64b6586f",9165:"8a599154",9220:"f9780055",9252:"7745a97b",9403:"150d8ac8",9436:"7412ad8f",9442:"e63358b1",9475:"8801d336",9514:"1be78505",9646:"5dd4d34f",9653:"f6d77d49",9685:"1de78933",9691:"f8cba72b",9693:"ea2fb62a",9735:"4ba7e5a3",9743:"57c97d00",9767:"f4d6084a",9776:"373f6370",9791:"b729ba14",9840:"37d83f58",9869:"d7a8c414"}[e]||e)+"."+{0:"6bd7935c",30:"160aa010",52:"535ade37",53:"d377b278",79:"a6e25bf3",94:"3de231b5",126:"fb5a04a2",238:"3293871e",264:"e084be8b",265:"86650367",354:"8f63de1e",392:"1ff59bed",436:"7f1145ca",547:"98214276",649:"9ca53dc7",696:"088b25b1",697:"79d3f858",774:"a23bc248",778:"1929cfb3",784:"3d811696",805:"594e7411",892:"24ee466c",940:"e9c861d5",973:"e792f2e1",975:"fbda34fe",1141:"b51e7f67",1146:"0766499d",1176:"69c9dfb0",1247:"2a8186c2",1287:"6131e9b7",1347:"ab09c87a",1382:"d8131c35",1393:"c3014e76",1445:"c450e2bc",1527:"bd98d432",1557:"948e335d",1601:"a3b72b32",1649:"943bc55d",1695:"e6b5e6c9",1704:"f9d2388f",1737:"f678bc04",1897:"16d86e7e",1907:"ec2fbbb6",1963:"0b9e6189",2012:"3081c1a9",2205:"03a27dca",2211:"6e773023",2272:"e0d9ea5d",2299:"e9c7d97c",2354:"64813c06",2402:"3fbd31af",2441:"7d44ca7f",2524:"91c006ba",2532:"c0cea5d6",2595:"f6643ccc",2675:"c252597b",2677:"7ca8ed57",2697:"9690d72e",2799:"1c08c1d2",2823:"56ff9f44",2842:"35f70fea",2938:"a58ce3ab",3058:"948323d5",3119:"8e7866db",3126:"3de6ea44",3202:"b0125b57",3239:"8bf96dd8",3256:"73835750",3303:"bf41bc84",3354:"6957d0a3",3361:"3f1e0ce8",3554:"c0e1b1f9",3610:"62df6ac0",3658:"c45fb0b6",3682:"d9f20470",3749:"49df806d",3811:"8117c594",3828:"ab06dc65",3829:"9aee872d",3830:"3d88e311",3882:"e9895a71",3946:"06719b72",3962:"2b19b80b",3965:"944bfdd2",3970:"c7feaa2d",4008:"8320c93b",4109:"c125208f",4112:"bf34896c",4128:"a8d302f7",4171:"261637e7",4194:"5ae2b997",4196:"8b4ec8a8",4214:"9bc59f54",4279:"0e87006e",4323:"70605dd0",4378:"85e39bd9",4428:"742199a2",4485:"86166218",4497:"b831d80f",4516:"ec41f244",4546:"8dd2628e",4566:"960a8f1c",4609:"a27422ec",4615:"302b74ab",4665:"9e1d0f16",4689:"ddb98a4e",4715:"2aaa64fd",4753:"26bb19a1",4905:"1dec97fe",4972:"bc9a10f0",5e3:"030ef918",5081:"9a022348",5090:"3c8fe74c",5101:"a80b86c9",5133:"200d57ba",5158:"249bfbb6",5211:"5d326bcd",5451:"f3754a88",5479:"602103f7",5497:"8592ced3",5504:"bdfe2245",5523:"4c606a7f",5575:"ebc3655c",5621:"7bb06d5f",5639:"a3e92193",5652:"e1df6b75",5672:"a14b31ce",5686:"32fe814d",5687:"99585693",5826:"db7646b8",5894:"d92de9fd",5957:"4d0009ab",5968:"04be8439",6012:"6e8ba381",6085:"3ae99e53",6149:"f2ffaf13",6198:"a2d77e34",6199:"993d3c3e",6268:"cf7a5e3c",6329:"452497ea",6347:"a8704135",6368:"5180d398",6388:"46c51902",6411:"855857ce",6452:"4c2591d6",6464:"736f9ad7",6478:"7a5afb2b",6540:"e15c6c12",6598:"8863b129",6709:"ae7ff8a7",6727:"a4935460",6780:"f192e40e",6827:"3ea3f448",6855:"deb2ff37",6945:"5ff96160",6953:"75a5bec9",6974:"316d5cfb",7039:"39a88a31",7072:"2e520bad",7082:"f14faa81",7099:"66e7aca2",7105:"89c6f173",7114:"5d412a55",7168:"77220a7b",7235:"4a8af07b",7309:"48a351c8",7312:"3544af3b",7362:"7fd16274",7431:"086c2438",7451:"19622b1e",7469:"174941ad",7511:"476f1f4c",7543:"50c921d4",7557:"7d8ab2f9",7639:"608a77c6",7643:"215dce88",7665:"8e55715b",7770:"46b811a5",7815:"67eae550",7918:"7ccaf84e",7920:"709fcbf4",7930:"680e4978",7959:"8453c838",8007:"16292cc7",8011:"f65359d1",8022:"34575a47",8036:"684845e6",8059:"77a9932b",8078:"fc3de89f",8155:"d6a92760",8162:"bac7ac4b",8172:"cf0e3f7a",8194:"dcd1852b",8277:"6a4c413d",8406:"d8c95f15",8412:"c8ac5008",8435:"253756c9",8444:"5934db03",8482:"972a4b8c",8566:"938dddb4",8568:"827d85d2",8585:"a72a2559",8624:"e4d4c17d",8630:"945b1149",8631:"143b711f",8787:"c0deac9c",8894:"29f57b10",9066:"21c45d37",9072:"9ce5d00f",9159:"b69ba8fc",9165:"360045cc",9220:"e40e5dd7",9252:"202457fe",9403:"053fc1ba",9436:"10ccc721",9442:"360ab690",9475:"e5636cad",9514:"3c5241f7",9646:"ea6a337f",9653:"49e65bf0",9685:"a6fbc8f3",9691:"40d1b8d0",9693:"96721a5a",9735:"2fb94268",9743:"57d79c85",9767:"72a17231",9776:"e7fac9a6",9791:"fcf54b80",9840:"f0c82962",9869:"91788927"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},d="obsidian-plugin-docs:",r.l=(e,a,f,b)=>{if(c[e])c[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==d+f){t=l;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",d+f),t.src=e),c[e]=[a];var u=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var d=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((e=>e(f))),a)return a(f)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=u.bind(null,t.onerror),t.onload=u.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/obsidian-plugin-docs/",r.gca=function(e){return e={17896441:"7918",33232263:"1247",57042459:"4905",67545522:"2938",e75be8b4:"0","8c39a99e":"30","43d1f236":"52","935f2afb":"53","23e9801a":"79","29dc197e":"94","13ce5257":"126",befbf297:"238","6d71c6e1":"264",fa81048f:"265","0b5c16f0":"354",de4787e9:"392",d6db9b0a:"436",d6e975a6:"547","7a4626a7":"649","15f75c5c":"696","0d48ad12":"697","12f26f77":"774",f6ef3423:"778","92b7c6cc":"784","4f8c0b8f":"805","8afbcb21":"892",fece26ca:"940",ea3cf842:"973","4f066016":"975",d700bc26:"1141",b0d31037:"1146",be7f5006:"1176",eda617dc:"1287","74706d9b":"1347","915f967b":"1382","926024a6":"1393","1a29f8c9":"1445",dcb5fe88:"1527",f6f548d3:"1557","2f9c49ac":"1601",b888cc3c:"1649",b25679a6:"1695",b9cff02a:"1704","51043d28":"1737","46ccf277":"1897","0aa08435":"1907",d5495f85:"1963",dab6274c:"2012","49610ff9":"2205","956015b2":"2211","10b03419":"2272",a2570e22:"2299","14da5c76":"2354","4d2578b8":"2402",ea90771a:"2441","799614ab":"2524",d628f6ac:"2532",a36ffa01:"2595","38196ae4":"2675","4182bc82":"2677","25c08d2c":"2697","2be83f12":"2799",be1cbec8:"2823","28f44b45":"2842","0b00ed1b":"3058",a6e485cf:"3119",e8e4543d:"3126","0605e29e":"3202","392b1d3a":"3239","1dd5d7a0":"3256",c6d1a8d2:"3303","1bc3f855":"3354","9ba19d54":"3361",f3e520d4:"3554","83b08f11":"3610","180bfc4f":"3658","843244e4":"3682",cf155248:"3749","8205b5ae":"3811","82c3608b":"3828","4d101a71":"3829",a28521eb:"3830","8aa14ab8":"3882",a9769f6b:"3946",b4b2627e:"3962","43f55309":"3965","04fbbdc2":"3970","2c84989c":"4008","4b9284cd":"4109","0dfbf3b0":"4112",a09c2993:"4128","6c18ff08":"4171","50e2b989":"4194","95c99d92":"4196","8d8104b4":"4214",b8e90fec:"4279",b858bac3:"4323","20517dbb":"4378",afc8ade6:"4428",afbc42ac:"4485","7df44fae":"4497","56a4a2ae":"4516","6beea597":"4546",a73a0e3f:"4566",c1ff2bff:"4609","983dd9cf":"4615",db8879b3:"4665","102a5ed3":"4689",c0f50d54:"4715",ae0c3aaa:"4753",b0acb65d:"5000","84af69ef":"5081","47c7af8a":"5090","36f10c62":"5101","4dd838f1":"5133","0544dd98":"5158","0ead0253":"5211","6bee5e29":"5451",b81f9dd7:"5479","0f1c37ab":"5497",b9279e93:"5504","7446c4ee":"5523","9c2458d0":"5575",caff9ef1:"5621",cff15f4e:"5639","825635bc":"5652","61dc6d0f":"5672",ced3b520:"5686","3f383611":"5687",a630df03:"5826","7e63da9a":"5894","004a50ca":"5957",e3499e12:"5968",a2d8b8b6:"6012","30a18b33":"6085","24aa57a5":"6149","700c8371":"6198",efd2cf03:"6199","2c4f620e":"6268","54c82979":"6329","39b0ea21":"6347",b9d17dc1:"6368","621f4b02":"6388","97ae10ab":"6411","1d62a97b":"6452","64bffb67":"6464",f0c5680f:"6478",ead081aa:"6540","7bb735b0":"6598","0e9828f8":"6709",eb945afa:"6727","855bbc46":"6827",fbb00b49:"6855","67b32cb3":"6953",ed982374:"6974",c05d2e7f:"7039",f219dfb0:"7072","4e7d025b":"7082",aaad64a3:"7099","7a3d7f56":"7105",d9430cee:"7114","34140d9c":"7168","4f366223":"7235","109bae49":"7309","53062d6a":"7312","618ada16":"7362",d81ce23a:"7431","597040e7":"7451","58300b87":"7469","153dfb3c":"7511",f25d48a1:"7543","09453f11":"7557","0d9ee793":"7639","9d98d0fa":"7643","825b8d42":"7665","7ddceb1c":"7770",ea0e2209:"7815","1a4e3797":"7920","0d8eb4ce":"7930","87c407db":"7959","3839e5fa":"8007","7776a642":"8011","332395be":"8022",f8ab0b8e:"8036",a8491093:"8059",a87ff71a:"8078",e730996c:"8155","61e33376":"8162",c9340476:"8172","8513aa73":"8194","7891f847":"8277","5b3c518a":"8406",ea620728:"8412","561534d7":"8435",bea5ad5c:"8444","30e0ecd2":"8482","047a5078":"8566",cf672314:"8568","6e871c86":"8585",c9bd862a:"8630","28a8ae78":"8631",ef17534e:"8787",a7392012:"9066","5b979ebf":"9072","64b6586f":"9159","8a599154":"9165",f9780055:"9220","7745a97b":"9252","150d8ac8":"9403","7412ad8f":"9436",e63358b1:"9442","8801d336":"9475","1be78505":"9514","5dd4d34f":"9646",f6d77d49:"9653","1de78933":"9685",f8cba72b:"9691",ea2fb62a:"9693","4ba7e5a3":"9735","57c97d00":"9743",f4d6084a:"9767","373f6370":"9776",b729ba14:"9791","37d83f58":"9840",d7a8c414:"9869"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,f)=>{var c=r.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise(((f,d)=>c=e[a]=[f,d]));f.push(c[2]=d);var b=r.p+r.u(a),t=new Error;r.l(b,(f=>{if(r.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var d=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,c[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var c,d,b=f[0],t=f[1],o=f[2],n=0;if(b.some((a=>0!==e[a]))){for(c in t)r.o(t,c)&&(r.m[c]=t[c]);if(o)var i=o(r)}for(a&&a(f);n<b.length;n++)d=b[n],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(i)},f=self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();