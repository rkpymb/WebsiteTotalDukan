(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[547],{53743:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Notifications",function(){return i(62264)}])},62264:function(e,n,i){"use strict";i.r(n);var s=i(85893),t=i(67294),a=i(90948),r=i(66242),o=i(87357),c=i(25947),l=i(93608),d=i(70750),x=i(86979),u=i(61164),h=i(6851),p=i(87737),j=i.n(p),m=i(32974),v=i(9008),g=i.n(v),f=i(79377),N=i(11163),b=i(94543);(0,a.ZP)(r.Z)(function(e){var n=e.theme;return"\n  width: 100%;\n  display: flex;\n  align-items: center;\n  height: ".concat(n.spacing(10),";\n  margin-bottom: ").concat(n.spacing(10),";\n")});var y=(0,a.ZP)(o.Z)(function(e){var n=e.theme;return"\n    overflow: auto;\n    background: ".concat(n.palette.common.white,";\n    flex: 1;\n    overflow-x: hidden;\n")});function A(){(0,N.useRouter)();var e=(0,t.useState)();e[0],e[1];var n=(0,t.useState)(!0),i=(n[0],n[1]);return(0,t.useContext)(m.Z),(0,t.useEffect)(function(){i(!1)}),(0,s.jsxs)(y,{children:[(0,s.jsx)(g(),{children:(0,s.jsx)("title",{children:"Offers : Toladukan.com"})}),(0,s.jsx)("div",{className:j().OnlyDesktop,children:(0,s.jsx)(f.Z,{})}),(0,s.jsx)("div",{className:j().OnlyMobile,children:(0,s.jsx)(b.Z,{Title:"Offers"})}),(0,s.jsx)("div",{className:j().ContainerMainBoxFull,children:(0,s.jsxs)("div",{className:j().container,children:[(0,s.jsx)(u.default,{}),(0,s.jsx)("div",{style:{minHeight:"20px"}}),(0,s.jsx)(x.default,{}),(0,s.jsx)("div",{style:{minHeight:"20px"}})]})}),(0,s.jsx)("div",{style:{minHeight:"150px"}}),(0,s.jsx)("div",{className:j().OnlyDesktop,children:(0,s.jsx)(c.Z,{})}),(0,s.jsx)(l.Z,{}),(0,s.jsx)("div",{className:j().OnlyMobile,children:(0,s.jsx)(d.Z,{})})]})}n.default=A,A.getLayout=function(e){return(0,s.jsx)(h.Z,{children:e})}},61164:function(e,n,i){"use strict";i.r(n);var s=i(47568),t=i(97582),a=i(85893),r=i(67294),o=i(11163);i(41664);var c=i(25675),l=i.n(c),d=i(87737),x=i.n(d),u=i(98348);i(80256);var h=i(99304),p=i(2261);i(25194),i(18700),i(94375),n.default=function(){var e=(0,r.useState)([]),n=e[0],i=e[1],c=(0,r.useState)(!0),d=c[0],j=c[1],m=(0,o.useRouter)();return(0,r.useEffect)(function(){var e;(e=(0,s.Z)(function(){return(0,t.__generator)(this,function(e){switch(e.label){case 0:return[4,fetch("/api/V3/List/CouponCodeList",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({Group:2})}).then(function(e){return e.json()}).then(function(e){i(e.ReqD.Coupons),e.ReqD.Coupons.length>0&&j(!1)})];case 1:return e.sent(),[2]}})}),function(){return e.apply(this,arguments)})()},[m.query]),(0,a.jsx)(a.Fragment,{children:!d&&(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{style:{minHeight:"20px"}}),(0,a.jsxs)("div",{style:{fontWeight:600},children:[" ",(0,a.jsx)("span",{children:"Coupons & Discounts"})," "]}),(0,a.jsx)("div",{style:{minHeight:"10px"}}),(0,a.jsx)(p.tq,{slidesPerView:1.5,spaceBetween:10,freeMode:!0,pagination:{clickable:!0},navigation:!0,modules:[h.Rv,h.W_],className:"mySwiper",breakpoints:{768:{slidesPerView:3},992:{spaceBetween:20,slidesPerView:3.5}},children:n.map(function(e,n){return(0,a.jsx)(p.o5,{children:(0,a.jsxs)("div",{className:x().CouponCodeBox,children:[(0,a.jsx)("div",{className:x().CouponCodeBoxA,children:(0,a.jsx)("div",{className:x().CouponCodeImage,children:(0,a.jsx)(l(),{src:"".concat(u.CK).concat(u.sH,"/").concat(e.Image),alt:"image",layout:"responsive",placeholder:"blur",width:50,height:50,quality:100,blurDataURL:"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg=="})})}),(0,a.jsx)("div",{className:x().CouponCodeBoxB,children:(0,a.jsxs)("div",{className:x().Details,children:[(0,a.jsx)("div",{style:{fontSize:"12px"},children:(0,a.jsx)("small",{children:"Coupon Code"})}),(0,a.jsx)("div",{className:x().Codetitle,children:(0,a.jsx)("span",{children:e.CouponCode})}),(0,a.jsxs)("div",{className:x().DiscountTextc,children:[1==e.Type&&(0,a.jsxs)("small",{children:["Discount upto ₹",e.MaxDiscount]}),2==e.Type&&(0,a.jsxs)("small",{children:["Discount upto ",e.MaxDiscount,"%"]}),(0,a.jsx)("div",{children:(0,a.jsxs)("small",{children:["minimum order value ₹ ",e.Minimumordervalue]})})]})]})})]})},n)})}),(0,a.jsx)("div",{style:{minHeight:"30px"}})]})})}},80256:function(e,n,i){"use strict";i(85893),i(67294)},94543:function(e,n,i){"use strict";i.d(n,{Z:function(){return N}});var s=i(85893),t=i(67294);i(25675);var a=i(32974),r=i(87737),o=i.n(r),c=i(8193),l=i(26042),d=i(90948),x=i(41796),u=i(44347);(0,d.ZP)(function(e){return(0,s.jsx)(u.Z,(0,l.Z)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))})(function(e){var n=e.theme;return{"& .MuiPaper-root":{borderRadius:6,marginTop:n.spacing(1),minWidth:180,color:"light"===n.palette.mode?"rgb(55, 65, 81)":n.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:n.palette.text.secondary,marginRight:n.spacing(1.5)},"&:active":{backgroundColor:(0,x.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}}}});var h=i(1451),p=i(87952),j=i(71236),m=i(93946),v=i(41664),g=i.n(v);i(98348);var f=i(11163),N=function(e){var n=(0,t.useContext)(a.Z),i=(0,f.useRouter)(),r=(0,d.ZP)(j.Z)(function(e){var n=e.theme;return{"& .MuiBadge-badge":{right:-3,top:13,border:"2px solid ".concat(n.palette.background.paper),padding:"0 4px"}}});return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:o().navbarBox,children:(0,s.jsxs)("div",{className:o().Navbar,children:[(0,s.jsxs)("div",{className:o().NavA,children:[(0,s.jsx)("div",{className:o().OnlyMobile,children:(0,s.jsx)("div",{className:o().CartIconBox,children:(0,s.jsx)(m.Z,{"aria-label":"cart",onClick:function(){return i.back()},children:(0,s.jsx)(r,{color:"secondary",children:(0,s.jsx)(h.sfB,{})})})})}),(0,s.jsx)("div",{className:o().HeadingTitleText,children:e.Title})]}),(0,s.jsx)("div",{className:o().NavLeft,children:(0,s.jsxs)("div",{className:o().loginbtnTopBtns,children:[!n.IsLogin&&(0,s.jsx)(g(),{href:"Login",style:{textDecoration:"none"},children:(0,s.jsxs)("div",{className:o().loginbtnTop,children:[(0,s.jsx)("span",{children:(0,s.jsx)(c.SPH,{})}),(0,s.jsx)("small",{children:"Login"})]})}),n.IsLogin&&(0,s.jsx)(g(),{href:"/Profile",children:(0,s.jsxs)("div",{className:o().UserAvaTarBox,children:[(0,s.jsx)("div",{children:(0,s.jsx)(p.Z,{src:"/userdp.png"})}),(0,s.jsx)("div",{className:o().OnlyDesktop,children:(0,s.jsxs)("div",{className:o().UserAvaTarBoxCircleTextBox,children:[(0,s.jsx)("span",{children:n.Data.name}),(0,s.jsxs)("div",{className:o().ViewPbtn,children:[(0,s.jsx)("small",{children:"View Profile"})," ",(0,s.jsx)(h.sFD,{})]})]})})]})})]})})]})})})}}},function(e){e.O(0,[9570,296,4617,2013,6556,5201,400,1664,5296,6549,4347,9260,8117,8461,9464,6412,174,4649,7737,8388,318,6979,9774,2888,179],function(){return e(e.s=53743)}),_N_E=e.O()}]);