/*! For license information please see component---src-pages-index-js-539920d83127890cb749.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"3UD+":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},BWml:function(e,t,n){"use strict";e.exports=n("P4nH")},DSFK:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},"HR/i":function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var r,o=[],i="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(r||(r={}));var u,a=function(){function e(e,t,n,r){return this.x=e,this.y=t,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),c=function(e){return e instanceof SVGElement&&"getBBox"in e},s=function(e){if(c(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var o=e,i=o.offsetWidth,u=o.offsetHeight;return!(i||u||e.getClientRects().length)},l=function(e){var t,n,r=null===(n=null===(t=e)||void 0===t?void 0:t.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(r&&e instanceof r.Element)},f="undefined"!=typeof window?window:{},p=new WeakMap,h=/auto|scroll/,b=/^tb|vertical/,d=/msie|trident/i.test(f.navigator&&f.navigator.userAgent),v=function(e){return parseFloat(e||"0")},y=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=!1),Object.freeze({inlineSize:(n?t:e)||0,blockSize:(n?e:t)||0})},m=Object.freeze({devicePixelContentBoxSize:y(),borderBoxSize:y(),contentBoxSize:y(),contentRect:new a(0,0,0,0)}),g=function(e,t){if(void 0===t&&(t=!1),p.has(e)&&!t)return p.get(e);if(s(e))return p.set(e,m),m;var n=getComputedStyle(e),r=c(e)&&e.ownerSVGElement&&e.getBBox(),o=!d&&"border-box"===n.boxSizing,i=b.test(n.writingMode||""),u=!r&&h.test(n.overflowY||""),l=!r&&h.test(n.overflowX||""),f=r?0:v(n.paddingTop),g=r?0:v(n.paddingRight),w=r?0:v(n.paddingBottom),x=r?0:v(n.paddingLeft),O=r?0:v(n.borderTopWidth),E=r?0:v(n.borderRightWidth),T=r?0:v(n.borderBottomWidth),j=x+g,S=f+w,B=(r?0:v(n.borderLeftWidth))+E,R=O+T,z=l?e.offsetHeight-R-e.clientHeight:0,P=u?e.offsetWidth-B-e.clientWidth:0,k=o?j+B:0,_=o?S+R:0,C=r?r.width:v(n.width)-k-P,M=r?r.height:v(n.height)-_-z,I=C+j+P+B,A=M+S+z+R,D=Object.freeze({devicePixelContentBoxSize:y(Math.round(C*devicePixelRatio),Math.round(M*devicePixelRatio),i),borderBoxSize:y(I,A,i),contentBoxSize:y(C,M,i),contentRect:new a(x,f,C,M)});return p.set(e,D),D},w=function(e,t,n){var o=g(e,n),i=o.borderBoxSize,u=o.contentBoxSize,a=o.devicePixelContentBoxSize;switch(t){case r.DEVICE_PIXEL_CONTENT_BOX:return a;case r.BORDER_BOX:return i;default:return u}},x=function(e){var t=g(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=[t.borderBoxSize],this.contentBoxSize=[t.contentBoxSize],this.devicePixelContentBoxSize=[t.devicePixelContentBoxSize]},O=function(e){if(s(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},E=function(){var e=1/0,t=[];o.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(t){var n=new x(t.target),o=O(t.target);r.push(n),t.lastReportedSize=w(t.target,t.observedBox),o<e&&(e=o)})),t.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=t;n<r.length;n++){(0,r[n])()}return e},T=function(e){o.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(n){n.isActive()&&(O(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))}))}))},j=function(){var e,t=0;for(T(t);o.some((function(e){return e.activeTargets.length>0}));)t=E(),T(t);return o.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:i}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=i),window.dispatchEvent(e)),t>0},S=[],B=function(e){if(!u){var t=0,n=document.createTextNode("");new MutationObserver((function(){return S.splice(0).forEach((function(e){return e()}))})).observe(n,{characterData:!0}),u=function(){n.textContent=""+(t?t--:t++)}}S.push(e),u()},R=0,z={attributes:!0,characterData:!0,childList:!0,subtree:!0},P=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],k=function(e){return void 0===e&&(e=0),Date.now()+e},_=!1,C=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!_){_=!0;var n,r=k(e);n=function(){var n=!1;try{n=j()}finally{if(_=!1,e=r-k(),!R)return;n?t.run(1e3):e>0?t.run(e):t.start()}},B((function(){requestAnimationFrame(n)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,z)};document.body?t():f.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),P.forEach((function(t){return f.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),P.forEach((function(t){return f.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),M=function(e){!R&&e>0&&C.start(),!(R+=e)&&C.stop()},I=function(){function e(e,t){this.target=e,this.observedBox=t||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=w(this.target,this.observedBox,!0);return e=this.target,c(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),A=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},D=new WeakMap,L=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},F=function(){function e(){}return e.connect=function(e,t){var n=new A(e,t);D.set(e,n)},e.observe=function(e,t,n){var r=D.get(e),i=0===r.observationTargets.length;L(r.observationTargets,t)<0&&(i&&o.push(r),r.observationTargets.push(new I(t,n&&n.box)),M(1),C.schedule())},e.unobserve=function(e,t){var n=D.get(e),r=L(n.observationTargets,t),i=1===n.observationTargets.length;r>=0&&(i&&o.splice(o.indexOf(n),1),n.observationTargets.splice(r,1),M(-1))},e.disconnect=function(e){var t=this,n=D.get(e);n.observationTargets.slice().forEach((function(n){return t.unobserve(e,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},e}(),N=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");F.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!l(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");F.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!l(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");F.unobserve(this,e)},e.prototype.disconnect=function(){F.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}()},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("s4An");function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(r.a)(e,t)}},LFnd:function(e,t,n){"use strict";t.a=function(e){return function(t){e.forEach((function(e){"function"==typeof e?e(t):null!=e&&(e.current=t)}))}}},ODXe:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("DSFK");var o=n("BsWD"),i=n("PYwp");function u(e,t){return Object(r.a)(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(e,t)||Object(o.a)(e,t)||Object(i.a)()}},P4nH:function(e,t,n){"use strict";var r,o,i,u,a;if("undefined"==typeof window||"function"!=typeof MessageChannel){var c=null,s=null,l=function(){if(null!==c)try{var e=t.unstable_now();c(!0,e),c=null}catch(n){throw setTimeout(l,0),n}},f=Date.now();t.unstable_now=function(){return Date.now()-f},r=function(e){null!==c?setTimeout(r,0,e):(c=e,setTimeout(l,0))},o=function(e,t){s=setTimeout(e,t)},i=function(){clearTimeout(s)},u=function(){return!1},a=t.unstable_forceFrameRate=function(){}}else{var p=window.performance,h=window.Date,b=window.setTimeout,d=window.clearTimeout;if("undefined"!=typeof console){var v=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof v&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof p&&"function"==typeof p.now)t.unstable_now=function(){return p.now()};else{var y=h.now();t.unstable_now=function(){return h.now()-y}}var m=!1,g=null,w=-1,x=5,O=0;u=function(){return t.unstable_now()>=O},a=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):x=0<e?Math.floor(1e3/e):5};var E=new MessageChannel,T=E.port2;E.port1.onmessage=function(){if(null!==g){var e=t.unstable_now();O=e+x;try{g(!0,e)?T.postMessage(null):(m=!1,g=null)}catch(n){throw T.postMessage(null),n}}else m=!1},r=function(e){g=e,m||(m=!0,T.postMessage(null))},o=function(e,n){w=b((function(){e(t.unstable_now())}),n)},i=function(){d(w),w=-1}}function j(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,o=e[r];if(!(void 0!==o&&0<R(o,t)))break e;e[r]=t,e[n]=o,n=r}}function S(e){return void 0===(e=e[0])?null:e}function B(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length;r<o;){var i=2*(r+1)-1,u=e[i],a=i+1,c=e[a];if(void 0!==u&&0>R(u,n))void 0!==c&&0>R(c,u)?(e[r]=c,e[a]=n,r=a):(e[r]=u,e[i]=n,r=i);else{if(!(void 0!==c&&0>R(c,n)))break e;e[r]=c,e[a]=n,r=a}}}return t}return null}function R(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var z=[],P=[],k=1,_=null,C=3,M=!1,I=!1,A=!1;function D(e){for(var t=S(P);null!==t;){if(null===t.callback)B(P);else{if(!(t.startTime<=e))break;B(P),t.sortIndex=t.expirationTime,j(z,t)}t=S(P)}}function L(e){if(A=!1,D(e),!I)if(null!==S(z))I=!0,r(F);else{var t=S(P);null!==t&&o(L,t.startTime-e)}}function F(e,n){I=!1,A&&(A=!1,i()),M=!0;var r=C;try{for(D(n),_=S(z);null!==_&&(!(_.expirationTime>n)||e&&!u());){var a=_.callback;if(null!==a){_.callback=null,C=_.priorityLevel;var c=a(_.expirationTime<=n);n=t.unstable_now(),"function"==typeof c?_.callback=c:_===S(z)&&B(z),D(n)}else B(z);_=S(z)}if(null!==_)var s=!0;else{var l=S(P);null!==l&&o(L,l.startTime-n),s=!1}return s}finally{_=null,C=r,M=!1}}function N(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var X=a;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){I||M||(I=!0,r(F))},t.unstable_getCurrentPriorityLevel=function(){return C},t.unstable_getFirstCallbackNode=function(){return S(z)},t.unstable_next=function(e){switch(C){case 1:case 2:case 3:var t=3;break;default:t=C}var n=C;C=t;try{return e()}finally{C=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=X,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=C;C=e;try{return t()}finally{C=n}},t.unstable_scheduleCallback=function(e,n,u){var a=t.unstable_now();if("object"==typeof u&&null!==u){var c=u.delay;c="number"==typeof c&&0<c?a+c:a,u="number"==typeof u.timeout?u.timeout:N(e)}else u=N(e),c=a;return e={id:k++,callback:n,priorityLevel:e,startTime:c,expirationTime:u=c+u,sortIndex:-1},c>a?(e.sortIndex=c,j(P,e),null===S(z)&&e===S(P)&&(A?i():A=!0,o(L,c-a))):(e.sortIndex=u,j(z,e),I||M||(I=!0,r(F))),e},t.unstable_shouldYield=function(){var e=t.unstable_now();D(e);var n=S(z);return n!==_&&null!==_&&null!==n&&null!==n.callback&&n.startTime<=e&&n.expirationTime<_.expirationTime||u()},t.unstable_wrapCallback=function(e){var t=C;return function(){var n=C;C=t;try{return e.apply(this,arguments)}finally{C=n}}}},PYwp:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return r}))},RHh3:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("s4An");function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function i(e,t,n){return(i=o()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&Object(r.a)(i,n.prototype),i}).apply(null,arguments)}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var r=n("KQm4"),o=n("q1tI"),i=n.n(o),u=n("MHn+"),a=n("Womt"),c=["green","blue"];function s(e,t,n,r){var o=r.current[e],i=o[0],u=o[1],c=o[2],s=2*Math.PI*t/12,l=i+.3*Math.cos(s),f=u+.3*Math.sin(s),p=n[e].teamColor;if("gray"===p)return{position:[l,f,c],color:"gray"};var h=0;for(var b in n){var d=n[b].teamColor;if("gray"!==d&&d!==p){var v=r.current[b],y=v[0],m=v[1],g=(v[2],y-l),w=m-f,x=Math.sqrt(Math.pow(g,2)+Math.pow(w,2)),O=Math.acos(g/x),E=w>0?O:2*Math.PI-O,T=Math.abs(s-E);(T<Math.PI/2||3*Math.PI/2<T)&&(h+=1*Math.abs(Math.cos(T))/Math.pow(.5*x,2))}}return{position:[l,f,c],color:1===Math.min(1,h/3)?"yellow":new a.Color(Math.min(1,h/3),0,0)}}function l(e){var t=e.boxIndex,n=e.boxes,r=e.boxPositionsRef,a=Object(o.useRef)();return Object(u.b)((function(){"gray"!==n[t].teamColor&&(a.current.rotation.x=a.current.rotation.y+=.01,a.current.position.fromArray(r.current[t]),a.current.material.color.set(d(t,n,r)?n[t].teamColor:"yellow"))})),i.a.createElement("mesh",{position:r.current[t],ref:a,scale:[.4,.4,.4]},i.a.createElement("boxBufferGeometry",{args:[.5,.5,.5]}),i.a.createElement("meshStandardMaterial",{color:n[t].teamColor}))}function f(e){var t=e.boxIndex,n=e.shieldIndex,r=e.boxes,a=e.boxPositionsRef,c=Object(o.useRef)();Object(u.b)((function(){c.current.rotation.x=c.current.rotation.y+=.01;var e=s(t,n,r,a),o=e.position,i=e.color;c.current.position.fromArray(o),c.current.material.color.set(i)}));var l=s(t,n,r,a),f=l.position,p=l.color;return i.a.createElement("mesh",{position:f,ref:c,scale:[.4,.4,.4]},i.a.createElement("boxBufferGeometry",{args:[.1,.1,.1]}),i.a.createElement("meshStandardMaterial",{color:p}))}var p=i.a.memo((function(e){var t=e.boxIndex,n=e.boxes,o=e.boxPositionsRef;return i.a.createElement("group",null,i.a.createElement(l,{boxIndex:t,boxes:n,boxPositionsRef:o}),Object(r.a)(Array(12).keys()).map((function(e){return i.a.createElement(f,{key:e,boxIndex:t,shieldIndex:e,boxes:n,boxPositionsRef:o})})))}));function h(e){return[8*e.clientY/1e3-4,8*e.clientX/1e3-4,1]}function b(e){var t=e.position,n=e.addBox,r=e.moveLastBox,u=Object(o.useRef)();return i.a.createElement("mesh",{position:t,ref:u,onClick:function(e){return n(h(e))},onPointerMove:function(e){return r(h(e))}},i.a.createElement("planeBufferGeometry",{args:[8,8]}),i.a.createElement("meshStandardMaterial",{color:"gray"}))}function d(e,t,n){for(var r=0;r<12;r++)if(s(e,r,t,n).color.r<1)return!0;return!1}function v(){var e=Object(o.useState)([{teamColor:c[0]}]),t=e[0],n=e[1],r=Object(o.useRef)([{x:10,y:10}]);return i.a.createElement("div",{style:{height:"1000px",width:"1000px"}},i.a.createElement(u.a,{orthographic:!0,camera:{position:[0,0,50],zoom:100,up:[0,0,1],far:1e4},style:{height:"90%",width:"90%"}},i.a.createElement("ambientLight",{intensity:.5}),i.a.createElement("spotLight",{position:[10,10,10],angle:.15,penumbra:1}),i.a.createElement("pointLight",{position:[-10,-10,-10]}),i.a.createElement(b,{position:[0,0,0],moveLastBox:function(e){r.current[r.current.length-1]=e},addBox:function(e){if(r.current[r.current.length-1]=e,d(t.length-1,t,r)){var o={teamColor:c[t.length%2]};!function(e,t){for(var n=1,r=0;r<5;r++){for(var o in n=0,e)d(o,e,t)||(n++,e[o].teamColor="gray");if(0===n)return}}(t,r),r.current.push(e),n(t.concat(o))}}}),t.map((function(e,n){return i.a.createElement(p,{key:n,boxIndex:n,boxes:t,boxPositionsRef:r})}))))}},ReuC:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("foSv");function o(e,t,n){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(r.a)(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}},T5bk:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("DSFK"),o=n("25BE"),i=n("BsWD"),u=n("PYwp");function a(e){return Object(r.a)(e)||Object(o.a)(e)||Object(i.a)(e)||Object(u.a)()}},WbPa:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("KQm4"),o=n("aUsF"),i=n.n(o),u=n("q1tI");function a(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){a=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t,n){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=a(t);try{for(s.s();!(o=s.n()).done;){var l=o.value;if(i()(n,l.args)){if(l.error)throw l.error;if(l.response)return l.response;throw l.promise}}}catch(p){s.e(p)}finally{s.f()}var f={args:n,promise:e.apply(void 0,Object(r.a)(n)).then((function(e){return f.response=e})).catch((function(e){return f.error=e})).then((function(){u>0&&setTimeout((function(){var e=t.indexOf(f);-1!==e&&t.splice(e,1)}),u)}))};if(t.push(f),!c)throw f.promise}function l(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(void 0===n)e.splice(0,e.length);else{var o=e.find((function(e){return i()(n,e.args)}));if(o){var u=e.indexOf(o);-1!==u&&e.splice(u,1)}}}var f=[];function p(e,t){return Object(u.useMemo)((function(){return s(e,f,t,p.lifespan)}),t)}p.lifespan=0,p.clear=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l.apply(void 0,[f].concat(t))},p.preload=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];s(e,f,n,p.lifespan,!0)},p.peek=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r;return null==(r=f.find((function(e){return i()(t,e.args)})))?void 0:r.response}},aUsF:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!=o--;){var u=i[o];if(!e(t[u],n[u]))return!1}return!0}return t!=t&&n!=n}},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},iEE2:function(e,t,n){"use strict";(function(e){var r=n("KQm4"),o=n("ODXe"),i=n("1OyB"),u=n("q1tI"),a=n("sBL/");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debounce:0,scroll:!1},t=e.debounce,n=e.scroll,r=e.polyfill,c=r||("undefined"==typeof window?function e(){Object(i.a)(this,e)}:window.ResizeObserver);if(!c)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");var p=Object(u.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),b=Object(o.a)(p,2),d=b[0],v=b[1],y=Object(u.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:d}),m=t?"number"==typeof t?t:t.scroll:null,g=t?"number"==typeof t?t:t.resize:null,w=Object(u.useMemo)((function(){var e=function(){if(y.current.element){var e=y.current.element.getBoundingClientRect(),t={left:e.left,top:e.top,width:e.width,height:e.height,bottom:e.bottom,right:e.right,x:e.x,y:e.y};Object.freeze(t),h(y.current.lastBounds,t)||v(y.current.lastBounds=t)}};return[e,g?Object(a.debounce)(e,g):e,m?Object(a.debounce)(e,m):e]}),[v,m,g]),x=Object(o.a)(w,3),O=x[0],E=x[1],T=x[2];function j(){y.current.scrollContainers&&(y.current.scrollContainers.forEach((function(e){return e.removeEventListener("scroll",T,!0)})),y.current.scrollContainers=null),y.current.resizeObserver&&(y.current.resizeObserver.disconnect(),y.current.resizeObserver=null)}function S(){y.current.element&&(y.current.resizeObserver=new c(T),y.current.resizeObserver.observe(y.current.element),n&&y.current.scrollContainers&&y.current.scrollContainers.forEach((function(e){return e.addEventListener("scroll",T,{capture:!0,passive:!0})})))}var B=function(e){e&&e!==y.current.element&&(j(),y.current.element=e,y.current.scrollContainers=f(e),S())};return l(T,Boolean(n)),s(E),Object(u.useEffect)((function(){j(),S()}),[n,T,E]),Object(u.useEffect)((function(){return j}),[]),[B,d,O]}function s(e){Object(u.useEffect)((function(){var t=e;return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[e])}function l(e,t){Object(u.useEffect)((function(){if(t){var n=e;return window.addEventListener("scroll",n,{capture:!0,passive:!0}),function(){window.removeEventListener("scroll",n,!0)}}}),[e,t])}function f(e){var t=[];if(!e||e===document.body)return t;var n=window.getComputedStyle(e);return[n.overflow,n.overflowX,n.overflowY].some((function(e){return"auto"===e||"scroll"===e}))&&t.push(e),[].concat(t,Object(r.a)(f(e.parentElement)))}var p=["x","y","top","bottom","left","right","width","height"],h=function(e,t){return p.every((function(n){return e[n]===t[n]}))};Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(e,"exports").writable&&(e.exports=c),t.a=c}).call(this,n("3UD+")(e))},md7G:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return i}));var o=n("JX7q");function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?Object(o.a)(e):t}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},s4An:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return r}))},"sBL/":function(e,t){function n(e,t,n){var r,o,i,u,a;function c(){var s=Date.now()-u;s<t&&s>=0?r=setTimeout(c,t-s):(r=null,n||(a=e.apply(i,o),i=o=null))}null==t&&(t=100);var s=function(){i=this,o=arguments,u=Date.now();var s=n&&!r;return r||(r=setTimeout(c,t)),s&&(a=e.apply(i,o),i=o=null),a};return s.clear=function(){r&&(clearTimeout(r),r=null)},s.flush=function(){r&&(a=e.apply(i,o),i=o=null,clearTimeout(r),r=null)},s}n.debounce=n,e.exports=n},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},wOJ8:function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var i=0,u=r.length;i<u;i++)r[i].fn!==t&&r[i].fn._!==t&&o.push(r[i]);return o.length?n[e]=o:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-index-js-539920d83127890cb749.js.map