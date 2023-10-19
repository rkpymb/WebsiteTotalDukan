"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6853],{56853:function(e,n,o){o.d(n,{Z:function(){return P}});var t=o(87462),l=o(63366),i=o(67294),r=o.t(i,2),s=o(45697),d=o.n(s),a=o(20539),p=o(8679),u=o.n(p),m=o(2734),w=o(58974),f=o(34168);function x(e,n,o,t,l){let r="undefined"!=typeof window&&void 0!==window.matchMedia,[s,d]=i.useState(()=>l&&r?o(e).matches:t?t(e).matches:n);return(0,w.Z)(()=>{let n=!0;if(!r)return;let t=o(e),l=()=>{n&&d(t.matches)};return l(),t.addListener(l),()=>{n=!1,t.removeListener(l)}},[e,o,r]),s}let c=r.useSyncExternalStore;function h(e,n,o,t){let l=i.useCallback(()=>n,[n]),r=i.useMemo(()=>{if(null!==t){let{matches:n}=t(e);return()=>n}return l},[l,e,t]),[s,d]=i.useMemo(()=>{if(null===o)return[l,()=>()=>{}];let n=o(e);return[()=>n.matches,e=>(n.addListener(e),()=>{n.removeListener(e)})]},[l,o,e]),a=c(d,s,r);return a}var y=o(85893);let U=["initialWidth","width"],D=["xs","sm","md","lg","xl"],b=(e,n,o=!0)=>o?D.indexOf(e)<=D.indexOf(n):D.indexOf(e)<D.indexOf(n),Z=(e,n,o=!1)=>o?D.indexOf(n)<=D.indexOf(e):D.indexOf(n)<D.indexOf(e);function k(e){let{children:n,only:o,width:t}=e,l=(0,m.Z)(),i=!0;if(o){if(Array.isArray(o))for(let r=0;r<o.length;r+=1){let s=o[r];if(t===s){i=!1;break}}else o&&t===o&&(i=!1)}if(i)for(let d=0;d<l.breakpoints.keys.length;d+=1){let a=l.breakpoints.keys[d],p=e[`${a}Up`],u=e[`${a}Down`];if(p&&b(a,t)||u&&Z(a,t)){i=!1;break}}return i?n:null}k.propTypes={children:d().node,className:d().string,implementation:d().oneOf(["js","css"]),initialWidth:d().oneOf(["xs","sm","md","lg","xl"]),lgDown:d().bool,lgUp:d().bool,mdDown:d().bool,mdUp:d().bool,only:d().oneOfType([d().oneOf(["xs","sm","md","lg","xl"]),d().arrayOf(d().oneOf(["xs","sm","md","lg","xl"]))]),smDown:d().bool,smUp:d().bool,width:d().string.isRequired,xlDown:d().bool,xlUp:d().bool,xsDown:d().bool,xsUp:d().bool};var g=((e={})=>n=>{let{withTheme:o=!1,noSSR:r=!1,initialWidth:s}=e;function d(e){let d=(0,m.Z)(),p=e.theme||d,u=(0,a.Z)({theme:p,name:"MuiWithWidth",props:e}),{initialWidth:D,width:b}=u,Z=(0,l.Z)(u,U),[k,g]=i.useState(!1);(0,w.Z)(()=>{g(!0)},[]);let v=p.breakpoints.keys.slice().reverse(),O=v.reduce((e,n)=>{let o=function(e,n={}){let o=(0,f.Z)(),t="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:l=!1,matchMedia:i=t?window.matchMedia:null,ssrMatchMedia:r=null,noSsr:s}=(0,a.Z)({name:"MuiUseMediaQuery",props:n,theme:o}),d="function"==typeof e?e(o):e;d=d.replace(/^@media( ?)/m,"");let p=(void 0!==c?h:x)(d,l,i,r,s);return p}(p.breakpoints.up(n));return!e&&o?n:e},null),M=(0,t.Z)({width:b||(k||r?O:void 0)||D||s},o?{theme:p}:{},Z);return void 0===M.width?null:(0,y.jsx)(n,(0,t.Z)({},M))}return u()(d,n),d})()(k),v=o(93680),O=o(94780),M=o(98216),j=o(90948),$=o(34867),C=o(1588);function S(e){return(0,$.Z)("PrivateHiddenCss",e)}(0,C.Z)("PrivateHiddenCss",["root","xlDown","xlUp","onlyXl","lgDown","lgUp","onlyLg","mdDown","mdUp","onlyMd","smDown","smUp","onlySm","xsDown","xsUp","onlyXs"]);let E=["children","className","only"],L=e=>{let{classes:n,breakpoints:o}=e,t={root:["root",...o.map(({breakpoint:e,dir:n})=>"only"===n?`${n}${(0,M.Z)(e)}`:`${e}${(0,M.Z)(n)}`)]};return(0,O.Z)(t,S,n)},N=(0,j.ZP)("div",{name:"PrivateHiddenCss",slot:"Root"})(({theme:e,ownerState:n})=>{let o={display:"none"};return(0,t.Z)({},n.breakpoints.map(({breakpoint:n,dir:t})=>"only"===t?{[e.breakpoints.only(n)]:o}:"up"===t?{[e.breakpoints.up(n)]:o}:{[e.breakpoints.down(n)]:o}).reduce((e,n)=>(Object.keys(n).forEach(o=>{e[o]=n[o]}),e),{}))});var W=function(e){let{children:n,className:o,only:i}=e,r=(0,l.Z)(e,E),s=(0,m.Z)(),d=[];for(let a=0;a<s.breakpoints.keys.length;a+=1){let p=s.breakpoints.keys[a],u=r[`${p}Up`],w=r[`${p}Down`];u&&d.push({breakpoint:p,dir:"up"}),w&&d.push({breakpoint:p,dir:"down"})}if(i){let f=Array.isArray(i)?i:[i];f.forEach(e=>{d.push({breakpoint:e,dir:"only"})})}let x=(0,t.Z)({},e,{breakpoints:d}),c=L(x);return(0,y.jsx)(N,{className:(0,v.Z)(c.root,o),ownerState:x,children:n})};let A=["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"];var P=function(e){let{implementation:n="js",lgDown:o=!1,lgUp:i=!1,mdDown:r=!1,mdUp:s=!1,smDown:d=!1,smUp:a=!1,xlDown:p=!1,xlUp:u=!1,xsDown:m=!1,xsUp:w=!1}=e,f=(0,l.Z)(e,A);return"js"===n?(0,y.jsx)(g,(0,t.Z)({lgDown:o,lgUp:i,mdDown:r,mdUp:s,smDown:d,smUp:a,xlDown:p,xlUp:u,xsDown:m,xsUp:w},f)):(0,y.jsx)(W,(0,t.Z)({lgDown:o,lgUp:i,mdDown:r,mdUp:s,smDown:d,smUp:a,xlDown:p,xlUp:u,xsDown:m,xsUp:w},f))}}}]);