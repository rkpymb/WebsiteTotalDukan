(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5675],{88078:function(t,n,e){"use strict";e.d(n,{Z:function(){return j}});var i=e(63366),r=e(87462),a=e(67294),o=e(93680),s=e(70917),h=e(94780),u=e(41796),c=e(90948),l=e(71657),d=e(34867),f=e(1588);function p(t){return(0,d.Z)("MuiSkeleton",t)}(0,f.Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g=e(85893);let m=["animation","className","component","height","style","variant","width"],v=t=>t,w,b,y,C,x=t=>{let{classes:n,variant:e,animation:i,hasChildren:r,width:a,height:o}=t;return(0,h.Z)({root:["root",e,i,r&&"withChildren",r&&!a&&"fitContent",r&&!o&&"heightAuto"]},p,n)},k=(0,s.F4)(w||(w=v`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Z=(0,s.F4)(b||(b=v`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),_=(0,c.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver(t,n){let{ownerState:e}=t;return[n.root,n[e.variant],!1!==e.animation&&n[e.animation],e.hasChildren&&n.withChildren,e.hasChildren&&!e.width&&n.fitContent,e.hasChildren&&!e.height&&n.heightAuto]}})(({theme:t,ownerState:n})=>{var e,i;let a=String(e=t.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",o=parseFloat(i=t.shape.borderRadius);return(0,r.Z)({display:"block",backgroundColor:(0,u.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${a}/${Math.round(o/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})},({ownerState:t})=>"pulse"===t.animation&&(0,s.iv)(y||(y=v`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),k),({ownerState:t,theme:n})=>"wave"===t.animation&&(0,s.iv)(C||(C=v`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(90deg, transparent, ${0}, transparent);
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),Z,n.palette.action.hover)),S=a.forwardRef(function(t,n){let e=(0,l.Z)({props:t,name:"MuiSkeleton"}),{animation:a="pulse",className:s,component:h="span",height:u,style:c,variant:d="text",width:f}=e,p=(0,i.Z)(e,m),v=(0,r.Z)({},e,{animation:a,component:h,variant:d,hasChildren:Boolean(p.children)}),w=x(v);return(0,g.jsx)(_,(0,r.Z)({as:h,ref:n,className:(0,o.Z)(w.root,s),ownerState:v},p,{style:(0,r.Z)({width:f,height:u},c)}))});var j=S},28028:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/List/Singerbanner",function(){return e(63849)}])},63849:function(t,n,e){"use strict";e.r(n);var i=e(47568),r=e(97582),a=e(85893),o=e(67294),s=e(11163),h=e(41664),u=e.n(h);e(25675);var c=e(88078),l=e(87737),d=e.n(l),f=e(98348);n.default=function(){var t=(0,o.useState)([]),n=t[0],e=t[1],h=(0,o.useState)(!0),l=h[0],p=h[1],g=(0,s.useRouter)();return(0,o.useEffect)(function(){var t;(t=(0,i.Z)(function(){return(0,r.__generator)(this,function(t){switch(t.label){case 0:return[4,fetch("/api/V3/List/Singerbanner",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({dataid:"08c5th4rh86ht57h6g"})}).then(function(t){return t.json()}).then(function(t){e(t.ReqD.Banners),1==t.ReqD.Banners.length&&p(!1)})];case 1:return t.sent(),[2]}})}),function(){return t.apply(this,arguments)})()},[g.query]),(0,a.jsxs)(a.Fragment,{children:[!l&&(0,a.jsx)("div",{children:n.map(function(t){return(0,a.jsx)(u(),{href:"/".concat(t.url),style:{textDecoration:"none"},children:(0,a.jsx)("div",{className:d().SinglePoster,children:(0,a.jsx)("img",{src:"".concat(f.CK).concat(f.sH,"/").concat(t.image),alt:"image",width:"100%"})})},t.id)})}),l&&(0,a.jsx)("div",{children:(0,a.jsx)(c.Z,{variant:"rounded",width:"100%",height:250})})]})}},47568:function(t,n,e){"use strict";function i(t,n,e,i,r,a,o){try{var s=t[a](o),h=s.value}catch(u){e(u);return}s.done?n(h):Promise.resolve(h).then(i,r)}function r(t){return function(){var n=this,e=arguments;return new Promise(function(r,a){var o=t.apply(n,e);function s(t){i(o,r,a,s,h,"next",t)}function h(t){i(o,r,a,s,h,"throw",t)}s(void 0)})}}e.d(n,{Z:function(){return r}})}},function(t){t.O(0,[5201,1664,9260,7737,9774,2888,179],function(){return t(t.s=28028)}),_N_E=t.O()}]);