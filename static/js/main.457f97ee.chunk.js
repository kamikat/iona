(this["webpackJsonpiona-doc"]=this["webpackJsonpiona-doc"]||[]).push([[4],{15:function(e){e.exports=JSON.parse('{"a":"iona-doc","b":"0.1.1"}')},2:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a),c=n(6),o=n(9),i=n(11),l=n(7),u=n(25),s=n(3),d=n(22),m=n.n(d),f=n(23),b=n.n(f),v=n(26),p=r.a.createContext(null),E=function(){return Object(a.useContext)(p)},g=function(e){return Object.assign((function(t){var n=t.name,c=void 0===n?"":n,u=t.children,d=Object(l.a)(t,["name","children"]),f=Object(a.useMemo)((function(){return m()(c,{remove:/[*+~.()'"!:@/]/g})||"".concat(e,":").concat(Object(v.a)())}),[c]),g=E(),h=Object(s.a)(g,2),O=h[0],j=h[1],y=Object(a.useRef)(),x=y.current=b()(d,y.current)?y.current:d,P=Object(a.useRef)(null);Object(a.useEffect)((function(){return null===P.current?P.current=j(["ADD",Object(i.a)({type:e,id:f,name:c},x)]):j(["ADD",Object(i.a)({type:e,id:f,name:c,index:P.current},x)]),function(){j(["DELETE",Object(i.a)({type:e,id:f,name:c},x)])}}),[j,f,c,x]);var N=Object(a.useRef)(0),k=Object(a.useCallback)((function(t){var n,a=Object(s.a)(t,2),r=a[0],l=a[1],u=N.current++;return j([r,Object(i.a)((n={},Object(o.a)(n,e,{id:f,name:c}),Object(o.a)(n,"index",u),n),l)]),u}),[j,f,c]);return u?r.a.createElement(p.Provider,{value:[O,k]},u):null}),{displayName:"Iona.Node(".concat(e[0].toUpperCase()+e.slice(1),")")})},h=g("category"),O=g("group"),j=g("topic"),y=g("page"),x=g("externalLink"),P=(g("h1"),g("h2"),g("h3"),function(e){var t=e.children,n=Object(a.useReducer)((function(e,t){var n=Object(s.a)(t,2),a=n[0],r=n[1];switch(a){case"ADD":return[].concat(Object(u.a)(e),[r]);case"DELETE":return e.filter((function(e){return e.id!==r.id}));default:return e}}),[]),c=Object(s.a)(n,2),o=c[0],i=c[1];return r.a.createElement(p.Provider,{value:[o,i]},t)}),N=n(1),k=n(12),I=r.a.createContext(null),L=function(){return Object(a.useContext)(I)},w=function(e){var t=e.entries;return t.filter((function(e){return"group"===e.type})).map((function(e){var n=e.id,a=e.name,c=t.filter((function(e){var t=e.group;return(void 0===t?{}:t).id===n})),o=t.filter((function(e){var t=e.group,a=void 0===t?{}:t,r=e.topic;return a.id===n&&!r}));return r.a.createElement("div",{className:"iona-nav-group",key:n},r.a.createElement("div",{className:"iona-nav-title"},a),r.a.createElement("div",{className:"iona-nav-list"},r.a.createElement(D,{entries:o}),r.a.createElement(C,{entries:c})))}))},C=function(e){var t=e.entries;return t.filter((function(e){return"topic"===e.type})).map((function(e){var n=e.id,a=e.name,c=t.filter((function(e){var t=e.topic;return(void 0===t?{}:t).id===n}));return r.a.createElement("div",{className:"iona-nav-topic",key:n},r.a.createElement("div",{className:"iona-nav-title"},a),r.a.createElement("div",{className:"iona-nav-list"},r.a.createElement(D,{entries:c})))}))},D=function(e){var t=e.entries,n=L();return t.filter((function(e){var t=e.type;return"page"===t||"externalLink"===t})).sort((function(e,t){return e.index-t.index})).map((function(e){var t=e.id,a=e.name,o=e.type,i=e.url,l=e.loading;return r.a.createElement("div",{className:"iona-nav-entry",key:t},"page"===o?r.a.createElement("div",{className:"iona-nav-page",disabled:l},r.a.createElement(c.b,{to:M(n,e)},a)):r.a.createElement("div",{className:"iona-nav-link"},r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},a)))}))},R={a:function(e){var t=e.href,n=e.to,a=e.children,o=Object(l.a)(e,["href","to","children"]),i=L();return t?r.a.createElement("a",Object.assign({href:t,target:"_blank",rel:"noopener noreferrer"},o),a):n?r.a.createElement(c.b,Object.assign({to:"page"===n.type?M(i,n):n},o),a):null},table:function(e){var t=e.children;return r.a.createElement("div",{className:"table-wrapper"},r.a.createElement("table",null,t))}},S=function(e){var t=e.entries,n=L(),a=t.filter((function(e){return"page"===e.type})),c=a.filter((function(e){return e.default}))[0];return r.a.createElement(N.d,null,a.map((function(e){var t=e.component,a=Object(l.a)(e,["component"]),c=M(n,a);return t&&r.a.createElement(N.b,{key:c,exact:!0,path:c},r.a.createElement(k.a,{components:R},r.a.createElement(t,null)))})),r.a.createElement(N.b,{exact:!0,path:n},c&&c.component&&r.a.createElement(N.a,{to:M(n,c)})))},M=function(e,t){var n=t.category,a=void 0===n?{}:n,r=t.group,c=void 0===r?{}:r,o=t.topic,i=void 0===o?{}:o,l=t.id;return e+[a.id,c.id,i.id,l].filter((function(e){return e})).join("/")},T=function(e){var t=e.name,n=e.version,o=e.baseUrl,i=void 0===o?"/":o,l=Object(N.g)(),u=l.pathname,d=l.key,m=Object(a.useState)(""),f=Object(s.a)(m,2),b=f[0],v=f[1],p=/^\/(.*)$/.exec(b),g=p&&p[1],h=new RegExp(g||".*".concat(b,".*"),"i"),O=E(),j=Object(s.a)(O,1)[0],y=j.filter((function(e){return"category"===e.type})),x=y.map((function(e){return e.id})).find((function(e){return u.startsWith(i+e+"/")})),P=y[0]&&y[0].id,k=Object(a.useState)(x),L=Object(s.a)(k,2),R=L[0],M=L[1];Object(a.useEffect)((function(){M(x||P)}),[x,P]);var T=j.filter((function(e){var t=e.type,n=e.title,a=e.keywords,r=void 0===a?[]:a;return"page"!==t&&"externalLink"!==t||h.test(n+"/"+r.join("/"))})),U=T.filter((function(e){var t=e.category;return(void 0===t?{}:t).id===R})),A=T.filter((function(e){var t=e.category,n=void 0===t?{}:t,a=e.group;return n.id===R&&!a})),W=T.filter((function(e){var t=e.category,n=void 0===t?{}:t,a=e.group,r=e.topic;return n.id===R&&!a&&!r})),B=Object(a.useRef)(null),G=Object(a.useRef)({});return Object(a.useEffect)((function(){void 0===G.current[d]?B.current.scrollTop=0:B.current.scrollTop=G.current[d]}),[d]),r.a.createElement(I.Provider,{value:i},r.a.createElement("div",{className:"iona-container"},r.a.createElement("div",{className:"iona-menu"},r.a.createElement("div",{className:"iona-header"},r.a.createElement("div",{className:"iona-header-title"},r.a.createElement(c.b,{to:i},t,n&&r.a.createElement("span",{className:"iona-header-title-version"},n))),r.a.createElement("div",{className:"iona-category-pane"},y.map((function(e){var t=e.name,n=e.id;return r.a.createElement("div",{key:n,className:"iona-category-item",active:"".concat(R===n),onClick:function(){return M(n)}},t)})))),r.a.createElement("div",{className:"iona-search-box"},r.a.createElement("input",{type:"text",value:b,onChange:function(e){return v(e.target.value)},onKeyUp:function(e){"Escape"===e.key&&e.target.blur()}}),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.a.createElement("path",{fill:"currentColor",d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}))),r.a.createElement("div",{className:"iona-nav-pane"},r.a.createElement(D,{entries:W}),r.a.createElement(C,{entries:A}),r.a.createElement(w,{entries:U}))),r.a.createElement("div",{ref:B,className:"iona-content",onScroll:function(e){G.current[d]=e.target.scrollTop}},r.a.createElement("div",{className:"iona-content-wrapper"},r.a.createElement(S,{entries:j})))))},U=(n(37),n(38),n(39),n(40),T),A=function(e){var t=e.name,n=e.version,a=e.description,o=e.baseUrl,i=e.component,l=void 0===i?U:i,u=e.children;return r.a.createElement(P,null,u,r.a.createElement(c.a,null,r.a.createElement(l,{name:t,version:n,description:a,baseUrl:o})))},W=function(e){var t=e.sourceId,n=e.sourcePath,c=e.promise,o=Object(a.useState)(null),i=Object(s.a)(o,2),l=i[0],u=i[1],d=/.*\/([^/]+).mdx?/.exec(n)[1];return Object(a.useEffect)((function(){var e=!1;return c.then((function(t){e||u(t)})),function(){e=!0,u(null)}}),[c]),l?r.a.createElement(y,Object.assign({name:l.frontMatter.title||d},l.frontMatter,{refId:t,tableOfContents:l.tableOfContents,component:l.default})):r.a.createElement(y,{name:"...",refId:t,loading:!0,component:null})},B=function(e){var t=e.sourceId,n=(e.sourcePath,Object(l.a)(e,["sourceId","sourcePath"])),a=E(),o=Object(s.a)(a,1)[0],i=Object(k.c)().a,u=void 0===i?c.b:i,d=o.find((function(e){var n=e.type,a=e.refId;return"page"===n&&a===t}));return r.a.createElement(u,Object.assign({to:d},n))};Object.assign(A,{Category:h,Group:O,Topic:j,Page:y,ExternalLink:x,PageLoader:W,RefLinkLoader:B});t.c=A},27:function(e,t,n){e.exports=n(41)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),i=n(15),l=n(2),u=function(){return r.a.createElement(l.c,{name:i.a,version:i.b,baseUrl:"/iona/"},r.a.createElement(l.a,{name:"Manual"},r.a.createElement(l.b,{name:"General"},r.a.createElement(l.c.PageLoader,{promise:n.e(2).then(n.bind(null,42)),sourceId:"cc5d8f960c60db9cbe76e9ddd8b049bf",sourcePath:"./docs/Introduction.mdx"}),r.a.createElement(l.c.PageLoader,{promise:n.e(1).then(n.bind(null,43)),sourceId:"f408ecf19f4f13568fceee6258f24401",sourcePath:"./docs/GettingStarted.mdx"}),r.a.createElement(l.c.PageLoader,{promise:n.e(3).then(n.bind(null,44)),sourceId:"7cb1e26062ae2f02e0a8867af171a9e6",sourcePath:"./docs/WritingMDX.mdx"}),r.a.createElement(l.c.PageLoader,{promise:n.e(0).then(n.bind(null,45)),sourceId:"2e090d2d396b5f428c26b8937df3434b",sourcePath:"./docs/CreateTOC.mdx"}),r.a.createElement(l.c.PageLoader,{promise:n.e(11).then(n.bind(null,46)),sourceId:"e592e37bcaaa655c4d164376a1da8abe",sourcePath:"./docs/Styling.mdx"}),r.a.createElement(l.c.PageLoader,{promise:n.e(10).then(n.bind(null,47)),sourceId:"89d1990a1ea96d3d83e8854d4fdaa3bd",sourcePath:"./docs/Release.mdx"})),r.a.createElement(l.b,{name:"Advanced"},r.a.createElement(l.c.PageLoader,{promise:n.e(12).then(n.bind(null,48)),sourceId:"1d5f5309667ba1340876a3c7fe748fe0",sourcePath:"./docs/UseAPIProxy.mdx"}),r.a.createElement(l.c.PageLoader,{promise:n.e(13).then(n.bind(null,49)),sourceId:"8fec6a59d8cc3eb53d3f0bc432e8c8bc",sourcePath:"./docs/UseEnvVars.mdx"}),r.a.createElement(l.c.PageLoader,{promise:n.e(9).then(n.bind(null,50)),sourceId:"3dcac67bbb769263507956dec80c6211",sourcePath:"./docs/ProjectStructure.mdx"}),r.a.createElement(l.c.PageLoader,{promise:n.e(7).then(n.bind(null,51)),sourceId:"80d22f31ef3bdf03f355035dbb0dba2c",sourcePath:"./docs/CustomTheme.mdx"}),r.a.createElement(l.c.PageLoader,{promise:n.e(8).then(n.bind(null,52)),sourceId:"f79724fa9a859ecbf0c5d219d7aebb9a",sourcePath:"./docs/DesktopApp.mdx"}))),r.a.createElement(l.a,{name:"Reference"},r.a.createElement(l.b,{name:"Components"}),r.a.createElement(l.b,{name:"Miscellaneous"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,5,6]]]);
//# sourceMappingURL=main.457f97ee.chunk.js.map