(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[0],{32:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),r=n.n(s),a=n(18),o=n.n(a),i=(n(9),n(7)),j=n(2),l=function(){return Object(c.jsxs)("nav",{children:[Object(c.jsx)(i.b,{className:"nav-link",to:"/playground",children:Object(c.jsx)("h3",{children:"Logo"})}),Object(c.jsxs)("ul",{className:"nav-links",children:[Object(c.jsx)(i.b,{className:"nav-link",to:"/playground/about",children:Object(c.jsx)("li",{children:"About"})}),Object(c.jsx)(i.b,{className:"nav-link",to:"/playground/monsters",children:Object(c.jsx)("li",{children:"Monsters"})})]})]})},u=function(){return Object(c.jsx)("div",{children:"About deez"})},d=n(15),b=n.n(d),h=n(20),O=n(16),x=function(e){var t=Object(s.useState)(!1),n=Object(O.a)(t,2),r=n[0],a=n[1];return Object(s.useEffect)((function(){a()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"submit",value:r?"-":"+",onClick:function(){return a(!r)}}),r?Object(c.jsx)(p,{desc:e.desc}):Object(c.jsx)(p,{style:{display:"none"}})]})},p=function(e){return Object(c.jsx)("div",{id:"results",children:e.desc})},m=function(){Object(s.useEffect)((function(){a()}),[]);var e=Object(s.useState)([]),t=Object(O.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(h.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mhw-db.com/monsters");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),r(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("header",{className:"section-header",children:Object(c.jsx)("h1",{children:"Monsters"})}),Object(c.jsx)("div",{className:"monster-section",children:n.map((function(e){return Object(c.jsxs)("div",{style:{backgroundImage:"url(https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-".concat(e.name.toLowerCase().replace(/ /g,"_"),"_icon.png)")},className:"monster-card",children:[Object(c.jsx)("h1",{children:e.name}),Object(c.jsx)(x,{desc:e.description})]})}))})]})},f=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Home Page"})})},v=function(){return Object(c.jsx)(i.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(l,{}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/playground",exact:!0,component:f}),Object(c.jsx)(j.a,{path:"/playground/about",component:u}),Object(c.jsx)(j.a,{path:"/playground/monsters",exact:!0,component:m})]})]})})};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[32,1,2]]]);
//# sourceMappingURL=main.9d78cf77.chunk.js.map