(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Tu(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Re={},ts=[],Ft=()=>{},nE=()=>!1,Ra=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Au=t=>t.startsWith("onUpdate:"),st=Object.assign,Ru=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},rE=Object.prototype.hasOwnProperty,pe=(t,e)=>rE.call(t,e),X=Array.isArray,ns=t=>ba(t)==="[object Map]",Cg=t=>ba(t)==="[object Set]",se=t=>typeof t=="function",ze=t=>typeof t=="string",As=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",kg=t=>(Ce(t)||se(t))&&se(t.then)&&se(t.catch),Og=Object.prototype.toString,ba=t=>Og.call(t),sE=t=>ba(t).slice(8,-1),Dg=t=>ba(t)==="[object Object]",bu=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ko=Tu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},iE=/-(\w)/g,us=Pa(t=>t.replace(iE,(e,n)=>n?n.toUpperCase():"")),oE=/\B([A-Z])/g,Rs=Pa(t=>t.replace(oE,"-$1").toLowerCase()),xg=Pa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cc=Pa(t=>t?`on${xg(t)}`:""),Gn=(t,e)=>!Object.is(t,e),Oo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ho=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},yl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Sf;const Ng=()=>Sf||(Sf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pu(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?uE(r):Pu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ze(t)||Ce(t))return t}const aE=/;(?![^(]*\))/g,cE=/:([^]+)/,lE=/\/\*[^]*?\*\//g;function uE(t){const e={};return t.replace(lE,"").split(aE).forEach(n=>{if(n){const r=n.split(cE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Su(t){let e="";if(ze(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const r=Su(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const hE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fE=Tu(hE);function Vg(t){return!!t||t===""}const zo=t=>ze(t)?t:t==null?"":X(t)||Ce(t)&&(t.toString===Og||!se(t.toString))?JSON.stringify(t,Lg,2):String(t),Lg=(t,e)=>e&&e.__v_isRef?Lg(t,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[kc(r,i)+" =>"]=s,n),{})}:Cg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>kc(n))}:As(e)?kc(e):Ce(e)&&!X(e)&&!Dg(e)?String(e):e,kc=(t,e="")=>{var n;return As(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Ct;class Mg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Fg(t){return new Mg(t)}function dE(t,e=Ct){e&&e.active&&e.effects.push(t)}function Cu(){return Ct}function pE(t){Ct&&Ct.cleanups.push(t)}let yr;class ku{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,dE(this,s)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,Nr();for(const e of this.deps)if(e.computed&&(gE(e.computed),this._dirtyLevel>=2))break;Vr(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Bn,n=yr;try{return Bn=!0,yr=this,this._runnings++,Cf(this),this.fn()}finally{kf(this),this._runnings--,yr=n,Bn=e}}stop(){var e;this.active&&(Cf(this),kf(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function gE(t){return t.value}function Cf(t){t._trackId++,t._depsLength=0}function kf(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Ug(t.deps[e],t);t.deps.length=t._depsLength}}function Ug(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Bn=!0,vl=0;const $g=[];function Nr(){$g.push(Bn),Bn=!1}function Vr(){const t=$g.pop();Bn=t===void 0?!0:t}function Ou(){vl++}function Du(){for(vl--;!vl&&wl.length;)wl.shift()()}function jg(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Ug(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const wl=[];function Bg(t,e,n){Ou();for(const r of t.keys())if(!(!r.allowRecurse&&r._runnings)&&r._dirtyLevel<e&&(!r._runnings||e!==2)){const s=r._dirtyLevel;r._dirtyLevel=e,s===0&&(!r._queryings||e!==2)&&(r.trigger(),r.scheduler&&wl.push(r.scheduler))}Du()}const qg=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Wo=new WeakMap,vr=Symbol(""),El=Symbol("");function Rt(t,e,n){if(Bn&&yr){let r=Wo.get(t);r||Wo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=qg(()=>r.delete(n))),jg(yr,s)}}function wn(t,e,n,r,s,i){const o=Wo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!As(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?bu(n)&&a.push(o.get("length")):(a.push(o.get(vr)),ns(t)&&a.push(o.get(El)));break;case"delete":X(t)||(a.push(o.get(vr)),ns(t)&&a.push(o.get(El)));break;case"set":ns(t)&&a.push(o.get(vr));break}Ou();for(const c of a)c&&Bg(c,3);Du()}function mE(t,e){var n;return(n=Wo.get(t))==null?void 0:n.get(e)}const _E=Tu("__proto__,__v_isRef,__isVue"),Hg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(As)),Of=yE();function yE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ge(this);for(let i=0,o=this.length;i<o;i++)Rt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ge)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Nr(),Ou();const r=ge(this)[e].apply(this,n);return Du(),Vr(),r}}),t}function vE(t){const e=ge(this);return Rt(e,"has",t),e.hasOwnProperty(t)}class zg{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?DE:Qg:i?Gg:Kg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=X(e);if(!s){if(o&&pe(Of,n))return Reflect.get(Of,n,r);if(n==="hasOwnProperty")return vE}const a=Reflect.get(e,n,r);return(As(n)?Hg.has(n):_E(n))||(s||Rt(e,"get",n),i)?a:xe(a)?o&&bu(n)?a:a.value:Ce(a)?s?Xg(a):Zn(a):a}}class Wg extends zg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const c=Ar(i);if(!Ko(r)&&!Ar(r)&&(i=ge(i),r=ge(r)),!X(e)&&xe(i)&&!xe(r))return c?!1:(i.value=r,!0)}const o=X(e)&&bu(n)?Number(n)<e.length:pe(e,n),a=Reflect.set(e,n,r,s);return e===ge(s)&&(o?Gn(r,i)&&wn(e,"set",n,r):wn(e,"add",n,r)),a}deleteProperty(e,n){const r=pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&wn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!As(n)||!Hg.has(n))&&Rt(e,"has",n),r}ownKeys(e){return Rt(e,"iterate",X(e)?"length":vr),Reflect.ownKeys(e)}}class wE extends zg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const EE=new Wg,IE=new wE,TE=new Wg(!0),xu=t=>t,Sa=t=>Reflect.getPrototypeOf(t);function lo(t,e,n=!1,r=!1){t=t.__v_raw;const s=ge(t),i=ge(e);n||(Gn(e,i)&&Rt(s,"get",e),Rt(s,"get",i));const{has:o}=Sa(s),a=r?xu:n?Lu:di;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function uo(t,e=!1){const n=this.__v_raw,r=ge(n),s=ge(t);return e||(Gn(t,s)&&Rt(r,"has",t),Rt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ho(t,e=!1){return t=t.__v_raw,!e&&Rt(ge(t),"iterate",vr),Reflect.get(t,"size",t)}function Df(t){t=ge(t);const e=ge(this);return Sa(e).has.call(e,t)||(e.add(t),wn(e,"add",t,t)),this}function xf(t,e){e=ge(e);const n=ge(this),{has:r,get:s}=Sa(n);let i=r.call(n,t);i||(t=ge(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Gn(e,o)&&wn(n,"set",t,e):wn(n,"add",t,e),this}function Nf(t){const e=ge(this),{has:n,get:r}=Sa(e);let s=n.call(e,t);s||(t=ge(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&wn(e,"delete",t,void 0),i}function Vf(){const t=ge(this),e=t.size!==0,n=t.clear();return e&&wn(t,"clear",void 0,void 0),n}function fo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ge(o),c=e?xu:t?Lu:di;return!t&&Rt(a,"iterate",vr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function po(t,e,n){return function(...r){const s=this.__v_raw,i=ge(s),o=ns(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?xu:e?Lu:di;return!e&&Rt(i,"iterate",c?El:vr),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Sn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function AE(){const t={get(i){return lo(this,i)},get size(){return ho(this)},has:uo,add:Df,set:xf,delete:Nf,clear:Vf,forEach:fo(!1,!1)},e={get(i){return lo(this,i,!1,!0)},get size(){return ho(this)},has:uo,add:Df,set:xf,delete:Nf,clear:Vf,forEach:fo(!1,!0)},n={get(i){return lo(this,i,!0)},get size(){return ho(this,!0)},has(i){return uo.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:fo(!0,!1)},r={get(i){return lo(this,i,!0,!0)},get size(){return ho(this,!0)},has(i){return uo.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:fo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=po(i,!1,!1),n[i]=po(i,!0,!1),e[i]=po(i,!1,!0),r[i]=po(i,!0,!0)}),[t,n,e,r]}const[RE,bE,PE,SE]=AE();function Nu(t,e){const n=e?t?SE:PE:t?bE:RE;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(pe(n,s)&&s in r?n:r,s,i)}const CE={get:Nu(!1,!1)},kE={get:Nu(!1,!0)},OE={get:Nu(!0,!1)},Kg=new WeakMap,Gg=new WeakMap,Qg=new WeakMap,DE=new WeakMap;function xE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function NE(t){return t.__v_skip||!Object.isExtensible(t)?0:xE(sE(t))}function Zn(t){return Ar(t)?t:Vu(t,!1,EE,CE,Kg)}function Yg(t){return Vu(t,!1,TE,kE,Gg)}function Xg(t){return Vu(t,!0,IE,OE,Qg)}function Vu(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=NE(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function En(t){return Ar(t)?En(t.__v_raw):!!(t&&t.__v_isReactive)}function Ar(t){return!!(t&&t.__v_isReadonly)}function Ko(t){return!!(t&&t.__v_isShallow)}function Jg(t){return En(t)||Ar(t)}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function Ca(t){return Ho(t,"__v_skip",!0),t}const di=t=>Ce(t)?Zn(t):t,Lu=t=>Ce(t)?Xg(t):t;class Zg{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ku(()=>e(this._value),()=>Il(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ge(this);return em(e),(!e._cacheable||e.effect.dirty)&&Gn(e._value,e._value=e.effect.run())&&Il(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function VE(t,e,n=!1){let r,s;const i=se(t);return i?(r=t,s=Ft):(r=t.get,s=t.set),new Zg(r,s,i||!s,n)}function em(t){Bn&&yr&&(t=ge(t),jg(yr,t.dep||(t.dep=qg(()=>t.dep=void 0,t instanceof Zg?t:void 0))))}function Il(t,e=3,n){t=ge(t);const r=t.dep;r&&Bg(r,e)}function xe(t){return!!(t&&t.__v_isRef===!0)}function ve(t){return tm(t,!1)}function LE(t){return tm(t,!0)}function tm(t,e){return xe(t)?t:new ME(t,e)}class ME{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ge(e),this._value=n?e:di(e)}get value(){return em(this),this._value}set value(e){const n=this.__v_isShallow||Ko(e)||Ar(e);e=n?e:ge(e),Gn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:di(e),Il(this,3))}}function G(t){return xe(t)?t.value:t}const FE={get:(t,e,n)=>G(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return xe(s)&&!xe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function nm(t){return En(t)?t:new Proxy(t,FE)}function UE(t){const e=X(t)?new Array(t.length):{};for(const n in t)e[n]=jE(t,n);return e}class $E{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return mE(ge(this._object),this._key)}}function jE(t,e,n){const r=t[e];return xe(r)?r:new $E(t,e,n)}function qn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ka(i,e,n)}return s}function zt(t,e,n,r){if(se(t)){const i=qn(t,e,n,r);return i&&kg(i)&&i.catch(o=>{ka(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(zt(t[i],e,n,r));return s}function ka(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){qn(c,null,10,[t,o,a]);return}}BE(t,n,s,r)}function BE(t,e,n,r=!0){console.error(t)}let pi=!1,Tl=!1;const lt=[];let nn=0;const rs=[];let mn=null,fr=0;const rm=Promise.resolve();let Mu=null;function gi(t){const e=Mu||rm;return t?e.then(this?t.bind(this):t):e}function qE(t){let e=nn+1,n=lt.length;for(;e<n;){const r=e+n>>>1,s=lt[r],i=mi(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Fu(t){(!lt.length||!lt.includes(t,pi&&t.allowRecurse?nn+1:nn))&&(t.id==null?lt.push(t):lt.splice(qE(t.id),0,t),sm())}function sm(){!pi&&!Tl&&(Tl=!0,Mu=rm.then(om))}function HE(t){const e=lt.indexOf(t);e>nn&&lt.splice(e,1)}function zE(t){X(t)?rs.push(...t):(!mn||!mn.includes(t,t.allowRecurse?fr+1:fr))&&rs.push(t),sm()}function Lf(t,e,n=pi?nn+1:0){for(;n<lt.length;n++){const r=lt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;lt.splice(n,1),n--,r()}}}function im(t){if(rs.length){const e=[...new Set(rs)];if(rs.length=0,mn){mn.push(...e);return}for(mn=e,mn.sort((n,r)=>mi(n)-mi(r)),fr=0;fr<mn.length;fr++)mn[fr]();mn=null,fr=0}}const mi=t=>t.id==null?1/0:t.id,WE=(t,e)=>{const n=mi(t)-mi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function om(t){Tl=!1,pi=!0,lt.sort(WE);try{for(nn=0;nn<lt.length;nn++){const e=lt[nn];e&&e.active!==!1&&qn(e,null,14)}}finally{nn=0,lt.length=0,im(),pi=!1,Mu=null,(lt.length||rs.length)&&om()}}function KE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Re;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||Re;f&&(s=n.map(d=>ze(d)?d.trim():d)),h&&(s=n.map(yl))}let a,c=r[a=Cc(e)]||r[a=Cc(us(e))];!c&&i&&(c=r[a=Cc(Rs(e))]),c&&zt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,zt(l,t,6,s)}}function am(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!se(t)){const c=l=>{const u=am(l,e,!0);u&&(a=!0,st(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ce(t)&&r.set(t,null),null):(X(i)?i.forEach(c=>o[c]=null):st(o,i),Ce(t)&&r.set(t,o),o)}function Oa(t,e){return!t||!Ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,Rs(e))||pe(t,e))}let Ot=null,cm=null;function Go(t){const e=Ot;return Ot=t,cm=t&&t.type.__scopeId||null,e}function GE(t,e=Ot,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Kf(-1);const i=Go(e);let o;try{o=t(...s)}finally{Go(i),r._d&&Kf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Oc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:v}=t;let _,w;const P=Go(t);try{if(n.shapeFlag&4){const O=s||r,B=O;_=tn(u.call(B,O,h,i,d,f,p)),w=c}else{const O=e;_=tn(O.length>1?O(i,{attrs:c,slots:a,emit:l}):O(i,null)),w=e.props?c:QE(c)}}catch(O){ei.length=0,ka(O,t,1),_=ut(Rr)}let k=_;if(w&&v!==!1){const O=Object.keys(w),{shapeFlag:B}=k;O.length&&B&7&&(o&&O.some(Au)&&(w=YE(w,o)),k=hs(k,w))}return n.dirs&&(k=hs(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),_=k,Go(P),_}const QE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ra(n))&&((e||(e={}))[n]=t[n]);return e},YE=(t,e)=>{const n={};for(const r in t)(!Au(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function XE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Mf(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Oa(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Mf(r,o,l):!0:!!o;return!1}function Mf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Oa(n,i))return!0}return!1}function JE({vnode:t,parent:e},n){if(n)for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ZE=Symbol.for("v-ndc"),e0=t=>t.__isSuspense;function t0(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):zE(t)}const n0=Symbol.for("v-scx"),r0=()=>It(n0),go={};function cn(t,e,n){return lm(t,e,n)}function lm(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Re){if(e&&i){const L=e;e=(...te)=>{L(...te),B()}}const c=et,l=L=>r===!0?L:dr(L,r===!1?1:void 0);let u,h=!1,f=!1;if(xe(t)?(u=()=>t.value,h=Ko(t)):En(t)?(u=()=>l(t),h=!0):X(t)?(f=!0,h=t.some(L=>En(L)||Ko(L)),u=()=>t.map(L=>{if(xe(L))return L.value;if(En(L))return l(L);if(se(L))return qn(L,c,2)})):se(t)?e?u=()=>qn(t,c,2):u=()=>(d&&d(),zt(t,c,3,[p])):u=Ft,e&&r){const L=u;u=()=>dr(L())}let d,p=L=>{d=k.onStop=()=>{qn(L,c,4),d=k.onStop=void 0}},v;if(Va)if(p=Ft,e?n&&zt(e,c,3,[u(),f?[]:void 0,p]):u(),s==="sync"){const L=r0();v=L.__watcherHandles||(L.__watcherHandles=[])}else return Ft;let _=f?new Array(t.length).fill(go):go;const w=()=>{if(!(!k.active||!k.dirty))if(e){const L=k.run();(r||h||(f?L.some((te,$)=>Gn(te,_[$])):Gn(L,_)))&&(d&&d(),zt(e,c,3,[L,_===go?void 0:f&&_[0]===go?[]:_,p]),_=L)}else k.run()};w.allowRecurse=!!e;let P;s==="sync"?P=w:s==="post"?P=()=>wt(w,c&&c.suspense):(w.pre=!0,c&&(w.id=c.uid),P=()=>Fu(w));const k=new ku(u,Ft,P),O=Cu(),B=()=>{k.stop(),O&&Ru(O.effects,k)};return e?n?w():_=k.run():s==="post"?wt(k.run.bind(k),c&&c.suspense):k.run(),v&&v.push(B),B}function s0(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?um(r,t):()=>r[t]:t.bind(r,r);let i;se(e)?i=e:(i=e.handler,n=e);const o=et;fs(this);const a=lm(s,i.bind(r),n);return o?fs(o):wr(),a}function um(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function dr(t,e,n=0,r){if(!Ce(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),xe(t))dr(t.value,e,n,r);else if(X(t))for(let s=0;s<t.length;s++)dr(t[s],e,n,r);else if(Cg(t)||ns(t))t.forEach(s=>{dr(s,e,n,r)});else if(Dg(t))for(const s in t)dr(t[s],e,n,r);return t}function Ff(t,e){const n=Ot;if(n===null)return t;const r=La(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Re]=e[i];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&dr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function cr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Nr(),zt(c,n,8,[t.el,a,t,e]),Vr())}}/*! #__NO_SIDE_EFFECTS__ */function er(t,e){return se(t)?st({name:t.name},e,{setup:t}):t}const Do=t=>!!t.type.__asyncLoader,hm=t=>t.type.__isKeepAlive;function i0(t,e){fm(t,"a",e)}function o0(t,e){fm(t,"da",e)}function fm(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Da(e,r,n),n){let s=n.parent;for(;s&&s.parent;)hm(s.parent.vnode)&&a0(r,e,n,s),s=s.parent}}function a0(t,e,n,r){const s=Da(e,t,r,!0);gm(()=>{Ru(r[e],s)},n)}function Da(t,e,n=et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Nr(),fs(n);const a=zt(e,n,t,o);return wr(),Vr(),a});return r?s.unshift(i):s.push(i),i}}const Pn=t=>(e,n=et)=>(!Va||t==="sp")&&Da(t,(...r)=>e(...r),n),dm=Pn("bm"),ji=Pn("m"),c0=Pn("bu"),l0=Pn("u"),pm=Pn("bum"),gm=Pn("um"),u0=Pn("sp"),h0=Pn("rtg"),f0=Pn("rtc");function d0(t,e=et){Da("ec",t,e)}function p0(t,e,n,r){let s;const i=n&&n[r];if(X(t)||ze(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Al=t=>t?Pm(t)?La(t)||t.proxy:Al(t.parent):null,Zs=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Al(t.parent),$root:t=>Al(t.root),$emit:t=>t.emit,$options:t=>Uu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Fu(t.update)}),$nextTick:t=>t.n||(t.n=gi.bind(t.proxy)),$watch:t=>s0.bind(t)}),Dc=(t,e)=>t!==Re&&!t.__isScriptSetup&&pe(t,e),g0={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Dc(r,e))return o[e]=1,r[e];if(s!==Re&&pe(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&pe(l,e))return o[e]=3,i[e];if(n!==Re&&pe(n,e))return o[e]=4,n[e];Rl&&(o[e]=0)}}const u=Zs[e];let h,f;if(u)return e==="$attrs"&&Rt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Re&&pe(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,pe(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Dc(s,e)?(s[e]=n,!0):r!==Re&&pe(r,e)?(r[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Re&&pe(t,o)||Dc(e,o)||(a=i[0])&&pe(a,o)||pe(r,o)||pe(Zs,o)||pe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Uf(t){return X(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Rl=!0;function m0(t){const e=Uu(t),n=t.proxy,r=t.ctx;Rl=!1,e.beforeCreate&&$f(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:v,deactivated:_,beforeDestroy:w,beforeUnmount:P,destroyed:k,unmounted:O,render:B,renderTracked:L,renderTriggered:te,errorCaptured:$,serverPrefetch:q,expose:_e,inheritAttrs:Oe,components:Fe,directives:Xe,filters:Vt}=e;if(l&&_0(l,r,null),o)for(const fe in o){const le=o[fe];se(le)&&(r[fe]=le.bind(n))}if(s){const fe=s.call(n,n);Ce(fe)&&(t.data=Zn(fe))}if(Rl=!0,i)for(const fe in i){const le=i[fe],bt=se(le)?le.bind(n,n):se(le.get)?le.get.bind(n,n):Ft,me=!se(le)&&se(le.set)?le.set.bind(n):Ft,Ue=ie({get:bt,set:me});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:Ae=>Ue.value=Ae})}if(a)for(const fe in a)mm(a[fe],r,n,fe);if(c){const fe=se(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(le=>{ss(le,fe[le])})}u&&$f(u,t,"c");function oe(fe,le){X(le)?le.forEach(bt=>fe(bt.bind(n))):le&&fe(le.bind(n))}if(oe(dm,h),oe(ji,f),oe(c0,d),oe(l0,p),oe(i0,v),oe(o0,_),oe(d0,$),oe(f0,L),oe(h0,te),oe(pm,P),oe(gm,O),oe(u0,q),X(_e))if(_e.length){const fe=t.exposed||(t.exposed={});_e.forEach(le=>{Object.defineProperty(fe,le,{get:()=>n[le],set:bt=>n[le]=bt})})}else t.exposed||(t.exposed={});B&&t.render===Ft&&(t.render=B),Oe!=null&&(t.inheritAttrs=Oe),Fe&&(t.components=Fe),Xe&&(t.directives=Xe)}function _0(t,e,n=Ft){X(t)&&(t=bl(t));for(const r in t){const s=t[r];let i;Ce(s)?"default"in s?i=It(s.from||r,s.default,!0):i=It(s.from||r):i=It(s),xe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function $f(t,e,n){zt(X(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function mm(t,e,n,r){const s=r.includes(".")?um(n,r):()=>n[r];if(ze(t)){const i=e[t];se(i)&&cn(s,i)}else if(se(t))cn(s,t.bind(n));else if(Ce(t))if(X(t))t.forEach(i=>mm(i,e,n,r));else{const i=se(t.handler)?t.handler.bind(n):e[t.handler];se(i)&&cn(s,i,t)}}function Uu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Qo(c,l,o,!0)),Qo(c,e,o)),Ce(e)&&i.set(e,c),c}function Qo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Qo(t,i,n,!0),s&&s.forEach(o=>Qo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=y0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const y0={data:jf,props:Bf,emits:Bf,methods:Hs,computed:Hs,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Hs,directives:Hs,watch:w0,provide:jf,inject:v0};function jf(t,e){return e?t?function(){return st(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function v0(t,e){return Hs(bl(t),bl(e))}function bl(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Hs(t,e){return t?st(Object.create(null),t,e):e}function Bf(t,e){return t?X(t)&&X(e)?[...new Set([...t,...e])]:st(Object.create(null),Uf(t),Uf(e??{})):e}function w0(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function _m(){return{app:null,config:{isNativeTag:nE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let E0=0;function I0(t,e){return function(r,s=null){se(r)||(r=st({},r)),s!=null&&!Ce(s)&&(s=null);const i=_m(),o=new WeakSet;let a=!1;const c=i.app={_uid:E0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:G0,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&se(l.install)?(o.add(l),l.install(c,...u)):se(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=ut(r,s);return f.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,La(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){_i=c;try{return l()}finally{_i=null}}};return c}}let _i=null;function ss(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function It(t,e,n=!1){const r=et||Ot;if(r||_i){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:_i._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&se(e)?e.call(r&&r.proxy):e}}function T0(){return!!(et||Ot||_i)}function A0(t,e,n,r=!1){const s={},i={};Ho(i,Na,1),t.propsDefaults=Object.create(null),ym(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Yg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function R0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ge(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Oa(t.emitsOptions,f))continue;const d=e[f];if(c)if(pe(i,f))d!==i[f]&&(i[f]=d,l=!0);else{const p=us(f);s[p]=Pl(c,a,p,d,t,!1)}else d!==i[f]&&(i[f]=d,l=!0)}}}else{ym(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!pe(e,h)&&((u=Rs(h))===h||!pe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Pl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!pe(e,h))&&(delete i[h],l=!0)}l&&wn(t,"set","$attrs")}function ym(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ko(c))continue;const l=e[c];let u;s&&pe(s,u=us(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Oa(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ge(n),l=a||Re;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Pl(s,c,h,l[h],t,!pe(l,h))}}return o}function Pl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=pe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&se(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(fs(s),r=l[n]=c.call(null,e),wr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Rs(n))&&(r=!0))}return r}function vm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!se(t)){const u=h=>{c=!0;const[f,d]=vm(h,e,!0);st(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ce(t)&&r.set(t,ts),ts;if(X(i))for(let u=0;u<i.length;u++){const h=us(i[u]);qf(h)&&(o[h]=Re)}else if(i)for(const u in i){const h=us(u);if(qf(h)){const f=i[u],d=o[h]=X(f)||se(f)?{type:f}:st({},f);if(d){const p=Wf(Boolean,d.type),v=Wf(String,d.type);d[0]=p>-1,d[1]=v<0||p<v,(p>-1||pe(d,"default"))&&a.push(h)}}}const l=[o,a];return Ce(t)&&r.set(t,l),l}function qf(t){return t[0]!=="$"}function Hf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function zf(t,e){return Hf(t)===Hf(e)}function Wf(t,e){return X(e)?e.findIndex(n=>zf(n,t)):se(e)&&zf(e,t)?0:-1}const wm=t=>t[0]==="_"||t==="$stable",$u=t=>X(t)?t.map(tn):[tn(t)],b0=(t,e,n)=>{if(e._n)return e;const r=GE((...s)=>$u(e(...s)),n);return r._c=!1,r},Em=(t,e,n)=>{const r=t._ctx;for(const s in t){if(wm(s))continue;const i=t[s];if(se(i))e[s]=b0(s,i,r);else if(i!=null){const o=$u(i);e[s]=()=>o}}},Im=(t,e)=>{const n=$u(e);t.slots.default=()=>n},P0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ge(e),Ho(e,"_",n)):Em(e,t.slots={})}else t.slots={},e&&Im(t,e);Ho(t.slots,Na,1)},S0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(st(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Em(e,s)),o=e}else e&&(Im(t,e),o={default:1});if(i)for(const a in s)!wm(a)&&o[a]==null&&delete s[a]};function Sl(t,e,n,r,s=!1){if(X(t)){t.forEach((f,d)=>Sl(f,e&&(X(e)?e[d]:e),n,r,s));return}if(Do(r)&&!s)return;const i=r.shapeFlag&4?La(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ze(l)?(u[l]=null,pe(h,l)&&(h[l]=null)):xe(l)&&(l.value=null)),se(c))qn(c,a,12,[o,u]);else{const f=ze(c),d=xe(c);if(f||d){const p=()=>{if(t.f){const v=f?pe(h,c)?h[c]:u[c]:c.value;s?X(v)&&Ru(v,i):X(v)?v.includes(i)||v.push(i):f?(u[c]=[i],pe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,pe(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,wt(p,n)):p()}}}const wt=t0;function C0(t){return k0(t)}function k0(t,e){const n=Ng();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Ft,insertStaticContent:p}=t,v=(g,m,y,E=null,T=null,R=null,N=void 0,C=null,x=!!m.dynamicChildren)=>{if(g===m)return;g&&!Vs(g,m)&&(E=I(g),Ae(g,T,R,!0),g=null),m.patchFlag===-2&&(x=!1,m.dynamicChildren=null);const{type:S,ref:F,shapeFlag:K}=m;switch(S){case xa:_(g,m,y,E);break;case Rr:w(g,m,y,E);break;case xo:g==null&&P(m,y,E,N);break;case qt:Fe(g,m,y,E,T,R,N,C,x);break;default:K&1?B(g,m,y,E,T,R,N,C,x):K&6?Xe(g,m,y,E,T,R,N,C,x):(K&64||K&128)&&S.process(g,m,y,E,T,R,N,C,x,D)}F!=null&&T&&Sl(F,g&&g.ref,R,m||g,!m)},_=(g,m,y,E)=>{if(g==null)r(m.el=a(m.children),y,E);else{const T=m.el=g.el;m.children!==g.children&&l(T,m.children)}},w=(g,m,y,E)=>{g==null?r(m.el=c(m.children||""),y,E):m.el=g.el},P=(g,m,y,E)=>{[g.el,g.anchor]=p(g.children,m,y,E,g.el,g.anchor)},k=({el:g,anchor:m},y,E)=>{let T;for(;g&&g!==m;)T=f(g),r(g,y,E),g=T;r(m,y,E)},O=({el:g,anchor:m})=>{let y;for(;g&&g!==m;)y=f(g),s(g),g=y;s(m)},B=(g,m,y,E,T,R,N,C,x)=>{m.type==="svg"?N="svg":m.type==="math"&&(N="mathml"),g==null?L(m,y,E,T,R,N,C,x):q(g,m,T,R,N,C,x)},L=(g,m,y,E,T,R,N,C)=>{let x,S;const{props:F,shapeFlag:K,transition:z,dirs:Z}=g;if(x=g.el=o(g.type,R,F&&F.is,F),K&8?u(x,g.children):K&16&&$(g.children,x,null,E,T,xc(g,R),N,C),Z&&cr(g,null,E,"created"),te(x,g,g.scopeId,N,E),F){for(const Ie in F)Ie!=="value"&&!ko(Ie)&&i(x,Ie,null,F[Ie],R,g.children,E,T,$e);"value"in F&&i(x,"value",null,F.value,R),(S=F.onVnodeBeforeMount)&&en(S,E,g)}Z&&cr(g,null,E,"beforeMount");const ae=O0(T,z);ae&&z.beforeEnter(x),r(x,m,y),((S=F&&F.onVnodeMounted)||ae||Z)&&wt(()=>{S&&en(S,E,g),ae&&z.enter(x),Z&&cr(g,null,E,"mounted")},T)},te=(g,m,y,E,T)=>{if(y&&d(g,y),E)for(let R=0;R<E.length;R++)d(g,E[R]);if(T){let R=T.subTree;if(m===R){const N=T.vnode;te(g,N,N.scopeId,N.slotScopeIds,T.parent)}}},$=(g,m,y,E,T,R,N,C,x=0)=>{for(let S=x;S<g.length;S++){const F=g[S]=C?Dn(g[S]):tn(g[S]);v(null,F,m,y,E,T,R,N,C)}},q=(g,m,y,E,T,R,N)=>{const C=m.el=g.el;let{patchFlag:x,dynamicChildren:S,dirs:F}=m;x|=g.patchFlag&16;const K=g.props||Re,z=m.props||Re;let Z;if(y&&lr(y,!1),(Z=z.onVnodeBeforeUpdate)&&en(Z,y,m,g),F&&cr(m,g,y,"beforeUpdate"),y&&lr(y,!0),S?_e(g.dynamicChildren,S,C,y,E,xc(m,T),R):N||le(g,m,C,null,y,E,xc(m,T),R,!1),x>0){if(x&16)Oe(C,m,K,z,y,E,T);else if(x&2&&K.class!==z.class&&i(C,"class",null,z.class,T),x&4&&i(C,"style",K.style,z.style,T),x&8){const ae=m.dynamicProps;for(let Ie=0;Ie<ae.length;Ie++){const Se=ae[Ie],Ke=K[Se],Bt=z[Se];(Bt!==Ke||Se==="value")&&i(C,Se,Ke,Bt,T,g.children,y,E,$e)}}x&1&&g.children!==m.children&&u(C,m.children)}else!N&&S==null&&Oe(C,m,K,z,y,E,T);((Z=z.onVnodeUpdated)||F)&&wt(()=>{Z&&en(Z,y,m,g),F&&cr(m,g,y,"updated")},E)},_e=(g,m,y,E,T,R,N)=>{for(let C=0;C<m.length;C++){const x=g[C],S=m[C],F=x.el&&(x.type===qt||!Vs(x,S)||x.shapeFlag&70)?h(x.el):y;v(x,S,F,null,E,T,R,N,!0)}},Oe=(g,m,y,E,T,R,N)=>{if(y!==E){if(y!==Re)for(const C in y)!ko(C)&&!(C in E)&&i(g,C,y[C],null,N,m.children,T,R,$e);for(const C in E){if(ko(C))continue;const x=E[C],S=y[C];x!==S&&C!=="value"&&i(g,C,S,x,N,m.children,T,R,$e)}"value"in E&&i(g,"value",y.value,E.value,N)}},Fe=(g,m,y,E,T,R,N,C,x)=>{const S=m.el=g?g.el:a(""),F=m.anchor=g?g.anchor:a("");let{patchFlag:K,dynamicChildren:z,slotScopeIds:Z}=m;Z&&(C=C?C.concat(Z):Z),g==null?(r(S,y,E),r(F,y,E),$(m.children,y,F,T,R,N,C,x)):K>0&&K&64&&z&&g.dynamicChildren?(_e(g.dynamicChildren,z,y,T,R,N,C),(m.key!=null||T&&m===T.subTree)&&Tm(g,m,!0)):le(g,m,y,F,T,R,N,C,x)},Xe=(g,m,y,E,T,R,N,C,x)=>{m.slotScopeIds=C,g==null?m.shapeFlag&512?T.ctx.activate(m,y,E,N,x):Vt(m,y,E,T,R,N,x):We(g,m,x)},Vt=(g,m,y,E,T,R,N)=>{const C=g.component=j0(g,E,T);if(hm(g)&&(C.ctx.renderer=D),q0(C),C.asyncDep){if(T&&T.registerDep(C,oe),!g.el){const x=C.subTree=ut(Rr);w(null,x,m,y)}}else oe(C,g,m,y,T,R,N)},We=(g,m,y)=>{const E=m.component=g.component;if(XE(g,m,y))if(E.asyncDep&&!E.asyncResolved){fe(E,m,y);return}else E.next=m,HE(E.update),E.effect.dirty=!0,E.update();else m.el=g.el,E.vnode=m},oe=(g,m,y,E,T,R,N)=>{const C=()=>{if(g.isMounted){let{next:F,bu:K,u:z,parent:Z,vnode:ae}=g;{const qr=Am(g);if(qr){F&&(F.el=ae.el,fe(g,F,N)),qr.asyncDep.then(()=>{g.isUnmounted||C()});return}}let Ie=F,Se;lr(g,!1),F?(F.el=ae.el,fe(g,F,N)):F=ae,K&&Oo(K),(Se=F.props&&F.props.onVnodeBeforeUpdate)&&en(Se,Z,F,ae),lr(g,!0);const Ke=Oc(g),Bt=g.subTree;g.subTree=Ke,v(Bt,Ke,h(Bt.el),I(Bt),g,T,R),F.el=Ke.el,Ie===null&&JE(g,Ke.el),z&&wt(z,T),(Se=F.props&&F.props.onVnodeUpdated)&&wt(()=>en(Se,Z,F,ae),T)}else{let F;const{el:K,props:z}=m,{bm:Z,m:ae,parent:Ie}=g,Se=Do(m);if(lr(g,!1),Z&&Oo(Z),!Se&&(F=z&&z.onVnodeBeforeMount)&&en(F,Ie,m),lr(g,!0),K&&de){const Ke=()=>{g.subTree=Oc(g),de(K,g.subTree,g,T,null)};Se?m.type.__asyncLoader().then(()=>!g.isUnmounted&&Ke()):Ke()}else{const Ke=g.subTree=Oc(g);v(null,Ke,y,E,g,T,R),m.el=Ke.el}if(ae&&wt(ae,T),!Se&&(F=z&&z.onVnodeMounted)){const Ke=m;wt(()=>en(F,Ie,Ke),T)}(m.shapeFlag&256||Ie&&Do(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&g.a&&wt(g.a,T),g.isMounted=!0,m=y=E=null}},x=g.effect=new ku(C,Ft,()=>Fu(S),g.scope),S=g.update=()=>{x.dirty&&x.run()};S.id=g.uid,lr(g,!0),S()},fe=(g,m,y)=>{m.component=g;const E=g.vnode.props;g.vnode=m,g.next=null,R0(g,m.props,E,y),S0(g,m.children,y),Nr(),Lf(g),Vr()},le=(g,m,y,E,T,R,N,C,x=!1)=>{const S=g&&g.children,F=g?g.shapeFlag:0,K=m.children,{patchFlag:z,shapeFlag:Z}=m;if(z>0){if(z&128){me(S,K,y,E,T,R,N,C,x);return}else if(z&256){bt(S,K,y,E,T,R,N,C,x);return}}Z&8?(F&16&&$e(S,T,R),K!==S&&u(y,K)):F&16?Z&16?me(S,K,y,E,T,R,N,C,x):$e(S,T,R,!0):(F&8&&u(y,""),Z&16&&$(K,y,E,T,R,N,C,x))},bt=(g,m,y,E,T,R,N,C,x)=>{g=g||ts,m=m||ts;const S=g.length,F=m.length,K=Math.min(S,F);let z;for(z=0;z<K;z++){const Z=m[z]=x?Dn(m[z]):tn(m[z]);v(g[z],Z,y,null,T,R,N,C,x)}S>F?$e(g,T,R,!0,!1,K):$(m,y,E,T,R,N,C,x,K)},me=(g,m,y,E,T,R,N,C,x)=>{let S=0;const F=m.length;let K=g.length-1,z=F-1;for(;S<=K&&S<=z;){const Z=g[S],ae=m[S]=x?Dn(m[S]):tn(m[S]);if(Vs(Z,ae))v(Z,ae,y,null,T,R,N,C,x);else break;S++}for(;S<=K&&S<=z;){const Z=g[K],ae=m[z]=x?Dn(m[z]):tn(m[z]);if(Vs(Z,ae))v(Z,ae,y,null,T,R,N,C,x);else break;K--,z--}if(S>K){if(S<=z){const Z=z+1,ae=Z<F?m[Z].el:E;for(;S<=z;)v(null,m[S]=x?Dn(m[S]):tn(m[S]),y,ae,T,R,N,C,x),S++}}else if(S>z)for(;S<=K;)Ae(g[S],T,R,!0),S++;else{const Z=S,ae=S,Ie=new Map;for(S=ae;S<=z;S++){const Pt=m[S]=x?Dn(m[S]):tn(m[S]);Pt.key!=null&&Ie.set(Pt.key,S)}let Se,Ke=0;const Bt=z-ae+1;let qr=!1,Rf=0;const Ns=new Array(Bt);for(S=0;S<Bt;S++)Ns[S]=0;for(S=Z;S<=K;S++){const Pt=g[S];if(Ke>=Bt){Ae(Pt,T,R,!0);continue}let Zt;if(Pt.key!=null)Zt=Ie.get(Pt.key);else for(Se=ae;Se<=z;Se++)if(Ns[Se-ae]===0&&Vs(Pt,m[Se])){Zt=Se;break}Zt===void 0?Ae(Pt,T,R,!0):(Ns[Zt-ae]=S+1,Zt>=Rf?Rf=Zt:qr=!0,v(Pt,m[Zt],y,null,T,R,N,C,x),Ke++)}const bf=qr?D0(Ns):ts;for(Se=bf.length-1,S=Bt-1;S>=0;S--){const Pt=ae+S,Zt=m[Pt],Pf=Pt+1<F?m[Pt+1].el:E;Ns[S]===0?v(null,Zt,y,Pf,T,R,N,C,x):qr&&(Se<0||S!==bf[Se]?Ue(Zt,y,Pf,2):Se--)}}},Ue=(g,m,y,E,T=null)=>{const{el:R,type:N,transition:C,children:x,shapeFlag:S}=g;if(S&6){Ue(g.component.subTree,m,y,E);return}if(S&128){g.suspense.move(m,y,E);return}if(S&64){N.move(g,m,y,D);return}if(N===qt){r(R,m,y);for(let K=0;K<x.length;K++)Ue(x[K],m,y,E);r(g.anchor,m,y);return}if(N===xo){k(g,m,y);return}if(E!==2&&S&1&&C)if(E===0)C.beforeEnter(R),r(R,m,y),wt(()=>C.enter(R),T);else{const{leave:K,delayLeave:z,afterLeave:Z}=C,ae=()=>r(R,m,y),Ie=()=>{K(R,()=>{ae(),Z&&Z()})};z?z(R,ae,Ie):Ie()}else r(R,m,y)},Ae=(g,m,y,E=!1,T=!1)=>{const{type:R,props:N,ref:C,children:x,dynamicChildren:S,shapeFlag:F,patchFlag:K,dirs:z}=g;if(C!=null&&Sl(C,null,y,g,!0),F&256){m.ctx.deactivate(g);return}const Z=F&1&&z,ae=!Do(g);let Ie;if(ae&&(Ie=N&&N.onVnodeBeforeUnmount)&&en(Ie,m,g),F&6)ar(g.component,y,E);else{if(F&128){g.suspense.unmount(y,E);return}Z&&cr(g,null,m,"beforeUnmount"),F&64?g.type.remove(g,m,y,T,D,E):S&&(R!==qt||K>0&&K&64)?$e(S,m,y,!1,!0):(R===qt&&K&384||!T&&F&16)&&$e(x,m,y),E&&Jt(g)}(ae&&(Ie=N&&N.onVnodeUnmounted)||Z)&&wt(()=>{Ie&&en(Ie,m,g),Z&&cr(g,null,m,"unmounted")},y)},Jt=g=>{const{type:m,el:y,anchor:E,transition:T}=g;if(m===qt){pn(y,E);return}if(m===xo){O(g);return}const R=()=>{s(y),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(g.shapeFlag&1&&T&&!T.persisted){const{leave:N,delayLeave:C}=T,x=()=>N(y,R);C?C(g.el,R,x):x()}else R()},pn=(g,m)=>{let y;for(;g!==m;)y=f(g),s(g),g=y;s(m)},ar=(g,m,y)=>{const{bum:E,scope:T,update:R,subTree:N,um:C}=g;E&&Oo(E),T.stop(),R&&(R.active=!1,Ae(N,g,m,y)),C&&wt(C,m),wt(()=>{g.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},$e=(g,m,y,E=!1,T=!1,R=0)=>{for(let N=R;N<g.length;N++)Ae(g[N],m,y,E,T)},I=g=>g.shapeFlag&6?I(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),M=(g,m,y)=>{g==null?m._vnode&&Ae(m._vnode,null,null,!0):v(m._vnode||null,g,m,null,null,null,y),Lf(),im(),m._vnode=g},D={p:v,um:Ae,m:Ue,r:Jt,mt:Vt,mc:$,pc:le,pbc:_e,n:I,o:t};let H,de;return e&&([H,de]=e(D)),{render:M,hydrate:H,createApp:I0(M,H)}}function xc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function lr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function O0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Tm(t,e,n=!1){const r=t.children,s=e.children;if(X(r)&&X(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Dn(s[i]),a.el=o.el),n||Tm(o,a)),a.type===xa&&(a.el=o.el)}}function D0(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Am(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Am(e)}const x0=t=>t.__isTeleport,qt=Symbol.for("v-fgt"),xa=Symbol.for("v-txt"),Rr=Symbol.for("v-cmt"),xo=Symbol.for("v-stc"),ei=[];let Ht=null;function at(t=!1){ei.push(Ht=t?null:[])}function N0(){ei.pop(),Ht=ei[ei.length-1]||null}let yi=1;function Kf(t){yi+=t}function Rm(t){return t.dynamicChildren=yi>0?Ht||ts:null,N0(),yi>0&&Ht&&Ht.push(t),t}function kt(t,e,n,r,s,i){return Rm(ne(t,e,n,r,s,i,!0))}function ju(t,e,n,r,s){return Rm(ut(t,e,n,r,s,!0))}function Cl(t){return t?t.__v_isVNode===!0:!1}function Vs(t,e){return t.type===e.type&&t.key===e.key}const Na="__vInternal",bm=({key:t})=>t??null,No=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||xe(t)||se(t)?{i:Ot,r:t,k:e,f:!!n}:t:null);function ne(t,e=null,n=null,r=0,s=null,i=t===qt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&bm(e),ref:e&&No(e),scopeId:cm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ot};return a?(Bu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ze(n)?8:16),yi>0&&!o&&Ht&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ht.push(c),c}const ut=V0;function V0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ZE)&&(t=Rr),Cl(t)){const a=hs(t,e,!0);return n&&Bu(a,n),yi>0&&!i&&Ht&&(a.shapeFlag&6?Ht[Ht.indexOf(t)]=a:Ht.push(a)),a.patchFlag|=-2,a}if(K0(t)&&(t=t.__vccOpts),e){e=L0(e);let{class:a,style:c}=e;a&&!ze(a)&&(e.class=Su(a)),Ce(c)&&(Jg(c)&&!X(c)&&(c=st({},c)),e.style=Pu(c))}const o=ze(t)?1:e0(t)?128:x0(t)?64:Ce(t)?4:se(t)?2:0;return ne(t,e,n,r,s,o,i,!0)}function L0(t){return t?Jg(t)||Na in t?st({},t):t:null}function hs(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?F0(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&bm(a),ref:e&&e.ref?n&&s?X(s)?s.concat(No(e)):[s,No(e)]:No(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hs(t.ssContent),ssFallback:t.ssFallback&&hs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Yo(t=" ",e=0){return ut(xa,null,t,e)}function M0(t,e){const n=ut(xo,null,t);return n.staticCount=e,n}function vi(t="",e=!1){return e?(at(),ju(Rr,null,t)):ut(Rr,null,t)}function tn(t){return t==null||typeof t=="boolean"?ut(Rr):X(t)?ut(qt,null,t.slice()):typeof t=="object"?Dn(t):ut(xa,null,String(t))}function Dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hs(t)}function Bu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Bu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Na in e)?e._ctx=Ot:s===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:Ot},n=32):(e=String(e),r&64?(n=16,e=[Yo(e)]):n=8);t.children=e,t.shapeFlag|=n}function F0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Su([e.class,r.class]));else if(s==="style")e.style=Pu([e.style,r.style]);else if(Ra(s)){const i=e[s],o=r[s];o&&i!==o&&!(X(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function en(t,e,n,r=null){zt(t,e,7,[n,r])}const U0=_m();let $0=0;function j0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||U0,i={uid:$0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vm(r,s),emitsOptions:am(r,s),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=KE.bind(null,i),t.ce&&t.ce(i),i}let et=null;const B0=()=>et||Ot;let qu,kl;{const t=Ng(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};qu=e("__VUE_INSTANCE_SETTERS__",n=>et=n),kl=e("__VUE_SSR_SETTERS__",n=>Va=n)}const fs=t=>{qu(t),t.scope.on()},wr=()=>{et&&et.scope.off(),qu(null)};function Pm(t){return t.vnode.shapeFlag&4}let Va=!1;function q0(t,e=!1){e&&kl(e);const{props:n,children:r}=t.vnode,s=Pm(t);A0(t,n,s,e),P0(t,r);const i=s?H0(t,e):void 0;return e&&kl(!1),i}function H0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ca(new Proxy(t.ctx,g0));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?W0(t):null;fs(t),Nr();const i=qn(r,t,0,[t.props,s]);if(Vr(),wr(),kg(i)){if(i.then(wr,wr),e)return i.then(o=>{Gf(t,o,e)}).catch(o=>{ka(o,t,0)});t.asyncDep=i}else Gf(t,i,e)}else Sm(t,e)}function Gf(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=nm(e)),Sm(t,n)}let Qf;function Sm(t,e,n){const r=t.type;if(!t.render){if(!e&&Qf&&!r.render){const s=r.template||Uu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=st(st({isCustomElement:i,delimiters:a},o),c);r.render=Qf(s,l)}}t.render=r.render||Ft}{fs(t),Nr();try{m0(t)}finally{Vr(),wr()}}}function z0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Rt(t,"get","$attrs"),e[n]}}))}function W0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return z0(t)},slots:t.slots,emit:t.emit,expose:e}}function La(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(nm(Ca(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zs)return Zs[n](t)},has(e,n){return n in e||n in Zs}}))}function K0(t){return se(t)&&"__vccOpts"in t}const ie=(t,e)=>VE(t,e,Va);function Cm(t,e,n){const r=arguments.length;return r===2?Ce(e)&&!X(e)?Cl(e)?ut(t,null,[e]):ut(t,e):ut(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Cl(n)&&(n=[n]),ut(t,e,n))}const G0="3.4.5",Q0="http://www.w3.org/2000/svg",Y0="http://www.w3.org/1998/Math/MathML",xn=typeof document<"u"?document:null,Yf=xn&&xn.createElement("template"),X0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?xn.createElementNS(Q0,t):e==="mathml"?xn.createElementNS(Y0,t):xn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>xn.createTextNode(t),createComment:t=>xn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Yf.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Yf.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},J0=Symbol("_vtc");function Z0(t,e,n){const r=t[J0];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const eI=Symbol("_vod"),tI=Symbol("");function nI(t,e,n){const r=t.style,s=ze(n);if(n&&!s){if(e&&!ze(e))for(const i in e)n[i]==null&&Ol(r,i,"");for(const i in n)Ol(r,i,n[i])}else{const i=r.display;if(s){if(e!==n){const o=r[tI];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");eI in t&&(r.display=i)}}const Xf=/\s*!important$/;function Ol(t,e,n){if(X(n))n.forEach(r=>Ol(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=rI(t,e);Xf.test(n)?t.setProperty(Rs(r),n.replace(Xf,""),"important"):t[r]=n}}const Jf=["Webkit","Moz","ms"],Nc={};function rI(t,e){const n=Nc[e];if(n)return n;let r=us(e);if(r!=="filter"&&r in t)return Nc[e]=r;r=xg(r);for(let s=0;s<Jf.length;s++){const i=Jf[s]+r;if(i in t)return Nc[e]=i}return e}const Zf="http://www.w3.org/1999/xlink";function sI(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Zf,e.slice(6,e.length)):t.setAttributeNS(Zf,e,n);else{const i=fE(e);n==null||i&&!Vg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function iI(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Vg(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Gr(t,e,n,r){t.addEventListener(e,n,r)}function oI(t,e,n,r){t.removeEventListener(e,n,r)}const ed=Symbol("_vei");function aI(t,e,n,r,s=null){const i=t[ed]||(t[ed]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=cI(e);if(r){const l=i[e]=hI(r,s);Gr(t,a,l,c)}else o&&(oI(t,a,o,c),i[e]=void 0)}}const td=/(?:Once|Passive|Capture)$/;function cI(t){let e;if(td.test(t)){e={};let r;for(;r=t.match(td);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rs(t.slice(2)),e]}let Vc=0;const lI=Promise.resolve(),uI=()=>Vc||(lI.then(()=>Vc=0),Vc=Date.now());function hI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;zt(fI(r,n.value),e,5,[r])};return n.value=t,n.attached=uI(),n}function fI(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const nd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,dI=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?Z0(t,r,l):e==="style"?nI(t,n,r):Ra(e)?Au(e)||aI(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pI(t,e,r,l))?iI(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sI(t,e,r,l))};function pI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&nd(e)&&se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return nd(e)&&ze(n)?!1:e in t}const rd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return X(e)?n=>Oo(e,n):e};function gI(t){t.target.composing=!0}function sd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Lc=Symbol("_assign"),id={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Lc]=rd(s);const i=r||s.props&&s.props.type==="number";Gr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=yl(a)),t[Lc](a)}),n&&Gr(t,"change",()=>{t.value=t.value.trim()}),e||(Gr(t,"compositionstart",gI),Gr(t,"compositionend",sd),Gr(t,"change",sd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Lc]=rd(i),t.composing)return;const o=s||t.type==="number"?yl(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},mI=["ctrl","shift","alt","meta"],_I={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>mI.some(n=>t[`${n}Key`]&&!e.includes(n))},zs=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=_I[e[o]];if(a&&a(s,e))return}return t(s,...i)})},yI=st({patchProp:dI},X0);let od;function vI(){return od||(od=C0(yI))}const wI=(...t)=>{const e=vI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=II(r);if(!s)return;const i=e._component;!se(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,EI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function EI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function II(t){return ze(t)?document.querySelector(t):t}var TI=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let km;const Ma=t=>km=t,Om=Symbol();function Dl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ti;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ti||(ti={}));function AI(){const t=Fg(!0),e=t.run(()=>ve({}));let n=[],r=[];const s=Ca({install(i){Ma(s),s._a=i,i.provide(Om,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!TI?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Dm=()=>{};function ad(t,e,n,r=Dm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Cu()&&pE(s),s}function Hr(t,...e){t.slice().forEach(n=>{n(...e)})}const RI=t=>t();function xl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Dl(s)&&Dl(r)&&t.hasOwnProperty(n)&&!xe(r)&&!En(r)?t[n]=xl(s,r):t[n]=r}return t}const bI=Symbol();function PI(t){return!Dl(t)||!t.hasOwnProperty(bI)}const{assign:On}=Object;function SI(t){return!!(xe(t)&&t.effect)}function CI(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=UE(n.state.value[t]);return On(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Ca(ie(()=>{Ma(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return c=xm(t,l,e,n,r,!0),c}function xm(t,e,n={},r,s,i){let o;const a=On({actions:{}},n),c={deep:!0};let l,u,h=[],f=[],d;const p=r.state.value[t];!i&&!p&&(r.state.value[t]={}),ve({});let v;function _($){let q;l=u=!1,typeof $=="function"?($(r.state.value[t]),q={type:ti.patchFunction,storeId:t,events:d}):(xl(r.state.value[t],$),q={type:ti.patchObject,payload:$,storeId:t,events:d});const _e=v=Symbol();gi().then(()=>{v===_e&&(l=!0)}),u=!0,Hr(h,q,r.state.value[t])}const w=i?function(){const{state:q}=n,_e=q?q():{};this.$patch(Oe=>{On(Oe,_e)})}:Dm;function P(){o.stop(),h=[],f=[],r._s.delete(t)}function k($,q){return function(){Ma(r);const _e=Array.from(arguments),Oe=[],Fe=[];function Xe(oe){Oe.push(oe)}function Vt(oe){Fe.push(oe)}Hr(f,{args:_e,name:$,store:B,after:Xe,onError:Vt});let We;try{We=q.apply(this&&this.$id===t?this:B,_e)}catch(oe){throw Hr(Fe,oe),oe}return We instanceof Promise?We.then(oe=>(Hr(Oe,oe),oe)).catch(oe=>(Hr(Fe,oe),Promise.reject(oe))):(Hr(Oe,We),We)}}const O={_p:r,$id:t,$onAction:ad.bind(null,f),$patch:_,$reset:w,$subscribe($,q={}){const _e=ad(h,$,q.detached,()=>Oe()),Oe=o.run(()=>cn(()=>r.state.value[t],Fe=>{(q.flush==="sync"?u:l)&&$({storeId:t,type:ti.direct,events:d},Fe)},On({},c,q)));return _e},$dispose:P},B=Zn(O);r._s.set(t,B);const te=(r._a&&r._a.runWithContext||RI)(()=>r._e.run(()=>(o=Fg()).run(e)));for(const $ in te){const q=te[$];if(xe(q)&&!SI(q)||En(q))i||(p&&PI(q)&&(xe(q)?q.value=p[$]:xl(q,p[$])),r.state.value[t][$]=q);else if(typeof q=="function"){const _e=k($,q);te[$]=_e,a.actions[$]=q}}return On(B,te),On(ge(B),te),Object.defineProperty(B,"$state",{get:()=>r.state.value[t],set:$=>{_(q=>{On(q,$)})}}),r._p.forEach($=>{On(B,o.run(()=>$({store:B,app:r._a,pinia:r,options:a})))}),p&&i&&n.hydrate&&n.hydrate(B.$state,p),l=!0,u=!0,B}function Hu(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=T0();return a=a||(l?It(Om,null):null),a&&Ma(a),a=km,a._s.has(r)||(i?xm(r,e,s,a):CI(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Qr=typeof window<"u";function kI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function Mc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Wt(s)?s.map(t):t(s)}return n}const ni=()=>{},Wt=Array.isArray,OI=/\/$/,DI=t=>t.replace(OI,"");function Fc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=LI(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function xI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function NI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ds(e.matched[r],n.matched[s])&&Nm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ds(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Nm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!VI(t[n],e[n]))return!1;return!0}function VI(t,e){return Wt(t)?ld(t,e):Wt(e)?ld(e,t):t===e}function ld(t,e){return Wt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function LI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var wi;(function(t){t.pop="pop",t.push="push"})(wi||(wi={}));var ri;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ri||(ri={}));function MI(t){if(!t)if(Qr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),DI(t)}const FI=/^[^#]+#/;function UI(t,e){return t.replace(FI,"#")+e}function $I(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Fa=()=>({left:window.pageXOffset,top:window.pageYOffset});function jI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=$I(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ud(t,e){return(history.state?history.state.position-e:-1)+t}const Nl=new Map;function BI(t,e){Nl.set(t,e)}function qI(t){const e=Nl.get(t);return Nl.delete(t),e}let HI=()=>location.protocol+"//"+location.host;function Vm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),cd(c,"")}return cd(n,t)+r+s}function zI(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=Vm(t,location),p=n.value,v=e.value;let _=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}_=v?f.position-v.position:0}else r(d);s.forEach(w=>{w(n.value,p,{delta:_,type:wi.pop,direction:_?_>0?ri.forward:ri.back:ri.unknown})})};function c(){o=n.value}function l(f){s.push(f);const d=()=>{const p=s.indexOf(f);p>-1&&s.splice(p,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(we({},f.state,{scroll:Fa()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function hd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Fa():null}}function WI(t){const{history:e,location:n}=window,r={value:Vm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:HI()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=we({},e.state,hd(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=we({},s.value,e.state,{forward:c,scroll:Fa()});i(u.current,u,!0);const h=we({},hd(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function KI(t){t=MI(t);const e=WI(t),n=zI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:UI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function GI(t){return typeof t=="string"||t&&typeof t=="object"}function Lm(t){return typeof t=="string"||typeof t=="symbol"}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Mm=Symbol("");var fd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(fd||(fd={}));function ps(t,e){return we(new Error,{type:t,[Mm]:!0},e)}function gn(t,e){return t instanceof Error&&Mm in t&&(e==null||!!(t.type&e))}const dd="[^/]+?",QI={sensitive:!1,strict:!1,start:!0,end:!0},YI=/[.+*?^${}()[\]/\\]/g;function XI(t,e){const n=we({},QI,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(YI,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:v,optional:_,regexp:w}=f;i.push({name:p,repeatable:v,optional:_});const P=w||dd;if(P!==dd){d+=10;try{new RegExp(`(${P})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${p}" (${P}): `+O.message)}}let k=v?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(k=_&&l.length<2?`(?:/${k})`:"/"+k),_&&(k+="?"),s+=k,d+=20,_&&(d+=-8),v&&(d+=-20),P===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=i[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:v,optional:_}=d,w=p in l?l[p]:"";if(Wt(w)&&!v)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const P=Wt(w)?w.join("/"):w;if(!P)if(_)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=P}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function JI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ZI(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=JI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(pd(r))return 1;if(pd(s))return-1}return s.length-r.length}function pd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const eT={type:0,value:""},tT=/[a-zA-Z0-9_]/;function nT(t){if(!t)return[[]];if(t==="/")return[[eT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:tT.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function rT(t,e,n){const r=XI(nT(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function sT(t,e){const n=[],r=new Map;e=_d({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const d=!f,p=iT(u);p.aliasOf=f&&f.record;const v=_d(e,u),_=[p];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of k)_.push(we({},p,{components:f?f.record.components:p.components,path:O,aliasOf:f?f.record:p}))}let w,P;for(const k of _){const{path:O}=k;if(h&&O[0]!=="/"){const B=h.record.path,L=B[B.length-1]==="/"?"":"/";k.path=h.record.path+(O&&L+O)}if(w=rT(k,h,v),f?f.alias.push(w):(P=P||w,P!==w&&P.alias.push(w),d&&u.name&&!md(w)&&o(u.name)),p.children){const B=p.children;for(let L=0;L<B.length;L++)i(B[L],w,f&&f.children[L])}f=f||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&c(w)}return P?()=>{o(P)}:ni}function o(u){if(Lm(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&ZI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Fm(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!md(u)&&r.set(u.record.name,u)}function l(u,h){let f,d={},p,v;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw ps(1,{location:u});v=f.record.name,d=we(gd(h.params,f.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&gd(u.params,f.keys.map(P=>P.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(P=>P.re.test(p)),f&&(d=f.parse(p),v=f.record.name);else{if(f=h.name?r.get(h.name):n.find(P=>P.re.test(h.path)),!f)throw ps(1,{location:u,currentLocation:h});v=f.record.name,d=we({},h.params,u.params),p=f.stringify(d)}const _=[];let w=f;for(;w;)_.unshift(w.record),w=w.parent;return{name:v,path:p,params:d,matched:_,meta:aT(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function gd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function iT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:oT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function oT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function md(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function aT(t){return t.reduce((e,n)=>we(e,n.meta),{})}function _d(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Fm(t,e){return e.children.some(n=>n===t||Fm(t,n))}const Um=/#/g,cT=/&/g,lT=/\//g,uT=/=/g,hT=/\?/g,$m=/\+/g,fT=/%5B/g,dT=/%5D/g,jm=/%5E/g,pT=/%60/g,Bm=/%7B/g,gT=/%7C/g,qm=/%7D/g,mT=/%20/g;function zu(t){return encodeURI(""+t).replace(gT,"|").replace(fT,"[").replace(dT,"]")}function _T(t){return zu(t).replace(Bm,"{").replace(qm,"}").replace(jm,"^")}function Vl(t){return zu(t).replace($m,"%2B").replace(mT,"+").replace(Um,"%23").replace(cT,"%26").replace(pT,"`").replace(Bm,"{").replace(qm,"}").replace(jm,"^")}function yT(t){return Vl(t).replace(uT,"%3D")}function vT(t){return zu(t).replace(Um,"%23").replace(hT,"%3F")}function wT(t){return t==null?"":vT(t).replace(lT,"%2F")}function Xo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ET(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace($m," "),o=i.indexOf("="),a=Xo(o<0?i:i.slice(0,o)),c=o<0?null:Xo(i.slice(o+1));if(a in e){let l=e[a];Wt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function yd(t){let e="";for(let n in t){const r=t[n];if(n=yT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Wt(r)?r.map(i=>i&&Vl(i)):[r&&Vl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function IT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Wt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const TT=Symbol(""),vd=Symbol(""),Ua=Symbol(""),Wu=Symbol(""),Ll=Symbol("");function Ls(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Nn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ps(4,{from:n,to:e})):h instanceof Error?a(h):GI(h)?a(ps(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Uc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(AT(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Nn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=kI(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Nn(f,n,r,i,o)()}))}}return s}function AT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wd(t){const e=It(Ua),n=It(Wu),r=ie(()=>e.resolve(G(t.to))),s=ie(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(ds.bind(null,u));if(f>-1)return f;const d=Ed(c[l-2]);return l>1&&Ed(u)===d&&h[h.length-1].path!==d?h.findIndex(ds.bind(null,c[l-2])):f}),i=ie(()=>s.value>-1&&ST(n.params,r.value.params)),o=ie(()=>s.value>-1&&s.value===n.matched.length-1&&Nm(n.params,r.value.params));function a(c={}){return PT(c)?e[G(t.replace)?"replace":"push"](G(t.to)).catch(ni):Promise.resolve()}return{route:r,href:ie(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const RT=er({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wd,setup(t,{slots:e}){const n=Zn(wd(t)),{options:r}=It(Ua),s=ie(()=>({[Id(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Id(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Cm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),bT=RT;function PT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ST(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Wt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ed(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Id=(t,e,n)=>t??e??n,CT=er({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=It(Ll),s=ie(()=>t.route||r.value),i=It(vd,0),o=ie(()=>{let l=G(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=ie(()=>s.value.matched[o.value]);ss(vd,ie(()=>o.value+1)),ss(TT,a),ss(Ll,s);const c=ve();return cn(()=>[c.value,a.value,t.name],([l,u,h],[f,d,p])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!ds(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Td(n.default,{Component:f,route:l});const d=h.props[u],p=d?d===!0?l.params:typeof d=="function"?d(l):d:null,_=Cm(f,we({},p,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Td(n.default,{Component:_,route:l})||_}}});function Td(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ku=CT;function kT(t){const e=sT(t.routes,t),n=t.parseQuery||ET,r=t.stringifyQuery||yd,s=t.history,i=Ls(),o=Ls(),a=Ls(),c=LE(Cn);let l=Cn;Qr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Mc.bind(null,I=>""+I),h=Mc.bind(null,wT),f=Mc.bind(null,Xo);function d(I,M){let D,H;return Lm(I)?(D=e.getRecordMatcher(I),H=M):H=I,e.addRoute(H,D)}function p(I){const M=e.getRecordMatcher(I);M&&e.removeRoute(M)}function v(){return e.getRoutes().map(I=>I.record)}function _(I){return!!e.getRecordMatcher(I)}function w(I,M){if(M=we({},M||c.value),typeof I=="string"){const y=Fc(n,I,M.path),E=e.resolve({path:y.path},M),T=s.createHref(y.fullPath);return we(y,E,{params:f(E.params),hash:Xo(y.hash),redirectedFrom:void 0,href:T})}let D;if("path"in I)D=we({},I,{path:Fc(n,I.path,M.path).path});else{const y=we({},I.params);for(const E in y)y[E]==null&&delete y[E];D=we({},I,{params:h(y)}),M.params=h(M.params)}const H=e.resolve(D,M),de=I.hash||"";H.params=u(f(H.params));const g=xI(r,we({},I,{hash:_T(de),path:H.path})),m=s.createHref(g);return we({fullPath:g,hash:de,query:r===yd?IT(I.query):I.query||{}},H,{redirectedFrom:void 0,href:m})}function P(I){return typeof I=="string"?Fc(n,I,c.value.path):we({},I)}function k(I,M){if(l!==I)return ps(8,{from:M,to:I})}function O(I){return te(I)}function B(I){return O(we(P(I),{replace:!0}))}function L(I){const M=I.matched[I.matched.length-1];if(M&&M.redirect){const{redirect:D}=M;let H=typeof D=="function"?D(I):D;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=P(H):{path:H},H.params={}),we({query:I.query,hash:I.hash,params:"path"in H?{}:I.params},H)}}function te(I,M){const D=l=w(I),H=c.value,de=I.state,g=I.force,m=I.replace===!0,y=L(D);if(y)return te(we(P(y),{state:typeof y=="object"?we({},de,y.state):de,force:g,replace:m}),M||D);const E=D;E.redirectedFrom=M;let T;return!g&&NI(r,H,D)&&(T=ps(16,{to:E,from:H}),Ue(H,H,!0,!1)),(T?Promise.resolve(T):_e(E,H)).catch(R=>gn(R)?gn(R,2)?R:me(R):le(R,E,H)).then(R=>{if(R){if(gn(R,2))return te(we({replace:m},P(R.to),{state:typeof R.to=="object"?we({},de,R.to.state):de,force:g}),M||E)}else R=Fe(E,H,!0,m,de);return Oe(E,H,R),R})}function $(I,M){const D=k(I,M);return D?Promise.reject(D):Promise.resolve()}function q(I){const M=pn.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(I):I()}function _e(I,M){let D;const[H,de,g]=OT(I,M);D=Uc(H.reverse(),"beforeRouteLeave",I,M);for(const y of H)y.leaveGuards.forEach(E=>{D.push(Nn(E,I,M))});const m=$.bind(null,I,M);return D.push(m),$e(D).then(()=>{D=[];for(const y of i.list())D.push(Nn(y,I,M));return D.push(m),$e(D)}).then(()=>{D=Uc(de,"beforeRouteUpdate",I,M);for(const y of de)y.updateGuards.forEach(E=>{D.push(Nn(E,I,M))});return D.push(m),$e(D)}).then(()=>{D=[];for(const y of g)if(y.beforeEnter)if(Wt(y.beforeEnter))for(const E of y.beforeEnter)D.push(Nn(E,I,M));else D.push(Nn(y.beforeEnter,I,M));return D.push(m),$e(D)}).then(()=>(I.matched.forEach(y=>y.enterCallbacks={}),D=Uc(g,"beforeRouteEnter",I,M),D.push(m),$e(D))).then(()=>{D=[];for(const y of o.list())D.push(Nn(y,I,M));return D.push(m),$e(D)}).catch(y=>gn(y,8)?y:Promise.reject(y))}function Oe(I,M,D){a.list().forEach(H=>q(()=>H(I,M,D)))}function Fe(I,M,D,H,de){const g=k(I,M);if(g)return g;const m=M===Cn,y=Qr?history.state:{};D&&(H||m?s.replace(I.fullPath,we({scroll:m&&y&&y.scroll},de)):s.push(I.fullPath,de)),c.value=I,Ue(I,M,D,m),me()}let Xe;function Vt(){Xe||(Xe=s.listen((I,M,D)=>{if(!ar.listening)return;const H=w(I),de=L(H);if(de){te(we(de,{replace:!0}),H).catch(ni);return}l=H;const g=c.value;Qr&&BI(ud(g.fullPath,D.delta),Fa()),_e(H,g).catch(m=>gn(m,12)?m:gn(m,2)?(te(m.to,H).then(y=>{gn(y,20)&&!D.delta&&D.type===wi.pop&&s.go(-1,!1)}).catch(ni),Promise.reject()):(D.delta&&s.go(-D.delta,!1),le(m,H,g))).then(m=>{m=m||Fe(H,g,!1),m&&(D.delta&&!gn(m,8)?s.go(-D.delta,!1):D.type===wi.pop&&gn(m,20)&&s.go(-1,!1)),Oe(H,g,m)}).catch(ni)}))}let We=Ls(),oe=Ls(),fe;function le(I,M,D){me(I);const H=oe.list();return H.length?H.forEach(de=>de(I,M,D)):console.error(I),Promise.reject(I)}function bt(){return fe&&c.value!==Cn?Promise.resolve():new Promise((I,M)=>{We.add([I,M])})}function me(I){return fe||(fe=!I,Vt(),We.list().forEach(([M,D])=>I?D(I):M()),We.reset()),I}function Ue(I,M,D,H){const{scrollBehavior:de}=t;if(!Qr||!de)return Promise.resolve();const g=!D&&qI(ud(I.fullPath,0))||(H||!D)&&history.state&&history.state.scroll||null;return gi().then(()=>de(I,M,g)).then(m=>m&&jI(m)).catch(m=>le(m,I,M))}const Ae=I=>s.go(I);let Jt;const pn=new Set,ar={currentRoute:c,listening:!0,addRoute:d,removeRoute:p,hasRoute:_,getRoutes:v,resolve:w,options:t,push:O,replace:B,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:oe.add,isReady:bt,install(I){const M=this;I.component("RouterLink",bT),I.component("RouterView",Ku),I.config.globalProperties.$router=M,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>G(c)}),Qr&&!Jt&&c.value===Cn&&(Jt=!0,O(s.location).catch(de=>{}));const D={};for(const de in Cn)Object.defineProperty(D,de,{get:()=>c.value[de],enumerable:!0});I.provide(Ua,M),I.provide(Wu,Yg(D)),I.provide(Ll,c);const H=I.unmount;pn.add(I),I.unmount=function(){pn.delete(I),pn.size<1&&(l=Cn,Xe&&Xe(),Xe=null,c.value=Cn,Jt=!1,fe=!1),H()}}};function $e(I){return I.reduce((M,D)=>M.then(()=>q(D)),Promise.resolve())}return ar}function OT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ds(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ds(l,c))||s.push(c))}return[n,r,s]}function Gu(){return It(Ua)}function Qu(){return It(Wu)}var Ad={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},DT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},zm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):DT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new xT;const f=i<<2|a>>4;if(r.push(f),l!==64){const d=a<<4&240|l>>2;if(r.push(d),h!==64){const p=l<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NT=function(t){const e=Hm(t);return zm.encodeByteArray(e,!0)},Jo=function(t){return NT(t).replace(/\./g,"")},Wm=function(t){try{return zm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=()=>VT().__FIREBASE_DEFAULTS__,MT=()=>{if(typeof process>"u"||typeof Ad>"u")return;const t=Ad.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wm(t[1]);return e&&JSON.parse(e)},Yu=()=>{try{return LT()||MT()||FT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Km=t=>{var e,n;return(n=(e=Yu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gm=t=>{const e=Km(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Qm=()=>{var t;return(t=Yu())===null||t===void 0?void 0:t.config},Ym=t=>{var e;return(e=Yu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Jo(JSON.stringify(n)),Jo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $T(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function Jm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BT(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zm(){try{return typeof indexedDB=="object"}catch{return!1}}function e_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function qT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="FirebaseError";class jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HT,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?zT(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new jt(s,a,r)}}function zT(t,e){return t.replace(WT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const WT=/\{\$([^}]+)}/g;function KT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ei(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Rd(i)&&Rd(o)){if(!Ei(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Rd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function GT(t,e){const n=new QT(t,e);return n.subscribe.bind(n)}class QT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");YT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$c),s.error===void 0&&(s.error=$c),s.complete===void 0&&(s.complete=$c);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $c(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=1e3,JT=2,ZT=4*60*60*1e3,eA=.5;function bd(t,e=XT,n=JT){const r=e*Math.pow(n,t),s=Math.round(eA*r*(Math.random()-.5)*2);return Math.min(ZT,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t){return t&&t._delegate?t._delegate:t}class $t{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new UT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rA(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nA(t){return t===hr?void 0:t}function rA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const iA={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},oA=ue.INFO,aA={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},cA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=aA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $a{constructor(e){this.name=e,this._logLevel=oA,this._logHandler=cA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const lA=(t,e)=>e.some(n=>t instanceof n);let Pd,Sd;function uA(){return Pd||(Pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hA(){return Sd||(Sd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t_=new WeakMap,Ml=new WeakMap,n_=new WeakMap,jc=new WeakMap,Xu=new WeakMap;function fA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Hn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&t_.set(n,t)}).catch(()=>{}),Xu.set(e,t),e}function dA(t){if(Ml.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ml.set(t,e)}let Fl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ml.get(t);if(e==="objectStoreNames")return t.objectStoreNames||n_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pA(t){Fl=t(Fl)}function gA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bc(this),e,...n);return n_.set(r,e.sort?e.sort():[e]),Hn(r)}:hA().includes(t)?function(...e){return t.apply(Bc(this),e),Hn(t_.get(this))}:function(...e){return Hn(t.apply(Bc(this),e))}}function mA(t){return typeof t=="function"?gA(t):(t instanceof IDBTransaction&&dA(t),lA(t,uA())?new Proxy(t,Fl):t)}function Hn(t){if(t instanceof IDBRequest)return fA(t);if(jc.has(t))return jc.get(t);const e=mA(t);return e!==t&&(jc.set(t,e),Xu.set(e,t)),e}const Bc=t=>Xu.get(t);function _A(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Hn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Hn(o.result),c.oldVersion,c.newVersion,Hn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const yA=["get","getKey","getAll","getAllKeys","count"],vA=["put","add","delete","clear"],qc=new Map;function Cd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qc.get(e))return qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=vA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yA.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return qc.set(e,i),i}pA(t=>({...t,get:(e,n,r)=>Cd(e,n)||t.get(e,n,r),has:(e,n)=>!!Cd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(EA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function EA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ul="@firebase/app",kd="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new $a("@firebase/app"),IA="@firebase/app-compat",TA="@firebase/analytics-compat",AA="@firebase/analytics",RA="@firebase/app-check-compat",bA="@firebase/app-check",PA="@firebase/auth",SA="@firebase/auth-compat",CA="@firebase/database",kA="@firebase/database-compat",OA="@firebase/functions",DA="@firebase/functions-compat",xA="@firebase/installations",NA="@firebase/installations-compat",VA="@firebase/messaging",LA="@firebase/messaging-compat",MA="@firebase/performance",FA="@firebase/performance-compat",UA="@firebase/remote-config",$A="@firebase/remote-config-compat",jA="@firebase/storage",BA="@firebase/storage-compat",qA="@firebase/firestore",HA="@firebase/firestore-compat",zA="firebase",WA="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="[DEFAULT]",KA={[Ul]:"fire-core",[IA]:"fire-core-compat",[AA]:"fire-analytics",[TA]:"fire-analytics-compat",[bA]:"fire-app-check",[RA]:"fire-app-check-compat",[PA]:"fire-auth",[SA]:"fire-auth-compat",[CA]:"fire-rtdb",[kA]:"fire-rtdb-compat",[OA]:"fire-fn",[DA]:"fire-fn-compat",[xA]:"fire-iid",[NA]:"fire-iid-compat",[VA]:"fire-fcm",[LA]:"fire-fcm-compat",[MA]:"fire-perf",[FA]:"fire-perf-compat",[UA]:"fire-rc",[$A]:"fire-rc-compat",[jA]:"fire-gcs",[BA]:"fire-gcs-compat",[qA]:"fire-fst",[HA]:"fire-fst-compat","fire-js":"fire-js",[zA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Map,jl=new Map;function GA(t,e){try{t.container.addComponent(e)}catch(n){br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kt(t){const e=t.name;if(jl.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;jl.set(e,t);for(const n of Zo.values())GA(n,t);return!0}function tr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zn=new Lr("app","Firebase",QA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=WA;function r_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$l,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw zn.create("bad-app-name",{appName:String(s)});if(n||(n=Qm()),!n)throw zn.create("no-options");const i=Zo.get(s);if(i){if(Ei(n,i.options)&&Ei(r,i.config))return i;throw zn.create("duplicate-app",{appName:s})}const o=new sA(s);for(const c of jl.values())o.addComponent(c);const a=new YA(n,r,o);return Zo.set(s,a),a}function ja(t=$l){const e=Zo.get(t);if(!e&&t===$l&&Qm())return r_();if(!e)throw zn.create("no-app",{appName:t});return e}function Tt(t,e,n){var r;let s=(r=KA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(a.join(" "));return}Kt(new $t(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA="firebase-heartbeat-database",JA=1,Ii="firebase-heartbeat-store";let Hc=null;function s_(){return Hc||(Hc=_A(XA,JA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ii)}}}).catch(t=>{throw zn.create("idb-open",{originalErrorMessage:t.message})})),Hc}async function ZA(t){try{return await(await s_()).transaction(Ii).objectStore(Ii).get(i_(t))}catch(e){if(e instanceof jt)br.warn(e.message);else{const n=zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(n.message)}}}async function Od(t,e){try{const r=(await s_()).transaction(Ii,"readwrite");await r.objectStore(Ii).put(e,i_(t)),await r.done}catch(n){if(n instanceof jt)br.warn(n.message);else{const r=zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});br.warn(r.message)}}}function i_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=1024,tR=30*24*60*60*1e3;class nR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Dd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=tR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dd(),{heartbeatsToSend:r,unsentEntries:s}=rR(this._heartbeatsCache.heartbeats),i=Jo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Dd(){return new Date().toISOString().substring(0,10)}function rR(t,e=eR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),xd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),xd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zm()?e_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ZA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Od(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Od(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function xd(t){return Jo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(t){Kt(new $t("platform-logger",e=>new wA(e),"PRIVATE")),Kt(new $t("heartbeat",e=>new nR(e),"PRIVATE")),Tt(Ul,kd,t),Tt(Ul,kd,"esm2017"),Tt("fire-js","")}iR("");function Ju(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function o_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oR=o_,a_=new Lr("auth","Firebase",o_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=new $a("@firebase/auth");function aR(t,...e){ea.logLevel<=ue.WARN&&ea.warn(`Auth (${Mr}): ${t}`,...e)}function Vo(t,...e){ea.logLevel<=ue.ERROR&&ea.error(`Auth (${Mr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,...e){throw Zu(t,...e)}function ln(t,...e){return Zu(t,...e)}function cR(t,e,n){const r=Object.assign(Object.assign({},oR()),{[e]:n});return new Lr("auth","Firebase",r).create(e,{appName:t.name})}function Zu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return a_.create(t,...e)}function Q(t,e,...n){if(!t)throw Zu(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vo(e),new Error(e)}function Tn(t,e){t||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lR(){return Nd()==="http:"||Nd()==="https:"}function Nd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lR()||Jm()||"connection"in navigator)?navigator.onLine:!0}function hR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=$T()||jT()}get(){return uR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=new qi(3e4,6e4);function Fr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,r,s={}){return l_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Bi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),c_.fetch()(u_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function l_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fR),e);try{const s=new gR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw mo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw cR(t,u,l);Gt(t,u)}}catch(s){if(s instanceof jt)throw s;Gt(t,"network-request-failed",{message:String(s)})}}async function Ba(t,e,n,r,s={}){const i=await nr(t,e,n,r,s);return"mfaPendingCredential"in i&&Gt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function u_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?eh(t.config,s):`${t.config.apiScheme}://${s}`}function pR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),dR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}function Vd(t){return t!==void 0&&t.enterprise!==void 0}class mR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _R(t,e){return nr(t,"GET","/v2/recaptchaConfig",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yR(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function vR(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wR(t,e=!1){const n=ke(t),r=await n.getIdToken(e),s=th(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:si(zc(s.auth_time)),issuedAtTime:si(zc(s.iat)),expirationTime:si(zc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zc(t){return Number(t)*1e3}function th(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Wm(n);return s?JSON.parse(s):(Vo("Failed to decode base64 JWT payload"),null)}catch(s){return Vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ER(t){const e=th(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jt&&IR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ti(t,vR(n,{idToken:r}));Q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bR(i.providerUserInfo):[],a=RR(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new h_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function AR(t){const e=ke(t);await ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function bR(t){return t.map(e=>{var{providerId:n}=e,r=Ju(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(t,e){const n=await l_(t,{},async()=>{const r=Bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=u_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",c_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SR(t,e){return nr(t,"POST","/v2/accounts:revokeToken",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ER(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await PR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ai;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ai,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Er{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ju(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new h_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ti(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wR(this,e)}reload(){return AR(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ta(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ti(this,yR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:O,isAnonymous:B,providerData:L,stsTokenManager:te}=n;Q(k&&te,e,"internal-error");const $=Ai.fromJSON(this.name,te);Q(typeof k=="string",e,"internal-error"),kn(h,e.name),kn(f,e.name),Q(typeof O=="boolean",e,"internal-error"),Q(typeof B=="boolean",e,"internal-error"),kn(d,e.name),kn(p,e.name),kn(v,e.name),kn(_,e.name),kn(w,e.name),kn(P,e.name);const q=new Er({uid:k,auth:e,email:f,emailVerified:O,displayName:h,isAnonymous:B,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:$,createdAt:w,lastLoginAt:P});return L&&Array.isArray(L)&&(q.providerData=L.map(_e=>Object.assign({},_e))),_&&(q._redirectEventId=_),q}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ai;s.updateFromServerResponse(n);const i=new Er({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ta(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=new Map;function yn(t){Tn(t instanceof Function,"Expected a class definition");let e=Ld.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ld.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}f_.type="NONE";const Md=f_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t,e,n){return`firebase:${t}:${e}:${n}`}class is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Lo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Lo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new is(yn(Md),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||yn(Md);const o=Lo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Er._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new is(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new is(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(g_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(d_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(__(e))return"Blackberry";if(y_(e))return"Webos";if(nh(e))return"Safari";if((e.includes("chrome/")||p_(e))&&!e.includes("edge/"))return"Chrome";if(m_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function d_(t=dt()){return/firefox\//i.test(t)}function nh(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function p_(t=dt()){return/crios\//i.test(t)}function g_(t=dt()){return/iemobile/i.test(t)}function m_(t=dt()){return/android/i.test(t)}function __(t=dt()){return/blackberry/i.test(t)}function y_(t=dt()){return/webos/i.test(t)}function qa(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CR(t=dt()){var e;return qa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kR(){return BT()&&document.documentMode===10}function v_(t=dt()){return qa(t)||m_(t)||y_(t)||__(t)||/windows phone/i.test(t)||g_(t)}function OR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t,e=[]){let n;switch(t){case"Browser":n=Fd(dt());break;case"Worker":n=`${Fd(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xR(t,e={}){return nr(t,"GET","/v2/passwordPolicy",Fr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=6;class VR{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:NR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ud(this),this.idTokenSubscription=new Ud(this),this.beforeStateQueue=new DR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=a_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await is.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ta(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ke(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xR(this),n=new VR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await SR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await is.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=w_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bs(t){return ke(t)}class Ud{constructor(e){this.auth=e,this.observer=null,this.addObserver=GT(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function E_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",MR().appendChild(r)})}function FR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const UR="https://www.google.com/recaptcha/enterprise.js?render=",$R="recaptcha-enterprise",jR="NO_RECAPTCHA";class BR{constructor(e){this.type=$R,this.auth=bs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{_R(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new mR(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Vd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(jR)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Vd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}E_(UR+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function $d(t,e,n,r=!1){const s=new BR(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function jd(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await $d(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $d(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(t,e){const n=tr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ei(i,e??{}))return s;Gt(s,"already-initialized")}return n.initialize({options:e})}function HR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zR(t,e,n){const r=bs(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=I_(e),{host:o,port:a}=WR(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||KR()}function I_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WR(t){const e=I_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Bd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Bd(o)}}}function Bd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function KR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}async function GR(t,e){return nr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(t,e){return Ba(t,"POST","/v1/accounts:signInWithPassword",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(t,e){return Ba(t,"POST","/v1/accounts:signInWithEmailLink",Fr(t,e))}async function XR(t,e){return Ba(t,"POST","/v1/accounts:signInWithEmailLink",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends rh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ri(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ri(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jd(e,n,"signInWithPassword",QR);case"emailLink":return YR(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jd(e,r,"signUpPassword",GR);case"emailLink":return XR(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(t,e){return Ba(t,"POST","/v1/accounts:signInWithIdp",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR="http://localhost";class Pr extends rh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ju(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Pr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return os(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,os(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,os(e,n)}buildRequest(){const e={requestUri:JR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eb(t){const e=Ws(Ks(t)).link,n=e?Ws(Ks(e)).deep_link_id:null,r=Ws(Ks(t)).deep_link_id;return(r?Ws(Ks(r)).link:null)||r||n||e||t}class sh{constructor(e){var n,r,s,i,o,a;const c=Ws(Ks(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=ZR((s=c.mode)!==null&&s!==void 0?s:null);Q(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=eb(e);try{return new sh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(){this.providerId=Ps.PROVIDER_ID}static credential(e,n){return Ri._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sh.parseLink(n);return Q(r,"argument-error"),Ri._fromEmailAndCode(e,r.code,r.tenantId)}}Ps.PROVIDER_ID="password";Ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends T_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Hi{constructor(){super("facebook.com")}static credential(e){return Pr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Hi{constructor(){super("github.com")}static credential(e){return Pr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Hi{constructor(){super("twitter.com")}static credential(e,n){return Pr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Er._fromIdTokenResponse(e,r,s),o=qd(r);return new gs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=qd(r);return new gs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function qd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends jt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,na.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new na(e,n,r,s)}}function A_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(t,i,e,r):i})}async function tb(t,e,n=!1){const r=await Ti(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nb(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ti(t,A_(r,s,e,t),n);Q(i.idToken,r,"internal-error");const o=th(i.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),gs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Gt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(t,e,n=!1){const r="signIn",s=await A_(t,r,e),i=await gs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function rb(t,e){return R_(bs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sb(t){const e=bs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ib(t,e,n){return rb(ke(t),Ps.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sb(t),r})}function ob(t,e,n,r){return ke(t).onIdTokenChanged(e,n,r)}function ab(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}const ra="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ra,"1"),this.storage.removeItem(ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(){const t=dt();return nh(t)||qa(t)}const lb=1e3,ub=10;class P_ extends b_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cb()&&OR(),this.fallbackToPolling=v_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);kR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ub):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}P_.type="LOCAL";const hb=P_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_ extends b_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}S_.type="SESSION";const C_=S_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ha(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await fb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ha.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ih("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function pb(t){un().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function gb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _b(){return k_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="firebaseLocalStorageDb",yb=1,sa="firebaseLocalStorage",D_="fbase_key";class zi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function za(t,e){return t.transaction([sa],e?"readwrite":"readonly").objectStore(sa)}function vb(){const t=indexedDB.deleteDatabase(O_);return new zi(t).toPromise()}function ql(){const t=indexedDB.open(O_,yb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sa,{keyPath:D_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sa)?e(r):(r.close(),await vb(),e(await ql()))})})}async function Hd(t,e,n){const r=za(t,!0).put({[D_]:e,value:n});return new zi(r).toPromise()}async function wb(t,e){const n=za(t,!1).get(e),r=await new zi(n).toPromise();return r===void 0?null:r.value}function zd(t,e){const n=za(t,!0).delete(e);return new zi(n).toPromise()}const Eb=800,Ib=3;class x_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ql(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ib)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return k_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ha._getInstance(_b()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gb(),!this.activeServiceWorker)return;this.sender=new db(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ql();return await Hd(e,ra,"1"),await zd(e,ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=za(s,!1).getAll();return new zi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Eb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}x_.type="LOCAL";const Tb=x_;new qi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(t,e){return e?yn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh extends rh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Rb(t){return R_(t.auth,new oh(t),t.bypassAuthState)}function bb(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),nb(n,new oh(t),t.bypassAuthState)}async function Pb(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),tb(n,new oh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rb;case"linkViaPopup":case"linkViaRedirect":return Pb;case"reauthViaPopup":case"reauthViaRedirect":return bb;default:Gt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=new qi(2e3,1e4);class Zr extends N_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=ih();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Sb.get())};e()}}Zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb="pendingRedirect",Mo=new Map;class kb extends N_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mo.get(this.auth._key());if(!e){try{const r=await Ob(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mo.set(this.auth._key(),e)}return this.bypassAuthState||Mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ob(t,e){const n=Nb(e),r=xb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Db(t,e){Mo.set(t._key(),e)}function xb(t){return yn(t._redirectPersistence)}function Nb(t){return Lo(Cb,t.config.apiKey,t.name)}async function Vb(t,e,n=!1){const r=bs(t),s=Ab(r,e),o=await new kb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=10*60*1e3;class Mb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Fb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!V_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wd(e))}saveEventToCache(e){this.cachedEventUids.add(Wd(e)),this.lastProcessedEventTime=Date.now()}}function Wd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function V_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Fb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return V_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ub(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jb=/^https?/;async function Bb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ub(t);for(const n of e)try{if(qb(n))return}catch{}Gt(t,"unauthorized-domain")}function qb(t){const e=Bl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jb.test(n))return!1;if($b.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=new qi(3e4,6e4);function Kd(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zb(t){return new Promise((e,n)=>{var r,s,i;function o(){Kd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kd(),n(ln(t,"network-request-failed"))},timeout:Hb.get()})}if(!((s=(r=un().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=un().gapi)===null||i===void 0)&&i.load)o();else{const a=FR("iframefcb");return un()[a]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},E_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Fo=null,e})}let Fo=null;function Wb(t){return Fo=Fo||zb(t),Fo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=new qi(5e3,15e3),Gb="__/auth/iframe",Qb="emulator/auth/iframe",Yb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jb(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eh(e,Qb):`https://${t.config.authDomain}/${Gb}`,r={apiKey:e.apiKey,appName:t.name,v:Mr},s=Xb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Bi(r).slice(1)}`}async function Zb(t){const e=await Wb(t),n=un().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:Jb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),a=un().setTimeout(()=>{i(o)},Kb.get());function c(){un().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tP=500,nP=600,rP="_blank",sP="http://localhost";class Gd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iP(t,e,n,r=tP,s=nP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},eP),{width:r.toString(),height:s.toString(),top:i,left:o}),l=dt().toLowerCase();n&&(a=p_(l)?rP:n),d_(l)&&(e=e||sP,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(CR(l)&&a!=="_self")return oP(e||"",a),new Gd(null);const h=window.open(e||"",a,u);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new Gd(h)}function oP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="__/auth/handler",cP="emulator/auth/handler",lP=encodeURIComponent("fac");async function Qd(t,e,n,r,s,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mr,eventId:s};if(e instanceof T_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",KT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Hi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${lP}=${encodeURIComponent(c)}`:"";return`${uP(t)}?${Bi(a).slice(1)}${l}`}function uP({config:t}){return t.emulator?eh(t,cP):`https://${t.authDomain}/${aP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="webStorageSupport";class hP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=C_,this._completeRedirectFn=Vb,this._overrideRedirectResult=Db}async _openPopup(e,n,r,s){var i;Tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Qd(e,n,r,Bl(),s);return iP(e,o,ih())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Qd(e,n,r,Bl(),s);return pb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Zb(e),r=new Mb(e);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wc,{type:Wc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Wc];o!==void 0&&n(!!o),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return v_()||nh()||qa()}}const fP=hP;var Yd="@firebase/auth",Xd="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gP(t){Kt(new $t("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:w_(t)},l=new LR(r,s,i,c);return HR(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kt(new $t("auth-internal",e=>{const n=bs(e.getProvider("auth").getImmediate());return(r=>new dP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(Yd,Xd,pP(t)),Tt(Yd,Xd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=5*60,_P=Ym("authIdTokenMaxAge")||mP;let Jd=null;const yP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_P)return;const s=n==null?void 0:n.token;Jd!==s&&(Jd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ii(t=ja()){const e=tr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qR(t,{popupRedirectResolver:fP,persistence:[Tb,hb,C_]}),r=Ym("authTokenSyncURL");if(r){const i=yP(r);ab(n,i,()=>i(n.currentUser)),ob(n,o=>i(o))}const s=Km("auth");return s&&zR(n,`http://${s}`),n}gP("Browser");var vP="firebase",wP="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt(vP,wP,"app");const EP=(t,e)=>e.some(n=>t instanceof n);let Zd,ep;function IP(){return Zd||(Zd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TP(){return ep||(ep=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const L_=new WeakMap,Hl=new WeakMap,M_=new WeakMap,Kc=new WeakMap,ah=new WeakMap;function AP(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Wn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&L_.set(n,t)}).catch(()=>{}),ah.set(e,t),e}function RP(t){if(Hl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hl.set(t,e)}let zl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||M_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bP(t){zl=t(zl)}function PP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gc(this),e,...n);return M_.set(r,e.sort?e.sort():[e]),Wn(r)}:TP().includes(t)?function(...e){return t.apply(Gc(this),e),Wn(L_.get(this))}:function(...e){return Wn(t.apply(Gc(this),e))}}function SP(t){return typeof t=="function"?PP(t):(t instanceof IDBTransaction&&RP(t),EP(t,IP())?new Proxy(t,zl):t)}function Wn(t){if(t instanceof IDBRequest)return AP(t);if(Kc.has(t))return Kc.get(t);const e=SP(t);return e!==t&&(Kc.set(t,e),ah.set(e,t)),e}const Gc=t=>ah.get(t);function CP(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Wn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Wn(o.result),c.oldVersion,c.newVersion,Wn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const kP=["get","getKey","getAll","getAllKeys","count"],OP=["put","add","delete","clear"],Qc=new Map;function tp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qc.get(e))return Qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=OP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||kP.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Qc.set(e,i),i}bP(t=>({...t,get:(e,n,r)=>tp(e,n)||t.get(e,n,r),has:(e,n)=>!!tp(e,n)||t.has(e,n)}));const F_="@firebase/installations",ch="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=1e4,$_=`w:${ch}`,j_="FIS_v2",DP="https://firebaseinstallations.googleapis.com/v1",xP=60*60*1e3,NP="installations",VP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Sr=new Lr(NP,VP,LP);function B_(t){return t instanceof jt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_({projectId:t}){return`${DP}/projects/${t}/installations`}function H_(t){return{token:t.token,requestStatus:2,expiresIn:FP(t.expiresIn),creationTime:Date.now()}}async function z_(t,e){const r=(await e.json()).error;return Sr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function W_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function MP(t,{refreshToken:e}){const n=W_(t);return n.append("Authorization",UP(e)),n}async function K_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function FP(t){return Number(t.replace("s","000"))}function UP(t){return`${j_} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $P({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=q_(t),s=W_(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:j_,appId:t.appId,sdkVersion:$_},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await K_(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:H_(l.authToken)}}else throw await z_("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP=/^[cdef][\w-]{21}$/,Wl="";function qP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=HP(t);return BP.test(n)?n:Wl}catch{return Wl}}function HP(t){return jP(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=new Map;function Y_(t,e){const n=Wa(t);X_(n,e),zP(n,e)}function X_(t,e){const n=Q_.get(t);if(n)for(const r of n)r(e)}function zP(t,e){const n=WP();n&&n.postMessage({key:t,fid:e}),KP()}let pr=null;function WP(){return!pr&&"BroadcastChannel"in self&&(pr=new BroadcastChannel("[Firebase] FID Change"),pr.onmessage=t=>{X_(t.data.key,t.data.fid)}),pr}function KP(){Q_.size===0&&pr&&(pr.close(),pr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP="firebase-installations-database",QP=1,Cr="firebase-installations-store";let Yc=null;function lh(){return Yc||(Yc=CP(GP,QP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Cr)}}})),Yc}async function ia(t,e){const n=Wa(t),s=(await lh()).transaction(Cr,"readwrite"),i=s.objectStore(Cr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Y_(t,e.fid),e}async function J_(t){const e=Wa(t),r=(await lh()).transaction(Cr,"readwrite");await r.objectStore(Cr).delete(e),await r.done}async function Ka(t,e){const n=Wa(t),s=(await lh()).transaction(Cr,"readwrite"),i=s.objectStore(Cr),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Y_(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uh(t){let e;const n=await Ka(t.appConfig,r=>{const s=YP(r),i=XP(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Wl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function YP(t){const e=t||{fid:qP(),registrationStatus:0};return Z_(e)}function XP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Sr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=JP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ZP(t)}:{installationEntry:e}}async function JP(t,e){try{const n=await $P(t,e);return ia(t.appConfig,n)}catch(n){throw B_(n)&&n.customData.serverCode===409?await J_(t.appConfig):await ia(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function ZP(t){let e=await np(t.appConfig);for(;e.registrationStatus===1;)await G_(100),e=await np(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await uh(t);return r||n}return e}function np(t){return Ka(t,e=>{if(!e)throw Sr.create("installation-not-found");return Z_(e)})}function Z_(t){return eS(t)?{fid:t.fid,registrationStatus:0}:t}function eS(t){return t.registrationStatus===1&&t.registrationTime+U_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tS({appConfig:t,heartbeatServiceProvider:e},n){const r=nS(t,n),s=MP(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:$_,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await K_(()=>fetch(r,a));if(c.ok){const l=await c.json();return H_(l)}else throw await z_("Generate Auth Token",c)}function nS(t,{fid:e}){return`${q_(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hh(t,e=!1){let n;const r=await Ka(t.appConfig,i=>{if(!ey(i))throw Sr.create("not-registered");const o=i.authToken;if(!e&&iS(o))return i;if(o.requestStatus===1)return n=rS(t,e),i;{if(!navigator.onLine)throw Sr.create("app-offline");const a=aS(i);return n=sS(t,a),a}});return n?await n:r.authToken}async function rS(t,e){let n=await rp(t.appConfig);for(;n.authToken.requestStatus===1;)await G_(100),n=await rp(t.appConfig);const r=n.authToken;return r.requestStatus===0?hh(t,e):r}function rp(t){return Ka(t,e=>{if(!ey(e))throw Sr.create("not-registered");const n=e.authToken;return cS(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function sS(t,e){try{const n=await tS(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ia(t.appConfig,r),n}catch(n){if(B_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await J_(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ia(t.appConfig,r)}throw n}}function ey(t){return t!==void 0&&t.registrationStatus===2}function iS(t){return t.requestStatus===2&&!oS(t)}function oS(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+xP}function aS(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function cS(t){return t.requestStatus===1&&t.requestTime+U_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lS(t){const e=t,{installationEntry:n,registrationPromise:r}=await uh(e);return r?r.catch(console.error):hh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(t,e=!1){const n=t;return await hS(n),(await hh(n,e)).token}async function hS(t){const{registrationPromise:e}=await uh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(t){if(!t||!t.options)throw Xc("App Configuration");if(!t.name)throw Xc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Xc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Xc(t){return Sr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="installations",dS="installations-internal",pS=t=>{const e=t.getProvider("app").getImmediate(),n=fS(e),r=tr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},gS=t=>{const e=t.getProvider("app").getImmediate(),n=tr(e,ty).getImmediate();return{getId:()=>lS(n),getToken:s=>uS(n,s)}};function mS(){Kt(new $t(ty,pS,"PUBLIC")),Kt(new $t(dS,gS,"PRIVATE"))}mS();Tt(F_,ch);Tt(F_,ch,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="analytics",_S="firebase_id",yS="origin",vS=60*1e3,wS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",fh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new $a("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},xt=new Lr("analytics","Analytics",ES);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(t){if(!t.startsWith(fh)){const e=xt.create("invalid-gtag-resource",{gtagURL:t});return At.warn(e.message),""}return t}function ny(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function TS(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function AS(t,e){const n=TS("firebase-js-sdk-policy",{createScriptURL:IS}),r=document.createElement("script"),s=`${fh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function RS(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function bS(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await ny(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){At.error(a)}t("config",s,i)}async function PS(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await ny(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){At.error(i)}}function SS(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await PS(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await bS(t,e,n,r,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){At.error(a)}}return s}function CS(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=SS(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function kS(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(fh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=30,DS=1e3;class xS{constructor(e={},n=DS){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ry=new xS;function NS(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function VS(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:NS(r)},i=wS.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw xt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function LS(t,e=ry,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw xt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw xt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new US;return setTimeout(async()=>{a.abort()},n!==void 0?n:vS),sy({appId:r,apiKey:s,measurementId:i},o,a,e)}async function sy(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=ry){var i;const{appId:o,measurementId:a}=t;try{await MS(r,e)}catch(c){if(a)return At.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await VS(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!FS(l)){if(s.deleteThrottleMetadata(o),a)return At.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?bd(n,s.intervalMillis,OS):bd(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),At.debug(`Calling attemptFetch again in ${u} millis`),sy(t,h,r,s)}}function MS(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(xt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function FS(t){if(!(t instanceof jt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class US{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function $S(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(){if(Zm())try{await e_()}catch(t){return At.warn(xt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return At.warn(xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function BS(t,e,n,r,s,i,o){var a;const c=LS(t);c.then(d=>{n[d.measurementId]=d.appId,t.options.measurementId&&d.measurementId!==t.options.measurementId&&At.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>At.error(d)),e.push(c);const l=jS().then(d=>{if(d)return r.getId()}),[u,h]=await Promise.all([c,l]);kS(i)||AS(i,u.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[yS]="firebase",f.update=!0,h!=null&&(f[_S]=h),s("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.app=e}_delete(){return delete oi[this.app.options.appId],Promise.resolve()}}let oi={},sp=[];const ip={};let Jc="dataLayer",HS="gtag",op,iy,ap=!1;function zS(){const t=[];if(Jm()&&t.push("This is a browser extension environment."),qT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=xt.create("invalid-analytics-context",{errorInfo:e});At.warn(n.message)}}function WS(t,e,n){zS();const r=t.options.appId;if(!r)throw xt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)At.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xt.create("no-api-key");if(oi[r]!=null)throw xt.create("already-exists",{id:r});if(!ap){RS(Jc);const{wrappedGtag:i,gtagCore:o}=CS(oi,sp,ip,Jc,HS);iy=i,op=o,ap=!0}return oi[r]=BS(t,sp,ip,e,op,Jc,n),new qS(t)}function KS(t=ja()){t=ke(t);const e=tr(t,oa);return e.isInitialized()?e.getImmediate():GS(t)}function GS(t,e={}){const n=tr(t,oa);if(n.isInitialized()){const s=n.getImmediate();if(Ei(e,n.getOptions()))return s;throw xt.create("already-initialized")}return n.initialize({options:e})}function QS(t,e,n,r){t=ke(t),$S(iy,oi[t.app.options.appId],e,n,r).catch(s=>At.error(s))}const cp="@firebase/analytics",lp="0.10.0";function YS(){Kt(new $t(oa,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return WS(r,s,n)},"PUBLIC")),Kt(new $t("analytics-internal",t,"PRIVATE")),Tt(cp,lp),Tt(cp,lp,"esm2017");function t(e){try{const n=e.getProvider(oa).getImmediate();return{logEvent:(r,s,i)=>QS(n,r,s,i)}}catch(n){throw xt.create("interop-component-reg-failed",{reason:n})}}}YS();var XS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,dh=dh||{},J=XS||self;function Ga(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Wi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function JS(t){return Object.prototype.hasOwnProperty.call(t,Zc)&&t[Zc]||(t[Zc]=++ZS)}var Zc="closure_uid_"+(1e9*Math.random()>>>0),ZS=0;function eC(t,e,n){return t.call.apply(t.bind,arguments)}function tC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ht(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ht=eC:ht=tC,ht.apply(null,arguments)}function _o(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function rr(){this.s=this.s,this.o=this.o}var nC=0;rr.prototype.s=!1;rr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),nC!=0)&&JS(this)};rr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const oy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ph(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function up(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ga(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var rC=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};J.addEventListener("test",n,e),J.removeEventListener("test",n,e)}catch{}return t}();function bi(t){return/^[\s\xa0]*$/.test(t)}function Qa(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function rn(t){return Qa().indexOf(t)!=-1}function gh(t){return gh[" "](t),t}gh[" "]=function(){};function sC(t,e){var n=YC;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var iC=rn("Opera"),ms=rn("Trident")||rn("MSIE"),ay=rn("Edge"),Kl=ay||ms,cy=rn("Gecko")&&!(Qa().toLowerCase().indexOf("webkit")!=-1&&!rn("Edge"))&&!(rn("Trident")||rn("MSIE"))&&!rn("Edge"),oC=Qa().toLowerCase().indexOf("webkit")!=-1&&!rn("Edge");function ly(){var t=J.document;return t?t.documentMode:void 0}var Gl;e:{var el="",tl=function(){var t=Qa();if(cy)return/rv:([^\);]+)(\)|;)/.exec(t);if(ay)return/Edge\/([\d\.]+)/.exec(t);if(ms)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(oC)return/WebKit\/(\S+)/.exec(t);if(iC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(tl&&(el=tl?tl[1]:""),ms){var nl=ly();if(nl!=null&&nl>parseFloat(el)){Gl=String(nl);break e}}Gl=el}var Ql;if(J.document&&ms){var hp=ly();Ql=hp||parseInt(Gl,10)||void 0}else Ql=void 0;var aC=Ql;function Pi(t,e){if(ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(cy){e:{try{gh(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:cC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Pi.$.h.call(this)}}Ye(Pi,ft);var cC={2:"touch",3:"pen",4:"mouse"};Pi.prototype.h=function(){Pi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ki="closure_listenable_"+(1e6*Math.random()|0),lC=0;function uC(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++lC,this.fa=this.ia=!1}function Ya(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function mh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function hC(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function uy(t){const e={};for(const n in t)e[n]=t[n];return e}const fp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hy(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<fp.length;i++)n=fp[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Xa(t){this.src=t,this.g={},this.h=0}Xa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Xl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new uC(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Yl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=oy(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ya(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Xl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var _h="closure_lm_"+(1e6*Math.random()|0),rl={};function fy(t,e,n,r,s){if(r&&r.once)return py(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)fy(t,e[i],n,r,s);return null}return n=wh(n),t&&t[Ki]?t.O(e,n,Wi(r)?!!r.capture:!!r,s):dy(t,e,n,!1,r,s)}function dy(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Wi(s)?!!s.capture:!!s,a=vh(t);if(a||(t[_h]=a=new Xa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=fC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)rC||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(my(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fC(){function t(n){return e.call(t.src,t.listener,n)}const e=dC;return t}function py(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)py(t,e[i],n,r,s);return null}return n=wh(n),t&&t[Ki]?t.P(e,n,Wi(r)?!!r.capture:!!r,s):dy(t,e,n,!0,r,s)}function gy(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)gy(t,e[i],n,r,s);else r=Wi(r)?!!r.capture:!!r,n=wh(n),t&&t[Ki]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Xl(i,n,r,s),-1<n&&(Ya(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=vh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Xl(e,n,r,s)),(n=-1<t?e[t]:null)&&yh(n))}function yh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ki])Yl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(my(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vh(e))?(Yl(n,t),n.h==0&&(n.src=null,e[_h]=null)):Ya(t)}}}function my(t){return t in rl?rl[t]:rl[t]="on"+t}function dC(t,e){if(t.fa)t=!0;else{e=new Pi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&yh(t),t=n.call(r,e)}return t}function vh(t){return t=t[_h],t instanceof Xa?t:null}var sl="__closure_events_fn_"+(1e9*Math.random()>>>0);function wh(t){return typeof t=="function"?t:(t[sl]||(t[sl]=function(e){return t.handleEvent(e)}),t[sl])}function Qe(){rr.call(this),this.i=new Xa(this),this.S=this,this.J=null}Ye(Qe,rr);Qe.prototype[Ki]=!0;Qe.prototype.removeEventListener=function(t,e,n,r){gy(this,t,e,n,r)};function nt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ft(e,t);else if(e instanceof ft)e.target=e.target||t;else{var s=e;e=new ft(r,t),hy(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=yo(o,r,!0,e)&&s}if(o=e.g=t,s=yo(o,r,!0,e)&&s,s=yo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=yo(o,r,!1,e)&&s}Qe.prototype.N=function(){if(Qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ya(n[r]);delete t.g[e],t.h--}}this.J=null};Qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Qe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function yo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Yl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Eh=J.JSON.stringify;class pC{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function gC(){var t=Ih;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class mC{constructor(){this.h=this.g=null}add(e,n){const r=_y.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var _y=new pC(()=>new _C,t=>t.reset());class _C{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yC(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function vC(t){J.setTimeout(()=>{throw t},0)}let Si,Ci=!1,Ih=new mC,yy=()=>{const t=J.Promise.resolve(void 0);Si=()=>{t.then(wC)}};var wC=()=>{for(var t;t=gC();){try{t.h.call(t.g)}catch(n){vC(n)}var e=_y;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ci=!1};function Ja(t,e){Qe.call(this),this.h=t||1,this.g=e||J,this.j=ht(this.qb,this),this.l=Date.now()}Ye(Ja,Qe);V=Ja.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),nt(this,"tick"),this.ga&&(Th(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Th(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){Ja.$.N.call(this),Th(this),delete this.g};function Ah(t,e,n){if(typeof t=="function")n&&(t=ht(t,n));else if(t&&typeof t.handleEvent=="function")t=ht(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function vy(t){t.g=Ah(()=>{t.g=null,t.i&&(t.i=!1,vy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class EC extends rr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:vy(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ki(t){rr.call(this),this.h=t,this.g={}}Ye(ki,rr);var dp=[];function wy(t,e,n,r){Array.isArray(n)||(n&&(dp[0]=n.toString()),n=dp);for(var s=0;s<n.length;s++){var i=fy(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ey(t){mh(t.g,function(e,n){this.g.hasOwnProperty(n)&&yh(e)},t),t.g={}}ki.prototype.N=function(){ki.$.N.call(this),Ey(this)};ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Za(){this.g=!0}Za.prototype.Ea=function(){this.g=!1};function IC(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function TC(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function es(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+RC(t,n)+(r?" "+r:"")})}function AC(t,e){t.info(function(){return"TIMEOUT: "+e})}Za.prototype.info=function(){};function RC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Eh(n)}catch{return e}}var Ur={},pp=null;function ec(){return pp=pp||new Qe}Ur.Ta="serverreachability";function Iy(t){ft.call(this,Ur.Ta,t)}Ye(Iy,ft);function Oi(t){const e=ec();nt(e,new Iy(e))}Ur.STAT_EVENT="statevent";function Ty(t,e){ft.call(this,Ur.STAT_EVENT,t),this.stat=e}Ye(Ty,ft);function _t(t){const e=ec();nt(e,new Ty(e,t))}Ur.Ua="timingevent";function Ay(t,e){ft.call(this,Ur.Ua,t),this.size=e}Ye(Ay,ft);function Gi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var tc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ry={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Rh(){}Rh.prototype.h=null;function gp(t){return t.h||(t.h=t.i())}function by(){}var Qi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function bh(){ft.call(this,"d")}Ye(bh,ft);function Ph(){ft.call(this,"c")}Ye(Ph,ft);var Jl;function nc(){}Ye(nc,Rh);nc.prototype.g=function(){return new XMLHttpRequest};nc.prototype.i=function(){return{}};Jl=new nc;function Yi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ki(this),this.P=bC,t=Kl?125:void 0,this.V=new Ja(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Py}function Py(){this.i=null,this.g="",this.h=!1}var bC=45e3,Sy={},Zl={};V=Yi.prototype;V.setTimeout=function(t){this.P=t};function eu(t,e,n){t.L=1,t.A=sc(An(e)),t.u=n,t.S=!0,Cy(t,null)}function Cy(t,e){t.G=Date.now(),Xi(t),t.B=An(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),My(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Py,t.g=sv(t.l,n?e:null,!t.u),0<t.O&&(t.M=new EC(ht(t.Pa,t,t.g),t.O)),wy(t.U,t.g,"readystatechange",t.nb),e=t.I?uy(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Oi(),IC(t.j,t.v,t.B,t.m,t.W,t.u)}V.nb=function(t){t=t.target;const e=this.M;e&&sn(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const u=sn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Kl||this.g&&(this.h.h||this.g.ja()||vp(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Oi(3):Oi(2)),rc(this);var n=this.g.da();this.ca=n;t:if(ky(this)){var r=vp(this.g);t="";var s=r.length,i=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gr(this),ai(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,TC(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!bi(a)){var l=a;break t}}l=null}if(n=l)es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,tu(this,n);else{this.i=!1,this.s=3,_t(12),gr(this),ai(this);break e}}this.S?(Oy(this,u,o),Kl&&this.i&&u==3&&(wy(this.U,this.V,"tick",this.mb),this.V.start())):(es(this.j,this.m,o,null),tu(this,o)),u==4&&gr(this),this.i&&!this.J&&(u==4?ev(this.l,this):(this.i=!1,Xi(this)))}else KC(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),gr(this),ai(this)}}}catch{}finally{}};function ky(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Oy(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=PC(t,n),s==Zl){e==4&&(t.s=4,_t(14),r=!1),es(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Sy){t.s=4,_t(15),es(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else es(t.j,t.m,s,null),tu(t,s);ky(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,_t(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),xh(e),e.M=!0,_t(11))):(es(t.j,t.m,n,"[Invalid Chunked Response]"),gr(t),ai(t))}V.mb=function(){if(this.g){var t=sn(this.g),e=this.g.ja();this.o<e.length&&(rc(this),Oy(this,t,e),this.i&&t!=4&&Xi(this))}};function PC(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Zl:(n=Number(e.substring(n,r)),isNaN(n)?Sy:(r+=1,r+n>e.length?Zl:(e=e.slice(r,r+n),t.o=r+n,e)))}V.cancel=function(){this.J=!0,gr(this)};function Xi(t){t.Y=Date.now()+t.P,Dy(t,t.P)}function Dy(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Gi(ht(t.lb,t),e)}function rc(t){t.C&&(J.clearTimeout(t.C),t.C=null)}V.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(AC(this.j,this.B),this.L!=2&&(Oi(),_t(17)),gr(this),this.s=2,ai(this)):Dy(this,this.Y-t)};function ai(t){t.l.H==0||t.J||ev(t.l,t)}function gr(t){rc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Th(t.V),Ey(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function tu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||nu(n.i,t))){if(!t.K&&nu(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)la(n),cc(n);else break e;Dh(n),_t(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Gi(ht(n.ib,n),6e3));if(1>=$y(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else mr(n,11)}else if((t.K||n.g==t)&&la(n),!bi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.i;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Sh(i,i.h),i.h=null))}if(r.F){const v=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,be(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=rv(r,r.J?r.pa:null,r.Y),o.K){jy(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(rc(a),Xi(a)),r.g=o}else Jy(r);0<n.j.length&&lc(n)}else l[0]!="stop"&&l[0]!="close"||mr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?mr(n,7):Oh(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Oi(4)}catch{}}function SC(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ga(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function CC(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ga(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function xy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ga(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=CC(t),r=SC(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Ny=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ir(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ir){this.h=t.h,aa(this,t.j),this.s=t.s,this.g=t.g,ca(this,t.m),this.l=t.l;var e=t.i,n=new Di;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),mp(this,n),this.o=t.o}else t&&(e=String(t).match(Ny))?(this.h=!1,aa(this,e[1]||"",!0),this.s=Gs(e[2]||""),this.g=Gs(e[3]||"",!0),ca(this,e[4]),this.l=Gs(e[5]||"",!0),mp(this,e[6]||"",!0),this.o=Gs(e[7]||"")):(this.h=!1,this.i=new Di(null,this.h))}Ir.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qs(e,_p,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Qs(e,_p,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Qs(n,n.charAt(0)=="/"?xC:DC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qs(n,VC)),t.join("")};function An(t){return new Ir(t)}function aa(t,e,n){t.j=n?Gs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ca(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function mp(t,e,n){e instanceof Di?(t.i=e,LC(t.i,t.h)):(n||(e=Qs(e,NC)),t.i=new Di(e,t.h))}function be(t,e,n){t.i.set(e,n)}function sc(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Gs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,OC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function OC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var _p=/[#\/\?@]/g,DC=/[#\?:]/g,xC=/[#\?]/g,NC=/[#\?@]/g,VC=/#/g;function Di(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function sr(t){t.g||(t.g=new Map,t.h=0,t.i&&kC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Di.prototype;V.add=function(t,e){sr(this),this.i=null,t=Ss(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Vy(t,e){sr(t),e=Ss(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ly(t,e){return sr(t),e=Ss(t,e),t.g.has(e)}V.forEach=function(t,e){sr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};V.ta=function(){sr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};V.Z=function(t){sr(this);let e=[];if(typeof t=="string")Ly(this,t)&&(e=e.concat(this.g.get(Ss(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return sr(this),this.i=null,t=Ss(this,t),Ly(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function My(t,e,n){Vy(t,e),0<n.length&&(t.i=null,t.g.set(Ss(t,e),ph(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ss(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function LC(t,e){e&&!t.j&&(sr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Vy(this,r),My(this,s,n))},t)),t.j=e}var MC=class{constructor(t,e){this.g=t,this.map=e}};function Fy(t){this.l=t||FC,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var FC=10;function Uy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function $y(t){return t.h?1:t.g?t.g.size:0}function nu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sh(t,e){t.g?t.g.add(e):t.h=e}function jy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Fy.prototype.cancel=function(){if(this.i=By(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function By(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ph(t.i)}var UC=class{stringify(t){return J.JSON.stringify(t,void 0)}parse(t){return J.JSON.parse(t,void 0)}};function $C(){this.g=new UC}function jC(t,e,n){const r=n||"";try{xy(t,function(s,i){let o=s;Wi(s)&&(o=Eh(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function BC(t,e){const n=new Za;if(J.Image){const r=new Image;r.onload=_o(vo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=_o(vo,n,r,"TestLoadImage: error",!1,e),r.onabort=_o(vo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=_o(vo,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function vo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ic(t){this.l=t.ec||null,this.j=t.ob||!1}Ye(ic,Rh);ic.prototype.g=function(){return new oc(this.l,this.j)};ic.prototype.i=function(t){return function(){return t}}({});function oc(t,e){Qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ch,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(oc,Qe);var Ch=0;V=oc.prototype;V.open=function(t,e){if(this.readyState!=Ch)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xi(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||J).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ji(this)),this.readyState=Ch};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xi(this)),this.g&&(this.readyState=3,xi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qy(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function qy(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ji(this):xi(this),this.readyState==3&&qy(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,Ji(this))};V.Ya=function(t){this.g&&(this.response=t,Ji(this))};V.ka=function(){this.g&&Ji(this)};function Ji(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xi(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function xi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(oc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qC=J.JSON.parse;function Ne(t){Qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Hy,this.L=this.M=!1}Ye(Ne,Qe);var Hy="",HC=/^https?$/i,zC=["POST","PUT"];V=Ne.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Jl.g(),this.C=this.u?gp(this.u):gp(Jl),this.g.onreadystatechange=ht(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){yp(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=J.FormData&&t instanceof J.FormData,!(0<=oy(zC,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ky(this),0<this.B&&((this.L=WC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.ua,this)):this.A=Ah(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){yp(this,i)}};function WC(t){return ms&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof dh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function yp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,zy(t),ac(t)}function zy(t){t.F||(t.F=!0,nt(t,"complete"),nt(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),ac(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ac(this,!0)),Ne.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?Wy(this):this.kb())};V.kb=function(){Wy(this)};function Wy(t){if(t.h&&typeof dh<"u"&&(!t.C[1]||sn(t)!=4||t.da()!=2)){if(t.v&&sn(t)==4)Ah(t.La,0,t);else if(nt(t,"readystatechange"),sn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Ny)[1]||null;!s&&J.self&&J.self.location&&(s=J.self.location.protocol.slice(0,-1)),r=!HC.test(s?s.toLowerCase():"")}n=r}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var i=2<sn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",zy(t)}}finally{ac(t)}}}}function ac(t,e){if(t.g){Ky(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||nt(t,"ready");try{n.onreadystatechange=r}catch{}}}function Ky(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function sn(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qC(e)}};function vp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Hy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function KC(t){const e={};t=(t.g&&2<=sn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(bi(t[r]))continue;var n=yC(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}hC(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Gy(t){let e="";return mh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function kh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Gy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function Ms(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qy(t){this.Ga=0,this.j=[],this.l=new Za,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ms("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ms("baseRetryDelayMs",5e3,t),this.hb=Ms("retryDelaySeedMs",1e4,t),this.eb=Ms("forwardChannelMaxRetries",2,t),this.xa=Ms("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Fy(t&&t.concurrentRequestLimit),this.Ja=new $C,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=Qy.prototype;V.ra=8;V.H=1;function Oh(t){if(Yy(t),t.H==3){var e=t.W++,n=An(t.I);if(be(n,"SID",t.K),be(n,"RID",e),be(n,"TYPE","terminate"),Zi(t,n),e=new Yi(t,t.l,e),e.L=2,e.A=sc(An(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&J.Image&&(new Image().src=e.A,n=!0),n||(e.g=sv(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Xi(e)}nv(t)}function cc(t){t.g&&(xh(t),t.g.cancel(),t.g=null)}function Yy(t){cc(t),t.u&&(J.clearTimeout(t.u),t.u=null),la(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function lc(t){if(!Uy(t.i)&&!t.m){t.m=!0;var e=t.Na;Si||yy(),Ci||(Si(),Ci=!0),Ih.add(e,t),t.C=0}}function GC(t,e){return $y(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Gi(ht(t.Na,t,e),tv(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Yi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=uy(i),hy(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Xy(this,s,e),n=An(this.I),be(n,"RID",t),be(n,"CVER",22),this.F&&be(n,"X-HTTP-Session-Id",this.F),Zi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Gy(i)))+"&"+e:this.o&&kh(n,this.o,i)),Sh(this.i,s),this.bb&&be(n,"TYPE","init"),this.P?(be(n,"$req",e),be(n,"SID","null"),s.aa=!0,eu(s,n,null)):eu(s,n,e),this.H=2}}else this.H==3&&(t?wp(this,t):this.j.length==0||Uy(this.i)||wp(this))};function wp(t,e){var n;e?n=e.m:n=t.W++;const r=An(t.I);be(r,"SID",t.K),be(r,"RID",n),be(r,"AID",t.V),Zi(t,r),t.o&&t.s&&kh(r,t.o,t.s),n=new Yi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Xy(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Sh(t.i,n),eu(n,r,e)}function Zi(t,e){t.na&&mh(t.na,function(n,r){be(e,r,n)}),t.h&&xy({},function(n,r){be(e,r,n)})}function Xy(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ht(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{jC(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Jy(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Si||yy(),Ci||(Si(),Ci=!0),Ih.add(e,t),t.A=0}}function Dh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Gi(ht(t.Ma,t),tv(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,Zy(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Gi(ht(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,_t(10),cc(this),Zy(this))};function xh(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function Zy(t){t.g=new Yi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=An(t.wa);be(e,"RID","rpc"),be(e,"SID",t.K),be(e,"AID",t.V),be(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&be(e,"TO",t.qa),be(e,"TYPE","xmlhttp"),Zi(t,e),t.o&&t.s&&kh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=sc(An(e)),n.u=null,n.S=!0,Cy(n,t)}V.ib=function(){this.v!=null&&(this.v=null,cc(this),Dh(this),_t(19))};function la(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function ev(t,e){var n=null;if(t.g==e){la(t),xh(t),t.g=null;var r=2}else if(nu(t.i,e))n=e.F,jy(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=ec(),nt(r,new Ay(r,n)),lc(t)}else Jy(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&GC(t,e)||r==2&&Dh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:mr(t,5);break;case 4:mr(t,10);break;case 3:mr(t,6);break;default:mr(t,2)}}}function tv(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function mr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ht(t.pb,t);n||(n=new Ir("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||aa(n,"https"),sc(n)),BC(n.toString(),r)}else _t(2);t.H=0,t.h&&t.h.za(e),nv(t),Yy(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),_t(2)):(this.l.info("Failed to ping google.com"),_t(1))};function nv(t){if(t.H=0,t.ma=[],t.h){const e=By(t.i);(e.length!=0||t.j.length!=0)&&(up(t.ma,e),up(t.ma,t.j),t.i.i.length=0,ph(t.j),t.j.length=0),t.h.ya()}}function rv(t,e,n){var r=n instanceof Ir?An(n):new Ir(n);if(r.g!="")e&&(r.g=e+"."+r.g),ca(r,r.m);else{var s=J.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Ir(null);r&&aa(i,r),e&&(i.g=e),s&&ca(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&be(r,n,e),be(r,"VER",t.ra),Zi(t,r),r}function sv(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ne(new ic({ob:n})):new Ne(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function iv(){}V=iv.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function ua(){if(ms&&!(10<=Number(aC)))throw Error("Environmental error: no available transport.")}ua.prototype.g=function(t,e){return new Nt(t,e)};function Nt(t,e){Qe.call(this),this.g=new Qy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!bi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!bi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Cs(this)}Ye(Nt,Qe);Nt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;_t(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=rv(t,null,t.Y),lc(t)};Nt.prototype.close=function(){Oh(this.g)};Nt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Eh(t),t=n);e.j.push(new MC(e.fb++,t)),e.H==3&&lc(e)};Nt.prototype.N=function(){this.g.h=null,delete this.j,Oh(this.g),delete this.g,Nt.$.N.call(this)};function ov(t){bh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(ov,bh);function av(){Ph.call(this),this.status=1}Ye(av,Ph);function Cs(t){this.g=t}Ye(Cs,iv);Cs.prototype.Ba=function(){nt(this.g,"a")};Cs.prototype.Aa=function(t){nt(this.g,new ov(t))};Cs.prototype.za=function(t){nt(this.g,new av)};Cs.prototype.ya=function(){nt(this.g,"b")};function QC(){this.blockSize=-1}function Qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ye(Qt,QC);Qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function il(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)il(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){il(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){il(this,r),s=0;break}}this.h=s,this.i+=e};Qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ee(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var YC={};function Nh(t){return-128<=t&&128>t?sC(t,function(e){return new Ee([e|0],0>e?-1:0)}):new Ee([t|0],0>t?-1:0)}function on(t){if(isNaN(t)||!isFinite(t))return as;if(0>t)return Ze(on(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ru;return new Ee(e,0)}function cv(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(cv(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=on(Math.pow(e,8)),r=as,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=on(Math.pow(e,i)),r=r.R(i).add(on(o))):(r=r.R(n),r=r.add(on(o)))}return r}var ru=4294967296,as=Nh(0),su=Nh(1),Ep=Nh(16777216);V=Ee.prototype;V.ea=function(){if(Mt(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ru+r)*e,e*=ru}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(vn(this))return"0";if(Mt(this))return"-"+Ze(this).toString(t);for(var e=on(Math.pow(t,6)),n=this,r="";;){var s=fa(n,e).g;n=ha(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,vn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function vn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Mt(t){return t.h==-1}V.X=function(t){return t=ha(this,t),Mt(t)?-1:vn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ee(n,~t.h).add(su)}V.abs=function(){return Mt(this)?Ze(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ee(n,n[n.length-1]&-2147483648?-1:0)};function ha(t,e){return t.add(Ze(e))}V.R=function(t){if(vn(this)||vn(t))return as;if(Mt(this))return Mt(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(Mt(t))return Ze(this.R(Ze(t)));if(0>this.X(Ep)&&0>t.X(Ep))return on(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,wo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,wo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,wo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,wo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ee(n,0)};function wo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Fs(t,e){this.g=t,this.h=e}function fa(t,e){if(vn(e))throw Error("division by zero");if(vn(t))return new Fs(as,as);if(Mt(t))return e=fa(Ze(t),e),new Fs(Ze(e.g),Ze(e.h));if(Mt(e))return e=fa(t,Ze(e)),new Fs(Ze(e.g),e.h);if(30<t.g.length){if(Mt(t)||Mt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=su,r=e;0>=r.X(t);)n=Ip(n),r=Ip(r);var s=zr(n,1),i=zr(r,1);for(r=zr(r,2),n=zr(n,2);!vn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=zr(r,1),n=zr(n,1)}return e=ha(t,s.R(e)),new Fs(s,e)}for(s=as;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=on(n),o=i.R(e);Mt(o)||0<o.X(t);)n-=r,i=on(n),o=i.R(e);vn(i)&&(i=su),s=s.add(i),t=ha(t,o)}return new Fs(s,t)}V.gb=function(t){return fa(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ee(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ee(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ee(n,this.h^t.h)};function Ip(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ee(n,t.h)}function zr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ee(s,t.h)}ua.prototype.createWebChannel=ua.prototype.g;Nt.prototype.send=Nt.prototype.u;Nt.prototype.open=Nt.prototype.m;Nt.prototype.close=Nt.prototype.close;tc.NO_ERROR=0;tc.TIMEOUT=8;tc.HTTP_ERROR=6;Ry.COMPLETE="complete";by.EventType=Qi;Qi.OPEN="a";Qi.CLOSE="b";Qi.ERROR="c";Qi.MESSAGE="d";Qe.prototype.listen=Qe.prototype.O;Ne.prototype.listenOnce=Ne.prototype.P;Ne.prototype.getLastError=Ne.prototype.Sa;Ne.prototype.getLastErrorCode=Ne.prototype.Ia;Ne.prototype.getStatus=Ne.prototype.da;Ne.prototype.getResponseJson=Ne.prototype.Wa;Ne.prototype.getResponseText=Ne.prototype.ja;Ne.prototype.send=Ne.prototype.ha;Ne.prototype.setWithCredentials=Ne.prototype.Oa;Qt.prototype.digest=Qt.prototype.l;Qt.prototype.reset=Qt.prototype.reset;Qt.prototype.update=Qt.prototype.j;Ee.prototype.add=Ee.prototype.add;Ee.prototype.multiply=Ee.prototype.R;Ee.prototype.modulo=Ee.prototype.gb;Ee.prototype.compare=Ee.prototype.X;Ee.prototype.toNumber=Ee.prototype.ea;Ee.prototype.toString=Ee.prototype.toString;Ee.prototype.getBits=Ee.prototype.D;Ee.fromNumber=on;Ee.fromString=cv;var XC=function(){return new ua},JC=function(){return ec()},ol=tc,ZC=Ry,e1=Ur,Tp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Eo=by,t1=Ne,n1=Qt,cs=Ee;const Ap="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new $a("@firebase/firestore");function Us(){return kr.logLevel}function j(t,...e){if(kr.logLevel<=ue.DEBUG){const n=e.map(Vh);kr.debug(`Firestore (${ks}): ${t}`,...n)}}function Rn(t,...e){if(kr.logLevel<=ue.ERROR){const n=e.map(Vh);kr.error(`Firestore (${ks}): ${t}`,...n)}}function _s(t,...e){if(kr.logLevel<=ue.WARN){const n=e.map(Vh);kr.warn(`Firestore (${ks}): ${t}`,...n)}}function Vh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: `+t;throw Rn(e),new Error(e)}function Te(t,e){t||Y()}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class r1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class s1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class i1{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new In;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new In,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new In)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new lv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new ot(e)}}class o1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class a1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new o1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class c1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class l1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new c1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=u1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function ys(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new He(0,0))}static max(){return new ee(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ni.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ni?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends Ni{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const h1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Ni{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return h1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Pe.fromString(e))}static fromName(e){return new W(Pe.fromString(e).popFirst(5))}static empty(){return new W(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Pe(e.slice()))}}function f1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Qn(s,W.empty(),e)}function d1(t){return new Qn(t.readTime,t.key,-1)}class Qn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Qn(ee.min(),W.empty(),-1)}static max(){return new Qn(ee.max(),W.empty(),-1)}}function p1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class m1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==g1)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(s=>s?b.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new b((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new b((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function to(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Lh._e=-1;function uc(t){return t==null}function da(t){return t===0&&1/t==-1/0}function _1(t){return typeof t=="number"&&Number.isInteger(t)&&!da(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $r(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Io(this.root,e,this.comparator,!1)}getReverseIterator(){return new Io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Io(this.root,e,this.comparator,!0)}}class Io{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Je.RED,this.left=s??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Je(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bp(this.data.getIterator())}getIteratorFrom(e){return new bp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class bp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new rt(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ys(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fv("Invalid base64 string: "+i):i}}(e);return new pt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const y1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yn(t){if(Te(!!t),typeof t=="string"){let e=0;const n=y1.exec(t);if(Te(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Or(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fh(t){const e=t.mapValue.fields.__previous_value__;return Mh(e)?Fh(e):e}function Vi(t){const e=Yn(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Li{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Li&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mh(t)?4:w1(t)?9007199254740991:10:Y()}function dn(t,e){if(t===e)return!0;const n=Dr(t);if(n!==Dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vi(t).isEqual(Vi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Yn(s.timestampValue),a=Yn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Or(s.bytesValue).isEqual(Or(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Be(s.doubleValue),a=Be(i.doubleValue);return o===a?da(o)===da(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ys(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Rp(o)!==Rp(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!dn(o[c],a[c])))return!1;return!0}(t,e);default:return Y()}}function Mi(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function vs(t,e){if(t===e)return 0;const n=Dr(t),r=Dr(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Be(i.integerValue||i.doubleValue),c=Be(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Pp(t.timestampValue,e.timestampValue);case 4:return Pp(Vi(t),Vi(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Or(i),c=Or(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ye(a[l],c[l]);if(u!==0)return u}return ye(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ye(Be(i.latitude),Be(o.latitude));return a!==0?a:ye(Be(i.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=vs(a[l],c[l]);if(u)return u}return ye(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===To.mapValue&&o===To.mapValue)return 0;if(i===To.mapValue)return 1;if(o===To.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=ye(c[h],u[h]);if(f!==0)return f;const d=vs(a[c[h]],l[u[h]]);if(d!==0)return d}return ye(c.length,u.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Pp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Yn(t),r=Yn(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function ws(t){return iu(t)}function iu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Yn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Or(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=iu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${iu(n.fields[o])}`;return s+"}"}(t.mapValue):Y()}function Sp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ou(t){return!!t&&"integerValue"in t}function Uh(t){return!!t&&"arrayValue"in t}function Cp(t){return!!t&&"nullValue"in t}function kp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uo(t){return!!t&&"mapValue"in t}function ci(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $r(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ci(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ci(t.arrayValue.values[n]);return e}return Object.assign({},t)}function w1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ci(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ci(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Uo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){$r(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Et(ci(this.value))}}function dv(t){const e=[];return $r(t.fields,(n,r)=>{const s=new tt([n]);if(Uo(r)){const i=dv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ct(e,0,ee.min(),ee.min(),ee.min(),Et.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,ee.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,ee.min(),ee.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,ee.min(),ee.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.position=e,this.inclusive=n}}function Op(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=vs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n="asc"){this.field=e,this.dir=n}}function E1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{}class qe extends pv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new T1(e,n,r):n==="array-contains"?new b1(e,r):n==="in"?new P1(e,r):n==="not-in"?new S1(e,r):n==="array-contains-any"?new C1(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new A1(e,r):new R1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vs(n,this.value)):n!==null&&Dr(this.value)===Dr(n)&&this.matchesComparison(vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends pv{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Yt(e,n)}matches(e){return gv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function gv(t){return t.op==="and"}function mv(t){return I1(t)&&gv(t)}function I1(t){for(const e of t.filters)if(e instanceof Yt)return!1;return!0}function au(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+ws(t.value);if(mv(t))return t.filters.map(e=>au(e)).join(",");{const e=t.filters.map(n=>au(n)).join(",");return`${t.op}(${e})`}}function _v(t,e){return t instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&dn(r.value,s.value)}(t,e):t instanceof Yt?function(r,s){return s instanceof Yt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&_v(o,s.filters[a]),!0):!1}(t,e):void Y()}function yv(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${ws(n.value)}`}(t):t instanceof Yt?function(n){return n.op.toString()+" {"+n.getFilters().map(yv).join(" ,")+"}"}(t):"Filter"}class T1 extends qe{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class A1 extends qe{constructor(e,n){super(e,"in",n),this.keys=vv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class R1 extends qe{constructor(e,n){super(e,"not-in",n),this.keys=vv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class b1 extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uh(n)&&Mi(n.arrayValue,this.value)}}class P1 extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mi(this.value.arrayValue,n)}}class S1 extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Mi(this.value.arrayValue,n)}}class C1 extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function xp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new k1(t,e,n,r,s,i,o)}function $h(t){const e=re(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>au(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),uc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ws(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ws(r)).join(",")),e.ce=n}return e.ce}function jh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!E1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_v(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dp(t.startAt,e.startAt)&&Dp(t.endAt,e.endAt)}function cu(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function O1(t,e,n,r,s,i,o,a){return new no(t,e,n,r,s,i,o,a)}function Bh(t){return new no(t)}function Np(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wv(t){return t.collectionGroup!==null}function li(t){const e=re(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new rt(tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new ga(i,r))}),n.has(tt.keyField().canonicalString())||e.le.push(new ga(tt.keyField(),r))}return e.le}function hn(t){const e=re(t);return e.he||(e.he=D1(e,li(t))),e.he}function D1(t,e){if(t.limitType==="F")return xp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ga(s.field,i)});const n=t.endAt?new pa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pa(t.startAt.position,t.startAt.inclusive):null;return xp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function lu(t,e){const n=t.filters.concat([e]);return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function uu(t,e,n){return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hc(t,e){return jh(hn(t),hn(e))&&t.limitType===e.limitType}function Ev(t){return`${$h(hn(t))}|lt:${t.limitType}`}function Yr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>yv(s)).join(", ")}]`),uc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ws(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ws(s)).join(",")),`Target(${r})`}(hn(t))}; limitType=${t.limitType})`}function fc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):W.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of li(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Op(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,li(r),s)||r.endAt&&!function(o,a,c){const l=Op(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,li(r),s))}(t,e)}function x1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Iv(t){return(e,n)=>{let r=!1;for(const s of li(t)){const i=N1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function N1(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?vs(c,l):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){$r(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return hv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1=new De(W.comparator);function bn(){return V1}const Tv=new De(W.comparator);function Ys(...t){let e=Tv;for(const n of t)e=e.insert(n.key,n);return e}function Av(t){let e=Tv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _r(){return ui()}function Rv(){return ui()}function ui(){return new Os(t=>t.toString(),(t,e)=>t.isEqual(e))}const L1=new De(W.comparator),M1=new rt(W.comparator);function ce(...t){let e=M1;for(const n of t)e=e.add(n);return e}const F1=new rt(ye);function U1(){return F1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:da(e)?"-0":e}}function Pv(t){return{integerValue:""+t}}function $1(t,e){return _1(e)?Pv(e):bv(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this._=void 0}}function j1(t,e,n){return t instanceof ma?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Mh(i)&&(i=Fh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Fi?Cv(t,e):t instanceof Ui?kv(t,e):function(s,i){const o=Sv(s,i),a=Vp(o)+Vp(s.Ie);return ou(o)&&ou(s.Ie)?Pv(a):bv(s.serializer,a)}(t,e)}function B1(t,e,n){return t instanceof Fi?Cv(t,e):t instanceof Ui?kv(t,e):n}function Sv(t,e){return t instanceof _a?function(r){return ou(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ma extends dc{}class Fi extends dc{constructor(e){super(),this.elements=e}}function Cv(t,e){const n=Ov(e);for(const r of t.elements)n.some(s=>dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ui extends dc{constructor(e){super(),this.elements=e}}function kv(t,e){let n=Ov(e);for(const r of t.elements)n=n.filter(s=>!dn(s,r));return{arrayValue:{values:n}}}class _a extends dc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Vp(t){return Be(t.integerValue||t.doubleValue)}function Ov(t){return Uh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function q1(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Fi&&s instanceof Fi||r instanceof Ui&&s instanceof Ui?ys(r.elements,s.elements,dn):r instanceof _a&&s instanceof _a?dn(r.Ie,s.Ie):r instanceof ma&&s instanceof ma}(t.transform,e.transform)}class H1{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $o(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pc{}function Dv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qh(t.key,Ut.none()):new ro(t.key,t.data,Ut.none());{const n=t.data,r=Et.empty();let s=new rt(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ir(t.key,r,new Dt(s.toArray()),Ut.none())}}function z1(t,e,n){t instanceof ro?function(s,i,o){const a=s.value.clone(),c=Mp(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ir?function(s,i,o){if(!$o(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Mp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(xv(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function hi(t,e,n,r){return t instanceof ro?function(i,o,a,c){if(!$o(i.precondition,o))return a;const l=i.value.clone(),u=Fp(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ir?function(i,o,a,c){if(!$o(i.precondition,o))return a;const l=Fp(i.fieldTransforms,c,o),u=o.data;return u.setAll(xv(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return $o(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function W1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Sv(r.transform,s||null);i!=null&&(n===null&&(n=Et.empty()),n.set(r.field,i))}return n||null}function Lp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ys(r,s,(i,o)=>q1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ro extends pc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ir extends pc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function xv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Mp(t,e,n){const r=new Map;Te(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,B1(o,a,n[s]))}return r}function Fp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,j1(i,o,e))}return r}class qh extends pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class K1 extends pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&z1(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=hi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=hi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Rv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Dv(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&ys(this.mutations,e.mutations,(n,r)=>Lp(n,r))&&ys(this.baseMutations,e.baseMutations,(n,r)=>Lp(n,r))}}class Hh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length);let s=function(){return L1}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Hh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,he;function X1(t){switch(t){default:return Y();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function Nv(t){if(t===void 0)return Rn("GRPC error has no .code"),A.UNKNOWN;switch(t){case je.OK:return A.OK;case je.CANCELLED:return A.CANCELLED;case je.UNKNOWN:return A.UNKNOWN;case je.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case je.INTERNAL:return A.INTERNAL;case je.UNAVAILABLE:return A.UNAVAILABLE;case je.UNAUTHENTICATED:return A.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case je.NOT_FOUND:return A.NOT_FOUND;case je.ALREADY_EXISTS:return A.ALREADY_EXISTS;case je.PERMISSION_DENIED:return A.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case je.ABORTED:return A.ABORTED;case je.OUT_OF_RANGE:return A.OUT_OF_RANGE;case je.UNIMPLEMENTED:return A.UNIMPLEMENTED;case je.DATA_LOSS:return A.DATA_LOSS;default:return Y()}}(he=je||(je={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=new cs([4294967295,4294967295],0);function Up(t){const e=J1().encode(t),n=new n1;return n.update(e),new Uint8Array(n.digest())}function $p(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new cs([n,r],0),new cs([s,i],0)]}class zh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xs(`Invalid padding: ${n}`);if(r<0)throw new Xs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=cs.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(cs.fromNumber(r)));return s.compare(Z1)===1&&(s=new cs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Up(e),[r,s]=$p(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new zh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Up(e),[r,s]=$p(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,so.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gc(ee.min(),s,new De(ye),bn(),ce())}}class so{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new so(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class Vv{constructor(e,n){this.targetId=e,this.fe=n}}class Lv{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class jp{constructor(){this.ge=0,this.pe=qp(),this.ye=pt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ce(),n=ce(),r=ce();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y()}}),new so(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=qp()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Te(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class ek{constructor(e){this.Le=e,this.ke=new Map,this.qe=bn(),this.Qe=Bp(),this.Ke=new De(ye)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(cu(i))if(r===0){const o=new W(i.path);this.We(n,o,ct.newNoDocument(o,ee.min()))}else Te(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Or(r).toUint8Array()}catch(c){if(c instanceof fv)return _s("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new zh(o,s,i)}catch(c){return _s(c instanceof Xs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&cu(a.target)){const c=new W(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,ct.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=ce();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new gc(e,n,this.Ke,this.qe,r);return this.qe=bn(),this.Qe=Bp(),this.Ke=new De(ye),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new jp,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new rt(ye),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new jp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Bp(){return new De(W.comparator)}function qp(){return new De(W.comparator)}const tk={asc:"ASCENDING",desc:"DESCENDING"},nk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rk={and:"AND",or:"OR"};class sk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hu(t,e){return t.useProto3Json||uc(e)?e:{value:e}}function ya(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ik(t,e){return ya(t,e.toTimestamp())}function fn(t){return Te(!!t),ee.fromTimestamp(function(n){const r=Yn(n);return new He(r.seconds,r.nanos)}(t))}function Wh(t,e){return function(r){return new Pe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Fv(t){const e=Pe.fromString(t);return Te(Bv(e)),e}function fu(t,e){return Wh(t.databaseId,e.path)}function al(t,e){const n=Fv(e);if(n.get(1)!==t.databaseId.projectId)throw new U(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(Uv(n))}function du(t,e){return Wh(t.databaseId,e)}function ok(t){const e=Fv(t);return e.length===4?Pe.emptyPath():Uv(e)}function pu(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Uv(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hp(t,e,n){return{name:fu(t,e),fields:n.value.mapValue.fields}}function ak(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Te(u===void 0||typeof u=="string"),pt.fromBase64String(u||"")):(Te(u===void 0||u instanceof Uint8Array),pt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?A.UNKNOWN:Nv(l.code);return new U(u,l.message||"")}(o);n=new Lv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=al(t,r.document.name),i=fn(r.document.updateTime),o=r.document.createTime?fn(r.document.createTime):ee.min(),a=new Et({mapValue:{fields:r.document.fields}}),c=ct.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new jo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=al(t,r.document),i=r.readTime?fn(r.readTime):ee.min(),o=ct.newNoDocument(s,i),a=r.removedTargetIds||[];n=new jo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=al(t,r.document),i=r.removedTargetIds||[];n=new jo([],i,s,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Y1(s,i),a=r.targetId;n=new Vv(a,o)}}return n}function ck(t,e){let n;if(e instanceof ro)n={update:Hp(t,e.key,e.value)};else if(e instanceof qh)n={delete:fu(t,e.key)};else if(e instanceof ir)n={update:Hp(t,e.key,e.data),updateMask:_k(e.fieldMask)};else{if(!(e instanceof K1))return Y();n={verify:fu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Fi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ui)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof _a)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ik(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function lk(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?fn(s.updateTime):fn(i);return o.isEqual(ee.min())&&(o=fn(i)),new H1(o,s.transformResults||[])}(n,e))):[]}function uk(t,e){return{documents:[du(t,e.path)]}}function hk(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=du(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=du(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return jv(Yt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Xr(h.field),direction:pk(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=hu(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function fk(t){let e=ok(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=$v(h);return f instanceof Yt&&mv(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(p){return new ga(Jr(p.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,uc(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,d=h.values||[];return new pa(d,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,d=h.values||[];return new pa(d,f)}(n.endAt)),O1(e,s,o,i,a,"F",c,l)}function dk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $v(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Jr(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Jr(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jr(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jr(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(Jr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yt.create(n.compositeFilter.filters.map(r=>$v(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function pk(t){return tk[t]}function gk(t){return nk[t]}function mk(t){return rk[t]}function Xr(t){return{fieldPath:t.canonicalString()}}function Jr(t){return tt.fromServerFormat(t.fieldPath)}function jv(t){return t instanceof qe?function(n){if(n.op==="=="){if(kp(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NAN"}};if(Cp(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(kp(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NAN"}};if(Cp(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(n.field),op:gk(n.op),value:n.value}}}(t):t instanceof Yt?function(n){const r=n.getFilters().map(s=>jv(s));return r.length===1?r[0]:{compositeFilter:{op:mk(n.op),filters:r}}}(t):Y()}function _k(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Bv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,r,s,i=ee.min(),o=ee.min(),a=pt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e){this.ut=e}}function vk(t){const e=fk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?uu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(){this.on=new Ek}addToCollectionParentIndex(e,n){return this.on.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Qn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Qn.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Ek{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(Pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Es(0)}static Nn(){return new Es(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(){this.changes=new Os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&hi(r.mutation,s,Dt.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const s=_r();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ys();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=bn();const o=ui(),a=function(){return ui()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof ir)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),hi(u.mutation,l,u.mutation.getFieldMask(),He.now())):o.set(l.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Tk(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ui();let s=new De((o,a)=>o-a),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Dt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ce()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Rv();u.forEach(f=>{if(!i.has(f)){const d=Dv(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):b.resolve(_r());let a=-1,c=i;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ce())).next(u=>({batchId:a,changes:Av(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let s=Ys();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ys();return this.indexManager.getCollectionParents(e,i).next(a=>b.forEach(a,c=>{const l=function(h,f){return new no(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,ct.newInvalidDocument(u)))});let a=Ys();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&hi(u.mutation,l,Dt.empty(),He.now()),fc(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return b.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:fn(s.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:vk(s.bundledQuery),readTime:fn(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(){this.overlays=new De(W.comparator),this.lr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_r();return b.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const s=_r(),i=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return b.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new De((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=_r(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=_r(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return b.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Q1(n,r));let i=this.lr.get(n);i===void 0&&(i=ce(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.hr=new rt(Ge.Pr),this.Ir=new rt(Ge.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Ge(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new W(new Pe([])),r=new Ge(n,e),s=new Ge(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new W(new Pe([])),r=new Ge(n,e),s=new Ge(n,e+1);let i=ce();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ge(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return W.comparator(e.key,n.key)||ye(e.gr,n.gr)}static Tr(e,n){return ye(e.gr,n.gr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new rt(Ge.Pr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new G1(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Ge(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(ye);return n.forEach(s=>{const i=new Ge(s,0),o=new Ge(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),b.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new Ge(new W(i),0);let a=new rt(ye);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),b.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Te(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return b.forEach(n.mutations,s=>{const i=new Ge(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Ge(n,0),s=this.yr.firstAfterOrEqual(r);return b.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.Cr=e,this.docs=function(){return new De(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=bn();const o=n.path,a=new W(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||p1(d1(u),r)<=0||(s.has(u.key)||fc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Y()}vr(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ck(this)}getSize(e){return b.resolve(this.size)}}class Ck extends Ik{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this.persistence=e,this.Fr=new Os(n=>$h(n),jh),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Kh,this.targetCount=0,this.Nr=Es.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),b.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Es(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.kn(n),b.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Lh(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new kk(this),this.indexManager=new wk,this.remoteDocumentCache=function(s){return new Sk(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new yk(n),this.Kr=new Rk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Pk(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const s=new Dk(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return b.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class Dk extends m1{constructor(e){super(),this.currentSequenceNumber=e}}class Gh{constructor(e){this.persistence=e,this.Gr=new Kh,this.zr=null}static jr(e){return new Gh(e)}get Hr(){if(this.zr)return this.zr;throw Y()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),b.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Hr,r=>{const s=W.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,ee.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return b.or([()=>b.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=ce(),s=ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Qh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new xk;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(Us()<=ue.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Yr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),b.resolve()):(Us()<=ue.DEBUG&&j("QueryEngine","Query:",Yr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Us()<=ue.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Yr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hn(n))):b.resolve())}zi(e,n){if(Np(n))return b.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=uu(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ce(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,uu(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,s){return Np(n)||s.isEqual(ee.min())?b.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?b.resolve(null):(Us()<=ue.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yr(n)),this.Xi(e,o,n,f1(s,-1)).next(a=>a))})}Yi(e,n){let r=new rt(Iv(e));return n.forEach((s,i)=>{fc(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return Us()<=ue.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Yr(n)),this.Gi.getDocumentsMatchingQuery(e,n,Qn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new De(ye),this.ns=new Os(i=>$h(i),jh),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ak(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function Lk(t,e,n,r){return new Vk(t,e,n,r)}async function qv(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ce();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function Mk(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let d=b.resolve();return f.forEach(p=>{d=d.next(()=>u.getEntry(c,p)).next(v=>{const _=l.docVersions.get(p);Te(_!==null),v.version.compareTo(_)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ce();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Hv(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function Fk(t,e){const n=re(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(pt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(v,_,w){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(f,d,u)&&a.push(n.qr.updateTargetData(i,d))});let c=bn(),l=ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Uk(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(ee.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=s,i))}function Uk(t,e,n){let r=ce(),s=ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=bn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function $k(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jk(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,b.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function gu(t,e,n){const r=re(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!to(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function zp(t,e,n){const r=re(t);let s=ee.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=re(c),f=h.ns.get(u);return f!==void 0?b.resolve(h.ts.get(f)):h.qr.getTargetData(l,u)}(r,o,hn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:ce())).next(a=>(Bk(r,x1(e),a),{documents:a,ls:i})))}function Bk(t,e,n){let r=t.rs.get(e)||ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class Wp{constructor(){this.activeTargetIds=U1()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qk{constructor(){this.eo=new Wp,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Wp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao=null;function cl(){return Ao===null?Ao=function(){return 268435456+Math.round(2147483648*Math.random())}():Ao++,"0x"+Ao.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class Kk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=cl(),c=this.So(n,r);j("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,i,o),this.Do(n,c,l,s).then(u=>(j("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw _s("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ks}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=zk[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=cl();return new Promise((o,a)=>{const c=new t1;c.setWithCredentials(!0),c.listenOnce(ZC.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ol.NO_ERROR:const u=c.getResponseJson();j(it,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case ol.TIMEOUT:j(it,`RPC '${e}' ${i} timed out`),a(new U(A.DEADLINE_EXCEEDED,"Request time out"));break;case ol.HTTP_ERROR:const h=c.getStatus();if(j(it,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(_){const w=_.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(w)>=0?w:A.UNKNOWN}(d.status);a(new U(p,d.message))}else a(new U(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new U(A.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{j(it,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);j(it,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}vo(e,n,r){const s=cl(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=XC(),a=JC(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");j(it,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,d=!1;const p=new Wk({co:_=>{d?j(it,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(f||(j(it,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),j(it,`RPC '${e}' stream ${s} sending:`,_),h.send(_))},lo:()=>h.close()}),v=(_,w,P)=>{_.listen(w,k=>{try{P(k)}catch(O){setTimeout(()=>{throw O},0)}})};return v(h,Eo.EventType.OPEN,()=>{d||j(it,`RPC '${e}' stream ${s} transport opened.`)}),v(h,Eo.EventType.CLOSE,()=>{d||(d=!0,j(it,`RPC '${e}' stream ${s} transport closed`),p.Ro())}),v(h,Eo.EventType.ERROR,_=>{d||(d=!0,_s(it,`RPC '${e}' stream ${s} transport errored:`,_),p.Ro(new U(A.UNAVAILABLE,"The operation could not be completed")))}),v(h,Eo.EventType.MESSAGE,_=>{var w;if(!d){const P=_.data[0];Te(!!P);const k=P,O=k.error||((w=k[0])===null||w===void 0?void 0:w.error);if(O){j(it,`RPC '${e}' stream ${s} received error:`,O);const B=O.status;let L=function(q){const _e=je[q];if(_e!==void 0)return Nv(_e)}(B),te=O.message;L===void 0&&(L=A.INTERNAL,te="Unknown error status: "+B+" with message "+O.message),d=!0,p.Ro(new U(L,te)),h.close()}else j(it,`RPC '${e}' stream ${s} received:`,P),p.Vo(P)}}),v(a,e1.STAT_EVENT,_=>{_.stat===Tp.PROXY?j(it,`RPC '${e}' stream ${s} detected buffering proxy`):_.stat===Tp.NOPROXY&&j(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{p.Ao()},0),p}}function ll(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t){return new sk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new zv(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new U(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Gk extends Wv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=ak(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?fn(o.readTime):ee.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=pu(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=cu(c)?{documents:uk(i,c)}:{query:hk(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Mv(i,o.resumeToken);const l=hu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=ya(i,o.snapshotVersion.toTimestamp());const l=hu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=dk(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=pu(this.serializer),n.removeTarget=e,this.e_(n)}}class Qk extends Wv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=lk(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.I_(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=pu(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ck(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new U(A.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(A.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(A.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class Xk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Rn(n),this.f_=!1):j("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{jr(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=re(c);l.C_.add(4),await io(l),l.M_.set("Unknown"),l.C_.delete(4),await _c(l)}(this))})}),this.M_=new Xk(r,s)}}async function _c(t){if(jr(t))for(const e of t.v_)await e(!0)}async function io(t){for(const e of t.v_)await e(!1)}function Kv(t,e){const n=re(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Jh(n)?Xh(n):Ds(n).Ho()&&Yh(n,e))}function Gv(t,e){const n=re(t),r=Ds(n);n.D_.delete(e),r.Ho()&&Qv(n,e),n.D_.size===0&&(r.Ho()?r.Zo():jr(n)&&n.M_.set("Unknown"))}function Yh(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ds(t).u_(e)}function Qv(t,e){t.x_.Oe(e),Ds(t).c_(e)}function Xh(t){t.x_=new ek({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ds(t).start(),t.M_.g_()}function Jh(t){return jr(t)&&!Ds(t).jo()&&t.D_.size>0}function jr(t){return re(t).C_.size===0}function Yv(t){t.x_=void 0}async function Zk(t){t.D_.forEach((e,n)=>{Yh(t,e)})}async function eO(t,e){Yv(t),Jh(t)?(t.M_.w_(e),Xh(t)):t.M_.set("Unknown")}async function tO(t,e,n){if(t.M_.set("Online"),e instanceof Lv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await va(t,r)}else if(e instanceof jo?t.x_.$e(e):e instanceof Vv?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(ee.min()))try{const r=await Hv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.D_.get(l);u&&i.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.D_.get(c);if(!u)return;i.D_.set(c,u.withResumeToken(pt.EMPTY_BYTE_STRING,u.snapshotVersion)),Qv(i,c);const h=new jn(u.target,c,l,u.sequenceNumber);Yh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await va(t,r)}}async function va(t,e,n){if(!to(e))throw e;t.C_.add(1),await io(t),t.M_.set("Offline"),n||(n=()=>Hv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await _c(t)})}function Xv(t,e){return e().catch(n=>va(t,n,e))}async function yc(t){const e=re(t),n=Xn(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;nO(e);)try{const s=await $k(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,rO(e,s)}catch(s){await va(e,s)}Jv(e)&&Zv(e)}function nO(t){return jr(t)&&t.b_.length<10}function rO(t,e){t.b_.push(e);const n=Xn(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function Jv(t){return jr(t)&&!Xn(t).jo()&&t.b_.length>0}function Zv(t){Xn(t).start()}async function sO(t){Xn(t).E_()}async function iO(t){const e=Xn(t);for(const n of t.b_)e.P_(n.mutations)}async function oO(t,e,n){const r=t.b_.shift(),s=Hh.from(r,e,n);await Xv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await yc(t)}async function aO(t,e){e&&Xn(t).h_&&await async function(r,s){if(function(o){return X1(o)&&o!==A.ABORTED}(s.code)){const i=r.b_.shift();Xn(r).Yo(),await Xv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await yc(r)}}(t,e),Jv(t)&&Zv(t)}async function Gp(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=jr(n);n.C_.add(3),await io(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await _c(n)}async function cO(t,e){const n=re(t);e?(n.C_.delete(2),await _c(n)):e||(n.C_.add(2),await io(n),n.M_.set("Unknown"))}function Ds(t){return t.O_||(t.O_=function(n,r,s){const i=re(n);return i.A_(),new Gk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:Zk.bind(null,t),Io:eO.bind(null,t),a_:tO.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Jh(t)?Xh(t):t.M_.set("Unknown")):(await t.O_.stop(),Yv(t))})),t.O_}function Xn(t){return t.N_||(t.N_=function(n,r,s){const i=re(n);return i.A_(),new Qk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:sO.bind(null,t),Io:aO.bind(null,t),T_:iO.bind(null,t),I_:oO.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await yc(t)):(await t.N_.stop(),t.b_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Zh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ef(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),to(t))return new U(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Ys(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new ls(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(){this.B_=new De(W.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):Y():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Is{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Is(e,n,ls.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(){this.k_=void 0,this.listeners=[]}}class uO{constructor(){this.queries=new Os(e=>Ev(e),hc),this.onlineState="Unknown",this.q_=new Set}}async function ew(t,e){const n=re(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new lO),s)try{i.k_=await n.onListen(r)}catch(o){const a=ef(o,`Initialization of query '${Yr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&tf(n)}async function tw(t,e){const n=re(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function hO(t,e){const n=re(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&tf(n)}function fO(t,e,n){const r=re(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function tf(t){t.q_.forEach(e=>{e.next()})}class nw{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.key=e}}class sw{constructor(e){this.key=e}}class dO{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ce(),this.mutatedKeys=ce(),this._a=Iv(e),this.aa=new ls(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Qp,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=fc(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),v=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let _=!1;f&&d?f.data.isEqual(d.data)?p!==v&&(r.track({type:3,doc:d}),_=!0):this.ha(f,d)||(r.track({type:2,doc:d}),_=!0,(c&&this._a(d,c)>0||l&&this._a(d,l)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),_=!0):f&&!d&&(r.track({type:1,doc:f}),_=!0,(c||l)&&(a=!0)),_&&(d?(o=o.add(d),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(d,p){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return v(d)-v(p)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],c=this.oa.size===0&&this.current&&!s?1:0,l=c!==this.sa;return this.sa=c,o.length!==0||l?{snapshot:new Is(this.query,e.aa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Qp,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=ce(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new sw(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new rw(r))}),n}da(e){this.ia=e.ls,this.oa=ce();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Is.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class pO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gO{constructor(e){this.key=e,this.Ra=!1}}class mO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Os(a=>Ev(a),hc),this.fa=new Map,this.ga=new Set,this.pa=new De(W.comparator),this.ya=new Map,this.wa=new Kh,this.Sa={},this.ba=new Map,this.Da=Es.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function _O(t,e){const n=PO(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await jk(n.localStore,hn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await yO(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Kv(n.remoteStore,o)}return s}async function yO(t,e,n,r,s){t.va=(h,f,d)=>async function(v,_,w,P){let k=_.view.ca(w);k.Zi&&(k=await zp(v.localStore,_.query,!1).then(({documents:te})=>_.view.ca(te,k)));const O=P&&P.targetChanges.get(_.targetId),B=P&&P.targetMismatches.get(_.targetId)!=null,L=_.view.applyChanges(k,v.isPrimaryClient,O,B);return Xp(v,_.targetId,L.Ta),L.snapshot}(t,h,f,d);const i=await zp(t.localStore,e,!0),o=new dO(e,i.ls),a=o.ca(i.documents),c=so.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Xp(t,n,l.Ta);const u=new pO(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function vO(t,e){const n=re(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!hc(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await gu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Gv(n.remoteStore,r.targetId),mu(n,r.targetId)}).catch(eo)):(mu(n,r.targetId),await gu(n.localStore,r.targetId,!0))}async function wO(t,e,n){const r=SO(t);try{const s=await function(o,a){const c=re(o),l=He.now(),u=a.reduce((d,p)=>d.add(p.key),ce());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=bn(),v=ce();return c.ss.getEntries(d,u).next(_=>{p=_,p.forEach((w,P)=>{P.isValidDocument()||(v=v.add(w))})}).next(()=>c.localDocuments.getOverlayedDocuments(d,p)).next(_=>{h=_;const w=[];for(const P of a){const k=W1(P,h.get(P.key).overlayedDocument);k!=null&&w.push(new ir(P.key,k,dv(k.value.mapValue),Ut.exists(!0)))}return c.mutationQueue.addMutationBatch(d,l,w,a)}).next(_=>{f=_;const w=_.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(d,_.batchId,w)})}).then(()=>({batchId:f.batchId,changes:Av(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new De(ye)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(r,s.batchId,n),await oo(r,s.changes),await yc(r.remoteStore)}catch(s){const i=ef(s,"Failed to persist write");n.reject(i)}}async function iw(t,e){const n=re(t);try{const r=await Fk(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?Te(o.Ra):s.removedDocuments.size>0&&(Te(o.Ra),o.Ra=!1))}),await oo(n,r,e)}catch(r){await eo(r)}}function Yp(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=re(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.listeners)f.Q_(a)&&(l=!0)}),l&&tf(c)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function EO(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new De(W.comparator);o=o.insert(i,ct.newNoDocument(i,ee.min()));const a=ce().add(i),c=new gc(ee.min(),new Map,new De(ye),o,a);await iw(r,c),r.pa=r.pa.remove(i),r.ya.delete(e),nf(r)}else await gu(r.localStore,e,!1).then(()=>mu(r,e,n)).catch(eo)}async function IO(t,e){const n=re(t),r=e.batch.batchId;try{const s=await Mk(n.localStore,e);aw(n,r,null),ow(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oo(n,s)}catch(s){await eo(s)}}async function TO(t,e,n){const r=re(t);try{const s=await function(o,a){const c=re(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Te(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);aw(r,e,n),ow(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await oo(r,s)}catch(s){await eo(s)}}function ow(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function aw(t,e,n){const r=re(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function mu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||cw(t,r)})}function cw(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(Gv(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),nf(t))}function Xp(t,e,n){for(const r of n)r instanceof rw?(t.wa.addReference(r.key,e),AO(t,r)):r instanceof sw?(j("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||cw(t,r.key)):Y()}function AO(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(j("SyncEngine","New document in limbo: "+n),t.ga.add(r),nf(t))}function nf(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new W(Pe.fromString(e)),r=t.Da.next();t.ya.set(r,new gO(n)),t.pa=t.pa.insert(n,r),Kv(t.remoteStore,new jn(hn(Bh(n.path)),r,"TargetPurposeLimboResolution",Lh._e))}}async function oo(t,e,n){const r=re(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Qh.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(c,l){const u=re(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>b.forEach(l,f=>b.forEach(f.ki,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>b.forEach(f.qi,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!to(h))throw h;j("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=u.ts.get(f),p=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(p);u.ts=u.ts.insert(f,v)}}}(r.localStore,i))}async function RO(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await qv(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(c=>{c.reject(new U(A.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oo(n,r._s)}}function bO(t,e){const n=re(t),r=n.ya.get(e);if(r&&r.Ra)return ce().add(r.key);{let s=ce();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function PO(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=iw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=EO.bind(null,e),e.Va.a_=hO.bind(null,e.eventManager),e.Va.Fa=fO.bind(null,e.eventManager),e}function SO(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TO.bind(null,e),e}class Jp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=mc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Lk(this.persistence,new Nk,e.initialUser,this.serializer)}createPersistence(e){return new Ok(Gh.jr,this.serializer)}createSharedClientState(e){return new qk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class CO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RO.bind(null,this.syncEngine),await cO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uO}()}createDatastore(e){const n=mc(e.databaseInfo.databaseId),r=function(i){return new Kk(i)}(e.databaseInfo);return function(i,o,a,c){return new Yk(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new Jk(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Yp(this.syncEngine,n,0),function(){return Kp.D()?new Kp:new Hk}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new mO(s,i,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=re(n);j("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await io(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=uv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ef(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ul(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await qv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DO(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Gp(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Gp(e.remoteStore,i)),t._onlineComponents=e}function OO(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function DO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await ul(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!OO(n))throw n;_s("Error using user provided cache. Falling back to memory cache: "+n),await ul(t,new Jp)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await ul(t,new Jp);return t._offlineComponents}async function uw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await Zp(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await Zp(t,new CO))),t._onlineComponents}function xO(t){return uw(t).then(e=>e.syncEngine)}async function hw(t){const e=await uw(t),n=e.eventManager;return n.onListen=_O.bind(null,e.syncEngine),n.onUnlisten=vO.bind(null,e.syncEngine),n}function NO(t,e,n={}){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new lw({next:f=>{o.enqueueAndForget(()=>tw(i,h));const d=f.docs.has(a);!d&&f.fromCache?l.reject(new U(A.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&c&&c.source==="server"?l.reject(new U(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new nw(Bh(a.path),u,{includeMetadataChanges:!0,J_:!0});return ew(i,h)}(await hw(t),t.asyncQueue,e,n,r)),r.promise}function VO(t,e,n={}){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new lw({next:f=>{o.enqueueAndForget(()=>tw(i,h)),f.fromCache&&c.source==="server"?l.reject(new U(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new nw(a,u,{includeMetadataChanges:!0,J_:!0});return ew(i,h)}(await hw(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(t,e,n){if(!n)throw new U(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LO(t,e,n,r){if(e===!0&&r===!0)throw new U(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function tg(t){if(!W.isDocumentKey(t))throw new U(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ng(t){if(W.isDocumentKey(t))throw new U(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Xt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vc(t);throw new U(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new r1;switch(r.type){case"firstParty":return new a1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=eg.get(n);r&&(j("ComponentProvider","Removing Datastore"),eg.delete(n),r.terminate())}(this),Promise.resolve()}}function MO(t,e,n,r={}){var s;const i=(t=Xt(t,wc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&_s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ot.MOCK_USER;else{a=Xm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new U(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ot(l)}t._authCredentials=new s1(new lv(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xs(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class Kn extends xs{constructor(e,n,r){super(e,n,Bh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new W(e))}withConverter(e){return new Kn(this.firestore,e,this._path)}}function Ro(t,e,...n){if(t=ke(t),dw("collection","path",e),t instanceof wc){const r=Pe.fromString(e,...n);return ng(r),new Kn(t,null,r)}{if(!(t instanceof vt||t instanceof Kn))throw new U(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return ng(r),new Kn(t.firestore,null,r)}}function St(t,e,...n){if(t=ke(t),arguments.length===1&&(e=uv.newId()),dw("doc","path",e),t instanceof wc){const r=Pe.fromString(e,...n);return tg(r),new vt(t,null,new W(r))}{if(!(t instanceof vt||t instanceof Kn))throw new U(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return tg(r),new vt(t.firestore,t instanceof Kn?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new zv(this,"async_queue_retry"),this.iu=()=>{const n=ll();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=ll();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=ll();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new In;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!to(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Rn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=Zh.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&Y()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class Br extends wc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new FO}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||pw(this),this._firestoreClient.terminate()}}function UO(t,e){const n=typeof t=="object"?t:ja(),r=typeof t=="string"?t:e||"(default)",s=tr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Gm("firestore");i&&MO(s,...i)}return s}function rf(t){return t._firestoreClient||pw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function pw(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new v1(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,fw(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new kO(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ts(pt.fromBase64String(e))}catch(n){throw new U(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ts(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O=/^__.*__$/;class jO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new ro(e,this.data,n,this.fieldTransforms)}}class gw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function mw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class af{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new af(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return wa(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(mw(this.Iu)&&$O.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class BO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||mc(e)}pu(e,n,r,s=!1){return new af({Iu:e,methodName:n,gu:r,path:tt.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ic(t){const e=t._freezeSettings(),n=mc(t._databaseId);return new BO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _w(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);cf("Data must be an object, but it was:",o,r);const a=yw(r,o);let c,l;if(i.merge)c=new Dt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=_u(e,h,n);if(!o.contains(f))throw new U(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);ww(u,f)||u.push(f)}c=new Dt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new jO(new Et(a),c,l)}class Tc extends sf{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Tc}}function qO(t,e,n,r){const s=t.pu(1,e,n);cf("Data must be an object, but it was:",s,r);const i=[],o=Et.empty();$r(r,(c,l)=>{const u=lf(e,c,n);l=ke(l);const h=s.Ru(u);if(l instanceof Tc)i.push(u);else{const f=ao(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Dt(i);return new gw(o,a,s.fieldTransforms)}function HO(t,e,n,r,s,i){const o=t.pu(1,e,n),a=[_u(e,r,n)],c=[s];if(i.length%2!=0)throw new U(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(_u(e,i[f])),c.push(i[f+1]);const l=[],u=Et.empty();for(let f=a.length-1;f>=0;--f)if(!ww(l,a[f])){const d=a[f];let p=c[f];p=ke(p);const v=o.Ru(d);if(p instanceof Tc)l.push(d);else{const _=ao(p,v);_!=null&&(l.push(d),u.set(d,_))}}const h=new Dt(l);return new gw(u,h,o.fieldTransforms)}function zO(t,e,n,r=!1){return ao(n,t.pu(r?4:3,e))}function ao(t,e){if(vw(t=ke(t)))return cf("Unsupported field value:",e,t),yw(t,e);if(t instanceof sf)return function(r,s){if(!mw(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=ao(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $1(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=He.fromDate(r);return{timestampValue:ya(s.serializer,i)}}if(r instanceof He){const i=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ya(s.serializer,i)}}if(r instanceof of)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ts)return{bytesValue:Mv(s.serializer,r._byteString)};if(r instanceof vt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${vc(r)}`)}(t,e)}function yw(t,e){const n={};return hv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$r(t,(r,s)=>{const i=ao(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function vw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof of||t instanceof Ts||t instanceof vt||t instanceof sf)}function cf(t,e,n){if(!vw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=vc(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function _u(t,e,n){if((e=ke(e))instanceof Ec)return e._internalPath;if(typeof e=="string")return lf(t,e);throw wa("Field path arguments must be of type string or ",t,!1,void 0,n)}const WO=new RegExp("[~\\*/\\[\\]]");function lf(t,e,n){if(e.search(WO)>=0)throw wa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ec(...e.split("."))._internalPath}catch{throw wa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new U(A.INVALID_ARGUMENT,a+t+c)}function ww(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Iw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KO extends Ew{data(){return super.data()}}function Iw(t,e){return typeof e=="string"?lf(t,e):e instanceof Ec?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uf{}class QO extends uf{}function YO(t,e,...n){let r=[];e instanceof uf&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof ff).length,a=i.filter(c=>c instanceof hf).length;if(o>1||o>0&&a>0)throw new U(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class hf extends QO{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new hf(e,n,r)}_apply(e){const n=this._parse(e);return Tw(e._query,n),new xs(e.firestore,e.converter,lu(e._query,n))}_parse(e){const n=Ic(e.firestore);return function(i,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new U(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){ig(h,u);const d=[];for(const p of h)d.push(sg(c,i,p));f={arrayValue:{values:d}}}else f=sg(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||ig(h,u),f=zO(a,o,h,u==="in"||u==="not-in");return qe.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ff extends uf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ff(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Yt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Tw(o,c),o=lu(o,c)}(e._query,n),new xs(e.firestore,e.converter,lu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function sg(t,e,n){if(typeof(n=ke(n))=="string"){if(n==="")throw new U(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wv(e)&&n.indexOf("/")!==-1)throw new U(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Pe.fromString(n));if(!W.isDocumentKey(r))throw new U(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Sp(t,new W(r))}if(n instanceof vt)return Sp(t,n._key);throw new U(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vc(n)}.`)}function ig(t,e){if(!Array.isArray(t)||t.length===0)throw new U(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Tw(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class XO{convertValue(e,n="none"){switch(Dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $r(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new of(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vi(e));default:return null}}convertTimestamp(e){const n=Yn(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);Te(Bv(r));const s=new Li(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(n)||Rn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rw extends Ew{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Iw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bo extends Rw{data(e={}){return super.data(e)}}class JO{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Js(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bo(this._firestore,this._userDataWriter,r.key,r,new Js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Bo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Js(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Bo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Js(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:ZO(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ZO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t){t=Xt(t,vt);const e=Xt(t.firestore,Br);return NO(rf(e),t._key).then(n=>nD(e,t,n))}class bw extends XO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function eD(t){t=Xt(t,xs);const e=Xt(t.firestore,Br),n=rf(e),r=new bw(e);return GO(t._query),VO(n,t._query).then(s=>new JO(e,r,t,s))}function og(t,e,n){t=Xt(t,vt);const r=Xt(t.firestore,Br),s=Aw(t.converter,e,n);return Ac(r,[_w(Ic(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ut.none())])}function bo(t,e,n,...r){t=Xt(t,vt);const s=Xt(t.firestore,Br),i=Ic(s);let o;return o=typeof(e=ke(e))=="string"||e instanceof Ec?HO(i,"updateDoc",t._key,e,n,r):qO(i,"updateDoc",t._key,e),Ac(s,[o.toMutation(t._key,Ut.exists(!0))])}function tD(t){return Ac(Xt(t.firestore,Br),[new qh(t._key,Ut.none())])}function hl(t,e){const n=Xt(t.firestore,Br),r=St(t),s=Aw(t.converter,e);return Ac(n,[_w(Ic(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then(()=>r)}function Ac(t,e){return function(r,s){const i=new In;return r.asyncQueue.enqueueAndForget(async()=>wO(await xO(r),s,i)),i.promise}(rf(t),e)}function nD(t,e,n){const r=n.docs.get(e._key),s=new bw(t);return new Rw(t,s,e._key,r,new Js(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ks=s})(Mr),Kt(new $t("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Br(new i1(r.getProvider("auth-internal")),new l1(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new U(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Li(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Tt(Ap,"4.4.0",e),Tt(Ap,"4.4.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw="firebasestorage.googleapis.com",Sw="storageBucket",rD=2*60*1e3,sD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends jt{constructor(e,n,r=0){super(fl(e),`Firebase Storage: ${n} (${fl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ve;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ve||(Ve={}));function fl(t){return"storage/"+t}function df(){const t="An unknown error occurred, please check the error payload for server response.";return new Le(Ve.UNKNOWN,t)}function iD(t){return new Le(Ve.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function oD(t){return new Le(Ve.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function aD(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Le(Ve.UNAUTHENTICATED,t)}function cD(){return new Le(Ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function lD(t){return new Le(Ve.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function uD(){return new Le(Ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function hD(){return new Le(Ve.CANCELED,"User canceled the upload/download.")}function fD(t){return new Le(Ve.INVALID_URL,"Invalid URL '"+t+"'.")}function dD(t){return new Le(Ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function pD(){return new Le(Ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Sw+"' property when initializing the app?")}function gD(){return new Le(Ve.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function mD(){return new Le(Ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function _D(t){return new Le(Ve.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function yu(t){return new Le(Ve.INVALID_ARGUMENT,t)}function Cw(){return new Le(Ve.APP_DELETED,"The Firebase app was deleted.")}function yD(t){return new Le(Ve.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function fi(t,e){return new Le(Ve.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function js(t){throw new Le(Ve.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=yt.makeFromUrl(e,n)}catch{return new yt(e,"")}if(r.path==="")return r;throw dD(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(O){O.path_=decodeURIComponent(O.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},v=n===Pw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",w=new RegExp(`^https?://${v}/${s}/${_}`,"i"),k=[{regex:a,indices:c,postModify:i},{regex:d,indices:p,postModify:l},{regex:w,indices:{bucket:1,path:2},postModify:l}];for(let O=0;O<k.length;O++){const B=k[O],L=B.regex.exec(e);if(L){const te=L[B.indices.bucket];let $=L[B.indices.path];$||($=""),r=new yt(te,$),B.postModify(r);break}}if(r==null)throw fD(e);return r}}class vD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,t(d,c())},_)}function f(){i&&clearTimeout(i)}function d(_,...w){if(l){f();return}if(_){f(),u.call(null,_,...w);return}if(c()||o){f(),u.call(null,_,...w);return}r<64&&(r*=2);let k;a===1?(a=2,k=0):k=(r+Math.random())*1e3,h(k)}let p=!1;function v(_){p||(p=!0,f(),!l&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function ED(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(t){return t!==void 0}function TD(t){return typeof t=="object"&&!Array.isArray(t)}function pf(t){return typeof t=="string"||t instanceof String}function ag(t){return gf()&&t instanceof Blob}function gf(){return typeof Blob<"u"}function vu(t,e,n,r){if(r<e)throw yu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw yu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function kw(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Tr||(Tr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,n,r,s,i,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Po(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Tr.NO_ERROR,c=i.getStatus();if(!a||AD(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Tr.ABORT;r(!1,new Po(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Po(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());ID(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=df();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Cw():hD();o(c)}else{const c=uD();o(c)}};this.canceled_?n(!1,new Po(!1,null,!0)):this.backoffId_=wD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ED(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Po{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function bD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function PD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function SD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function CD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function kD(t,e,n,r,s,i,o=!0){const a=kw(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return SD(l,e),bD(l,n),PD(l,i),CD(l,r),new RD(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function DD(...t){const e=OD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(gf())return new Blob(t);throw new Le(Ve.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function xD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(t){if(typeof atob>"u")throw _D("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class dl{constructor(e,n){this.data=e,this.contentType=n||null}}function VD(t,e){switch(t){case an.RAW:return new dl(Ow(e));case an.BASE64:case an.BASE64URL:return new dl(Dw(t,e));case an.DATA_URL:return new dl(MD(e),FD(e))}throw df()}function Ow(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function LD(t){let e;try{e=decodeURIComponent(t)}catch{throw fi(an.DATA_URL,"Malformed data URL.")}return Ow(e)}function Dw(t,e){switch(t){case an.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw fi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case an.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw fi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ND(e)}catch(s){throw s.message.includes("polyfill")?s:fi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class xw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw fi(an.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=UD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function MD(t){const e=new xw(t);return e.base64?Dw(an.BASE64,e.rest):LD(e.rest)}function FD(t){return new xw(t).contentType}function UD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n){let r=0,s="";ag(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(ag(this.data_)){const r=this.data_,s=xD(r,e,n);return s===null?null:new $n(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new $n(r,!0)}}static getBlob(...e){if(gf()){const n=e.map(r=>r instanceof $n?r.data_:r);return new $n(DD.apply(null,n))}else{const n=e.map(o=>pf(o)?VD(an.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new $n(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(t){let e;try{e=JSON.parse(t)}catch{return null}return TD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function jD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Nw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t,e){return e}class gt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||BD}}let So=null;function qD(t){return!pf(t)||t.length<2?t:Nw(t)}function _f(){if(So)return So;const t=[];t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));function e(i,o){return qD(o)}const n=new gt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new gt("size");return s.xform=r,t.push(s),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),So=t,So}function HD(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new yt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function zD(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return HD(r,t),r}function Vw(t,e,n){const r=mf(e);return r===null?null:zD(t,r,n)}function WD(t,e,n,r){const s=mf(e);if(s===null||!pf(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),d=co(f,n,r),p=kw({alt:"media",token:l});return d+p})[0]}function KD(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="prefixes",lg="items";function GD(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[cg])for(const s of n[cg]){const i=s.replace(/\/$/,""),o=t._makeStorageReference(new yt(e,i));r.prefixes.push(o)}if(n[lg])for(const s of n[lg]){const i=t._makeStorageReference(new yt(e,s.name));r.items.push(i)}return r}function QD(t,e,n){const r=mf(n);return r===null?null:GD(t,e,r)}class Rc{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t){if(!t)throw df()}function Lw(t,e){function n(r,s){const i=Vw(t,s,e);return yf(i!==null),i}return n}function YD(t,e){function n(r,s){const i=QD(t,e,s);return yf(i!==null),i}return n}function XD(t,e){function n(r,s){const i=Vw(t,s,e);return yf(i!==null),WD(i,s,t.host,t._protocol)}return n}function vf(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=cD():s=aD():n.getStatus()===402?s=oD(t.bucket):n.getStatus()===403?s=lD(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Mw(t){const e=vf(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=iD(t.path)),i.serverResponse=s.serverResponse,i}return n}function JD(t,e,n){const r=e.fullServerUrl(),s=co(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Rc(s,i,Lw(t,n),o);return a.errorHandler=Mw(e),a}function ZD(t,e,n,r,s){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",n&&n.length>0&&(i.delimiter=n),r&&(i.pageToken=r),s&&(i.maxResults=s);const o=e.bucketOnlyServerUrl(),a=co(o,t.host,t._protocol),c="GET",l=t.maxOperationRetryTime,u=new Rc(a,c,YD(t,e.bucket),l);return u.urlParams=i,u.errorHandler=vf(e),u}function ex(t,e,n){const r=e.fullServerUrl(),s=co(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Rc(s,i,XD(t,n),o);return a.errorHandler=Mw(e),a}function tx(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function nx(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=tx(null,e)),r}function rx(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let k="";for(let O=0;O<2;O++)k=k+Math.random().toString().slice(2);return k}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=nx(e,r,s),u=KD(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",d=$n.getBlob(h,r,f);if(d===null)throw gD();const p={name:l.fullPath},v=co(i,t.host,t._protocol),_="POST",w=t.maxUploadRetryTime,P=new Rc(v,_,Lw(t,n),w);return P.urlParams=p,P.headers=o,P.body=d.uploadData(),P.errorHandler=vf(e),P}class sx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Tr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Tr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Tr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw js("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw js("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw js("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw js("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw js("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ix extends sx{initXhr(){this.xhr_.responseType="text"}}function bc(){return new ix}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){this._service=e,n instanceof yt?this._location=n:this._location=yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xr(e,n)}get root(){const e=new yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Nw(this._location.path)}get storage(){return this._service}get parent(){const e=$D(this._location.path);if(e===null)return null;const n=new yt(this._location.bucket,e);return new xr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw yD(e)}}function ox(t,e,n){t._throwIfRoot("uploadBytes");const r=rx(t.storage,t._location,_f(),new $n(e,!0),n);return t.storage.makeRequestWithTokens(r,bc).then(s=>({metadata:s,ref:t}))}function ax(t){const e={prefixes:[],items:[]};return Fw(t,e).then(()=>e)}async function Fw(t,e,n){const s=await cx(t,{pageToken:n});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&await Fw(t,e,s.nextPageToken)}function cx(t,e){e!=null&&typeof e.maxResults=="number"&&vu("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=ZD(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,bc)}function lx(t){t._throwIfRoot("getMetadata");const e=JD(t.storage,t._location,_f());return t.storage.makeRequestWithTokens(e,bc)}function ux(t){t._throwIfRoot("getDownloadURL");const e=ex(t.storage,t._location,_f());return t.storage.makeRequestWithTokens(e,bc).then(n=>{if(n===null)throw mD();return n})}function hx(t,e){const n=jD(t._location.path,e),r=new yt(t._location.bucket,n);return new xr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(t){return/^[A-Za-z]+:\/\//.test(t)}function dx(t,e){return new xr(t,e)}function Uw(t,e){if(t instanceof wf){const n=t;if(n._bucket==null)throw pD();const r=new xr(n,n._bucket);return e!=null?Uw(r,e):r}else return e!==void 0?hx(t,e):t}function px(t,e){if(e&&fx(e)){if(t instanceof wf)return dx(t,e);throw yu("To use ref(service, url), the first argument must be a Storage instance.")}else return Uw(t,e)}function ug(t,e){const n=e==null?void 0:e[Sw];return n==null?null:yt.makeFromBucketSpec(n,t)}function gx(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Xm(s,t.app.options.projectId))}class wf{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Pw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rD,this._maxUploadRetryTime=sD,this._requests=new Set,s!=null?this._bucket=yt.makeFromBucketSpec(s,this._host):this._bucket=ug(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yt.makeFromBucketSpec(this._url,e):this._bucket=ug(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){vu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){vu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new vD(Cw());{const o=kD(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const hg="@firebase/storage",fg="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="storage";function pl(t,e,n){return t=ke(t),ox(t,e,n)}function dg(t){return t=ke(t),lx(t)}function mx(t){return t=ke(t),ax(t)}function pg(t){return t=ke(t),ux(t)}function Wr(t,e){return t=ke(t),px(t,e)}function _x(t=ja(),e){t=ke(t);const r=tr(t,$w).getImmediate({identifier:e}),s=Gm("storage");return s&&yx(r,...s),r}function yx(t,e,n,r={}){gx(t,e,n,r)}function vx(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new wf(n,r,s,e,Mr)}function wx(){Kt(new $t($w,vx,"PUBLIC").setMultipleInstances(!0)),Tt(hg,fg,""),Tt(hg,fg,"esm2017")}wx();const Ex={apiKey:"AIzaSyDCpxQUg5JZrpuudKmZYr1yFn6fRajaAVw",authDomain:"quickshot-d0e67.firebaseapp.com",projectId:"quickshot-d0e67",storageBucket:"quickshot-d0e67.appspot.com",messagingSenderId:"614201508083",appId:"1:614201508083:web:3d1d4ac4baed76f66db786"},jw=r_(Ex),Lt=UO(jw);KS(jw);const Kr=_x();let Me={login:(t,e)=>{const n=ii();return new Promise((r,s)=>{n!==null?ib(n,t,e).then(i=>{i&&n.currentUser?n.currentUser.getIdToken().then(o=>{r({status:!0,message:"Login successfully."})}):r({status:!1,message:"Incorrect Email or Password."})}).catch(i=>{r({status:!1,message:"Incorrect Email or Password."})}):r({status:!1,message:"Incorrect Email or Password."})})},getUser:()=>ii().currentUser,logout:async()=>new Promise(t=>{ii().signOut().then(()=>{t(!0)}).catch(n=>{t(!0)})}),findProject:async t=>{const e=St(Lt,"projects",t),n=await $s(e);if(n.exists()){const r=n.data(),s=Object.keys(r).includes("storagePath")?r.storagePath:null;return{status:!0,data:{id:t,image:s?await Me.getProjectLogo(s):null,name:r.name,url:r.url,storagePath:s}}}return{status:!1}},getProjects:async()=>{const t=YO(Ro(Lt,"projects"));try{const e=await eD(t),n=[];return e.forEach(async r=>{const s=r.data(),i={id:r.id,name:s.name,url:s.url,storagePath:s.storagePath?s.storagePath:null,image:null};n.push(i)}),{status:!0,data:n}}catch(e){return console.log("error, ",e),typeof e=="object"&&Object.keys(e).includes("code")&&e.code=="permission-denied"?{status:!1,code:"permission_denied"}:{status:!1,code:""}}},updateProjects:async(t,e,n)=>{const r=St(Lt,"projects",t);await bo(r,{name:e,url:n})},updateProjectLogo:async(t,e)=>{let n=e.name.split(".").pop(),r=`${e.name.split(".").slice(0,-1).join(".")}-${new Date().getTime()}.${n}`;const s=`${t}/logo/${r}`,i=Wr(Kr,s);await pl(i,e);const o=St(Lt,"projects",t);await bo(o,{filename:r,storagePath:s})},updateProjectLogoBase64:async(t,e,n)=>{for(var r=atob(e.split(",")[1]),s=new Array(r.length),i=0;i<r.length;i++)s[i]=r.charCodeAt(i);var o=new Uint8Array(s);let a=n.split(".").pop(),c=`${n.split(".").slice(0,-1).join(".")}-${new Date().getTime()}.${a}`;const l=`${t}/logo/${c}`,u=Wr(Kr,l);await pl(u,o);const h=St(Lt,"projects",t);await bo(h,{filename:c,storagePath:l})},getProjectLogo:async t=>{let e=null;if(sessionStorage.getItem(btoa(t)))return atob(sessionStorage.getItem(btoa(t))??"");if(t)try{const n=Wr(Kr,t);await dg(n),e=await pg(n),sessionStorage.setItem(btoa(t),btoa(e))}catch(n){console.log("ERR",n)}return e},updateProjectHome:async(t,e)=>{const n=St(Lt,"projectHeading",t);await og(n,{title:e.title,sub_title:e.sub_title,updated_at:new Date().toISOString()})},getProjectHome:async t=>{const e=St(Lt,"projectHeading",t),n=await $s(e);if(n.exists()){const r=n.data();return{status:!0,data:{title:r.title,sub_title:r.sub_title,banner:r.banner,bannerPath:r.bannerPath}}}else return{status:!1}},addFile:async(t,e)=>{let n=await Me.uploadFile(t,e);if(n.status){const r=await Me.getUser();if(!r)return{status:!1};const s=Ro(Lt,r.uid),i={image:n.data.fileName,imagePath:n.data.storagePath};return await hl(s,i),{status:!0,imageID:n.data.folderName}}else return{status:!1}},addProjectReview:async(t,e)=>{const n=St(Lt,"projectData",t);if((await $s(n)).exists()){const s=Ro(n,"review");hl(s,e)}else{og(n,{});const s=Ro(n,"review");hl(s,e)}},updateProjectReview:async(t,e,n)=>{const r=St(Lt,"projectData",t);if((await $s(r)).exists()){const i=St(r,"review",e);bo(i,n).then(()=>{console.log("your data updated")}).catch(o=>{console.log("something went wrong , Review Not Found"),console.log(o)})}else console.log("data not found")},deleteProjectReview:async(t,e)=>{St(Lt,"projectHeading",e);const n=St(Lt,"projectData",t),r=St(n,"review",e);(await $s(n)).exists()?tD(r).then(()=>({status:!0,message:"Review Deleted Successfully"})).catch(()=>(console.log("something went wrong , Review Not Found"),{status:!1,message:"Something went Wrong ,"})):console.log("data not found")},getImage:async t=>{const e=await Me.getFilePath(t);return e?Me.getFile(e):!1},getFile:async t=>{let e=null;if(sessionStorage.getItem(btoa(t)))return atob(sessionStorage.getItem(btoa(t))??"");if(t)try{const n=Wr(Kr,t);await dg(n),e=await pg(n),sessionStorage.setItem(btoa(t),btoa(e))}catch(n){console.log("ERR",n)}return e},getRandomInt:(t,e)=>(t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t),getRandomString:()=>{const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Me.getRandomInt(5,10);let n=" ";const r=t.length;for(let s=0;s<e;s++)n+=t.charAt(Math.floor(Math.random()*r));return n.trim()},checkFileExist:async t=>await Me.getFilePath(t)!==!1,getFilePath:async t=>{const e=Wr(Kr,`images/${t}`);try{let n=await mx(e);return n.items.length>0?n.items[0].fullPath:!1}catch{return!1}},getNewFileName:async()=>{const t=Me.getRandomString();return await Me.checkFileExist(t)?await Me.getNewFileName():t},uploadFile:async(t,e)=>{const n=await Me.getNewFileName();let r=e.split(".").pop(),s=`${e.split(".").slice(0,-1).join(".")}-${new Date().getTime()}.${r}`;const i=`images/${n}/${s}`,o=Wr(Kr,i);try{let a=await pl(o,t);return{status:!0,data:{fileName:s,storagePath:i,folderName:n}}}catch(a){return console.log("File upload Error :: ",a),{status:!1,data:null}}}};const Pc=Hu({id:"auth",state:()=>({fAuth:ii(),user:null,applicationUser:null,is_fetching:!1,initProcessDone:!1,projects:null,has_permission:null}),getters:{getUser(){return this.applicationUser!==null?this.applicationUser:{name:"",email:""}},getProjects(){return[]}},actions:{async login(t,e){let n=await Me.login(t,e);return n.status&&await this.fetchUser(!0),n},async logout(){return await Me.logout(),await this.fetchUser(!0),{status:!0,message:"Logout success."}},async fetchUser(t=!1){return(this.user==null||t)&&await new Promise((e,n)=>{const r=ii().onAuthStateChanged(s=>{r(),this.user=s,s&&(this.applicationUser={name:typeof s.displayName=="string"?s.displayName:"-",email:typeof s.email=="string"?s.email:""}),e(s)},n)}),this.user},async fetchProjects(t=!1){return this.projects},async updateProject(t,e,n){await Me.updateProjects(t,e,n),await this.fetchProjects(!0)},async updateProjectLogo(t,e){await Me.updateProjectLogo(t,e),await this.fetchProjects(!0)},async updateProjectLogoBase64(t,e,n){await Me.updateProjectLogoBase64(t,e,n),await this.fetchProjects(!0)},async setProjectHome(t,e){await Me.setProjectHome(t,e),await this.fetchProjects(!0)}}}),Bw=Hu({id:"project",state:()=>({project:null,heading:null,projectUid:""}),getters:{isProjectLoad(){return this.projectUid!==""&&this.project!==null},getHeading(){return this.heading!==null?this.heading:{banner:"",title:"",bannerPath:"",sub_title:""}}},actions:{async loadProject(t,e=!1){if(t!==this.projectUid||this.project==null||e){const n=await Me.findProject(t);n.status?(this.project=n.data,this.projectUid=t,this.heading=null):(this.project=null,this.heading=null,this.projectUid="")}},async loadProjectHeading(t=!1){if(this.heading==null||t){const e=await Me.getProjectHome(this.projectUid);e.status?this.heading=e.data:this.heading=null}}}}),Ix=er({__name:"App",setup(t){const e=ve(!0),n=Pc();Bw();const r=Qu(),s=Gu();return ji(async()=>{let i=await n.fetchUser();n.initProcessDone=!0,e.value=!1,r.meta&&Object.keys(r.meta).includes("guard")&&(r.meta.guard=="auth"&&i==null?s.push({name:"login"}):r.meta.guard=="unauth"&&i!==null&&s.push({name:"home"}))}),(i,o)=>e.value?vi("",!0):(at(),ju(G(Ku),{key:0}))}}),Bs=new Map;function Tx(t){const e=Cu();function n(a){var c;const l=Bs.get(t)||new Set;l.add(a),Bs.set(t,l);const u=()=>s(a);return(c=e==null?void 0:e.cleanups)==null||c.push(u),u}function r(a){function c(...l){s(c),a(...l)}return n(c)}function s(a){const c=Bs.get(t);c&&(c.delete(a),c.size||i())}function i(){Bs.delete(t)}function o(a,c){var l;(l=Bs.get(t))==null||l.forEach(u=>u(a,c))}return{on:n,once:r,off:s,emit:o,reset:i}}function gg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function $i(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?gg(Object(n),!0).forEach(function(r){Ax(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ax(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ea(t){return typeof t=="function"}function wu(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function Sc(t){return Ea(t.$validator)?$i({},t):{$validator:t}}function qw(t){return typeof t=="object"?t.$valid:t}function Hw(t){return t.$validator||t}function Rx(t,e){if(!wu(t))throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof t}`);if(!wu(e)&&!Ea(e))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=Sc(e);return n.$params=$i($i({},n.$params||{}),t),n}function bx(t,e){if(!Ea(t)&&typeof G(t)!="string")throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof t}`);if(!wu(e)&&!Ea(e))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=Sc(e);return n.$message=t,n}function Px(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];const n=Sc(t);return $i($i({},n),{},{$async:!0,$watchTargets:e})}function Sx(t){return{$validator(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return G(e).reduce((i,o,a)=>{const c=Object.entries(o).reduce((l,u)=>{let[h,f]=u;const d=t[h]||{},p=Object.entries(d).reduce((v,_)=>{let[w,P]=_;const O=Hw(P).call(this,f,o,a,...r),B=qw(O);if(v.$data[w]=O,v.$data.$invalid=!B||!!v.$data.$invalid,v.$data.$error=v.$data.$invalid,!B){let L=P.$message||"";const te=P.$params||{};typeof L=="function"&&(L=L({$pending:!1,$invalid:!B,$params:te,$model:f,$response:O})),v.$errors.push({$property:h,$message:L,$params:te,$response:O,$model:f,$pending:!1,$validator:w})}return{$valid:v.$valid&&B,$data:v.$data,$errors:v.$errors}},{$valid:!0,$data:{},$errors:[]});return l.$data[h]=p.$data,l.$errors[h]=p.$errors,{$valid:l.$valid&&p.$valid,$data:l.$data,$errors:l.$errors}},{$valid:!0,$data:{},$errors:{}});return{$valid:i.$valid&&c.$valid,$data:i.$data.concat(c.$data),$errors:i.$errors.concat(c.$errors)}},{$valid:!0,$data:[],$errors:[]})},$message:e=>{let{$response:n}=e;return n?n.$errors.map(r=>Object.values(r).map(s=>s.map(i=>i.$message)).reduce((s,i)=>s.concat(i),[])):[]}}}const Ef=t=>{if(t=G(t),Array.isArray(t))return!!t.length;if(t==null)return!1;if(t===!1)return!0;if(t instanceof Date)return!isNaN(t.getTime());if(typeof t=="object"){for(let e in t)return!0;return!1}return!!String(t).length},Cx=t=>(t=G(t),Array.isArray(t)?t.length:typeof t=="object"?Object.keys(t).length:String(t).length);function or(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r=>(r=G(r),!Ef(r)||e.every(s=>(s.lastIndex=0,s.test(r))))}var gl=Object.freeze({__proto__:null,forEach:Sx,len:Cx,normalizeValidatorObject:Sc,regex:or,req:Ef,unwrap:G,unwrapNormalizedValidator:Hw,unwrapValidatorResponse:qw,withAsync:Px,withMessage:bx,withParams:Rx});or(/^[a-zA-Z]*$/);or(/^[a-zA-Z0-9]*$/);or(/^\d*(\.\d+)?$/);const kx=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var Ox=or(kx),Dx={$validator:Ox,$message:"Value is not a valid email address",$params:{type:"email"}};function xx(t){return typeof t=="string"&&(t=t.trim()),Ef(t)}var mg={$validator:xx,$message:"Value is required",$params:{type:"required"}};const Nx=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;or(Nx);or(/(^[0-9]*$)|(^-[0-9]+$)/);or(/^[-]?\d*(\.\d+)?$/);function _g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Vn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_g(Object(n),!0).forEach(function(r){Vx(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_g(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Vx(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(t).reduce((n,r)=>(e.includes(r)||(n[r]=G(t[r])),n),{})}function Ia(t){return typeof t=="function"}function Lx(t){return En(t)||Ar(t)}function zw(t,e,n){let r=t;const s=e.split(".");for(let i=0;i<s.length;i++){if(!r[s[i]])return n;r=r[s[i]]}return r}function ml(t,e,n){return ie(()=>t.some(r=>zw(e,r,{[n]:!1})[n]))}function vg(t,e,n){return ie(()=>t.reduce((r,s)=>{const i=zw(e,s,{[n]:!1})[n]||[];return r.concat(i)},[]))}function Ww(t,e,n,r){return t.call(r,G(e),G(n),r)}function Kw(t){return t.$valid!==void 0?!t.$valid:!t}function Mx(t,e,n,r,s,i,o){let{$lazy:a,$rewardEarly:c}=s,l=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],u=arguments.length>8?arguments[8]:void 0,h=arguments.length>9?arguments[9]:void 0,f=arguments.length>10?arguments[10]:void 0;const d=ve(!!r.value),p=ve(0);n.value=!1;const v=cn([e,r].concat(l,f),()=>{if(a&&!r.value||c&&!h.value&&!n.value)return;let _;try{_=Ww(t,e,u,o)}catch(w){_=Promise.reject(w)}p.value++,n.value=!!p.value,d.value=!1,Promise.resolve(_).then(w=>{p.value--,n.value=!!p.value,i.value=w,d.value=Kw(w)}).catch(w=>{p.value--,n.value=!!p.value,i.value=w,d.value=!0})},{immediate:!0,deep:typeof e=="object"});return{$invalid:d,$unwatch:v}}function Fx(t,e,n,r,s,i,o,a){let{$lazy:c,$rewardEarly:l}=r;const u=()=>({}),h=ie(()=>{if(c&&!n.value||l&&!a.value)return!1;let f=!0;try{const d=Ww(t,e,o,i);s.value=d,f=Kw(d)}catch(d){s.value=d}return f});return{$unwatch:u,$invalid:h}}function Ux(t,e,n,r,s,i,o,a,c,l,u){const h=ve(!1),f=t.$params||{},d=ve(null);let p,v;t.$async?{$invalid:p,$unwatch:v}=Mx(t.$validator,e,h,n,r,d,s,t.$watchTargets,c,l,u):{$invalid:p,$unwatch:v}=Fx(t.$validator,e,n,r,d,s,c,l);const _=t.$message;return{$message:Ia(_)?ie(()=>_(yg({$pending:h,$invalid:p,$params:yg(f),$model:e,$response:d,$validator:i,$propertyPath:a,$property:o}))):_||"",$params:f,$pending:h,$invalid:p,$response:d,$unwatch:v}}function $x(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=G(t),n=Object.keys(e),r={},s={},i={};let o=null;return n.forEach(a=>{const c=e[a];switch(!0){case Ia(c.$validator):r[a]=c;break;case Ia(c):r[a]={$validator:c};break;case a==="$validationGroups":o=c;break;case a.startsWith("$"):i[a]=c;break;default:s[a]=c}}),{rules:r,nestedValidators:s,config:i,validationGroups:o}}const jx="__root";function Bx(t,e,n,r,s,i,o,a,c){const l=Object.keys(t),u=r.get(s,t),h=ve(!1),f=ve(!1),d=ve(0);if(u){if(!u.$partial)return u;u.$unwatch(),h.value=u.$dirty.value}const p={$dirty:h,$path:s,$touch:()=>{h.value||(h.value=!0)},$reset:()=>{h.value&&(h.value=!1)},$commit:()=>{}};return l.length?(l.forEach(v=>{p[v]=Ux(t[v],e,p.$dirty,i,o,v,n,s,c,f,d)}),p.$externalResults=ie(()=>a.value?[].concat(a.value).map((v,_)=>({$propertyPath:s,$property:n,$validator:"$externalResults",$uid:`${s}-externalResult-${_}`,$message:v,$params:{},$response:null,$pending:!1})):[]),p.$invalid=ie(()=>{const v=l.some(_=>G(p[_].$invalid));return f.value=v,!!p.$externalResults.value.length||v}),p.$pending=ie(()=>l.some(v=>G(p[v].$pending))),p.$error=ie(()=>p.$dirty.value?p.$pending.value||p.$invalid.value:!1),p.$silentErrors=ie(()=>l.filter(v=>G(p[v].$invalid)).map(v=>{const _=p[v];return Zn({$propertyPath:s,$property:n,$validator:v,$uid:`${s}-${v}`,$message:_.$message,$params:_.$params,$response:_.$response,$pending:_.$pending})}).concat(p.$externalResults.value)),p.$errors=ie(()=>p.$dirty.value?p.$silentErrors.value:[]),p.$unwatch=()=>l.forEach(v=>{p[v].$unwatch()}),p.$commit=()=>{f.value=!0,d.value=Date.now()},r.set(s,t,p),p):(u&&r.set(s,t,p),p)}function qx(t,e,n,r,s,i,o){const a=Object.keys(t);return a.length?a.reduce((c,l)=>(c[l]=Eu({validations:t[l],state:e,key:l,parentKey:n,resultsCache:r,globalConfig:s,instance:i,externalResults:o}),c),{}):{}}function Hx(t,e,n){const r=ie(()=>[e,n].filter(p=>p).reduce((p,v)=>p.concat(Object.values(G(v))),[])),s=ie({get(){return t.$dirty.value||(r.value.length?r.value.every(p=>p.$dirty):!1)},set(p){t.$dirty.value=p}}),i=ie(()=>{const p=G(t.$silentErrors)||[],v=r.value.filter(_=>(G(_).$silentErrors||[]).length).reduce((_,w)=>_.concat(...w.$silentErrors),[]);return p.concat(v)}),o=ie(()=>{const p=G(t.$errors)||[],v=r.value.filter(_=>(G(_).$errors||[]).length).reduce((_,w)=>_.concat(...w.$errors),[]);return p.concat(v)}),a=ie(()=>r.value.some(p=>p.$invalid)||G(t.$invalid)||!1),c=ie(()=>r.value.some(p=>G(p.$pending))||G(t.$pending)||!1),l=ie(()=>r.value.some(p=>p.$dirty)||r.value.some(p=>p.$anyDirty)||s.value),u=ie(()=>s.value?c.value||a.value:!1),h=()=>{t.$touch(),r.value.forEach(p=>{p.$touch()})},f=()=>{t.$commit(),r.value.forEach(p=>{p.$commit()})},d=()=>{t.$reset(),r.value.forEach(p=>{p.$reset()})};return r.value.length&&r.value.every(p=>p.$dirty)&&h(),{$dirty:s,$errors:o,$invalid:a,$anyDirty:l,$error:u,$pending:c,$touch:h,$reset:d,$silentErrors:i,$commit:f}}function Eu(t){let{validations:e,state:n,key:r,parentKey:s,childResults:i,resultsCache:o,globalConfig:a={},instance:c,externalResults:l}=t;const u=s?`${s}.${r}`:r,{rules:h,nestedValidators:f,config:d,validationGroups:p}=$x(e),v=Vn(Vn({},a),d),_=r?ie(()=>{const me=G(n);return me?G(me[r]):void 0}):n,w=Vn({},G(l)||{}),P=ie(()=>{const me=G(l);return r?me?G(me[r]):void 0:me}),k=Bx(h,_,r,o,u,v,c,P,n),O=qx(f,_,u,o,v,c,P),B={};p&&Object.entries(p).forEach(me=>{let[Ue,Ae]=me;B[Ue]={$invalid:ml(Ae,O,"$invalid"),$error:ml(Ae,O,"$error"),$pending:ml(Ae,O,"$pending"),$errors:vg(Ae,O,"$errors"),$silentErrors:vg(Ae,O,"$silentErrors")}});const{$dirty:L,$errors:te,$invalid:$,$anyDirty:q,$error:_e,$pending:Oe,$touch:Fe,$reset:Xe,$silentErrors:Vt,$commit:We}=Hx(k,O,i),oe=r?ie({get:()=>G(_),set:me=>{L.value=!0;const Ue=G(n),Ae=G(l);Ae&&(Ae[r]=w[r]),xe(Ue[r])?Ue[r].value=me:Ue[r]=me}}):null;r&&v.$autoDirty&&cn(_,()=>{L.value||Fe();const me=G(l);me&&(me[r]=w[r])},{flush:"sync"});async function fe(){return Fe(),v.$rewardEarly&&(We(),await gi()),await gi(),new Promise(me=>{if(!Oe.value)return me(!$.value);const Ue=cn(Oe,()=>{me(!$.value),Ue()})})}function le(me){return(i.value||{})[me]}function bt(){xe(l)?l.value=w:Object.keys(w).length===0?Object.keys(l).forEach(me=>{delete l[me]}):Object.assign(l,w)}return Zn(Vn(Vn(Vn({},k),{},{$model:oe,$dirty:L,$error:_e,$errors:te,$invalid:$,$anyDirty:q,$pending:Oe,$touch:Fe,$reset:Xe,$path:u||jx,$silentErrors:Vt,$validate:fe,$commit:We},i&&{$getResultsForChild:le,$clearExternalResults:bt,$validationGroups:B}),O))}class zx{constructor(){this.storage=new Map}set(e,n,r){this.storage.set(e,{rules:n,result:r})}checkRulesValidity(e,n,r){const s=Object.keys(r),i=Object.keys(n);return i.length!==s.length||!i.every(a=>s.includes(a))?!1:i.every(a=>n[a].$params?Object.keys(n[a].$params).every(c=>G(r[a].$params[c])===G(n[a].$params[c])):!0)}get(e,n){const r=this.storage.get(e);if(!r)return;const{rules:s,result:i}=r,o=this.checkRulesValidity(e,n,s),a=i.$unwatch?i.$unwatch:()=>({});return o?i:{$dirty:i.$dirty,$partial:!0,$unwatch:a}}}const qo={COLLECT_ALL:!0,COLLECT_NONE:!1},wg=Symbol("vuelidate#injectChildResults"),Eg=Symbol("vuelidate#removeChildResults");function Wx(t){let{$scope:e,instance:n}=t;const r={},s=ve([]),i=ie(()=>s.value.reduce((u,h)=>(u[h]=G(r[h]),u),{}));function o(u,h){let{$registerAs:f,$scope:d,$stopPropagation:p}=h;p||e===qo.COLLECT_NONE||d===qo.COLLECT_NONE||e!==qo.COLLECT_ALL&&e!==d||(r[f]=u,s.value.push(f))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],o);function a(u){s.value=s.value.filter(h=>h!==u),delete r[u]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],a);const c=It(wg,[]);ss(wg,n.__vuelidateInjectInstances);const l=It(Eg,[]);return ss(Eg,n.__vuelidateRemoveInstances),{childResults:i,sendValidationResultsToParent:c,removeValidationResultsFromParent:l}}function Gw(t){return new Proxy(t,{get(e,n){return typeof e[n]=="object"?Gw(e[n]):ie(()=>e[n])}})}let Ig=0;function Kx(t,e){var n;let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(r=t,t=void 0,e=void 0);let{$registerAs:s,$scope:i=qo.COLLECT_ALL,$stopPropagation:o,$externalResults:a,currentVueInstance:c}=r;const l=c||((n=B0())===null||n===void 0?void 0:n.proxy),u=l?l.$options:{};s||(Ig+=1,s=`_vuelidate_${Ig}`);const h=ve({}),f=new zx,{childResults:d,sendValidationResultsToParent:p,removeValidationResultsFromParent:v}=l?Wx({$scope:i,instance:l}):{childResults:ve({})};if(!t&&u.validations){const _=u.validations;e=ve({}),dm(()=>{e.value=l,cn(()=>Ia(_)?_.call(e.value,new Gw(e.value)):_,w=>{h.value=Eu({validations:w,state:e,childResults:d,resultsCache:f,globalConfig:r,instance:l,externalResults:a||l.vuelidateExternalResults})},{immediate:!0})}),r=u.validationsConfig||r}else{const _=xe(t)||Lx(t)?t:Zn(t||{});cn(_,w=>{h.value=Eu({validations:w,state:e,childResults:d,resultsCache:f,globalConfig:r,instance:l??{},externalResults:a})},{immediate:!0})}return l&&(p.forEach(_=>_(h,{$registerAs:s,$scope:i,$stopPropagation:o})),pm(()=>v.forEach(_=>_(s)))),ie(()=>Vn(Vn({},G(h.value)),d.value))}const Gx=Symbol(),Qx={class:"w-full h-screen bg-neutral-100 md:px-28 pt-12 px-12 flex items-center"},Yx={class:"w-full md:flex"},Xx=ne("div",{class:"w-1/2 max-md:w-full"},[ne("p",{class:"text-2xl md:text-3xl lg:text-4xl font-bold max-md:w-full max-md:mb-10"},"Sign In to Direct")],-1),Jx={class:"w-1/2 max-md:w-full"},Zx={class:"max-md:w-full float-right"},eN={class:"space-y-5 md:space-y-5"},tN=["processing","error-message","error"],nN=["processing","error-message","error"],rN={key:0,class:"text-red-500"},sN=["disabled"],iN=ne("div",null,null,-1),oN=er({__name:"LoginView",setup(t){const e=ve(!1),n=Gu(),r=ve(""),s=ve(""),i=ie(()=>({email:{required:gl.withMessage("Required.",mg),email:gl.withMessage("Invalid Email.",Dx)},password:{required:gl.withMessage("Required.",mg)}})),o=Kx(i,{email:r,password:s}),a=Tx(Gx),c=Pc(),l=ve(""),u=async()=>{if(o.value.$touch(),!o.value.$invalid){e.value=!0,l.value="";let h=await c.login(r.value,s.value);h.status?(a.emit({message:h.message,options:{type:"success"}}),n.push({name:"home"})):l.value=h.message,e.value=!1}};return ji(async()=>{c.getUser&&n.push({name:"home"})}),(h,f)=>(at(),kt("div",null,[ne("div",Qx,[ne("div",Yx,[Xx,ne("div",Jx,[ne("div",Zx,[ne("form",{onSubmit:zs(u,["prevent"]),class:"space-y-4 md:space-y-6"},[ne("div",eN,[Ff(ne("input",{placeholder:"Enter Email",type:"email","onUpdate:modelValue":f[0]||(f[0]=d=>r.value=d),processing:e.value,class:"bg-slate-200 border text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5","error-message":G(o).email.$errors.length>0?G(o).email.$errors[0].$message:void 0,error:G(o).email.$errors.length>0},null,8,tN),[[id,r.value]]),Ff(ne("input",{placeholder:"Password",type:"password","onUpdate:modelValue":f[1]||(f[1]=d=>s.value=d),processing:e.value,class:"bg-slate-200 border text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5","error-message":G(o).password.$errors.length>0?G(o).password.$errors[0].$message:void 0,error:G(o).password.$errors.length>0},null,8,nN),[[id,s.value]]),l.value.length?(at(),kt("small",rN,zo(l.value),1)):vi("",!0)]),ne("button",{type:"submit",disabled:e.value,class:"w-full bg-blue-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-8"},zo(e.value?"Processing...":"Sign In"),9,sN)],32),iN])])])])]))}}),aN=Hu({id:"General",state:()=>({displayLeftPanel:!0})}),cN=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},lN=ne("nav",{class:"border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"},[ne("div",{class:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"},[ne("a",{href:"/",class:"flex items-center space-x-3 rtl:space-x-reverse"},[ne("span",{class:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white"},"Quick Shot")])])],-1),uN=[lN],hN=er({__name:"AppHeader",setup(t){Gu(),Qu(),Pc();const e=Bw();return aN(),ie(()=>{var n;return e.isProjectLoad?(n=e.project)==null?void 0:n.name:""}),(n,r)=>(at(),kt("header",null,uN))}}),Qw=er({__name:"MainLayout",setup(t){return(e,n)=>(at(),kt(qt,null,[ut(hN),ut(G(Ku))],64))}});/*!
 * Compressor.js v1.2.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-02-28T14:09:41.732Z
 */function Tg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Co(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Tg(Object(n),!0).forEach(function(r){pN(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Tg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function fN(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ag(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Yw(r.key),r)}}function dN(t,e,n){return e&&Ag(t.prototype,e),n&&Ag(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function pN(t,e,n){return e=Yw(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ta(){return Ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ta.apply(this,arguments)}function gN(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Yw(t){var e=gN(t,"string");return typeof e=="symbol"?e:String(e)}var Xw={exports:{}};(function(t){typeof window>"u"||function(e){var n=e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype,r=e.Blob&&function(){try{return!!new Blob}catch{return!1}}(),s=r&&e.Uint8Array&&function(){try{return new Blob([new Uint8Array(100)]).size===100}catch{return!1}}(),i=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,o=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,a=(r||i)&&e.atob&&e.ArrayBuffer&&e.Uint8Array&&function(c){var l,u,h,f,d,p,v,_,w;if(l=c.match(o),!l)throw new Error("invalid data URI");for(u=l[2]?l[1]:"text/plain"+(l[3]||";charset=US-ASCII"),h=!!l[4],f=c.slice(l[0].length),h?d=atob(f):d=decodeURIComponent(f),p=new ArrayBuffer(d.length),v=new Uint8Array(p),_=0;_<d.length;_+=1)v[_]=d.charCodeAt(_);return r?new Blob([s?v:p],{type:u}):(w=new i,w.append(p),w.getBlob(u))};e.HTMLCanvasElement&&!n.toBlob&&(n.mozGetAsFile?n.toBlob=function(c,l,u){var h=this;setTimeout(function(){u&&n.toDataURL&&a?c(a(h.toDataURL(l,u))):c(h.mozGetAsFile("blob",l))})}:n.toDataURL&&a&&(n.msToBlob?n.toBlob=function(c,l,u){var h=this;setTimeout(function(){(l&&l!=="image/png"||u)&&n.toDataURL&&a?c(a(h.toDataURL(l,u))):c(h.msToBlob(l))})}:n.toBlob=function(c,l,u){var h=this;setTimeout(function(){c(a(h.toDataURL(l,u)))})})),t.exports?t.exports=a:e.dataURLtoBlob=a}(window)})(Xw);var Rg=Xw.exports,mN=function(e){return typeof Blob>"u"?!1:e instanceof Blob||Object.prototype.toString.call(e)==="[object Blob]"},bg={strict:!0,checkOrientation:!0,retainExif:!1,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,resize:"none",quality:.8,mimeType:"auto",convertTypes:["image/png"],convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},_N=typeof window<"u"&&typeof window.document<"u",Jn=_N?window:{},Aa=function(e){return e>0&&e<1/0},yN=Array.prototype.slice;function If(t){return Array.from?Array.from(t):yN.call(t)}var vN=/^image\/.+$/;function Iu(t){return vN.test(t)}function wN(t){var e=Iu(t)?t.substr(6):"";return e==="jpeg"&&(e="jpg"),".".concat(e)}var Jw=String.fromCharCode;function EN(t,e,n){var r="",s;for(n+=e,s=e;s<n;s+=1)r+=Jw(t.getUint8(s));return r}var IN=Jn.btoa;function Pg(t,e){for(var n=[],r=8192,s=new Uint8Array(t);s.length>0;)n.push(Jw.apply(null,If(s.subarray(0,r)))),s=s.subarray(r);return"data:".concat(e,";base64,").concat(IN(n.join("")))}function TN(t){var e=new DataView(t),n;try{var r,s,i;if(e.getUint8(0)===255&&e.getUint8(1)===216)for(var o=e.byteLength,a=2;a+1<o;){if(e.getUint8(a)===255&&e.getUint8(a+1)===225){s=a;break}a+=1}if(s){var c=s+4,l=s+10;if(EN(e,c,4)==="Exif"){var u=e.getUint16(l);if(r=u===18761,(r||u===19789)&&e.getUint16(l+2,r)===42){var h=e.getUint32(l+4,r);h>=8&&(i=l+h)}}}if(i){var f=e.getUint16(i,r),d,p;for(p=0;p<f;p+=1)if(d=i+p*12+2,e.getUint16(d,r)===274){d+=8,n=e.getUint16(d,r),e.setUint16(d,1,r);break}}}catch{n=1}return n}function AN(t){var e=0,n=1,r=1;switch(t){case 2:n=-1;break;case 3:e=-180;break;case 4:r=-1;break;case 5:e=90,r=-1;break;case 6:e=90;break;case 7:e=90,n=-1;break;case 8:e=-90;break}return{rotate:e,scaleX:n,scaleY:r}}var RN=/\.\d*(?:0|9){12}\d*$/;function Sg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return RN.test(t)?Math.round(t*e)/e:t}function qs(t){var e=t.aspectRatio,n=t.height,r=t.width,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"none",i=Aa(r),o=Aa(n);if(i&&o){var a=n*e;(s==="contain"||s==="none")&&a>r||s==="cover"&&a<r?n=r/e:r=n*e}else i?n=r/e:o&&(r=n*e);return{width:r,height:n}}function bN(t){for(var e=If(new Uint8Array(t)),n=e.length,r=[],s=0;s+3<n;){var i=e[s],o=e[s+1];if(i===255&&o===218)break;if(i===255&&o===216)s+=2;else{var a=e[s+2]*256+e[s+3],c=s+a+2,l=e.slice(s,c);r.push(l),s=c}}return r.reduce(function(u,h){return h[0]===255&&h[1]===225?u.concat(h):u},[])}function PN(t,e){var n=If(new Uint8Array(t));if(n[2]!==255||n[3]!==224)return t;var r=n[4]*256+n[5],s=[255,216].concat(e,n.slice(4+r));return new Uint8Array(s)}var SN=Jn.ArrayBuffer,_l=Jn.FileReader,ur=Jn.URL||Jn.webkitURL,CN=/\.\w+$/,kN=Jn.Compressor,ON=function(){function t(e,n){fN(this,t),this.file=e,this.exif=[],this.image=new Image,this.options=Co(Co({},bg),n),this.aborted=!1,this.result=null,this.init()}return dN(t,[{key:"init",value:function(){var n=this,r=this.file,s=this.options;if(!mN(r)){this.fail(new Error("The first argument must be a File or Blob object."));return}var i=r.type;if(!Iu(i)){this.fail(new Error("The first argument must be an image File or Blob object."));return}if(!ur||!_l){this.fail(new Error("The current browser does not support image compression."));return}SN||(s.checkOrientation=!1,s.retainExif=!1);var o=i==="image/jpeg",a=o&&s.checkOrientation,c=o&&s.retainExif;if(ur&&!a&&!c)this.load({url:ur.createObjectURL(r)});else{var l=new _l;this.reader=l,l.onload=function(u){var h=u.target,f=h.result,d={},p=1;a&&(p=TN(f),p>1&&Ta(d,AN(p))),c&&(n.exif=bN(f)),a||c?!ur||p>1?d.url=Pg(f,i):d.url=ur.createObjectURL(r):d.url=f,n.load(d)},l.onabort=function(){n.fail(new Error("Aborted to read the image with FileReader."))},l.onerror=function(){n.fail(new Error("Failed to read the image with FileReader."))},l.onloadend=function(){n.reader=null},a||c?l.readAsArrayBuffer(r):l.readAsDataURL(r)}}},{key:"load",value:function(n){var r=this,s=this.file,i=this.image;i.onload=function(){r.draw(Co(Co({},n),{},{naturalWidth:i.naturalWidth,naturalHeight:i.naturalHeight}))},i.onabort=function(){r.fail(new Error("Aborted to load the image."))},i.onerror=function(){r.fail(new Error("Failed to load the image."))},Jn.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Jn.navigator.userAgent)&&(i.crossOrigin="anonymous"),i.alt=s.name,i.src=n.url}},{key:"draw",value:function(n){var r=this,s=n.naturalWidth,i=n.naturalHeight,o=n.rotate,a=o===void 0?0:o,c=n.scaleX,l=c===void 0?1:c,u=n.scaleY,h=u===void 0?1:u,f=this.file,d=this.image,p=this.options,v=document.createElement("canvas"),_=v.getContext("2d"),w=Math.abs(a)%180===90,P=(p.resize==="contain"||p.resize==="cover")&&Aa(p.width)&&Aa(p.height),k=Math.max(p.maxWidth,0)||1/0,O=Math.max(p.maxHeight,0)||1/0,B=Math.max(p.minWidth,0)||0,L=Math.max(p.minHeight,0)||0,te=s/i,$=p.width,q=p.height;if(w){var _e=[O,k];k=_e[0],O=_e[1];var Oe=[L,B];B=Oe[0],L=Oe[1];var Fe=[q,$];$=Fe[0],q=Fe[1]}P&&(te=$/q);var Xe=qs({aspectRatio:te,width:k,height:O},"contain");k=Xe.width,O=Xe.height;var Vt=qs({aspectRatio:te,width:B,height:L},"cover");if(B=Vt.width,L=Vt.height,P){var We=qs({aspectRatio:te,width:$,height:q},p.resize);$=We.width,q=We.height}else{var oe=qs({aspectRatio:te,width:$,height:q}),fe=oe.width;$=fe===void 0?s:fe;var le=oe.height;q=le===void 0?i:le}$=Math.floor(Sg(Math.min(Math.max($,B),k))),q=Math.floor(Sg(Math.min(Math.max(q,L),O)));var bt=-$/2,me=-q/2,Ue=$,Ae=q,Jt=[];if(P){var pn=0,ar=0,$e=s,I=i,M=qs({aspectRatio:te,width:s,height:i},{contain:"cover",cover:"contain"}[p.resize]);$e=M.width,I=M.height,pn=(s-$e)/2,ar=(i-I)/2,Jt.push(pn,ar,$e,I)}if(Jt.push(bt,me,Ue,Ae),w){var D=[q,$];$=D[0],q=D[1]}v.width=$,v.height=q,Iu(p.mimeType)||(p.mimeType=f.type);var H="transparent";f.size>p.convertSize&&p.convertTypes.indexOf(p.mimeType)>=0&&(p.mimeType="image/jpeg");var de=p.mimeType==="image/jpeg";if(de&&(H="#fff"),_.fillStyle=H,_.fillRect(0,0,$,q),p.beforeDraw&&p.beforeDraw.call(this,_,v),!this.aborted&&(_.save(),_.translate($/2,q/2),_.rotate(a*Math.PI/180),_.scale(l,h),_.drawImage.apply(_,[d].concat(Jt)),_.restore(),p.drew&&p.drew.call(this,_,v),!this.aborted)){var g=function(y){if(!r.aborted){var E=function(C){return r.done({naturalWidth:s,naturalHeight:i,result:C})};if(y&&de&&p.retainExif&&r.exif&&r.exif.length>0){var T=function(C){return E(Rg(Pg(PN(C,r.exif),p.mimeType)))};if(y.arrayBuffer)y.arrayBuffer().then(T).catch(function(){r.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."))});else{var R=new _l;r.reader=R,R.onload=function(N){var C=N.target;T(C.result)},R.onabort=function(){r.fail(new Error("Aborted to read the compressed image with FileReader."))},R.onerror=function(){r.fail(new Error("Failed to read the compressed image with FileReader."))},R.onloadend=function(){r.reader=null},R.readAsArrayBuffer(y)}}else E(y)}};v.toBlob?v.toBlob(g,p.mimeType,p.quality):g(Rg(v.toDataURL(p.mimeType,p.quality)))}}},{key:"done",value:function(n){var r=n.naturalWidth,s=n.naturalHeight,i=n.result,o=this.file,a=this.image,c=this.options;if(ur&&a.src.indexOf("blob:")===0&&ur.revokeObjectURL(a.src),i)if(c.strict&&!c.retainExif&&i.size>o.size&&c.mimeType===o.type&&!(c.width>r||c.height>s||c.minWidth>r||c.minHeight>s||c.maxWidth<r||c.maxHeight<s))i=o;else{var l=new Date;i.lastModified=l.getTime(),i.lastModifiedDate=l,i.name=o.name,i.name&&i.type!==o.type&&(i.name=i.name.replace(CN,wN(i.type)))}else i=o;this.result=i,c.success&&c.success.call(this,i)}},{key:"fail",value:function(n){var r=this.options;if(r.error)r.error.call(this,n);else throw n}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}],[{key:"noConflict",value:function(){return window.Compressor=kN,t}},{key:"setDefaults",value:function(n){Ta(bg,n)}}]),t}();const DN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABhNJREFUeF7tmleoLEUQhr9rRBExJ/RBERVFUQyYc84Js4hiBEVQMSHogwgqBlTMWQyYMGNWzDlgFkEFsxgeRDGh80kPjMt0T8/O3p3DPVtw4XC7prvq76rq6r93BtNcZkxz/5kAMImAaY7AJAWmeQBMiuAkBaZoCiwN7ACsAiwBLAh8F/69BjwM/DAK26daBOwMnAasBcn0/Bt4sgDgDOCFLkBMFQBWAG4odnbdIZy5DzgU+H6Ib6dEEdwauC2E+TA++M0XwG6A6dFK+o6AA4HrgNlbWV2v/AuwEfBWm7n6BGAf4CZgjjYGN+h+DqwTimXWtH0BMMqdH3T03iIKds3yvqHS5s7RVi/X+T+K0+AB4DngJ2Cx4u8tw7+mjVsfeDHHsKaJcuZoo5Pr/DPAQcBnNZOvAdxSFM6VEgs/AmybY9g4Ach1/m5gX8AIiImNked/DIS/gMWBH5tAGBcAbZy3OP7ZZDiwZtEtvppI4/1DpCSnGgcAGmKT03TUufO5zpdOPQ5sEfHwfOD4JiBnNgAbFmfzE8BcDYYM47xTnlLMfVZk7luB/foEwAvN66F6p+yoc34B4Ocm44GDgWsjeo8VdcIus7cUuBEw99s6v2PIXcP3qobvTwDOjejcDuzdFwBeY99uyPu6ndf5O4G5g+HnACclnLDp8QZZJxcV/cOxfQFwKXBUYvF7gL0Gqr3O31VTLw4Drq6Za/lijveBOSPrxL77n/rMKILOaU++TMQwLyt2ar9Vxgd3vvqp/YD61pNSLKryARtE1vinAM0a9FUfEbAy8F5iYY8tjS9F5sedL8O+7tOngM0rA5sC/l9MXgLWa3Le8VFEgIXO8/jrsOD2wIORxb8MkeEOlbJqOMqMgpRsFdZRx57Cuez26sS5Yjb8T78rAGWH57HlfVw5pHDymohhsR5dO84s2t9TEwjY/9tUlXJFEeKH1+g/XwBl/5ElXQCotreGb9m7H1EQmZdHVvd2t1NkTFssjrGqbl/vjtvnx4D21igf8EmW9x1SYLC3XxL4Jiy6S3CkzoYPAGtETDw+302M2/+/Eca9FZZ/+18Spabfo7nOqzdMBGwT8qva22tMSUWtXRjySsIIARCImHxUNEKSpHVidNwfBpYKdaB03q5QhqmVtAVAw14GzPmqmPdye4oUlwztoE6pb/MigVkthNW5TBNPhjoxva4MA/MAv4adH8r5YSJAlqWOurYgHVmx2IuIN7uYeIGR/68DwRC24teJjl4fBuYP9/2hnW8LQCq3zX8bD/NQ8RJixU+JO23Vf6eiNFsIa1+D6mS78CrkmHVHiqx12FcnbpMCkg++2MRkM+DpyqB/b5LQ/71wfo+B87oJuBWLK+7HDcC2Gs4FwLbW9jamL4dn2FZpLIuhhGYdF6DzewbSszR43oLHs4OzMaoT+cFlW3mXoZwLgPl9WWQ+nZab+7Rm3AtJWbTKYfXdeVOgFC80Xl9TdPYlxYPoMRk+tVLJBeBi4OjIzF5rdSgmZxfV+sQwWLfzOu/T2O6JOawtRkbq+GzleKmcC8AdIWTrFjkOuKBhdSPhvEBRDe58k/NO7RHrUTtyyQVAesmKWyfVoyll4CDNlbPzzucJYwfYeLUdBp1cANylGL10MmCYt5Fc560Xni6dfgOQMiwXgAsT9FIW+VgxItd5897XoZvbINtWNxeAAxINh92cIfpmxuJtnO/U4WXY8p9KLgCLhFyMPW58GGgrr6MxsR+wRU5Ve79158fifBsA1E0VQscFwUipcnclGBKYVvImomKszrcFQALSzi4lpoN8n69B34afvWxc3CDt4WPsbTnf2J1vC4D6KR4+N+3q9HpxfhgAFg5kx3JdvB34VudtcnxJGrvkFsGqYasXL7LPAvONwNredr60fRgA/Ha1wPt1uZ1JckqaWFx7k2EB0OBFw+OlRElbsZh61GWzt20XyNXvAkC5hi8wp4e7QupHEJ4Q8ony/1mPFrlOdNEbBQDl+guFHybJGsnf+6suw9zLjLTXQzPrQjNVAOhiR2/fjjICenOiy8ITALqgNyt8O4mAWWEXu/gwiYAu6M0K3077CPgXfs0QUOCNd9QAAAAASUVORK5CYII=",xN={class:"max-w-7xl m-auto mt-10"},NN={class:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert"},VN={for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"},LN={key:0},MN=M0('<div class="flex flex-col items-center justify-center pt-5 pb-6"><svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"></path></svg><p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p><p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p></div>',1),FN={key:1,class:"flex flex-col gap-6"},UN=ne("h2",{class:"text-3xl text-neutral-400 font-bold text-center"},"Success!",-1),$N=["href"],jN=["src"],BN={key:0,class:"max-w-7xl w-full h-64 fixed flex backdrop-blur-sm bg-opacity-70 border-2 border-gray-300 border-dashed rounded-lg"},qN=ne("div",{class:"m-auto self-center"},[ne("h1",{class:"text-sm font-bold flex items-center"},[Yo("Upl"),ne("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",class:"animate-spin fill-blue-600",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},[ne("path",{d:"M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z"})]),Yo(" ading . . .")])],-1),HN=[qN],zN={key:0,class:"max-w-7xl w-full h-full top-0 fixed flex backdrop-blur-sm"},WN=ne("div",{class:"m-auto self-center"},[ne("svg",{"aria-hidden":"true",class:"w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[ne("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),ne("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})])],-1),KN=[WN],GN=er({__name:"HomeView",setup(t){ve();const e=ve(""),n=ve(""),r=ve(""),s=ve(null),i=ve(!1),o=ve(!1),a=ve(!1),c=ve([]);ji(()=>{window.addEventListener("paste",l)});const l=_=>{var P;const w=(P=_.clipboardData)==null?void 0:P.items[0];if(w)if(w.type.startsWith("image/")){const k=w.getAsFile();o.value=!0,p(k)}else c.value.push("Pasted item is a not a Image, Please Enter Image")},u=_=>{if(_.target!==null&&_.target.files&&_.target.files.length>0){const[w]=_.target.files;w.type.startsWith("image/")?(o.value=!0,n.value=w.name,p(w)):c.value.push("Selected item is a not a Image, Please Enter Image")}},h=()=>{console.log("Drag Enter")},f=()=>{console.log("Drag Leave")},d=_=>{var P;const w=(P=_.dataTransfer)==null?void 0:P.items[0];if(console.log("item",w),w)if(w.type.startsWith("image/")){const k=w.getAsFile();o.value=!0,p(k)}else c.value.push("Dropped item is not an image, please enter an image")},p=_=>{c.value.length>0&&c.value.splice(0,c.value.length);const w=15e5,P=9e5;let k=1;_.size>w&&(k=parseFloat((P/_.size).toFixed(2)));try{new ON(_,{quality:k,success:O=>{e.value=URL.createObjectURL(O),s.value=O,o.value=!1,v()}})}catch(O){console.log(O)}},v=async()=>{if(o.value=!0,s.value!==null){let _=await Me.addFile(s.value,n.value);console.log(_.imageID),r.value="https://romikmakavana.me/quickshot/s/"+_.imageID,o.value=!1,a.value=!0}else console.log("Something went wrong.")};return(_,w)=>(at(),kt("main",xN,[(at(!0),kt(qt,null,p0(c.value,(P,k)=>(at(),kt("div",NN,zo(P),1))),256)),ne("div",{class:"flex items-center justify-center w-full",onDragover:w[0]||(w[0]=zs(()=>{},["prevent"])),onDragenter:zs(h,["prevent"]),onDragleave:zs(f,["prevent"]),onDrop:zs(d,["prevent"])},[ne("label",VN,[a.value?(at(),kt("div",FN,[UN,ne("a",{href:r.value,target:"_blank",class:"text-xl flex gap-2 text-neutral-900 border py-2 px-5 rounded bg-neutral-100"},[ne("img",{src:G(DN),class:"w-7"},null,8,jN),Yo(" "+zo(r.value),1)],8,$N)])):(at(),kt("div",LN,[MN,ne("input",{id:"dropzone-file",onChange:u,type:"file",class:"hidden"},null,32)]))]),o.value?(at(),kt("div",BN,HN)):vi("",!0)],32),i.value?(at(),kt("div",zN,KN)):vi("",!0)]))}}),QN={},YN={class:"max-w-7xl w-full h-full top-0 fixed flex backdrop-blur-sm"},XN=ne("div",{class:"m-auto self-center"},[ne("svg",{"aria-hidden":"true",class:"w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[ne("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),ne("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})])],-1),JN=[XN];function ZN(t,e){return at(),kt("div",YN,JN)}const eV=cN(QN,[["render",ZN]]),tV="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20111.07%20122.88'%20style='enable-background:new%200%200%20111.07%20122.88'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%3c![CDATA[%20.st0{fill-rule:evenodd;clip-rule:evenodd;}%20]]%3e%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M97.67,20.81L97.67,20.81l0.01,0.02c3.7,0.01,7.04,1.51,9.46,3.93c2.4,2.41,3.9,5.74,3.9,9.42h0.02v0.02v75.28%20v0.01h-0.02c-0.01,3.68-1.51,7.03-3.93,9.46c-2.41,2.4-5.74,3.9-9.42,3.9v0.02h-0.02H38.48h-0.01v-0.02%20c-3.69-0.01-7.04-1.5-9.46-3.93c-2.4-2.41-3.9-5.74-3.91-9.42H25.1c0-25.96,0-49.34,0-75.3v-0.01h0.02%20c0.01-3.69,1.52-7.04,3.94-9.46c2.41-2.4,5.73-3.9,9.42-3.91v-0.02h0.02C58.22,20.81,77.95,20.81,97.67,20.81L97.67,20.81z%20M0.02,75.38L0,13.39v-0.01h0.02c0.01-3.69,1.52-7.04,3.93-9.46c2.41-2.4,5.74-3.9,9.42-3.91V0h0.02h59.19%20c7.69,0,8.9,9.96,0.01,10.16H13.4h-0.02v-0.02c-0.88,0-1.68,0.37-2.27,0.97c-0.59,0.58-0.96,1.4-0.96,2.27h0.02v0.01v3.17%20c0,19.61,0,39.21,0,58.81C10.17,83.63,0.02,84.09,0.02,75.38L0.02,75.38z%20M100.91,109.49V34.2v-0.02h0.02%20c0-0.87-0.37-1.68-0.97-2.27c-0.59-0.58-1.4-0.96-2.28-0.96v0.02h-0.01H38.48h-0.02v-0.02c-0.88,0-1.68,0.38-2.27,0.97%20c-0.59,0.58-0.96,1.4-0.96,2.27h0.02v0.01v75.28v0.02h-0.02c0,0.88,0.38,1.68,0.97,2.27c0.59,0.59,1.4,0.96,2.27,0.96v-0.02h0.01%20h59.19h0.02v0.02c0.87,0,1.68-0.38,2.27-0.97c0.59-0.58,0.96-1.4,0.96-2.27L100.91,109.49L100.91,109.49L100.91,109.49%20L100.91,109.49z'/%3e%3c/g%3e%3c/svg%3e",nV={class:"max-w-7xl m-auto my-10"},rV={class:"mb-3 w-fit mx-auto"},sV={class:"flex gap-1 border-neutral-700"},iV=["src"],oV=ne("p",null,"URL",-1),aV={class:"w-full flex justify-center"},cV=["src"],lV=er({__name:"ImageView",setup(t){const e=Qu(),n=ve(!1),r=ve(""),s=ve(!0);ji(()=>{a()});const i=()=>{s.value=!1},o=()=>{navigator.clipboard.writeText(window.location.href)},a=async()=>{n.value=!1,Object.keys(e.params).includes("imageID")||(n.value=!0);const c=e.params.imageID;try{const l=await Me.getImage(c);l!=null||l!=!1?r.value=l:(r.value="",n.value=!0)}catch{}};return(c,l)=>(at(),kt("div",nV,[ne("div",rV,[ne("button",{class:"border rounded py-2 px-6 border-neutral-600 bg-neutral-200",onClick:o},[ne("span",sV,[ne("img",{src:G(tV),class:"w-4 mr-2"},null,8,iV),oV])])]),ne("div",aV,[ne("img",{class:"shadow-image1 h-auto max-w-full border-neutral-800 border-8 rounded-lg",src:r.value,onload:i},null,8,cV)]),s.value?(at(),ju(eV,{key:0})):vi("",!0)]))}}),Tf=(t,e=[])=>{for(const n of t)n.name&&e.push(n.name.toString()),n.children&&n.children.length>0&&e.push(...Tf(n.children));return e},Zw=[{path:"/login",name:"login",component:oN,meta:{guard:"unauth"}}],uV=[{path:"/s",component:Qw,children:[{path:":imageID",name:"image",component:lV}]}],eE=[{path:"/",component:Qw,meta:{guard:"auth"},children:[{path:"",name:"home",component:GN}]}],tE=kT({history:KI("/quickshot/"),routes:[...eE,...uV,...Zw]}),hV=Tf(Zw),fV=Tf(eE);tE.beforeEach(async(t,e)=>{const n=Pc(),r=n.user!==null;if(typeof t.name=="string"&&n.initProcessDone){if(r&&hV.includes(t.name))return{name:"home"};if(!r&&fV.includes(t.name))return{name:"login"}}});const Af=wI(Ix);Af.use(AI());Af.use(tE);Af.mount("#app");
