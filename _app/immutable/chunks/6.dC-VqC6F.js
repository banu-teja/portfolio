import{h as C,aw as F,ax as L,ay as q,az as z,a9 as T,aA as N,v as g,z as A,aB as x,g as v,aC as M,aa as U,aD as Y,aE as j,f as G,i as D,aF as H,aG as $,aH as V,T as Z}from"./runtime.C8JzMx3H.js";import{p as J}from"./proxy.HpxjVJR7.js";import{c as K}from"./store.HX0C5LWM.js";function w(r){for(var a=D,t=D;a!==null&&!(a.f&(q|z));)a=a.parent;try{return T(a),r()}finally{T(t)}}function k(r,a,t,d){var h;var m=(t&H)!==0,c=(t&N)!==0,b=(t&$)!==0,y=(t&V)!==0,p=!1,u;b?[u,p]=K(()=>r[a]):u=r[a];var _=(h=C(r,a))==null?void 0:h.set,n=d,o=!0,E=!1,I=()=>(E=!0,o&&(o=!1,y?n=g(d):n=d),n);u===void 0&&d!==void 0&&(_&&c&&F(),u=I(),_&&_(u));var i;if(c)i=()=>{var e=r[a];return e===void 0?I():(o=!0,E=!1,e)};else{var O=w(()=>(m?A:x)(()=>r[a]));O.f|=L,i=()=>{var e=v(O);return e!==void 0&&(n=void 0),e===void 0?n:e}}if(!(t&M))return i;if(_){var B=r.$$legacy;return function(e,f){return arguments.length>0?((!c||!f||B||p)&&_(f?i():e),e):i()}}var P=!1,R=!1,S=Z(u),s=w(()=>A(()=>{var e=i(),f=v(S),l=U;return P||e===void 0&&l.f&Y?(P=!1,R=!0,f):(R=!1,S.v=e)}));return m||(s.equals=j),function(e,f){if(arguments.length>0){const l=f?v(s):c&&b?J(e):e;return s.equals(l)||(P=!0,G(S,l),E&&n!==void 0&&(n=l),g(()=>v(s))),e}return v(s)}}const ee=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{ee as _,k as p};
