import{C as G,D as J,A,E as R,F as K,l as P,G as S,H as Q,I as D,J as w,K as I,L as V,M as Y,N as U,O as H,i as b,P as W,Q as Z,R as q,T as z,d as L,V as $,W as m,X as j,Y as ee,Z as ae,_ as re,a0 as ne,a1 as le}from"./runtime.C8JzMx3H.js";let M=null;function te(f,e){return e}function fe(f,e,r,v){for(var c=[],d=e.length,s=0;s<d;s++)m(e[s].e,c,!0);var h=d>0&&c.length===0&&r!==null;if(h){var p=r.parentNode;j(p),p.append(r),v.clear(),g(f,e[0].prev,e[d-1].next)}ee(c,()=>{for(var a=0;a<d;a++){var u=e[a];h||(v.delete(u.k),g(f,u.prev,u.next)),ae(u.e,!h)}})}function ve(f,e,r,v,c,d=null){var s=f,h={flags:e,items:new Map,first:null};{var p=f;s=A?R(re(p)):p.appendChild(G())}A&&K();var a=null,u=!1;J(()=>{var n=r(),_=P(n)?n:n==null?[]:S(n),t=_.length;if(u&&t===0)return;u=t===0;let i=!1;if(A){var T=s.data===Q;T!==(t===0)&&(s=D(),R(s),w(!1),i=!0)}if(A){for(var l=null,o,x=0;x<t;x++){if(I.nodeType===8&&I.data===ne){s=I,i=!0,w(!1);break}var y=_[x],E=v(y,x);o=X(I,h,l,null,y,E,x,c,e),h.items.set(E,o),l=o}t>0&&R(D())}A||se(_,h,s,c,e,v),d!==null&&(t===0?a?V(a):a=Y(()=>d(s)):a!==null&&U(a,()=>{a=null})),i&&w(!0),r()}),A&&(s=I)}function se(f,e,r,v,c,d){var s=f.length,h=e.items,p=e.first,a=p,u,n=null,_=[],t=[],i,T,l,o;for(o=0;o<s;o+=1){if(i=f[o],T=d(i,o),l=h.get(T),l===void 0){var x=a?a.e.nodes_start:r;n=X(x,e,n,n===null?e.first:n.next,i,T,o,v,c),h.set(T,n),_=[],t=[],a=n.next;continue}if(ie(l,i,o),l.e.f&H&&V(l.e),l!==a){if(u!==void 0&&u.has(l)){if(_.length<t.length){var y=t[0],E;n=y.prev;var k=_[0],C=_[_.length-1];for(E=0;E<_.length;E+=1)O(_[E],y,r);for(E=0;E<t.length;E+=1)u.delete(t[E]);g(e,k.prev,C.next),g(e,n,k),g(e,C,y),a=y,n=C,o-=1,_=[],t=[]}else u.delete(l),O(l,a,r),g(e,l.prev,l.next),g(e,l,n===null?e.first:n.next),g(e,n,l),n=l;continue}for(_=[],t=[];a!==null&&a.k!==T;)a.e.f&H||(u??(u=new Set)).add(a),t.push(a),a=a.next;if(a===null)continue;l=a}_.push(l),n=l,a=l.next}if(a!==null||u!==void 0){for(var N=u===void 0?[]:S(u);a!==null;)a.e.f&H||N.push(a),a=a.next;var B=N.length;if(B>0){var F=s===0?r:null;fe(e,N,F,h)}}b.first=e.first&&e.first.e,b.last=n&&n.e}function ie(f,e,r,v){W(f.v,e),f.i=r}function X(f,e,r,v,c,d,s,h,p){var a=M;try{var u=(p&Z)!==0,n=(p&q)===0,_=u?n?z(c):L(c):c,t=p&$?L(s):s,i={i:t,v:_,k:d,a:null,e:null,prev:r,next:v};return M=i,i.e=Y(()=>h(f,_,t),A),i.e.prev=r&&r.e,i.e.next=v&&v.e,r===null?e.first=i:(r.next=i,r.e.next=i.e),v!==null&&(v.prev=i,v.e.prev=i.e),i}finally{M=a}}function O(f,e,r){for(var v=f.next?f.next.e.nodes_start:r,c=e?e.e.nodes_start:r,d=f.e.nodes_start;d!==v;){var s=le(d);c.before(d),d=s}}function g(f,e,r){e===null?f.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}export{ve as e,te as i};
