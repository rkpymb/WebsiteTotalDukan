(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[611],{88078:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var i=n(63366),a=n(87462),r=n(67294),o=n(93680),s=n(70917),l=n(94780),h=n(41796),c=n(90948),u=n(71657),d=n(34867),p=n(1588);function f(e){return(0,d.Z)("MuiSkeleton",e)}(0,p.Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var m=n(85893);let g=["animation","className","component","height","style","variant","width"],w=e=>e,v,b,x,y,k=e=>{let{classes:t,variant:n,animation:i,hasChildren:a,width:r,height:o}=e;return(0,l.Z)({root:["root",n,i,a&&"withChildren",a&&!r&&"fitContent",a&&!o&&"heightAuto"]},f,t)},j=(0,s.F4)(v||(v=w`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),S=(0,s.F4)(b||(b=w`
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
`)),C=(0,c.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver(e,t){let{ownerState:n}=e;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{var n,i;let r=String(n=e.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",o=parseFloat(i=e.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:(0,h.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${r}/${Math.round(o/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>"pulse"===e.animation&&(0,s.iv)(x||(x=w`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),j),({ownerState:e,theme:t})=>"wave"===e.animation&&(0,s.iv)(y||(y=w`
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
    `),S,t.palette.action.hover)),Z=r.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:s,component:l="span",height:h,style:c,variant:d="text",width:p}=n,f=(0,i.Z)(n,g),w=(0,a.Z)({},n,{animation:r,component:l,variant:d,hasChildren:Boolean(f.children)}),v=k(w);return(0,m.jsx)(C,(0,a.Z)({as:l,ref:t,className:(0,o.Z)(v.root,s),ownerState:w},f,{style:(0,a.Z)({width:p,height:h},c)}))});var _=Z},93271:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/List/HomeSliders",function(){return n(77932)}])},77932:function(e,t,n){"use strict";n.r(t);var i=n(47568),a=n(97582),r=n(85893),o=n(67294),s=n(11163),l=n(41664),h=n.n(l);n(25675);var c=n(88078),u=n(87737),d=n.n(u),p=n(98348),f=n(99304),m=n(2261);n(25194),n(18700),n(94375),t.default=function(){var e=(0,o.useState)([]),t=e[0],n=e[1],l=(0,o.useState)(!0),u=l[0],g=l[1],w=(0,s.useRouter)();return(0,o.useEffect)(function(){var e;(e=(0,i.Z)(function(){return(0,a.__generator)(this,function(e){switch(e.label){case 0:return[4,fetch("/api/V3/List/HomepageBannersList",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({Group:1})}).then(function(e){return e.json()}).then(function(e){n(e.ReqD.Banners),e.ReqD.Banners.length>2&&g(!1)})];case 1:return e.sent(),[2]}})}),function(){return e.apply(this,arguments)})()},[w.query]),(0,r.jsxs)(r.Fragment,{children:[!u&&(0,r.jsx)("div",{children:(0,r.jsx)(m.tq,{breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}},spaceBetween:10,centeredSlides:!1,autoplay:{delay:2500,disableOnInteraction:!0},pagination:{clickable:!0},navigation:!0,modules:[f.pt,f.tl,f.W_],children:t.map(function(e,t){return(0,r.jsx)(m.o5,{className:d().SwiperImgae,children:(0,r.jsx)(h(),{href:"/".concat(e.url),children:(0,r.jsx)("img",{src:"".concat(p.CK).concat(p.sH,"/").concat(e.image)})})},t)})})}),u&&(0,r.jsx)("div",{children:(0,r.jsxs)(m.tq,{breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}},spaceBetween:10,centeredSlides:!1,autoplay:{delay:2500,disableOnInteraction:!0},pagination:{clickable:!0},navigation:!0,modules:[f.pt,f.tl,f.W_],children:[(0,r.jsx)(m.o5,{className:d().SwiperImgae,children:(0,r.jsx)(c.Z,{variant:"rounded",width:"100%",height:230})}),(0,r.jsx)(m.o5,{className:d().SwiperImgae,children:(0,r.jsx)(c.Z,{variant:"rounded",width:"100%",height:230})}),(0,r.jsx)(m.o5,{className:d().SwiperImgae,children:(0,r.jsx)(c.Z,{variant:"rounded",width:"100%",height:230})}),(0,r.jsx)(m.o5,{className:d().SwiperImgae,children:(0,r.jsx)(c.Z,{variant:"rounded",width:"100%",height:230})})]})})]})}},47568:function(e,t,n){"use strict";function i(e,t,n,i,a,r,o){try{var s=e[r](o),l=s.value}catch(h){n(h);return}s.done?t(l):Promise.resolve(l).then(i,a)}function a(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function s(e){i(o,a,r,s,l,"next",e)}function l(e){i(o,a,r,s,l,"throw",e)}s(void 0)})}}n.d(t,{Z:function(){return a}})}},function(e){e.O(0,[5201,1664,9260,174,7737,9774,2888,179],function(){return e(e.s=93271)}),_N_E=e.O()}]);