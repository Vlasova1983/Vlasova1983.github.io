"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[918],{6918:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var a=t(9434),r=t(7689),s=t(1087),c=t(1686),i=t.n(c),o=t(8019),u=t(854),l=t(873),d="OneCard_title__dypUH",f="OneCard_card__6NyV8",_="OneCard_imgConteiner__Z0gtV",h="OneCard_image__sE-aq",v="OneCard_conteinerText__To9T3",m="OneCard_description__v3-A1",p="OneCard_conteinerOptions__tjwhb",x="OneCard_option__npjtR",j="OneCard_priority__yQuGk",g="OneCard_conteinerButton__85QU4",N="OneCard_editButton__jqKy2",y="OneCard_deleteButton__MMQ-A",C=t(3329),k=function(e){var n=e.event,t=(0,o.J)().lang,a=(0,u.z)(),c=a.events,k=a.setEvents,b=(0,r.s0)(),O=n[0];return(0,C.jsx)(C.Fragment,{children:void 0===O?(0,C.jsx)("p",{}):(0,C.jsxs)("div",{children:[(0,C.jsx)("h2",{className:d,children:O.title}),(0,C.jsxs)("div",{className:f,children:[(0,C.jsx)("div",{className:_,children:(0,C.jsx)("img",{className:h,srcSet:"".concat(O.url," 1x, ").concat(O.url2," 2x"),src:O.url,alt:"Event",width:"100%",height:"100%",loading:"lazy"})}),(0,C.jsxs)("div",{className:v,children:[(0,C.jsx)("p",{className:m,children:O.description}),(0,C.jsxs)("div",{className:p,children:[(0,C.jsx)("p",{className:x,children:O.category}),(0,C.jsx)("p",{className:j,style:{color:(0,l.L)(O.priority)},children:O.priority}),(0,C.jsx)("p",{className:x,children:O.location}),"en"===t?(0,C.jsxs)("p",{className:x,children:[O.date," at ",O.time]}):(0,C.jsxs)("p",{className:x,children:[O.date," \u0432 ",O.time]})]})]}),(0,C.jsxs)("div",{className:g,children:[(0,C.jsx)(s.rU,{className:N,to:"edit",children:"en"===t?(0,C.jsx)("p",{children:"Edit"}):(0,C.jsx)("p",{children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"})}),"en"===t?(0,C.jsx)("button",{className:y,type:"button",onClick:function(){"en"===t?i().Notify.success("Congratulations! You have successfully deleted the event"):i().Notify.failure("\u0412\u0456\u0442\u0430\u0454\u043c\u043e!\u0412\u0438 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0432\u0438\u0434\u0430\u043b\u0438\u043b\u0438 \u043f\u043e\u0434\u0456\u044e."),k(c.filter((function(e){return e.id!==O.id}))),b(-1)},children:"Delete event"}):(0,C.jsx)("button",{className:y,type:"button",onClick:function(){"en"===t?i().Notify.success("Congratulations! You have successfully deleted the event"):i().Notify.failure("\u0412\u0456\u0442\u0430\u0454\u043c\u043e!\u0412\u0438 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0432\u0438\u0434\u0430\u043b\u0438\u043b\u0438 \u043f\u043e\u0434\u0456\u044e."),k(c.filter((function(e){return e.id!==O.id}))),b(-1)},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u043f\u043e\u0434\u0456\u044e"})]})]})]})})},b=t(7386),O="OneEvent_conteiner__F4das",B="OneEvent_conteinerPage__pzSer",w=function(){var e=(0,r.UO)().eventId,n=(0,a.v9)((function(e){return e.events.data}));return(0,C.jsxs)("section",{className:O,children:[(0,C.jsx)(b.Z,{}),(0,C.jsx)("div",{className:B,children:(0,C.jsx)(k,{event:n.filter((function(n){return n.id.includes(e)}))})})]})}},7386:function(e,n,t){t.d(n,{Z:function(){return _}});var a=t(7689),r=t(1523),s=t.n(r),c=t(6651),i=t(8019),o=t(9439),u=t(2791),l=t(79),d={backButton:"BackButton_backButton__-woV6"},f=t(3329),_=function(){var e=(0,i.J)().lang,n=function(){var e=(0,u.useState)(),n=(0,o.Z)(e,2);return{jumpBack:n[0],setInJumpBack:n[1]}}().setInJumpBack,t=(0,a.UO)().eventId,r=(0,a.s0)(),_=window.location.pathname;return(0,f.jsxs)("button",{onClick:function(){_==="/event/".concat(t)?(n((0,l.N)()),r(-1)):r(-1)},type:"button",className:d.backButton,children:[(0,f.jsx)(s(),{path:c.J3k,size:1}),"en"===e?(0,f.jsx)("p",{className:d.backButtonText,children:"Back"}):(0,f.jsx)("p",{className:d.backButtonText,children:"\u041d\u0430\u0437\u0430\u0434"})]})}},854:function(e,n,t){t.d(n,{z:function(){return c}});var a=t(9439),r=t(2791),s=t(801),c=function(){var e=(0,r.useState)((function(){return JSON.parse(localStorage.getItem("events"))||s})),n=(0,a.Z)(e,2);return{events:n[0],setEvents:n[1]}}},8019:function(e,n,t){t.d(n,{J:function(){return s}});var a=t(9439),r=t(2791),s=function(){var e=(0,r.useState)(localStorage.getItem("language")||"en"),n=(0,a.Z)(e,2),t=n[0],s=n[1];return(0,r.useLayoutEffect)((function(){document.documentElement.setAttribute("language",t),localStorage.setItem("language",t)}),[t]),{lang:t,setLang:s}}},873:function(e,n,t){t.d(n,{L:function(){return a}});var a=function(e){switch(e){case"Medium":case"\u0412\u0430\u0436\u043b\u0438\u0432\u0430":return"rgba(226, 163, 0, 1)";case"Hight":case"\u0421\u0435\u0440\u0435\u0434\u043d\u044f":return"rgba(255, 43, 119, 1)";case"Low":case"\u041d\u0438\u0437\u044c\u043a\u0430":return"rgba(107, 212, 117, 1)";default:throw new Error("Unsupported variant prop value - ".concat(e))}}},79:function(e,n,t){t.d(n,{N:function(){return a}});var a=function(){return"".concat(Math.floor(16777215*Math.random()).toString(16))}}}]);
//# sourceMappingURL=918.039f947a.chunk.js.map