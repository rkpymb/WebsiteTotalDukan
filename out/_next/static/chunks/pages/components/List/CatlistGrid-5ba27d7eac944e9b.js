(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3389],{88078:function(t,e,n){"use strict";n.d(e,{Z:function(){return Z}});var a=n(63366),i=n(87462),r=n(67294),o=n(93680),s=n(70917),d=n(94780),l=n(41796),c=n(90948),h=n(71657),u=n(34867),f=n(1588);function m(t){return(0,u.Z)("MuiSkeleton",t)}(0,f.Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var p=n(85893);let g=["animation","className","component","height","style","variant","width"],v=t=>t,x,w,A,C,b=t=>{let{classes:e,variant:n,animation:a,hasChildren:i,width:r,height:o}=t;return(0,d.Z)({root:["root",n,a,i&&"withChildren",i&&!r&&"fitContent",i&&!o&&"heightAuto"]},m,e)},y=(0,s.F4)(x||(x=v`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),j=(0,s.F4)(w||(w=v`
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
`)),N=(0,c.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver(t,e){let{ownerState:n}=t;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{var n,a;let r=String(n=t.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",o=parseFloat(a=t.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:(0,l.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${r}/${Math.round(o/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>"pulse"===t.animation&&(0,s.iv)(A||(A=v`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),y),({ownerState:t,theme:e})=>"wave"===t.animation&&(0,s.iv)(C||(C=v`
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
    `),j,e.palette.action.hover)),k=r.forwardRef(function(t,e){let n=(0,h.Z)({props:t,name:"MuiSkeleton"}),{animation:r="pulse",className:s,component:d="span",height:l,style:c,variant:u="text",width:f}=n,m=(0,a.Z)(n,g),v=(0,i.Z)({},n,{animation:r,component:d,variant:u,hasChildren:Boolean(m.children)}),x=b(v);return(0,p.jsx)(N,(0,i.Z)({as:d,ref:e,className:(0,o.Z)(x.root,s),ownerState:v},m,{style:(0,i.Z)({width:f,height:l},c)}))});var Z=k},88905:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/List/CatlistGrid",function(){return n(63968)}])},63968:function(t,e,n){"use strict";n.r(e);var a=n(47568),i=n(97582),r=n(85893),o=n(67294),s=n(11163),d=n(41664),l=n.n(d),c=n(25675),h=n.n(c),u=n(88078),f=n(87737),m=n.n(f),p=n(98348),g=[{data:1},{data:1},{data:1},{data:1},{data:1},{data:1},{data:1},{data:1},{data:1},{data:1}];e.default=function(){var t=(0,o.useState)([]),e=t[0],n=t[1],d=(0,o.useState)(!0),c=d[0],f=d[1],v=(0,s.useRouter)();return(0,o.useEffect)(function(){var t;(t=(0,a.Z)(function(){return(0,i.__generator)(this,function(t){switch(t.label){case 0:return[4,fetch("/api/V3/List/CatList",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({dataid:"08c5th4rh86ht57h6g"})}).then(function(t){return t.json()}).then(function(t){n(t.ReqD.categories),t.ReqD.categories.length>0&&f(!1)})];case 1:return t.sent(),[2]}})}),function(){return t.apply(this,arguments)})()},[v.query]),(0,r.jsxs)(r.Fragment,{children:[!c&&(0,r.jsx)("div",{className:m().CatGrid,children:e.map(function(t){return(0,r.jsx)(l(),{href:"/Category/".concat(t.slug),style:{textDecoration:"none"},children:(0,r.jsxs)("div",{className:m().CatGridItem,children:[(0,r.jsx)("div",{className:m().CatGridItemA,children:(0,r.jsx)(h(),{src:"".concat(p.CK).concat(p.sH,"/").concat(t.image),alt:"image",layout:"responsive",placeholder:"blur",width:50,height:50,quality:100,blurDataURL:"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg=="})}),(0,r.jsx)("div",{div:!0,className:m().OnlyDesktop,children:(0,r.jsx)("div",{div:!0,className:m().CatListItemBoxText,children:(0,r.jsx)("span",{children:t.name.slice(0,30)})})}),(0,r.jsx)("div",{div:!0,className:m().OnlyMobile,children:(0,r.jsx)("div",{div:!0,className:m().CatListItemBoxText,children:(0,r.jsx)("span",{children:t.name.slice(0,20)})})})]})},t.id)})}),c&&(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:m().CatGrid,children:g.map(function(t){return(0,r.jsxs)("div",{className:m().CatGridItemLoader,children:[(0,r.jsx)(u.Z,{variant:"rounded",width:50,height:50}),(0,r.jsx)(u.Z,{variant:"text",sx:{fontSize:"1rem"},width:"50%"})]})})})})]})}},47568:function(t,e,n){"use strict";function a(t,e,n,a,i,r,o){try{var s=t[r](o),d=s.value}catch(l){n(l);return}s.done?e(d):Promise.resolve(d).then(a,i)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function s(t){a(o,i,r,s,d,"next",t)}function d(t){a(o,i,r,s,d,"throw",t)}s(void 0)})}}n.d(e,{Z:function(){return i}})}},function(t){t.O(0,[5201,1664,9260,7737,9774,2888,179],function(){return t(t.s=88905)}),_N_E=t.O()}]);