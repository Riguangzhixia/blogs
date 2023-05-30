"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[4274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(u,".").concat(m)]||c[m]||s[m]||a;return n?r.createElement(h,o(o({ref:t},g),{},{components:n})):r.createElement(h,o({ref:t},g))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={slug:"insights/345LeetCode",title:"\u4e24\u5468\u5237\u9898\u603b\u7ed3",authors:[{name:"Riguangzhixia",title:"Front-end developer",url:"https://github.com/Riguangzhixia",image_url:"https://github.com/Riguangzhixia.png"}],keywords:["blogs","insights"],tags:["\u80e1\u601d\u4e71\u60f3"]},o=void 0,l={permalink:"/blogs/blog/insights/345LeetCode",source:"@site/blog/notes/\u80e1\u601d\u4e71\u60f3/\u8fd1\u671fLeetCode\u5237\u9898.md",title:"\u4e24\u5468\u5237\u9898\u603b\u7ed3",description:"\u5237\u9898\u65e5\u5e38",date:"2023-05-30T10:18:01.000Z",formattedDate:"2023\u5e745\u670830\u65e5",tags:[{label:"\u80e1\u601d\u4e71\u60f3",permalink:"/blogs/blog/tags/\u80e1\u601d\u4e71\u60f3"}],readingTime:4.61,hasTruncateMarker:!1,authors:[{name:"Riguangzhixia",title:"Front-end developer",url:"https://github.com/Riguangzhixia",image_url:"https://github.com/Riguangzhixia.png",imageURL:"https://github.com/Riguangzhixia.png"}],frontMatter:{slug:"insights/345LeetCode",title:"\u4e24\u5468\u5237\u9898\u603b\u7ed3",authors:[{name:"Riguangzhixia",title:"Front-end developer",url:"https://github.com/Riguangzhixia",image_url:"https://github.com/Riguangzhixia.png",imageURL:"https://github.com/Riguangzhixia.png"}],keywords:["blogs","insights"],tags:["\u80e1\u601d\u4e71\u60f3"]},prevItem:{title:"\u957f\u671f\u6fc0\u52b1",permalink:"/blogs/blog/insights/longTimeTerm"}},u={authorsImageUrls:[void 0]},p=[{value:"\u5237\u9898\u65e5\u5e38",id:"\u5237\u9898\u65e5\u5e38",level:2},{value:"\u7b2c 345 \u573a\u5468\u8d5b",id:"\u7b2c-345-\u573a\u5468\u8d5b",level:2},{value:"\u5468\u8d5b\u611f\u609f",id:"\u5468\u8d5b\u611f\u609f",level:2},{value:"\u4e0b\u5468\u8ba1\u5212",id:"\u4e0b\u5468\u8ba1\u5212",level:2}],g={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5237\u9898\u65e5\u5e38"},"\u5237\u9898\u65e5\u5e38"),(0,i.kt)("p",null,"\u81ea4\u670828\u65e5\u81f3\u4eca\u59295\u67087\u65e5\uff0c\u575a\u6301\u8d77\u5e8a\u5237\u9898\u5341\u5929\u6709\u4f59\uff0c\u81ea\u6211\u611f\u89c9\u5e76\u6ca1\u6709\u5728\u7b97\u6cd5\u4e0a\u7cbe\u8fdb\u591a\u5c11\uff0c\u800c\u5bf9\u7f16\u7a0b\u8bed\u8a00\u7684\u4f7f\u7528\u4e5f\u5e76\u65e0\u76ca\u5904\uff0c\u56e0\u4e3a\u7b97\u6cd5\u9898\u4f7f\u7528\u5230\u4ee3\u7801\u8ddf\u7f16\u7a0b\u8bed\u8a00\u5173\u7cfb\u4e0d\u662f\u5f88\u5927\u3002\n\u4f46\u662f\u610f\u5916\u7684\u662f\u8ddf\u4ee5\u524d\u76f8\u6bd4\u6ca1\u6709\u62b5\u89e6\u611f\u4e86\uff0c\u8d77\u5e8a\u6d17\u6f31\u5750\u5728\u8fd9\u770b\u4f1a\u9898\uff0c\u7136\u540e\u4e00\u8fb9\u60f3\u4e00\u904d\u5403\u4e1c\u897f\uff0c\u7136\u540e\u56de\u6765\u5199\u5b8c\u63d0\u4ea4\u5c31\u50cf\u65e5\u5e38\u751f\u6d3b\u4e00\u6837\u3002\n\u5176\u5b9e\u6c42\u804c\u4e5f\u5e76\u6ca1\u6709\u592a\u7d27\u8feb\uff0c\u4f46\u662f\u5237\u9898\u4f3c\u4e4e\u4ece\u9700\u8981\u52a8\u529b\u53d8\u6210\u4e86\u65e5\u5e38\u7684\u4e00\u90e8\u5206\u3002\u671f\u95f4\u8fde\u8bb8\u4e45\u6ca1\u6709\u7684\u953b\u70bc\u90fd\u7ee7\u7eed\u4fdd\u6301\u4e86\u4e0b\u53bb\uff0c\u8fd9\u8fd8\u662f\u5f88\u8ba9\u4eba\u60ca\u559c\u7684\u3002\n\u5728\u4e4b\u524d\u5c31\u4e1a\u6216\u8005\u516c\u53f8\u5237\u9898\u65f6\uff0c\u96be\u514d\u4f1a\u7126\u8e81\u3001\u6709\u538b\u529b\uff0c\u901a\u8fc7\u4e13\u4e1a\u6d4b\u8bd5\u6216\u8005\u7b14\u8bd5\u540e\u5c31\u7f6e\u4e4b\u4e0d\u987e\uff0c\u4e00\u5e74\u534a\u524d\u901a\u8fc7\u4e13\u4e1a\u7ea7\u6d4b\u8bd5\u65f6\u4e5f\u662f\u5237\u8fc7\u4e86JS\u548cJAVA\u7684\u9898\u5c31\u4e00\u6b21\u6ca1\u78b0\u8fc7\u516c\u53f8\u7684\u5237\u9898\u7f51\u7ad9\u3002\n\u800c\u73b0\u5728\u5237\u9898\u7684\u611f\u89c9\u53cd\u800c\u8ba9\u4eba\u8212\u670d\u4e00\u4e9b\u4e86\u3002"),(0,i.kt)("h2",{id:"\u7b2c-345-\u573a\u5468\u8d5b"},"\u7b2c 345 \u573a\u5468\u8d5b"),(0,i.kt)("p",null,"\u5237\u5b8c\u65e9\u4e0a\u7684\u9898\u76ee\u540e\u62a5\u540d\u4e86\u4eca\u5929\u7684\u5468\u8d5b\uff0c\u5171\u4e00\u5c0f\u65f630\u5206\u949f\u505a\u9898\u65f6\u95f4\uff0c\u9898\u5e93\u4e00\u7b80\u5355\uff0c\u4e09\u4e2d\u7b49\u3002\u5206\u522b\u4e3a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#6416 \u627e\u51fa\u4e0d\u540c\u5143\u7d20\u6570\u76ee\u5dee\u6570\u7ec4\uff08\u5206\u6570\uff1a3"),(0,i.kt)("li",{parentName:"ul"},"#6417 \u9891\u7387\u8ddf\u8e2a\u5668 4"),(0,i.kt)("li",{parentName:"ul"},"#6418 \u6709\u76f8\u540c\u989c\u8272\u7684\u76f8\u90bb\u5143\u7d20\u6570\u76ee 5"),(0,i.kt)("li",{parentName:"ul"},"#6419 \u4f7f\u4e8c\u53c9\u6811\u6240\u6709\u8def\u5f84\u503c\u76f8\u7b49\u7684\u6700\u5c0f\u4ee3\u4ef7 5")),(0,i.kt)("p",null,"\u53d7\u5176\u4ed6\u4e8b\u60c5\u5f71\u54cd\uff0c\u5bfc\u81f4\u8003\u8bd5\u671f\u95f4\u53ea\u505a\u4e86\u524d\u4e09\u9898\uff0c\u7b2c\u4e09\u9898\u8fd8\u6ca1\u80fd\u63d0\u4ea4\u3002\u7ed3\u679c\u5f97\u4e86\u4e2a7\u5206\uff0c\u7b2c\u4e00\u9898\u8fd8\u6709\u4e00\u6b21\u63d0\u4ea4\u9519\u8bef\u5c1d\u8bd5\u3002\n\u603b\u4f53\u770b\u7684\u8bdd\uff0c\u76ee\u524d\u5927\u7ea6\u662f\u4e00\u4e2a\u534a\u5c0f\u65f6AC\u524d\u4e09\u9898\u7684\u6c34\u5e73\u3002\n\u524d\u4e09\u9053\u4e2d\u4e2d\u7528\u5230\u7684\u7b97\u6cd5\u5e76\u4e0d\u591a\uff0c\u57fa\u672c\u90fd\u662f\u5ba1\u9898\u540e\u6784\u5efa\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u54c8\u5e0c\u8868\uff0c\u7136\u540e\u6839\u636e\u9898\u76ee\u8981\u6c42\u904d\u5386\u4e00\u904d\u5e76\u5904\u7406\u4e0b\u6570\u636e\u5373\u53ef\u5f97\u5230\u7ed3\u679c\uff0c\u6709\u9053\u9898\u8ddf\u8d2a\u5fc3\u7b97\u6cd5\u6709\u4e9b\u5173\u8054\uff0c\u5176\u4ed6\u5c31\u4e3b\u8981\u8003\u5bdf\u5bf9\u54c8\u5e0c\u8868\u7684\u4f7f\u7528\u53ca\u5ba1\u9898\u540e\u5982\u4f55\u5904\u7406\u6570\u636e\u4e86\u3002\n\u800c\u7b2c\u56db\u9898\u5361\u4e86\u5f88\u4e45\u4e2d\u5348\u6709\u7a7a\u53c8\u770b\u4e86\u4f1a\u624d\u80fd\u89e3\u51fa\u6765\uff0c\u4e3b\u8981\u539f\u56e0\u6811\u578b\u7ed3\u6784\u6570\u636e\u7684\u904d\u5386\u6709\u4e9b\u5fd8\u8bb0\u4e86\uff0c\u5ba1\u9898\u601d\u8def\u4e5f\u9519\u4e86\u3002\u505a\u5b8c\u540e\u5199\u4e86\u4e2a\u9898\u89e3\u3002"),(0,i.kt)("h2",{id:"\u5468\u8d5b\u611f\u609f"},"\u5468\u8d5b\u611f\u609f"),(0,i.kt)("p",null,"\u5468\u8d5b\u7ed3\u675f\u6709\u4e00\u79cd\u5c31\u4e1a\u7b14\u8bd5\u7684\u611f\u89c9\uff0c\u800c\u4e14\u6210\u7ee9\u8fd8\u4e0d\u662f\u5f88\u7406\u60f3\uff0c\u4f46\u662f\u8fd9\u6b21\u505a\u9898\u53cd\u800c\u8ba9\u6211\u611f\u89c9\u5f88\u6709\u610f\u601d\uff0c\u4e4b\u524d\u90fd\u6ca1\u53c2\u52a0\u8fc7\u8fd9\u7c7b\u7684\u5237\u9898\u6bd4\u8d5b\u3002"),(0,i.kt)("p",null,"\u5468\u8d5b\u7684\u9898\u76ee\u7814\u7a76\u5b8c\u540e\uff0c\u53d1\u73b0\u6709\u610f\u601d\u7684\u4e00\u70b9\u662f\u5468\u8d5b\u57fa\u672c\u6ca1\u6709\u7528JS\u7684\uff0c\u63d0\u4ea4\u5b8c\u53bb\u9898\u89e3\u4e00\u770b\u90fd\u6ca1\u6709\u540c\u884c\u5bf9\u6bd4\u8fd0\u884c\u65f6\u95f4\u548c\u5185\u5b58\u5360\u7528\u3002\u4e0d\u8fc7\u60f3\u60f3\u4e5f\u662f\uff0c\u524d\u7aef\u7b97\u6cd5\u5c97\u8fd8\u771f\u6ca1\u89c1\u5230\u8fc7\u51e0\u4e2a\uff0c\u800c\u4e14\u7528\u5176\u4ed6\u8bed\u8a00\u7684\u8bdd\uff0c\u5bf9\u4e00\u4e9b\u6570\u636e\u7ed3\u6784\u7684\u4f7f\u7528\u548c\u7406\u89e3\u4e0a\u4e5f\u90fd\u66f4\u53cb\u597d\u4e00\u4e9b\u3002\u6392\u884c\u699c\u4e0a\u57fa\u672c\u90fd\u662fC\u548cPython\u5c45\u591a\uff0cJAVA\u90fd\u5f88\u5c11\u89c1\u3002"),(0,i.kt)("p",null,"\u5468\u8d5b\u524d\u5341\u540d\u5956\u52b1\u7535\u8111\u5305\uff0c\u770b\u4e86\u4e0b\u6392\u884c\u699c\u7b2c\u5341\u540d\u89e3\u9898\u65f6\u95f4",(0,i.kt)("strong",{parentName:"p"},"0:14:14"),"\uff0c\u7b2c\u4e00\u540d ",(0,i.kt)("strong",{parentName:"p"},"0:09:36"),"\uff0c\u81ea\u5df1\u505a\u4e00\u9053\u9898\u7684\u65f6\u95f4\u4ed6\u4eec\u505a\u5b8c4\u9053\uff0c\u611f\u89c9\u73b0\u5728\u77e5\u9053\u601d\u8def\u518d\u56de\u5934\u505a\u4e5f\u5c31\u505a\u8fd9\u4e48\u5feb\u4e86\uff0c\u867d\u8bf4\u81ea\u5df1\u4e5f\u6ca1\u4ec0\u4e48\u597d\u80dc\u5fc3\uff0c\u4f46\u662f\u770b\u5230\u8fd9\u6570\u5b57\u4e5f\u4e0d\u7981\u8ba9\u4eba\u611f\u53f9\u5929\u624d\u548c\u51e1\u4eba\u7684\u5dee\u8ddd\u771f\u597d\u4f3c\u5929\u5811\uff0c\u8fd8\u662f\u6162\u6162\u575a\u6301\u4e0b\u53bb\u5427\u3002"),(0,i.kt)("h2",{id:"\u4e0b\u5468\u8ba1\u5212"},"\u4e0b\u5468\u8ba1\u5212"),(0,i.kt)("p",null,"\u540e\u9762\u5237\u9898\u9664\u4e86\u6bcf\u65e5\u4e00\u7ec3\u5916\u8981\u6709\u8ba1\u5212\u6027\u4e86\uff0c\u4e0b\u5468\u5468\u8d5b\u524d\u91cd\u65b0\u770b\u4e0b\u4e8c\u5206\u67e5\u627e\u3001\u524d\u7f00\u548c\u3001\u6df1\u5e7f\u5ea6\u904d\u5386\u76f8\u5173\u7b97\u6cd5\u3002"))}s.isMDXComponent=!0}}]);