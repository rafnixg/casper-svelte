import{_ as t,a as n,b as e,c as r,i as a,s as o,d as c,S as i,e as s,o as u,p as f,t as l,f as p,g as m,q as h,j as g,r as d,h as v,k as _,l as y,m as E,u as w,v as $,n as A,w as M,x as T,y as D,z as j,A as R,B as I,H as x,C as b,D as N,E as V,F as k,G as H,I as P}from"./client.b3180229.js";import{N as S,P as q}from"./Nav.5e8a6a19.js";function B(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,o=n(t);if(r){var c=n(this).constructor;a=Reflect.construct(o,arguments,c)}else a=o.apply(this,arguments);return e(this,a)}}function K(t){var n,e,r,a,o=t[2].posts.length+"",c=t[2].posts.length<=1?"post":"posts";return{c:function(){n=l("A collection of "),e=l(o),r=f(),a=l(c)},l:function(t){n=v(t,"A collection of "),e=v(t,o),r=d(t),a=v(t,c)},m:function(t,o){y(t,n,o),y(t,e,o),y(t,r,o),y(t,a,o)},p:function(t,n){4&n&&o!==(o=t[2].posts.length+"")&&A(e,o),4&n&&c!==(c=t[2].posts.length<=1?"post":"posts")&&A(a,c)},d:function(t){t&&g(n),t&&g(e),t&&g(r),t&&g(a)}}}function L(t){var n,e=t[2].description+"";return{c:function(){n=l(e)},l:function(t){n=v(t,e)},m:function(t,e){y(t,n,e)},p:function(t,r){4&r&&e!==(e=t[2].description+"")&&A(n,e)},d:function(t){t&&g(n)}}}function z(t){var n,e,r,a,o,c,i,j,R,I,x,b,N=t[2].name+"";function V(t,n){return t[2].description?L:K}a=new S({props:{segment:t[0],settings:t[1]}});var k=V(t),H=k(t);return{c:function(){n=s("header"),e=s("div"),r=s("div"),u(a.$$.fragment),o=f(),c=s("div"),i=s("div"),j=s("h1"),R=l(N),I=f(),x=s("h2"),H.c(),this.h()},l:function(t){n=p(t,"HEADER",{class:!0});var s=m(n);e=p(s,"DIV",{class:!0});var u=m(e);r=p(u,"DIV",{class:!0});var f=m(r);h(a.$$.fragment,f),f.forEach(g),u.forEach(g),o=d(s),c=p(s,"DIV",{class:!0});var l=m(c);i=p(l,"DIV",{class:!0});var _=m(i);j=p(_,"H1",{class:!0});var y=m(j);R=v(y,N),y.forEach(g),I=d(_),x=p(_,"H2",{class:!0});var E=m(x);H.l(E),E.forEach(g),_.forEach(g),l.forEach(g),s.forEach(g),this.h()},h:function(){_(r,"class","inner"),_(e,"class","outer site-nav-main"),_(j,"class","site-title"),_(x,"class","site-description"),_(i,"class","inner site-header-content"),_(c,"class","outer site-header-background no-image"),_(n,"class","site-archive-header")},m:function(t,s){y(t,n,s),E(n,e),E(e,r),w(a,r,null),E(n,o),E(n,c),E(c,i),E(i,j),E(j,R),E(i,I),E(i,x),H.m(x,null),b=!0},p:function(t,n){var e=$(n,1)[0],r={};1&e&&(r.segment=t[0]),2&e&&(r.settings=t[1]),a.$set(r),(!b||4&e)&&N!==(N=t[2].name+"")&&A(R,N),k===(k=V(t))&&H?H.p(t,e):(H.d(1),(H=k(t))&&(H.c(),H.m(x,null)))},i:function(t){b||(M(a.$$.fragment,t),b=!0)},o:function(t){T(a.$$.fragment,t),b=!1},d:function(t){t&&g(n),D(a),H.d()}}}function C(t,n,e){var r=n.segment,a=n.settings,o=n.tag;return t.$$set=function(t){"segment"in t&&e(0,r=t.segment),"settings"in t&&e(1,a=t.settings),"tag"in t&&e(2,o=t.tag)},[r,a,o]}var F=function(n){t(s,i);var e=B(s);function s(t){var n;return r(this,s),n=e.call(this),a(c(n),t,C,z,o,{segment:0,settings:1,tag:2}),n}return s}();function G(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,o=n(t);if(r){var c=n(this).constructor;a=Reflect.construct(o,arguments,c)}else a=o.apply(this,arguments);return e(this,a)}}var J=H.document;function O(t,n,e){var r=t.slice();return r[2]=n[e],r}function Q(t){var n,e,r=t[0].codeinjection_head+"";return{c:function(){e=I(),this.h()},l:function(t){e=I(),this.h()},h:function(){n=new x(e)},m:function(t,a){n.m(r,t,a),y(t,e,a)},p:function(t,e){1&e&&r!==(r=t[0].codeinjection_head+"")&&n.p(r)},d:function(t){t&&g(e),t&&n.d()}}}function U(t){var n,e;return n=new q({props:{post:t[2]}}),{c:function(){u(n.$$.fragment)},l:function(t){h(n.$$.fragment,t)},m:function(t,r){w(n,t,r),e=!0},p:function(t,e){var r={};1&e&&(r.post=t[2]),n.$set(r)},i:function(t){e||(M(n.$$.fragment,t),e=!0)},o:function(t){T(n.$$.fragment,t),e=!1},d:function(t){D(n,t)}}}function W(t){var n,e,r,a,o,c,i,l,v,A,j,R,x,k,H,S,q,B,K,L,z,C,G,W,X,Y,Z,tt,nt,et,rt,at,ot,ct,it,st,ut,ft,lt,pt,mt,ht,gt,dt,vt,_t,yt;J.title=n="".concat(t[0].name," - ").concat(t[1].title);var Et=t[0].codeinjection_head&&Q(t);ht=new F({props:{tag:t[0],settings:t[1]}});for(var wt=t[0].posts,$t=[],At=0;At<wt.length;At+=1)$t[At]=U(O(t,wt,At));var Mt=function(t){return T($t[t],1,1,(function(){$t[t]=null}))};return{c:function(){e=s("meta"),a=s("meta"),c=s("meta"),i=s("meta"),v=s("meta"),j=s("meta"),x=s("meta"),H=s("link"),q=s("link"),K=s("meta"),z=s("meta"),G=s("meta"),X=s("meta"),Z=s("meta"),tt=s("meta"),et=s("meta"),at=s("meta"),ct=s("meta"),st=s("meta"),ft=s("meta"),Et&&Et.c(),pt=I(),mt=f(),u(ht.$$.fragment),gt=f(),dt=s("main"),vt=s("div"),_t=s("div");for(var t=0;t<$t.length;t+=1)$t[t].c();this.h()},l:function(t){var n=b('[data-svelte="svelte-9i362m"]',J.head);e=p(n,"META",{name:!0,content:!0}),a=p(n,"META",{name:!0,content:!0}),c=p(n,"META",{name:!0,content:!0}),i=p(n,"META",{name:!0,content:!0}),v=p(n,"META",{name:!0,content:!0}),j=p(n,"META",{name:!0,content:!0}),x=p(n,"META",{name:!0,content:!0}),H=p(n,"LINK",{rel:!0,href:!0}),q=p(n,"LINK",{rel:!0,href:!0}),K=p(n,"META",{itemprop:!0,content:!0}),z=p(n,"META",{itemprop:!0,content:!0}),G=p(n,"META",{itemprop:!0,content:!0}),X=p(n,"META",{property:!0,content:!0}),Z=p(n,"META",{property:!0,content:!0}),tt=p(n,"META",{property:!0,content:!0}),et=p(n,"META",{property:!0,content:!0}),at=p(n,"META",{property:!0,content:!0}),ct=p(n,"META",{property:!0,content:!0}),st=p(n,"META",{property:!0,content:!0}),ft=p(n,"META",{property:!0,content:!0}),Et&&Et.l(n),pt=I(),n.forEach(g),mt=d(t),h(ht.$$.fragment,t),gt=d(t),dt=p(t,"MAIN",{id:!0,class:!0});var r=m(dt);vt=p(r,"DIV",{class:!0});var o=m(vt);_t=p(o,"DIV",{class:!0});for(var s=m(_t),u=0;u<$t.length;u+=1)$t[u].l(s);s.forEach(g),o.forEach(g),r.forEach(g),this.h()},h:function(){_(e,"name","twitter:site"),_(e,"content",r=t[1].twitter),_(a,"name","twitter:creator"),_(a,"content",o=t[1].twitter),_(c,"name","twitter:card"),_(c,"content","summary_large_image"),_(i,"name","twitter:url"),_(i,"content",l=t[0].url),_(v,"name","twitter:title"),_(v,"content",A=t[0].twitter_title?t[0].twitter_title:"".concat(t[0].name," - ").concat(t[1].title)),_(j,"name","twitter:description"),_(j,"content",R=t[0].twitter_description?t[0].twitter_description:t[1].description),_(x,"name","twitter:image"),_(x,"content",k=t[0].twitter_image?t[0].twitter_image:t[1].feature_image),_(H,"rel","author"),_(H,"href",S=t[0].url),_(q,"rel","publisher"),_(q,"href",B=t[0].url),_(K,"itemprop","name"),_(K,"content",L=t[0].name),_(z,"itemprop","description"),_(z,"content",C=t[1].description),_(G,"itemprop","image"),_(G,"content",W=t[0].feature_image),_(X,"property","og:url"),_(X,"content",Y=t[0].url),_(Z,"property","og:type"),_(Z,"content","webtag"),_(tt,"property","og:title"),_(tt,"content",nt=t[0].og_title?t[0].og_title:"".concat(t[0].name," - ").concat(t[1].title)),_(et,"property","og:image"),_(et,"content",rt=t[0].og_image?t[0].og_image:t[0].feature_image),_(at,"property","og:description"),_(at,"content",ot=t[0].og_description?t[0].og_description:t[1].description),_(ct,"property","og:site_name"),_(ct,"content",it="".concat(t[0].name," - ").concat(t[1].title)),_(st,"property","og:locale"),_(st,"content",ut=t[1].lang),_(ft,"property","article:author"),_(ft,"content",lt=t[0].url),_(_t,"class","post-feed"),_(vt,"class","inner posts"),_(dt,"id","site-main"),_(dt,"class","site-main outer")},m:function(t,n){E(J.head,e),E(J.head,a),E(J.head,c),E(J.head,i),E(J.head,v),E(J.head,j),E(J.head,x),E(J.head,H),E(J.head,q),E(J.head,K),E(J.head,z),E(J.head,G),E(J.head,X),E(J.head,Z),E(J.head,tt),E(J.head,et),E(J.head,at),E(J.head,ct),E(J.head,st),E(J.head,ft),Et&&Et.m(J.head,null),E(J.head,pt),y(t,mt,n),w(ht,t,n),y(t,gt,n),y(t,dt,n),E(dt,vt),E(vt,_t);for(var r=0;r<$t.length;r+=1)$t[r].m(_t,null);yt=!0},p:function(t,c){var s=$(c,1)[0];(!yt||3&s)&&n!==(n="".concat(t[0].name," - ").concat(t[1].title))&&(J.title=n),(!yt||2&s&&r!==(r=t[1].twitter))&&_(e,"content",r),(!yt||2&s&&o!==(o=t[1].twitter))&&_(a,"content",o),(!yt||1&s&&l!==(l=t[0].url))&&_(i,"content",l),(!yt||3&s&&A!==(A=t[0].twitter_title?t[0].twitter_title:"".concat(t[0].name," - ").concat(t[1].title)))&&_(v,"content",A),(!yt||3&s&&R!==(R=t[0].twitter_description?t[0].twitter_description:t[1].description))&&_(j,"content",R),(!yt||3&s&&k!==(k=t[0].twitter_image?t[0].twitter_image:t[1].feature_image))&&_(x,"content",k),(!yt||1&s&&S!==(S=t[0].url))&&_(H,"href",S),(!yt||1&s&&B!==(B=t[0].url))&&_(q,"href",B),(!yt||1&s&&L!==(L=t[0].name))&&_(K,"content",L),(!yt||2&s&&C!==(C=t[1].description))&&_(z,"content",C),(!yt||1&s&&W!==(W=t[0].feature_image))&&_(G,"content",W),(!yt||1&s&&Y!==(Y=t[0].url))&&_(X,"content",Y),(!yt||3&s&&nt!==(nt=t[0].og_title?t[0].og_title:"".concat(t[0].name," - ").concat(t[1].title)))&&_(tt,"content",nt),(!yt||1&s&&rt!==(rt=t[0].og_image?t[0].og_image:t[0].feature_image))&&_(et,"content",rt),(!yt||3&s&&ot!==(ot=t[0].og_description?t[0].og_description:t[1].description))&&_(at,"content",ot),(!yt||3&s&&it!==(it="".concat(t[0].name," - ").concat(t[1].title)))&&_(ct,"content",it),(!yt||2&s&&ut!==(ut=t[1].lang))&&_(st,"content",ut),(!yt||1&s&&lt!==(lt=t[0].url))&&_(ft,"content",lt),t[0].codeinjection_head?Et?Et.p(t,s):((Et=Q(t)).c(),Et.m(pt.parentNode,pt)):Et&&(Et.d(1),Et=null);var u={};if(1&s&&(u.tag=t[0]),2&s&&(u.settings=t[1]),ht.$set(u),1&s){var f;for(wt=t[0].posts,f=0;f<wt.length;f+=1){var p=O(t,wt,f);$t[f]?($t[f].p(p,s),M($t[f],1)):($t[f]=U(p),$t[f].c(),M($t[f],1),$t[f].m(_t,null))}for(P(),f=wt.length;f<$t.length;f+=1)Mt(f);N()}},i:function(t){if(!yt){M(ht.$$.fragment,t);for(var n=0;n<wt.length;n+=1)M($t[n]);yt=!0}},o:function(t){T(ht.$$.fragment,t),$t=$t.filter(Boolean);for(var n=0;n<$t.length;n+=1)T($t[n]);yt=!1},d:function(t){g(e),g(a),g(c),g(i),g(v),g(j),g(x),g(H),g(q),g(K),g(z),g(G),g(X),g(Z),g(tt),g(et),g(at),g(ct),g(st),g(ft),Et&&Et.d(t),g(pt),t&&g(mt),D(ht,t),t&&g(gt),t&&g(dt),V($t,t)}}}function X(t){return Y.apply(this,arguments)}function Y(){return(Y=j(R.mark((function t(n){var e,r,a;return R.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.params,n.query,t.next=3,this.fetch("settings.json").then((function(t){return t.json()}));case 3:return r=t.sent,t.next=6,this.fetch("tag/".concat(e.slug,".json")).then((function(t){return t.json()}));case 6:return a=t.sent,t.abrupt("return",{tag:a,settings:r});case 8:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function Z(t,n,e){var r=n.tag,a=n.settings;return k((function(){document.body.className="tag-template"})),t.$$set=function(t){"tag"in t&&e(0,r=t.tag),"settings"in t&&e(1,a=t.settings)},[r,a]}var tt=function(n){t(s,i);var e=G(s);function s(t){var n;return r(this,s),n=e.call(this),a(c(n),t,Z,W,o,{tag:0,settings:1}),n}return s}();export default tt;export{X as preload};
