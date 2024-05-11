/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={841:(t,e,n)=>{n.d(e,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([t.id,"div {\n    padding: 20px;\n    background-color: #f0f0f0;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n}\n\nh2 {\n    margin: 0 0 10px 0;\n}",""]);const c=i},905:(t,e,n)=>{n.d(e,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([t.id,"div {\n    padding: 20px;\n    background-color: #e0f7fa;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n}\n\nh2 {\n    margin: 0 0 10px 0;\n}",""]);const c=i},562:(t,e,n)=>{n.d(e,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([t.id,'form {\n    display: flex;\n    flex-direction: column;\n    width: 300px;\n    margin: 50px auto;\n    padding: 20px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n}\n\nlabel {\n    margin-bottom: 5px;\n}\n\ninput[type="text"],\ninput[type="password"] {\n    margin-bottom: 10px;\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n}\n\nbutton {\n    padding: 10px;\n    border: none;\n    border-radius: 3px;\n    background-color: #4caf50;\n    color: white;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background-color: #45a049;\n}',""]);const c=i},972:(t,e,n)=>{n.d(e,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([t.id,"html {\n    box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: inherit;\n}\n\nbody {\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n    background-color: #f0f0f0;\n    overflow-x: hidden;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n    margin: 0;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n}\n\na {\n    text-decoration: none;\n    color: #007bff;\n}\n\na:hover {\n    text-decoration: underline;\n}\n\nmain {\n    padding: 20px;\n}\n\nimg {\n    max-width: 100%;\n    height: auto;\n}",""]);const c=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var u=t[c],s=r.base?u[0]+r.base:u[0],l=a[s]||0,f="".concat(s," ").concat(l);a[s]=l+1;var p=n(f),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var d=o(h,r);r.byIndex=c,e.splice(c,0,{identifier:f,updater:d,references:1})}i.push(f)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var u=r(t,o),s=0;s<a.length;s++){var l=n(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=u}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(72),e=n.n(t),r=n(825),o=n.n(r),a=n(659),i=n.n(a),c=n(56),u=n.n(c),s=n(540),l=n.n(s),f=n(113),p=n.n(f),h=n(972),d={};function y(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.every((function(t){return t.trim()}))}function v(){localStorage.removeItem("token"),H("/login")}d.styleTagTransform=p(),d.setAttributes=u(),d.insert=i().bind(null,"head"),d.domAPI=o(),d.insertStyleElement=l(),e()(h.A,d),h.A&&h.A.locals&&h.A.locals;var m=n(562),g={};function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function w(){w=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),c=new P(r||[]);return o(i,"_invoke",{value:j(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",h="suspendedYield",d="executing",y="completed",v={};function m(){}function g(){}function x(){}var E={};s(E,i,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(N([])));k&&k!==n&&r.call(k,i)&&(E=k);var S=x.prototype=m.prototype=Object.create(E);function A(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==b(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function j(e,n,r){var o=p;return function(a,i){if(o===d)throw Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=T(c,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var s=f(e,n,r);if("normal"===s.type){if(o=r.done?y:h,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=y,r.method="throw",r.arg=s.arg)}}}function T(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var a=f(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(b(e)+" is not iterable")}return g.prototype=x,o(S,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:g,configurable:!0}),g.displayName=s(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},A(O.prototype),s(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new O(l(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},A(S),s(S,u,"Generator"),s(S,i,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=N,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}function x(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function E(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){x(a,r,o,i,c,"next",t)}function c(t){x(a,r,o,i,c,"throw",t)}i(void 0)}))}}function L(t,e){return k.apply(this,arguments)}function k(){return(k=E(w().mark((function t(e,n){var r,o,a;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:4000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:n})});case 3:if((r=t.sent).ok){t.next=9;break}return t.next=7,r.text();case 7:throw o=t.sent,new Error("Error ".concat(r.status,": ").concat(o));case 9:return t.next=11,r.json();case 11:return a=t.sent,t.abrupt("return",a.token);case 15:return t.prev=15,t.t0=t.catch(0),console.error("Login failed:",t.t0),t.abrupt("return",null);case 19:case"end":return t.stop()}}),t,null,[[0,15]])})))).apply(this,arguments)}g.styleTagTransform=p(),g.setAttributes=u(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),e()(m.A,g),m.A&&m.A.locals&&m.A.locals;var S=n(841),A={};A.styleTagTransform=p(),A.setAttributes=u(),A.insert=i().bind(null,"head"),A.domAPI=o(),A.insertStyleElement=l(),e()(S.A,A),S.A&&S.A.locals&&S.A.locals;var O=n(905),j={};j.styleTagTransform=p(),j.setAttributes=u(),j.insert=i().bind(null,"head"),j.domAPI=o(),j.insertStyleElement=l(),e()(O.A,j),O.A&&O.A.locals&&O.A.locals;var T={private:[{path:"/dashboard",component:function(){document.getElementById("root").innerHTML='\n    <nav>\n      <button id="logout">Logout</button>\n      <button id="reports">Reportes</button>\n    </nav>\n    <h2>Home</h2>\n    <p>Welcome to the home view.</p>\n  ',document.getElementById("logout").addEventListener("click",v),document.getElementById("reports").addEventListener("click",(function(){return H("/dashboard/reports")}))}},{path:"/dashboard/reports",component:function(){document.getElementById("root").innerHTML='\n      <nav>\n        <button id="logout">Logout</button>\n      </nav>\n      <h2>Home</h2>\n      <p>Welcome to the reports view.</p>\n    ',document.getElementById("logout").addEventListener("click",logout)}}],public:[{path:"/login",component:function(){return document.getElementById("root").innerHTML='\n    <form id="loginForm">\n      <h2>Login</h2>\n      <label for="email">Email:</label>\n      <input type="text" id="email" name="email" autocomplete="email">\n      <label for="password">Password:</label>\n      <input type="password" id="password" name="password" autocomplete="current-password">\n      <button type="submit">Login</button>\n    </form>\n  ',void document.getElementById("loginForm").addEventListener("submit",function(){var t=E(w().mark((function t(e){var n,r,o;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),n=document.getElementById("email").value,r=document.getElementById("password").value,y(n,r)){t.next=6;break}return alert("Please fill in all fields"),t.abrupt("return");case 6:return t.next=8,L(n,r);case 8:(o=t.sent)?(localStorage.setItem("token",o),H("/dashboard")):alert("Invalid credentials");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}]};function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function _(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,c=[],u=!0,s=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return P(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function N(){N=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),c=new _(r||[]);return o(i,"_invoke",{value:A(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",h="suspendedYield",d="executing",y="completed",v={};function m(){}function g(){}function b(){}var w={};s(w,i,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(P([])));E&&E!==n&&r.call(E,i)&&(w=E);var L=b.prototype=m.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==I(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function A(e,n,r){var o=p;return function(a,i){if(o===d)throw Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=O(c,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var s=f(e,n,r);if("normal"===s.type){if(o=r.done?y:h,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=y,r.method="throw",r.arg=s.arg)}}}function O(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var a=f(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(e){if(e||""===e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(I(e)+" is not iterable")}return g.prototype=b,o(L,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=s(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},k(S.prototype),s(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new S(l(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(L),s(L,u,"Generator"),s(L,i,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=P,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}function G(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function F(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){G(a,r,o,i,c,"next",t)}function c(t){G(a,r,o,i,c,"throw",t)}i(void 0)}))}}var M="http://localhost:4000/api/auth/verify-token";function C(t){return B.apply(this,arguments)}function B(){return(B=F(N().mark((function t(e){var n,r,o;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(M,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 3:if((n=t.sent).ok){t.next=9;break}return t.next=7,n.text();case 7:throw r=t.sent,new Error("Error ".concat(n.status,": ").concat(r));case 9:return t.next=11,n.json();case 11:return o=t.sent,t.abrupt("return",[o.valid,o]);case 15:return t.prev=15,t.t0=t.catch(0),console.error("Token verification failed:",t.t0),t.abrupt("return",[!1,{message:t.t0.message}]);case 19:case"end":return t.stop()}}),t,null,[[0,15]])})))).apply(this,arguments)}function H(t){window.history.pushState({},"",window.location.origin+t),z()}function R(t){return Y.apply(this,arguments)}function Y(){return(Y=F(N().mark((function t(e){var n,r,o;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=localStorage.getItem("token"))){t.next=23;break}return t.next=4,C(n);case 4:if(r=t.sent,!_(r,1)[0]){t.next=20;break}if("/login"!==e&&"/"!==e){t.next=11;break}return H("/dashboard"),t.abrupt("return");case 11:if(!(o=T.private.find((function(t){return t.path===e})))){t.next=17;break}return o.component(),t.abrupt("return");case 17:H("/dashboard");case 18:t.next=21;break;case 20:H("/login");case 21:t.next=24;break;case 23:H("/login");case 24:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function z(){return D.apply(this,arguments)}function D(){return(D=F(N().mark((function t(){var e,n,r,o,a;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("/login"!==(e=window.location.pathname)&&"/"!==e){t.next=12;break}if(!(n=localStorage.getItem("token"))){t.next=12;break}return t.next=6,C(n);case 6:if(r=t.sent,!_(r,1)[0]){t.next=12;break}return H("/dashboard"),t.abrupt("return");case 12:o=T.public.find((function(t){return t.path===e})),a=T.private.find((function(t){return t.path===e})),o?o.component():a?R(e):(console.warn("Ruta no encontrada:",e),H("/login"));case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}window.onpopstate=z,z(),document.addEventListener("DOMContentLoaded",(function(){if(!document.getElementById("root"))throw new Error("App container not found");z()}))})()})();