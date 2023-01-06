(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function T(){}function Te(t){return t()}function Ce(){return Object.create(null)}function W(t){t.forEach(Te)}function je(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ie;function te(t,e){return ie||(ie=document.createElement("a")),ie.href=e,t===ie.href}function Ke(t){return Object.keys(t).length===0}function a(t,e){t.appendChild(e)}function q(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function ae(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function Ve(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function G(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function We(t,e,n){const l=new Set;for(let s=0;s<t.length;s+=1)t[s].checked&&l.add(t[s].__value);return n||l.delete(e),Array.from(l)}function Je(t){return Array.from(t.childNodes)}function H(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ce(t,e,n,l){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function Ue(t,e,{bubbles:n=!1,cancelable:l=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,l,e),s}class Ne{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,l=null){this.e||(this.is_svg?this.e=Ve(n.nodeName):this.e=g(n.nodeName),this.t=n,this.c(e)),this.i(l)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)q(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(y)}}let ne;function ee(t){ne=t}function Xe(){if(!ne)throw new Error("Function called outside component initialization");return ne}function Ie(){const t=Xe();return(e,n,{cancelable:l=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=Ue(e,n,{cancelable:l});return s.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}const x=[],fe=[],oe=[],ge=[],Ye=Promise.resolve();let me=!1;function Ze(){me||(me=!0,Ye.then(Be))}function pe(t){oe.push(t)}function He(t){ge.push(t)}const he=new Set;let re=0;function Be(){const t=ne;do{for(;re<x.length;){const e=x[re];re++,ee(e),xe(e.$$)}for(ee(null),x.length=0,re=0;fe.length;)fe.pop()();for(let e=0;e<oe.length;e+=1){const n=oe[e];he.has(n)||(he.add(n),n())}oe.length=0}while(x.length);for(;ge.length;)ge.pop()();me=!1,he.clear(),ee(t)}function xe(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(pe)}}const ue=new Set;let D;function be(){D={r:0,c:[],p:D}}function we(){D.r||W(D.c),D=D.p}function O(t,e){t&&t.i&&(ue.delete(t),t.i(e))}function j(t,e,n,l){if(t&&t.o){if(ue.has(t))return;ue.add(t),D.c.push(()=>{ue.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function De(t,e,n,l){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,l===void 0&&n(t.$$.ctx[s]))}function le(t){t&&t.c()}function U(t,e,n,l){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),l||pe(()=>{const o=t.$$.on_mount.map(Te).filter(je);t.$$.on_destroy?t.$$.on_destroy.push(...o):W(o),t.$$.on_mount=[]}),r.forEach(pe)}function X(t,e){const n=t.$$;n.fragment!==null&&(W(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){t.$$.dirty[0]===-1&&(x.push(t),Ze(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(t,e,n,l,s,r,o,d=[-1]){const c=ne;ee(t);const i=t.$$={fragment:null,ctx:[],props:r,update:T,not_equal:s,bound:Ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ce(),dirty:d,skip_bound:!1,root:e.target||c.$$.root};o&&o(i.root);let u=!1;if(i.ctx=n?n(t,e.props||{},(m,_,...C)=>{const p=C.length?C[0]:_;return i.ctx&&s(i.ctx[m],i.ctx[m]=p)&&(!i.skip_bound&&i.bound[m]&&i.bound[m](p),u&&et(t,m)),_}):[],i.update(),u=!0,W(i.before_update),i.fragment=l?l(i.ctx):!1,e.target){if(e.hydrate){const m=Je(e.target);i.fragment&&i.fragment.l(m),m.forEach(y)}else i.fragment&&i.fragment.c();e.intro&&O(t.$$.fragment),U(t,e.target,e.anchor,e.customElement),Be()}ee(c)}class Z{$destroy(){X(this,1),this.$destroy=T}$on(e,n){if(!je(n))return T;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!Ke(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const tt="/assets/github-mark-7a0dd11e.svg";function Se(t,e,n){const l=t.slice();return l[3]=e[n],l}function Le(t){let e,n;return{c(){e=g("img"),te(e.src,n="data:image/png;base64,"+t[2])||h(e,"src",n),h(e,"alt","")},m(l,s){q(l,e,s)},p(l,s){s&4&&!te(e.src,n="data:image/png;base64,"+l[2])&&h(e,"src",n)},d(l){l&&y(e)}}}function nt(t){let e;return{c(){e=g("span"),e.textContent="✗",h(e,"class","marker svelte-1s5ea5v"),ce(e,"color","#ff7675")},m(n,l){q(n,e,l)},d(n){n&&y(e)}}}function lt(t){let e;return{c(){e=g("span"),e.textContent="✓",h(e,"class","marker svelte-1s5ea5v"),ce(e,"color","#009432"),ce(e,"font-weight","bolder")},m(n,l){q(n,e,l)},d(n){n&&y(e)}}}function Ae(t){let e,n,l=t[3].answer.replaceAll(`
`,"<br/>")+"",s,r;function o(i,u){return i[3].correct?lt:nt}let d=o(t),c=d(t);return{c(){e=g("p"),n=new Ne(!1),s=S(),c.c(),r=S(),n.a=s,h(e,"class","answer svelte-1s5ea5v")},m(i,u){q(i,e,u),n.m(l,e),a(e,s),c.m(e,null),a(e,r)},p(i,u){u&2&&l!==(l=i[3].answer.replaceAll(`
`,"<br/>")+"")&&n.p(l),d!==(d=o(i))&&(c.d(1),c=d(i),c&&(c.c(),c.m(e,r)))},d(i){i&&y(e),c.d()}}}function st(t){let e,n,l,s=t[0].replaceAll(`
`,"<br/>")+"",r,o,d=t[2]&&Le(t),c=t[1],i=[];for(let u=0;u<c.length;u+=1)i[u]=Ae(Se(t,c,u));return{c(){e=g("div"),n=g("b"),l=g("p"),r=S(),d&&d.c(),o=S();for(let u=0;u<i.length;u+=1)i[u].c();h(e,"class","question svelte-1s5ea5v")},m(u,m){q(u,e,m),a(e,n),a(n,l),l.innerHTML=s,a(e,r),d&&d.m(e,null),a(e,o);for(let _=0;_<i.length;_+=1)i[_].m(e,null)},p(u,[m]){if(m&1&&s!==(s=u[0].replaceAll(`
`,"<br/>")+"")&&(l.innerHTML=s),u[2]?d?d.p(u,m):(d=Le(u),d.c(),d.m(e,o)):d&&(d.d(1),d=null),m&2){c=u[1];let _;for(_=0;_<c.length;_+=1){const C=Se(u,c,_);i[_]?i[_].p(C,m):(i[_]=Ae(C),i[_].c(),i[_].m(e,null))}for(;_<i.length;_+=1)i[_].d(1);i.length=c.length}},i:T,o:T,d(u){u&&y(e),d&&d.d(),ae(i,u)}}}function it(t,e,n){let{question:l}=e,{answers:s}=e,{image:r=null}=e;return t.$$set=o=>{"question"in o&&n(0,l=o.question),"answers"in o&&n(1,s=o.answers),"image"in o&&n(2,r=o.image)},[l,s,r]}class rt extends Z{constructor(e){super(),Y(this,e,it,st,J,{question:0,answers:1,image:2})}}const ot="/questions/{id}.json",ut=[{id:"ALW",name:"SPL Luftrecht",count:30},{id:"HPL",name:"SPL Menschliches Leistungsvermögen",count:30},{id:"MET",name:"SPL Meteorologie",count:63},{id:"COM",name:"SPL Funkkommunikation",count:39},{id:"PFA",name:"SPL Aerodynamik (Grundlagen des Fliegens)",count:39},{id:"OPR",name:"SPL Flugbetriebliche Verfahren",count:38},{id:"FPP",name:"SPL Flugleistung und Flugplanung",count:18},{id:"AGK",name:"SPL Allgemeine Luftfahrzeugkunde",count:54},{id:"NAV",name:"SPL Navigation",count:48}],I={urlTemplate:ot,categories:ut};function Pe(t,e,n){const l=t.slice();return l[6]=e[n],l}function Ee(t){let e,n,l,s,r,o=t[6].name+"",d,c,i,u,m=t[6].count+"",_,C,p,v;return{c(){e=g("div"),n=g("input"),l=S(),s=g("label"),r=g("span"),d=E(o),c=S(),i=g("span"),u=E("("),_=E(m),C=E(" Fragen)"),h(n,"type","checkbox"),n.__value=t[6].id,n.value=n.__value,h(n,"id","category_"+t[6].id),h(n,"class","svelte-yqayt5"),t[5][0].push(n),h(r,"class","name"),h(i,"class","count svelte-yqayt5"),h(s,"for","category_"+t[6].id),h(e,"class","category svelte-yqayt5")},m(f,w){q(f,e,w),a(e,n),n.checked=~t[0].indexOf(n.__value),a(e,l),a(e,s),a(s,r),a(r,d),a(s,c),a(s,i),a(i,u),a(i,_),a(i,C),p||(v=G(n,"change",t[4]),p=!0)},p(f,w){w&1&&(n.checked=~f[0].indexOf(n.__value))},d(f){f&&y(e),t[5][0].splice(t[5][0].indexOf(n),1),p=!1,v()}}}function Qe(t){let e,n,l,s,r,o,d;return{c(){e=g("p"),n=E(t[0]),l=S(),s=g("span"),r=E("("),o=E(t[1]),d=E(" Fragen)"),h(s,"class","count svelte-yqayt5"),h(e,"class","selectedCategories svelte-yqayt5")},m(c,i){q(c,e,i),a(e,n),a(e,l),a(e,s),a(s,r),a(s,o),a(s,d)},p(c,i){i&1&&H(n,c[0]),i&2&&H(o,c[1])},d(c){c&&y(e)}}}function ct(t){let e,n,l,s,r,o,d,c,i,u,m,_,C,p,v=I.categories,f=[];for(let b=0;b<v.length;b+=1)f[b]=Ee(Pe(t,v,b));let w=t[1]>0&&Qe(t);return{c(){e=g("div"),n=g("input"),s=S(),r=g("label"),o=E("Alle auswählen "),d=g("span"),c=E("("),i=E(t[2]),u=E(" Fragen)"),m=S();for(let b=0;b<f.length;b+=1)f[b].c();_=S(),w&&w.c(),h(n,"type","checkbox"),n.checked=l=t[0].length==I.categories.length,h(n,"id","selectAll"),h(n,"class","svelte-yqayt5"),h(d,"class","count svelte-yqayt5"),h(r,"for","selectAll"),h(e,"class","wrapper svelte-yqayt5")},m(b,k){q(b,e,k),a(e,n),a(e,s),a(e,r),a(r,o),a(r,d),a(d,c),a(d,i),a(d,u),a(e,m);for(let A=0;A<f.length;A+=1)f[A].m(e,null);a(e,_),w&&w.m(e,null),C||(p=G(n,"click",t[3]),C=!0)},p(b,[k]){if(k&1&&l!==(l=b[0].length==I.categories.length)&&(n.checked=l),k&4&&H(i,b[2]),k&1){v=I.categories;let A;for(A=0;A<v.length;A+=1){const Q=Pe(b,v,A);f[A]?f[A].p(Q,k):(f[A]=Ee(Q),f[A].c(),f[A].m(e,_))}for(;A<f.length;A+=1)f[A].d(1);f.length=v.length}b[1]>0?w?w.p(b,k):(w=Qe(b),w.c(),w.m(e,null)):w&&(w.d(1),w=null)},i:T,o:T,d(b){b&&y(e),ae(f,b),w&&w.d(),C=!1,p()}}}let ve={};for(let t of I.categories)fetch(I.urlTemplate.replace("{id}",t.id)).then(e=>e.json()).then(e=>{for(let n of e)Object.assign(n,{category:t,id:t.id+n.questionIndex});ve[t.id]=e});function ft(t){let e=[];for(let n of t)if(ve[n])e.push(...ve[n]);else return!1;return e}function at(t,e,n){let{selectedCategories:l=[]}=e,{selectedCategoriesSum:s=0}=e,r=0;for(let i of I.categories)r+=i.count;function o(i){let u=[];if(i.target.checked)for(let m of I.categories)u.push(m.id);n(0,l=u)}const d=[[]];function c(){l=We(d[0],this.__value,this.checked),n(0,l)}return t.$$set=i=>{"selectedCategories"in i&&n(0,l=i.selectedCategories),"selectedCategoriesSum"in i&&n(1,s=i.selectedCategoriesSum)},t.$$.update=()=>{if(t.$$.dirty&1){let i=0;for(let u of I.categories)l.includes(u.id)&&(i+=u.count);n(1,s=i)}},[l,s,r,o,c,d]}class dt extends Z{constructor(e){super(),Y(this,e,at,ct,J,{selectedCategories:0,selectedCategoriesSum:1})}}function $e(t,e,n){const l=t.slice();return l[7]=e[n],l}function Fe(t){let e,n,l,s;return e=new rt({props:{question:t[7].question,answers:t[7].answers,image:t[7].image}}),{c(){le(e.$$.fragment),n=S(),l=g("br"),h(l,"class","svelte-1hdv1f9")},m(r,o){U(e,r,o),q(r,n,o),q(r,l,o),s=!0},p(r,o){const d={};o&2&&(d.question=r[7].question),o&2&&(d.answers=r[7].answers),o&2&&(d.image=r[7].image),e.$set(d)},i(r){s||(O(e.$$.fragment,r),s=!0)},o(r){j(e.$$.fragment,r),s=!1},d(r){X(e,r),r&&y(n),r&&y(l)}}}function _t(t){let e,n,l,s,r,o,d,c,i,u,m,_,C,p,v,f,w,b,k,A,Q,N,R,K,L,$,de,se,_e,ke;function Ge(P){t[4](P)}let ye={};t[0]!==void 0&&(ye.selectedCategories=t[0]),o=new dt({props:ye}),fe.push(()=>De(o,"selectedCategories",Ge,t[0]));let B=t[1],F=[];for(let P=0;P<B.length;P+=1)F[P]=Fe($e(t,B,P));const Re=P=>j(F[P],1,1,()=>{F[P]=null});return{c(){e=g("div"),n=g("h1"),n.textContent="SPL Lernkartei",l=S(),s=g("div"),r=S(),le(o.$$.fragment),c=S(),i=g("div"),u=S(),m=g("button"),m.textContent="Fragen anzeigen",_=S(),C=g("button"),C.textContent="Quiz starten",p=S(),v=g("div"),f=S(),w=g("div"),w.innerHTML=`<ol class="svelte-1hdv1f9"><li class="svelte-1hdv1f9">Die gewünschten Fragen auswählen</li> 
            <li class="svelte-1hdv1f9">Start drücken</li> 
            <li class="svelte-1hdv1f9">Die Fragen werden solange zufällig abgeprüft,<br class="svelte-1hdv1f9"/>bis jede Frage ein mal richtig beantwortet wurde</li></ol>`,b=S(),k=g("div"),A=S(),Q=g("div"),N=g("div"),R=S(),K=g("div"),L=S();for(let P=0;P<F.length;P+=1)F[P].c();$=S(),de=g("div"),h(n,"class","svelte-1hdv1f9"),h(s,"class","spacing svelte-1hdv1f9"),h(i,"class","spacing svelte-1hdv1f9"),h(m,"class","svelte-1hdv1f9"),h(C,"class","svelte-1hdv1f9"),h(v,"class","spacing svelte-1hdv1f9"),h(w,"class","explanation svelte-1hdv1f9"),h(k,"class","spacing svelte-1hdv1f9"),h(N,"class","spacing separator svelte-1hdv1f9"),h(K,"class","spacing svelte-1hdv1f9"),h(de,"class","spacing separator svelte-1hdv1f9"),h(Q,"class","question svelte-1hdv1f9"),h(e,"class","svelte-1hdv1f9")},m(P,M){q(P,e,M),a(e,n),a(e,l),a(e,s),a(e,r),U(o,e,null),a(e,c),a(e,i),a(e,u),a(e,m),a(e,_),a(e,C),a(e,p),a(e,v),a(e,f),a(e,w),a(e,b),a(e,k),a(e,A),a(e,Q),a(Q,N),a(Q,R),a(Q,K),a(Q,L);for(let V=0;V<F.length;V+=1)F[V].m(Q,null);a(Q,$),a(Q,de),se=!0,_e||(ke=[G(m,"click",t[3]),G(C,"click",t[2])],_e=!0)},p(P,[M]){const V={};if(!d&&M&1&&(d=!0,V.selectedCategories=P[0],He(()=>d=!1)),o.$set(V),M&2){B=P[1];let z;for(z=0;z<B.length;z+=1){const qe=$e(P,B,z);F[z]?(F[z].p(qe,M),O(F[z],1)):(F[z]=Fe(qe),F[z].c(),O(F[z],1),F[z].m(Q,$))}for(be(),z=B.length;z<F.length;z+=1)Re(z);we()}},i(P){if(!se){O(o.$$.fragment,P);for(let M=0;M<B.length;M+=1)O(F[M]);se=!0}},o(P){j(o.$$.fragment,P),F=F.filter(Boolean);for(let M=0;M<F.length;M+=1)j(F[M]);se=!1},d(P){P&&y(e),X(o),ae(F,P),_e=!1,W(ke)}}}function ht(t,e,n){const l=Ie();let s,r=[];function o(){c()&&r.length>0&&l("start",r)}function d(){c()}function c(){let u=ft(s);if(u)n(1,r=u);else return alert("loading..."),!1;return!0}function i(u){s=u,n(0,s)}return[s,r,o,d,i]}class gt extends Z{constructor(e){super(),Y(this,e,ht,_t,J,{})}}function ze(t,e,n){const l=t.slice();return l[7]=e[n],l}function Me(t){let e,n;return{c(){e=g("img"),te(e.src,n="data:image/png;base64,"+t[2].image)||h(e,"src",n),h(e,"alt","")},m(l,s){q(l,e,s)},p(l,s){s&4&&!te(e.src,n="data:image/png;base64,"+l[2].image)&&h(e,"src",n)},d(l){l&&y(e)}}}function mt(t){let e;return{c(){e=g("span"),e.textContent="✗",h(e,"class","marker wrong svelte-10d2r4w")},m(n,l){q(n,e,l)},d(n){n&&y(e)}}}function pt(t){let e;return{c(){e=g("span"),e.textContent="✓",h(e,"class","marker right svelte-10d2r4w"),ce(e,"font-weight","bolder")},m(n,l){q(n,e,l)},d(n){n&&y(e)}}}function Oe(t){let e,n,l,s,r,o,d,c=t[7].answer.replaceAll(`
`,"<br/>")+"",i,u,m,_;function C(f,w){if(f[7].correct&&f[3])return pt;if(f[3])return mt}let p=C(t),v=p&&p(t);return{c(){e=g("p"),n=g("input"),r=S(),o=g("label"),d=new Ne(!1),i=S(),v&&v.c(),h(n,"type","radio"),n.__value=l=t[7].answerIndex,n.value=n.__value,h(n,"id",s="answer_"+t[7].answerIndex),n.disabled=t[3],t[5][0].push(n),d.a=i,h(o,"for",u="answer_"+t[7].answerIndex),h(e,"class","answer svelte-10d2r4w")},m(f,w){q(f,e,w),a(e,n),n.checked=n.__value===t[0],a(e,r),a(e,o),d.m(c,o),a(o,i),v&&v.m(o,null),m||(_=G(n,"change",t[4]),m=!0)},p(f,w){w&4&&l!==(l=f[7].answerIndex)&&(n.__value=l,n.value=n.__value),w&4&&s!==(s="answer_"+f[7].answerIndex)&&h(n,"id",s),w&8&&(n.disabled=f[3]),w&1&&(n.checked=n.__value===f[0]),w&4&&c!==(c=f[7].answer.replaceAll(`
`,"<br/>")+"")&&d.p(c),p!==(p=C(f))&&(v&&v.d(1),v=p&&p(f),v&&(v.c(),v.m(o,null))),w&4&&u!==(u="answer_"+f[7].answerIndex)&&h(o,"for",u)},d(f){f&&y(e),t[5][0].splice(t[5][0].indexOf(n),1),v&&v.d(),m=!1,_()}}}function vt(t){let e;return{c(){e=g("p"),e.textContent="Falsch",h(e,"class","wrong svelte-10d2r4w")},m(n,l){q(n,e,l)},d(n){n&&y(e)}}}function bt(t){let e;return{c(){e=g("p"),e.textContent="Richtig",h(e,"class","right svelte-10d2r4w")},m(n,l){q(n,e,l)},d(n){n&&y(e)}}}function wt(t){let e,n,l,s=t[2].question.replaceAll(`
`,"<br/>")+"",r,o,d,c,i,u=t[2].image&&Me(t),m=t[2].answers,_=[];for(let f=0;f<m.length;f+=1)_[f]=Oe(ze(t,m,f));function C(f,w){if(f[3]&&f[1])return bt;if(f[3])return vt}let p=C(t),v=p&&p(t);return{c(){e=g("div"),n=g("b"),l=g("p"),r=S(),u&&u.c(),o=S();for(let f=0;f<_.length;f+=1)_[f].c();d=S(),c=g("br"),i=S(),v&&v.c(),h(c,"class","svelte-10d2r4w"),h(e,"class","question svelte-10d2r4w")},m(f,w){q(f,e,w),a(e,n),a(n,l),l.innerHTML=s,a(e,r),u&&u.m(e,null),a(e,o);for(let b=0;b<_.length;b+=1)_[b].m(e,null);a(e,d),a(e,c),a(e,i),v&&v.m(e,null)},p(f,[w]){if(w&4&&s!==(s=f[2].question.replaceAll(`
`,"<br/>")+"")&&(l.innerHTML=s),f[2].image?u?u.p(f,w):(u=Me(f),u.c(),u.m(e,o)):u&&(u.d(1),u=null),w&13){m=f[2].answers;let b;for(b=0;b<m.length;b+=1){const k=ze(f,m,b);_[b]?_[b].p(k,w):(_[b]=Oe(k),_[b].c(),_[b].m(e,d))}for(;b<_.length;b+=1)_[b].d(1);_.length=m.length}p!==(p=C(f))&&(v&&v.d(1),v=p&&p(f),v&&(v.c(),v.m(e,null)))},i:T,o:T,d(f){f&&y(e),u&&u.d(),ae(_,f),v&&v.d()}}}function kt(t,e,n){let{question:l}=e,{selected:s=null}=e,{correct:r=!1}=e,{showCorrect:o=!1}=e;function d(){n(0,s=null)}const c=[[]];function i(){s=this.__value,n(0,s)}return t.$$set=u=>{"question"in u&&n(2,l=u.question),"selected"in u&&n(0,s=u.selected),"correct"in u&&n(1,r=u.correct),"showCorrect"in u&&n(3,o=u.showCorrect)},t.$$.update=()=>{var u;t.$$.dirty&5&&n(1,r=((u=l.answers.find(m=>m.answerIndex==s))==null?void 0:u.correct)??!1),t.$$.dirty&4&&d()},[s,r,l,o,i,c]}class yt extends Z{constructor(e){super(),Y(this,e,kt,wt,J,{question:2,selected:0,correct:1,showCorrect:3})}}function qt(t){let e,n,l=t[5]-t[3].length+"",s,r,o,d,c,i,u,m,_,C,p,v,f;function w(k){t[11](k)}let b={question:t[4],showCorrect:t[1]};return t[0]!==void 0&&(b.correct=t[0]),i=new yt({props:b}),fe.push(()=>De(i,"correct",w,t[0])),{c(){e=g("p"),n=E("Frage "),s=E(l),r=E("/"),o=E(t[5]),d=S(),c=g("div"),le(i.$$.fragment),m=S(),_=g("div"),C=g("button"),C.textContent="Weiter",h(e,"class","note svelte-8348js"),h(c,"class","question svelte-8348js"),h(_,"class","next svelte-8348js")},m(k,A){q(k,e,A),a(e,n),a(e,s),a(e,r),a(e,o),q(k,d,A),q(k,c,A),U(i,c,null),q(k,m,A),q(k,_,A),a(_,C),p=!0,v||(f=G(C,"click",t[8]),v=!0)},p(k,A){(!p||A&40)&&l!==(l=k[5]-k[3].length+"")&&H(s,l),(!p||A&32)&&H(o,k[5]);const Q={};A&16&&(Q.question=k[4]),A&2&&(Q.showCorrect=k[1]),!u&&A&1&&(u=!0,Q.correct=k[0],He(()=>u=!1)),i.$set(Q)},i(k){p||(O(i.$$.fragment,k),p=!0)},o(k){j(i.$$.fragment,k),p=!1},d(k){k&&y(e),k&&y(d),k&&y(c),X(i),k&&y(m),k&&y(_),v=!1,f()}}}function Ct(t){let e,n,l,s,r,o=t[5]-t[6]+"",d,c,i,u,m,_,C,p=Math.round((t[5]-t[6])/t[5]*1e4)/100+"",v,f,w,b,k,A,Q,N,R,K;return{c(){e=g("h2"),e.textContent="Ergebnis",n=S(),l=g("br"),s=S(),r=g("p"),d=E(o),c=E("/"),i=E(t[5]),u=E(" Fragen wurden richtig beantwortet."),m=S(),_=g("p"),C=E("Dies entspricht "),v=E(p),f=E("%."),w=S(),b=g("p"),b.textContent="Bei einer Prüfung werden mindestens 75% in jedem Teilbereich benötigt.",k=S(),A=g("br"),Q=S(),N=g("button"),N.textContent="Beenden"},m(L,$){q(L,e,$),q(L,n,$),q(L,l,$),q(L,s,$),q(L,r,$),a(r,d),a(r,c),a(r,i),a(r,u),q(L,m,$),q(L,_,$),a(_,C),a(_,v),a(_,f),q(L,w,$),q(L,b,$),q(L,k,$),q(L,A,$),q(L,Q,$),q(L,N,$),R||(K=G(N,"click",t[10]),R=!0)},p(L,$){$&96&&o!==(o=L[5]-L[6]+"")&&H(d,o),$&32&&H(i,L[5]),$&96&&p!==(p=Math.round((L[5]-L[6])/L[5]*1e4)/100+"")&&H(v,p)},i:T,o:T,d(L){L&&y(e),L&&y(n),L&&y(l),L&&y(s),L&&y(r),L&&y(m),L&&y(_),L&&y(w),L&&y(b),L&&y(k),L&&y(A),L&&y(Q),L&&y(N),R=!1,K()}}}function St(t){let e,n,l,s;const r=[Ct,qt],o=[];function d(c,i){return c[2]?0:1}return n=d(t),l=o[n]=r[n](t),{c(){e=g("div"),l.c(),h(e,"class","wrapper svelte-8348js")},m(c,i){q(c,e,i),o[n].m(e,null),s=!0},p(c,[i]){let u=n;n=d(c),n===u?o[n].p(c,i):(be(),j(o[u],1,1,()=>{o[u]=null}),we(),l=o[n],l?l.p(c,i):(l=o[n]=r[n](c),l.c()),O(l,1),l.m(e,null))},i(c){s||(O(l),s=!0)},o(c){j(l),s=!1},d(c){c&&y(e),o[n].d()}}}function Lt(t,e,n){let{questions:l}=e;const s=Ie();let r,o,d,c=[],i,u,m;function _(){n(3,c=[...l]),n(5,u=c.length),n(6,m=0),n(2,d=!1),n(1,o=!0),C()}function C(){if(!o){n(1,o=!0);return}if(n(1,o=!1),i&&!r&&n(6,m++,m),c.length==0){n(2,d=!0);return}let f=Math.floor(Math.random()*c.length);n(4,i=c[f]),c.splice(f,1),n(3,c=[...c])}const p=()=>s("end");function v(f){r=f,n(0,r)}return t.$$set=f=>{"questions"in f&&n(9,l=f.questions)},t.$$.update=()=>{t.$$.dirty&512&&_()},[r,o,d,c,i,u,m,s,C,l,p,v]}class At extends Z{constructor(e){super(),Y(this,e,Lt,St,J,{questions:9})}}function Pt(t){let e,n;return e=new gt({}),e.$on("start",t[1]),{c(){le(e.$$.fragment)},m(l,s){U(e,l,s),n=!0},p:T,i(l){n||(O(e.$$.fragment,l),n=!0)},o(l){j(e.$$.fragment,l),n=!1},d(l){X(e,l)}}}function Et(t){let e,n;return e=new At({props:{questions:t[0]}}),e.$on("end",t[2]),{c(){le(e.$$.fragment)},m(l,s){U(e,l,s),n=!0},p(l,s){const r={};s&1&&(r.questions=l[0]),e.$set(r)},i(l){n||(O(e.$$.fragment,l),n=!0)},o(l){j(e.$$.fragment,l),n=!1},d(l){X(e,l)}}}function Qt(t){let e,n,l,s,r,o,d,c,i,u;const m=[Et,Pt],_=[];function C(p,v){return p[0]?0:1}return n=C(t),l=_[n]=m[n](t),{c(){e=g("main"),l.c(),s=S(),r=g("footer"),o=g("a"),d=g("img"),i=E(" GitHub"),h(e,"class","svelte-h6wr9u"),h(d,"class","icon svelte-h6wr9u"),te(d.src,c=tt)||h(d,"src",c),h(d,"alt",""),h(o,"href","https://github.com/bitfexl/spltheorie"),h(o,"class","svelte-h6wr9u"),h(r,"class","svelte-h6wr9u")},m(p,v){q(p,e,v),_[n].m(e,null),q(p,s,v),q(p,r,v),a(r,o),a(o,d),a(o,i),u=!0},p(p,[v]){let f=n;n=C(p),n===f?_[n].p(p,v):(be(),j(_[f],1,1,()=>{_[f]=null}),we(),l=_[n],l?l.p(p,v):(l=_[n]=m[n](p),l.c()),O(l,1),l.m(e,null))},i(p){u||(O(l),u=!0)},o(p){j(l),u=!1},d(p){p&&y(e),_[n].d(),p&&y(s),p&&y(r)}}}function $t(t,e,n){let l;function s(o){n(0,l=o.detail)}return[l,s,()=>n(0,l=null)]}class Ft extends Z{constructor(e){super(),Y(this,e,$t,Qt,J,{})}}new Ft({target:document.getElementById("app")});