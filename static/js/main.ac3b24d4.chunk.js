(this["webpackJsonpreact-tutorial-with-ts"]=this["webpackJsonpreact-tutorial-with-ts"]||[]).push([[0],{35:function(n,e,t){"use strict";t.r(e);var i,r,c,o,a,s,l,d,b,u,j,p,x,h,f,g,v,m,O,y=t(19),k=t.n(y),w=t(7),C=t(2),P=t(3),E=(t(27),Object(P.a)(i||(i=Object(C.a)(["\n  body {\n    font-family:\n      'Helvetica Neue',\n      Arial,\n      'Hiragino Kaku Gothic ProN',\n      'Hiragino Sans',\n      Meiryo,\n      sans-serif;\n  }\n"])))),I=t(4),q={basePath:"/",paths:{reactTutorial:"".concat("/","reactTutorial"),dragAndDrop:"".concat("/","dragAndDrop")}},T=t(1),z=function(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(A,{children:[Object(T.jsx)(H,{children:Object(T.jsx)("h1",{children:"SandBox"})}),Object(T.jsx)(S,{children:Object(T.jsxs)(B,{children:[Object(T.jsx)(w.b,{to:"/reactTutorial",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb(\u4e94\u76ee\u4e26\u3079)"}),Object(T.jsx)(w.b,{to:"/dragAndDrop",children:"\u30c9\u30e9\u30c3\u30b0\u30c9\u30ed\u30c3\u30d7\u3067\u753b\u50cf\u4e26\u3073\u66ff\u3048"})]})})]})})},A=P.b.div(r||(r=Object(C.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  color: white;\n  text-align: center;\n  background-color: gray;\n"]))),H=P.b.header(c||(c=Object(C.a)(["\n  position: absolute;\n  top: 64px;\n\n  > h1 {\n    font-size: 96px;\n  }\n"]))),S=P.b.main(o||(o=Object(C.a)(["\n  font-size: 24px;\n  font-weight: bold;\n  color: lightgreen;\n"]))),B=P.b.div(a||(a=Object(C.a)(["\n  > * {\n    margin-bottom: 36px;\n  }\n\n  > *:last-child {\n    margin-right: 0;\n  }\n\n  > a {\n    display: block;\n    margin-top: 8px;\n\n    &:hover {\n      opacity: 0.9;\n      transform: scale(1.05);\n    }\n  }\n"]))),D=t(8),R=t(0),X=function(n){var e=n.value,t=n.onClick;return Object(T.jsx)(L,{type:"button",onClick:t,children:e})},L=P.b.button(s||(s=Object(C.a)(["\n  float: left;\n  width: 34px;\n  height: 34px;\n  padding: 0;\n  margin-top: -1px;\n  margin-right: -1px;\n  margin-left: 0;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 34px;\n  text-align: center;\n  background: #fff;\n  border: 1px solid #999;\n\n  &:focus {\n    background: #ddd;\n    outline: none;\n  }\n"]))),M=function(n){var e=n.squares,t=n.onClick,i=function(n){return Object(T.jsx)(X,{value:e[n],onClick:function(){return t(n)}})};return Object(T.jsxs)("div",{children:[Object(T.jsxs)(F,{children:[i(0),i(1),i(2)]}),Object(T.jsxs)(F,{children:[i(3),i(4),i(5)]}),Object(T.jsxs)(F,{children:[i(6),i(7),i(8)]})]})},F=P.b.div(l||(l=Object(C.a)(["\n  &::after {\n    display: table;\n    clear: both;\n    content: '';\n  }\n"]))),G=function(n){var e=n.history,t=n.onClick,i=e.map((function(n,e){var i=e?"Go to move #".concat(e):"Go to move start";return Object(T.jsx)("li",{children:Object(T.jsx)("button",{type:"button",onClick:function(){return t(e)},children:i})},e)}));return Object(T.jsx)(N,{children:i})},N=P.b.ol(d||(d=Object(C.a)(["\n  padding-left: 30px;\n"]))),Y=function(n){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<e.length;t++){var i=Object(D.a)(e[t],3),r=i[0],c=i[1],o=i[2];if(n[r]&&n[r]===n[c]&&n[r]===n[o])return n[r]}return null},J=function(){var n,e=Object(R.useState)([{squares:Array(9).fill("")}]),t=Object(D.a)(e,2),i=t[0],r=t[1],c=Object(R.useState)(!0),o=Object(D.a)(c,2),a=o[0],s=o[1],l=Object(R.useState)(0),d=Object(D.a)(l,2),b=d[0],u=d[1],j=i[b],p=Y(j.squares);return n=p?"Winner: ".concat(p):"Next player: ".concat(a?"X":"O"),Object(T.jsxs)(K,{children:[Object(T.jsx)(W,{children:Object(T.jsx)(M,{squares:j.squares,onClick:function(n){return function(n){var e=i.slice(0,b+1),t=e[e.length-1].squares.slice();Y(t)||t[n]||(t[n]=a?"X":"O",r(e.concat([{squares:t}])),s(!a),u(e.length))}(n)}})}),Object(T.jsxs)(Q,{children:[Object(T.jsx)(U,{children:n}),Object(T.jsx)(G,{history:i,onClick:function(n){s(n%2===0),u(n)}})]})]})},K=P.b.div(b||(b=Object(C.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),W=P.b.div(u||(u=Object(C.a)(["\n  margin: 0;\n"]))),Q=P.b.div(j||(j=Object(C.a)(["\n  margin-left: 20px;\n"]))),U=P.b.div(p||(p=Object(C.a)(["\n  margin-bottom: 10px;\n"]))),V=function(){return Object(T.jsxs)(Z,{children:[Object(T.jsx)(J,{}),Object(T.jsx)($,{children:Object(T.jsx)(w.b,{to:"/",children:"TopPage"})})]})},Z=P.b.div(x||(x=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  padding: 64px;\n  overflow: hidden;\n  background-color: lightgray;\n"]))),$=P.b.div(h||(h=Object(C.a)(["\n  position: absolute;\n  bottom: 32px;\n  font-size: 24px;\n  color: blue;\n"]))),_=t(12),nn=function(n){var e=n.index,t=n.value,i=n.events;return Object(T.jsx)(en,Object(_.a)(Object(_.a)({},i),{},{children:Object(T.jsx)(tn,{src:t,alt:"\u30bd\u30fc\u30c8\u53ef\u80fd\u306a\u753b\u50cf"})}),e)},en=P.b.div(f||(f=Object(C.a)(["\n  width: 100px;\n  height: 130px;\n  margin: 3;\n  overflow: hidden;\n  cursor: grab;\n  user-select: none;\n  border-radius: 5px;\n"]))),tn=P.b.img(g||(g=Object(C.a)(["\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  object-fit: cover;\n"]))),rn=[t.p+"static/media/01.d32a247c.jpeg",t.p+"static/media/02.9167092d.jpeg",t.p+"static/media/03.c25e970b.jpeg",t.p+"static/media/04.0a3dd493.jpeg",t.p+"static/media/05.86caaa19.jpeg",t.p+"static/media/06.af3794e8.jpeg",t.p+"static/media/07.8c9775ff.jpeg",t.p+"static/media/08.d5adb99b.jpeg",t.p+"static/media/09.799c0038.jpeg"],cn=function(){var n=function(n){var e=Object(R.useState)(n),t=Object(D.a)(e,2),i=t[0],r=t[1],c=Object(R.useRef)({keys:new Map,dndItems:[],canCheckHovered:!0,pointerPosition:{x:0,y:0},dragElement:null}).current,o=function(n){var e=n.clientX,t=n.clientY,i=c.dndItems,o=c.dragElement,a=c.pointerPosition;if(o){var s=e-a.x,l=t-a.y,d=o.element.style;if(d.zIndex="100",d.cursor="grabbling",d.transform="translate(".concat(s,"px, ").concat(l,"px)"),c.canCheckHovered){c.canCheckHovered=!1,setTimeout((function(){c.canCheckHovered=!0}),300);var b=i.findIndex((function(n){return n.key===o.key})),u=i.findIndex((function(e,t){var i=e.element;return t!==b&&function(n,e){var t=n.clientX,i=n.clientY,r=e.getBoundingClientRect();return i<r.bottom&&i>r.top&&t<r.right&&t>r.left}(n,i)}));if(-1!==u){c.pointerPosition.x=e,c.pointerPosition.y=t,i.splice(b,1),i.splice(u,0,o);var j=o.element.getBoundingClientRect(),p=j.left,x=j.top;o.position={x:p,y:x},r(i.map((function(n){return n.value})))}}}},a=function n(e){var t=c.dragElement;if(t){var i=t.element.style;i.zIndex="",i.cursor="",i.transform="",c.dragElement=null,window.removeEventListener("mouseup",n),window.removeEventListener("mousemove",o)}};return i.map((function(n){var e=c.keys.get(n)||Math.random().toString(16);return c.keys.set(n,e),{value:n,key:e,events:{ref:function(t){if(t){var i=c.dndItems,r=c.dragElement,o=c.pointerPosition;t.style.transform="";var a=t.getBoundingClientRect(),s={x:a.left,y:a.top},l=i.findIndex((function(n){return n.key===e}));if(-1===l&&i.push({key:e,value:n,element:t,position:s}),(null===r||void 0===r?void 0:r.key)===e){var d=r.position.x-s.x,b=r.position.y-s.y;t.style.transform="translate(".concat(d,"px, ").concat(b,"px)"),o.x-=d,o.y-=b}if((null===r||void 0===r?void 0:r.key)!==e){var u=i[l],j=(null===u||void 0===u?void 0:u.position.x)-s.x,p=(null===u||void 0===u?void 0:u.position.y)-s.y;t.style.transition="",t.style.transform="translate(".concat(j,"px,").concat(p,"px)"),requestAnimationFrame((function(){t.style.transform="",t.style.transition="all 300ms"}))}c.dndItems[l]={key:e,value:n,element:t,position:s}}},onMouseDown:function(t){var i=t.currentTarget;c.pointerPosition.x=t.clientX,c.pointerPosition.y=t.clientY,i.style.transition="",i.style.cursor="grabbing";var r=i.getBoundingClientRect(),s={x:r.left,y:r.top};c.dragElement={key:e,value:n,element:i,position:s},window.addEventListener("mouseup",a),window.addEventListener("mousemove",o)}}}}))}(rn);return Object(T.jsx)(on,{children:n.map((function(n){return Object(T.jsx)(nn,Object(_.a)({index:n.key},n))}))})},on=P.b.div(v||(v=Object(C.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 350px;\n  max-height: 500px;\n"]))),an=function(){return Object(T.jsxs)(sn,{children:[Object(T.jsx)(cn,{}),Object(T.jsx)(ln,{children:Object(T.jsx)(w.b,{to:"/",children:"TopPage"})})]})},sn=P.b.div(m||(m=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  padding: 64px;\n  overflow: hidden;\n  background-color: lightgray;\n"]))),ln=P.b.div(O||(O=Object(C.a)(["\n  position: absolute;\n  bottom: 32px;\n  font-size: 24px;\n  color: blue;\n"]))),dn=function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(I.a,{path:q.basePath,exact:!0,children:Object(T.jsx)(z,{})}),Object(T.jsx)(I.a,{path:q.paths.reactTutorial,children:Object(T.jsx)(V,{})}),Object(T.jsx)(I.a,{path:q.paths.dragAndDrop,children:Object(T.jsx)(an,{})})]})};k.a.render(Object(T.jsxs)(w.a,{basename:"/react-typescript-sandbox",children:[Object(T.jsx)(E,{}),Object(T.jsx)(dn,{})]}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ac3b24d4.chunk.js.map