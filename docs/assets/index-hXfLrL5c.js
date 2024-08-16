(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function hu(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Re={},Gr=[],Vt=()=>{},vw=()=>!1,Ea=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),fu=t=>t.startsWith("onUpdate:"),st=Object.assign,du=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ww=Object.prototype.hasOwnProperty,pe=(t,e)=>ww.call(t,e),J=Array.isArray,Qr=t=>Ta(t)==="[object Map]",hg=t=>Ta(t)==="[object Set]",se=t=>typeof t=="function",We=t=>typeof t=="string",ys=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",fg=t=>(Se(t)||se(t))&&se(t.then)&&se(t.catch),dg=Object.prototype.toString,Ta=t=>dg.call(t),Ew=t=>Ta(t).slice(8,-1),pg=t=>Ta(t)==="[object Object]",pu=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Io=hu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Tw=/-(\w)/g,rs=Ia(t=>t.replace(Tw,(e,n)=>n?n.toUpperCase():"")),Iw=/\B([A-Z])/g,vs=Ia(t=>t.replace(Iw,"-$1").toLowerCase()),gg=Ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ic=Ia(t=>t?`on${gg(t)}`:""),qn=(t,e)=>!Object.is(t,e),Ao=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Fo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},al=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let pf;const mg=()=>pf||(pf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gu(t){if(J(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?Pw(r):gu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||Se(t))return t}const Aw=/;(?![^(]*\))/g,Rw=/:([^]+)/,bw=/\/\*[^]*?\*\//g;function Pw(t){const e={};return t.replace(bw,"").split(Aw).forEach(n=>{if(n){const r=n.split(Rw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function mu(t){let e="";if(We(t))e=t;else if(J(t))for(let n=0;n<t.length;n++){const r=mu(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Cw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sw=hu(Cw);function _g(t){return!!t||t===""}const $o=t=>We(t)?t:t==null?"":J(t)||Se(t)&&(t.toString===dg||!se(t.toString))?JSON.stringify(t,yg,2):String(t),yg=(t,e)=>e&&e.__v_isRef?yg(t,e.value):Qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ac(r,i)+" =>"]=s,n),{})}:hg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ac(n))}:ys(e)?Ac(e):Se(e)&&!J(e)&&!pg(e)?String(e):e,Ac=(t,e="")=>{var n;return ys(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Pt;class vg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function wg(t){return new vg(t)}function kw(t,e=Pt){e&&e.active&&e.effects.push(t)}function _u(){return Pt}function Ow(t){Pt&&Pt.cleanups.push(t)}let dr;class yu{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,kw(this,s)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,Cr();for(const e of this.deps)if(e.computed&&(xw(e.computed),this._dirtyLevel>=2))break;Sr(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Fn,n=dr;try{return Fn=!0,dr=this,this._runnings++,gf(this),this.fn()}finally{mf(this),this._runnings--,dr=n,Fn=e}}stop(){var e;this.active&&(gf(this),mf(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function xw(t){return t.value}function gf(t){t._trackId++,t._depsLength=0}function mf(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Eg(t.deps[e],t);t.deps.length=t._depsLength}}function Eg(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Fn=!0,cl=0;const Tg=[];function Cr(){Tg.push(Fn),Fn=!1}function Sr(){const t=Tg.pop();Fn=t===void 0?!0:t}function vu(){cl++}function wu(){for(cl--;!cl&&ll.length;)ll.shift()()}function Ig(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Eg(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const ll=[];function Ag(t,e,n){vu();for(const r of t.keys())if(!(!r.allowRecurse&&r._runnings)&&r._dirtyLevel<e&&(!r._runnings||e!==2)){const s=r._dirtyLevel;r._dirtyLevel=e,s===0&&(!r._queryings||e!==2)&&(r.trigger(),r.scheduler&&ll.push(r.scheduler))}wu()}const Rg=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},jo=new WeakMap,pr=Symbol(""),ul=Symbol("");function It(t,e,n){if(Fn&&dr){let r=jo.get(t);r||jo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Rg(()=>r.delete(n))),Ig(dr,s)}}function mn(t,e,n,r,s,i){const o=jo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&J(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!ys(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":J(t)?pu(n)&&a.push(o.get("length")):(a.push(o.get(pr)),Qr(t)&&a.push(o.get(ul)));break;case"delete":J(t)||(a.push(o.get(pr)),Qr(t)&&a.push(o.get(ul)));break;case"set":Qr(t)&&a.push(o.get(pr));break}vu();for(const c of a)c&&Ag(c,3);wu()}function Dw(t,e){var n;return(n=jo.get(t))==null?void 0:n.get(e)}const Nw=hu("__proto__,__v_isRef,__isVue"),bg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ys)),_f=Vw();function Vw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=me(this);for(let i=0,o=this.length;i<o;i++)It(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(me)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Cr(),vu();const r=me(this)[e].apply(this,n);return wu(),Sr(),r}}),t}function Lw(t){const e=me(this);return It(e,"has",t),e.hasOwnProperty(t)}class Pg{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Qw:Og:i?kg:Sg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=J(e);if(!s){if(o&&pe(_f,n))return Reflect.get(_f,n,r);if(n==="hasOwnProperty")return Lw}const a=Reflect.get(e,n,r);return(ys(n)?bg.has(n):Nw(n))||(s||It(e,"get",n),i)?a:xe(a)?o&&pu(n)?a:a.value:Se(a)?s?Dg(a):Yn(a):a}}class Cg extends Pg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const c=vr(i);if(!Bo(r)&&!vr(r)&&(i=me(i),r=me(r)),!J(e)&&xe(i)&&!xe(r))return c?!1:(i.value=r,!0)}const o=J(e)&&pu(n)?Number(n)<e.length:pe(e,n),a=Reflect.set(e,n,r,s);return e===me(s)&&(o?qn(r,i)&&mn(e,"set",n,r):mn(e,"add",n,r)),a}deleteProperty(e,n){const r=pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&mn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ys(n)||!bg.has(n))&&It(e,"has",n),r}ownKeys(e){return It(e,"iterate",J(e)?"length":pr),Reflect.ownKeys(e)}}class Mw extends Pg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Uw=new Cg,Fw=new Mw,$w=new Cg(!0),Eu=t=>t,Aa=t=>Reflect.getPrototypeOf(t);function no(t,e,n=!1,r=!1){t=t.__v_raw;const s=me(t),i=me(e);n||(qn(e,i)&&It(s,"get",e),It(s,"get",i));const{has:o}=Aa(s),a=r?Eu:n?Au:oi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ro(t,e=!1){const n=this.__v_raw,r=me(n),s=me(t);return e||(qn(t,s)&&It(r,"has",t),It(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function so(t,e=!1){return t=t.__v_raw,!e&&It(me(t),"iterate",pr),Reflect.get(t,"size",t)}function yf(t){t=me(t);const e=me(this);return Aa(e).has.call(e,t)||(e.add(t),mn(e,"add",t,t)),this}function vf(t,e){e=me(e);const n=me(this),{has:r,get:s}=Aa(n);let i=r.call(n,t);i||(t=me(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?qn(e,o)&&mn(n,"set",t,e):mn(n,"add",t,e),this}function wf(t){const e=me(this),{has:n,get:r}=Aa(e);let s=n.call(e,t);s||(t=me(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&mn(e,"delete",t,void 0),i}function Ef(){const t=me(this),e=t.size!==0,n=t.clear();return e&&mn(t,"clear",void 0,void 0),n}function io(t,e){return function(r,s){const i=this,o=i.__v_raw,a=me(o),c=e?Eu:t?Au:oi;return!t&&It(a,"iterate",pr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function oo(t,e,n){return function(...r){const s=this.__v_raw,i=me(s),o=Qr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Eu:e?Au:oi;return!e&&It(i,"iterate",c?ul:pr),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function An(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jw(){const t={get(i){return no(this,i)},get size(){return so(this)},has:ro,add:yf,set:vf,delete:wf,clear:Ef,forEach:io(!1,!1)},e={get(i){return no(this,i,!1,!0)},get size(){return so(this)},has:ro,add:yf,set:vf,delete:wf,clear:Ef,forEach:io(!1,!0)},n={get(i){return no(this,i,!0)},get size(){return so(this,!0)},has(i){return ro.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:io(!0,!1)},r={get(i){return no(this,i,!0,!0)},get size(){return so(this,!0)},has(i){return ro.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:io(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=oo(i,!1,!1),n[i]=oo(i,!0,!1),e[i]=oo(i,!1,!0),r[i]=oo(i,!0,!0)}),[t,n,e,r]}const[Bw,Hw,qw,Ww]=jw();function Tu(t,e){const n=e?t?Ww:qw:t?Hw:Bw;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(pe(n,s)&&s in r?n:r,s,i)}const zw={get:Tu(!1,!1)},Kw={get:Tu(!1,!0)},Gw={get:Tu(!0,!1)},Sg=new WeakMap,kg=new WeakMap,Og=new WeakMap,Qw=new WeakMap;function Yw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xw(t){return t.__v_skip||!Object.isExtensible(t)?0:Yw(Ew(t))}function Yn(t){return vr(t)?t:Iu(t,!1,Uw,zw,Sg)}function xg(t){return Iu(t,!1,$w,Kw,kg)}function Dg(t){return Iu(t,!0,Fw,Gw,Og)}function Iu(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Xw(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function _n(t){return vr(t)?_n(t.__v_raw):!!(t&&t.__v_isReactive)}function vr(t){return!!(t&&t.__v_isReadonly)}function Bo(t){return!!(t&&t.__v_isShallow)}function Ng(t){return _n(t)||vr(t)}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function Ra(t){return Fo(t,"__v_skip",!0),t}const oi=t=>Se(t)?Yn(t):t,Au=t=>Se(t)?Dg(t):t;class Vg{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new yu(()=>e(this._value),()=>hl(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=me(this);return Lg(e),(!e._cacheable||e.effect.dirty)&&qn(e._value,e._value=e.effect.run())&&hl(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Jw(t,e,n=!1){let r,s;const i=se(t);return i?(r=t,s=Vt):(r=t.get,s=t.set),new Vg(r,s,i||!s,n)}function Lg(t){Fn&&dr&&(t=me(t),Ig(dr,t.dep||(t.dep=Rg(()=>t.dep=void 0,t instanceof Vg?t:void 0))))}function hl(t,e=3,n){t=me(t);const r=t.dep;r&&Ag(r,e)}function xe(t){return!!(t&&t.__v_isRef===!0)}function ge(t){return Mg(t,!1)}function Zw(t){return Mg(t,!0)}function Mg(t,e){return xe(t)?t:new eE(t,e)}class eE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:me(e),this._value=n?e:oi(e)}get value(){return Lg(this),this._value}set value(e){const n=this.__v_isShallow||Bo(e)||vr(e);e=n?e:me(e),qn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:oi(e),hl(this,3))}}function K(t){return xe(t)?t.value:t}const tE={get:(t,e,n)=>K(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return xe(s)&&!xe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ug(t){return _n(t)?t:new Proxy(t,tE)}function nE(t){const e=J(t)?new Array(t.length):{};for(const n in t)e[n]=sE(t,n);return e}class rE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Dw(me(this._object),this._key)}}function sE(t,e,n){const r=t[e];return xe(r)?r:new rE(t,e,n)}function $n(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ba(i,e,n)}return s}function $t(t,e,n,r){if(se(t)){const i=$n(t,e,n,r);return i&&fg(i)&&i.catch(o=>{ba(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push($t(t[i],e,n,r));return s}function ba(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){$n(c,null,10,[t,o,a]);return}}iE(t,n,s,r)}function iE(t,e,n,r=!0){console.error(t)}let ai=!1,fl=!1;const lt=[];let Xt=0;const Yr=[];let fn=null,cr=0;const Fg=Promise.resolve();let Ru=null;function ss(t){const e=Ru||Fg;return t?e.then(this?t.bind(this):t):e}function oE(t){let e=Xt+1,n=lt.length;for(;e<n;){const r=e+n>>>1,s=lt[r],i=ci(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function bu(t){(!lt.length||!lt.includes(t,ai&&t.allowRecurse?Xt+1:Xt))&&(t.id==null?lt.push(t):lt.splice(oE(t.id),0,t),$g())}function $g(){!ai&&!fl&&(fl=!0,Ru=Fg.then(Bg))}function aE(t){const e=lt.indexOf(t);e>Xt&&lt.splice(e,1)}function cE(t){J(t)?Yr.push(...t):(!fn||!fn.includes(t,t.allowRecurse?cr+1:cr))&&Yr.push(t),$g()}function Tf(t,e,n=ai?Xt+1:0){for(;n<lt.length;n++){const r=lt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;lt.splice(n,1),n--,r()}}}function jg(t){if(Yr.length){const e=[...new Set(Yr)];if(Yr.length=0,fn){fn.push(...e);return}for(fn=e,fn.sort((n,r)=>ci(n)-ci(r)),cr=0;cr<fn.length;cr++)fn[cr]();fn=null,cr=0}}const ci=t=>t.id==null?1/0:t.id,lE=(t,e)=>{const n=ci(t)-ci(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Bg(t){fl=!1,ai=!0,lt.sort(lE);try{for(Xt=0;Xt<lt.length;Xt++){const e=lt[Xt];e&&e.active!==!1&&$n(e,null,14)}}finally{Xt=0,lt.length=0,jg(),ai=!1,Ru=null,(lt.length||Yr.length)&&Bg()}}function uE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Re;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||Re;f&&(s=n.map(d=>We(d)?d.trim():d)),h&&(s=n.map(al))}let a,c=r[a=Ic(e)]||r[a=Ic(rs(e))];!c&&i&&(c=r[a=Ic(vs(e))]),c&&$t(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$t(l,t,6,s)}}function Hg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!se(t)){const c=l=>{const u=Hg(l,e,!0);u&&(a=!0,st(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Se(t)&&r.set(t,null),null):(J(i)?i.forEach(c=>o[c]=null):st(o,i),Se(t)&&r.set(t,o),o)}function Pa(t,e){return!t||!Ea(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,vs(e))||pe(t,e))}let St=null,qg=null;function Ho(t){const e=St;return St=t,qg=t&&t.type.__scopeId||null,e}function hE(t,e=St,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Df(-1);const i=Ho(e);let o;try{o=t(...s)}finally{Ho(i),r._d&&Df(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Rc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:_}=t;let y,w;const T=Ho(t);try{if(n.shapeFlag&4){const O=s||r,F=O;y=Yt(u.call(F,O,h,i,d,f,p)),w=c}else{const O=e;y=Yt(O.length>1?O(i,{attrs:c,slots:a,emit:l}):O(i,null)),w=e.props?c:fE(c)}}catch(O){Gs.length=0,ba(O,t,1),y=ut(wr)}let P=y;if(w&&_!==!1){const O=Object.keys(w),{shapeFlag:F}=P;O.length&&F&7&&(o&&O.some(fu)&&(w=dE(w,o)),P=is(P,w))}return n.dirs&&(P=is(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),y=P,Ho(T),y}const fE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ea(n))&&((e||(e={}))[n]=t[n]);return e},dE=(t,e)=>{const n={};for(const r in t)(!fu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function pE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?If(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Pa(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?If(r,o,l):!0:!!o;return!1}function If(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Pa(n,i))return!0}return!1}function gE({vnode:t,parent:e},n){if(n)for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const mE=Symbol.for("v-ndc"),_E=t=>t.__isSuspense;function yE(t,e){e&&e.pendingBranch?J(t)?e.effects.push(...t):e.effects.push(t):cE(t)}const vE=Symbol.for("v-scx"),wE=()=>vt(vE);function EE(t,e){return Pu(t,null,e)}const ao={};function jt(t,e,n){return Pu(t,e,n)}function Pu(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Re){if(e&&i){const L=e;e=(...ne)=>{L(...ne),F()}}const c=et,l=L=>r===!0?L:lr(L,r===!1?1:void 0);let u,h=!1,f=!1;if(xe(t)?(u=()=>t.value,h=Bo(t)):_n(t)?(u=()=>l(t),h=!0):J(t)?(f=!0,h=t.some(L=>_n(L)||Bo(L)),u=()=>t.map(L=>{if(xe(L))return L.value;if(_n(L))return l(L);if(se(L))return $n(L,c,2)})):se(t)?e?u=()=>$n(t,c,2):u=()=>(d&&d(),$t(t,c,3,[p])):u=Vt,e&&r){const L=u;u=()=>lr(L())}let d,p=L=>{d=P.onStop=()=>{$n(L,c,4),d=P.onStop=void 0}},_;if(Oa)if(p=Vt,e?n&&$t(e,c,3,[u(),f?[]:void 0,p]):u(),s==="sync"){const L=wE();_=L.__watcherHandles||(L.__watcherHandles=[])}else return Vt;let y=f?new Array(t.length).fill(ao):ao;const w=()=>{if(!(!P.active||!P.dirty))if(e){const L=P.run();(r||h||(f?L.some((ne,j)=>qn(ne,y[j])):qn(L,y)))&&(d&&d(),$t(e,c,3,[L,y===ao?void 0:f&&y[0]===ao?[]:y,p]),y=L)}else P.run()};w.allowRecurse=!!e;let T;s==="sync"?T=w:s==="post"?T=()=>Et(w,c&&c.suspense):(w.pre=!0,c&&(w.id=c.uid),T=()=>bu(w));const P=new yu(u,Vt,T),O=_u(),F=()=>{P.stop(),O&&du(O.effects,P)};return e?n?w():y=P.run():s==="post"?Et(P.run.bind(P),c&&c.suspense):P.run(),_&&_.push(F),F}function TE(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?Wg(r,t):()=>r[t]:t.bind(r,r);let i;se(e)?i=e:(i=e.handler,n=e);const o=et;os(this);const a=Pu(s,i.bind(r),n);return o?os(o):gr(),a}function Wg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function lr(t,e,n=0,r){if(!Se(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),xe(t))lr(t.value,e,n,r);else if(J(t))for(let s=0;s<t.length;s++)lr(t[s],e,n,r);else if(hg(t)||Qr(t))t.forEach(s=>{lr(s,e,n,r)});else if(pg(t))for(const s in t)lr(t[s],e,n,r);return t}function Af(t,e){const n=St;if(n===null)return t;const r=xa(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Re]=e[i];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&lr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function sr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Cr(),$t(c,n,8,[t.el,a,t,e]),Sr())}}/*! #__NO_SIDE_EFFECTS__ */function Xn(t,e){return se(t)?st({name:t.name},e,{setup:t}):t}const Ro=t=>!!t.type.__asyncLoader,zg=t=>t.type.__isKeepAlive;function Kg(t,e){Qg(t,"a",e)}function Gg(t,e){Qg(t,"da",e)}function Qg(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ca(e,r,n),n){let s=n.parent;for(;s&&s.parent;)zg(s.parent.vnode)&&IE(r,e,n,s),s=s.parent}}function IE(t,e,n,r){const s=Ca(e,t,r,!0);Xg(()=>{du(r[e],s)},n)}function Ca(t,e,n=et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Cr(),os(n);const a=$t(e,n,t,o);return gr(),Sr(),a});return r?s.unshift(i):s.push(i),i}}const In=t=>(e,n=et)=>(!Oa||t==="sp")&&Ca(t,(...r)=>e(...r),n),Yg=In("bm"),Di=In("m"),AE=In("bu"),RE=In("u"),Cu=In("bum"),Xg=In("um"),bE=In("sp"),PE=In("rtg"),CE=In("rtc");function SE(t,e=et){Ca("ec",t,e)}function kE(t,e,n,r){let s;const i=n&&n[r];if(J(t)||We(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const dl=t=>t?um(t)?xa(t)||t.proxy:dl(t.parent):null,Ks=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>dl(t.parent),$root:t=>dl(t.root),$emit:t=>t.emit,$options:t=>Su(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,bu(t.update)}),$nextTick:t=>t.n||(t.n=ss.bind(t.proxy)),$watch:t=>TE.bind(t)}),bc=(t,e)=>t!==Re&&!t.__isScriptSetup&&pe(t,e),OE={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(bc(r,e))return o[e]=1,r[e];if(s!==Re&&pe(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&pe(l,e))return o[e]=3,i[e];if(n!==Re&&pe(n,e))return o[e]=4,n[e];pl&&(o[e]=0)}}const u=Ks[e];let h,f;if(u)return e==="$attrs"&&It(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Re&&pe(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,pe(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return bc(s,e)?(s[e]=n,!0):r!==Re&&pe(r,e)?(r[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Re&&pe(t,o)||bc(e,o)||(a=i[0])&&pe(a,o)||pe(r,o)||pe(Ks,o)||pe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Rf(t){return J(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let pl=!0;function xE(t){const e=Su(t),n=t.proxy,r=t.ctx;pl=!1,e.beforeCreate&&bf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:_,deactivated:y,beforeDestroy:w,beforeUnmount:T,destroyed:P,unmounted:O,render:F,renderTracked:L,renderTriggered:ne,errorCaptured:j,serverPrefetch:H,expose:ye,inheritAttrs:ke,components:Ue,directives:Xe,filters:xt}=e;if(l&&DE(l,r,null),o)for(const fe in o){const le=o[fe];se(le)&&(r[fe]=le.bind(n))}if(s){const fe=s.call(n,n);Se(fe)&&(t.data=Yn(fe))}if(pl=!0,i)for(const fe in i){const le=i[fe],At=se(le)?le.bind(n,n):se(le.get)?le.get.bind(n,n):Vt,_e=!se(le)&&se(le.set)?le.set.bind(n):Vt,Fe=ie({get:At,set:_e});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:Ae=>Fe.value=Ae})}if(a)for(const fe in a)Jg(a[fe],r,n,fe);if(c){const fe=se(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(le=>{Xr(le,fe[le])})}u&&bf(u,t,"c");function oe(fe,le){J(le)?le.forEach(At=>fe(At.bind(n))):le&&fe(le.bind(n))}if(oe(Yg,h),oe(Di,f),oe(AE,d),oe(RE,p),oe(Kg,_),oe(Gg,y),oe(SE,j),oe(CE,L),oe(PE,ne),oe(Cu,T),oe(Xg,O),oe(bE,H),J(ye))if(ye.length){const fe=t.exposed||(t.exposed={});ye.forEach(le=>{Object.defineProperty(fe,le,{get:()=>n[le],set:At=>n[le]=At})})}else t.exposed||(t.exposed={});F&&t.render===Vt&&(t.render=F),ke!=null&&(t.inheritAttrs=ke),Ue&&(t.components=Ue),Xe&&(t.directives=Xe)}function DE(t,e,n=Vt){J(t)&&(t=gl(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=vt(s.from||r,s.default,!0):i=vt(s.from||r):i=vt(s),xe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function bf(t,e,n){$t(J(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jg(t,e,n,r){const s=r.includes(".")?Wg(n,r):()=>n[r];if(We(t)){const i=e[t];se(i)&&jt(s,i)}else if(se(t))jt(s,t.bind(n));else if(Se(t))if(J(t))t.forEach(i=>Jg(i,e,n,r));else{const i=se(t.handler)?t.handler.bind(n):e[t.handler];se(i)&&jt(s,i,t)}}function Su(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>qo(c,l,o,!0)),qo(c,e,o)),Se(e)&&i.set(e,c),c}function qo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&qo(t,i,n,!0),s&&s.forEach(o=>qo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=NE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const NE={data:Pf,props:Cf,emits:Cf,methods:Us,computed:Us,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Us,directives:Us,watch:LE,provide:Pf,inject:VE};function Pf(t,e){return e?t?function(){return st(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function VE(t,e){return Us(gl(t),gl(e))}function gl(t){if(J(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Us(t,e){return t?st(Object.create(null),t,e):e}function Cf(t,e){return t?J(t)&&J(e)?[...new Set([...t,...e])]:st(Object.create(null),Rf(t),Rf(e??{})):e}function LE(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function Zg(){return{app:null,config:{isNativeTag:vw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ME=0;function UE(t,e){return function(r,s=null){se(r)||(r=st({},r)),s!=null&&!Se(s)&&(s=null);const i=Zg(),o=new WeakSet;let a=!1;const c=i.app={_uid:ME++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:dm,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&se(l.install)?(o.add(l),l.install(c,...u)):se(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=ut(r,s);return f.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,xa(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){li=c;try{return l()}finally{li=null}}};return c}}let li=null;function Xr(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function vt(t,e,n=!1){const r=et||St;if(r||li){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:li._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&se(e)?e.call(r&&r.proxy):e}}function FE(){return!!(et||St||li)}function $E(t,e,n,r=!1){const s={},i={};Fo(i,ka,1),t.propsDefaults=Object.create(null),em(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:xg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function jE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=me(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Pa(t.emitsOptions,f))continue;const d=e[f];if(c)if(pe(i,f))d!==i[f]&&(i[f]=d,l=!0);else{const p=rs(f);s[p]=ml(c,a,p,d,t,!1)}else d!==i[f]&&(i[f]=d,l=!0)}}}else{em(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!pe(e,h)&&((u=vs(h))===h||!pe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ml(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!pe(e,h))&&(delete i[h],l=!0)}l&&mn(t,"set","$attrs")}function em(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Io(c))continue;const l=e[c];let u;s&&pe(s,u=rs(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Pa(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=me(n),l=a||Re;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ml(s,c,h,l[h],t,!pe(l,h))}}return o}function ml(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=pe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&se(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(os(s),r=l[n]=c.call(null,e),gr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===vs(n))&&(r=!0))}return r}function tm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!se(t)){const u=h=>{c=!0;const[f,d]=tm(h,e,!0);st(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Se(t)&&r.set(t,Gr),Gr;if(J(i))for(let u=0;u<i.length;u++){const h=rs(i[u]);Sf(h)&&(o[h]=Re)}else if(i)for(const u in i){const h=rs(u);if(Sf(h)){const f=i[u],d=o[h]=J(f)||se(f)?{type:f}:st({},f);if(d){const p=xf(Boolean,d.type),_=xf(String,d.type);d[0]=p>-1,d[1]=_<0||p<_,(p>-1||pe(d,"default"))&&a.push(h)}}}const l=[o,a];return Se(t)&&r.set(t,l),l}function Sf(t){return t[0]!=="$"}function kf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Of(t,e){return kf(t)===kf(e)}function xf(t,e){return J(e)?e.findIndex(n=>Of(n,t)):se(e)&&Of(e,t)?0:-1}const nm=t=>t[0]==="_"||t==="$stable",ku=t=>J(t)?t.map(Yt):[Yt(t)],BE=(t,e,n)=>{if(e._n)return e;const r=hE((...s)=>ku(e(...s)),n);return r._c=!1,r},rm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(nm(s))continue;const i=t[s];if(se(i))e[s]=BE(s,i,r);else if(i!=null){const o=ku(i);e[s]=()=>o}}},sm=(t,e)=>{const n=ku(e);t.slots.default=()=>n},HE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=me(e),Fo(e,"_",n)):rm(e,t.slots={})}else t.slots={},e&&sm(t,e);Fo(t.slots,ka,1)},qE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(st(s,e),!n&&a===1&&delete s._):(i=!e.$stable,rm(e,s)),o=e}else e&&(sm(t,e),o={default:1});if(i)for(const a in s)!nm(a)&&o[a]==null&&delete s[a]};function _l(t,e,n,r,s=!1){if(J(t)){t.forEach((f,d)=>_l(f,e&&(J(e)?e[d]:e),n,r,s));return}if(Ro(r)&&!s)return;const i=r.shapeFlag&4?xa(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(We(l)?(u[l]=null,pe(h,l)&&(h[l]=null)):xe(l)&&(l.value=null)),se(c))$n(c,a,12,[o,u]);else{const f=We(c),d=xe(c);if(f||d){const p=()=>{if(t.f){const _=f?pe(h,c)?h[c]:u[c]:c.value;s?J(_)&&du(_,i):J(_)?_.includes(i)||_.push(i):f?(u[c]=[i],pe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,pe(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,Et(p,n)):p()}}}const Et=yE;function WE(t){return zE(t)}function zE(t,e){const n=mg();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Vt,insertStaticContent:p}=t,_=(g,m,v,E=null,A=null,b=null,N=void 0,k=null,D=!!m.dynamicChildren)=>{if(g===m)return;g&&!Ss(g,m)&&(E=I(g),Ae(g,A,b,!0),g=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:S,ref:U,shapeFlag:G}=m;switch(S){case Sa:y(g,m,v,E);break;case wr:w(g,m,v,E);break;case bo:g==null&&T(m,v,E,N);break;case Ut:Ue(g,m,v,E,A,b,N,k,D);break;default:G&1?F(g,m,v,E,A,b,N,k,D):G&6?Xe(g,m,v,E,A,b,N,k,D):(G&64||G&128)&&S.process(g,m,v,E,A,b,N,k,D,x)}U!=null&&A&&_l(U,g&&g.ref,b,m||g,!m)},y=(g,m,v,E)=>{if(g==null)r(m.el=a(m.children),v,E);else{const A=m.el=g.el;m.children!==g.children&&l(A,m.children)}},w=(g,m,v,E)=>{g==null?r(m.el=c(m.children||""),v,E):m.el=g.el},T=(g,m,v,E)=>{[g.el,g.anchor]=p(g.children,m,v,E,g.el,g.anchor)},P=({el:g,anchor:m},v,E)=>{let A;for(;g&&g!==m;)A=f(g),r(g,v,E),g=A;r(m,v,E)},O=({el:g,anchor:m})=>{let v;for(;g&&g!==m;)v=f(g),s(g),g=v;s(m)},F=(g,m,v,E,A,b,N,k,D)=>{m.type==="svg"?N="svg":m.type==="math"&&(N="mathml"),g==null?L(m,v,E,A,b,N,k,D):H(g,m,A,b,N,k,D)},L=(g,m,v,E,A,b,N,k)=>{let D,S;const{props:U,shapeFlag:G,transition:W,dirs:ee}=g;if(D=g.el=o(g.type,b,U&&U.is,U),G&8?u(D,g.children):G&16&&j(g.children,D,null,E,A,Pc(g,b),N,k),ee&&sr(g,null,E,"created"),ne(D,g,g.scopeId,N,E),U){for(const Te in U)Te!=="value"&&!Io(Te)&&i(D,Te,null,U[Te],b,g.children,E,A,$e);"value"in U&&i(D,"value",null,U.value,b),(S=U.onVnodeBeforeMount)&&Qt(S,E,g)}ee&&sr(g,null,E,"beforeMount");const ae=KE(A,W);ae&&W.beforeEnter(D),r(D,m,v),((S=U&&U.onVnodeMounted)||ae||ee)&&Et(()=>{S&&Qt(S,E,g),ae&&W.enter(D),ee&&sr(g,null,E,"mounted")},A)},ne=(g,m,v,E,A)=>{if(v&&d(g,v),E)for(let b=0;b<E.length;b++)d(g,E[b]);if(A){let b=A.subTree;if(m===b){const N=A.vnode;ne(g,N,N.scopeId,N.slotScopeIds,A.parent)}}},j=(g,m,v,E,A,b,N,k,D=0)=>{for(let S=D;S<g.length;S++){const U=g[S]=k?Sn(g[S]):Yt(g[S]);_(null,U,m,v,E,A,b,N,k)}},H=(g,m,v,E,A,b,N)=>{const k=m.el=g.el;let{patchFlag:D,dynamicChildren:S,dirs:U}=m;D|=g.patchFlag&16;const G=g.props||Re,W=m.props||Re;let ee;if(v&&ir(v,!1),(ee=W.onVnodeBeforeUpdate)&&Qt(ee,v,m,g),U&&sr(m,g,v,"beforeUpdate"),v&&ir(v,!0),S?ye(g.dynamicChildren,S,k,v,E,Pc(m,A),b):N||le(g,m,k,null,v,E,Pc(m,A),b,!1),D>0){if(D&16)ke(k,m,G,W,v,E,A);else if(D&2&&G.class!==W.class&&i(k,"class",null,W.class,A),D&4&&i(k,"style",G.style,W.style,A),D&8){const ae=m.dynamicProps;for(let Te=0;Te<ae.length;Te++){const Ce=ae[Te],Ke=G[Ce],Mt=W[Ce];(Mt!==Ke||Ce==="value")&&i(k,Ce,Ke,Mt,A,g.children,v,E,$e)}}D&1&&g.children!==m.children&&u(k,m.children)}else!N&&S==null&&ke(k,m,G,W,v,E,A);((ee=W.onVnodeUpdated)||U)&&Et(()=>{ee&&Qt(ee,v,m,g),U&&sr(m,g,v,"updated")},E)},ye=(g,m,v,E,A,b,N)=>{for(let k=0;k<m.length;k++){const D=g[k],S=m[k],U=D.el&&(D.type===Ut||!Ss(D,S)||D.shapeFlag&70)?h(D.el):v;_(D,S,U,null,E,A,b,N,!0)}},ke=(g,m,v,E,A,b,N)=>{if(v!==E){if(v!==Re)for(const k in v)!Io(k)&&!(k in E)&&i(g,k,v[k],null,N,m.children,A,b,$e);for(const k in E){if(Io(k))continue;const D=E[k],S=v[k];D!==S&&k!=="value"&&i(g,k,S,D,N,m.children,A,b,$e)}"value"in E&&i(g,"value",v.value,E.value,N)}},Ue=(g,m,v,E,A,b,N,k,D)=>{const S=m.el=g?g.el:a(""),U=m.anchor=g?g.anchor:a("");let{patchFlag:G,dynamicChildren:W,slotScopeIds:ee}=m;ee&&(k=k?k.concat(ee):ee),g==null?(r(S,v,E),r(U,v,E),j(m.children,v,U,A,b,N,k,D)):G>0&&G&64&&W&&g.dynamicChildren?(ye(g.dynamicChildren,W,v,A,b,N,k),(m.key!=null||A&&m===A.subTree)&&im(g,m,!0)):le(g,m,v,U,A,b,N,k,D)},Xe=(g,m,v,E,A,b,N,k,D)=>{m.slotScopeIds=k,g==null?m.shapeFlag&512?A.ctx.activate(m,v,E,N,D):xt(m,v,E,A,b,N,D):ze(g,m,D)},xt=(g,m,v,E,A,b,N)=>{const k=g.component=r0(g,E,A);if(zg(g)&&(k.ctx.renderer=x),s0(k),k.asyncDep){if(A&&A.registerDep(k,oe),!g.el){const D=k.subTree=ut(wr);w(null,D,m,v)}}else oe(k,g,m,v,A,b,N)},ze=(g,m,v)=>{const E=m.component=g.component;if(pE(g,m,v))if(E.asyncDep&&!E.asyncResolved){fe(E,m,v);return}else E.next=m,aE(E.update),E.effect.dirty=!0,E.update();else m.el=g.el,E.vnode=m},oe=(g,m,v,E,A,b,N)=>{const k=()=>{if(g.isMounted){let{next:U,bu:G,u:W,parent:ee,vnode:ae}=g;{const Lr=om(g);if(Lr){U&&(U.el=ae.el,fe(g,U,N)),Lr.asyncDep.then(()=>{g.isUnmounted||k()});return}}let Te=U,Ce;ir(g,!1),U?(U.el=ae.el,fe(g,U,N)):U=ae,G&&Ao(G),(Ce=U.props&&U.props.onVnodeBeforeUpdate)&&Qt(Ce,ee,U,ae),ir(g,!0);const Ke=Rc(g),Mt=g.subTree;g.subTree=Ke,_(Mt,Ke,h(Mt.el),I(Mt),g,A,b),U.el=Ke.el,Te===null&&gE(g,Ke.el),W&&Et(W,A),(Ce=U.props&&U.props.onVnodeUpdated)&&Et(()=>Qt(Ce,ee,U,ae),A)}else{let U;const{el:G,props:W}=m,{bm:ee,m:ae,parent:Te}=g,Ce=Ro(m);if(ir(g,!1),ee&&Ao(ee),!Ce&&(U=W&&W.onVnodeBeforeMount)&&Qt(U,Te,m),ir(g,!0),G&&de){const Ke=()=>{g.subTree=Rc(g),de(G,g.subTree,g,A,null)};Ce?m.type.__asyncLoader().then(()=>!g.isUnmounted&&Ke()):Ke()}else{const Ke=g.subTree=Rc(g);_(null,Ke,v,E,g,A,b),m.el=Ke.el}if(ae&&Et(ae,A),!Ce&&(U=W&&W.onVnodeMounted)){const Ke=m;Et(()=>Qt(U,Te,Ke),A)}(m.shapeFlag&256||Te&&Ro(Te.vnode)&&Te.vnode.shapeFlag&256)&&g.a&&Et(g.a,A),g.isMounted=!0,m=v=E=null}},D=g.effect=new yu(k,Vt,()=>bu(S),g.scope),S=g.update=()=>{D.dirty&&D.run()};S.id=g.uid,ir(g,!0),S()},fe=(g,m,v)=>{m.component=g;const E=g.vnode.props;g.vnode=m,g.next=null,jE(g,m.props,E,v),qE(g,m.children,v),Cr(),Tf(g),Sr()},le=(g,m,v,E,A,b,N,k,D=!1)=>{const S=g&&g.children,U=g?g.shapeFlag:0,G=m.children,{patchFlag:W,shapeFlag:ee}=m;if(W>0){if(W&128){_e(S,G,v,E,A,b,N,k,D);return}else if(W&256){At(S,G,v,E,A,b,N,k,D);return}}ee&8?(U&16&&$e(S,A,b),G!==S&&u(v,G)):U&16?ee&16?_e(S,G,v,E,A,b,N,k,D):$e(S,A,b,!0):(U&8&&u(v,""),ee&16&&j(G,v,E,A,b,N,k,D))},At=(g,m,v,E,A,b,N,k,D)=>{g=g||Gr,m=m||Gr;const S=g.length,U=m.length,G=Math.min(S,U);let W;for(W=0;W<G;W++){const ee=m[W]=D?Sn(m[W]):Yt(m[W]);_(g[W],ee,v,null,A,b,N,k,D)}S>U?$e(g,A,b,!0,!1,G):j(m,v,E,A,b,N,k,D,G)},_e=(g,m,v,E,A,b,N,k,D)=>{let S=0;const U=m.length;let G=g.length-1,W=U-1;for(;S<=G&&S<=W;){const ee=g[S],ae=m[S]=D?Sn(m[S]):Yt(m[S]);if(Ss(ee,ae))_(ee,ae,v,null,A,b,N,k,D);else break;S++}for(;S<=G&&S<=W;){const ee=g[G],ae=m[W]=D?Sn(m[W]):Yt(m[W]);if(Ss(ee,ae))_(ee,ae,v,null,A,b,N,k,D);else break;G--,W--}if(S>G){if(S<=W){const ee=W+1,ae=ee<U?m[ee].el:E;for(;S<=W;)_(null,m[S]=D?Sn(m[S]):Yt(m[S]),v,ae,A,b,N,k,D),S++}}else if(S>W)for(;S<=G;)Ae(g[S],A,b,!0),S++;else{const ee=S,ae=S,Te=new Map;for(S=ae;S<=W;S++){const Rt=m[S]=D?Sn(m[S]):Yt(m[S]);Rt.key!=null&&Te.set(Rt.key,S)}let Ce,Ke=0;const Mt=W-ae+1;let Lr=!1,hf=0;const Cs=new Array(Mt);for(S=0;S<Mt;S++)Cs[S]=0;for(S=ee;S<=G;S++){const Rt=g[S];if(Ke>=Mt){Ae(Rt,A,b,!0);continue}let Gt;if(Rt.key!=null)Gt=Te.get(Rt.key);else for(Ce=ae;Ce<=W;Ce++)if(Cs[Ce-ae]===0&&Ss(Rt,m[Ce])){Gt=Ce;break}Gt===void 0?Ae(Rt,A,b,!0):(Cs[Gt-ae]=S+1,Gt>=hf?hf=Gt:Lr=!0,_(Rt,m[Gt],v,null,A,b,N,k,D),Ke++)}const ff=Lr?GE(Cs):Gr;for(Ce=ff.length-1,S=Mt-1;S>=0;S--){const Rt=ae+S,Gt=m[Rt],df=Rt+1<U?m[Rt+1].el:E;Cs[S]===0?_(null,Gt,v,df,A,b,N,k,D):Lr&&(Ce<0||S!==ff[Ce]?Fe(Gt,v,df,2):Ce--)}}},Fe=(g,m,v,E,A=null)=>{const{el:b,type:N,transition:k,children:D,shapeFlag:S}=g;if(S&6){Fe(g.component.subTree,m,v,E);return}if(S&128){g.suspense.move(m,v,E);return}if(S&64){N.move(g,m,v,x);return}if(N===Ut){r(b,m,v);for(let G=0;G<D.length;G++)Fe(D[G],m,v,E);r(g.anchor,m,v);return}if(N===bo){P(g,m,v);return}if(E!==2&&S&1&&k)if(E===0)k.beforeEnter(b),r(b,m,v),Et(()=>k.enter(b),A);else{const{leave:G,delayLeave:W,afterLeave:ee}=k,ae=()=>r(b,m,v),Te=()=>{G(b,()=>{ae(),ee&&ee()})};W?W(b,ae,Te):Te()}else r(b,m,v)},Ae=(g,m,v,E=!1,A=!1)=>{const{type:b,props:N,ref:k,children:D,dynamicChildren:S,shapeFlag:U,patchFlag:G,dirs:W}=g;if(k!=null&&_l(k,null,v,g,!0),U&256){m.ctx.deactivate(g);return}const ee=U&1&&W,ae=!Ro(g);let Te;if(ae&&(Te=N&&N.onVnodeBeforeUnmount)&&Qt(Te,m,g),U&6)rr(g.component,v,E);else{if(U&128){g.suspense.unmount(v,E);return}ee&&sr(g,null,m,"beforeUnmount"),U&64?g.type.remove(g,m,v,A,x,E):S&&(b!==Ut||G>0&&G&64)?$e(S,m,v,!1,!0):(b===Ut&&G&384||!A&&U&16)&&$e(D,m,v),E&&Kt(g)}(ae&&(Te=N&&N.onVnodeUnmounted)||ee)&&Et(()=>{Te&&Qt(Te,m,g),ee&&sr(g,null,m,"unmounted")},v)},Kt=g=>{const{type:m,el:v,anchor:E,transition:A}=g;if(m===Ut){un(v,E);return}if(m===bo){O(g);return}const b=()=>{s(v),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(g.shapeFlag&1&&A&&!A.persisted){const{leave:N,delayLeave:k}=A,D=()=>N(v,b);k?k(g.el,b,D):D()}else b()},un=(g,m)=>{let v;for(;g!==m;)v=f(g),s(g),g=v;s(m)},rr=(g,m,v)=>{const{bum:E,scope:A,update:b,subTree:N,um:k}=g;E&&Ao(E),A.stop(),b&&(b.active=!1,Ae(N,g,m,v)),k&&Et(k,m),Et(()=>{g.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},$e=(g,m,v,E=!1,A=!1,b=0)=>{for(let N=b;N<g.length;N++)Ae(g[N],m,v,E,A)},I=g=>g.shapeFlag&6?I(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),M=(g,m,v)=>{g==null?m._vnode&&Ae(m._vnode,null,null,!0):_(m._vnode||null,g,m,null,null,null,v),Tf(),jg(),m._vnode=g},x={p:_,um:Ae,m:Fe,r:Kt,mt:xt,mc:j,pc:le,pbc:ye,n:I,o:t};let q,de;return e&&([q,de]=e(x)),{render:M,hydrate:q,createApp:UE(M,q)}}function Pc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ir({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function KE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function im(t,e,n=!1){const r=t.children,s=e.children;if(J(r)&&J(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Sn(s[i]),a.el=o.el),n||im(o,a)),a.type===Sa&&(a.el=o.el)}}function GE(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function om(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:om(e)}const QE=t=>t.__isTeleport,Ut=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),wr=Symbol.for("v-cmt"),bo=Symbol.for("v-stc"),Gs=[];let Ft=null;function at(t=!1){Gs.push(Ft=t?null:[])}function YE(){Gs.pop(),Ft=Gs[Gs.length-1]||null}let ui=1;function Df(t){ui+=t}function am(t){return t.dynamicChildren=ui>0?Ft||Gr:null,YE(),ui>0&&Ft&&Ft.push(t),t}function Ct(t,e,n,r,s,i){return am(Q(t,e,n,r,s,i,!0))}function Ou(t,e,n,r,s){return am(ut(t,e,n,r,s,!0))}function yl(t){return t?t.__v_isVNode===!0:!1}function Ss(t,e){return t.type===e.type&&t.key===e.key}const ka="__vInternal",cm=({key:t})=>t??null,Po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||xe(t)||se(t)?{i:St,r:t,k:e,f:!!n}:t:null);function Q(t,e=null,n=null,r=0,s=null,i=t===Ut?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cm(e),ref:e&&Po(e),scopeId:qg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:St};return a?(xu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=We(n)?8:16),ui>0&&!o&&Ft&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ft.push(c),c}const ut=XE;function XE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===mE)&&(t=wr),yl(t)){const a=is(t,e,!0);return n&&xu(a,n),ui>0&&!i&&Ft&&(a.shapeFlag&6?Ft[Ft.indexOf(t)]=a:Ft.push(a)),a.patchFlag|=-2,a}if(c0(t)&&(t=t.__vccOpts),e){e=JE(e);let{class:a,style:c}=e;a&&!We(a)&&(e.class=mu(a)),Se(c)&&(Ng(c)&&!J(c)&&(c=st({},c)),e.style=gu(c))}const o=We(t)?1:_E(t)?128:QE(t)?64:Se(t)?4:se(t)?2:0;return Q(t,e,n,r,s,o,i,!0)}function JE(t){return t?Ng(t)||ka in t?st({},t):t:null}function is(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?e0(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&cm(a),ref:e&&e.ref?n&&s?J(s)?s.concat(Po(e)):[s,Po(e)]:Po(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ut?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&is(t.ssContent),ssFallback:t.ssFallback&&is(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function vl(t=" ",e=0){return ut(Sa,null,t,e)}function ZE(t,e){const n=ut(bo,null,t);return n.staticCount=e,n}function hi(t="",e=!1){return e?(at(),Ou(wr,null,t)):ut(wr,null,t)}function Yt(t){return t==null||typeof t=="boolean"?ut(wr):J(t)?ut(Ut,null,t.slice()):typeof t=="object"?Sn(t):ut(Sa,null,String(t))}function Sn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:is(t)}function xu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(J(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),xu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ka in e)?e._ctx=St:s===3&&St&&(St.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:St},n=32):(e=String(e),r&64?(n=16,e=[vl(e)]):n=8);t.children=e,t.shapeFlag|=n}function e0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=mu([e.class,r.class]));else if(s==="style")e.style=gu([e.style,r.style]);else if(Ea(s)){const i=e[s],o=r[s];o&&i!==o&&!(J(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Qt(t,e,n,r=null){$t(t,e,7,[n,r])}const t0=Zg();let n0=0;function r0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||t0,i={uid:n0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new vg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tm(r,s),emitsOptions:Hg(r,s),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=uE.bind(null,i),t.ce&&t.ce(i),i}let et=null;const lm=()=>et||St;let Du,wl;{const t=mg(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Du=e("__VUE_INSTANCE_SETTERS__",n=>et=n),wl=e("__VUE_SSR_SETTERS__",n=>Oa=n)}const os=t=>{Du(t),t.scope.on()},gr=()=>{et&&et.scope.off(),Du(null)};function um(t){return t.vnode.shapeFlag&4}let Oa=!1;function s0(t,e=!1){e&&wl(e);const{props:n,children:r}=t.vnode,s=um(t);$E(t,n,s,e),HE(t,r);const i=s?i0(t,e):void 0;return e&&wl(!1),i}function i0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ra(new Proxy(t.ctx,OE));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?a0(t):null;os(t),Cr();const i=$n(r,t,0,[t.props,s]);if(Sr(),gr(),fg(i)){if(i.then(gr,gr),e)return i.then(o=>{Nf(t,o,e)}).catch(o=>{ba(o,t,0)});t.asyncDep=i}else Nf(t,i,e)}else hm(t,e)}function Nf(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=Ug(e)),hm(t,n)}let Vf;function hm(t,e,n){const r=t.type;if(!t.render){if(!e&&Vf&&!r.render){const s=r.template||Su(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=st(st({isCustomElement:i,delimiters:a},o),c);r.render=Vf(s,l)}}t.render=r.render||Vt}{os(t),Cr();try{xE(t)}finally{Sr(),gr()}}}function o0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return It(t,"get","$attrs"),e[n]}}))}function a0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return o0(t)},slots:t.slots,emit:t.emit,expose:e}}function xa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ug(Ra(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ks)return Ks[n](t)},has(e,n){return n in e||n in Ks}}))}function c0(t){return se(t)&&"__vccOpts"in t}const ie=(t,e)=>Jw(t,e,Oa);function fm(t,e,n){const r=arguments.length;return r===2?Se(e)&&!J(e)?yl(e)?ut(t,null,[e]):ut(t,e):ut(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&yl(n)&&(n=[n]),ut(t,e,n))}const dm="3.4.5",l0="http://www.w3.org/2000/svg",u0="http://www.w3.org/1998/Math/MathML",kn=typeof document<"u"?document:null,Lf=kn&&kn.createElement("template"),h0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?kn.createElementNS(l0,t):e==="mathml"?kn.createElementNS(u0,t):kn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>kn.createTextNode(t),createComment:t=>kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Lf.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Lf.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},f0=Symbol("_vtc");function d0(t,e,n){const r=t[f0];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const p0=Symbol("_vod"),g0=Symbol("");function m0(t,e,n){const r=t.style,s=We(n);if(n&&!s){if(e&&!We(e))for(const i in e)n[i]==null&&El(r,i,"");for(const i in n)El(r,i,n[i])}else{const i=r.display;if(s){if(e!==n){const o=r[g0];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");p0 in t&&(r.display=i)}}const Mf=/\s*!important$/;function El(t,e,n){if(J(n))n.forEach(r=>El(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=_0(t,e);Mf.test(n)?t.setProperty(vs(r),n.replace(Mf,""),"important"):t[r]=n}}const Uf=["Webkit","Moz","ms"],Cc={};function _0(t,e){const n=Cc[e];if(n)return n;let r=rs(e);if(r!=="filter"&&r in t)return Cc[e]=r;r=gg(r);for(let s=0;s<Uf.length;s++){const i=Uf[s]+r;if(i in t)return Cc[e]=i}return e}const Ff="http://www.w3.org/1999/xlink";function y0(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ff,e.slice(6,e.length)):t.setAttributeNS(Ff,e,n);else{const i=Sw(e);n==null||i&&!_g(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function v0(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=_g(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function jr(t,e,n,r){t.addEventListener(e,n,r)}function w0(t,e,n,r){t.removeEventListener(e,n,r)}const $f=Symbol("_vei");function E0(t,e,n,r,s=null){const i=t[$f]||(t[$f]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=T0(e);if(r){const l=i[e]=R0(r,s);jr(t,a,l,c)}else o&&(w0(t,a,o,c),i[e]=void 0)}}const jf=/(?:Once|Passive|Capture)$/;function T0(t){let e;if(jf.test(t)){e={};let r;for(;r=t.match(jf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vs(t.slice(2)),e]}let Sc=0;const I0=Promise.resolve(),A0=()=>Sc||(I0.then(()=>Sc=0),Sc=Date.now());function R0(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$t(b0(r,n.value),e,5,[r])};return n.value=t,n.attached=A0(),n}function b0(t,e){if(J(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Bf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,P0=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?d0(t,r,l):e==="style"?m0(t,n,r):Ea(e)?fu(e)||E0(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):C0(t,e,r,l))?v0(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),y0(t,e,r,l))};function C0(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Bf(e)&&se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Bf(e)&&We(n)?!1:e in t}const Hf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return J(e)?n=>Ao(e,n):e};function S0(t){t.target.composing=!0}function qf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const kc=Symbol("_assign"),Wf={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[kc]=Hf(s);const i=r||s.props&&s.props.type==="number";jr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=al(a)),t[kc](a)}),n&&jr(t,"change",()=>{t.value=t.value.trim()}),e||(jr(t,"compositionstart",S0),jr(t,"compositionend",qf),jr(t,"change",qf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[kc]=Hf(i),t.composing)return;const o=s||t.type==="number"?al(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},k0=["ctrl","shift","alt","meta"],O0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>k0.some(n=>t[`${n}Key`]&&!e.includes(n))},Fs=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=O0[e[o]];if(a&&a(s,e))return}return t(s,...i)})},x0=st({patchProp:P0},h0);let zf;function D0(){return zf||(zf=WE(x0))}const N0=(...t)=>{const e=D0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=L0(r);if(!s)return;const i=e._component;!se(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,V0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function V0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function L0(t){return We(t)?document.querySelector(t):t}var M0=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let pm;const Da=t=>pm=t,gm=Symbol();function Tl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Qs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Qs||(Qs={}));function U0(){const t=wg(!0),e=t.run(()=>ge({}));let n=[],r=[];const s=Ra({install(i){Da(s),s._a=i,i.provide(gm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!M0?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const mm=()=>{};function Kf(t,e,n,r=mm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&_u()&&Ow(s),s}function Mr(t,...e){t.slice().forEach(n=>{n(...e)})}const F0=t=>t();function Il(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Tl(s)&&Tl(r)&&t.hasOwnProperty(n)&&!xe(r)&&!_n(r)?t[n]=Il(s,r):t[n]=r}return t}const $0=Symbol();function j0(t){return!Tl(t)||!t.hasOwnProperty($0)}const{assign:Cn}=Object;function B0(t){return!!(xe(t)&&t.effect)}function H0(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=nE(n.state.value[t]);return Cn(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Ra(ie(()=>{Da(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return c=_m(t,l,e,n,r,!0),c}function _m(t,e,n={},r,s,i){let o;const a=Cn({actions:{}},n),c={deep:!0};let l,u,h=[],f=[],d;const p=r.state.value[t];!i&&!p&&(r.state.value[t]={}),ge({});let _;function y(j){let H;l=u=!1,typeof j=="function"?(j(r.state.value[t]),H={type:Qs.patchFunction,storeId:t,events:d}):(Il(r.state.value[t],j),H={type:Qs.patchObject,payload:j,storeId:t,events:d});const ye=_=Symbol();ss().then(()=>{_===ye&&(l=!0)}),u=!0,Mr(h,H,r.state.value[t])}const w=i?function(){const{state:H}=n,ye=H?H():{};this.$patch(ke=>{Cn(ke,ye)})}:mm;function T(){o.stop(),h=[],f=[],r._s.delete(t)}function P(j,H){return function(){Da(r);const ye=Array.from(arguments),ke=[],Ue=[];function Xe(oe){ke.push(oe)}function xt(oe){Ue.push(oe)}Mr(f,{args:ye,name:j,store:F,after:Xe,onError:xt});let ze;try{ze=H.apply(this&&this.$id===t?this:F,ye)}catch(oe){throw Mr(Ue,oe),oe}return ze instanceof Promise?ze.then(oe=>(Mr(ke,oe),oe)).catch(oe=>(Mr(Ue,oe),Promise.reject(oe))):(Mr(ke,ze),ze)}}const O={_p:r,$id:t,$onAction:Kf.bind(null,f),$patch:y,$reset:w,$subscribe(j,H={}){const ye=Kf(h,j,H.detached,()=>ke()),ke=o.run(()=>jt(()=>r.state.value[t],Ue=>{(H.flush==="sync"?u:l)&&j({storeId:t,type:Qs.direct,events:d},Ue)},Cn({},c,H)));return ye},$dispose:T},F=Yn(O);r._s.set(t,F);const ne=(r._a&&r._a.runWithContext||F0)(()=>r._e.run(()=>(o=wg()).run(e)));for(const j in ne){const H=ne[j];if(xe(H)&&!B0(H)||_n(H))i||(p&&j0(H)&&(xe(H)?H.value=p[j]:Il(H,p[j])),r.state.value[t][j]=H);else if(typeof H=="function"){const ye=P(j,H);ne[j]=ye,a.actions[j]=H}}return Cn(F,ne),Cn(me(F),ne),Object.defineProperty(F,"$state",{get:()=>r.state.value[t],set:j=>{y(H=>{Cn(H,j)})}}),r._p.forEach(j=>{Cn(F,o.run(()=>j({store:F,app:r._a,pinia:r,options:a})))}),p&&i&&n.hydrate&&n.hydrate(F.$state,p),l=!0,u=!0,F}function Nu(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=FE();return a=a||(l?vt(gm,null):null),a&&Da(a),a=pm,a._s.has(r)||(i?_m(r,e,s,a):H0(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Br=typeof window<"u";function q0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function Oc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Bt(s)?s.map(t):t(s)}return n}const Ys=()=>{},Bt=Array.isArray,W0=/\/$/,z0=t=>t.replace(W0,"");function xc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Y0(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function K0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Gf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function G0(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&as(e.matched[r],n.matched[s])&&ym(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function as(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ym(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Q0(t[n],e[n]))return!1;return!0}function Q0(t,e){return Bt(t)?Qf(t,e):Bt(e)?Qf(e,t):t===e}function Qf(t,e){return Bt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Y0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var fi;(function(t){t.pop="pop",t.push="push"})(fi||(fi={}));var Xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xs||(Xs={}));function X0(t){if(!t)if(Br){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),z0(t)}const J0=/^[^#]+#/;function Z0(t,e){return t.replace(J0,"#")+e}function eT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Na=()=>({left:window.pageXOffset,top:window.pageYOffset});function tT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=eT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Yf(t,e){return(history.state?history.state.position-e:-1)+t}const Al=new Map;function nT(t,e){Al.set(t,e)}function rT(t){const e=Al.get(t);return Al.delete(t),e}let sT=()=>location.protocol+"//"+location.host;function vm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Gf(c,"")}return Gf(n,t)+r+s}function iT(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=vm(t,location),p=n.value,_=e.value;let y=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}y=_?f.position-_.position:0}else r(d);s.forEach(w=>{w(n.value,p,{delta:y,type:fi.pop,direction:y?y>0?Xs.forward:Xs.back:Xs.unknown})})};function c(){o=n.value}function l(f){s.push(f);const d=()=>{const p=s.indexOf(f);p>-1&&s.splice(p,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(we({},f.state,{scroll:Na()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Xf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Na():null}}function oT(t){const{history:e,location:n}=window,r={value:vm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:sT()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=we({},e.state,Xf(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=we({},s.value,e.state,{forward:c,scroll:Na()});i(u.current,u,!0);const h=we({},Xf(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function aT(t){t=X0(t);const e=oT(t),n=iT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:Z0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function cT(t){return typeof t=="string"||t&&typeof t=="object"}function wm(t){return typeof t=="string"||typeof t=="symbol"}const Rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Em=Symbol("");var Jf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Jf||(Jf={}));function cs(t,e){return we(new Error,{type:t,[Em]:!0},e)}function hn(t,e){return t instanceof Error&&Em in t&&(e==null||!!(t.type&e))}const Zf="[^/]+?",lT={sensitive:!1,strict:!1,start:!0,end:!0},uT=/[.+*?^${}()[\]/\\]/g;function hT(t,e){const n=we({},lT,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(uT,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:_,optional:y,regexp:w}=f;i.push({name:p,repeatable:_,optional:y});const T=w||Zf;if(T!==Zf){d+=10;try{new RegExp(`(${T})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${p}" (${T}): `+O.message)}}let P=_?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;h||(P=y&&l.length<2?`(?:/${P})`:"/"+P),y&&(P+="?"),s+=P,d+=20,y&&(d+=-8),_&&(d+=-20),T===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=i[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:_,optional:y}=d,w=p in l?l[p]:"";if(Bt(w)&&!_)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const T=Bt(w)?w.join("/"):w;if(!T)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=T}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function fT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function dT(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=fT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ed(r))return 1;if(ed(s))return-1}return s.length-r.length}function ed(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const pT={type:0,value:""},gT=/[a-zA-Z0-9_]/;function mT(t){if(!t)return[[]];if(t==="/")return[[pT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:gT.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function _T(t,e,n){const r=hT(mT(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function yT(t,e){const n=[],r=new Map;e=rd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const d=!f,p=vT(u);p.aliasOf=f&&f.record;const _=rd(e,u),y=[p];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of P)y.push(we({},p,{components:f?f.record.components:p.components,path:O,aliasOf:f?f.record:p}))}let w,T;for(const P of y){const{path:O}=P;if(h&&O[0]!=="/"){const F=h.record.path,L=F[F.length-1]==="/"?"":"/";P.path=h.record.path+(O&&L+O)}if(w=_T(P,h,_),f?f.alias.push(w):(T=T||w,T!==w&&T.alias.push(w),d&&u.name&&!nd(w)&&o(u.name)),p.children){const F=p.children;for(let L=0;L<F.length;L++)i(F[L],w,f&&f.children[L])}f=f||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&c(w)}return T?()=>{o(T)}:Ys}function o(u){if(wm(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&dT(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Tm(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!nd(u)&&r.set(u.record.name,u)}function l(u,h){let f,d={},p,_;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw cs(1,{location:u});_=f.record.name,d=we(td(h.params,f.keys.filter(T=>!T.optional).map(T=>T.name)),u.params&&td(u.params,f.keys.map(T=>T.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(T=>T.re.test(p)),f&&(d=f.parse(p),_=f.record.name);else{if(f=h.name?r.get(h.name):n.find(T=>T.re.test(h.path)),!f)throw cs(1,{location:u,currentLocation:h});_=f.record.name,d=we({},h.params,u.params),p=f.stringify(d)}const y=[];let w=f;for(;w;)y.unshift(w.record),w=w.parent;return{name:_,path:p,params:d,matched:y,meta:ET(y)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function td(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function vT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:wT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function wT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function nd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ET(t){return t.reduce((e,n)=>we(e,n.meta),{})}function rd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Tm(t,e){return e.children.some(n=>n===t||Tm(t,n))}const Im=/#/g,TT=/&/g,IT=/\//g,AT=/=/g,RT=/\?/g,Am=/\+/g,bT=/%5B/g,PT=/%5D/g,Rm=/%5E/g,CT=/%60/g,bm=/%7B/g,ST=/%7C/g,Pm=/%7D/g,kT=/%20/g;function Vu(t){return encodeURI(""+t).replace(ST,"|").replace(bT,"[").replace(PT,"]")}function OT(t){return Vu(t).replace(bm,"{").replace(Pm,"}").replace(Rm,"^")}function Rl(t){return Vu(t).replace(Am,"%2B").replace(kT,"+").replace(Im,"%23").replace(TT,"%26").replace(CT,"`").replace(bm,"{").replace(Pm,"}").replace(Rm,"^")}function xT(t){return Rl(t).replace(AT,"%3D")}function DT(t){return Vu(t).replace(Im,"%23").replace(RT,"%3F")}function NT(t){return t==null?"":DT(t).replace(IT,"%2F")}function Wo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function VT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Am," "),o=i.indexOf("="),a=Wo(o<0?i:i.slice(0,o)),c=o<0?null:Wo(i.slice(o+1));if(a in e){let l=e[a];Bt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function sd(t){let e="";for(let n in t){const r=t[n];if(n=xT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bt(r)?r.map(i=>i&&Rl(i)):[r&&Rl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function LT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Bt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const MT=Symbol(""),id=Symbol(""),Va=Symbol(""),Lu=Symbol(""),bl=Symbol("");function ks(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function On(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(cs(4,{from:n,to:e})):h instanceof Error?a(h):cT(h)?a(cs(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Dc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(UT(a)){const l=(a.__vccOpts||a)[e];l&&s.push(On(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=q0(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&On(f,n,r,i,o)()}))}}return s}function UT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function od(t){const e=vt(Va),n=vt(Lu),r=ie(()=>e.resolve(K(t.to))),s=ie(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(as.bind(null,u));if(f>-1)return f;const d=ad(c[l-2]);return l>1&&ad(u)===d&&h[h.length-1].path!==d?h.findIndex(as.bind(null,c[l-2])):f}),i=ie(()=>s.value>-1&&BT(n.params,r.value.params)),o=ie(()=>s.value>-1&&s.value===n.matched.length-1&&ym(n.params,r.value.params));function a(c={}){return jT(c)?e[K(t.replace)?"replace":"push"](K(t.to)).catch(Ys):Promise.resolve()}return{route:r,href:ie(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const FT=Xn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:od,setup(t,{slots:e}){const n=Yn(od(t)),{options:r}=vt(Va),s=ie(()=>({[cd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[cd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:fm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),$T=FT;function jT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function BT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Bt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ad(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const cd=(t,e,n)=>t??e??n,HT=Xn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=vt(bl),s=ie(()=>t.route||r.value),i=vt(id,0),o=ie(()=>{let l=K(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=ie(()=>s.value.matched[o.value]);Xr(id,ie(()=>o.value+1)),Xr(MT,a),Xr(bl,s);const c=ge();return jt(()=>[c.value,a.value,t.name],([l,u,h],[f,d,p])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!as(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return ld(n.default,{Component:f,route:l});const d=h.props[u],p=d?d===!0?l.params:typeof d=="function"?d(l):d:null,y=fm(f,we({},p,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return ld(n.default,{Component:y,route:l})||y}}});function ld(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Mu=HT;function qT(t){const e=yT(t.routes,t),n=t.parseQuery||VT,r=t.stringifyQuery||sd,s=t.history,i=ks(),o=ks(),a=ks(),c=Zw(Rn);let l=Rn;Br&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Oc.bind(null,I=>""+I),h=Oc.bind(null,NT),f=Oc.bind(null,Wo);function d(I,M){let x,q;return wm(I)?(x=e.getRecordMatcher(I),q=M):q=I,e.addRoute(q,x)}function p(I){const M=e.getRecordMatcher(I);M&&e.removeRoute(M)}function _(){return e.getRoutes().map(I=>I.record)}function y(I){return!!e.getRecordMatcher(I)}function w(I,M){if(M=we({},M||c.value),typeof I=="string"){const v=xc(n,I,M.path),E=e.resolve({path:v.path},M),A=s.createHref(v.fullPath);return we(v,E,{params:f(E.params),hash:Wo(v.hash),redirectedFrom:void 0,href:A})}let x;if("path"in I)x=we({},I,{path:xc(n,I.path,M.path).path});else{const v=we({},I.params);for(const E in v)v[E]==null&&delete v[E];x=we({},I,{params:h(v)}),M.params=h(M.params)}const q=e.resolve(x,M),de=I.hash||"";q.params=u(f(q.params));const g=K0(r,we({},I,{hash:OT(de),path:q.path})),m=s.createHref(g);return we({fullPath:g,hash:de,query:r===sd?LT(I.query):I.query||{}},q,{redirectedFrom:void 0,href:m})}function T(I){return typeof I=="string"?xc(n,I,c.value.path):we({},I)}function P(I,M){if(l!==I)return cs(8,{from:M,to:I})}function O(I){return ne(I)}function F(I){return O(we(T(I),{replace:!0}))}function L(I){const M=I.matched[I.matched.length-1];if(M&&M.redirect){const{redirect:x}=M;let q=typeof x=="function"?x(I):x;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=T(q):{path:q},q.params={}),we({query:I.query,hash:I.hash,params:"path"in q?{}:I.params},q)}}function ne(I,M){const x=l=w(I),q=c.value,de=I.state,g=I.force,m=I.replace===!0,v=L(x);if(v)return ne(we(T(v),{state:typeof v=="object"?we({},de,v.state):de,force:g,replace:m}),M||x);const E=x;E.redirectedFrom=M;let A;return!g&&G0(r,q,x)&&(A=cs(16,{to:E,from:q}),Fe(q,q,!0,!1)),(A?Promise.resolve(A):ye(E,q)).catch(b=>hn(b)?hn(b,2)?b:_e(b):le(b,E,q)).then(b=>{if(b){if(hn(b,2))return ne(we({replace:m},T(b.to),{state:typeof b.to=="object"?we({},de,b.to.state):de,force:g}),M||E)}else b=Ue(E,q,!0,m,de);return ke(E,q,b),b})}function j(I,M){const x=P(I,M);return x?Promise.reject(x):Promise.resolve()}function H(I){const M=un.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(I):I()}function ye(I,M){let x;const[q,de,g]=WT(I,M);x=Dc(q.reverse(),"beforeRouteLeave",I,M);for(const v of q)v.leaveGuards.forEach(E=>{x.push(On(E,I,M))});const m=j.bind(null,I,M);return x.push(m),$e(x).then(()=>{x=[];for(const v of i.list())x.push(On(v,I,M));return x.push(m),$e(x)}).then(()=>{x=Dc(de,"beforeRouteUpdate",I,M);for(const v of de)v.updateGuards.forEach(E=>{x.push(On(E,I,M))});return x.push(m),$e(x)}).then(()=>{x=[];for(const v of g)if(v.beforeEnter)if(Bt(v.beforeEnter))for(const E of v.beforeEnter)x.push(On(E,I,M));else x.push(On(v.beforeEnter,I,M));return x.push(m),$e(x)}).then(()=>(I.matched.forEach(v=>v.enterCallbacks={}),x=Dc(g,"beforeRouteEnter",I,M),x.push(m),$e(x))).then(()=>{x=[];for(const v of o.list())x.push(On(v,I,M));return x.push(m),$e(x)}).catch(v=>hn(v,8)?v:Promise.reject(v))}function ke(I,M,x){a.list().forEach(q=>H(()=>q(I,M,x)))}function Ue(I,M,x,q,de){const g=P(I,M);if(g)return g;const m=M===Rn,v=Br?history.state:{};x&&(q||m?s.replace(I.fullPath,we({scroll:m&&v&&v.scroll},de)):s.push(I.fullPath,de)),c.value=I,Fe(I,M,x,m),_e()}let Xe;function xt(){Xe||(Xe=s.listen((I,M,x)=>{if(!rr.listening)return;const q=w(I),de=L(q);if(de){ne(we(de,{replace:!0}),q).catch(Ys);return}l=q;const g=c.value;Br&&nT(Yf(g.fullPath,x.delta),Na()),ye(q,g).catch(m=>hn(m,12)?m:hn(m,2)?(ne(m.to,q).then(v=>{hn(v,20)&&!x.delta&&x.type===fi.pop&&s.go(-1,!1)}).catch(Ys),Promise.reject()):(x.delta&&s.go(-x.delta,!1),le(m,q,g))).then(m=>{m=m||Ue(q,g,!1),m&&(x.delta&&!hn(m,8)?s.go(-x.delta,!1):x.type===fi.pop&&hn(m,20)&&s.go(-1,!1)),ke(q,g,m)}).catch(Ys)}))}let ze=ks(),oe=ks(),fe;function le(I,M,x){_e(I);const q=oe.list();return q.length?q.forEach(de=>de(I,M,x)):console.error(I),Promise.reject(I)}function At(){return fe&&c.value!==Rn?Promise.resolve():new Promise((I,M)=>{ze.add([I,M])})}function _e(I){return fe||(fe=!I,xt(),ze.list().forEach(([M,x])=>I?x(I):M()),ze.reset()),I}function Fe(I,M,x,q){const{scrollBehavior:de}=t;if(!Br||!de)return Promise.resolve();const g=!x&&rT(Yf(I.fullPath,0))||(q||!x)&&history.state&&history.state.scroll||null;return ss().then(()=>de(I,M,g)).then(m=>m&&tT(m)).catch(m=>le(m,I,M))}const Ae=I=>s.go(I);let Kt;const un=new Set,rr={currentRoute:c,listening:!0,addRoute:d,removeRoute:p,hasRoute:y,getRoutes:_,resolve:w,options:t,push:O,replace:F,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:oe.add,isReady:At,install(I){const M=this;I.component("RouterLink",$T),I.component("RouterView",Mu),I.config.globalProperties.$router=M,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>K(c)}),Br&&!Kt&&c.value===Rn&&(Kt=!0,O(s.location).catch(de=>{}));const x={};for(const de in Rn)Object.defineProperty(x,de,{get:()=>c.value[de],enumerable:!0});I.provide(Va,M),I.provide(Lu,xg(x)),I.provide(bl,c);const q=I.unmount;un.add(I),I.unmount=function(){un.delete(I),un.size<1&&(l=Rn,Xe&&Xe(),Xe=null,c.value=Rn,Kt=!1,fe=!1),q()}}};function $e(I){return I.reduce((M,x)=>M.then(()=>H(x)),Promise.resolve())}return rr}function WT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>as(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>as(l,c))||s.push(c))}return[n,r,s]}function Uu(){return vt(Va)}function Fu(){return vt(Lu)}var ud={};/**
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
 */const Cm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},zT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new KT;const f=i<<2|a>>4;if(r.push(f),l!==64){const d=a<<4&240|l>>2;if(r.push(d),h!==64){const p=l<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GT=function(t){const e=Cm(t);return Sm.encodeByteArray(e,!0)},zo=function(t){return GT(t).replace(/\./g,"")},km=function(t){try{return Sm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function QT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const YT=()=>QT().__FIREBASE_DEFAULTS__,XT=()=>{if(typeof process>"u"||typeof ud>"u")return;const t=ud.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},JT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&km(t[1]);return e&&JSON.parse(e)},$u=()=>{try{return YT()||XT()||JT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Om=t=>{var e,n;return(n=(e=$u())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xm=t=>{const e=Om(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dm=()=>{var t;return(t=$u())===null||t===void 0?void 0:t.config},Nm=t=>{var e;return(e=$u())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ZT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Vm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[zo(JSON.stringify(n)),zo(JSON.stringify(o)),""].join(".")}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function tI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rI(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sI(){try{return typeof indexedDB=="object"}catch{return!1}}function iI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const oI="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oI,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?aI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ln(s,a,r)}}function aI(t,e){return t.replace(cI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const cI=/\{\$([^}]+)}/g;function lI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ko(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(hd(i)&&hd(o)){if(!Ko(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function hd(t){return t!==null&&typeof t=="object"}/**
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
 */function Vi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $s(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uI(t,e){const n=new hI(t,e);return n.subscribe.bind(n)}class hI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Nc),s.error===void 0&&(s.error=Nc),s.complete===void 0&&(s.complete=Nc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nc(){}/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}class Wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ar="[DEFAULT]";/**
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
 */class dI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ZT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gI(e))try{this.getOrInitializeService({instanceIdentifier:ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ar){return this.instances.has(e)}getOptions(e=ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ar){return this.component?this.component.multipleInstances?e:ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pI(t){return t===ar?void 0:t}function gI(t){return t.instantiationMode==="EAGER"}/**
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
 */class mI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const _I={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},yI=ue.INFO,vI={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},wI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ju{constructor(e){this.name=e,this._logLevel=yI,this._logHandler=wI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_I[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const EI=(t,e)=>e.some(n=>t instanceof n);let fd,dd;function TI(){return fd||(fd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function II(){return dd||(dd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lm=new WeakMap,Pl=new WeakMap,Mm=new WeakMap,Vc=new WeakMap,Bu=new WeakMap;function AI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lm.set(n,t)}).catch(()=>{}),Bu.set(e,t),e}function RI(t){if(Pl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Pl.set(t,e)}let Cl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bI(t){Cl=t(Cl)}function PI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Lc(this),e,...n);return Mm.set(r,e.sort?e.sort():[e]),jn(r)}:II().includes(t)?function(...e){return t.apply(Lc(this),e),jn(Lm.get(this))}:function(...e){return jn(t.apply(Lc(this),e))}}function CI(t){return typeof t=="function"?PI(t):(t instanceof IDBTransaction&&RI(t),EI(t,TI())?new Proxy(t,Cl):t)}function jn(t){if(t instanceof IDBRequest)return AI(t);if(Vc.has(t))return Vc.get(t);const e=CI(t);return e!==t&&(Vc.set(t,e),Bu.set(e,t)),e}const Lc=t=>Bu.get(t);function SI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=jn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(jn(o.result),c.oldVersion,c.newVersion,jn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const kI=["get","getKey","getAll","getAllKeys","count"],OI=["put","add","delete","clear"],Mc=new Map;function pd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mc.get(e))return Mc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=OI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||kI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Mc.set(e,i),i}bI(t=>({...t,get:(e,n,r)=>pd(e,n)||t.get(e,n,r),has:(e,n)=>!!pd(e,n)||t.has(e,n)}));/**
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
 */class xI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(DI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function DI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sl="@firebase/app",gd="0.9.25";/**
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
 */const Er=new ju("@firebase/app"),NI="@firebase/app-compat",VI="@firebase/analytics-compat",LI="@firebase/analytics",MI="@firebase/app-check-compat",UI="@firebase/app-check",FI="@firebase/auth",$I="@firebase/auth-compat",jI="@firebase/database",BI="@firebase/database-compat",HI="@firebase/functions",qI="@firebase/functions-compat",WI="@firebase/installations",zI="@firebase/installations-compat",KI="@firebase/messaging",GI="@firebase/messaging-compat",QI="@firebase/performance",YI="@firebase/performance-compat",XI="@firebase/remote-config",JI="@firebase/remote-config-compat",ZI="@firebase/storage",eA="@firebase/storage-compat",tA="@firebase/firestore",nA="@firebase/firestore-compat",rA="firebase",sA="10.7.1";/**
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
 */const kl="[DEFAULT]",iA={[Sl]:"fire-core",[NI]:"fire-core-compat",[LI]:"fire-analytics",[VI]:"fire-analytics-compat",[UI]:"fire-app-check",[MI]:"fire-app-check-compat",[FI]:"fire-auth",[$I]:"fire-auth-compat",[jI]:"fire-rtdb",[BI]:"fire-rtdb-compat",[HI]:"fire-fn",[qI]:"fire-fn-compat",[WI]:"fire-iid",[zI]:"fire-iid-compat",[KI]:"fire-fcm",[GI]:"fire-fcm-compat",[QI]:"fire-perf",[YI]:"fire-perf-compat",[XI]:"fire-rc",[JI]:"fire-rc-compat",[ZI]:"fire-gcs",[eA]:"fire-gcs-compat",[tA]:"fire-fst",[nA]:"fire-fst-compat","fire-js":"fire-js",[rA]:"fire-js-all"};/**
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
 */const Go=new Map,Ol=new Map;function oA(t,e){try{t.container.addComponent(e)}catch(n){Er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tr(t){const e=t.name;if(Ol.has(e))return Er.debug(`There were multiple attempts to register component ${e}.`),!1;Ol.set(e,t);for(const n of Go.values())oA(n,t);return!0}function La(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const aA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bn=new Ni("app","Firebase",aA);/**
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
 */class cA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
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
 */const kr=sA;function Um(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Bn.create("bad-app-name",{appName:String(s)});if(n||(n=Dm()),!n)throw Bn.create("no-options");const i=Go.get(s);if(i){if(Ko(n,i.options)&&Ko(r,i.config))return i;throw Bn.create("duplicate-app",{appName:s})}const o=new mI(s);for(const c of Ol.values())o.addComponent(c);const a=new cA(n,r,o);return Go.set(s,a),a}function Hu(t=kl){const e=Go.get(t);if(!e&&t===kl&&Dm())return Um();if(!e)throw Bn.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let s=(r=iA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Er.warn(a.join(" "));return}Tr(new Wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const lA="firebase-heartbeat-database",uA=1,di="firebase-heartbeat-store";let Uc=null;function Fm(){return Uc||(Uc=SI(lA,uA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(di)}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),Uc}async function hA(t){try{return await(await Fm()).transaction(di).objectStore(di).get($m(t))}catch(e){if(e instanceof ln)Er.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Er.warn(n.message)}}}async function md(t,e){try{const r=(await Fm()).transaction(di,"readwrite");await r.objectStore(di).put(e,$m(t)),await r.done}catch(n){if(n instanceof ln)Er.warn(n.message);else{const r=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Er.warn(r.message)}}}function $m(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fA=1024,dA=30*24*60*60*1e3;class pA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_d();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=dA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_d(),{heartbeatsToSend:r,unsentEntries:s}=gA(this._heartbeatsCache.heartbeats),i=zo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function _d(){return new Date().toISOString().substring(0,10)}function gA(t,e=fA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),yd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),yd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sI()?iI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return md(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return md(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yd(t){return zo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function _A(t){Tr(new Wn("platform-logger",e=>new xI(e),"PRIVATE")),Tr(new Wn("heartbeat",e=>new pA(e),"PRIVATE")),nn(Sl,gd,t),nn(Sl,gd,"esm2017"),nn("fire-js","")}_A("");function qu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function jm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yA=jm,Bm=new Ni("auth","Firebase",jm());/**
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
 */const Qo=new ju("@firebase/auth");function vA(t,...e){Qo.logLevel<=ue.WARN&&Qo.warn(`Auth (${kr}): ${t}`,...e)}function Co(t,...e){Qo.logLevel<=ue.ERROR&&Qo.error(`Auth (${kr}): ${t}`,...e)}/**
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
 */function Ht(t,...e){throw Wu(t,...e)}function rn(t,...e){return Wu(t,...e)}function wA(t,e,n){const r=Object.assign(Object.assign({},yA()),{[e]:n});return new Ni("auth","Firebase",r).create(e,{appName:t.name})}function Wu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bm.create(t,...e)}function Y(t,e,...n){if(!t)throw Wu(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Co(e),new Error(e)}function vn(t,e){t||dn(e)}/**
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
 */function xl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function EA(){return vd()==="http:"||vd()==="https:"}function vd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function TA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EA()||tI()||"connection"in navigator)?navigator.onLine:!0}function IA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Li{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=eI()||nI()}get(){return TA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zu(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Hm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const AA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const RA=new Li(3e4,6e4);function Or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jn(t,e,n,r,s={}){return qm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Vi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Hm.fetch()(Wm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function qm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},AA),e);try{const s=new PA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw co(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw co(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw co(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw co(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw wA(t,u,l);Ht(t,u)}}catch(s){if(s instanceof ln)throw s;Ht(t,"network-request-failed",{message:String(s)})}}async function Ma(t,e,n,r,s={}){const i=await Jn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ht(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Wm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?zu(t.config,s):`${t.config.apiScheme}://${s}`}function bA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class PA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),RA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function co(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=rn(t,e,r);return s.customData._tokenResponse=n,s}function wd(t){return t!==void 0&&t.enterprise!==void 0}class CA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function SA(t,e){return Jn(t,"GET","/v2/recaptchaConfig",Or(t,e))}/**
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
 */async function kA(t,e){return Jn(t,"POST","/v1/accounts:delete",e)}async function OA(t,e){return Jn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Js(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xA(t,e=!1){const n=De(t),r=await n.getIdToken(e),s=Ku(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Js(Fc(s.auth_time)),issuedAtTime:Js(Fc(s.iat)),expirationTime:Js(Fc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fc(t){return Number(t)*1e3}function Ku(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Co("JWT malformed, contained fewer than 3 sections"),null;try{const s=km(n);return s?JSON.parse(s):(Co("Failed to decode base64 JWT payload"),null)}catch(s){return Co("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function DA(t){const e=Ku(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&NA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class VA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await pi(t,OA(n,{idToken:r}));Y(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?UA(i.providerUserInfo):[],a=MA(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new zm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function LA(t){const e=De(t);await Yo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function UA(t){return t.map(e=>{var{providerId:n}=e,r=qu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function FA(t,e){const n=await qm(t,{},async()=>{const r=Vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Wm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $A(t,e){return Jn(t,"POST","/v2/accounts:revokeToken",Or(t,e))}/**
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
 */class gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):DA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await FA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new gi;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gi,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
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
 */function bn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=qu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await pi(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xA(this,e)}reload(){return LA(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pi(this,kA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=n.createdAt)!==null&&l!==void 0?l:void 0,T=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:O,isAnonymous:F,providerData:L,stsTokenManager:ne}=n;Y(P&&ne,e,"internal-error");const j=gi.fromJSON(this.name,ne);Y(typeof P=="string",e,"internal-error"),bn(h,e.name),bn(f,e.name),Y(typeof O=="boolean",e,"internal-error"),Y(typeof F=="boolean",e,"internal-error"),bn(d,e.name),bn(p,e.name),bn(_,e.name),bn(y,e.name),bn(w,e.name),bn(T,e.name);const H=new mr({uid:P,auth:e,email:f,emailVerified:O,displayName:h,isAnonymous:F,photoURL:p,phoneNumber:d,tenantId:_,stsTokenManager:j,createdAt:w,lastLoginAt:T});return L&&Array.isArray(L)&&(H.providerData=L.map(ye=>Object.assign({},ye))),y&&(H._redirectEventId=y),H}static async _fromIdTokenResponse(e,n,r=!1){const s=new gi;s.updateFromServerResponse(n);const i=new mr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Yo(i),i}}/**
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
 */const Ed=new Map;function pn(t){vn(t instanceof Function,"Expected a class definition");let e=Ed.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ed.set(t,e),e)}/**
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
 */class Km{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Km.type="NONE";const Td=Km;/**
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
 */function So(t,e,n){return`firebase:${t}:${e}:${n}`}class Jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=So(this.userKey,s.apiKey,i),this.fullPersistenceKey=So("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jr(pn(Td),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||pn(Td);const o=So(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=mr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Jr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Jr(i,e,r))}}/**
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
 */function Id(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ym(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jm(e))return"Blackberry";if(Zm(e))return"Webos";if(Gu(e))return"Safari";if((e.includes("chrome/")||Qm(e))&&!e.includes("edge/"))return"Chrome";if(Xm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gm(t=dt()){return/firefox\//i.test(t)}function Gu(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qm(t=dt()){return/crios\//i.test(t)}function Ym(t=dt()){return/iemobile/i.test(t)}function Xm(t=dt()){return/android/i.test(t)}function Jm(t=dt()){return/blackberry/i.test(t)}function Zm(t=dt()){return/webos/i.test(t)}function Ua(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jA(t=dt()){var e;return Ua(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BA(){return rI()&&document.documentMode===10}function e_(t=dt()){return Ua(t)||Xm(t)||Zm(t)||Jm(t)||/windows phone/i.test(t)||Ym(t)}function HA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function t_(t,e=[]){let n;switch(t){case"Browser":n=Id(dt());break;case"Worker":n=`${Id(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${kr}/${r}`}/**
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
 */class qA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function WA(t,e={}){return Jn(t,"GET","/v2/passwordPolicy",Or(t,e))}/**
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
 */const zA=6;class KA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class GA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ad(this),this.idTokenSubscription=new Ad(this),this.beforeStateQueue=new qA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?De(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WA(this),n=new KA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $A(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ws(t){return De(t)}class Ad{constructor(e){this.auth=e,this.observer=null,this.addObserver=uI(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function QA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function n_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=rn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",QA().appendChild(r)})}function YA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const XA="https://www.google.com/recaptcha/enterprise.js?render=",JA="recaptcha-enterprise",ZA="NO_RECAPTCHA";class eR{constructor(e){this.type=JA,this.auth=ws(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{SA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new CA(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;wd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(ZA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&wd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}n_(XA+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Rd(t,e,n,r=!1){const s=new eR(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function bd(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Rd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Rd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function tR(t,e){const n=La(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ko(i,e??{}))return s;Ht(s,"already-initialized")}return n.initialize({options:e})}function nR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function rR(t,e,n){const r=ws(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=r_(e),{host:o,port:a}=sR(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||iR()}function r_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sR(t){const e=r_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Pd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Pd(o)}}}function Pd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function oR(t,e){return Jn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function aR(t,e){return Ma(t,"POST","/v1/accounts:signInWithPassword",Or(t,e))}/**
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
 */async function cR(t,e){return Ma(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}async function lR(t,e){return Ma(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}/**
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
 */class mi extends Qu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new mi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new mi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bd(e,n,"signInWithPassword",aR);case"emailLink":return cR(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bd(e,r,"signUpPassword",oR);case"emailLink":return lR(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Zr(t,e){return Ma(t,"POST","/v1/accounts:signInWithIdp",Or(t,e))}/**
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
 */const uR="http://localhost";class Ir extends Qu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=qu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ir(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zr(e,n)}buildRequest(){const e={requestUri:uR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vi(n)}return e}}/**
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
 */function hR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fR(t){const e=$s(js(t)).link,n=e?$s(js(e)).deep_link_id:null,r=$s(js(t)).deep_link_id;return(r?$s(js(r)).link:null)||r||n||e||t}class Yu{constructor(e){var n,r,s,i,o,a;const c=$s(js(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=hR((s=c.mode)!==null&&s!==void 0?s:null);Y(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=fR(e);try{return new Yu(n)}catch{return null}}}/**
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
 */class Es{constructor(){this.providerId=Es.PROVIDER_ID}static credential(e,n){return mi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yu.parseLink(n);return Y(r,"argument-error"),mi._fromEmailAndCode(e,r.code,r.tenantId)}}Es.PROVIDER_ID="password";Es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class s_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mi extends s_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dn extends Mi{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class Vn extends Mi{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
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
 */class Ln extends Mi{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
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
 */class ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await mr._fromIdTokenResponse(e,r,s),o=Cd(r);return new ls({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Cd(r);return new ls({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Cd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Xo extends ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Xo(e,n,r,s)}}function i_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xo._fromErrorAndOperation(t,i,e,r):i})}async function dR(t,e,n=!1){const r=await pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ls._forOperation(t,"link",r)}/**
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
 */async function pR(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await pi(t,i_(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=Ku(i.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),ls._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),i}}/**
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
 */async function o_(t,e,n=!1){const r="signIn",s=await i_(t,r,e),i=await ls._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function gR(t,e){return o_(ws(t),e)}/**
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
 */async function mR(t){const e=ws(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function _R(t,e,n){return gR(De(t),Es.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mR(t),r})}function yR(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function vR(t,e,n){return De(t).beforeAuthStateChanged(e,n)}const Jo="__sak";/**
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
 */class a_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jo,"1"),this.storage.removeItem(Jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function wR(){const t=dt();return Gu(t)||Ua(t)}const ER=1e3,TR=10;class c_ extends a_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wR()&&HA(),this.fallbackToPolling=e_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);BA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,TR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ER)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}c_.type="LOCAL";const IR=c_;/**
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
 */class l_ extends a_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}l_.type="SESSION";const u_=l_;/**
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
 */function AR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Fa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await AR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fa.receivers=[];/**
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
 */function Xu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Xu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function sn(){return window}function bR(t){sn().location.href=t}/**
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
 */function h_(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function PR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function SR(){return h_()?self:null}/**
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
 */const f_="firebaseLocalStorageDb",kR=1,Zo="firebaseLocalStorage",d_="fbase_key";class Ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $a(t,e){return t.transaction([Zo],e?"readwrite":"readonly").objectStore(Zo)}function OR(){const t=indexedDB.deleteDatabase(f_);return new Ui(t).toPromise()}function Dl(){const t=indexedDB.open(f_,kR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zo,{keyPath:d_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zo)?e(r):(r.close(),await OR(),e(await Dl()))})})}async function Sd(t,e,n){const r=$a(t,!0).put({[d_]:e,value:n});return new Ui(r).toPromise()}async function xR(t,e){const n=$a(t,!1).get(e),r=await new Ui(n).toPromise();return r===void 0?null:r.value}function kd(t,e){const n=$a(t,!0).delete(e);return new Ui(n).toPromise()}const DR=800,NR=3;class p_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return h_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fa._getInstance(SR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PR(),!this.activeServiceWorker)return;this.sender=new RR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dl();return await Sd(e,Jo,"1"),await kd(e,Jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$a(s,!1).getAll();return new Ui(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}p_.type="LOCAL";const VR=p_;new Li(3e4,6e4);/**
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
 */function LR(t,e){return e?pn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ju extends Qu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function MR(t){return o_(t.auth,new Ju(t),t.bypassAuthState)}function UR(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),pR(n,new Ju(t),t.bypassAuthState)}async function FR(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),dR(n,new Ju(t),t.bypassAuthState)}/**
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
 */class g_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MR;case"linkViaPopup":case"linkViaRedirect":return FR;case"reauthViaPopup":case"reauthViaRedirect":return UR;default:Ht(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $R=new Li(2e3,1e4);class zr extends g_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$R.get())};e()}}zr.currentPopupAction=null;/**
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
 */const jR="pendingRedirect",ko=new Map;class BR extends g_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ko.get(this.auth._key());if(!e){try{const r=await HR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ko.set(this.auth._key(),e)}return this.bypassAuthState||ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HR(t,e){const n=zR(e),r=WR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function qR(t,e){ko.set(t._key(),e)}function WR(t){return pn(t._redirectPersistence)}function zR(t){return So(jR,t.config.apiKey,t.name)}async function KR(t,e,n=!1){const r=ws(t),s=LR(r,e),o=await new BR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const GR=10*60*1e3;class QR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!m_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Od(e))}saveEventToCache(e){this.cachedEventUids.add(Od(e)),this.lastProcessedEventTime=Date.now()}}function Od(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function m_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return m_(t);default:return!1}}/**
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
 */async function XR(t,e={}){return Jn(t,"GET","/v1/projects",e)}/**
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
 */const JR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZR=/^https?/;async function eb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XR(t);for(const n of e)try{if(tb(n))return}catch{}Ht(t,"unauthorized-domain")}function tb(t){const e=xl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ZR.test(n))return!1;if(JR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const nb=new Li(3e4,6e4);function xd(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rb(t){return new Promise((e,n)=>{var r,s,i;function o(){xd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xd(),n(rn(t,"network-request-failed"))},timeout:nb.get()})}if(!((s=(r=sn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=sn().gapi)===null||i===void 0)&&i.load)o();else{const a=YA("iframefcb");return sn()[a]=()=>{gapi.load?o():n(rn(t,"network-request-failed"))},n_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Oo=null,e})}let Oo=null;function sb(t){return Oo=Oo||rb(t),Oo}/**
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
 */const ib=new Li(5e3,15e3),ob="__/auth/iframe",ab="emulator/auth/iframe",cb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ub(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zu(e,ab):`https://${t.config.authDomain}/${ob}`,r={apiKey:e.apiKey,appName:t.name,v:kr},s=lb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vi(r).slice(1)}`}async function hb(t){const e=await sb(t),n=sn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:ub(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),a=sn().setTimeout(()=>{i(o)},ib.get());function c(){sn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const fb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},db=500,pb=600,gb="_blank",mb="http://localhost";class Dd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _b(t,e,n,r=db,s=pb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},fb),{width:r.toString(),height:s.toString(),top:i,left:o}),l=dt().toLowerCase();n&&(a=Qm(l)?gb:n),Gm(l)&&(e=e||mb,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(jA(l)&&a!=="_self")return yb(e||"",a),new Dd(null);const h=window.open(e||"",a,u);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new Dd(h)}function yb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const vb="__/auth/handler",wb="emulator/auth/handler",Eb=encodeURIComponent("fac");async function Nd(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:kr,eventId:s};if(e instanceof s_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Mi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Eb}=${encodeURIComponent(c)}`:"";return`${Tb(t)}?${Vi(a).slice(1)}${l}`}function Tb({config:t}){return t.emulator?zu(t,wb):`https://${t.authDomain}/${vb}`}/**
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
 */const $c="webStorageSupport";class Ib{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=u_,this._completeRedirectFn=KR,this._overrideRedirectResult=qR}async _openPopup(e,n,r,s){var i;vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Nd(e,n,r,xl(),s);return _b(e,o,Xu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Nd(e,n,r,xl(),s);return bR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hb(e),r=new QR(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($c,{type:$c},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[$c];o!==void 0&&n(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return e_()||Gu()||Ua()}}const Ab=Ib;var Vd="@firebase/auth",Ld="1.5.1";/**
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
 */class Rb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Pb(t){Tr(new Wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t_(t)},l=new GA(r,s,i,c);return nR(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tr(new Wn("auth-internal",e=>{const n=ws(e.getProvider("auth").getImmediate());return(r=>new Rb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(Vd,Ld,bb(t)),nn(Vd,Ld,"esm2017")}/**
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
 */const Cb=5*60,Sb=Nm("authIdTokenMaxAge")||Cb;let Md=null;const kb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Sb)return;const s=n==null?void 0:n.token;Md!==s&&(Md=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Zs(t=Hu()){const e=La(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tR(t,{popupRedirectResolver:Ab,persistence:[VR,IR,u_]}),r=Nm("authTokenSyncURL");if(r){const i=kb(r);vR(n,i,()=>i(n.currentUser)),yR(n,o=>i(o))}const s=Om("auth");return s&&rR(n,`http://${s}`),n}Pb("Browser");var Ob="firebase",xb="10.7.1";/**
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
 */nn(Ob,xb,"app");var Db=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Zu=Zu||{},Z=Db||self;function ja(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Nb(t){return Object.prototype.hasOwnProperty.call(t,jc)&&t[jc]||(t[jc]=++Vb)}var jc="closure_uid_"+(1e9*Math.random()>>>0),Vb=0;function Lb(t,e,n){return t.call.apply(t.bind,arguments)}function Mb(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ht(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ht=Lb:ht=Mb,ht.apply(null,arguments)}function lo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Zn(){this.s=this.s,this.o=this.o}var Ub=0;Zn.prototype.s=!1;Zn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Ub!=0)&&Nb(this)};Zn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const __=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function eh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ud(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ja(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var Fb=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};Z.addEventListener("test",n,e),Z.removeEventListener("test",n,e)}catch{}return t}();function _i(t){return/^[\s\xa0]*$/.test(t)}function Ba(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function Jt(t){return Ba().indexOf(t)!=-1}function th(t){return th[" "](t),t}th[" "]=function(){};function $b(t,e){var n=xP;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var jb=Jt("Opera"),us=Jt("Trident")||Jt("MSIE"),y_=Jt("Edge"),Nl=y_||us,v_=Jt("Gecko")&&!(Ba().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge"))&&!(Jt("Trident")||Jt("MSIE"))&&!Jt("Edge"),Bb=Ba().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge");function w_(){var t=Z.document;return t?t.documentMode:void 0}var Vl;e:{var Bc="",Hc=function(){var t=Ba();if(v_)return/rv:([^\);]+)(\)|;)/.exec(t);if(y_)return/Edge\/([\d\.]+)/.exec(t);if(us)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Bb)return/WebKit\/(\S+)/.exec(t);if(jb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Hc&&(Bc=Hc?Hc[1]:""),us){var qc=w_();if(qc!=null&&qc>parseFloat(Bc)){Vl=String(qc);break e}}Vl=Bc}var Ll;if(Z.document&&us){var Fd=w_();Ll=Fd||parseInt(Vl,10)||void 0}else Ll=void 0;var Hb=Ll;function yi(t,e){if(ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(v_){e:{try{th(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:qb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&yi.$.h.call(this)}}Ye(yi,ft);var qb={2:"touch",3:"pen",4:"mouse"};yi.prototype.h=function(){yi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $i="closure_listenable_"+(1e6*Math.random()|0),Wb=0;function zb(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++Wb,this.fa=this.ia=!1}function Ha(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function nh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Kb(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function E_(t){const e={};for(const n in t)e[n]=t[n];return e}const $d="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T_(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<$d.length;i++)n=$d[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function qa(t){this.src=t,this.g={},this.h=0}qa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ul(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new zb(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Ml(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=__(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ha(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ul(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var rh="closure_lm_"+(1e6*Math.random()|0),Wc={};function I_(t,e,n,r,s){if(r&&r.once)return R_(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)I_(t,e[i],n,r,s);return null}return n=oh(n),t&&t[$i]?t.O(e,n,Fi(r)?!!r.capture:!!r,s):A_(t,e,n,!1,r,s)}function A_(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Fi(s)?!!s.capture:!!s,a=ih(t);if(a||(t[rh]=a=new qa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Gb(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Fb||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(P_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Gb(){function t(n){return e.call(t.src,t.listener,n)}const e=Qb;return t}function R_(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)R_(t,e[i],n,r,s);return null}return n=oh(n),t&&t[$i]?t.P(e,n,Fi(r)?!!r.capture:!!r,s):A_(t,e,n,!0,r,s)}function b_(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)b_(t,e[i],n,r,s);else r=Fi(r)?!!r.capture:!!r,n=oh(n),t&&t[$i]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ul(i,n,r,s),-1<n&&(Ha(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ih(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ul(e,n,r,s)),(n=-1<t?e[t]:null)&&sh(n))}function sh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[$i])Ml(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(P_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ih(e))?(Ml(n,t),n.h==0&&(n.src=null,e[rh]=null)):Ha(t)}}}function P_(t){return t in Wc?Wc[t]:Wc[t]="on"+t}function Qb(t,e){if(t.fa)t=!0;else{e=new yi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&sh(t),t=n.call(r,e)}return t}function ih(t){return t=t[rh],t instanceof qa?t:null}var zc="__closure_events_fn_"+(1e9*Math.random()>>>0);function oh(t){return typeof t=="function"?t:(t[zc]||(t[zc]=function(e){return t.handleEvent(e)}),t[zc])}function Qe(){Zn.call(this),this.i=new qa(this),this.S=this,this.J=null}Ye(Qe,Zn);Qe.prototype[$i]=!0;Qe.prototype.removeEventListener=function(t,e,n,r){b_(this,t,e,n,r)};function nt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ft(e,t);else if(e instanceof ft)e.target=e.target||t;else{var s=e;e=new ft(r,t),T_(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=uo(o,r,!0,e)&&s}if(o=e.g=t,s=uo(o,r,!0,e)&&s,s=uo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=uo(o,r,!1,e)&&s}Qe.prototype.N=function(){if(Qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ha(n[r]);delete t.g[e],t.h--}}this.J=null};Qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Qe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function uo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ml(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var ah=Z.JSON.stringify;class Yb{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Xb(){var t=ch;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Jb{constructor(){this.h=this.g=null}add(e,n){const r=C_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var C_=new Yb(()=>new Zb,t=>t.reset());class Zb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function eP(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function tP(t){Z.setTimeout(()=>{throw t},0)}let vi,wi=!1,ch=new Jb,S_=()=>{const t=Z.Promise.resolve(void 0);vi=()=>{t.then(nP)}};var nP=()=>{for(var t;t=Xb();){try{t.h.call(t.g)}catch(n){tP(n)}var e=C_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}wi=!1};function Wa(t,e){Qe.call(this),this.h=t||1,this.g=e||Z,this.j=ht(this.qb,this),this.l=Date.now()}Ye(Wa,Qe);V=Wa.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),nt(this,"tick"),this.ga&&(lh(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){Wa.$.N.call(this),lh(this),delete this.g};function uh(t,e,n){if(typeof t=="function")n&&(t=ht(t,n));else if(t&&typeof t.handleEvent=="function")t=ht(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function k_(t){t.g=uh(()=>{t.g=null,t.i&&(t.i=!1,k_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class rP extends Zn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:k_(this)}N(){super.N(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ei(t){Zn.call(this),this.h=t,this.g={}}Ye(Ei,Zn);var jd=[];function O_(t,e,n,r){Array.isArray(n)||(n&&(jd[0]=n.toString()),n=jd);for(var s=0;s<n.length;s++){var i=I_(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function x_(t){nh(t.g,function(e,n){this.g.hasOwnProperty(n)&&sh(e)},t),t.g={}}Ei.prototype.N=function(){Ei.$.N.call(this),x_(this)};Ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function za(){this.g=!0}za.prototype.Ea=function(){this.g=!1};function sP(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function iP(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Kr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+aP(t,n)+(r?" "+r:"")})}function oP(t,e){t.info(function(){return"TIMEOUT: "+e})}za.prototype.info=function(){};function aP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ah(n)}catch{return e}}var xr={},Bd=null;function Ka(){return Bd=Bd||new Qe}xr.Ta="serverreachability";function D_(t){ft.call(this,xr.Ta,t)}Ye(D_,ft);function Ti(t){const e=Ka();nt(e,new D_(e))}xr.STAT_EVENT="statevent";function N_(t,e){ft.call(this,xr.STAT_EVENT,t),this.stat=e}Ye(N_,ft);function _t(t){const e=Ka();nt(e,new N_(e,t))}xr.Ua="timingevent";function V_(t,e){ft.call(this,xr.Ua,t),this.size=e}Ye(V_,ft);function ji(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var Ga={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},L_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function hh(){}hh.prototype.h=null;function Hd(t){return t.h||(t.h=t.i())}function M_(){}var Bi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function fh(){ft.call(this,"d")}Ye(fh,ft);function dh(){ft.call(this,"c")}Ye(dh,ft);var Fl;function Qa(){}Ye(Qa,hh);Qa.prototype.g=function(){return new XMLHttpRequest};Qa.prototype.i=function(){return{}};Fl=new Qa;function Hi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ei(this),this.P=cP,t=Nl?125:void 0,this.V=new Wa(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new U_}function U_(){this.i=null,this.g="",this.h=!1}var cP=45e3,F_={},$l={};V=Hi.prototype;V.setTimeout=function(t){this.P=t};function jl(t,e,n){t.L=1,t.A=Xa(wn(e)),t.u=n,t.S=!0,$_(t,null)}function $_(t,e){t.G=Date.now(),qi(t),t.B=wn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),G_(n.i,"t",r),t.o=0,n=t.l.J,t.h=new U_,t.g=gy(t.l,n?e:null,!t.u),0<t.O&&(t.M=new rP(ht(t.Pa,t,t.g),t.O)),O_(t.U,t.g,"readystatechange",t.nb),e=t.I?E_(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ti(),sP(t.j,t.v,t.B,t.m,t.W,t.u)}V.nb=function(t){t=t.target;const e=this.M;e&&Zt(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const u=Zt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Nl||this.g&&(this.h.h||this.g.ja()||Kd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ti(3):Ti(2)),Ya(this);var n=this.g.da();this.ca=n;t:if(j_(this)){var r=Kd(this.g);t="";var s=r.length,i=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ur(this),ei(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,iP(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_i(a)){var l=a;break t}}l=null}if(n=l)Kr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bl(this,n);else{this.i=!1,this.s=3,_t(12),ur(this),ei(this);break e}}this.S?(B_(this,u,o),Nl&&this.i&&u==3&&(O_(this.U,this.V,"tick",this.mb),this.V.start())):(Kr(this.j,this.m,o,null),Bl(this,o)),u==4&&ur(this),this.i&&!this.J&&(u==4?hy(this.l,this):(this.i=!1,qi(this)))}else SP(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),ur(this),ei(this)}}}catch{}finally{}};function j_(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function B_(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=lP(t,n),s==$l){e==4&&(t.s=4,_t(14),r=!1),Kr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==F_){t.s=4,_t(15),Kr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Kr(t.j,t.m,s,null),Bl(t,s);j_(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,_t(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),vh(e),e.M=!0,_t(11))):(Kr(t.j,t.m,n,"[Invalid Chunked Response]"),ur(t),ei(t))}V.mb=function(){if(this.g){var t=Zt(this.g),e=this.g.ja();this.o<e.length&&(Ya(this),B_(this,t,e),this.i&&t!=4&&qi(this))}};function lP(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?$l:(n=Number(e.substring(n,r)),isNaN(n)?F_:(r+=1,r+n>e.length?$l:(e=e.slice(r,r+n),t.o=r+n,e)))}V.cancel=function(){this.J=!0,ur(this)};function qi(t){t.Y=Date.now()+t.P,H_(t,t.P)}function H_(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=ji(ht(t.lb,t),e)}function Ya(t){t.C&&(Z.clearTimeout(t.C),t.C=null)}V.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(oP(this.j,this.B),this.L!=2&&(Ti(),_t(17)),ur(this),this.s=2,ei(this)):H_(this,this.Y-t)};function ei(t){t.l.H==0||t.J||hy(t.l,t)}function ur(t){Ya(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,lh(t.V),x_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Bl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Hl(n.i,t))){if(!t.K&&Hl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)na(n),tc(n);else break e;yh(n),_t(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=ji(ht(n.ib,n),6e3));if(1>=X_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else hr(n,11)}else if((t.K||n.g==t)&&na(n),!_i(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.i;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ph(i,i.h),i.h=null))}if(r.F){const _=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,be(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=py(r,r.J?r.pa:null,r.Y),o.K){J_(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Ya(a),qi(a)),r.g=o}else ly(r);0<n.j.length&&nc(n)}else l[0]!="stop"&&l[0]!="close"||hr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?hr(n,7):_h(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ti(4)}catch{}}function uP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ja(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function hP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ja(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function q_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ja(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=hP(t),r=uP(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var W_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function _r(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof _r){this.h=t.h,ea(this,t.j),this.s=t.s,this.g=t.g,ta(this,t.m),this.l=t.l;var e=t.i,n=new Ii;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),qd(this,n),this.o=t.o}else t&&(e=String(t).match(W_))?(this.h=!1,ea(this,e[1]||"",!0),this.s=Bs(e[2]||""),this.g=Bs(e[3]||"",!0),ta(this,e[4]),this.l=Bs(e[5]||"",!0),qd(this,e[6]||"",!0),this.o=Bs(e[7]||"")):(this.h=!1,this.i=new Ii(null,this.h))}_r.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Hs(e,Wd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Hs(e,Wd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Hs(n,n.charAt(0)=="/"?gP:pP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Hs(n,_P)),t.join("")};function wn(t){return new _r(t)}function ea(t,e,n){t.j=n?Bs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ta(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qd(t,e,n){e instanceof Ii?(t.i=e,yP(t.i,t.h)):(n||(e=Hs(e,mP)),t.i=new Ii(e,t.h))}function be(t,e,n){t.i.set(e,n)}function Xa(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Bs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Hs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,dP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function dP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Wd=/[#\/\?@]/g,pP=/[#\?:]/g,gP=/[#\?]/g,mP=/[#\?@]/g,_P=/#/g;function Ii(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function er(t){t.g||(t.g=new Map,t.h=0,t.i&&fP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Ii.prototype;V.add=function(t,e){er(this),this.i=null,t=Ts(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function z_(t,e){er(t),e=Ts(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function K_(t,e){return er(t),e=Ts(t,e),t.g.has(e)}V.forEach=function(t,e){er(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};V.ta=function(){er(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};V.Z=function(t){er(this);let e=[];if(typeof t=="string")K_(this,t)&&(e=e.concat(this.g.get(Ts(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return er(this),this.i=null,t=Ts(this,t),K_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function G_(t,e,n){z_(t,e),0<n.length&&(t.i=null,t.g.set(Ts(t,e),eh(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ts(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yP(t,e){e&&!t.j&&(er(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(z_(this,r),G_(this,s,n))},t)),t.j=e}var vP=class{constructor(t,e){this.g=t,this.map=e}};function Q_(t){this.l=t||wP,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ka&&Z.g.Ka()&&Z.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wP=10;function Y_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function X_(t){return t.h?1:t.g?t.g.size:0}function Hl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ph(t,e){t.g?t.g.add(e):t.h=e}function J_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Q_.prototype.cancel=function(){if(this.i=Z_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Z_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return eh(t.i)}var EP=class{stringify(t){return Z.JSON.stringify(t,void 0)}parse(t){return Z.JSON.parse(t,void 0)}};function TP(){this.g=new EP}function IP(t,e,n){const r=n||"";try{q_(t,function(s,i){let o=s;Fi(s)&&(o=ah(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function AP(t,e){const n=new za;if(Z.Image){const r=new Image;r.onload=lo(ho,n,r,"TestLoadImage: loaded",!0,e),r.onerror=lo(ho,n,r,"TestLoadImage: error",!1,e),r.onabort=lo(ho,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=lo(ho,n,r,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ho(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ja(t){this.l=t.ec||null,this.j=t.ob||!1}Ye(Ja,hh);Ja.prototype.g=function(){return new Za(this.l,this.j)};Ja.prototype.i=function(t){return function(){return t}}({});function Za(t,e){Qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=gh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(Za,Qe);var gh=0;V=Za.prototype;V.open=function(t,e){if(this.readyState!=gh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ai(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wi(this)),this.readyState=gh};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ai(this)),this.g&&(this.readyState=3,Ai(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ey(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function ey(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Wi(this):Ai(this),this.readyState==3&&ey(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,Wi(this))};V.Ya=function(t){this.g&&(this.response=t,Wi(this))};V.ka=function(){this.g&&Wi(this)};function Wi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ai(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ai(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var RP=Z.JSON.parse;function Ne(t){Qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ty,this.L=this.M=!1}Ye(Ne,Qe);var ty="",bP=/^https?$/i,PP=["POST","PUT"];V=Ne.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Fl.g(),this.C=this.u?Hd(this.u):Hd(Fl),this.g.onreadystatechange=ht(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){zd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Z.FormData&&t instanceof Z.FormData,!(0<=__(PP,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{sy(this),0<this.B&&((this.L=CP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.ua,this)):this.A=uh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){zd(this,i)}};function CP(t){return us&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof Zu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function zd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ny(t),ec(t)}function ny(t){t.F||(t.F=!0,nt(t,"complete"),nt(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),ec(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ec(this,!0)),Ne.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?ry(this):this.kb())};V.kb=function(){ry(this)};function ry(t){if(t.h&&typeof Zu<"u"&&(!t.C[1]||Zt(t)!=4||t.da()!=2)){if(t.v&&Zt(t)==4)uh(t.La,0,t);else if(nt(t,"readystatechange"),Zt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(W_)[1]||null;!s&&Z.self&&Z.self.location&&(s=Z.self.location.protocol.slice(0,-1)),r=!bP.test(s?s.toLowerCase():"")}n=r}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var i=2<Zt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",ny(t)}}finally{ec(t)}}}}function ec(t,e){if(t.g){sy(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||nt(t,"ready");try{n.onreadystatechange=r}catch{}}}function sy(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function Zt(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),RP(e)}};function Kd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ty:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function SP(t){const e={};t=(t.g&&2<=Zt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(_i(t[r]))continue;var n=eP(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}Kb(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function iy(t){let e="";return nh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function mh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=iy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function Os(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function oy(t){this.Ga=0,this.j=[],this.l=new za,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Os("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Os("baseRetryDelayMs",5e3,t),this.hb=Os("retryDelaySeedMs",1e4,t),this.eb=Os("forwardChannelMaxRetries",2,t),this.xa=Os("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Q_(t&&t.concurrentRequestLimit),this.Ja=new TP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=oy.prototype;V.ra=8;V.H=1;function _h(t){if(ay(t),t.H==3){var e=t.W++,n=wn(t.I);if(be(n,"SID",t.K),be(n,"RID",e),be(n,"TYPE","terminate"),zi(t,n),e=new Hi(t,t.l,e),e.L=2,e.A=Xa(wn(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon)try{n=Z.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&Z.Image&&(new Image().src=e.A,n=!0),n||(e.g=gy(e.l,null),e.g.ha(e.A)),e.G=Date.now(),qi(e)}dy(t)}function tc(t){t.g&&(vh(t),t.g.cancel(),t.g=null)}function ay(t){tc(t),t.u&&(Z.clearTimeout(t.u),t.u=null),na(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function nc(t){if(!Y_(t.i)&&!t.m){t.m=!0;var e=t.Na;vi||S_(),wi||(vi(),wi=!0),ch.add(e,t),t.C=0}}function kP(t,e){return X_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ji(ht(t.Na,t,e),fy(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Hi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=E_(i),T_(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=cy(this,s,e),n=wn(this.I),be(n,"RID",t),be(n,"CVER",22),this.F&&be(n,"X-HTTP-Session-Id",this.F),zi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(iy(i)))+"&"+e:this.o&&mh(n,this.o,i)),ph(this.i,s),this.bb&&be(n,"TYPE","init"),this.P?(be(n,"$req",e),be(n,"SID","null"),s.aa=!0,jl(s,n,null)):jl(s,n,e),this.H=2}}else this.H==3&&(t?Gd(this,t):this.j.length==0||Y_(this.i)||Gd(this))};function Gd(t,e){var n;e?n=e.m:n=t.W++;const r=wn(t.I);be(r,"SID",t.K),be(r,"RID",n),be(r,"AID",t.V),zi(t,r),t.o&&t.s&&mh(r,t.o,t.s),n=new Hi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=cy(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ph(t.i,n),jl(n,r,e)}function zi(t,e){t.na&&nh(t.na,function(n,r){be(e,r,n)}),t.h&&q_({},function(n,r){be(e,r,n)})}function cy(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ht(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{IP(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function ly(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;vi||S_(),wi||(vi(),wi=!0),ch.add(e,t),t.A=0}}function yh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ji(ht(t.Ma,t),fy(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,uy(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ji(ht(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,_t(10),tc(this),uy(this))};function vh(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function uy(t){t.g=new Hi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=wn(t.wa);be(e,"RID","rpc"),be(e,"SID",t.K),be(e,"AID",t.V),be(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&be(e,"TO",t.qa),be(e,"TYPE","xmlhttp"),zi(t,e),t.o&&t.s&&mh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Xa(wn(e)),n.u=null,n.S=!0,$_(n,t)}V.ib=function(){this.v!=null&&(this.v=null,tc(this),yh(this),_t(19))};function na(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function hy(t,e){var n=null;if(t.g==e){na(t),vh(t),t.g=null;var r=2}else if(Hl(t.i,e))n=e.F,J_(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Ka(),nt(r,new V_(r,n)),nc(t)}else ly(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&kP(t,e)||r==2&&yh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:hr(t,5);break;case 4:hr(t,10);break;case 3:hr(t,6);break;default:hr(t,2)}}}function fy(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function hr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ht(t.pb,t);n||(n=new _r("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||ea(n,"https"),Xa(n)),AP(n.toString(),r)}else _t(2);t.H=0,t.h&&t.h.za(e),dy(t),ay(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),_t(2)):(this.l.info("Failed to ping google.com"),_t(1))};function dy(t){if(t.H=0,t.ma=[],t.h){const e=Z_(t.i);(e.length!=0||t.j.length!=0)&&(Ud(t.ma,e),Ud(t.ma,t.j),t.i.i.length=0,eh(t.j),t.j.length=0),t.h.ya()}}function py(t,e,n){var r=n instanceof _r?wn(n):new _r(n);if(r.g!="")e&&(r.g=e+"."+r.g),ta(r,r.m);else{var s=Z.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new _r(null);r&&ea(i,r),e&&(i.g=e),s&&ta(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&be(r,n,e),be(r,"VER",t.ra),zi(t,r),r}function gy(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ne(new Ja({ob:n})):new Ne(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function my(){}V=my.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function ra(){if(us&&!(10<=Number(Hb)))throw Error("Environmental error: no available transport.")}ra.prototype.g=function(t,e){return new Ot(t,e)};function Ot(t,e){Qe.call(this),this.g=new oy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!_i(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_i(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Is(this)}Ye(Ot,Qe);Ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;_t(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=py(t,null,t.Y),nc(t)};Ot.prototype.close=function(){_h(this.g)};Ot.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ah(t),t=n);e.j.push(new vP(e.fb++,t)),e.H==3&&nc(e)};Ot.prototype.N=function(){this.g.h=null,delete this.j,_h(this.g),delete this.g,Ot.$.N.call(this)};function _y(t){fh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(_y,fh);function yy(){dh.call(this),this.status=1}Ye(yy,dh);function Is(t){this.g=t}Ye(Is,my);Is.prototype.Ba=function(){nt(this.g,"a")};Is.prototype.Aa=function(t){nt(this.g,new _y(t))};Is.prototype.za=function(t){nt(this.g,new yy)};Is.prototype.ya=function(){nt(this.g,"b")};function OP(){this.blockSize=-1}function qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ye(qt,OP);qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Kc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Kc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Kc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Kc(this,r),s=0;break}}this.h=s,this.i+=e};qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ee(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var xP={};function wh(t){return-128<=t&&128>t?$b(t,function(e){return new Ee([e|0],0>e?-1:0)}):new Ee([t|0],0>t?-1:0)}function en(t){if(isNaN(t)||!isFinite(t))return es;if(0>t)return Ze(en(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ql;return new Ee(e,0)}function vy(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(vy(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=en(Math.pow(e,8)),r=es,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=en(Math.pow(e,i)),r=r.R(i).add(en(o))):(r=r.R(n),r=r.add(en(o)))}return r}var ql=4294967296,es=wh(0),Wl=wh(1),Qd=wh(16777216);V=Ee.prototype;V.ea=function(){if(Nt(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ql+r)*e,e*=ql}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(gn(this))return"0";if(Nt(this))return"-"+Ze(this).toString(t);for(var e=en(Math.pow(t,6)),n=this,r="";;){var s=ia(n,e).g;n=sa(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,gn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function gn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Nt(t){return t.h==-1}V.X=function(t){return t=sa(this,t),Nt(t)?-1:gn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ee(n,~t.h).add(Wl)}V.abs=function(){return Nt(this)?Ze(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ee(n,n[n.length-1]&-2147483648?-1:0)};function sa(t,e){return t.add(Ze(e))}V.R=function(t){if(gn(this)||gn(t))return es;if(Nt(this))return Nt(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(Nt(t))return Ze(this.R(Ze(t)));if(0>this.X(Qd)&&0>t.X(Qd))return en(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,fo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,fo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,fo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,fo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ee(n,0)};function fo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function xs(t,e){this.g=t,this.h=e}function ia(t,e){if(gn(e))throw Error("division by zero");if(gn(t))return new xs(es,es);if(Nt(t))return e=ia(Ze(t),e),new xs(Ze(e.g),Ze(e.h));if(Nt(e))return e=ia(t,Ze(e)),new xs(Ze(e.g),e.h);if(30<t.g.length){if(Nt(t)||Nt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Wl,r=e;0>=r.X(t);)n=Yd(n),r=Yd(r);var s=Ur(n,1),i=Ur(r,1);for(r=Ur(r,2),n=Ur(n,2);!gn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Ur(r,1),n=Ur(n,1)}return e=sa(t,s.R(e)),new xs(s,e)}for(s=es;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=en(n),o=i.R(e);Nt(o)||0<o.X(t);)n-=r,i=en(n),o=i.R(e);gn(i)&&(i=Wl),s=s.add(i),t=sa(t,o)}return new xs(s,t)}V.gb=function(t){return ia(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ee(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ee(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ee(n,this.h^t.h)};function Yd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ee(n,t.h)}function Ur(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ee(s,t.h)}ra.prototype.createWebChannel=ra.prototype.g;Ot.prototype.send=Ot.prototype.u;Ot.prototype.open=Ot.prototype.m;Ot.prototype.close=Ot.prototype.close;Ga.NO_ERROR=0;Ga.TIMEOUT=8;Ga.HTTP_ERROR=6;L_.COMPLETE="complete";M_.EventType=Bi;Bi.OPEN="a";Bi.CLOSE="b";Bi.ERROR="c";Bi.MESSAGE="d";Qe.prototype.listen=Qe.prototype.O;Ne.prototype.listenOnce=Ne.prototype.P;Ne.prototype.getLastError=Ne.prototype.Sa;Ne.prototype.getLastErrorCode=Ne.prototype.Ia;Ne.prototype.getStatus=Ne.prototype.da;Ne.prototype.getResponseJson=Ne.prototype.Wa;Ne.prototype.getResponseText=Ne.prototype.ja;Ne.prototype.send=Ne.prototype.ha;Ne.prototype.setWithCredentials=Ne.prototype.Oa;qt.prototype.digest=qt.prototype.l;qt.prototype.reset=qt.prototype.reset;qt.prototype.update=qt.prototype.j;Ee.prototype.add=Ee.prototype.add;Ee.prototype.multiply=Ee.prototype.R;Ee.prototype.modulo=Ee.prototype.gb;Ee.prototype.compare=Ee.prototype.X;Ee.prototype.toNumber=Ee.prototype.ea;Ee.prototype.toString=Ee.prototype.toString;Ee.prototype.getBits=Ee.prototype.D;Ee.fromNumber=en;Ee.fromString=vy;var DP=function(){return new ra},NP=function(){return Ka()},Gc=Ga,VP=L_,LP=xr,Xd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},po=M_,MP=Ne,UP=qt,ts=Ee;const Jd="@firebase/firestore";/**
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
 */let As="10.7.0";/**
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
 */const Ar=new ju("@firebase/firestore");function Ds(){return Ar.logLevel}function B(t,...e){if(Ar.logLevel<=ue.DEBUG){const n=e.map(Eh);Ar.debug(`Firestore (${As}): ${t}`,...n)}}function En(t,...e){if(Ar.logLevel<=ue.ERROR){const n=e.map(Eh);Ar.error(`Firestore (${As}): ${t}`,...n)}}function hs(t,...e){if(Ar.logLevel<=ue.WARN){const n=e.map(Eh);Ar.warn(`Firestore (${As}): ${t}`,...n)}}function Eh(t){if(typeof t=="string")return t;try{/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${As}) INTERNAL ASSERTION FAILED: `+t;throw En(e),new Error(e)}function Ie(t,e){t||X()}function re(t,e){return t}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class wy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class $P{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jP{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new wy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new ot(e)}}class BP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class HP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new BP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.R=n.token,new qP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function zP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ey{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=zP(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function fs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new qe(0,0))}static max(){return new te(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ri{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ri.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ri?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends Ri{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const KP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Ri{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return KP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new $(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new $(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Pe.fromString(e))}static fromName(e){return new z(Pe.fromString(e).popFirst(5))}static empty(){return new z(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Pe(e.slice()))}}function GP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new zn(s,z.empty(),e)}function QP(t){return new zn(t.readTime,t.key,-1)}class zn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zn(te.min(),z.empty(),-1)}static max(){return new zn(te.max(),z.empty(),-1)}}function YP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const XP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ki(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==XP)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(s=>s?C.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new C((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new C((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Gi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Th{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Th._e=-1;function rc(t){return t==null}function oa(t){return t===0&&1/t==-1/0}function ZP(t){return typeof t=="number"&&Number.isInteger(t)&&!oa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Zd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Dr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ty(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new go(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new go(this.root,e,this.comparator,!1)}getReverseIterator(){return new go(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new go(this.root,e,this.comparator,!0)}}class go{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Je.RED,this.left=s??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Je(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ep(this.data.getIterator())}getIteratorFrom(e){return new ep(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class ep{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new kt([])}unionWith(e){let n=new rt(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Iy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Iy("Invalid base64 string: "+i):i}}(e);return new pt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const eC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=eC.exec(t);if(Ie(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rr(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
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
 */function Ih(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ah(t){const e=t.mapValue.fields.__previous_value__;return Ih(e)?Ah(e):e}function bi(t){const e=Kn(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
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
 */class tC{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Pi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const mo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ih(t)?4:nC(t)?9007199254740991:10:X()}function cn(t,e){if(t===e)return!0;const n=br(t);if(n!==br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bi(t).isEqual(bi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Kn(s.timestampValue),a=Kn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Rr(s.bytesValue).isEqual(Rr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Be(s.doubleValue),a=Be(i.doubleValue);return o===a?oa(o)===oa(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return fs(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Zd(o)!==Zd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!cn(o[c],a[c])))return!1;return!0}(t,e);default:return X()}}function Ci(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function ds(t,e){if(t===e)return 0;const n=br(t),r=br(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Be(i.integerValue||i.doubleValue),c=Be(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return tp(t.timestampValue,e.timestampValue);case 4:return tp(bi(t),bi(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Rr(i),c=Rr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ve(a[l],c[l]);if(u!==0)return u}return ve(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ve(Be(i.latitude),Be(o.latitude));return a!==0?a:ve(Be(i.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=ds(a[l],c[l]);if(u)return u}return ve(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===mo.mapValue&&o===mo.mapValue)return 0;if(i===mo.mapValue)return 1;if(o===mo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=ve(c[h],u[h]);if(f!==0)return f;const d=ds(a[c[h]],l[u[h]]);if(d!==0)return d}return ve(c.length,u.length)}(t.mapValue,e.mapValue);default:throw X()}}function tp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Kn(t),r=Kn(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function ps(t){return zl(t)}function zl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Rr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=zl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${zl(n.fields[o])}`;return s+"}"}(t.mapValue):X()}function np(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kl(t){return!!t&&"integerValue"in t}function Rh(t){return!!t&&"arrayValue"in t}function rp(t){return!!t&&"nullValue"in t}function sp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xo(t){return!!t&&"mapValue"in t}function ti(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Dr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ti(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ti(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ti(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ti(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());xo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];xo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Dr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Tt(ti(this.value))}}function Ay(t){const e=[];return Dr(t.fields,(n,r)=>{const s=new tt([n]);if(xo(r)){const i=Ay(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new kt(e)}/**
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
 */class ct{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ct(e,0,te.min(),te.min(),te.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,te.min(),te.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,te.min(),te.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class aa{constructor(e,n){this.position=e,this.inclusive=n}}function ip(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=ds(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function op(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ca{constructor(e,n="asc"){this.field=e,this.dir=n}}function rC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ry{}class He extends Ry{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new iC(e,n,r):n==="array-contains"?new cC(e,r):n==="in"?new lC(e,r):n==="not-in"?new uC(e,r):n==="array-contains-any"?new hC(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new oC(e,r):new aC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ds(n,this.value)):n!==null&&br(this.value)===br(n)&&this.matchesComparison(ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends Ry{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Wt(e,n)}matches(e){return by(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function by(t){return t.op==="and"}function Py(t){return sC(t)&&by(t)}function sC(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function Gl(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+ps(t.value);if(Py(t))return t.filters.map(e=>Gl(e)).join(",");{const e=t.filters.map(n=>Gl(n)).join(",");return`${t.op}(${e})`}}function Cy(t,e){return t instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.field.isEqual(s.field)&&cn(r.value,s.value)}(t,e):t instanceof Wt?function(r,s){return s instanceof Wt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Cy(o,s.filters[a]),!0):!1}(t,e):void X()}function Sy(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${ps(n.value)}`}(t):t instanceof Wt?function(n){return n.op.toString()+" {"+n.getFilters().map(Sy).join(" ,")+"}"}(t):"Filter"}class iC extends He{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class oC extends He{constructor(e,n){super(e,"in",n),this.keys=ky("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aC extends He{constructor(e,n){super(e,"not-in",n),this.keys=ky("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ky(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class cC extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rh(n)&&Ci(n.arrayValue,this.value)}}class lC extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ci(this.value.arrayValue,n)}}class uC extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ci(this.value.arrayValue,n)}}class hC extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ci(this.value.arrayValue,r))}}/**
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
 */class fC{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function ap(t,e=null,n=[],r=[],s=null,i=null,o=null){return new fC(t,e,n,r,s,i,o)}function bh(t){const e=re(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),rc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ps(r)).join(",")),e.ce=n}return e.ce}function Ph(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Cy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!op(t.startAt,e.startAt)&&op(t.endAt,e.endAt)}function Ql(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Qi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function dC(t,e,n,r,s,i,o,a){return new Qi(t,e,n,r,s,i,o,a)}function Ch(t){return new Qi(t)}function cp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Oy(t){return t.collectionGroup!==null}function ni(t){const e=re(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new rt(tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new ca(i,r))}),n.has(tt.keyField().canonicalString())||e.le.push(new ca(tt.keyField(),r))}return e.le}function on(t){const e=re(t);return e.he||(e.he=pC(e,ni(t))),e.he}function pC(t,e){if(t.limitType==="F")return ap(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ca(s.field,i)});const n=t.endAt?new aa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new aa(t.startAt.position,t.startAt.inclusive):null;return ap(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yl(t,e){const n=t.filters.concat([e]);return new Qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xl(t,e,n){return new Qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sc(t,e){return Ph(on(t),on(e))&&t.limitType===e.limitType}function xy(t){return`${bh(on(t))}|lt:${t.limitType}`}function Hr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Sy(s)).join(", ")}]`),rc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ps(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ps(s)).join(",")),`Target(${r})`}(on(t))}; limitType=${t.limitType})`}function ic(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ni(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=ip(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ni(r),s)||r.endAt&&!function(o,a,c){const l=ip(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ni(r),s))}(t,e)}function gC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Dy(t){return(e,n)=>{let r=!1;for(const s of ni(t)){const i=mC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function mC(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?ds(c,l):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class Rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Dr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ty(this.inner)}size(){return this.innerSize}}/**
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
 */const _C=new Oe(z.comparator);function Tn(){return _C}const Ny=new Oe(z.comparator);function qs(...t){let e=Ny;for(const n of t)e=e.insert(n.key,n);return e}function Vy(t){let e=Ny;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function fr(){return ri()}function Ly(){return ri()}function ri(){return new Rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const yC=new Oe(z.comparator),vC=new rt(z.comparator);function ce(...t){let e=vC;for(const n of t)e=e.add(n);return e}const wC=new rt(ve);function EC(){return wC}/**
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
 */function My(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oa(e)?"-0":e}}function Uy(t){return{integerValue:""+t}}function TC(t,e){return ZP(e)?Uy(e):My(t,e)}/**
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
 */class oc{constructor(){this._=void 0}}function IC(t,e,n){return t instanceof la?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ih(i)&&(i=Ah(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Si?$y(t,e):t instanceof ki?jy(t,e):function(s,i){const o=Fy(s,i),a=lp(o)+lp(s.Ie);return Kl(o)&&Kl(s.Ie)?Uy(a):My(s.serializer,a)}(t,e)}function AC(t,e,n){return t instanceof Si?$y(t,e):t instanceof ki?jy(t,e):n}function Fy(t,e){return t instanceof ua?function(r){return Kl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class la extends oc{}class Si extends oc{constructor(e){super(),this.elements=e}}function $y(t,e){const n=By(e);for(const r of t.elements)n.some(s=>cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ki extends oc{constructor(e){super(),this.elements=e}}function jy(t,e){let n=By(e);for(const r of t.elements)n=n.filter(s=>!cn(s,r));return{arrayValue:{values:n}}}class ua extends oc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function lp(t){return Be(t.integerValue||t.doubleValue)}function By(t){return Rh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function RC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Si&&s instanceof Si||r instanceof ki&&s instanceof ki?fs(r.elements,s.elements,cn):r instanceof ua&&s instanceof ua?cn(r.Ie,s.Ie):r instanceof la&&s instanceof la}(t.transform,e.transform)}class bC{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Do(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ac{}function Hy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Sh(t.key,Lt.none()):new Yi(t.key,t.data,Lt.none());{const n=t.data,r=Tt.empty();let s=new rt(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new tr(t.key,r,new kt(s.toArray()),Lt.none())}}function PC(t,e,n){t instanceof Yi?function(s,i,o){const a=s.value.clone(),c=hp(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof tr?function(s,i,o){if(!Do(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=hp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(qy(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function si(t,e,n,r){return t instanceof Yi?function(i,o,a,c){if(!Do(i.precondition,o))return a;const l=i.value.clone(),u=fp(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof tr?function(i,o,a,c){if(!Do(i.precondition,o))return a;const l=fp(i.fieldTransforms,c,o),u=o.data;return u.setAll(qy(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Do(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function CC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Fy(r.transform,s||null);i!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,i))}return n||null}function up(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fs(r,s,(i,o)=>RC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yi extends ac{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class tr extends ac{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hp(t,e,n){const r=new Map;Ie(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,AC(o,a,n[s]))}return r}function fp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,IC(i,o,e))}return r}class Sh extends ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class SC extends ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class kC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&PC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=si(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=si(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ly();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Hy(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&fs(this.mutations,e.mutations,(n,r)=>up(n,r))&&fs(this.baseMutations,e.baseMutations,(n,r)=>up(n,r))}}class kh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ie(e.mutations.length===r.length);let s=function(){return yC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new kh(e,n,r,s)}}/**
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
 */class OC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var je,he;function DC(t){switch(t){default:return X();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function Wy(t){if(t===void 0)return En("GRPC error has no .code"),R.UNKNOWN;switch(t){case je.OK:return R.OK;case je.CANCELLED:return R.CANCELLED;case je.UNKNOWN:return R.UNKNOWN;case je.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case je.INTERNAL:return R.INTERNAL;case je.UNAVAILABLE:return R.UNAVAILABLE;case je.UNAUTHENTICATED:return R.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case je.NOT_FOUND:return R.NOT_FOUND;case je.ALREADY_EXISTS:return R.ALREADY_EXISTS;case je.PERMISSION_DENIED:return R.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case je.ABORTED:return R.ABORTED;case je.OUT_OF_RANGE:return R.OUT_OF_RANGE;case je.UNIMPLEMENTED:return R.UNIMPLEMENTED;case je.DATA_LOSS:return R.DATA_LOSS;default:return X()}}(he=je||(je={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function NC(){return new TextEncoder}/**
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
 */const VC=new ts([4294967295,4294967295],0);function dp(t){const e=NC().encode(t),n=new UP;return n.update(e),new Uint8Array(n.digest())}function pp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ts([n,r],0),new ts([s,i],0)]}class Oh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ws(`Invalid padding: ${n}`);if(r<0)throw new Ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ws(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ws(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=ts.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(ts.fromNumber(r)));return s.compare(VC)===1&&(s=new ts([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=dp(e),[r,s]=pp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Oh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=dp(e),[r,s]=pp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class cc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Xi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new cc(te.min(),s,new Oe(ve),Tn(),ce())}}class Xi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xi(r,n,ce(),ce(),ce())}}/**
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
 */class No{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class zy{constructor(e,n){this.targetId=e,this.fe=n}}class Ky{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class gp{constructor(){this.ge=0,this.pe=_p(),this.ye=pt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ce(),n=ce(),r=ce();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:X()}}),new Xi(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=_p()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ie(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class LC{constructor(e){this.Le=e,this.ke=new Map,this.qe=Tn(),this.Qe=mp(),this.Ke=new Oe(ve)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Ql(i))if(r===0){const o=new z(i.path);this.We(n,o,ct.newNoDocument(o,te.min()))}else Ie(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Rr(r).toUint8Array()}catch(c){if(c instanceof Iy)return hs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Oh(o,s,i)}catch(c){return hs(c instanceof Ws?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Ql(a.target)){const c=new z(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,ct.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=ce();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new cc(e,n,this.Ke,this.qe,r);return this.qe=Tn(),this.Qe=mp(),this.Ke=new Oe(ve),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new gp,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new rt(ve),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new gp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function mp(){return new Oe(z.comparator)}function _p(){return new Oe(z.comparator)}const MC={asc:"ASCENDING",desc:"DESCENDING"},UC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},FC={and:"AND",or:"OR"};class $C{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jl(t,e){return t.useProto3Json||rc(e)?e:{value:e}}function ha(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jC(t,e){return ha(t,e.toTimestamp())}function an(t){return Ie(!!t),te.fromTimestamp(function(n){const r=Kn(n);return new qe(r.seconds,r.nanos)}(t))}function xh(t,e){return function(r){return new Pe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Qy(t){const e=Pe.fromString(t);return Ie(Zy(e)),e}function Zl(t,e){return xh(t.databaseId,e.path)}function Qc(t,e){const n=Qy(e);if(n.get(1)!==t.databaseId.projectId)throw new $(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(Yy(n))}function eu(t,e){return xh(t.databaseId,e)}function BC(t){const e=Qy(t);return e.length===4?Pe.emptyPath():Yy(e)}function tu(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Yy(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yp(t,e,n){return{name:Zl(t,e),fields:n.value.mapValue.fields}}function HC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ie(u===void 0||typeof u=="string"),pt.fromBase64String(u||"")):(Ie(u===void 0||u instanceof Uint8Array),pt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?R.UNKNOWN:Wy(l.code);return new $(u,l.message||"")}(o);n=new Ky(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Qc(t,r.document.name),i=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):te.min(),a=new Tt({mapValue:{fields:r.document.fields}}),c=ct.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new No(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Qc(t,r.document),i=r.readTime?an(r.readTime):te.min(),o=ct.newNoDocument(s,i),a=r.removedTargetIds||[];n=new No([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Qc(t,r.document),i=r.removedTargetIds||[];n=new No([],i,s,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new xC(s,i),a=r.targetId;n=new zy(a,o)}}return n}function qC(t,e){let n;if(e instanceof Yi)n={update:yp(t,e.key,e.value)};else if(e instanceof Sh)n={delete:Zl(t,e.key)};else if(e instanceof tr)n={update:yp(t,e.key,e.data),updateMask:ZC(e.fieldMask)};else{if(!(e instanceof SC))return X();n={verify:Zl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof la)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Si)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ki)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ua)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:jC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X()}(t,e.precondition)),n}function WC(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?an(s.updateTime):an(i);return o.isEqual(te.min())&&(o=an(i)),new bC(o,s.transformResults||[])}(n,e))):[]}function zC(t,e){return{documents:[eu(t,e.path)]}}function KC(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=eu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=eu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Jy(Wt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:qr(h.field),direction:YC(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Jl(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function GC(t){let e=BC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ie(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=Xy(h);return f instanceof Wt&&Py(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(p){return new ca(Wr(p.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,rc(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,d=h.values||[];return new aa(d,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,d=h.values||[];return new aa(d,f)}(n.endAt)),dC(e,s,o,i,a,"F",c,l)}function QC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Xy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Wr(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Wr(n.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Wr(n.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Wr(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return He.create(Wr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wt.create(n.compositeFilter.filters.map(r=>Xy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function YC(t){return MC[t]}function XC(t){return UC[t]}function JC(t){return FC[t]}function qr(t){return{fieldPath:t.canonicalString()}}function Wr(t){return tt.fromServerFormat(t.fieldPath)}function Jy(t){return t instanceof He?function(n){if(n.op==="=="){if(sp(n.value))return{unaryFilter:{field:qr(n.field),op:"IS_NAN"}};if(rp(n.value))return{unaryFilter:{field:qr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(sp(n.value))return{unaryFilter:{field:qr(n.field),op:"IS_NOT_NAN"}};if(rp(n.value))return{unaryFilter:{field:qr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qr(n.field),op:XC(n.op),value:n.value}}}(t):t instanceof Wt?function(n){const r=n.getFilters().map(s=>Jy(s));return r.length===1?r[0]:{compositeFilter:{op:JC(n.op),filters:r}}}(t):X()}function ZC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Zy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Un{constructor(e,n,r,s,i=te.min(),o=te.min(),a=pt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class eS{constructor(e){this.ut=e}}function tS(t){const e=GC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xl(e,e.limit,"L"):e}/**
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
 */class nS{constructor(){this.on=new rS}addToCollectionParentIndex(e,n){return this.on.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(zn.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(zn.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class rS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(Pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(Pe.comparator)).toArray()}}/**
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
 */class gs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new gs(0)}static Nn(){return new gs(-1)}}/**
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
 */class sS{constructor(){this.changes=new Rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class oS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&si(r.mutation,s,kt.empty(),qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const s=fr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=qs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Tn();const o=ri(),a=function(){return ri()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof tr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),si(u.mutation,l,u.mutation.getFieldMask(),qe.now())):o.set(l.key,kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new iS(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ri();let s=new Oe((o,a)=>o-a),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||kt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ce()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Ly();u.forEach(f=>{if(!i.has(f)){const d=Hy(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Oy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):C.resolve(fr());let a=-1,c=i;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?C.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ce())).next(u=>({batchId:a,changes:Vy(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(r=>{let s=qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=qs();return this.indexManager.getCollectionParents(e,i).next(a=>C.forEach(a,c=>{const l=function(h,f){return new Qi(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,ct.newInvalidDocument(u)))});let a=qs();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&si(u.mutation,l,kt.empty(),qe.now()),ic(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class aS{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return C.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:an(s.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:tS(s.bundledQuery),readTime:an(s.readTime)}}(n)),C.resolve()}}/**
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
 */class cS{constructor(){this.overlays=new Oe(z.comparator),this.lr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=fr();return C.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const s=fr(),i=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return C.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Oe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=fr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=fr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return C.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new OC(n,r));let i=this.lr.get(n);i===void 0&&(i=ce(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
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
 */class Dh{constructor(){this.hr=new rt(Ge.Pr),this.Ir=new rt(Ge.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Ge(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new z(new Pe([])),r=new Ge(n,e),s=new Ge(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new z(new Pe([])),r=new Ge(n,e),s=new Ge(n,e+1);let i=ce();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ge(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return z.comparator(e.key,n.key)||ve(e.gr,n.gr)}static Tr(e,n){return ve(e.gr,n.gr)||z.comparator(e.key,n.key)}}/**
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
 */class lS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new rt(Ge.Pr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kC(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Ge(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(ve);return n.forEach(s=>{const i=new Ge(s,0),o=new Ge(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),C.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;z.isDocumentKey(i)||(i=i.child(""));const o=new Ge(new z(i),0);let a=new rt(ve);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),C.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ie(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return C.forEach(n.mutations,s=>{const i=new Ge(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Ge(n,0),s=this.yr.firstAfterOrEqual(r);return C.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class uS{constructor(e){this.Cr=e,this.docs=function(){return new Oe(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tn();const o=n.path,a=new z(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||YP(QP(u),r)<=0||(s.has(u.key)||ic(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,n,r,s){X()}vr(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hS(this)}getSize(e){return C.resolve(this.size)}}class hS extends sS{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class fS{constructor(e){this.persistence=e,this.Fr=new Rs(n=>bh(n),Ph),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Dh,this.targetCount=0,this.Nr=gs.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),C.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new gs(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.kn(n),C.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Or.containsKey(n))}}/**
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
 */class dS{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Th(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new fS(this),this.indexManager=new nS,this.remoteDocumentCache=function(s){return new uS(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new eS(n),this.Kr=new aS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new lS(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const s=new pS(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return C.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class pS extends JP{constructor(e){super(),this.currentSequenceNumber=e}}class Nh{constructor(e){this.persistence=e,this.Gr=new Dh,this.zr=null}static jr(e){return new Nh(e)}get Hr(){if(this.zr)return this.zr;throw X()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),C.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Hr,r=>{const s=z.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return C.or([()=>C.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class Vh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=ce(),s=ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Vh(e,n.fromCache,r,s)}}/**
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
 */class gS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class mS{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new gS;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(Ds()<=ue.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Hr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),C.resolve()):(Ds()<=ue.DEBUG&&B("QueryEngine","Query:",Hr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Ds()<=ue.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Hr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(n))):C.resolve())}zi(e,n){if(cp(n))return C.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Xl(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ce(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,Xl(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,s){return cp(n)||s.isEqual(te.min())?C.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?C.resolve(null):(Ds()<=ue.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hr(n)),this.Xi(e,o,n,GP(s,-1)).next(a=>a))})}Yi(e,n){let r=new rt(Dy(e));return n.forEach((s,i)=>{ic(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return Ds()<=ue.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Hr(n)),this.Gi.getDocumentsMatchingQuery(e,n,zn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class _S{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Oe(ve),this.ns=new Rs(i=>bh(i),Ph),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oS(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function yS(t,e,n,r){return new _S(t,e,n,r)}async function ev(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ce();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function vS(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let d=C.resolve();return f.forEach(p=>{d=d.next(()=>u.getEntry(c,p)).next(_=>{const y=l.docVersions.get(p);Ie(y!==null),_.version.compareTo(y)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),u.addEntry(_)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ce();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function tv(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function wS(t,e){const n=re(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(pt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(_,y,w){return _.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(f,d,u)&&a.push(n.qr.updateTargetData(i,d))});let c=Tn(),l=ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(ES(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(te.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=s,i))}function ES(t,e,n){let r=ce(),s=ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Tn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(te.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function TS(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function IS(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Un(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function nu(t,e,n){const r=re(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Gi(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function vp(t,e,n){const r=re(t);let s=te.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=re(c),f=h.ns.get(u);return f!==void 0?C.resolve(h.ts.get(f)):h.qr.getTargetData(l,u)}(r,o,on(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?i:ce())).next(a=>(AS(r,gC(e),a),{documents:a,ls:i})))}function AS(t,e,n){let r=t.rs.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class wp{constructor(){this.activeTargetIds=EC()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RS{constructor(){this.eo=new wp,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new wp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bS{ro(e){}shutdown(){}}/**
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
 */class Ep{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _o=null;function Yc(){return _o===null?_o=function(){return 268435456+Math.round(2147483648*Math.random())}():_o++,"0x"+_o.toString(16)}/**
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
 */const PS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class CS{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const it="WebChannelConnection";class SS extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=Yc(),c=this.So(n,r);B("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,i,o),this.Do(n,c,l,s).then(u=>(B("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw hs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+As}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=PS[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=Yc();return new Promise((o,a)=>{const c=new MP;c.setWithCredentials(!0),c.listenOnce(VP.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Gc.NO_ERROR:const u=c.getResponseJson();B(it,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Gc.TIMEOUT:B(it,`RPC '${e}' ${i} timed out`),a(new $(R.DEADLINE_EXCEEDED,"Request time out"));break;case Gc.HTTP_ERROR:const h=c.getStatus();if(B(it,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(y){const w=y.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(w)>=0?w:R.UNKNOWN}(d.status);a(new $(p,d.message))}else a(new $(R.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new $(R.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{B(it,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);B(it,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}vo(e,n,r){const s=Yc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=DP(),a=NP(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");B(it,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,d=!1;const p=new CS({co:y=>{d?B(it,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(f||(B(it,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),B(it,`RPC '${e}' stream ${s} sending:`,y),h.send(y))},lo:()=>h.close()}),_=(y,w,T)=>{y.listen(w,P=>{try{T(P)}catch(O){setTimeout(()=>{throw O},0)}})};return _(h,po.EventType.OPEN,()=>{d||B(it,`RPC '${e}' stream ${s} transport opened.`)}),_(h,po.EventType.CLOSE,()=>{d||(d=!0,B(it,`RPC '${e}' stream ${s} transport closed`),p.Ro())}),_(h,po.EventType.ERROR,y=>{d||(d=!0,hs(it,`RPC '${e}' stream ${s} transport errored:`,y),p.Ro(new $(R.UNAVAILABLE,"The operation could not be completed")))}),_(h,po.EventType.MESSAGE,y=>{var w;if(!d){const T=y.data[0];Ie(!!T);const P=T,O=P.error||((w=P[0])===null||w===void 0?void 0:w.error);if(O){B(it,`RPC '${e}' stream ${s} received error:`,O);const F=O.status;let L=function(H){const ye=je[H];if(ye!==void 0)return Wy(ye)}(F),ne=O.message;L===void 0&&(L=R.INTERNAL,ne="Unknown error status: "+F+" with message "+O.message),d=!0,p.Ro(new $(L,ne)),h.close()}else B(it,`RPC '${e}' stream ${s} received:`,T),p.Vo(T)}}),_(a,LP.STAT_EVENT,y=>{y.stat===Xd.PROXY?B(it,`RPC '${e}' stream ${s} detected buffering proxy`):y.stat===Xd.NOPROXY&&B(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{p.Ao()},0),p}}function Xc(){return typeof document<"u"?document:null}/**
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
 */function lc(t){return new $C(t,!0)}/**
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
 */class nv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class rv{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new nv(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(En(n.toString()),En("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new $(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kS extends rv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=HC(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?an(o.readTime):te.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=tu(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Ql(c)?{documents:zC(i,c)}:{query:KC(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Gy(i,o.resumeToken);const l=Jl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=ha(i,o.snapshotVersion.toTimestamp());const l=Jl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=QC(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=tu(this.serializer),n.removeTarget=e,this.e_(n)}}class OS extends rv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=WC(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.I_(r,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=tu(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>qC(this.serializer,r))};this.e_(n)}}/**
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
 */class xS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new $(R.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(R.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(R.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class DS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(En(n),this.f_=!1):B("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class NS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Nr(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=re(c);l.C_.add(4),await Ji(l),l.M_.set("Unknown"),l.C_.delete(4),await uc(l)}(this))})}),this.M_=new DS(r,s)}}async function uc(t){if(Nr(t))for(const e of t.v_)await e(!0)}async function Ji(t){for(const e of t.v_)await e(!1)}function sv(t,e){const n=re(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Uh(n)?Mh(n):bs(n).Ho()&&Lh(n,e))}function iv(t,e){const n=re(t),r=bs(n);n.D_.delete(e),r.Ho()&&ov(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Nr(n)&&n.M_.set("Unknown"))}function Lh(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}bs(t).u_(e)}function ov(t,e){t.x_.Oe(e),bs(t).c_(e)}function Mh(t){t.x_=new LC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),bs(t).start(),t.M_.g_()}function Uh(t){return Nr(t)&&!bs(t).jo()&&t.D_.size>0}function Nr(t){return re(t).C_.size===0}function av(t){t.x_=void 0}async function VS(t){t.D_.forEach((e,n)=>{Lh(t,e)})}async function LS(t,e){av(t),Uh(t)?(t.M_.w_(e),Mh(t)):t.M_.set("Unknown")}async function MS(t,e,n){if(t.M_.set("Online"),e instanceof Ky&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fa(t,r)}else if(e instanceof No?t.x_.$e(e):e instanceof zy?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(te.min()))try{const r=await tv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.D_.get(l);u&&i.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.D_.get(c);if(!u)return;i.D_.set(c,u.withResumeToken(pt.EMPTY_BYTE_STRING,u.snapshotVersion)),ov(i,c);const h=new Un(u.target,c,l,u.sequenceNumber);Lh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await fa(t,r)}}async function fa(t,e,n){if(!Gi(e))throw e;t.C_.add(1),await Ji(t),t.M_.set("Offline"),n||(n=()=>tv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await uc(t)})}function cv(t,e){return e().catch(n=>fa(t,n,e))}async function hc(t){const e=re(t),n=Gn(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;US(e);)try{const s=await TS(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,FS(e,s)}catch(s){await fa(e,s)}lv(e)&&uv(e)}function US(t){return Nr(t)&&t.b_.length<10}function FS(t,e){t.b_.push(e);const n=Gn(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function lv(t){return Nr(t)&&!Gn(t).jo()&&t.b_.length>0}function uv(t){Gn(t).start()}async function $S(t){Gn(t).E_()}async function jS(t){const e=Gn(t);for(const n of t.b_)e.P_(n.mutations)}async function BS(t,e,n){const r=t.b_.shift(),s=kh.from(r,e,n);await cv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await hc(t)}async function HS(t,e){e&&Gn(t).h_&&await async function(r,s){if(function(o){return DC(o)&&o!==R.ABORTED}(s.code)){const i=r.b_.shift();Gn(r).Yo(),await cv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await hc(r)}}(t,e),lv(t)&&uv(t)}async function Tp(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=Nr(n);n.C_.add(3),await Ji(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await uc(n)}async function qS(t,e){const n=re(t);e?(n.C_.delete(2),await uc(n)):e||(n.C_.add(2),await Ji(n),n.M_.set("Unknown"))}function bs(t){return t.O_||(t.O_=function(n,r,s){const i=re(n);return i.A_(),new kS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:VS.bind(null,t),Io:LS.bind(null,t),a_:MS.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Uh(t)?Mh(t):t.M_.set("Unknown")):(await t.O_.stop(),av(t))})),t.O_}function Gn(t){return t.N_||(t.N_=function(n,r,s){const i=re(n);return i.A_(),new OS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:$S.bind(null,t),Io:HS.bind(null,t),T_:jS.bind(null,t),I_:BS.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await hc(t)):(await t.N_.stop(),t.b_.length>0&&(B("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class Fh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Fh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $h(t,e){if(En("AsyncQueue",`${e}: ${t}`),Gi(t))return new $(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ns{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=qs(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new ns(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ip{constructor(){this.B_=new Oe(z.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):X():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ms{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ms(e,n,ns.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class WS{constructor(){this.k_=void 0,this.listeners=[]}}class zS{constructor(){this.queries=new Rs(e=>xy(e),sc),this.onlineState="Unknown",this.q_=new Set}}async function hv(t,e){const n=re(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new WS),s)try{i.k_=await n.onListen(r)}catch(o){const a=$h(o,`Initialization of query '${Hr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&jh(n)}async function fv(t,e){const n=re(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function KS(t,e){const n=re(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&jh(n)}function GS(t,e,n){const r=re(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function jh(t){t.q_.forEach(e=>{e.next()})}class dv{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class pv{constructor(e){this.key=e}}class gv{constructor(e){this.key=e}}class QS{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ce(),this.mutatedKeys=ce(),this._a=Dy(e),this.aa=new ns(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Ip,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=ic(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),_=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let y=!1;f&&d?f.data.isEqual(d.data)?p!==_&&(r.track({type:3,doc:d}),y=!0):this.ha(f,d)||(r.track({type:2,doc:d}),y=!0,(c&&this._a(d,c)>0||l&&this._a(d,l)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),y=!0):f&&!d&&(r.track({type:1,doc:f}),y=!0,(c||l)&&(a=!0)),y&&(d?(o=o.add(d),i=_?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(d,p){const _=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return _(d)-_(p)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],c=this.oa.size===0&&this.current&&!s?1:0,l=c!==this.sa;return this.sa=c,o.length!==0||l?{snapshot:new ms(this.query,e.aa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Ip,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=ce(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new gv(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new pv(r))}),n}da(e){this.ia=e.ls,this.oa=ce();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return ms.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class YS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class XS{constructor(e){this.key=e,this.Ra=!1}}class JS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Rs(a=>xy(a),sc),this.fa=new Map,this.ga=new Set,this.pa=new Oe(z.comparator),this.ya=new Map,this.wa=new Dh,this.Sa={},this.ba=new Map,this.Da=gs.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function ZS(t,e){const n=l1(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await IS(n.localStore,on(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await e1(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&sv(n.remoteStore,o)}return s}async function e1(t,e,n,r,s){t.va=(h,f,d)=>async function(_,y,w,T){let P=y.view.ca(w);P.Zi&&(P=await vp(_.localStore,y.query,!1).then(({documents:ne})=>y.view.ca(ne,P)));const O=T&&T.targetChanges.get(y.targetId),F=T&&T.targetMismatches.get(y.targetId)!=null,L=y.view.applyChanges(P,_.isPrimaryClient,O,F);return Rp(_,y.targetId,L.Ta),L.snapshot}(t,h,f,d);const i=await vp(t.localStore,e,!0),o=new QS(e,i.ls),a=o.ca(i.documents),c=Xi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Rp(t,n,l.Ta);const u=new YS(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function t1(t,e){const n=re(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!sc(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await nu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),iv(n.remoteStore,r.targetId),ru(n,r.targetId)}).catch(Ki)):(ru(n,r.targetId),await nu(n.localStore,r.targetId,!0))}async function n1(t,e,n){const r=u1(t);try{const s=await function(o,a){const c=re(o),l=qe.now(),u=a.reduce((d,p)=>d.add(p.key),ce());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Tn(),_=ce();return c.ss.getEntries(d,u).next(y=>{p=y,p.forEach((w,T)=>{T.isValidDocument()||(_=_.add(w))})}).next(()=>c.localDocuments.getOverlayedDocuments(d,p)).next(y=>{h=y;const w=[];for(const T of a){const P=CC(T,h.get(T.key).overlayedDocument);P!=null&&w.push(new tr(T.key,P,Ay(P.value.mapValue),Lt.exists(!0)))}return c.mutationQueue.addMutationBatch(d,l,w,a)}).next(y=>{f=y;const w=y.applyToLocalDocumentSet(h,_);return c.documentOverlayCache.saveOverlays(d,y.batchId,w)})}).then(()=>({batchId:f.batchId,changes:Vy(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new Oe(ve)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Zi(r,s.changes),await hc(r.remoteStore)}catch(s){const i=$h(s,"Failed to persist write");n.reject(i)}}async function mv(t,e){const n=re(t);try{const r=await wS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?Ie(o.Ra):s.removedDocuments.size>0&&(Ie(o.Ra),o.Ra=!1))}),await Zi(n,r,e)}catch(r){await Ki(r)}}function Ap(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=re(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.listeners)f.Q_(a)&&(l=!0)}),l&&jh(c)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function r1(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new Oe(z.comparator);o=o.insert(i,ct.newNoDocument(i,te.min()));const a=ce().add(i),c=new cc(te.min(),new Map,new Oe(ve),o,a);await mv(r,c),r.pa=r.pa.remove(i),r.ya.delete(e),Bh(r)}else await nu(r.localStore,e,!1).then(()=>ru(r,e,n)).catch(Ki)}async function s1(t,e){const n=re(t),r=e.batch.batchId;try{const s=await vS(n.localStore,e);yv(n,r,null),_v(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zi(n,s)}catch(s){await Ki(s)}}async function i1(t,e,n){const r=re(t);try{const s=await function(o,a){const c=re(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ie(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);yv(r,e,n),_v(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zi(r,s)}catch(s){await Ki(s)}}function _v(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function yv(t,e,n){const r=re(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function ru(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||vv(t,r)})}function vv(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(iv(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Bh(t))}function Rp(t,e,n){for(const r of n)r instanceof pv?(t.wa.addReference(r.key,e),o1(t,r)):r instanceof gv?(B("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||vv(t,r.key)):X()}function o1(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(B("SyncEngine","New document in limbo: "+n),t.ga.add(r),Bh(t))}function Bh(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new z(Pe.fromString(e)),r=t.Da.next();t.ya.set(r,new XS(n)),t.pa=t.pa.insert(n,r),sv(t.remoteStore,new Un(on(Ch(n.path)),r,"TargetPurposeLimboResolution",Th._e))}}async function Zi(t,e,n){const r=re(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Vh.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(c,l){const u=re(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>C.forEach(l,f=>C.forEach(f.ki,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>C.forEach(f.qi,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Gi(h))throw h;B("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=u.ts.get(f),p=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(p);u.ts=u.ts.insert(f,_)}}}(r.localStore,i))}async function a1(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await ev(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(c=>{c.reject(new $(R.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zi(n,r._s)}}function c1(t,e){const n=re(t),r=n.ya.get(e);if(r&&r.Ra)return ce().add(r.key);{let s=ce();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function l1(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=c1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=r1.bind(null,e),e.Va.a_=KS.bind(null,e.eventManager),e.Va.Fa=GS.bind(null,e.eventManager),e}function u1(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=s1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=i1.bind(null,e),e}class bp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=lc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return yS(this.persistence,new mS,e.initialUser,this.serializer)}createPersistence(e){return new dS(Nh.jr,this.serializer)}createSharedClientState(e){return new RS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class h1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ap(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=a1.bind(null,this.syncEngine),await qS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zS}()}createDatastore(e){const n=lc(e.databaseInfo.databaseId),r=function(i){return new SS(i)}(e.databaseInfo);return function(i,o,a,c){return new xS(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new NS(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Ap(this.syncEngine,n,0),function(){return Ep.D()?new Ep:new bS}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new JS(s,i,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=re(n);B("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Ji(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class wv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):En("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class f1{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=Ey.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{B("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(B("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$h(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jc(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ev(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Pp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await p1(t);B("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Tp(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Tp(e.remoteStore,i)),t._onlineComponents=e}function d1(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function p1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!d1(n))throw n;hs("Error using user provided cache. Falling back to memory cache: "+n),await Jc(t,new bp)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Jc(t,new bp);return t._offlineComponents}async function Ev(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await Pp(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await Pp(t,new h1))),t._onlineComponents}function g1(t){return Ev(t).then(e=>e.syncEngine)}async function Tv(t){const e=await Ev(t),n=e.eventManager;return n.onListen=ZS.bind(null,e.syncEngine),n.onUnlisten=t1.bind(null,e.syncEngine),n}function m1(t,e,n={}){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new wv({next:f=>{o.enqueueAndForget(()=>fv(i,h));const d=f.docs.has(a);!d&&f.fromCache?l.reject(new $(R.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&c&&c.source==="server"?l.reject(new $(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new dv(Ch(a.path),u,{includeMetadataChanges:!0,J_:!0});return hv(i,h)}(await Tv(t),t.asyncQueue,e,n,r)),r.promise}function _1(t,e,n={}){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new wv({next:f=>{o.enqueueAndForget(()=>fv(i,h)),f.fromCache&&c.source==="server"?l.reject(new $(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new dv(a,u,{includeMetadataChanges:!0,J_:!0});return hv(i,h)}(await Tv(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Iv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Cp=new Map;/**
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
 */function Av(t,e,n){if(!n)throw new $(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function y1(t,e,n,r){if(e===!0&&r===!0)throw new $(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sp(t){if(!z.isDocumentKey(t))throw new $(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kp(t){if(z.isDocumentKey(t))throw new $(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fc(t);throw new $(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Op{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}y1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Iv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new $(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new $(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new $(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Op({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Op(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new FP;switch(r.type){case"firstParty":return new HP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Cp.get(n);r&&(B("ComponentProvider","Removing Datastore"),Cp.delete(n),r.terminate())}(this),Promise.resolve()}}function v1(t,e,n,r={}){var s;const i=(t=zt(t,dc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&hs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ot.MOCK_USER;else{a=Vm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new $(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ot(l)}t._authCredentials=new $P(new wy(a,c))}}/**
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
 */class Ps{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ps(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class Hn extends Ps{constructor(e,n,r){super(e,n,Ch(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new z(e))}withConverter(e){return new Hn(this.firestore,e,this._path)}}function yo(t,e,...n){if(t=De(t),Av("collection","path",e),t instanceof dc){const r=Pe.fromString(e,...n);return kp(r),new Hn(t,null,r)}{if(!(t instanceof wt||t instanceof Hn))throw new $(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return kp(r),new Hn(t.firestore,null,r)}}function bt(t,e,...n){if(t=De(t),arguments.length===1&&(e=Ey.newId()),Av("doc","path",e),t instanceof dc){const r=Pe.fromString(e,...n);return Sp(r),new wt(t,null,new z(r))}{if(!(t instanceof wt||t instanceof Hn))throw new $(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Sp(r),new wt(t.firestore,t instanceof Hn?t.converter:null,new z(r))}}/**
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
 */class w1{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new nv(this,"async_queue_retry"),this.iu=()=>{const n=Xc();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Xc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Xc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new yn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Gi(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw En("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=Fh.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&X()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class Vr extends dc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new w1}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rv(this),this._firestoreClient.terminate()}}function E1(t,e){const n=typeof t=="object"?t:Hu(),r=typeof t=="string"?t:e||"(default)",s=La(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=xm("firestore");i&&v1(s,...i)}return s}function Hh(t){return t._firestoreClient||Rv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Rv(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new tC(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Iv(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new f1(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class _s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _s(pt.fromBase64String(e))}catch(n){throw new $(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _s(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class pc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qh{constructor(e){this._methodName=e}}/**
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
 */class Wh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */const T1=/^__.*__$/;class I1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new tr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yi(e,this.data,n,this.fieldTransforms)}}class bv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new tr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Pv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class zh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new zh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return da(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(Pv(this.Iu)&&T1.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class A1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||lc(e)}pu(e,n,r,s=!1){return new zh({Iu:e,methodName:n,gu:r,path:tt.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gc(t){const e=t._freezeSettings(),n=lc(t._databaseId);return new A1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Cv(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);Kh("Data must be an object, but it was:",o,r);const a=Sv(r,o);let c,l;if(i.merge)c=new kt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=su(e,h,n);if(!o.contains(f))throw new $(R.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Ov(u,f)||u.push(f)}c=new kt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new I1(new Tt(a),c,l)}class mc extends qh{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mc}}function R1(t,e,n,r){const s=t.pu(1,e,n);Kh("Data must be an object, but it was:",s,r);const i=[],o=Tt.empty();Dr(r,(c,l)=>{const u=Gh(e,c,n);l=De(l);const h=s.Ru(u);if(l instanceof mc)i.push(u);else{const f=eo(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new kt(i);return new bv(o,a,s.fieldTransforms)}function b1(t,e,n,r,s,i){const o=t.pu(1,e,n),a=[su(e,r,n)],c=[s];if(i.length%2!=0)throw new $(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(su(e,i[f])),c.push(i[f+1]);const l=[],u=Tt.empty();for(let f=a.length-1;f>=0;--f)if(!Ov(l,a[f])){const d=a[f];let p=c[f];p=De(p);const _=o.Ru(d);if(p instanceof mc)l.push(d);else{const y=eo(p,_);y!=null&&(l.push(d),u.set(d,y))}}const h=new kt(l);return new bv(u,h,o.fieldTransforms)}function P1(t,e,n,r=!1){return eo(n,t.pu(r?4:3,e))}function eo(t,e){if(kv(t=De(t)))return Kh("Unsupported field value:",e,t),Sv(t,e);if(t instanceof qh)return function(r,s){if(!Pv(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=eo(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return TC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=qe.fromDate(r);return{timestampValue:ha(s.serializer,i)}}if(r instanceof qe){const i=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ha(s.serializer,i)}}if(r instanceof Wh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _s)return{bytesValue:Gy(s.serializer,r._byteString)};if(r instanceof wt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${fc(r)}`)}(t,e)}function Sv(t,e){const n={};return Ty(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dr(t,(r,s)=>{const i=eo(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function kv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof Wh||t instanceof _s||t instanceof wt||t instanceof qh)}function Kh(t,e,n){if(!kv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=fc(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function su(t,e,n){if((e=De(e))instanceof pc)return e._internalPath;if(typeof e=="string")return Gh(t,e);throw da("Field path arguments must be of type string or ",t,!1,void 0,n)}const C1=new RegExp("[~\\*/\\[\\]]");function Gh(t,e,n){if(e.search(C1)>=0)throw da(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pc(...e.split("."))._internalPath}catch{throw da(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function da(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new $(R.INVALID_ARGUMENT,a+t+c)}function Ov(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class xv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new S1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Dv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class S1 extends xv{data(){return super.data()}}function Dv(t,e){return typeof e=="string"?Gh(t,e):e instanceof pc?e._internalPath:e._delegate._internalPath}/**
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
 */function k1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qh{}class O1 extends Qh{}function x1(t,e,...n){let r=[];e instanceof Qh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Xh).length,a=i.filter(c=>c instanceof Yh).length;if(o>1||o>0&&a>0)throw new $(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Yh extends O1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Yh(e,n,r)}_apply(e){const n=this._parse(e);return Nv(e._query,n),new Ps(e.firestore,e.converter,Yl(e._query,n))}_parse(e){const n=gc(e.firestore);return function(i,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new $(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Dp(h,u);const d=[];for(const p of h)d.push(xp(c,i,p));f={arrayValue:{values:d}}}else f=xp(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Dp(h,u),f=P1(a,o,h,u==="in"||u==="not-in");return He.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Xh extends Qh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Xh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Wt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Nv(o,c),o=Yl(o,c)}(e._query,n),new Ps(e.firestore,e.converter,Yl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function xp(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new $(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Oy(e)&&n.indexOf("/")!==-1)throw new $(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Pe.fromString(n));if(!z.isDocumentKey(r))throw new $(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return np(t,new z(r))}if(n instanceof wt)return np(t,n._key);throw new $(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fc(n)}.`)}function Dp(t,e){if(!Array.isArray(t)||t.length===0)throw new $(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Nv(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class D1{convertValue(e,n="none"){switch(br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Dr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Wh(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ah(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bi(e));default:return null}}convertTimestamp(e){const n=Kn(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);Ie(Zy(r));const s=new Pi(r.get(1),r.get(3)),i=new z(r.popFirst(5));return s.isEqual(n)||En(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Vv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Lv extends xv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Dv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Vo extends Lv{data(e={}){return super.data(e)}}class N1{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new zs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Vo(this._firestore,this._userDataWriter,r.key,r,new zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Vo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new zs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Vo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new zs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:V1(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function V1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
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
 */function Ns(t){t=zt(t,wt);const e=zt(t.firestore,Vr);return m1(Hh(e),t._key).then(n=>U1(e,t,n))}class Mv extends D1{constructor(e){super(),this.firestore=e}convertBytes(e){return new _s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function L1(t){t=zt(t,Ps);const e=zt(t.firestore,Vr),n=Hh(e),r=new Mv(e);return k1(t._query),_1(n,t._query).then(s=>new N1(e,r,t,s))}function Np(t,e,n){t=zt(t,wt);const r=zt(t.firestore,Vr),s=Vv(t.converter,e,n);return _c(r,[Cv(gc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Lt.none())])}function vo(t,e,n,...r){t=zt(t,wt);const s=zt(t.firestore,Vr),i=gc(s);let o;return o=typeof(e=De(e))=="string"||e instanceof pc?b1(i,"updateDoc",t._key,e,n,r):R1(i,"updateDoc",t._key,e),_c(s,[o.toMutation(t._key,Lt.exists(!0))])}function M1(t){return _c(zt(t.firestore,Vr),[new Sh(t._key,Lt.none())])}function Zc(t,e){const n=zt(t.firestore,Vr),r=bt(t),s=Vv(t.converter,e);return _c(n,[Cv(gc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function _c(t,e){return function(r,s){const i=new yn;return r.asyncQueue.enqueueAndForget(async()=>n1(await g1(r),s,i)),i.promise}(Hh(t),e)}function U1(t,e,n){const r=n.docs.get(e._key),s=new Mv(t);return new Lv(t,s,e._key,r,new zs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){As=s})(kr),Tr(new Wn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Vr(new jP(r.getProvider("auth-internal")),new WP(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new $(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),nn(Jd,"4.4.0",e),nn(Jd,"4.4.0","esm2017")})();/**
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
 */const Uv="firebasestorage.googleapis.com",Fv="storageBucket",F1=2*60*1e3,$1=10*60*1e3;/**
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
 */class Le extends ln{constructor(e,n,r=0){super(el(e),`Firebase Storage: ${n} (${el(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return el(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ve;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ve||(Ve={}));function el(t){return"storage/"+t}function Jh(){const t="An unknown error occurred, please check the error payload for server response.";return new Le(Ve.UNKNOWN,t)}function j1(t){return new Le(Ve.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function B1(t){return new Le(Ve.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function H1(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Le(Ve.UNAUTHENTICATED,t)}function q1(){return new Le(Ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function W1(t){return new Le(Ve.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function z1(){return new Le(Ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function K1(){return new Le(Ve.CANCELED,"User canceled the upload/download.")}function G1(t){return new Le(Ve.INVALID_URL,"Invalid URL '"+t+"'.")}function Q1(t){return new Le(Ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Y1(){return new Le(Ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Fv+"' property when initializing the app?")}function X1(){return new Le(Ve.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function J1(){return new Le(Ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Z1(t){return new Le(Ve.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function iu(t){return new Le(Ve.INVALID_ARGUMENT,t)}function $v(){return new Le(Ve.APP_DELETED,"The Firebase app was deleted.")}function ek(t){return new Le(Ve.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ii(t,e){return new Le(Ve.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Vs(t){throw new Le(Ve.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=yt.makeFromUrl(e,n)}catch{return new yt(e,"")}if(r.path==="")return r;throw Q1(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(O){O.path_=decodeURIComponent(O.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},_=n===Uv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",w=new RegExp(`^https?://${_}/${s}/${y}`,"i"),P=[{regex:a,indices:c,postModify:i},{regex:d,indices:p,postModify:l},{regex:w,indices:{bucket:1,path:2},postModify:l}];for(let O=0;O<P.length;O++){const F=P[O],L=F.regex.exec(e);if(L){const ne=L[F.indices.bucket];let j=L[F.indices.path];j||(j=""),r=new yt(ne,j),F.postModify(r);break}}if(r==null)throw G1(e);return r}}class tk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function nk(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...y){l||(l=!0,e.apply(null,y))}function h(y){s=setTimeout(()=>{s=null,t(d,c())},y)}function f(){i&&clearTimeout(i)}function d(y,...w){if(l){f();return}if(y){f(),u.call(null,y,...w);return}if(c()||o){f(),u.call(null,y,...w);return}r<64&&(r*=2);let P;a===1?(a=2,P=0):P=(r+Math.random())*1e3,h(P)}let p=!1;function _(y){p||(p=!0,f(),!l&&(s!==null?(y||(a=2),clearTimeout(s),h(0)):y||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,_(!0)},n),_}function rk(t){t(!1)}/**
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
 */function sk(t){return t!==void 0}function ik(t){return typeof t=="object"&&!Array.isArray(t)}function Zh(t){return typeof t=="string"||t instanceof String}function Vp(t){return ef()&&t instanceof Blob}function ef(){return typeof Blob<"u"}function ou(t,e,n,r){if(r<e)throw iu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw iu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function to(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function jv(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var yr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(yr||(yr={}));/**
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
 */function ok(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class ak{constructor(e,n,r,s,i,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new wo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===yr.NO_ERROR,c=i.getStatus();if(!a||ok(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===yr.ABORT;r(!1,new wo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new wo(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());sk(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Jh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?$v():K1();o(c)}else{const c=z1();o(c)}};this.canceled_?n(!1,new wo(!1,null,!0)):this.backoffId_=nk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ck(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function lk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function uk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function hk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function fk(t,e,n,r,s,i,o=!0){const a=jv(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return uk(l,e),ck(l,n),lk(l,i),hk(l,r),new ak(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function dk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function pk(...t){const e=dk();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ef())return new Blob(t);throw new Le(Ve.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function gk(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function mk(t){if(typeof atob>"u")throw Z1("base-64");return atob(t)}/**
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
 */const tn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class tl{constructor(e,n){this.data=e,this.contentType=n||null}}function _k(t,e){switch(t){case tn.RAW:return new tl(Bv(e));case tn.BASE64:case tn.BASE64URL:return new tl(Hv(t,e));case tn.DATA_URL:return new tl(vk(e),wk(e))}throw Jh()}function Bv(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function yk(t){let e;try{e=decodeURIComponent(t)}catch{throw ii(tn.DATA_URL,"Malformed data URL.")}return Bv(e)}function Hv(t,e){switch(t){case tn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ii(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case tn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ii(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=mk(e)}catch(s){throw s.message.includes("polyfill")?s:ii(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class qv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ii(tn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Ek(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function vk(t){const e=new qv(t);return e.base64?Hv(tn.BASE64,e.rest):yk(e.rest)}function wk(t){return new qv(t).contentType}function Ek(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Mn{constructor(e,n){let r=0,s="";Vp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Vp(this.data_)){const r=this.data_,s=gk(r,e,n);return s===null?null:new Mn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Mn(r,!0)}}static getBlob(...e){if(ef()){const n=e.map(r=>r instanceof Mn?r.data_:r);return new Mn(pk.apply(null,n))}else{const n=e.map(o=>Zh(o)?_k(tn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Mn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function tf(t){let e;try{e=JSON.parse(t)}catch{return null}return ik(e)?e:null}/**
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
 */function Tk(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ik(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Wv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Ak(t,e){return e}class gt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Ak}}let Eo=null;function Rk(t){return!Zh(t)||t.length<2?t:Wv(t)}function nf(){if(Eo)return Eo;const t=[];t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));function e(i,o){return Rk(o)}const n=new gt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new gt("size");return s.xform=r,t.push(s),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),Eo=t,Eo}function bk(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new yt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Pk(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return bk(r,t),r}function zv(t,e,n){const r=tf(e);return r===null?null:Pk(t,r,n)}function Ck(t,e,n,r){const s=tf(e);if(s===null||!Zh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),d=to(f,n,r),p=jv({alt:"media",token:l});return d+p})[0]}function Sk(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}/**
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
 */const Lp="prefixes",Mp="items";function kk(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Lp])for(const s of n[Lp]){const i=s.replace(/\/$/,""),o=t._makeStorageReference(new yt(e,i));r.prefixes.push(o)}if(n[Mp])for(const s of n[Mp]){const i=t._makeStorageReference(new yt(e,s.name));r.items.push(i)}return r}function Ok(t,e,n){const r=tf(n);return r===null?null:kk(t,e,r)}class yc{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function rf(t){if(!t)throw Jh()}function Kv(t,e){function n(r,s){const i=zv(t,s,e);return rf(i!==null),i}return n}function xk(t,e){function n(r,s){const i=Ok(t,e,s);return rf(i!==null),i}return n}function Dk(t,e){function n(r,s){const i=zv(t,s,e);return rf(i!==null),Ck(i,s,t.host,t._protocol)}return n}function sf(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=q1():s=H1():n.getStatus()===402?s=B1(t.bucket):n.getStatus()===403?s=W1(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Gv(t){const e=sf(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=j1(t.path)),i.serverResponse=s.serverResponse,i}return n}function Nk(t,e,n){const r=e.fullServerUrl(),s=to(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new yc(s,i,Kv(t,n),o);return a.errorHandler=Gv(e),a}function Vk(t,e,n,r,s){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",n&&n.length>0&&(i.delimiter=n),r&&(i.pageToken=r),s&&(i.maxResults=s);const o=e.bucketOnlyServerUrl(),a=to(o,t.host,t._protocol),c="GET",l=t.maxOperationRetryTime,u=new yc(a,c,xk(t,e.bucket),l);return u.urlParams=i,u.errorHandler=sf(e),u}function Lk(t,e,n){const r=e.fullServerUrl(),s=to(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new yc(s,i,Dk(t,n),o);return a.errorHandler=Gv(e),a}function Mk(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Uk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Mk(null,e)),r}function Fk(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let P="";for(let O=0;O<2;O++)P=P+Math.random().toString().slice(2);return P}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Uk(e,r,s),u=Sk(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",d=Mn.getBlob(h,r,f);if(d===null)throw X1();const p={name:l.fullPath},_=to(i,t.host,t._protocol),y="POST",w=t.maxUploadRetryTime,T=new yc(_,y,Kv(t,n),w);return T.urlParams=p,T.headers=o,T.body=d.uploadData(),T.errorHandler=sf(e),T}class $k{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=yr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=yr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=yr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Vs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Vs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Vs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Vs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Vs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class jk extends $k{initXhr(){this.xhr_.responseType="text"}}function vc(){return new jk}/**
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
 */class Pr{constructor(e,n){this._service=e,n instanceof yt?this._location=n:this._location=yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Pr(e,n)}get root(){const e=new yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Wv(this._location.path)}get storage(){return this._service}get parent(){const e=Tk(this._location.path);if(e===null)return null;const n=new yt(this._location.bucket,e);return new Pr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ek(e)}}function Bk(t,e,n){t._throwIfRoot("uploadBytes");const r=Fk(t.storage,t._location,nf(),new Mn(e,!0),n);return t.storage.makeRequestWithTokens(r,vc).then(s=>({metadata:s,ref:t}))}function Hk(t){const e={prefixes:[],items:[]};return Qv(t,e).then(()=>e)}async function Qv(t,e,n){const s=await qk(t,{pageToken:n});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&await Qv(t,e,s.nextPageToken)}function qk(t,e){e!=null&&typeof e.maxResults=="number"&&ou("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=Vk(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,vc)}function Wk(t){t._throwIfRoot("getMetadata");const e=Nk(t.storage,t._location,nf());return t.storage.makeRequestWithTokens(e,vc)}function zk(t){t._throwIfRoot("getDownloadURL");const e=Lk(t.storage,t._location,nf());return t.storage.makeRequestWithTokens(e,vc).then(n=>{if(n===null)throw J1();return n})}function Kk(t,e){const n=Ik(t._location.path,e),r=new yt(t._location.bucket,n);return new Pr(t.storage,r)}/**
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
 */function Gk(t){return/^[A-Za-z]+:\/\//.test(t)}function Qk(t,e){return new Pr(t,e)}function Yv(t,e){if(t instanceof of){const n=t;if(n._bucket==null)throw Y1();const r=new Pr(n,n._bucket);return e!=null?Yv(r,e):r}else return e!==void 0?Kk(t,e):t}function Yk(t,e){if(e&&Gk(e)){if(t instanceof of)return Qk(t,e);throw iu("To use ref(service, url), the first argument must be a Storage instance.")}else return Yv(t,e)}function Up(t,e){const n=e==null?void 0:e[Fv];return n==null?null:yt.makeFromBucketSpec(n,t)}function Xk(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Vm(s,t.app.options.projectId))}class of{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Uv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=F1,this._maxUploadRetryTime=$1,this._requests=new Set,s!=null?this._bucket=yt.makeFromBucketSpec(s,this._host):this._bucket=Up(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yt.makeFromBucketSpec(this._url,e):this._bucket=Up(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ou("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ou("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Pr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new tk($v());{const o=fk(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Fp="@firebase/storage",$p="0.12.0";/**
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
 */const Xv="storage";function nl(t,e,n){return t=De(t),Bk(t,e,n)}function jp(t){return t=De(t),Wk(t)}function Jk(t){return t=De(t),Hk(t)}function Bp(t){return t=De(t),zk(t)}function Fr(t,e){return t=De(t),Yk(t,e)}function Zk(t=Hu(),e){t=De(t);const r=La(t,Xv).getImmediate({identifier:e}),s=xm("storage");return s&&eO(r,...s),r}function eO(t,e,n,r={}){Xk(t,e,n,r)}function tO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new of(n,r,s,e,kr)}function nO(){Tr(new Wn(Xv,tO,"PUBLIC").setMultipleInstances(!0)),nn(Fp,$p,""),nn(Fp,$p,"esm2017")}nO();const rO={apiKey:"AIzaSyDCpxQUg5JZrpuudKmZYr1yFn6fRajaAVw",authDomain:"quickshot-d0e67.firebaseapp.com",projectId:"quickshot-d0e67",storageBucket:"quickshot-d0e67.appspot.com",messagingSenderId:"614201508083",appId:"1:614201508083:web:3d1d4ac4baed76f66db786"},sO=Um(rO),Dt=E1(sO),$r=Zk();let Me={login:(t,e)=>{const n=Zs();return new Promise((r,s)=>{n!==null?_R(n,t,e).then(i=>{i&&n.currentUser?n.currentUser.getIdToken().then(o=>{r({status:!0,message:"Login successfully."})}):r({status:!1,message:"Incorrect Email or Password."})}).catch(i=>{r({status:!1,message:"Incorrect Email or Password."})}):r({status:!1,message:"Incorrect Email or Password."})})},getUser:()=>Zs().currentUser,logout:async()=>new Promise(t=>{Zs().signOut().then(()=>{t(!0)}).catch(n=>{t(!0)})}),findProject:async t=>{const e=bt(Dt,"projects",t),n=await Ns(e);if(n.exists()){const r=n.data(),s=Object.keys(r).includes("storagePath")?r.storagePath:null;return{status:!0,data:{id:t,image:s?await Me.getProjectLogo(s):null,name:r.name,url:r.url,storagePath:s}}}return{status:!1}},getProjects:async()=>{const t=x1(yo(Dt,"projects"));try{const e=await L1(t),n=[];return e.forEach(async r=>{const s=r.data(),i={id:r.id,name:s.name,url:s.url,storagePath:s.storagePath?s.storagePath:null,image:null};n.push(i)}),{status:!0,data:n}}catch(e){return console.log("error, ",e),typeof e=="object"&&Object.keys(e).includes("code")&&e.code=="permission-denied"?{status:!1,code:"permission_denied"}:{status:!1,code:""}}},updateProjects:async(t,e,n)=>{const r=bt(Dt,"projects",t);await vo(r,{name:e,url:n})},updateProjectLogo:async(t,e)=>{let n=e.name.split(".").pop(),r=`${e.name.split(".").slice(0,-1).join(".")}-${new Date().getTime()}.${n}`;const s=`${t}/logo/${r}`,i=Fr($r,s);await nl(i,e);const o=bt(Dt,"projects",t);await vo(o,{filename:r,storagePath:s})},updateProjectLogoBase64:async(t,e,n)=>{for(var r=atob(e.split(",")[1]),s=new Array(r.length),i=0;i<r.length;i++)s[i]=r.charCodeAt(i);var o=new Uint8Array(s);let a=n.split(".").pop(),c=`${n.split(".").slice(0,-1).join(".")}-${new Date().getTime()}.${a}`;const l=`${t}/logo/${c}`,u=Fr($r,l);await nl(u,o);const h=bt(Dt,"projects",t);await vo(h,{filename:c,storagePath:l})},getProjectLogo:async t=>{let e=null;if(sessionStorage.getItem(btoa(t)))return atob(sessionStorage.getItem(btoa(t))??"");if(t)try{const n=Fr($r,t);await jp(n),e=await Bp(n),sessionStorage.setItem(btoa(t),btoa(e))}catch(n){console.log("ERR",n)}return e},updateProjectHome:async(t,e)=>{const n=bt(Dt,"projectHeading",t);await Np(n,{title:e.title,sub_title:e.sub_title,updated_at:new Date().toISOString()})},getProjectHome:async t=>{const e=bt(Dt,"projectHeading",t),n=await Ns(e);if(n.exists()){const r=n.data();return{status:!0,data:{title:r.title,sub_title:r.sub_title,banner:r.banner,bannerPath:r.bannerPath}}}else return{status:!1}},addFile:async(t,e)=>{let n=await Me.uploadFile(t,e);if(n.status){const r=await Me.getUser();if(!r)return{status:!1};const s=yo(Dt,r.uid),i={image:n.data.fileName,imagePath:n.data.storagePath};return await Zc(s,i),{status:!0,imageID:n.data.folderName}}else return{status:!1}},addProjectReview:async(t,e)=>{const n=bt(Dt,"projectData",t);if((await Ns(n)).exists()){const s=yo(n,"review");Zc(s,e)}else{Np(n,{});const s=yo(n,"review");Zc(s,e)}},updateProjectReview:async(t,e,n)=>{const r=bt(Dt,"projectData",t);if((await Ns(r)).exists()){const i=bt(r,"review",e);vo(i,n).then(()=>{console.log("your data updated")}).catch(o=>{console.log("something went wrong , Review Not Found"),console.log(o)})}else console.log("data not found")},deleteProjectReview:async(t,e)=>{bt(Dt,"projectHeading",e);const n=bt(Dt,"projectData",t),r=bt(n,"review",e);(await Ns(n)).exists()?M1(r).then(()=>({status:!0,message:"Review Deleted Successfully"})).catch(()=>(console.log("something went wrong , Review Not Found"),{status:!1,message:"Something went Wrong ,"})):console.log("data not found")},getImage:async t=>{const e=await Me.getFilePath(t);return e?Me.getFile(e):!1},getFile:async t=>{let e=null;if(sessionStorage.getItem(btoa(t)))return atob(sessionStorage.getItem(btoa(t))??"");if(t)try{const n=Fr($r,t);await jp(n),e=await Bp(n),sessionStorage.setItem(btoa(t),btoa(e))}catch(n){console.log("ERR",n)}return e},getRandomInt:(t,e)=>(t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t),getRandomString:()=>{const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Me.getRandomInt(5,10);let n=" ";const r=t.length;for(let s=0;s<e;s++)n+=t.charAt(Math.floor(Math.random()*r));return n.trim()},checkFileExist:async t=>await Me.getFilePath(t)!==!1,getFilePath:async t=>{const e=Fr($r,`images/${t}`);try{let n=await Jk(e);return n.items.length>0?n.items[0].fullPath:!1}catch{return!1}},getNewFileName:async()=>{const t=Me.getRandomString();return await Me.checkFileExist(t)?await Me.getNewFileName():t},uploadFile:async(t,e)=>{const n=await Me.getNewFileName();let r=e.split(".").pop(),s=`${e.split(".").slice(0,-1).join(".")}-${new Date().getTime()}.${r}`;const i=`images/${n}/${s}`,o=Fr($r,i);try{let a=await nl(o,t);return{status:!0,data:{fileName:s,storagePath:i,folderName:n}}}catch(a){return console.log("File upload Error :: ",a),{status:!1,data:null}}}};const wc=Nu({id:"auth",state:()=>({fAuth:Zs(),user:null,applicationUser:null,is_fetching:!1,initProcessDone:!1,projects:null,has_permission:null}),getters:{getUser(){return this.applicationUser!==null?this.applicationUser:{name:"",email:""}},getProjects(){return[]}},actions:{async login(t,e){let n=await Me.login(t,e);return n.status&&await this.fetchUser(!0),n},async logout(){return await Me.logout(),await this.fetchUser(!0),{status:!0,message:"Logout success."}},async fetchUser(t=!1){return(this.user==null||t)&&await new Promise((e,n)=>{const r=Zs().onAuthStateChanged(s=>{r(),this.user=s,s&&(this.applicationUser={name:typeof s.displayName=="string"?s.displayName:"-",email:typeof s.email=="string"?s.email:""}),e(s)},n)}),this.user},async fetchProjects(t=!1){return this.projects},async updateProject(t,e,n){await Me.updateProjects(t,e,n),await this.fetchProjects(!0)},async updateProjectLogo(t,e){await Me.updateProjectLogo(t,e),await this.fetchProjects(!0)},async updateProjectLogoBase64(t,e,n){await Me.updateProjectLogoBase64(t,e,n),await this.fetchProjects(!0)},async setProjectHome(t,e){await Me.setProjectHome(t,e),await this.fetchProjects(!0)}}}),Jv=Nu({id:"project",state:()=>({project:null,heading:null,projectUid:""}),getters:{isProjectLoad(){return this.projectUid!==""&&this.project!==null},getHeading(){return this.heading!==null?this.heading:{banner:"",title:"",bannerPath:"",sub_title:""}}},actions:{async loadProject(t,e=!1){if(t!==this.projectUid||this.project==null||e){const n=await Me.findProject(t);n.status?(this.project=n.data,this.projectUid=t,this.heading=null):(this.project=null,this.heading=null,this.projectUid="")}},async loadProjectHeading(t=!1){if(this.heading==null||t){const e=await Me.getProjectHome(this.projectUid);e.status?this.heading=e.data:this.heading=null}}}}),iO=Xn({__name:"App",setup(t){const e=ge(!0),n=wc();Jv();const r=Fu(),s=Uu();return Di(async()=>{let i=await n.fetchUser();n.initProcessDone=!0,e.value=!1,r.meta&&Object.keys(r.meta).includes("guard")&&(r.meta.guard=="auth"&&i==null?s.push({name:"login"}):r.meta.guard=="unauth"&&i!==null&&s.push({name:"home"}))}),(i,o)=>e.value?hi("",!0):(at(),Ou(K(Mu),{key:0}))}}),Ls=new Map;function oO(t){const e=_u();function n(a){var c;const l=Ls.get(t)||new Set;l.add(a),Ls.set(t,l);const u=()=>s(a);return(c=e==null?void 0:e.cleanups)==null||c.push(u),u}function r(a){function c(...l){s(c),a(...l)}return n(c)}function s(a){const c=Ls.get(t);c&&(c.delete(a),c.size||i())}function i(){Ls.delete(t)}function o(a,c){var l;(l=Ls.get(t))==null||l.forEach(u=>u(a,c))}return{on:n,once:r,off:s,emit:o,reset:i}}function Hp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Oi(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Hp(Object(n),!0).forEach(function(r){aO(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Hp(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function aO(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pa(t){return typeof t=="function"}function au(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function Ec(t){return pa(t.$validator)?Oi({},t):{$validator:t}}function Zv(t){return typeof t=="object"?t.$valid:t}function ew(t){return t.$validator||t}function cO(t,e){if(!au(t))throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof t}`);if(!au(e)&&!pa(e))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=Ec(e);return n.$params=Oi(Oi({},n.$params||{}),t),n}function lO(t,e){if(!pa(t)&&typeof K(t)!="string")throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof t}`);if(!au(e)&&!pa(e))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=Ec(e);return n.$message=t,n}function uO(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];const n=Ec(t);return Oi(Oi({},n),{},{$async:!0,$watchTargets:e})}function hO(t){return{$validator(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return K(e).reduce((i,o,a)=>{const c=Object.entries(o).reduce((l,u)=>{let[h,f]=u;const d=t[h]||{},p=Object.entries(d).reduce((_,y)=>{let[w,T]=y;const O=ew(T).call(this,f,o,a,...r),F=Zv(O);if(_.$data[w]=O,_.$data.$invalid=!F||!!_.$data.$invalid,_.$data.$error=_.$data.$invalid,!F){let L=T.$message||"";const ne=T.$params||{};typeof L=="function"&&(L=L({$pending:!1,$invalid:!F,$params:ne,$model:f,$response:O})),_.$errors.push({$property:h,$message:L,$params:ne,$response:O,$model:f,$pending:!1,$validator:w})}return{$valid:_.$valid&&F,$data:_.$data,$errors:_.$errors}},{$valid:!0,$data:{},$errors:[]});return l.$data[h]=p.$data,l.$errors[h]=p.$errors,{$valid:l.$valid&&p.$valid,$data:l.$data,$errors:l.$errors}},{$valid:!0,$data:{},$errors:{}});return{$valid:i.$valid&&c.$valid,$data:i.$data.concat(c.$data),$errors:i.$errors.concat(c.$errors)}},{$valid:!0,$data:[],$errors:[]})},$message:e=>{let{$response:n}=e;return n?n.$errors.map(r=>Object.values(r).map(s=>s.map(i=>i.$message)).reduce((s,i)=>s.concat(i),[])):[]}}}const af=t=>{if(t=K(t),Array.isArray(t))return!!t.length;if(t==null)return!1;if(t===!1)return!0;if(t instanceof Date)return!isNaN(t.getTime());if(typeof t=="object"){for(let e in t)return!0;return!1}return!!String(t).length},fO=t=>(t=K(t),Array.isArray(t)?t.length:typeof t=="object"?Object.keys(t).length:String(t).length);function nr(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r=>(r=K(r),!af(r)||e.every(s=>(s.lastIndex=0,s.test(r))))}var rl=Object.freeze({__proto__:null,forEach:hO,len:fO,normalizeValidatorObject:Ec,regex:nr,req:af,unwrap:K,unwrapNormalizedValidator:ew,unwrapValidatorResponse:Zv,withAsync:uO,withMessage:lO,withParams:cO});nr(/^[a-zA-Z]*$/);nr(/^[a-zA-Z0-9]*$/);nr(/^\d*(\.\d+)?$/);const dO=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var pO=nr(dO),gO={$validator:pO,$message:"Value is not a valid email address",$params:{type:"email"}};function mO(t){return typeof t=="string"&&(t=t.trim()),af(t)}var qp={$validator:mO,$message:"Value is required",$params:{type:"required"}};const _O=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;nr(_O);nr(/(^[0-9]*$)|(^-[0-9]+$)/);nr(/^[-]?\d*(\.\d+)?$/);function Wp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function xn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Wp(Object(n),!0).forEach(function(r){yO(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Wp(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function yO(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function zp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(t).reduce((n,r)=>(e.includes(r)||(n[r]=K(t[r])),n),{})}function ga(t){return typeof t=="function"}function vO(t){return _n(t)||vr(t)}function tw(t,e,n){let r=t;const s=e.split(".");for(let i=0;i<s.length;i++){if(!r[s[i]])return n;r=r[s[i]]}return r}function sl(t,e,n){return ie(()=>t.some(r=>tw(e,r,{[n]:!1})[n]))}function Kp(t,e,n){return ie(()=>t.reduce((r,s)=>{const i=tw(e,s,{[n]:!1})[n]||[];return r.concat(i)},[]))}function nw(t,e,n,r){return t.call(r,K(e),K(n),r)}function rw(t){return t.$valid!==void 0?!t.$valid:!t}function wO(t,e,n,r,s,i,o){let{$lazy:a,$rewardEarly:c}=s,l=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],u=arguments.length>8?arguments[8]:void 0,h=arguments.length>9?arguments[9]:void 0,f=arguments.length>10?arguments[10]:void 0;const d=ge(!!r.value),p=ge(0);n.value=!1;const _=jt([e,r].concat(l,f),()=>{if(a&&!r.value||c&&!h.value&&!n.value)return;let y;try{y=nw(t,e,u,o)}catch(w){y=Promise.reject(w)}p.value++,n.value=!!p.value,d.value=!1,Promise.resolve(y).then(w=>{p.value--,n.value=!!p.value,i.value=w,d.value=rw(w)}).catch(w=>{p.value--,n.value=!!p.value,i.value=w,d.value=!0})},{immediate:!0,deep:typeof e=="object"});return{$invalid:d,$unwatch:_}}function EO(t,e,n,r,s,i,o,a){let{$lazy:c,$rewardEarly:l}=r;const u=()=>({}),h=ie(()=>{if(c&&!n.value||l&&!a.value)return!1;let f=!0;try{const d=nw(t,e,o,i);s.value=d,f=rw(d)}catch(d){s.value=d}return f});return{$unwatch:u,$invalid:h}}function TO(t,e,n,r,s,i,o,a,c,l,u){const h=ge(!1),f=t.$params||{},d=ge(null);let p,_;t.$async?{$invalid:p,$unwatch:_}=wO(t.$validator,e,h,n,r,d,s,t.$watchTargets,c,l,u):{$invalid:p,$unwatch:_}=EO(t.$validator,e,n,r,d,s,c,l);const y=t.$message;return{$message:ga(y)?ie(()=>y(zp({$pending:h,$invalid:p,$params:zp(f),$model:e,$response:d,$validator:i,$propertyPath:a,$property:o}))):y||"",$params:f,$pending:h,$invalid:p,$response:d,$unwatch:_}}function IO(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=K(t),n=Object.keys(e),r={},s={},i={};let o=null;return n.forEach(a=>{const c=e[a];switch(!0){case ga(c.$validator):r[a]=c;break;case ga(c):r[a]={$validator:c};break;case a==="$validationGroups":o=c;break;case a.startsWith("$"):i[a]=c;break;default:s[a]=c}}),{rules:r,nestedValidators:s,config:i,validationGroups:o}}const AO="__root";function RO(t,e,n,r,s,i,o,a,c){const l=Object.keys(t),u=r.get(s,t),h=ge(!1),f=ge(!1),d=ge(0);if(u){if(!u.$partial)return u;u.$unwatch(),h.value=u.$dirty.value}const p={$dirty:h,$path:s,$touch:()=>{h.value||(h.value=!0)},$reset:()=>{h.value&&(h.value=!1)},$commit:()=>{}};return l.length?(l.forEach(_=>{p[_]=TO(t[_],e,p.$dirty,i,o,_,n,s,c,f,d)}),p.$externalResults=ie(()=>a.value?[].concat(a.value).map((_,y)=>({$propertyPath:s,$property:n,$validator:"$externalResults",$uid:`${s}-externalResult-${y}`,$message:_,$params:{},$response:null,$pending:!1})):[]),p.$invalid=ie(()=>{const _=l.some(y=>K(p[y].$invalid));return f.value=_,!!p.$externalResults.value.length||_}),p.$pending=ie(()=>l.some(_=>K(p[_].$pending))),p.$error=ie(()=>p.$dirty.value?p.$pending.value||p.$invalid.value:!1),p.$silentErrors=ie(()=>l.filter(_=>K(p[_].$invalid)).map(_=>{const y=p[_];return Yn({$propertyPath:s,$property:n,$validator:_,$uid:`${s}-${_}`,$message:y.$message,$params:y.$params,$response:y.$response,$pending:y.$pending})}).concat(p.$externalResults.value)),p.$errors=ie(()=>p.$dirty.value?p.$silentErrors.value:[]),p.$unwatch=()=>l.forEach(_=>{p[_].$unwatch()}),p.$commit=()=>{f.value=!0,d.value=Date.now()},r.set(s,t,p),p):(u&&r.set(s,t,p),p)}function bO(t,e,n,r,s,i,o){const a=Object.keys(t);return a.length?a.reduce((c,l)=>(c[l]=cu({validations:t[l],state:e,key:l,parentKey:n,resultsCache:r,globalConfig:s,instance:i,externalResults:o}),c),{}):{}}function PO(t,e,n){const r=ie(()=>[e,n].filter(p=>p).reduce((p,_)=>p.concat(Object.values(K(_))),[])),s=ie({get(){return t.$dirty.value||(r.value.length?r.value.every(p=>p.$dirty):!1)},set(p){t.$dirty.value=p}}),i=ie(()=>{const p=K(t.$silentErrors)||[],_=r.value.filter(y=>(K(y).$silentErrors||[]).length).reduce((y,w)=>y.concat(...w.$silentErrors),[]);return p.concat(_)}),o=ie(()=>{const p=K(t.$errors)||[],_=r.value.filter(y=>(K(y).$errors||[]).length).reduce((y,w)=>y.concat(...w.$errors),[]);return p.concat(_)}),a=ie(()=>r.value.some(p=>p.$invalid)||K(t.$invalid)||!1),c=ie(()=>r.value.some(p=>K(p.$pending))||K(t.$pending)||!1),l=ie(()=>r.value.some(p=>p.$dirty)||r.value.some(p=>p.$anyDirty)||s.value),u=ie(()=>s.value?c.value||a.value:!1),h=()=>{t.$touch(),r.value.forEach(p=>{p.$touch()})},f=()=>{t.$commit(),r.value.forEach(p=>{p.$commit()})},d=()=>{t.$reset(),r.value.forEach(p=>{p.$reset()})};return r.value.length&&r.value.every(p=>p.$dirty)&&h(),{$dirty:s,$errors:o,$invalid:a,$anyDirty:l,$error:u,$pending:c,$touch:h,$reset:d,$silentErrors:i,$commit:f}}function cu(t){let{validations:e,state:n,key:r,parentKey:s,childResults:i,resultsCache:o,globalConfig:a={},instance:c,externalResults:l}=t;const u=s?`${s}.${r}`:r,{rules:h,nestedValidators:f,config:d,validationGroups:p}=IO(e),_=xn(xn({},a),d),y=r?ie(()=>{const _e=K(n);return _e?K(_e[r]):void 0}):n,w=xn({},K(l)||{}),T=ie(()=>{const _e=K(l);return r?_e?K(_e[r]):void 0:_e}),P=RO(h,y,r,o,u,_,c,T,n),O=bO(f,y,u,o,_,c,T),F={};p&&Object.entries(p).forEach(_e=>{let[Fe,Ae]=_e;F[Fe]={$invalid:sl(Ae,O,"$invalid"),$error:sl(Ae,O,"$error"),$pending:sl(Ae,O,"$pending"),$errors:Kp(Ae,O,"$errors"),$silentErrors:Kp(Ae,O,"$silentErrors")}});const{$dirty:L,$errors:ne,$invalid:j,$anyDirty:H,$error:ye,$pending:ke,$touch:Ue,$reset:Xe,$silentErrors:xt,$commit:ze}=PO(P,O,i),oe=r?ie({get:()=>K(y),set:_e=>{L.value=!0;const Fe=K(n),Ae=K(l);Ae&&(Ae[r]=w[r]),xe(Fe[r])?Fe[r].value=_e:Fe[r]=_e}}):null;r&&_.$autoDirty&&jt(y,()=>{L.value||Ue();const _e=K(l);_e&&(_e[r]=w[r])},{flush:"sync"});async function fe(){return Ue(),_.$rewardEarly&&(ze(),await ss()),await ss(),new Promise(_e=>{if(!ke.value)return _e(!j.value);const Fe=jt(ke,()=>{_e(!j.value),Fe()})})}function le(_e){return(i.value||{})[_e]}function At(){xe(l)?l.value=w:Object.keys(w).length===0?Object.keys(l).forEach(_e=>{delete l[_e]}):Object.assign(l,w)}return Yn(xn(xn(xn({},P),{},{$model:oe,$dirty:L,$error:ye,$errors:ne,$invalid:j,$anyDirty:H,$pending:ke,$touch:Ue,$reset:Xe,$path:u||AO,$silentErrors:xt,$validate:fe,$commit:ze},i&&{$getResultsForChild:le,$clearExternalResults:At,$validationGroups:F}),O))}class CO{constructor(){this.storage=new Map}set(e,n,r){this.storage.set(e,{rules:n,result:r})}checkRulesValidity(e,n,r){const s=Object.keys(r),i=Object.keys(n);return i.length!==s.length||!i.every(a=>s.includes(a))?!1:i.every(a=>n[a].$params?Object.keys(n[a].$params).every(c=>K(r[a].$params[c])===K(n[a].$params[c])):!0)}get(e,n){const r=this.storage.get(e);if(!r)return;const{rules:s,result:i}=r,o=this.checkRulesValidity(e,n,s),a=i.$unwatch?i.$unwatch:()=>({});return o?i:{$dirty:i.$dirty,$partial:!0,$unwatch:a}}}const Lo={COLLECT_ALL:!0,COLLECT_NONE:!1},Gp=Symbol("vuelidate#injectChildResults"),Qp=Symbol("vuelidate#removeChildResults");function SO(t){let{$scope:e,instance:n}=t;const r={},s=ge([]),i=ie(()=>s.value.reduce((u,h)=>(u[h]=K(r[h]),u),{}));function o(u,h){let{$registerAs:f,$scope:d,$stopPropagation:p}=h;p||e===Lo.COLLECT_NONE||d===Lo.COLLECT_NONE||e!==Lo.COLLECT_ALL&&e!==d||(r[f]=u,s.value.push(f))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],o);function a(u){s.value=s.value.filter(h=>h!==u),delete r[u]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],a);const c=vt(Gp,[]);Xr(Gp,n.__vuelidateInjectInstances);const l=vt(Qp,[]);return Xr(Qp,n.__vuelidateRemoveInstances),{childResults:i,sendValidationResultsToParent:c,removeValidationResultsFromParent:l}}function sw(t){return new Proxy(t,{get(e,n){return typeof e[n]=="object"?sw(e[n]):ie(()=>e[n])}})}let Yp=0;function kO(t,e){var n;let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(r=t,t=void 0,e=void 0);let{$registerAs:s,$scope:i=Lo.COLLECT_ALL,$stopPropagation:o,$externalResults:a,currentVueInstance:c}=r;const l=c||((n=lm())===null||n===void 0?void 0:n.proxy),u=l?l.$options:{};s||(Yp+=1,s=`_vuelidate_${Yp}`);const h=ge({}),f=new CO,{childResults:d,sendValidationResultsToParent:p,removeValidationResultsFromParent:_}=l?SO({$scope:i,instance:l}):{childResults:ge({})};if(!t&&u.validations){const y=u.validations;e=ge({}),Yg(()=>{e.value=l,jt(()=>ga(y)?y.call(e.value,new sw(e.value)):y,w=>{h.value=cu({validations:w,state:e,childResults:d,resultsCache:f,globalConfig:r,instance:l,externalResults:a||l.vuelidateExternalResults})},{immediate:!0})}),r=u.validationsConfig||r}else{const y=xe(t)||vO(t)?t:Yn(t||{});jt(y,w=>{h.value=cu({validations:w,state:e,childResults:d,resultsCache:f,globalConfig:r,instance:l??{},externalResults:a})},{immediate:!0})}return l&&(p.forEach(y=>y(h,{$registerAs:s,$scope:i,$stopPropagation:o})),Cu(()=>_.forEach(y=>y(s)))),ie(()=>xn(xn({},K(h.value)),d.value))}const OO=Symbol();function lu(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?lu(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const xO={run:t=>t()},DO=()=>xO,iw=typeof console.createTask<"u"?console.createTask:DO;function NO(t,e){const n=e.shift(),r=iw(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function VO(t,e){const n=e.shift(),r=iw(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function il(t,e){for(const n of[...t])n(e)}class LO{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=lu(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=lu(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(NO,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(VO,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&il(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&il(this._after,s)}):(this._after&&s&&il(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function MO(){return new LO}function UO(t){return Array.isArray(t)?t:[t]}const FO=["title","titleTemplate","script","style","noscript"],Mo=["base","meta","link","style","script","noscript"],$O=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],jO=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],ow=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],BO=typeof window<"u";function cf(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Xp(t){return t._h||cf(t._d?t._d:`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function aw(t,e){const{props:n,tag:r}=t;if(jO.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${r}:${i}:${o}`}return!1}function Jp(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function HO(t,e,n){const r={tag:t,props:await cw(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(t)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(t))};return ow.forEach(s=>{const i=typeof r.props[s]<"u"?r.props[s]:n[s];typeof i<"u"&&((!["innerHTML","textContent","children"].includes(s)||FO.includes(r.tag))&&(r[s==="children"?"innerHTML":s]=i),delete r.props[s])}),r.props.body&&(r.tagPosition="bodyClose",delete r.props.body),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function qO(t,e){var r;const n=t==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=Array.isArray(e)?e.join(n):e)==null?void 0:r.split(n).filter(s=>s.trim()).filter(Boolean).join(n)}async function cw(t,e){for(const n of Object.keys(t)){if(["class","style"].includes(n)){t[n]=qO(n,t[n]);continue}if(t[n]instanceof Promise&&(t[n]=await t[n]),!e&&!ow.includes(n)){const r=String(t[n]),s=n.startsWith("data-");r==="true"||r===""?t[n]=s?"true":!0:t[n]||(s&&r==="false"?t[n]="false":delete t[n])}}return t}const WO=10;async function zO(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,r])=>typeof r<"u"&&$O.includes(n)).forEach(([n,r])=>{const s=UO(r);e.push(...s.map(i=>HO(n,i,t)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,r)=>(n._e=t._i,t.mode&&(n._m=t.mode),n._p=(t._i<<WO)+r,n))}const Zp={base:-10,title:10},eg={critical:-80,high:-10,low:20};function ma(t){let e=100;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props["http-equiv"]==="content-security-policy"&&(e=-30),t.props.charset&&(e=-20),t.props.name==="viewport"&&(e=-15)):t.tag==="link"&&t.props.rel==="preconnect"?e=20:t.tag in Zp&&(e=Zp[t.tag]),typeof n=="string"&&n in eg?e+eg[n]:e)}const KO=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],tg=["onload","onerror","onabort","onprogress","onloadstart"],Pn="%separator";function Uo(t,e,n){if(typeof t!="string"||!t.includes("%"))return t;function r(o){let a;return["s","pageTitle"].includes(o)?a=e.pageTitle:o.includes(".")?a=o.split(".").reduce((c,l)=>c&&c[l]||void 0,e):a=e[o],typeof a<"u"?(a||"").replace(/"/g,'\\"'):!1}let s=t;try{s=decodeURI(t)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const a=r(o.slice(1));typeof a=="string"&&(t=t.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(c,l)=>`${a}${l}`).trim())}),t.includes(Pn)&&(t.endsWith(Pn)&&(t=t.slice(0,-Pn.length).trim()),t.startsWith(Pn)&&(t=t.slice(Pn.length).trim()),t=t.replace(new RegExp(`\\${Pn}\\s*\\${Pn}`,"g"),Pn),t=Uo(t,{separator:n},n)),t}async function GO(t,e={}){var u;const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const s=(await t.resolveTags()).map(h=>({tag:h,id:Mo.includes(h.tag)?Xp(h):h.tag,shouldRender:!0}));let i=t._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const h of["body","head"]){const f=(u=n[h])==null?void 0:u.children,d=[];for(const p of[...f].filter(_=>Mo.includes(_.tagName.toLowerCase()))){const _={tag:p.tagName.toLowerCase(),props:await cw(p.getAttributeNames().reduce((T,P)=>({...T,[P]:p.getAttribute(P)}),{})),innerHTML:p.innerHTML};let y=1,w=aw(_);for(;w&&d.find(T=>T._d===w);)w=`${w}:${y++}`;_._d=w||void 0,d.push(_),i.elMap[p.getAttribute("data-hid")||Xp(_)]=p}}}i.pendingSideEffects={...i.sideEffects||{}},i.sideEffects={};function o(h,f,d){const p=`${h}:${f}`;i.sideEffects[p]=d,delete i.pendingSideEffects[p]}function a({id:h,$el:f,tag:d}){const p=d.tag.endsWith("Attrs");i.elMap[h]=f,p||(["textContent","innerHTML"].forEach(_=>{d[_]&&d[_]!==f[_]&&(f[_]=d[_])}),o(h,"el",()=>{var _;(_=i.elMap[h])==null||_.remove(),delete i.elMap[h]}));for(const[_,y]of Object.entries(d._eventHandlers||{}))f.getAttribute(`data-${_}`)!==""&&((d.tag==="bodyAttrs"?n.defaultView:f).addEventListener(_.replace("on",""),y.bind(f)),f.setAttribute(`data-${_}`,""));Object.entries(d.props).forEach(([_,y])=>{const w=`attr:${_}`;if(_==="class")for(const T of(y||"").split(" ").filter(Boolean))p&&o(h,`${w}:${T}`,()=>f.classList.remove(T)),!f.classList.contains(T)&&f.classList.add(T);else if(_==="style")for(const T of(y||"").split(";").filter(Boolean)){const[P,...O]=T.split(":").map(F=>F.trim());o(h,`${w}:${T}:${P}`,()=>{f.style.removeProperty(P)}),f.style.setProperty(P,O.join(":"))}else f.getAttribute(_)!==y&&f.setAttribute(_,y===!0?"":String(y)),p&&o(h,w,()=>f.removeAttribute(_))})}const c=[],l={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const h of s){const{tag:f,shouldRender:d,id:p}=h;if(d){if(f.tag==="title"){n.title=f.textContent;continue}h.$el=h.$el||i.elMap[p],h.$el?a(h):Mo.includes(f.tag)&&c.push(h)}}for(const h of c){const f=h.tag.tagPosition||"head";h.$el=n.createElement(h.tag.tag),a(h),l[f]=l[f]||n.createDocumentFragment(),l[f].appendChild(h.$el)}for(const h of s)await t.hooks.callHook("dom:renderTag",h,n,o);l.head&&n.head.appendChild(l.head),l.bodyOpen&&n.body.insertBefore(l.bodyOpen,n.body.firstChild),l.bodyClose&&n.body.appendChild(l.bodyClose),Object.values(i.pendingSideEffects).forEach(h=>h()),t._dom=i,t.dirty=!1,await t.hooks.callHook("dom:rendered",{renders:s})}async function QO(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(r=>n(async()=>{await GO(t,e),delete t._domUpdatePromise,r()}))}function YO(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(i){QO(i,t)}}}}}const XO=["templateParams","htmlAttrs","bodyAttrs"],JO={hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(r=>{t.props[r]&&(t.key=t.props[r],delete t.props[r])});const n=aw(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(r=>{const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&XO.includes(r.tag)&&(a="merge"),a==="merge"){const c=i.props;["class","style"].forEach(l=>{c[l]&&(r.props[l]?(l==="style"&&!c[l].endsWith(";")&&(c[l]+=";"),r.props[l]=`${c[l]} ${r.props[l]}`):r.props[l]=c[l])}),e[s].props={...c,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}else if(ma(r)>ma(i))return}const o=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(Mo.includes(r.tag)&&o===0){delete e[s];return}e[s]=r});const n=[];Object.values(e).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},ZO={mode:"server",hooks:{"tags:resolve":function(t){const e={};t.tags.filter(n=>["titleTemplate","templateParams","title"].includes(n.tag)&&n._m==="server").forEach(n=>{e[n.tag]=n.tag.startsWith("title")?n.textContent:n.props}),Object.keys(e).length&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},ex=["script","link","bodyAttrs"],tx=t=>({hooks:{"tags:resolve":function(e){for(const n of e.tags.filter(r=>ex.includes(r.tag)))Object.entries(n.props).forEach(([r,s])=>{r.startsWith("on")&&typeof s=="function"&&(t.ssr&&tg.includes(r)?n.props[r]=`this.dataset.${r}fired = true`:delete n.props[r],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[r]=s)}),t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||cf(n.props.src||n.props.href))},"dom:renderTag":function({$el:e,tag:n}){var r,s;for(const i of Object.keys((e==null?void 0:e.dataset)||{}).filter(o=>tg.some(a=>`${a}fired`===o))){const o=i.replace("fired","");(s=(r=n._eventHandlers)==null?void 0:r[o])==null||s.call(e,new Event(o.replace("on","")))}}}}),nx=["link","style","script","noscript"],rx={hooks:{"tag:normalise":({tag:t})=>{t.key&&nx.includes(t.tag)&&(t.props["data-hid"]=t._h=cf(t.key))}}},sx={hooks:{"tags:resolve":t=>{const e=n=>{var r;return(r=t.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of KO)for(const s of t.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=e(s.tagPriority.replace(n,""));typeof i<"u"&&(s._p=i+r)}t.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>ma(n)-ma(r))}}},ix={meta:"content",link:"href",htmlAttrs:"lang"},ox=t=>({hooks:{"tags:resolve":e=>{var a;const{tags:n}=e,r=(a=n.find(c=>c.tag==="title"))==null?void 0:a.textContent,s=n.findIndex(c=>c.tag==="templateParams"),i=s!==-1?n[s].props:{},o=i.separator||"|";delete i.separator,i.pageTitle=Uo(i.pageTitle||r||"",i,o);for(const c of n.filter(l=>l.processTemplateParams!==!1)){const l=ix[c.tag];l&&typeof c.props[l]=="string"?c.props[l]=Uo(c.props[l],i,o):(c.processTemplateParams===!0||["titleTemplate","title"].includes(c.tag))&&["innerHTML","textContent"].forEach(u=>{typeof c[u]=="string"&&(c[u]=Uo(c[u],i,o))})}t._templateParams=i,t._separator=o,e.tags=n.filter(c=>c.tag!=="templateParams")}}}),ax={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(s=>s.tag==="titleTemplate");const r=e.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=Jp(e[n].textContent,e[r].textContent);s!==null?e[r].textContent=s||e[r].textContent:delete e[r]}else if(n!==-1){const s=Jp(e[n].textContent);s!==null&&(e[n].textContent=s,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}},cx={hooks:{"tags:afterResolve":function(t){for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let lw;function lx(t={}){const e=ux(t);return e.use(YO()),lw=e}function ng(t,e){return!t||t==="server"&&e||t==="client"&&!e}function ux(t={}){const e=MO();e.addHooks(t.hooks||{}),t.document=t.document||(BO?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(c){const l=typeof c=="function"?c(a):c;(!l.key||!o.some(u=>u.key===l.key))&&(o.push(l),ng(l.mode,n)&&e.addHooks(l.hooks||{}))},push(c,l){l==null||delete l.head;const u={_i:s++,input:c,...l};return ng(u.mode,n)&&(i.push(u),r()),{dispose(){i=i.filter(h=>h._i!==u._i),e.callHook("entries:updated",a),r()},patch(h){i=i.map(f=>(f._i===u._i&&(f.input=u.input=h),f)),r()}}},async resolveTags(){const c={tags:[],entries:[...i]};await e.callHook("entries:resolve",c);for(const l of c.entries){const u=l.resolvedInput||l.input;if(l.resolvedInput=await(l.transform?l.transform(u):u),l.resolvedInput)for(const h of await zO(l)){const f={tag:h,entry:l,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",f),c.tags.push(f.tag)}}return await e.callHook("tags:beforeResolve",c),await e.callHook("tags:resolve",c),await e.callHook("tags:afterResolve",c),c.tags},ssr:n};return[JO,ZO,tx,rx,sx,ox,ax,cx,...(t==null?void 0:t.plugins)||[]].forEach(c=>a.use(c)),a.hooks.callHook("init",a),a}function hx(){return lw}const fx=dm.startsWith("3");function dx(t){return typeof t=="function"?t():K(t)}function _a(t,e=""){if(t instanceof Promise)return t;const n=dx(t);return!t||!n?n:Array.isArray(n)?n.map(r=>_a(r,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,K(s)]:[r,_a(s,r)])):n}const px={hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=_a(e.input)}}},uw="usehead";function gx(t){return{install(n){fx&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(uw,t))}}.install}function mx(t={}){t.domDelayFn=t.domDelayFn||(n=>ss(()=>setTimeout(()=>n(),0)));const e=lx(t);return e.use(px),e.install=gx(e),e}const rg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sg="__unhead_injection_handler__";function _x(){if(sg in rg)return rg[sg]();const t=vt(uw);return t||hx()}function xi(t,e={}){const n=e.head||_x();if(n)return n.ssr?n.push(t,e):yx(n,t,e)}function yx(t,e,n={}){const r=ge(!1),s=ge({});EE(()=>{s.value=r.value?{}:_a(e)});const i=t.push(s.value,n);return jt(s,a=>{i.patch(a)}),lm()&&(Cu(()=>{i.dispose()}),Gg(()=>{r.value=!0}),Kg(()=>{r.value=!1})),i}function vx(t){const e=t;return e.headTags=t.resolveTags,e.addEntry=t.push,e.addHeadObjs=t.push,e.addReactiveEntry=(n,r)=>{const s=xi(n,r);return typeof s<"u"?s.dispose:()=>{}},e.removeHeadObjs=()=>{},e.updateDOM=()=>{t.hooks.callHook("entries:updated",t)},e.unhead=t,e}function wx(t,e){const n=mx(e||{}),r=vx(n);return t&&r.push(t),r}const ya="https://romikmakavana.me/quickshot/",Ex={class:"w-full h-screen bg-neutral-100 md:px-28 pt-12 px-12 flex items-center"},Tx={class:"w-full md:flex"},Ix=Q("div",{class:"w-1/2 max-md:w-full"},[Q("p",{class:"text-2xl md:text-3xl lg:text-4xl font-bold max-md:w-full max-md:mb-10"},"Sign In to Direct")],-1),Ax={class:"w-1/2 max-md:w-full"},Rx={class:"max-md:w-full float-right"},bx={class:"space-y-5 md:space-y-5"},Px=["processing","error-message","error"],Cx=["processing","error-message","error"],Sx={key:0,class:"text-red-500"},kx=["disabled"],Ox=Q("div",null,null,-1),xx=Xn({__name:"LoginView",setup(t){xi({title:"Quick Shot",meta:[{name:"og:site_name",content:"Quickshot"},{name:"og:title",content:"Screenshot"},{name:"og:type",content:"website"},{name:"og:url",content:ya},{name:"og:description",content:"Captured with Quickshot"},{name:"og:image",content:`${ya}camera.png`}]});const e=ge(!1),n=Uu(),r=ge(""),s=ge(""),i=ie(()=>({email:{required:rl.withMessage("Required.",qp),email:rl.withMessage("Invalid Email.",gO)},password:{required:rl.withMessage("Required.",qp)}})),o=kO(i,{email:r,password:s}),a=oO(OO),c=wc(),l=ge(""),u=async()=>{if(o.value.$touch(),!o.value.$invalid){e.value=!0,l.value="";let h=await c.login(r.value,s.value);h.status?(a.emit({message:h.message,options:{type:"success"}}),n.push({name:"home"})):l.value=h.message,e.value=!1}};return Di(async()=>{c.getUser&&n.push({name:"home"})}),(h,f)=>(at(),Ct("div",null,[Q("div",Ex,[Q("div",Tx,[Ix,Q("div",Ax,[Q("div",Rx,[Q("form",{onSubmit:Fs(u,["prevent"]),class:"space-y-4 md:space-y-6"},[Q("div",bx,[Af(Q("input",{placeholder:"Enter Email",type:"email","onUpdate:modelValue":f[0]||(f[0]=d=>r.value=d),processing:e.value,class:"bg-slate-200 border text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5","error-message":K(o).email.$errors.length>0?K(o).email.$errors[0].$message:void 0,error:K(o).email.$errors.length>0},null,8,Px),[[Wf,r.value]]),Af(Q("input",{placeholder:"Password",type:"password","onUpdate:modelValue":f[1]||(f[1]=d=>s.value=d),processing:e.value,class:"bg-slate-200 border text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5","error-message":K(o).password.$errors.length>0?K(o).password.$errors[0].$message:void 0,error:K(o).password.$errors.length>0},null,8,Cx),[[Wf,s.value]]),l.value.length?(at(),Ct("small",Sx,$o(l.value),1)):hi("",!0)]),Q("button",{type:"submit",disabled:e.value,class:"w-full bg-blue-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-8"},$o(e.value?"Processing...":"Sign In"),9,kx)],32),Ox])])])])]))}}),Dx=Nu({id:"General",state:()=>({displayLeftPanel:!0})}),Nx=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Vx=Q("nav",{class:"border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"},[Q("div",{class:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"},[Q("a",{href:"https://romikmakavana.me/quickshot",class:"flex items-center space-x-3 rtl:space-x-reverse"},[Q("span",{class:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white"},"Quick Shot")])])],-1),Lx=[Vx],Mx=Xn({__name:"AppHeader",setup(t){Uu(),Fu(),wc();const e=Jv();return Dx(),ie(()=>{var n;return e.isProjectLoad?(n=e.project)==null?void 0:n.name:""}),(n,r)=>(at(),Ct("header",null,Lx))}}),hw=Xn({__name:"MainLayout",setup(t){return(e,n)=>(at(),Ct(Ut,null,[ut(Mx),ut(K(Mu))],64))}});/*!
 * Compressor.js v1.2.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-02-28T14:09:41.732Z
 */function ig(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function To(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ig(Object(n),!0).forEach(function(r){$x(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ig(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ux(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function og(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,fw(r.key),r)}}function Fx(t,e,n){return e&&og(t.prototype,e),n&&og(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function $x(t,e,n){return e=fw(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function va(){return va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},va.apply(this,arguments)}function jx(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function fw(t){var e=jx(t,"string");return typeof e=="symbol"?e:String(e)}var dw={exports:{}};(function(t){typeof window>"u"||function(e){var n=e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype,r=e.Blob&&function(){try{return!!new Blob}catch{return!1}}(),s=r&&e.Uint8Array&&function(){try{return new Blob([new Uint8Array(100)]).size===100}catch{return!1}}(),i=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,o=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,a=(r||i)&&e.atob&&e.ArrayBuffer&&e.Uint8Array&&function(c){var l,u,h,f,d,p,_,y,w;if(l=c.match(o),!l)throw new Error("invalid data URI");for(u=l[2]?l[1]:"text/plain"+(l[3]||";charset=US-ASCII"),h=!!l[4],f=c.slice(l[0].length),h?d=atob(f):d=decodeURIComponent(f),p=new ArrayBuffer(d.length),_=new Uint8Array(p),y=0;y<d.length;y+=1)_[y]=d.charCodeAt(y);return r?new Blob([s?_:p],{type:u}):(w=new i,w.append(p),w.getBlob(u))};e.HTMLCanvasElement&&!n.toBlob&&(n.mozGetAsFile?n.toBlob=function(c,l,u){var h=this;setTimeout(function(){u&&n.toDataURL&&a?c(a(h.toDataURL(l,u))):c(h.mozGetAsFile("blob",l))})}:n.toDataURL&&a&&(n.msToBlob?n.toBlob=function(c,l,u){var h=this;setTimeout(function(){(l&&l!=="image/png"||u)&&n.toDataURL&&a?c(a(h.toDataURL(l,u))):c(h.msToBlob(l))})}:n.toBlob=function(c,l,u){var h=this;setTimeout(function(){c(a(h.toDataURL(l,u)))})})),t.exports?t.exports=a:e.dataURLtoBlob=a}(window)})(dw);var ag=dw.exports,Bx=function(e){return typeof Blob>"u"?!1:e instanceof Blob||Object.prototype.toString.call(e)==="[object Blob]"},cg={strict:!0,checkOrientation:!0,retainExif:!1,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,resize:"none",quality:.8,mimeType:"auto",convertTypes:["image/png"],convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},Hx=typeof window<"u"&&typeof window.document<"u",Qn=Hx?window:{},wa=function(e){return e>0&&e<1/0},qx=Array.prototype.slice;function lf(t){return Array.from?Array.from(t):qx.call(t)}var Wx=/^image\/.+$/;function uu(t){return Wx.test(t)}function zx(t){var e=uu(t)?t.substr(6):"";return e==="jpeg"&&(e="jpg"),".".concat(e)}var pw=String.fromCharCode;function Kx(t,e,n){var r="",s;for(n+=e,s=e;s<n;s+=1)r+=pw(t.getUint8(s));return r}var Gx=Qn.btoa;function lg(t,e){for(var n=[],r=8192,s=new Uint8Array(t);s.length>0;)n.push(pw.apply(null,lf(s.subarray(0,r)))),s=s.subarray(r);return"data:".concat(e,";base64,").concat(Gx(n.join("")))}function Qx(t){var e=new DataView(t),n;try{var r,s,i;if(e.getUint8(0)===255&&e.getUint8(1)===216)for(var o=e.byteLength,a=2;a+1<o;){if(e.getUint8(a)===255&&e.getUint8(a+1)===225){s=a;break}a+=1}if(s){var c=s+4,l=s+10;if(Kx(e,c,4)==="Exif"){var u=e.getUint16(l);if(r=u===18761,(r||u===19789)&&e.getUint16(l+2,r)===42){var h=e.getUint32(l+4,r);h>=8&&(i=l+h)}}}if(i){var f=e.getUint16(i,r),d,p;for(p=0;p<f;p+=1)if(d=i+p*12+2,e.getUint16(d,r)===274){d+=8,n=e.getUint16(d,r),e.setUint16(d,1,r);break}}}catch{n=1}return n}function Yx(t){var e=0,n=1,r=1;switch(t){case 2:n=-1;break;case 3:e=-180;break;case 4:r=-1;break;case 5:e=90,r=-1;break;case 6:e=90;break;case 7:e=90,n=-1;break;case 8:e=-90;break}return{rotate:e,scaleX:n,scaleY:r}}var Xx=/\.\d*(?:0|9){12}\d*$/;function ug(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return Xx.test(t)?Math.round(t*e)/e:t}function Ms(t){var e=t.aspectRatio,n=t.height,r=t.width,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"none",i=wa(r),o=wa(n);if(i&&o){var a=n*e;(s==="contain"||s==="none")&&a>r||s==="cover"&&a<r?n=r/e:r=n*e}else i?n=r/e:o&&(r=n*e);return{width:r,height:n}}function Jx(t){for(var e=lf(new Uint8Array(t)),n=e.length,r=[],s=0;s+3<n;){var i=e[s],o=e[s+1];if(i===255&&o===218)break;if(i===255&&o===216)s+=2;else{var a=e[s+2]*256+e[s+3],c=s+a+2,l=e.slice(s,c);r.push(l),s=c}}return r.reduce(function(u,h){return h[0]===255&&h[1]===225?u.concat(h):u},[])}function Zx(t,e){var n=lf(new Uint8Array(t));if(n[2]!==255||n[3]!==224)return t;var r=n[4]*256+n[5],s=[255,216].concat(e,n.slice(4+r));return new Uint8Array(s)}var eD=Qn.ArrayBuffer,ol=Qn.FileReader,or=Qn.URL||Qn.webkitURL,tD=/\.\w+$/,nD=Qn.Compressor,rD=function(){function t(e,n){Ux(this,t),this.file=e,this.exif=[],this.image=new Image,this.options=To(To({},cg),n),this.aborted=!1,this.result=null,this.init()}return Fx(t,[{key:"init",value:function(){var n=this,r=this.file,s=this.options;if(!Bx(r)){this.fail(new Error("The first argument must be a File or Blob object."));return}var i=r.type;if(!uu(i)){this.fail(new Error("The first argument must be an image File or Blob object."));return}if(!or||!ol){this.fail(new Error("The current browser does not support image compression."));return}eD||(s.checkOrientation=!1,s.retainExif=!1);var o=i==="image/jpeg",a=o&&s.checkOrientation,c=o&&s.retainExif;if(or&&!a&&!c)this.load({url:or.createObjectURL(r)});else{var l=new ol;this.reader=l,l.onload=function(u){var h=u.target,f=h.result,d={},p=1;a&&(p=Qx(f),p>1&&va(d,Yx(p))),c&&(n.exif=Jx(f)),a||c?!or||p>1?d.url=lg(f,i):d.url=or.createObjectURL(r):d.url=f,n.load(d)},l.onabort=function(){n.fail(new Error("Aborted to read the image with FileReader."))},l.onerror=function(){n.fail(new Error("Failed to read the image with FileReader."))},l.onloadend=function(){n.reader=null},a||c?l.readAsArrayBuffer(r):l.readAsDataURL(r)}}},{key:"load",value:function(n){var r=this,s=this.file,i=this.image;i.onload=function(){r.draw(To(To({},n),{},{naturalWidth:i.naturalWidth,naturalHeight:i.naturalHeight}))},i.onabort=function(){r.fail(new Error("Aborted to load the image."))},i.onerror=function(){r.fail(new Error("Failed to load the image."))},Qn.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Qn.navigator.userAgent)&&(i.crossOrigin="anonymous"),i.alt=s.name,i.src=n.url}},{key:"draw",value:function(n){var r=this,s=n.naturalWidth,i=n.naturalHeight,o=n.rotate,a=o===void 0?0:o,c=n.scaleX,l=c===void 0?1:c,u=n.scaleY,h=u===void 0?1:u,f=this.file,d=this.image,p=this.options,_=document.createElement("canvas"),y=_.getContext("2d"),w=Math.abs(a)%180===90,T=(p.resize==="contain"||p.resize==="cover")&&wa(p.width)&&wa(p.height),P=Math.max(p.maxWidth,0)||1/0,O=Math.max(p.maxHeight,0)||1/0,F=Math.max(p.minWidth,0)||0,L=Math.max(p.minHeight,0)||0,ne=s/i,j=p.width,H=p.height;if(w){var ye=[O,P];P=ye[0],O=ye[1];var ke=[L,F];F=ke[0],L=ke[1];var Ue=[H,j];j=Ue[0],H=Ue[1]}T&&(ne=j/H);var Xe=Ms({aspectRatio:ne,width:P,height:O},"contain");P=Xe.width,O=Xe.height;var xt=Ms({aspectRatio:ne,width:F,height:L},"cover");if(F=xt.width,L=xt.height,T){var ze=Ms({aspectRatio:ne,width:j,height:H},p.resize);j=ze.width,H=ze.height}else{var oe=Ms({aspectRatio:ne,width:j,height:H}),fe=oe.width;j=fe===void 0?s:fe;var le=oe.height;H=le===void 0?i:le}j=Math.floor(ug(Math.min(Math.max(j,F),P))),H=Math.floor(ug(Math.min(Math.max(H,L),O)));var At=-j/2,_e=-H/2,Fe=j,Ae=H,Kt=[];if(T){var un=0,rr=0,$e=s,I=i,M=Ms({aspectRatio:ne,width:s,height:i},{contain:"cover",cover:"contain"}[p.resize]);$e=M.width,I=M.height,un=(s-$e)/2,rr=(i-I)/2,Kt.push(un,rr,$e,I)}if(Kt.push(At,_e,Fe,Ae),w){var x=[H,j];j=x[0],H=x[1]}_.width=j,_.height=H,uu(p.mimeType)||(p.mimeType=f.type);var q="transparent";f.size>p.convertSize&&p.convertTypes.indexOf(p.mimeType)>=0&&(p.mimeType="image/jpeg");var de=p.mimeType==="image/jpeg";if(de&&(q="#fff"),y.fillStyle=q,y.fillRect(0,0,j,H),p.beforeDraw&&p.beforeDraw.call(this,y,_),!this.aborted&&(y.save(),y.translate(j/2,H/2),y.rotate(a*Math.PI/180),y.scale(l,h),y.drawImage.apply(y,[d].concat(Kt)),y.restore(),p.drew&&p.drew.call(this,y,_),!this.aborted)){var g=function(v){if(!r.aborted){var E=function(k){return r.done({naturalWidth:s,naturalHeight:i,result:k})};if(v&&de&&p.retainExif&&r.exif&&r.exif.length>0){var A=function(k){return E(ag(lg(Zx(k,r.exif),p.mimeType)))};if(v.arrayBuffer)v.arrayBuffer().then(A).catch(function(){r.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."))});else{var b=new ol;r.reader=b,b.onload=function(N){var k=N.target;A(k.result)},b.onabort=function(){r.fail(new Error("Aborted to read the compressed image with FileReader."))},b.onerror=function(){r.fail(new Error("Failed to read the compressed image with FileReader."))},b.onloadend=function(){r.reader=null},b.readAsArrayBuffer(v)}}else E(v)}};_.toBlob?_.toBlob(g,p.mimeType,p.quality):g(ag(_.toDataURL(p.mimeType,p.quality)))}}},{key:"done",value:function(n){var r=n.naturalWidth,s=n.naturalHeight,i=n.result,o=this.file,a=this.image,c=this.options;if(or&&a.src.indexOf("blob:")===0&&or.revokeObjectURL(a.src),i)if(c.strict&&!c.retainExif&&i.size>o.size&&c.mimeType===o.type&&!(c.width>r||c.height>s||c.minWidth>r||c.minHeight>s||c.maxWidth<r||c.maxHeight<s))i=o;else{var l=new Date;i.lastModified=l.getTime(),i.lastModifiedDate=l,i.name=o.name,i.name&&i.type!==o.type&&(i.name=i.name.replace(tD,zx(i.type)))}else i=o;this.result=i,c.success&&c.success.call(this,i)}},{key:"fail",value:function(n){var r=this.options;if(r.error)r.error.call(this,n);else throw n}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}],[{key:"noConflict",value:function(){return window.Compressor=nD,t}},{key:"setDefaults",value:function(n){va(cg,n)}}]),t}();const sD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABhNJREFUeF7tmleoLEUQhr9rRBExJ/RBERVFUQyYc84Js4hiBEVQMSHogwgqBlTMWQyYMGNWzDlgFkEFsxgeRDGh80kPjMt0T8/O3p3DPVtw4XC7prvq76rq6r93BtNcZkxz/5kAMImAaY7AJAWmeQBMiuAkBaZoCiwN7ACsAiwBLAh8F/69BjwM/DAK26daBOwMnAasBcn0/Bt4sgDgDOCFLkBMFQBWAG4odnbdIZy5DzgU+H6Ib6dEEdwauC2E+TA++M0XwG6A6dFK+o6AA4HrgNlbWV2v/AuwEfBWm7n6BGAf4CZgjjYGN+h+DqwTimXWtH0BMMqdH3T03iIKds3yvqHS5s7RVi/X+T+K0+AB4DngJ2Cx4u8tw7+mjVsfeDHHsKaJcuZoo5Pr/DPAQcBnNZOvAdxSFM6VEgs/AmybY9g4Ach1/m5gX8AIiImNked/DIS/gMWBH5tAGBcAbZy3OP7ZZDiwZtEtvppI4/1DpCSnGgcAGmKT03TUufO5zpdOPQ5sEfHwfOD4JiBnNgAbFmfzE8BcDYYM47xTnlLMfVZk7luB/foEwAvN66F6p+yoc34B4Ocm44GDgWsjeo8VdcIus7cUuBEw99s6v2PIXcP3qobvTwDOjejcDuzdFwBeY99uyPu6ndf5O4G5g+HnACclnLDp8QZZJxcV/cOxfQFwKXBUYvF7gL0Gqr3O31VTLw4Drq6Za/lijveBOSPrxL77n/rMKILOaU++TMQwLyt2ar9Vxgd3vvqp/YD61pNSLKryARtE1vinAM0a9FUfEbAy8F5iYY8tjS9F5sedL8O+7tOngM0rA5sC/l9MXgLWa3Le8VFEgIXO8/jrsOD2wIORxb8MkeEOlbJqOMqMgpRsFdZRx57Cuez26sS5Yjb8T78rAGWH57HlfVw5pHDymohhsR5dO84s2t9TEwjY/9tUlXJFEeKH1+g/XwBl/5ElXQCotreGb9m7H1EQmZdHVvd2t1NkTFssjrGqbl/vjtvnx4D21igf8EmW9x1SYLC3XxL4Jiy6S3CkzoYPAGtETDw+302M2/+/Eca9FZZ/+18Spabfo7nOqzdMBGwT8qva22tMSUWtXRjySsIIARCImHxUNEKSpHVidNwfBpYKdaB03q5QhqmVtAVAw14GzPmqmPdye4oUlwztoE6pb/MigVkthNW5TBNPhjoxva4MA/MAv4adH8r5YSJAlqWOurYgHVmx2IuIN7uYeIGR/68DwRC24teJjl4fBuYP9/2hnW8LQCq3zX8bD/NQ8RJixU+JO23Vf6eiNFsIa1+D6mS78CrkmHVHiqx12FcnbpMCkg++2MRkM+DpyqB/b5LQ/71wfo+B87oJuBWLK+7HDcC2Gs4FwLbW9jamL4dn2FZpLIuhhGYdF6DzewbSszR43oLHs4OzMaoT+cFlW3mXoZwLgPl9WWQ+nZab+7Rm3AtJWbTKYfXdeVOgFC80Xl9TdPYlxYPoMRk+tVLJBeBi4OjIzF5rdSgmZxfV+sQwWLfzOu/T2O6JOawtRkbq+GzleKmcC8AdIWTrFjkOuKBhdSPhvEBRDe58k/NO7RHrUTtyyQVAesmKWyfVoyll4CDNlbPzzucJYwfYeLUdBp1cANylGL10MmCYt5Fc560Xni6dfgOQMiwXgAsT9FIW+VgxItd5897XoZvbINtWNxeAAxINh92cIfpmxuJtnO/U4WXY8p9KLgCLhFyMPW58GGgrr6MxsR+wRU5Ve79158fifBsA1E0VQscFwUipcnclGBKYVvImomKszrcFQALSzi4lpoN8n69B34afvWxc3CDt4WPsbTnf2J1vC4D6KR4+N+3q9HpxfhgAFg5kx3JdvB34VudtcnxJGrvkFsGqYasXL7LPAvONwNredr60fRgA/Ha1wPt1uZ1JckqaWFx7k2EB0OBFw+OlRElbsZh61GWzt20XyNXvAkC5hi8wp4e7QupHEJ4Q8ony/1mPFrlOdNEbBQDl+guFHybJGsnf+6suw9zLjLTXQzPrQjNVAOhiR2/fjjICenOiy8ITALqgNyt8O4mAWWEXu/gwiYAu6M0K3077CPgXfs0QUOCNd9QAAAAASUVORK5CYII=",gw="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20111.07%20122.88'%20style='enable-background:new%200%200%20111.07%20122.88'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%3c![CDATA[%20.st0{fill-rule:evenodd;clip-rule:evenodd;}%20]]%3e%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M97.67,20.81L97.67,20.81l0.01,0.02c3.7,0.01,7.04,1.51,9.46,3.93c2.4,2.41,3.9,5.74,3.9,9.42h0.02v0.02v75.28%20v0.01h-0.02c-0.01,3.68-1.51,7.03-3.93,9.46c-2.41,2.4-5.74,3.9-9.42,3.9v0.02h-0.02H38.48h-0.01v-0.02%20c-3.69-0.01-7.04-1.5-9.46-3.93c-2.4-2.41-3.9-5.74-3.91-9.42H25.1c0-25.96,0-49.34,0-75.3v-0.01h0.02%20c0.01-3.69,1.52-7.04,3.94-9.46c2.41-2.4,5.73-3.9,9.42-3.91v-0.02h0.02C58.22,20.81,77.95,20.81,97.67,20.81L97.67,20.81z%20M0.02,75.38L0,13.39v-0.01h0.02c0.01-3.69,1.52-7.04,3.93-9.46c2.41-2.4,5.74-3.9,9.42-3.91V0h0.02h59.19%20c7.69,0,8.9,9.96,0.01,10.16H13.4h-0.02v-0.02c-0.88,0-1.68,0.37-2.27,0.97c-0.59,0.58-0.96,1.4-0.96,2.27h0.02v0.01v3.17%20c0,19.61,0,39.21,0,58.81C10.17,83.63,0.02,84.09,0.02,75.38L0.02,75.38z%20M100.91,109.49V34.2v-0.02h0.02%20c0-0.87-0.37-1.68-0.97-2.27c-0.59-0.58-1.4-0.96-2.28-0.96v0.02h-0.01H38.48h-0.02v-0.02c-0.88,0-1.68,0.38-2.27,0.97%20c-0.59,0.58-0.96,1.4-0.96,2.27h0.02v0.01v75.28v0.02h-0.02c0,0.88,0.38,1.68,0.97,2.27c0.59,0.59,1.4,0.96,2.27,0.96v-0.02h0.01%20h59.19h0.02v0.02c0.87,0,1.68-0.38,2.27-0.97c0.59-0.58,0.96-1.4,0.96-2.27L100.91,109.49L100.91,109.49L100.91,109.49%20L100.91,109.49z'/%3e%3c/g%3e%3c/svg%3e",iD={class:"max-w-7xl m-auto mt-10"},oD={class:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert"},aD={for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"},cD={key:0},lD=ZE('<div class="flex flex-col items-center justify-center pt-5 pb-6"><svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"></path></svg><p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p><p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p></div>',1),uD={key:1,class:"flex flex-col gap-6 w-full"},hD=Q("h2",{class:"text-3xl text-neutral-400 font-bold text-center"},"Success!",-1),fD={class:"w-[95%] mx-auto flex justify-center"},dD=["href"],pD={class:"h-full w-10 flex items-center"},gD=["src"],mD={class:"break-all flex-grow"},_D={class:"mb-3 w-fit mx-auto"},yD={class:"flex gap-1 border-neutral-700"},vD=["src"],wD=Q("p",null,"URL",-1),ED={key:0,class:"max-w-7xl w-full h-64 fixed flex backdrop-blur-sm bg-opacity-70 border-2 border-gray-300 border-dashed rounded-lg"},TD=Q("div",{class:"m-auto self-center"},[Q("h1",{class:"text-sm font-bold flex items-center"},[vl("Upl"),Q("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",class:"animate-spin fill-blue-600",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},[Q("path",{d:"M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z"})]),vl(" ading . . .")])],-1),ID=[TD],AD={key:0,class:"max-w-7xl w-full h-full top-0 fixed flex backdrop-blur-sm"},RD=Q("div",{class:"m-auto self-center"},[Q("svg",{"aria-hidden":"true",class:"w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Q("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),Q("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})])],-1),bD=[RD],PD=Xn({__name:"HomeView",setup(t){ge();const e=ge(""),n=ge(""),r=ge(""),s=ge(null),i=ge(!1),o=ge(!1),a=ge(!1),c=ge([]);Di(()=>{window.addEventListener("paste",l)}),xi({title:"Quick Shot",meta:[{name:"og:site_name",content:"Quickshot"},{name:"og:title",content:"Screenshot"},{name:"og:type",content:"website"},{name:"og:url",content:ya},{name:"og:description",content:"Captured with Quickshot"},{name:"og:image",content:`${ya}camera.png`}]});const l=w=>{var P;const T=(P=w.clipboardData)==null?void 0:P.items[0];if(T)if(T.type.startsWith("image/")){const O=T.getAsFile();o.value=!0,p(O)}else c.value.push("Pasted item is a not a Image, Please Enter Image")},u=w=>{if(w.target!==null&&w.target.files&&w.target.files.length>0){const[T]=w.target.files;T.type.startsWith("image/")?(o.value=!0,n.value=T.name,p(T)):c.value.push("Selected item is a not a Image, Please Enter Image")}},h=()=>{console.log("Drag Enter")},f=()=>{console.log("Drag Leave")},d=w=>{var P;const T=(P=w.dataTransfer)==null?void 0:P.items[0];if(console.log("item",T),T)if(T.type.startsWith("image/")){const O=T.getAsFile();o.value=!0,p(O)}else c.value.push("Dropped item is not an image, please enter an image")},p=w=>{c.value.length>0&&c.value.splice(0,c.value.length);const T=15e5,P=9e5;let O=1;w.size>T&&(O=parseFloat((P/w.size).toFixed(2)));try{new rD(w,{quality:O,success:F=>{e.value=URL.createObjectURL(F),s.value=F,o.value=!1,_()}})}catch(F){console.log(F)}},_=async()=>{if(o.value=!0,s.value!==null){let w=await Me.addFile(s.value,n.value);console.log(w.imageID),r.value="https://quickss.in/s/"+w.imageID,o.value=!1,a.value=!0}else console.log("Something went wrong.")},y=()=>{navigator.clipboard.writeText(r.value)};return(w,T)=>(at(),Ct("main",iD,[(at(!0),Ct(Ut,null,kE(c.value,(P,O)=>(at(),Ct("div",oD,$o(P),1))),256)),Q("div",{class:"flex items-center justify-center w-full",onDragover:T[0]||(T[0]=Fs(()=>{},["prevent"])),onDragenter:Fs(h,["prevent"]),onDragleave:Fs(f,["prevent"]),onDrop:Fs(d,["prevent"])},[Q("label",aD,[a.value?(at(),Ct("div",uD,[hD,Q("div",fD,[Q("a",{href:r.value,target:"_blank",class:"text-xl flex gap-2 text-neutral-900 rounded border py-2 px-5 w-fit bg-neutral-100"},[Q("span",pD,[Q("img",{src:K(sD),class:"w-7 h-7"},null,8,gD)]),Q("p",mD,$o(r.value),1)],8,dD)]),Q("div",_D,[Q("button",{class:"border rounded py-2 px-6 border-neutral-600 bg-neutral-200",onClick:y},[Q("span",yD,[Q("img",{src:K(gw),class:"w-4 mr-2"},null,8,vD),wD])])])])):(at(),Ct("div",cD,[lD,Q("input",{id:"dropzone-file",onChange:u,type:"file",class:"hidden"},null,32)]))]),o.value?(at(),Ct("div",ED,ID)):hi("",!0)],32),i.value?(at(),Ct("div",AD,bD)):hi("",!0)]))}}),CD={},SD={class:"max-w-7xl w-full h-full top-0 fixed flex backdrop-blur-sm"},kD=Q("div",{class:"m-auto self-center"},[Q("svg",{"aria-hidden":"true",class:"w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Q("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),Q("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})])],-1),OD=[kD];function xD(t,e){return at(),Ct("div",SD,OD)}const DD=Nx(CD,[["render",xD]]),ND={class:"max-w-7xl m-auto my-10"},VD={class:"mb-3 w-fit mx-auto"},LD={class:"flex gap-1 border-neutral-700"},MD=["src"],UD=Q("p",null,"URL",-1),FD={class:"w-full flex justify-center"},$D=["src"],jD=Xn({__name:"ImageView",setup(t){const e=Fu(),n=ge(!1),r=ge(""),s=ge(!0);Di(()=>{a()});const i=()=>{s.value=!1},o=()=>{navigator.clipboard.writeText(window.location.href)};xi({title:"Quick Shot",meta:[{name:"og:site_name",content:"Quickshot"},{name:"og:title",content:"Screenshot"},{name:"og:type",content:"website"},{name:"og:url",content:window.location.href},{name:"og:description",content:"Captured with Quickshot"}]});const a=async()=>{n.value=!1,Object.keys(e.params).includes("imageID")||(n.value=!0);const c=e.params.imageID;try{const l=await Me.getImage(c);l!=null||l!=!1?(r.value=l,xi({title:"Quick Shot",meta:[{name:"og:image",content:r.value}]})):(r.value="",n.value=!0)}catch{}};return(c,l)=>(at(),Ct("div",ND,[Q("div",VD,[Q("button",{class:"border rounded py-2 px-6 border-neutral-600 bg-neutral-200",onClick:o},[Q("span",LD,[Q("img",{src:K(gw),class:"w-4 mr-2"},null,8,MD),UD])])]),Q("div",FD,[Q("img",{class:"shadow-image1 h-auto max-w-full border-neutral-800 border-8 rounded-lg",src:r.value,onload:i},null,8,$D)]),s.value?(at(),Ou(DD,{key:0})):hi("",!0)]))}}),uf=(t,e=[])=>{for(const n of t)n.name&&e.push(n.name.toString()),n.children&&n.children.length>0&&e.push(...uf(n.children));return e},mw=[{path:"/login",name:"login",component:xx,meta:{guard:"unauth"}}],BD=[{path:"/s",component:hw,children:[{path:":imageID",name:"image",component:jD}]}],_w=[{path:"/",component:hw,meta:{guard:"auth"},children:[{path:"",name:"home",component:PD}]}],yw=qT({history:aT("/quickshot/"),routes:[..._w,...BD,...mw]}),HD=uf(mw),qD=uf(_w);yw.beforeEach(async(t,e)=>{const n=wc(),r=n.user!==null;if(typeof t.name=="string"&&n.initProcessDone){if(r&&HD.includes(t.name))return{name:"home"};if(!r&&qD.includes(t.name))return{name:"login"}}});const Tc=N0(iO),WD=wx();Tc.use(U0());Tc.use(WD);Tc.use(yw);Tc.mount("#app");
