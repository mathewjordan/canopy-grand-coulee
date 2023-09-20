"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[447],{3541:function(e,t,n){n.d(t,{Ry:function(){return c}});var r=new WeakMap,o=new WeakMap,u={},i=0,a=function(e){return e&&(e.host||a(e.parentNode))},l=function(e,t,n,l){var c=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=a(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});u[n]||(u[n]=new WeakMap);var s=u[n],d=[],f=new Set,v=new Set(c),p=function(e){!e||f.has(e)||(f.add(e),p(e.parentNode))};c.forEach(p);var m=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))m(e);else{var t=e.getAttribute(l),u=null!==t&&"false"!==t,i=(r.get(e)||0)+1,a=(s.get(e)||0)+1;r.set(e,i),s.set(e,a),d.push(e),1===i&&u&&o.set(e,!0),1===a&&e.setAttribute(n,"true"),u||e.setAttribute(l,"true")}})};return m(t),f.clear(),i++,function(){d.forEach(function(e){var t=r.get(e)-1,u=s.get(e)-1;r.set(e,t),s.set(e,u),t||(o.has(e)||e.removeAttribute(l),o.delete(e)),u||e.removeAttribute(n)}),--i||(r=new WeakMap,r=new WeakMap,o=new WeakMap,u={})}},c=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),l(r,o,n,"aria-hidden")):function(){return null}}},6223:function(e,t,n){n.d(t,{Z:function(){return Z}});var r,o,u,i,a,l,c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var d=n(7294),f="right-scroll-bar-position",v="width-before-scroll-bar",p=(void 0===r&&(r={}),(void 0===o&&(o=function(e){return e}),u=[],i=!1,a={read:function(){if(i)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return u.length?u[u.length-1]:null},useMedium:function(e){var t=o(e,i);return u.push(t),function(){u=u.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(i=!0;u.length;){var t=u;u=[],t.forEach(e)}u={push:function(t){return e(t)},filter:function(){return u}}},assignMedium:function(e){i=!0;var t=[];if(u.length){var n=u;u=[],n.forEach(e),t=u}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),u={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),u}}}}).options=c({async:!0,ssr:!1},r),a),m=function(){},h=d.forwardRef(function(e,t){var n,r,o,u=d.useRef(null),i=d.useState({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:m}),a=i[0],l=i[1],f=e.forwardProps,v=e.children,h=e.className,g=e.removeScrollBar,b=e.enabled,E=e.shards,y=e.sideCar,w=e.noIsolation,C=e.inert,S=e.allowPinchZoom,N=e.as,T=void 0===N?"div":N,R=s(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),M=(n=[u,t],r=function(e){return n.forEach(function(t){return"function"==typeof t?t(e):t&&(t.current=e),t})},(o=(0,d.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,o.facade),O=c(c({},R),a);return d.createElement(d.Fragment,null,b&&d.createElement(y,{sideCar:p,removeScrollBar:g,shards:E,noIsolation:w,inert:C,setCallbacks:l,allowPinchZoom:!!S,lockRef:u}),f?d.cloneElement(d.Children.only(v),c(c({},O),{ref:M})):d.createElement(T,c({},O,{className:h,ref:M}),v))});h.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},h.classNames={fullWidth:v,zeroRight:f};var g=function(e){var t=e.sideCar,n=s(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return d.createElement(r,c({},n))};g.isSideCarExport=!0;var b=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=l||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,u;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),u=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(u)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},E=function(){var e=b();return function(t,n){d.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},y=function(){var e=E();return function(t){return e(t.styles,t.dynamic),null}},w={left:0,top:0,right:0,gap:0},C=function(e){return parseInt(e||"",10)||0},S=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[C(n),C(r),C(o)]},N=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return w;var t=S(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},T=y(),R=function(e,t,n,r){var o=e.left,u=e.top,i=e.right,a=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(a,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(u,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(f," {\n    right: ").concat(a,"px ").concat(r,";\n  }\n  \n  .").concat(v," {\n    margin-right: ").concat(a,"px ").concat(r,";\n  }\n  \n  .").concat(f," .").concat(f," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(v," .").concat(v," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(a,"px;\n  }\n")},M=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,u=d.useMemo(function(){return N(o)},[o]);return d.createElement(T,{styles:R(u,!t,o,n?"":"!important")})},O=!1;if("undefined"!=typeof window)try{var P=Object.defineProperty({},"passive",{get:function(){return O=!0,!0}});window.addEventListener("test",P,P),window.removeEventListener("test",P,P)}catch(e){O=!1}var x=!!O&&{passive:!1},L=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},A=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),k(e,n)){var r=W(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},k=function(e,t){return"v"===e?L(t,"overflowY"):L(t,"overflowX")},W=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},D=function(e,t,n,r,o){var u,i=(u=window.getComputedStyle(t).direction,"h"===e&&"rtl"===u?-1:1),a=i*r,l=n.target,c=t.contains(l),s=!1,d=a>0,f=0,v=0;do{var p=W(e,l),m=p[0],h=p[1]-p[2]-i*m;(m||h)&&k(e,l)&&(f+=h,v+=m),l=l.parentNode}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return d&&(o&&0===f||!o&&a>f)?s=!0:!d&&(o&&0===v||!o&&-a>v)&&(s=!0),s},I=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},_=function(e){return[e.deltaX,e.deltaY]},F=function(e){return e&&"current"in e?e.current:e},B=0,z=[],U=(p.useMedium(function(e){var t=d.useRef([]),n=d.useRef([0,0]),r=d.useRef(),o=d.useState(B++)[0],u=d.useState(function(){return y()})[0],i=d.useRef(e);d.useEffect(function(){i.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(F),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=d.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var o,u=I(e),a=n.current,l="deltaX"in e?e.deltaX:a[0]-u[0],c="deltaY"in e?e.deltaY:a[1]-u[1],s=e.target,d=Math.abs(l)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=A(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=A(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||c)&&(r.current=o),!o)return!0;var v=r.current||o;return D(v,t,e,"h"===v?l:c,!0)},[]),l=d.useCallback(function(e){if(z.length&&z[z.length-1]===u){var n="deltaY"in e?_(e):I(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(F).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?a(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),c=d.useCallback(function(e,n,r,o){var u={name:e,delta:n,target:r,should:o};t.current.push(u),setTimeout(function(){t.current=t.current.filter(function(e){return e!==u})},1)},[]),s=d.useCallback(function(e){n.current=I(e),r.current=void 0},[]),f=d.useCallback(function(t){c(t.type,_(t),t.target,a(t,e.lockRef.current))},[]),v=d.useCallback(function(t){c(t.type,I(t),t.target,a(t,e.lockRef.current))},[]);d.useEffect(function(){return z.push(u),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",l,x),document.addEventListener("touchmove",l,x),document.addEventListener("touchstart",s,x),function(){z=z.filter(function(e){return e!==u}),document.removeEventListener("wheel",l,x),document.removeEventListener("touchmove",l,x),document.removeEventListener("touchstart",s,x)}},[]);var p=e.removeScrollBar,m=e.inert;return d.createElement(d.Fragment,null,m?d.createElement(u,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?d.createElement(M,{gapMode:"margin"}):null)}),g),j=d.forwardRef(function(e,t){return d.createElement(h,c({},e,{ref:t,sideCar:U}))});j.classNames=h.classNames;var Z=j},6206:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}},334:function(e,t,n){n.d(t,{VY:function(){return R},fC:function(){return N},p_:function(){return m},xz:function(){return T}});var r=n(7462),o=n(7294),u=n(6206),i=n(5360),a=n(7342),l=n(9981),c=n(8771),s=n(5320),d=n(9115),f=n(1276);let v="Collapsible",[p,m]=(0,i.b)(v),[h,g]=p(v),b=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,open:u,defaultOpen:i,disabled:l,onOpenChange:c,...d}=e,[v=!1,p]=(0,a.T)({prop:u,defaultProp:i,onChange:c});return(0,o.createElement)(h,{scope:n,disabled:l,contentId:(0,f.M)(),open:v,onOpenToggle:(0,o.useCallback)(()=>p(e=>!e),[p])},(0,o.createElement)(s.WV.div,(0,r.Z)({"data-state":S(v),"data-disabled":l?"":void 0},d,{ref:t})))}),E=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,...i}=e,a=g("CollapsibleTrigger",n);return(0,o.createElement)(s.WV.button,(0,r.Z)({type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":S(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled},i,{ref:t,onClick:(0,u.M)(e.onClick,a.onOpenToggle)}))}),y="CollapsibleContent",w=(0,o.forwardRef)((e,t)=>{let{forceMount:n,...u}=e,i=g(y,e.__scopeCollapsible);return(0,o.createElement)(d.z,{present:n||i.open},({present:e})=>(0,o.createElement)(C,(0,r.Z)({},u,{ref:t,present:e})))}),C=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,present:u,children:i,...a}=e,d=g(y,n),[f,v]=(0,o.useState)(u),p=(0,o.useRef)(null),m=(0,c.e)(t,p),h=(0,o.useRef)(0),b=h.current,E=(0,o.useRef)(0),w=E.current,C=d.open||f,N=(0,o.useRef)(C),T=(0,o.useRef)();return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>N.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,l.b)(()=>{let e=p.current;if(e){T.current=T.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();h.current=t.height,E.current=t.width,N.current||(e.style.transitionDuration=T.current.transitionDuration,e.style.animationName=T.current.animationName),v(u)}},[d.open,u]),(0,o.createElement)(s.WV.div,(0,r.Z)({"data-state":S(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!C},a,{ref:m,style:{"--radix-collapsible-content-height":b?`${b}px`:void 0,"--radix-collapsible-content-width":w?`${w}px`:void 0,...e.style}}),C&&i)});function S(e){return e?"open":"closed"}let N=b,T=E,R=w},5936:function(e,t,n){n.d(t,{B:function(){return a}});var r=n(7294),o=n(5360),u=n(8771),i=n(8426);function a(e){let t=e+"CollectionProvider",[n,a]=(0,o.b)(t),[l,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=e+"CollectionSlot",d=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,a=c(s,n),l=(0,u.e)(t,a.collectionRef);return r.createElement(i.g7,{ref:l},o)}),f=e+"CollectionItemSlot",v="data-radix-collection-item",p=r.forwardRef((e,t)=>{let{scope:n,children:o,...a}=e,l=r.useRef(null),s=(0,u.e)(t,l),d=c(f,n);return r.useEffect(()=>(d.itemMap.set(l,{ref:l,...a}),()=>void d.itemMap.delete(l))),r.createElement(i.g7,{[v]:"",ref:s},o)});return[{Provider:e=>{let{scope:t,children:n}=e,o=r.useRef(null),u=r.useRef(new Map).current;return r.createElement(l,{scope:t,itemMap:u,collectionRef:o},n)},Slot:d,ItemSlot:p},function(t){let n=c(e+"CollectionConsumer",t),o=r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${v}]`)),r=Array.from(n.itemMap.values()),o=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return o},[n.collectionRef,n.itemMap]);return o},a]}},5360:function(e,t,n){n.d(t,{b:function(){return u},k:function(){return o}});var r=n(7294);function o(e,t){let n=(0,r.createContext)(t);function o(e){let{children:t,...o}=e,u=(0,r.useMemo)(()=>o,Object.values(o));return(0,r.createElement)(n.Provider,{value:u},t)}return o.displayName=e+"Provider",[o,function(o){let u=(0,r.useContext)(n);if(u)return u;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function u(e,t=[]){let n=[],o=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let o=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return o.scopeName=e,[function(t,o){let u=(0,r.createContext)(o),i=n.length;function a(t){let{scope:n,children:o,...a}=t,l=(null==n?void 0:n[e][i])||u,c=(0,r.useMemo)(()=>a,Object.values(a));return(0,r.createElement)(l.Provider,{value:c},o)}return n=[...n,o],a.displayName=t+"Provider",[a,function(n,a){let l=(null==a?void 0:a[e][i])||u,c=(0,r.useContext)(l);if(c)return c;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e),u=o[`__scope${r}`];return{...t,...u}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(o,...t)]}},8990:function(e,t,n){n.d(t,{gm:function(){return u}});var r=n(7294);let o=(0,r.createContext)(void 0);function u(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},6063:function(e,t,n){let r;n.d(t,{XB:function(){return f}});var o=n(7462),u=n(7294),i=n(6206),a=n(5320),l=n(8771),c=n(9698);let s="dismissableLayer.update",d=(0,u.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,u.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:m,onPointerDownOutside:h,onFocusOutside:g,onInteractOutside:b,onDismiss:E,...y}=e,w=(0,u.useContext)(d),[C,S]=(0,u.useState)(null),N=null!==(n=null==C?void 0:C.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,T]=(0,u.useState)({}),R=(0,l.e)(t,e=>S(e)),M=Array.from(w.layers),[O]=[...w.layersWithOutsidePointerEventsDisabled].slice(-1),P=M.indexOf(O),x=C?M.indexOf(C):-1,L=w.layersWithOutsidePointerEventsDisabled.size>0,A=x>=P,k=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,c.W)(e),r=(0,u.useRef)(!1),o=(0,u.useRef)(()=>{});return(0,u.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function u(){p("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=u,t.addEventListener("click",o.current,{once:!0})):u()}r.current=!1},u=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(u),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...w.branches].some(e=>e.contains(t));!A||n||(null==h||h(e),null==b||b(e),e.defaultPrevented||null==E||E())},N),W=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,c.W)(e),r=(0,u.useRef)(!1);return(0,u.useEffect)(()=>{let e=e=>{e.target&&!r.current&&p("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target,n=[...w.branches].some(e=>e.contains(t));n||(null==g||g(e),null==b||b(e),e.defaultPrevented||null==E||E())},N);return!function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,c.W)(e);(0,u.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{let t=x===w.layers.size-1;t&&(null==m||m(e),!e.defaultPrevented&&E&&(e.preventDefault(),E()))},N),(0,u.useEffect)(()=>{if(C)return f&&(0===w.layersWithOutsidePointerEventsDisabled.size&&(r=N.body.style.pointerEvents,N.body.style.pointerEvents="none"),w.layersWithOutsidePointerEventsDisabled.add(C)),w.layers.add(C),v(),()=>{f&&1===w.layersWithOutsidePointerEventsDisabled.size&&(N.body.style.pointerEvents=r)}},[C,N,f,w]),(0,u.useEffect)(()=>()=>{C&&(w.layers.delete(C),w.layersWithOutsidePointerEventsDisabled.delete(C),v())},[C,w]),(0,u.useEffect)(()=>{let e=()=>T({});return document.addEventListener(s,e),()=>document.removeEventListener(s,e)},[]),(0,u.createElement)(a.WV.div,(0,o.Z)({},y,{ref:R,style:{pointerEvents:L?A?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.M)(e.onFocusCapture,W.onFocusCapture),onBlurCapture:(0,i.M)(e.onBlurCapture,W.onBlurCapture),onPointerDownCapture:(0,i.M)(e.onPointerDownCapture,k.onPointerDownCapture)}))});function v(){let e=new CustomEvent(s);document.dispatchEvent(e)}function p(e,t,n,{discrete:r}){let o=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,a.jH)(o,u):o.dispatchEvent(u)}},7552:function(e,t,n){n.d(t,{EW:function(){return u}});var r=n(7294);let o=0;function u(){(0,r.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:i()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:i()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function i(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},5420:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(7462),u=n(7294),i=n(8771),a=n(5320),l=n(9698);let c="focusScope.autoFocusOnMount",s="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},f=(0,u.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:g,...b}=e,[E,y]=(0,u.useState)(null),w=(0,l.W)(f),C=(0,l.W)(g),S=(0,u.useRef)(null),N=(0,i.e)(t,e=>y(e)),T=(0,u.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,u.useEffect)(()=>{if(r){function e(e){if(T.paused||!E)return;let t=e.target;E.contains(t)?S.current=t:m(S.current,{select:!0})}function t(e){if(T.paused||!E)return;let t=e.relatedTarget;null===t||E.contains(t)||m(S.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){let t=document.activeElement;for(let n of e)n.removedNodes.length>0&&!(null!=E&&E.contains(t))&&m(E)});return E&&n.observe(E,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,E,T.paused]),(0,u.useEffect)(()=>{if(E){h.add(T);let e=document.activeElement,t=E.contains(e);if(!t){let t=new CustomEvent(c,d);E.addEventListener(c,w),E.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(m(r,{select:t}),document.activeElement!==n)return}(v(E).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&m(E))}return()=>{E.removeEventListener(c,w),setTimeout(()=>{let t=new CustomEvent(s,d);E.addEventListener(s,C),E.dispatchEvent(t),t.defaultPrevented||m(null!=e?e:document.body,{select:!0}),E.removeEventListener(s,C),h.remove(T)},0)}}},[E,w,C,T]);let R=(0,u.useCallback)(e=>{if(!n&&!r||T.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,u]=function(e){let t=v(e),n=p(t,e),r=p(t.reverse(),e);return[n,r]}(t),i=r&&u;i?e.shiftKey||o!==u?e.shiftKey&&o===r&&(e.preventDefault(),n&&m(u,{select:!0})):(e.preventDefault(),n&&m(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,T.paused]);return(0,u.createElement)(a.WV.div,(0,o.Z)({tabIndex:-1},b,{ref:N,onKeyDown:R}))});function v(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function p(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function m(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let h=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=g(r,e)).unshift(e)},remove(e){var t;null===(t=(r=g(r,e))[0])||void 0===t||t.resume()}});function g(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},1276:function(e,t,n){n.d(t,{M:function(){return l}});var r,o=n(7294),u=n(9981);let i=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),a=0;function l(e){let[t,n]=o.useState(i());return(0,u.b)(()=>{e||n(e=>null!=e?e:String(a++))},[e]),e||(t?`radix-${t}`:"")}},2651:function(e,t,n){n.d(t,{h:function(){return a}});var r=n(7462),o=n(7294),u=n(3935),i=n(5320);let a=(0,o.forwardRef)((e,t)=>{var n;let{container:a=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...l}=e;return a?u.createPortal((0,o.createElement)(i.WV.div,(0,r.Z)({},l,{ref:t})),a):null})},9115:function(e,t,n){n.d(t,{z:function(){return a}});var r=n(7294),o=n(3935),u=n(8771),i=n(9981);let a=e=>{let{present:t,children:n}=e,a=function(e){var t;let[n,u]=(0,r.useState)(),a=(0,r.useRef)({}),c=(0,r.useRef)(e),s=(0,r.useRef)("none"),d=e?"mounted":"unmounted",[f,v]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},d));return(0,r.useEffect)(()=>{let e=l(a.current);s.current="mounted"===f?e:"none"},[f]),(0,i.b)(()=>{let t=a.current,n=c.current,r=n!==e;if(r){let r=s.current,o=l(t);e?v("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?v("UNMOUNT"):n&&r!==o?v("ANIMATION_OUT"):v("UNMOUNT"),c.current=e}},[e,v]),(0,i.b)(()=>{if(n){let e=e=>{let t=l(a.current),r=t.includes(e.animationName);e.target===n&&r&&(0,o.flushSync)(()=>v("ANIMATION_END"))},t=e=>{e.target===n&&(s.current=l(a.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}v("ANIMATION_END")},[n,v]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,r.useCallback)(e=>{e&&(a.current=getComputedStyle(e)),u(e)},[])}}(t),c="function"==typeof n?n({present:a.isPresent}):r.Children.only(n),s=(0,u.e)(a.ref,c.ref),d="function"==typeof n;return d||a.isPresent?(0,r.cloneElement)(c,{ref:s}):null};function l(e){return(null==e?void 0:e.animationName)||"none"}a.displayName="Presence"},9698:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(7294);function o(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}},7342:function(e,t,n){n.d(t,{T:function(){return u}});var r=n(7294),o=n(9698);function u({prop:e,defaultProp:t,onChange:n=()=>{}}){let[u,i]=function({defaultProp:e,onChange:t}){let n=(0,r.useState)(e),[u]=n,i=(0,r.useRef)(u),a=(0,o.W)(t);return(0,r.useEffect)(()=>{i.current!==u&&(a(u),i.current=u)},[u,i,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,l=a?e:u,c=(0,o.W)(n),s=(0,r.useCallback)(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&c(n)}else i(t)},[a,e,i,c]);return[l,s]}},9981:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(7294);let o=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}},7898:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(7294);function o(e){let t=(0,r.useRef)({value:e,previous:e});return(0,r.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},7546:function(e,t,n){n.d(t,{t:function(){return u}});var r=n(7294),o=n(9981);function u(e){let[t,n]=(0,r.useState)(void 0);return(0,o.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,o;if(!Array.isArray(t)||!t.length)return;let u=t[0];if("borderBoxSize"in u){let e=u.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,o=t.blockSize}else r=e.offsetWidth,o=e.offsetHeight;n({width:r,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}}}]);