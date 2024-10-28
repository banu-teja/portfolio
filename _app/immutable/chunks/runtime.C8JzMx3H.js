var mn=Array.isArray,An=Array.from,In=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Yt=Object.getOwnPropertyDescriptors,Rn=Object.prototype,On=Array.prototype,Ut=Object.getPrototypeOf;function Sn(t){return typeof t=="function"}const Nn=()=>{};function xn(t){return t()}function Bt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,_t=4,M=8,tt=16,y=32,K=64,N=128,B=256,p=512,R=1024,H=2048,C=4096,j=8192,Vt=16384,ct=32768,Dn=65536,Gt=1<<18,vt=1<<19,ut=Symbol("$state");function pt(t){return t===this.v}function $t(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ht(t){return!$t(t,this.v)}function Kt(t){throw new Error("effect_in_teardown")}function Zt(){throw new Error("effect_in_unowned_derived")}function zt(t){throw new Error("effect_orphan")}function Wt(){throw new Error("effect_update_depth_exceeded")}function gn(){throw new Error("hydration_failed")}function kn(t){throw new Error("props_invalid_value")}function Cn(){throw new Error("state_descriptors_fixed")}function Fn(){throw new Error("state_prototype_fixed")}function Xt(){throw new Error("state_unsafe_local_read")}function Jt(){throw new Error("state_unsafe_mutation")}function nt(t){return{f:0,v:t,reactions:null,equals:pt,version:0}}function Pn(t){return Qt(nt(t))}function bn(t,n=!1){var e;const r=nt(t);return n||(r.equals=ht),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Qt(t){return l!==null&&l.f&m&&(E===null?pn([t]):E.push(t)),t}function qn(t,n){return l!==null&&st()&&l.f&(m|tt)&&(E===null||!E.includes(t))&&Jt(),tn(t,n)}function tn(t,n){return t.equals(n)||(t.v=n,t.version=bt(),dt(t,R),st()&&u!==null&&u.f&p&&!(u.f&y)&&(_!==null&&_.includes(t)?(w(u,R),z(u)):I===null?hn([t]):I.push(t))),n}function dt(t,n){var r=t.reactions;if(r!==null)for(var e=st(),s=r.length,a=0;a<s;a++){var o=r[a],i=o.f;i&R||!e&&o===u||(w(o,n),i&(p|N)&&(i&m?dt(o,H):z(o)))}}const Ln=1,Mn=2,Hn=16,jn=1,Yn=2,Un=4,Bn=8,Vn=16,Gn=1,$n=2,Kn=4,Zn=1,zn=2,nn="[",rn="[!",en="]",Et={},Wn=Symbol();function yt(t){console.warn("hydration_mismatch")}let S=!1;function Xn(t){S=t}let d;function b(t){if(t===null)throw yt(),Et;return d=t}function Jn(){return b(x(d))}function Qn(t){if(S){if(x(d)!==null)throw yt(),Et;d=t}}function tr(t=1){if(S){for(var n=t,r=d;n--;)r=x(r);d=r}}function nr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===en){if(t===0)return n;t-=1}else(r===nn||r===rn)&&(t+=1)}var e=x(n);n.remove(),n=e}}var lt,sn,wt,Tt;function rr(){if(lt===void 0){lt=window,sn=document;var t=Element.prototype,n=Node.prototype;wt=ot(n,"firstChild").get,Tt=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function W(t=""){return document.createTextNode(t)}function X(t){return wt.call(t)}function x(t){return Tt.call(t)}function er(t,n){if(!S)return X(t);var r=X(d);if(r===null)r=d.appendChild(W());else if(n&&r.nodeType!==3){var e=W();return r==null||r.before(e),b(e),e}return b(r),r}function sr(t,n){if(!S){var r=X(t);return r instanceof Comment&&r.data===""?x(r):r}return d}function ar(t,n=1,r=!1){let e=S?d:t;for(;n--;)e=x(e);if(!S)return e;var s=e.nodeType;if(r&&s!==3){var a=W();return e==null||e.before(a),b(a),a}return b(e),e}function or(t){t.textContent=""}function an(t){var n=m|R;u===null?n|=N:u.f|=vt;const r={children:null,ctx:f,deps:null,equals:pt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(l!==null&&l.f&m){var e=l;(e.children??(e.children=[])).push(r)}return r}function ur(t){const n=an(t);return n.equals=ht,n}function mt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?rt(e):P(e)}}}function At(t){var n,r=u;$(t.parent);try{mt(t),n=qt(t)}finally{$(r)}return n}function It(t){var n=At(t),r=(D||t.f&N)&&t.deps!==null?H:p;w(t,r),t.equals(n)||(t.v=n,t.version=bt())}function rt(t){mt(t),L(t,0),w(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Rt(t){u===null&&l===null&&zt(),l!==null&&l.f&N&&Zt(),et&&Kt()}function on(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&K)!==0,a=u,o={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=g;try{it(!0),Z(o),o.f|=Vt}catch(c){throw P(o),c}finally{it(i)}}else n!==null&&z(o);var T=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&vt)===0;if(!T&&!s&&e&&(a!==null&&on(o,a),l!==null&&l.f&m)){var A=l;(A.children??(A.children=[])).push(o)}return o}function lr(t){const n=F(M,null,!1);return w(n,p),n.teardown=t,n}function ir(t){Rt();var n=u!==null&&(u.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:l})}else{var e=Ot(t);return e}}function fr(t){return Rt(),un(t)}function _r(t){const n=F(K,t,!0);return()=>{P(n)}}function Ot(t){return F(_t,t,!1)}function un(t){return F(M,t,!0)}function cr(t){return ln(t)}function ln(t,n=0){return F(M|tt|n,t,!0)}function vr(t,n=!0){return F(M|y,t,!0,n)}function St(t){var n=t.teardown;if(n!==null){const r=et,e=l;ft(!0),G(null);try{n.call(null)}finally{ft(r),G(e)}}}function Nt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)rt(n[r])}}function xt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function fn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&Gt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:x(e);e.remove(),e=a}r=!0}Nt(t),xt(t,n&&!r),L(t,0),w(t,j);var o=t.transitions;if(o!==null)for(const T of o)T.stop();St(t);var i=t.parent;i!==null&&i.first!==null&&Dt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Dt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function pr(t,n){var r=[];gt(t,r,!0),_n(r,()=>{P(t),n&&n()})}function _n(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function gt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&ct)!==0||(e.f&y)!==0;gt(e,n,a?r:!1),e=s}}}function hr(t){kt(t,!0)}function kt(t,n){if(t.f&C){t.f^=C,Y(t)&&Z(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ct)!==0||(r.f&y)!==0;kt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let V=!1,J=[];function Ct(){V=!1;const t=J.slice();J=[],Bt(t)}function dr(t){V||(V=!0,queueMicrotask(Ct)),J.push(t)}function cn(){V&&Ct()}const Ft=0,vn=1;let U=Ft,q=!1,g=!1,et=!1;function it(t){g=t}function ft(t){et=t}let O=[],k=0;let l=null;function G(t){l=t}let u=null;function $(t){u=t}let E=null;function pn(t){E=t}let _=null,h=0,I=null;function hn(t){I=t}let Pt=0,D=!1,f=null;function bt(){return++Pt}function st(){return f!==null&&f.l===null}function Y(t){var o,i;var n=t.f;if(n&R)return!0;if(n&H){var r=t.deps,e=(n&N)!==0;if(r!==null){var s;if(n&B){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=B}for(s=0;s<r.length;s++){var a=r[s];if(Y(a)&&It(a),e&&u!==null&&!D&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||w(t,p)}return!1}function dn(t,n,r){throw t}function qt(t){var at;var n=_,r=h,e=I,s=l,a=D,o=E,i=f,T=t.f;_=null,h=0,I=null,l=T&(y|K)?null:t,D=!g&&(T&N)!==0,E=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!D)for(v=h;v<c.length;v++)((at=c[v]).reactions??(at.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return A}finally{_=n,h=r,I=e,l=s,D=a,E=o,f=i}}function En(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(w(n,H),n.f&(N|B)||(n.f^=B),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)En(t,r[e])}function Z(t){var n=t.f;if(!(n&j)){w(t,p);var r=u;u=t;try{Nt(t),n&tt?fn(t):xt(t),St(t);var e=qt(t);t.teardown=typeof e=="function"?e:null,t.version=Pt}catch(s){dn(s)}finally{u=r}}}function Lt(){k>1e3&&(k=0,Wt()),k++}function Mt(t){var n=t.length;if(n!==0){Lt();var r=g;g=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Ht(s,a),yn(a)}}finally{g=r}}}function yn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|C))&&Y(e)&&(Z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Dt(e):e.fn=null))}}function wn(){if(q=!1,k>1001)return;const t=O;O=[],Mt(t),q||(k=0)}function z(t){U===Ft&&(q||(q=!0,queueMicrotask(wn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(K|y)){if(!(r&p))return;n.f^=p}}O.push(n)}function Ht(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&y)!==0,o=a&&(s&p)!==0;if(!o&&!(s&C))if(s&M){a?r.f^=p:Y(r)&&Z(r);var i=r.first;if(i!==null){r=i;continue}}else s&_t&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Ht(i,n)}function jt(t){var n=U,r=O;try{Lt();const s=[];U=vn,O=s,q=!1,Mt(r);var e=t==null?void 0:t();return cn(),(O.length>0||s.length>0)&&jt(),k=0,e}finally{U=n,O=r}}async function Er(){await Promise.resolve(),jt()}function yr(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=At(t);return rt(t),e}if(l!==null){E!==null&&E.includes(t)&&Xt();var s=l.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),I!==null&&u!==null&&u.f&p&&!(u.f&y)&&I.includes(t)&&(w(u,R),z(u))}else if(r&&t.deps===null){var a=t,o=a.parent;o!==null&&!((i=o.deriveds)!=null&&i.includes(a))&&(o.deriveds??(o.deriveds=[])).push(a)}return r&&(a=t,Y(a)&&It(a)),t.v}function wr(t){const n=l;try{return l=null,t()}finally{l=n}}const Tn=~(R|H|p);function w(t,n){t.f=t.f&Tn|n}function Tr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:nt(!1)})}function mr(t){const n=f;if(n!==null){const o=n.e;if(o!==null){var r=u,e=l;n.e=null;try{for(var s=0;s<o.length;s++){var a=o[s];$(a.effect),G(a.reaction),Ot(a.fn)}}finally{$(r),G(e)}}f=n.p,n.m=!0}return{}}function Ar(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)Q(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&Q(r)}}}function Q(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{Q(t[e],n)}catch{}const r=Ut(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Yt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{sn as $,S as A,Yt as B,W as C,ln as D,b as E,Jn as F,An as G,rn as H,nr as I,Xn as J,d as K,hr as L,vr as M,pr as N,C as O,tn as P,Ln as Q,Hn as R,ut as S,bn as T,Wn as U,Mn as V,gt as W,or as X,_n as Y,P as Z,X as _,mr as a,en as a0,x as a1,sr as a2,yt as a3,Et as a4,Nn as a5,lr as a6,In as a7,G as a8,$ as a9,Yn as aA,ur as aB,Un as aC,j as aD,ht as aE,jn as aF,Bn as aG,Vn as aH,l as aa,rr as ab,nn as ac,gn as ad,_r as ae,Gt as af,Zn as ag,zn as ah,ct as ai,Ot as aj,un as ak,dr as al,jt as am,Er as an,Pn as ao,$t as ap,tt as aq,Vt as ar,Gn as as,Sn as at,$n as au,Kn as av,kn as aw,Dn as ax,y as ay,K as az,On as b,er as c,nt as d,Cn as e,qn as f,yr as g,ot as h,u as i,Fn as j,Ut as k,mn as l,ir as m,tr as n,Rn as o,Tr as p,f as q,Qn as r,ar as s,cr as t,fr as u,wr as v,Bt as w,xn as x,Ar as y,an as z};
