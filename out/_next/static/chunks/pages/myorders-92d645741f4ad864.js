(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5367,318],{26307:function(e,r,n){"use strict";var s=n(64836);r.Z=void 0;var t=s(n(61268)),i=n(85893),o=(0,t.default)((0,i.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");r.Z=o},23012:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/myorders",function(){return n(19575)}])},78191:function(e,r,n){"use strict";n.r(r);var s=n(85893);n(67294);var t=function(){return(0,s.jsx)("div",{})};r.default=t},74323:function(e,r,n){"use strict";n.r(r);var s=n(85893);n(67294);var t=function(){return(0,s.jsx)("div",{})};r.default=t},91043:function(e,r,n){"use strict";n.r(r);var s=n(26042),t=n(69396),i=n(85893),o=n(67294),a=n(32912),l=n(92077),c=n.n(l),d=n(45697),x=n.n(d),h=n(2734),u=n(66242),j=n(78445),m=n(87357),p=n(94054),v=n(47312),g=n(10315),f=n(18972),y=n(67720),b=n(72882),Z=n(7906),N=n(53184),M=n(53816),B=n(53252),k=n(295),I=n(15861),C=n(59117),O=n(93946),w=n(8896),D=n(23094),F=n(70422),P=n(52521),S=function(e){var r={failed:{text:"Failed",color:"error"},completed:{text:"Completed",color:"success"},pending:{text:"Pending",color:"warning"}}[e],n=r.text,s=r.color;return(0,i.jsx)(D.Z,{color:s,children:n})},T=function(e){var r,n,l,d,x,D=e.Retdatas,T=(0,o.useState)(0),_=T[0],A=T[1],R=(0,o.useState)(5),L=R[0],W=R[1],z=(0,o.useState)({status:null}),E=z[0],H=z[1],U=function(e){var r=null;"all"!==e.target.value&&(r=e.target.value),H(function(e){return(0,t.Z)((0,s.Z)({},e),{status:r})})},q=function(e,r){A(r)},Q=function(e){W(parseInt(e.target.value))},V=D.filter(function(e){var r=!0;return E.status&&e.status!==E.status&&(r=!1),r}),J=V.slice(_*L,_*L+L),X=(0,h.Z)();return(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(j.Z,{action:(0,i.jsx)(m.Z,{width:150,children:(0,i.jsxs)(p.Z,{fullWidth:!0,variant:"outlined",children:[(0,i.jsx)(v.Z,{children:"Status"}),(0,i.jsx)(g.Z,{value:E.status||"all",onChange:U,label:"Status",autoWidth:!0,children:[{id:"all",name:"All"},{id:"completed",name:"Completed"},{id:"pending",name:"Pending"},{id:"failed",name:"Failed"}].map(function(e){return(0,i.jsx)(f.Z,{value:e.id,children:e.name},e.id)})})]})}),title:"Recent Orders"}),(0,i.jsx)(y.Z,{}),(0,i.jsx)(b.Z,{children:(0,i.jsxs)(Z.Z,{children:[(0,i.jsx)(N.Z,{children:(0,i.jsxs)(M.Z,{children:[(0,i.jsx)(B.Z,{children:"Order Details"}),(0,i.jsx)(B.Z,{children:"Order ID"}),(0,i.jsx)(B.Z,{children:"Source"}),(0,i.jsx)(B.Z,{align:"right",children:"Amount"}),(0,i.jsx)(B.Z,{align:"right",children:"Status"}),(0,i.jsx)(B.Z,{align:"right",children:"Actions"})]})}),(0,i.jsx)(k.Z,{children:J.map(function(e){return(0,i.jsxs)(M.Z,{hover:!0,children:[(0,i.jsxs)(B.Z,{children:[(0,i.jsx)(I.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.orderDetails}),(0,i.jsx)(I.Z,{variant:"body2",color:"text.secondary",noWrap:!0,children:(0,a.Z)(e.orderDate,"MMMM dd yyyy")})]}),(0,i.jsx)(B.Z,{children:(0,i.jsx)(I.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.orderID})}),(0,i.jsxs)(B.Z,{children:[(0,i.jsx)(I.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.sourceName}),(0,i.jsx)(I.Z,{variant:"body2",color:"text.secondary",noWrap:!0,children:e.sourceDesc})]}),(0,i.jsxs)(B.Z,{align:"right",children:[(0,i.jsxs)(I.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:[e.amountCrypto,e.cryptoCurrency]}),(0,i.jsx)(I.Z,{variant:"body2",color:"text.secondary",noWrap:!0,children:c()(e.amount).format("".concat(e.currency,"0,0.00"))})]}),(0,i.jsx)(B.Z,{align:"right",children:S(e.status)}),(0,i.jsxs)(B.Z,{align:"right",children:[(0,i.jsx)(C.Z,{title:"Edit Order",arrow:!0,children:(0,i.jsx)(O.Z,{sx:{"&:hover":{background:X.colors.primary.lighter},color:X.palette.primary.main},color:"inherit",size:"small",children:(0,i.jsx)(F.Z,{fontSize:"small"})})}),(0,i.jsx)(C.Z,{title:"Delete Order",arrow:!0,children:(0,i.jsx)(O.Z,{sx:{"&:hover":{background:X.colors.error.lighter},color:X.palette.error.main},color:"inherit",size:"small",children:(0,i.jsx)(P.Z,{fontSize:"small"})})})]})]},e.id)})})]})}),(0,i.jsx)(m.Z,{p:2,children:(0,i.jsx)(w.Z,{component:"div",count:V.length,onPageChange:q,onRowsPerPageChange:Q,page:_,rowsPerPage:L,rowsPerPageOptions:[5,10,25,30]})})]})};T.propTypes={Retdatas:x().array.isRequired},T.defaultProps={Retdatas:[]},r.default=T},99150:function(e,r,n){"use strict";n.r(r);var s=n(85893),t=n(67294);n(91043);var i=n(11163),o=n(41664),a=n.n(o);n(23094),n(25675),n(74323),n(78191);var l=n(87737),c=n.n(l);n(98348);var d=n(11057),x=n(87918),h=n(1451),u=n(86893),j=n(63750),m=n(71236),p=n(2734),v=n(90948);r.default=function(){var e=(0,t.useState)([]),r=e[0],n=e[1],o=(0,t.useState)(!0),l=o[0],g=o[1],f=(0,i.useRouter)();return(0,t.useEffect)(function(){try{if(localStorage.getItem("Token")){g(!0);var e=localStorage.getItem("Token");fetch("/api/V3/Users/myorders",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({JwtToken:e})}).then(function(e){return e.json()}).then(function(e){n(e.ReqData.ordersList),g(!1),console.log(e.ReqData.ordersList)})}else g(!1)}catch(r){console.error(r)}},[f.query]),(0,p.Z)(),(0,v.ZP)(m.Z)(function(e){var r=e.theme;return{"& .MuiBadge-badge":{right:-3,top:13,border:"2px solid ".concat(r.palette.background.paper),padding:"0 4px"}}}),(0,s.jsx)(s.Fragment,{children:!l&&(0,s.jsx)("div",{children:r.map(function(e,r){return(0,s.jsx)("div",{className:c().OrderItemList,children:(0,s.jsxs)("div",{className:c().OrderItemListA,children:[(0,s.jsx)("div",{children:(0,s.jsxs)("span",{style:{fontSize:"8px",fontWeight:600},children:["ORDER ID : ",e._id]})}),(0,s.jsx)("div",{children:(0,s.jsx)("span",{style:{fontWeight:600},children:e.OrderTitle.slice(0,100)+"..."})}),(0,s.jsx)("div",{style:{minHeight:"10px"}}),(0,s.jsx)("div",{children:(0,s.jsxs)("span",{style:{fontSize:"15px",fontWeight:600,color:"#605957"},children:["₹",e.TotalItemAmt," ",(0,s.jsxs)("small",{style:{fontSize:"10px"},children:["+ ",e.Deliveryfee," (Delivery fee)"]})]})}),(0,s.jsx)("div",{children:(0,s.jsxs)("span",{style:{fontSize:"10px",fontWeight:600},children:["Order date : ",e.date,",",e.time]})}),(0,s.jsx)("div",{style:{minHeight:"10px"}}),(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(x.Z,{icon:(0,s.jsx)(h.m6t,{size:20}),label:e.OrderStatusText,variant:"outlined"}),(0,s.jsx)("div",{style:{width:"10px"}}),(0,s.jsx)(x.Z,{icon:(0,s.jsx)(j._4u,{size:20}),label:e.PaymentType,variant:"outlined"})]}),(0,s.jsx)("div",{style:{minHeight:"10px"}}),(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:c().DeliveryTime,children:e.ExpectedDelivery})}),(0,s.jsx)("div",{style:{minHeight:"10px"}}),(0,s.jsxs)("div",{className:c().TrackBtnOrd,children:[3==e.OrderStatus&&(0,s.jsx)(a(),{href:"OrderStatus/".concat(e._id),children:(0,s.jsx)(d.Z,{variant:"outlined",size:"small",fullWidth:!0,startIcon:(0,s.jsx)(u.Rgz,{}),children:"view details"})}),3!==e.OrderStatus&&(0,s.jsx)(a(),{href:"OrderStatus/".concat(e._id),children:(0,s.jsx)(d.Z,{variant:"outlined",size:"small",fullWidth:!0,startIcon:(0,s.jsx)(u.Rgz,{}),children:"Track order"})})]})]})},e._id)})})})}},19575:function(e,r,n){"use strict";n.r(r);var s=n(85893),t=n(67294),i=n(90948),o=n(87357);n(41664);var a=n(1451),l=n(71236),c=n(93946),d=n(25947),x=n(93608),h=n(70750),u=n(6851),j=n(87737),m=n.n(j),p=n(32974),v=n(9008),g=n.n(v),f=n(79377),y=n(11163),b=n(94543),Z=n(99150),N=(0,i.ZP)(o.Z)(function(e){var r=e.theme;return"\n    overflow: auto;\n    background: ".concat(r.palette.common.white,";\n    flex: 1;\n    overflow-x: hidden;\n")}),M=(0,i.ZP)(l.Z)(function(e){var r=e.theme;return{"& .MuiBadge-badge":{right:-3,top:13,border:"2px solid ".concat(r.palette.background.paper),padding:"0 4px"}}});function B(){var e=(0,y.useRouter)(),r=(0,t.useState)(!0),n=r[0],i=r[1],o=(0,t.useContext)(p.Z);return(0,t.useEffect)(function(){!0==o.IsLogin?i(!1):e.push("/Login")}),(0,s.jsxs)(N,{children:[(0,s.jsx)(g(),{children:(0,s.jsx)("title",{children:"My Orders : Toladukan.com"})}),(0,s.jsx)("div",{className:m().OnlyDesktop,children:(0,s.jsx)(f.Z,{})}),(0,s.jsx)("div",{className:m().OnlyMobile,children:(0,s.jsx)(b.Z,{Title:"My Orders"})}),(0,s.jsx)("div",{className:m().ContainerMainBoxFull,children:!n&&(0,s.jsxs)("div",{className:m().container50,children:[(0,s.jsx)("div",{className:m().DesktopHeaderProfile,children:(0,s.jsx)("div",{className:m().OnlyDesktop,children:(0,s.jsx)("div",{className:m().MainTitleBoxCart,children:(0,s.jsxs)("div",{className:m().MainTitleBoxCartA,children:[(0,s.jsx)("div",{className:m().MainTitleBoxCartAIcon,children:(0,s.jsx)(c.Z,{"aria-label":"cart",onClick:function(){return e.back()},children:(0,s.jsx)(M,{color:"secondary",children:(0,s.jsx)(a.sfB,{})})})}),(0,s.jsx)("div",{children:(0,s.jsx)("span",{children:"My Orders"})})]})})})}),(0,s.jsx)("div",{className:m().OrderListBox,children:(0,s.jsx)(Z.default,{})})]})}),(0,s.jsx)("div",{style:{minHeight:"150px"}}),(0,s.jsx)("div",{className:m().OnlyDesktop,children:(0,s.jsx)(d.Z,{})}),(0,s.jsx)(x.Z,{}),(0,s.jsx)("div",{className:m().OnlyMobile,children:(0,s.jsx)(h.Z,{})})]})}r.default=B,B.getLayout=function(e){return(0,s.jsx)(u.Z,{children:e})}},23094:function(e,r,n){"use strict";var s=n(26042),t=n(69396),i=n(99534),o=n(85893),a=n(45697),l=n.n(a),c=(0,n(90948).ZP)("span")(function(e){var r=e.theme;return"\n      background-color: ".concat(r.colors.alpha.black[5],";\n      padding: ").concat(r.spacing(.5,1),";\n      font-size: ").concat(r.typography.pxToRem(13),";\n      border-radius: ").concat(r.general.borderRadius,";\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: ").concat(r.spacing(3),";\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: ").concat(r.colors.primary.lighter,";\n          color: ").concat(r.palette.primary.main,"\n        }\n\n        &-black {\n          background-color: ").concat(r.colors.alpha.black[100],";\n          color: ").concat(r.colors.alpha.white[100],";\n        }\n        \n        &-secondary {\n          background-color: ").concat(r.colors.secondary.lighter,";\n          color: ").concat(r.palette.secondary.main,"\n        }\n        \n        &-success {\n          background-color: ").concat(r.colors.success.lighter,";\n          color: ").concat(r.palette.success.main,"\n        }\n        \n        &-warning {\n          background-color: ").concat(r.colors.warning.lighter,";\n          color: ").concat(r.palette.warning.main,"\n        }\n              \n        &-error {\n          background-color: ").concat(r.colors.error.lighter,";\n          color: ").concat(r.palette.error.main,"\n        }\n        \n        &-info {\n          background-color: ").concat(r.colors.info.lighter,";\n          color: ").concat(r.palette.info.main,"\n        }\n      }\n")}),d=function(e){e.className;var r=e.color,n=e.children,a=(0,i.Z)(e,["className","color","children"]);return(0,o.jsx)(c,(0,t.Z)((0,s.Z)({className:"MuiLabel-"+(void 0===r?"secondary":r)},a),{children:n}))};d.propTypes={children:l().node,className:l().string,color:l().oneOf(["primary","black","secondary","error","warning","success","info"])},r.Z=d},25947:function(e,r,n){"use strict";var s=n(85893);n(67294);var t=n(87737),i=n.n(t),o=n(41664),a=n.n(o),l=n(98348),c=n(63750),d=n(53854),x=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:i().FooterBox,children:[(0,s.jsxs)("div",{className:i().FooterBox_compnay,children:[(0,s.jsx)("div",{className:i().dataspacer,children:" "}),(0,s.jsx)(a(),{href:"/",style:{textDecoration:"none"},children:(0,s.jsx)("div",{className:i().logomain,children:(0,s.jsx)("img",{src:"/tolodukanLogoWeb.svg",alt:"logo",className:i().NavLogo})})}),(0,s.jsxs)("p",{children:[l.lW," ",l.Pj]}),(0,s.jsxs)("div",{className:i().FooterBox_socialIcons,children:[(0,s.jsx)("a",{href:l.U5.Facebook,target:"_blank",rel:"noreferrer",children:(0,s.jsxs)("span",{children:[" ",(0,s.jsx)(c.k1O,{})," "]})}),(0,s.jsx)("a",{href:l.U5.Instagram,target:"_blank",rel:"noreferrer",children:(0,s.jsxs)("span",{children:[" ",(0,s.jsx)(c.Vs6,{})," "]})}),(0,s.jsx)("a",{href:l.U5.Twitter,target:"_blank",rel:"noreferrer",children:(0,s.jsxs)("span",{children:[" ",(0,s.jsx)(c.meP,{})," "]})}),(0,s.jsx)("a",{href:l.U5.Linkedin,target:"_blank",rel:"noreferrer",children:(0,s.jsxs)("span",{children:[" ",(0,s.jsx)(c.NQh,{})," "]})})]})]}),(0,s.jsxs)("div",{className:i().FooterBox_menu,children:[(0,s.jsx)("h3",{children:"Important Links"}),(0,s.jsx)(a(),{href:"/about",style:{textDecoration:"none",color:"white"},children:(0,s.jsx)("li",{children:"About us "})}),(0,s.jsx)(a(),{href:"/contact",style:{textDecoration:"none",color:"white"},children:(0,s.jsx)("li",{children:"Contact us "})}),(0,s.jsx)(a(),{href:"/privacypolicy",style:{textDecoration:"none",color:"white"},children:(0,s.jsx)("li",{children:"Privacy Policy "})}),(0,s.jsx)(a(),{href:"/termsandconditions",style:{textDecoration:"none",color:"white"},children:(0,s.jsx)("li",{children:"Terms & Conditions "})})]}),(0,s.jsxs)("div",{className:i().FooterBox_menu,children:[(0,s.jsx)("h3",{children:"User Links"}),(0,s.jsx)(a(),{href:"/Profile",style:{textDecoration:"none",color:"white"},children:(0,s.jsx)("li",{children:"My Profile "})}),(0,s.jsx)(a(),{href:"/bag",style:{textDecoration:"none",color:"white"},children:(0,s.jsx)("li",{children:"My Bag "})}),(0,s.jsx)(a(),{href:"/myorders",style:{textDecoration:"none",color:"white"},children:(0,s.jsx)("li",{children:"My Orders "})}),(0,s.jsx)(a(),{href:"/myaddress",style:{textDecoration:"none",color:"white"},children:(0,s.jsx)("li",{children:"My Address"})})]}),(0,s.jsxs)("div",{className:i().FooterBox_address,children:[(0,s.jsx)("h3",{children:"Contact us"}),(0,s.jsxs)("div",{className:i().FooterBox_address_item,children:[(0,s.jsx)("span",{children:(0,s.jsx)(d.XAC,{})}),(0,s.jsxs)("small",{children:[" ",l.lC.MainAddress]})]}),(0,s.jsxs)("div",{className:i().FooterBox_address_item,children:[(0,s.jsx)("span",{children:(0,s.jsx)(d.JbR,{})}),(0,s.jsx)("small",{children:l.lC.MainMobile})]}),(0,s.jsxs)("div",{className:i().FooterBox_address_item,children:[(0,s.jsx)("span",{children:(0,s.jsx)(d.Zuw,{})}),(0,s.jsx)("small",{children:l.lC.ContactEmail})]}),(0,s.jsx)("div",{style:{height:"20px"},children:" "}),(0,s.jsx)(a(),{className:i().AppLogoBox,href:"https://play.google.com/store/apps/details?id=com.supermarksapp",style:{textDecoration:"none",color:"white"},children:(0,s.jsx)("div",{className:i().AppLogoBoxB,children:(0,s.jsx)("img",{src:"https://server.supermarks.in/Storage/img/2OUlQplaystore.png",width:"100%"})})})]})]}),(0,s.jsx)("div",{className:i().Bottom_menu,children:(0,s.jsxs)("small",{children:["\xa9 2022 ",l.$V," All Rights Reserved."]})})]})};r.Z=x},70750:function(e,r,n){"use strict";var s=n(85893),t=n(67294);n(25675);var i=n(32974),o=n(87737),a=n.n(o),l=n(1451),c=n(71236),d=n(90948),x=n(93946),h=n(41664),u=n.n(h);n(98348);var j=function(e){var r=(0,t.useContext)(i.Z),n=(0,d.ZP)(c.Z)(function(e){var r=e.theme;return{"& .MuiBadge-badge":{right:-3,top:13,border:"2px solid ".concat(r.palette.background.paper),padding:"0 4px"}}});return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:a().FooterMobileBox,children:(0,s.jsxs)("div",{className:a().FooterMobileMenuBox,children:[(0,s.jsx)(u(),{href:"/",style:{textDecoration:"none"},children:(0,s.jsxs)("div",{className:a().FooterMobileMenuBoxItem,children:[(0,s.jsx)("div",{className:a().FooterMobileMenuBoxItemA,children:(0,s.jsx)(x.Z,{"aria-label":"cart",children:(0,s.jsx)(n,{color:"secondary",children:(0,s.jsx)(l.yw3,{})})})}),(0,s.jsx)("div",{className:a().FooterMobileMenuBoxItemB,children:(0,s.jsx)("span",{children:"Home"})})]})}),(0,s.jsx)(u(),{href:"/Categories",style:{textDecoration:"none"},children:(0,s.jsxs)("div",{className:a().FooterMobileMenuBoxItem,children:[(0,s.jsx)("div",{className:a().FooterMobileMenuBoxItemA,children:(0,s.jsx)(x.Z,{"aria-label":"cart",children:(0,s.jsx)(n,{color:"secondary",children:(0,s.jsx)(l.aox,{})})})}),(0,s.jsx)("div",{className:a().FooterMobileMenuBoxItemB,children:(0,s.jsx)("span",{children:"Category"})})]})}),(0,s.jsx)(u(),{href:"/bag",style:{textDecoration:"none"},children:(0,s.jsxs)("div",{className:a().FooterMobileMenuBoxItem,children:[(0,s.jsx)("div",{className:a().FooterMobileMenuBoxItemA,children:(0,s.jsx)(x.Z,{"aria-label":"cart",children:(0,s.jsx)(n,{badgeContent:r.ItemsinCart,color:"secondary",children:(0,s.jsx)(l.qII,{})})})}),(0,s.jsx)("div",{className:a().FooterMobileMenuBoxItemB,children:(0,s.jsx)("span",{children:"My Bag"})})]})}),(0,s.jsx)(u(),{href:"/Search",style:{textDecoration:"none"},children:(0,s.jsxs)("div",{className:a().FooterMobileMenuBoxItem,children:[(0,s.jsx)("div",{className:a().FooterMobileMenuBoxItemA,children:(0,s.jsx)(x.Z,{"aria-label":"cart",children:(0,s.jsx)(n,{color:"secondary",children:(0,s.jsx)(l.CNP,{})})})}),(0,s.jsx)("div",{className:a().FooterMobileMenuBoxItemB,children:(0,s.jsx)("span",{children:"Search"})})]})}),(0,s.jsx)(u(),{href:"/Offers",style:{textDecoration:"none"},children:(0,s.jsxs)("div",{className:a().FooterMobileMenuBoxItem,children:[(0,s.jsx)("div",{className:a().FooterMobileMenuBoxItemA,children:(0,s.jsx)(x.Z,{"aria-label":"cart",children:(0,s.jsx)(n,{color:"secondary",children:(0,s.jsx)(l.ARm,{})})})}),(0,s.jsx)("div",{className:a().FooterMobileMenuBoxItemB,children:(0,s.jsx)("span",{children:"Offers"})})]})})]})})})};r.Z=j},94543:function(e,r,n){"use strict";n.d(r,{Z:function(){return y}});var s=n(85893),t=n(67294);n(25675);var i=n(32974),o=n(87737),a=n.n(o),l=n(8193),c=n(26042),d=n(90948),x=n(41796),h=n(44347);(0,d.ZP)(function(e){return(0,s.jsx)(h.Z,(0,c.Z)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))})(function(e){var r=e.theme;return{"& .MuiPaper-root":{borderRadius:6,marginTop:r.spacing(1),minWidth:180,color:"light"===r.palette.mode?"rgb(55, 65, 81)":r.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:r.palette.text.secondary,marginRight:r.spacing(1.5)},"&:active":{backgroundColor:(0,x.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity)}}}}});var u=n(1451),j=n(87952),m=n(71236),p=n(93946),v=n(41664),g=n.n(v);n(98348);var f=n(11163),y=function(e){var r=(0,t.useContext)(i.Z),n=(0,f.useRouter)(),o=(0,d.ZP)(m.Z)(function(e){var r=e.theme;return{"& .MuiBadge-badge":{right:-3,top:13,border:"2px solid ".concat(r.palette.background.paper),padding:"0 4px"}}});return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:a().navbarBox,children:(0,s.jsxs)("div",{className:a().Navbar,children:[(0,s.jsxs)("div",{className:a().NavA,children:[(0,s.jsx)("div",{className:a().OnlyMobile,children:(0,s.jsx)("div",{className:a().CartIconBox,children:(0,s.jsx)(p.Z,{"aria-label":"cart",onClick:function(){return n.back()},children:(0,s.jsx)(o,{color:"secondary",children:(0,s.jsx)(u.sfB,{})})})})}),(0,s.jsx)("div",{className:a().HeadingTitleText,children:e.Title})]}),(0,s.jsx)("div",{className:a().NavLeft,children:(0,s.jsxs)("div",{className:a().loginbtnTopBtns,children:[!r.IsLogin&&(0,s.jsx)(g(),{href:"Login",style:{textDecoration:"none"},children:(0,s.jsxs)("div",{className:a().loginbtnTop,children:[(0,s.jsx)("span",{children:(0,s.jsx)(l.SPH,{})}),(0,s.jsx)("small",{children:"Login"})]})}),r.IsLogin&&(0,s.jsx)(g(),{href:"/Profile",children:(0,s.jsxs)("div",{className:a().UserAvaTarBox,children:[(0,s.jsx)("div",{children:(0,s.jsx)(j.Z,{src:"/userdp.png"})}),(0,s.jsx)("div",{className:a().OnlyDesktop,children:(0,s.jsxs)("div",{className:a().UserAvaTarBoxCircleTextBox,children:[(0,s.jsx)("span",{children:r.Data.name}),(0,s.jsxs)("div",{className:a().ViewPbtn,children:[(0,s.jsx)("small",{children:"View Profile"})," ",(0,s.jsx)(u.sFD,{})]})]})})]})})]})})]})})})}},93608:function(e,r,n){"use strict";var s=n(85893),t=n(67294);n(25675);var i=n(32974),o=n(87737),a=n.n(o),l=n(11057),c=n(26307),d=n(41664),x=n.n(d);n(98348);var h=function(e){var r=(0,t.useContext)(i.Z),n=(0,t.useState)(!1),o=n[0],d=n[1];return(0,t.useEffect)(function(){d(!0),setTimeout(function(){d(!1)},3e3)},[r.ItemsinCart]),(0,s.jsx)(s.Fragment,{children:o&&(0,s.jsx)("div",{children:r.ItemsinCart>0&&(0,s.jsx)("div",{className:a().FooterMobileBoxCheckout,children:(0,s.jsxs)("div",{className:a().QuickCheckoutBox,children:[(0,s.jsxs)("div",{className:a().QuickCheckoutBoxA,children:[r.ItemsinCart>1&&(0,s.jsxs)("span",{children:[r.ItemsinCart," Items"]}),1==r.ItemsinCart&&(0,s.jsxs)("span",{children:[r.ItemsinCart," Item"]}),(0,s.jsx)("small",{children:" in your bag"})]}),(0,s.jsx)(x(),{href:"/bag",className:a().QuickCheckoutBoxB,children:(0,s.jsx)(l.Z,{variant:"contained",endIcon:(0,s.jsx)(c.Z,{}),children:"Checkout"})})]})})})})};r.Z=h}},function(e){e.O(0,[9570,296,4617,2013,6556,5201,400,1664,5296,6549,4347,9260,8117,8461,7058,2475,7225,9464,6893,1161,2077,191,7737,8388,9774,2888,179],function(){return e(e.s=23012)}),_N_E=e.O()}]);