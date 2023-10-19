(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4148],{88078:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var i=n(63366),r=n(87462),a=n(67294),s=n(93680),o=n(70917),l=n(94780),c=n(41796),h=n(90948),d=n(71657),u=n(34867),p=n(1588);function f(e){return(0,u.Z)("MuiSkeleton",e)}(0,p.Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var m=n(85893);let g=["animation","className","component","height","style","variant","width"],w=e=>e,v,x,b,y,j=e=>{let{classes:t,variant:n,animation:i,hasChildren:r,width:a,height:s}=e;return(0,l.Z)({root:["root",n,i,r&&"withChildren",r&&!a&&"fitContent",r&&!s&&"heightAuto"]},f,t)},k=(0,o.F4)(v||(v=w`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),S=(0,o.F4)(x||(x=w`
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
`)),C=(0,h.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver(e,t){let{ownerState:n}=e;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{var n,i;let a=String(n=e.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",s=parseFloat(i=e.shape.borderRadius);return(0,r.Z)({display:"block",backgroundColor:(0,c.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${a}/${Math.round(s/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>"pulse"===e.animation&&(0,o.iv)(b||(b=w`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),k),({ownerState:e,theme:t})=>"wave"===e.animation&&(0,o.iv)(y||(y=w`
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
    `),S,t.palette.action.hover)),Z=a.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiSkeleton"}),{animation:a="pulse",className:o,component:l="span",height:c,style:h,variant:u="text",width:p}=n,f=(0,i.Z)(n,g),w=(0,r.Z)({},n,{animation:a,component:l,variant:u,hasChildren:Boolean(f.children)}),v=j(w);return(0,m.jsx)(C,(0,r.Z)({as:l,ref:t,className:(0,s.Z)(v.root,o),ownerState:w},f,{style:(0,r.Z)({width:p,height:c},h)}))});var _=Z},46482:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/List/HomeSliders2",function(){return n(398)}])},398:function(e,t,n){"use strict";n.r(t);var i=n(47568),r=n(97582),a=n(85893),s=n(67294),o=n(11163),l=n(41664),c=n.n(l),h=n(88078),d=n(87737),u=n.n(d),p=n(98348);n(80256);var f=n(99304),m=n(2261);n(25194),n(18700),n(94375),t.default=function(){var e=(0,s.useState)([]),t=e[0],n=e[1],l=(0,s.useState)(!0),d=l[0],g=l[1],w=(0,o.useRouter)();return(0,s.useEffect)(function(){var e;(e=(0,i.Z)(function(){return(0,r.__generator)(this,function(e){switch(e.label){case 0:return[4,fetch("/api/V3/List/HomepageBannersList",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({Group:2})}).then(function(e){return e.json()}).then(function(e){n(e.ReqD.Banners),e.ReqD.Banners.length>2&&g(!1)})];case 1:return e.sent(),[2]}})}),function(){return e.apply(this,arguments)})()},[w.query]),(0,a.jsxs)(a.Fragment,{children:[!d&&(0,a.jsx)("div",{children:(0,a.jsx)(m.tq,{slidesPerView:1.5,spaceBetween:5,freeMode:!0,pagination:{clickable:!0},navigation:!0,modules:[f.Rv,f.W_],className:"mySwiper",breakpoints:{768:{slidesPerView:1.5},992:{spaceBetween:10,slidesPerView:2.5}},children:t.map(function(e,t){return(0,a.jsx)(m.o5,{children:(0,a.jsx)("div",{className:u().SecondSwiperImg,children:(0,a.jsx)(c(),{href:"/".concat(e.url),children:(0,a.jsxs)("div",{style:{display:"flex"},children:[(0,a.jsx)("div",{className:u().OnlyMobile,children:(0,a.jsx)("div",{style:{minWidth:"5px"}})}),(0,a.jsx)("img",{src:"".concat(p.CK).concat(p.sH,"/").concat(e.image)})]})})})},t)})})}),d&&(0,a.jsx)("div",{children:(0,a.jsxs)(m.tq,{slidesPerView:2,spaceBetween:5,freeMode:!0,pagination:{clickable:!0},navigation:!0,modules:[f.Rv,f.W_],className:"mySwiper",breakpoints:{768:{slidesPerView:2},992:{spaceBetween:20,slidesPerView:3}},children:[(0,a.jsx)(m.o5,{className:u().SwiperImgae,children:(0,a.jsx)(h.Z,{variant:"rounded",width:"100%",height:200})}),(0,a.jsx)(m.o5,{className:u().SwiperImgae,children:(0,a.jsx)(h.Z,{variant:"rounded",width:"100%",height:200})}),(0,a.jsx)(m.o5,{className:u().SwiperImgae,children:(0,a.jsx)(h.Z,{variant:"rounded",width:"100%",height:200})}),(0,a.jsx)(m.o5,{className:u().SwiperImgae,children:(0,a.jsx)(h.Z,{variant:"rounded",width:"100%",height:200})})]})})]})}},80256:function(e,t,n){"use strict";n(85893),n(67294)},47568:function(e,t,n){"use strict";function i(e,t,n,i,r,a,s){try{var o=e[a](s),l=o.value}catch(c){n(c);return}o.done?t(l):Promise.resolve(l).then(i,r)}function r(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var s=e.apply(t,n);function o(e){i(s,r,a,o,l,"next",e)}function l(e){i(s,r,a,o,l,"throw",e)}o(void 0)})}}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[5201,1664,174,7737,9774,2888,179],function(){return e(e.s=46482)}),_N_E=e.O()}]);