(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),s=(a(9),a(1));a(10);var i=function(){var e=Object(n.useState)(5),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(25),i=Object(s.a)(l,2),m=i[0],o=i[1],d=Object(n.useState)(25),u=Object(s.a)(d,2),f=u[0],b=u[1],p=Object(n.useState)(0),E=Object(s.a)(p,2),g=E[0],h=E[1],k=Object(n.useState)(!1),v=Object(s.a)(k,2),N=v[0],x=v[1],O=Object(n.useState)(!0),w=Object(s.a)(O,2),j=w[0],S=w[1],y=function(e){"break-decrement"===e.currentTarget.id?1!==a&&c(a-1):"break-increment"===e.currentTarget.id?60!==a&&c(a+1):"session-decrement"===e.currentTarget.id?1!==m&&(o(m-1),!N&&j&&(b(m-1),h(0))):"session-increment"===e.currentTarget.id?60!==m&&(o(m+1),!N&&j&&(b(m+1),h(0))):"start_stop"===e.currentTarget.id?x(!N):"reset"===e.currentTarget.id&&(c(5),o(25),b(25),h(0),x(!1),S(!0),document.getElementById("beep").pause(),document.getElementById("beep").currentTime=0)};return Object(n.useEffect)((function(){var e;return N&&(e=setInterval((function(){0===g&&0===f?(h(0),S(!j),b(j?a:m)):1===g&&0===f?(document.getElementById("beep").play(),h((function(e){return e-1}))):0===g?(b((function(e){return e-1})),h(59)):h((function(e){return e-1}))}),1e3)),function(){return clearInterval(e)}})),r.a.createElement("div",{className:"App vh-100 d-flex align-items-center justify-content-center"},r.a.createElement("div",{className:"d-flex flex-column align-items-center container"},r.a.createElement("h1",{className:"text-center mb-3"},"POMODORO CLOCK"),r.a.createElement("div",{className:"row container",style:{maxWidth:500}},r.a.createElement("div",{className:"col-12 col-sm-6 d-flex flex-column align-items-center"},r.a.createElement("h3",{className:"text-center",id:"break-label"},"Break Length"),r.a.createElement("div",{className:"d-flex"},r.a.createElement("i",{className:"fa fa-arrow-down fa-2x",onClick:y,id:"break-decrement"}),r.a.createElement("h3",{className:"pl-3 pr-3",id:"break-length"},a),r.a.createElement("i",{className:"fa fa-arrow-up fa-2x",onClick:y,id:"break-increment"}))),r.a.createElement("div",{className:"col-12 col-sm-6 d-flex flex-column align-items-center"},r.a.createElement("h3",{className:"text-center",id:"break-label"},"Session Length"),r.a.createElement("div",{className:"d-flex"},r.a.createElement("i",{className:"fa fa-arrow-down fa-2x",onClick:y,id:"break-decrement"}),r.a.createElement("h3",{className:"pl-3 pr-3",id:"break-length"},m),r.a.createElement("i",{className:"fa fa-arrow-up fa-2x",onClick:y,id:"break-increment"})))),r.a.createElement("br",null),r.a.createElement("div",{id:"sessionBorder",className:"d-flex flex-column align-items-center border border-danger rounded p-2 pl-3 pr-3 mb-2"},r.a.createElement("h2",{id:"timer-label"},j?"Session":"Break"),r.a.createElement("h1",{id:"time-left"},f.toString().padStart(2,0),":",g.toString().padStart(2,0))),r.a.createElement("div",null,r.a.createElement("span",{className:"pr-1",id:"start_stop",onClick:y},r.a.createElement("i",{className:"fa fa-play fa-lg"}),r.a.createElement("i",{className:"fa fa-pause fa-lg"})),r.a.createElement("span",{className:"pl-1",id:"reset",onClick:y},r.a.createElement("i",{className:"fa fa-refresh fa-lg",style:{fontSize:16}}))),r.a.createElement("div",null,r.a.createElement("audio",{id:"beep",src:"./sound/beep.wav"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.0a318d7b.chunk.js.map