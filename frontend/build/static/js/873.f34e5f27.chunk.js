/*! For license information please see 873.f34e5f27.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[873],{5486:(t,e,n)=>{n.d(e,{A:()=>o});n(5043);var r=n(184),a=n(579);const o=t=>{let{productId:e,price:n,name:o,photo:s,stock:c,addToCart:i}=t;return(0,a.jsxs)("div",{className:"product-card",children:[(0,a.jsx)("div",{className:"image-container",children:(0,a.jsx)("img",{src:s,alt:o})}),(0,a.jsx)("p",{children:o}),(0,a.jsxs)("span",{children:["\u20b9",n]}),(0,a.jsx)("div",{className:"svg",children:(0,a.jsx)("button",{onClick:()=>i(e),children:(0,a.jsx)(r.OiG,{})})})]})}},3873:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});var r=n(5043),a=n(6213),o=n(5486),s=n(8868),c=n(579);const i=()=>{const[t,e]=(0,r.useState)([]),n=(0,s.A)((t=>t.addToCart));return(0,r.useEffect)((()=>{a.A.get("http://localhost:5000/api/v1/product/admin-products").then((t=>{e(t.data)})).catch((t=>{console.error("There was an error fetching the products!",t)}))}),[]),(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:"bestseller-page",children:[(0,c.jsx)("h1",{children:"Top Items Near You"}),(0,c.jsx)("div",{className:"products-grid",children:t&&t.length>0?t.map((t=>(0,c.jsx)(o.A,{productId:t.id,name:t.name,price:t.price,stock:t.stock,photo:t.photo,addToCart:n,handler:()=>{}},t.id))):(0,c.jsx)("p",{children:"No products available."})})]})})}},8868:(t,e,n)=>{n.d(e,{A:()=>s});var r=n(4548),a=n(6213);const o="http://localhost:5000/api/v1/product",s=(0,r.vt)(((t,e)=>({cartItems:[],foodList:[],inputData:[],addToCart:async n=>{try{const r=(await a.A.get("".concat(o,"/").concat(n))).data,s=e().cartItems.findIndex((t=>t._id===n));if(-1!==s){const n=[...e().cartItems];n[s].quantity+=1,t({cartItems:n})}else{const n=[...e().cartItems,{...r,quantity:1}];t({cartItems:n})}console.log("Product ".concat(r.name," added to cart"))}catch(r){console.error("Error adding product to cart:",r)}},removeFromCart:e=>t((t=>{const n=[...t.cartItems],r=n.findIndex((t=>t._id===e));return-1!==r&&(n[r].quantity-=1,0===n[r].quantity&&n.splice(r,1)),{cartItems:n}})),getTotalCartAmount:()=>{const{cartItems:t}=e();let n=0;return t.forEach((t=>{n+=t.price*t.quantity})),n},setFoodList:e=>t({foodList:e}),fetchFoodList:async()=>{try{const e=await a.A.get(o);t({foodList:e.data})}catch(e){console.error("Failed to fetch food list:",e)}},addInputData:e=>{console.log("Input data:",e),t((t=>({inputData:[...t.inputData,e]})))},sendInputDataToBackend:async t=>{try{const e="Dabbemein4098",n={name:t.name,photo:t.photo,price:parseFloat(t.price),stock:parseInt(t.stock,10)},r=await a.A.post("http://localhost:5000/api/v1/product/new",n,{headers:{Authorization:"Bearer ".concat(e)}});console.log("Input data sent to the backend:",r.data)}catch(e){console.error("Error sending input data to the backend:",e)}}})))},5956:(t,e,n)=>{var r=n(5043);var a="function"===typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t===1/e)||t!==t&&e!==e},o=r.useState,s=r.useEffect,c=r.useLayoutEffect,i=r.useDebugValue;function u(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!a(t,n)}catch(r){return!0}}var d="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(t,e){return e()}:function(t,e){var n=e(),r=o({inst:{value:n,getSnapshot:e}}),a=r[0].inst,d=r[1];return c((function(){a.value=n,a.getSnapshot=e,u(a)&&d({inst:a})}),[t,n,e]),s((function(){return u(a)&&d({inst:a}),t((function(){u(a)&&d({inst:a})}))}),[t]),i(n),n};e.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:d},5039:(t,e,n)=>{var r=n(5043),a=n(9461);var o="function"===typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t===1/e)||t!==t&&e!==e},s=a.useSyncExternalStore,c=r.useRef,i=r.useEffect,u=r.useMemo,d=r.useDebugValue;e.useSyncExternalStoreWithSelector=function(t,e,n,r,a){var l=c(null);if(null===l.current){var f={hasValue:!1,value:null};l.current=f}else f=l.current;l=u((function(){function t(t){if(!i){if(i=!0,s=t,t=r(t),void 0!==a&&f.hasValue){var e=f.value;if(a(e,t))return c=e}return c=t}if(e=c,o(s,t))return e;var n=r(t);return void 0!==a&&a(e,n)?e:(s=t,c=n)}var s,c,i=!1,u=void 0===n?null:n;return[function(){return t(e())},null===u?void 0:function(){return t(u())}]}),[e,n,r,a]);var p=s(t,l[0],l[1]);return i((function(){f.hasValue=!0,f.value=p}),[p]),d(p),p}},9461:(t,e,n)=>{t.exports=n(5956)},8443:(t,e,n)=>{t.exports=n(5039)},4548:(t,e,n)=>{n.d(e,{vt:()=>f});const r=t=>{let e;const n=new Set,r=(t,r)=>{const a="function"===typeof t?t(e):t;if(!Object.is(a,e)){const t=e;e=(null!=r?r:"object"!==typeof a||null===a)?a:Object.assign({},e,a),n.forEach((n=>n(e,t)))}},a=()=>e,o={setState:r,getState:a,getInitialState:()=>s,subscribe:t=>(n.add(t),()=>n.delete(t)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},s=e=t(r,a,o);return o},a=t=>t?r(t):r;var o=n(5043),s=n(8443);const{useDebugValue:c}=o,{useSyncExternalStoreWithSelector:i}=s;let u=!1;const d=t=>t;const l=t=>{"function"!==typeof t&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e="function"===typeof t?a(t):t,n=(t,n)=>function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,n=arguments.length>2?arguments[2]:void 0;n&&!u&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),u=!0);const r=i(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return c(r),r}(e,t,n);return Object.assign(n,e),n},f=t=>t?l(t):l}}]);
//# sourceMappingURL=873.f34e5f27.chunk.js.map