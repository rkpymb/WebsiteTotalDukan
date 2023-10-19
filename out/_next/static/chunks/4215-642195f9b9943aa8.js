"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4215],{54215:function(e,s,i){i.r(s);var t=i(47568),c=i(828);i(29815);var r=i(97582),d=i(85893),a=i(67294),l=i(11163),n=i(32974),x=i(41664),h=i.n(x),m=i(25675),j=i.n(m),o=i(86893),u=i(87737),v=i.n(u),N=i(98348),g=i(11308),P=i(1451),I=i(2734),p=i(11057),Z=i(93946);s.default=function(){var e=(0,a.useContext)(n.Z),s=(0,a.useState)([]),i=s[0],x=s[1],m=(0,a.useState)("All");m[0],m[1];var u=(0,a.useState)(!0),A=u[0],f=u[1],y=(0,l.useRouter)();(0,a.useEffect)(function(){var e;(e=(0,t.Z)(function(){return(0,r.__generator)(this,function(e){switch(e.label){case 0:return[4,fetch("/api/V3/List/ProductsList",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({dataid:"08c5th4rh86ht57h6g"})}).then(function(e){return e.json()}).then(function(e){x(e.ReqD.PS),f(!1)})];case 1:return e.sent(),[2]}})}),function(){return e.apply(this,arguments)})()},[y.query]),(0,I.Z)();var w=(0,c.Z)(a.useState(null),2);return w[0],w[1],(0,d.jsxs)(d.Fragment,{children:[!A&&(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:v().MainTitleBox,children:[(0,d.jsxs)("div",{className:v().MainTitleBoxA,children:[(0,d.jsx)("div",{className:v().MainTitleBoxAIcon,children:(0,d.jsx)(P.aox,{size:20})}),(0,d.jsx)("div",{className:v().MainTitleBoxAtext,children:"Today's BestSellers"})]}),(0,d.jsx)("div",{className:v().MainTitleBoxB,children:(0,d.jsx)(h(),{href:"/BestSellers",children:(0,d.jsx)(p.Z,{variant:"outlined",endIcon:(0,d.jsx)(o.Tfp,{}),size:"small",children:"see all"})})})]}),(0,d.jsx)("div",{style:{minHeight:"20px"}}),(0,d.jsx)("div",{className:v().ProductGrid,children:i.map(function(s,i){return(0,d.jsxs)("div",{className:v().ProductGridItem,children:[(0,d.jsx)(h(),{href:"/Product/".concat(s.slug),style:{textDecoration:"none"},children:(0,d.jsx)("div",{className:v().ProductItemImage,children:(0,d.jsx)(j(),{src:"".concat(N.CK).concat(N.sH,"/").concat(s.img),alt:"image",layout:"responsive",placeholder:"blur",width:50,height:50,quality:100,blurDataURL:"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg=="})})},i),(0,d.jsx)("div",{className:v().ProductItemTitle,children:(0,d.jsx)("span",{children:s.title.slice(0,35)+"..."})}),(0,d.jsxs)("div",{className:v().ProductItemPrice,children:[(0,d.jsxs)("span",{children:["₹",s.sprice]})," ",(0,d.jsx)("del",{children:s.mprice})]}),(0,d.jsx)("div",{style:{minHeight:"10px"}}),(0,d.jsxs)("div",{className:v().ProductItemFooter,children:[(0,d.jsx)("div",{style:{minHeight:"10px"}}),(0,d.jsx)("div",{className:v().ProductItemFooterA,children:(0,d.jsxs)("span",{children:[s.UnitNumber,"/",s.UnitText]})}),(0,d.jsx)("div",{style:{minHeight:"10px"}}),(0,d.jsxs)("div",{className:v().ProductItemFooterB,children:[s._id in e.cart&&(0,d.jsxs)("div",{className:v().AddcartbtnGroup,children:[(0,d.jsx)(Z.Z,{size:"small",styles:{color:"white"},"aria-label":"Remove from cart",onClick:function(){e.removeFromCart(s._id,1)},children:(0,d.jsx)(P.UOg,{})}),(0,d.jsx)("div",{className:v().AddcartbtnQty,children:(0,d.jsx)("span",{children:e.cart[s._id].qty})}),(0,d.jsx)(Z.Z,{size:"small",styles:{color:"white"},"aria-label":"Add to cart",onClick:function(){e.addtoCart(s._id,1,s.sprice,s.title,s.img,s.UnitNumber,s.UnitText,s.mprice,s)},children:(0,d.jsx)(P.PqE,{})})]}),!(s._id in e.cart)&&(0,d.jsx)("div",{className:v().Addcartbtn,onClick:function(){e.addtoCart(s._id,1,s.sprice,s.title,s.img,s.UnitNumber,s.UnitText,s.mprice,s)},children:(0,d.jsx)("span",{children:"ADD"})})]}),(0,d.jsx)("div",{style:{minHeight:"10px"}})]})]})})})]}),A&&(0,d.jsx)("div",{children:(0,d.jsx)(g.Z,{})})]})}},11308:function(e,s,i){var t=i(85893);i(67294);var c=i(88078),r=i(87737),d=i.n(r),a=function(){return(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:d().ProductGrid,children:[(0,t.jsxs)("div",{className:d().ProductGridItem,children:[(0,t.jsx)("div",{className:d().ProductItemImage,children:(0,t.jsx)(c.Z,{variant:"rectangular",width:"100%",height:118})}),(0,t.jsx)("div",{className:d().ProductItemTitle,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{className:d().ProductItemPrice,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{style:{minHeight:"10px"}}),(0,t.jsx)(c.Z,{width:"60%"})]}),(0,t.jsxs)("div",{className:d().ProductGridItem,children:[(0,t.jsx)("div",{className:d().ProductItemImage,children:(0,t.jsx)(c.Z,{variant:"rectangular",width:"100%",height:118})}),(0,t.jsx)("div",{className:d().ProductItemTitle,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{className:d().ProductItemPrice,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{style:{minHeight:"10px"}}),(0,t.jsx)(c.Z,{width:"60%"})]}),(0,t.jsxs)("div",{className:d().ProductGridItem,children:[(0,t.jsx)("div",{className:d().ProductItemImage,children:(0,t.jsx)(c.Z,{variant:"rectangular",width:"100%",height:118})}),(0,t.jsx)("div",{className:d().ProductItemTitle,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{className:d().ProductItemPrice,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{style:{minHeight:"10px"}}),(0,t.jsx)(c.Z,{width:"60%"})]}),(0,t.jsxs)("div",{className:d().ProductGridItem,children:[(0,t.jsx)("div",{className:d().ProductItemImage,children:(0,t.jsx)(c.Z,{variant:"rectangular",width:"100%",height:118})}),(0,t.jsx)("div",{className:d().ProductItemTitle,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{className:d().ProductItemPrice,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{style:{minHeight:"10px"}}),(0,t.jsx)(c.Z,{width:"60%"})]}),(0,t.jsxs)("div",{className:d().ProductGridItem,children:[(0,t.jsx)("div",{className:d().ProductItemImage,children:(0,t.jsx)(c.Z,{variant:"rectangular",width:"100%",height:118})}),(0,t.jsx)("div",{className:d().ProductItemTitle,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{className:d().ProductItemPrice,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{style:{minHeight:"10px"}}),(0,t.jsx)(c.Z,{width:"60%"})]}),(0,t.jsxs)("div",{className:d().ProductGridItem,children:[(0,t.jsx)("div",{className:d().ProductItemImage,children:(0,t.jsx)(c.Z,{variant:"rectangular",width:"100%",height:118})}),(0,t.jsx)("div",{className:d().ProductItemTitle,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{className:d().ProductItemPrice,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{style:{minHeight:"10px"}}),(0,t.jsx)(c.Z,{width:"60%"})]}),(0,t.jsxs)("div",{className:d().ProductGridItem,children:[(0,t.jsx)("div",{className:d().ProductItemImage,children:(0,t.jsx)(c.Z,{variant:"rectangular",width:"100%",height:118})}),(0,t.jsx)("div",{className:d().ProductItemTitle,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{className:d().ProductItemPrice,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{style:{minHeight:"10px"}}),(0,t.jsx)(c.Z,{width:"60%"})]})]})})};s.Z=a}}]);