import{o as z,q as F,k as A,v as N,w as G,x as J,y as O,H as K,z as D,A as R,B as I,C as B,D as U,E as P,I as k,F as b,G as Q,J as X,K as W,L as Z,M as S,N as $,O as m,P as j,Q as ee,R as re,S as ae,T as ne,U as le}from"./runtime.BjqHBTFj.js";let H=null;function te(f,e){return e}function fe(f,e,a,v){for(var c=[],d=e.length,s=0;s<d;s++)m(e[s].e,c,!0);var o=d>0&&c.length===0&&a!==null;if(o){var p=a.parentNode;j(p),p.append(a),v.clear(),g(f,e[0].prev,e[d-1].next)}ee(c,()=>{for(var r=0;r<d;r++){var u=e[r];o||(v.delete(u.k),g(f,u.prev,u.next)),re(u.e,!o)}})}function ve(f,e,a,v,c,d=null){var s=f,o={flags:e,items:new Map,first:null};{var p=f;s=A?N(ae(p)):p.appendChild(z())}A&&G();var r=null,u=!1;F(()=>{var n=a(),_=J(n)?n:n==null?[]:O(n),t=_.length;if(u&&t===0)return;u=t===0;let i=!1;if(A){var T=s.data===K;T!==(t===0)&&(s=D(),N(s),R(!1),i=!0)}if(A){for(var l=null,h,x=0;x<t;x++){if(I.nodeType===8&&I.data===ne){s=I,i=!0,R(!1);break}var y=_[x],E=v(y,x);h=V(I,o,l,null,y,E,x,c,e),o.items.set(E,h),l=h}t>0&&N(D())}A||se(_,o,s,c,e,v),d!==null&&(t===0?r?B(r):r=U(()=>d(s)):r!==null&&P(r,()=>{r=null})),i&&R(!0),a()}),A&&(s=I)}function se(f,e,a,v,c,d){var s=f.length,o=e.items,p=e.first,r=p,u,n=null,_=[],t=[],i,T,l,h;for(h=0;h<s;h+=1){if(i=f[h],T=d(i,h),l=o.get(T),l===void 0){var x=r?r.e.nodes_start:a;n=V(x,e,n,n===null?e.first:n.next,i,T,h,v,c),o.set(T,n),_=[],t=[],r=n.next;continue}if(ie(l,i,h),l.e.f&k&&B(l.e),l!==r){if(u!==void 0&&u.has(l)){if(_.length<t.length){var y=t[0],E;n=y.prev;var M=_[0],w=_[_.length-1];for(E=0;E<_.length;E+=1)L(_[E],y,a);for(E=0;E<t.length;E+=1)u.delete(t[E]);g(e,M.prev,w.next),g(e,n,M),g(e,w,y),r=y,n=w,h-=1,_=[],t=[]}else u.delete(l),L(l,r,a),g(e,l.prev,l.next),g(e,l,n===null?e.first:n.next),g(e,n,l),n=l;continue}for(_=[],t=[];r!==null&&r.k!==T;)r.e.f&k||(u??(u=new Set)).add(r),t.push(r),r=r.next;if(r===null)continue;l=r}_.push(l),n=l,r=l.next}if(r!==null||u!==void 0){for(var C=u===void 0?[]:O(u);r!==null;)r.e.f&k||C.push(r),r=r.next;var Y=C.length;if(Y>0){var q=s===0?a:null;fe(e,C,q,o)}}b.first=e.first&&e.first.e,b.last=n&&n.e}function ie(f,e,a,v){Q(f.v,e),f.i=a}function V(f,e,a,v,c,d,s,o,p){var r=H;try{var u=(p&X)!==0,n=(p&W)===0,_=u?n?Z(c):S(c):c,t=p&$?S(s):s,i={i:t,v:_,k:d,a:null,e:null,prev:a,next:v};return H=i,i.e=U(()=>o(f,_,t),A),i.e.prev=a&&a.e,i.e.next=v&&v.e,a===null?e.first=i:(a.next=i,a.e.next=i.e),v!==null&&(v.prev=i,v.e.prev=i.e),i}finally{H=r}}function L(f,e,a){for(var v=f.next?f.next.e.nodes_start:a,c=e?e.e.nodes_start:a,d=f.e.nodes_start;d!==v;){var s=le(d);c.before(d),d=s}}function g(f,e,a){e===null?f.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{ve as e,te as i};
