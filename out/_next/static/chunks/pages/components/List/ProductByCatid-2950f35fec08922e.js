(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6249],{37397:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/List/ProductByCatid",function(){return s(86790)}])},86790:function(e,i,s){"use strict";s.r(i);var t=s(47568),c=s(828),r=s(29815),n=s(97582),d=s(85893),a=s(67294),l=s(11163),o=s(41664),x=s.n(o),h=s(25675),m=s.n(h),u=s(32974),j=s(87737),v=s.n(j),N=s(98348),P=s(1451),g=s(44347),p=s(18972),I=s(11308),Z=s(16628),f=s(2734),A=s(11057),w=s(93946);i.default=function(e){var i=(0,a.useContext)(u.Z),s=(0,a.useState)([]),o=s[0],h=s[1],j=(0,a.useState)(!0),y=j[0],T=j[1],b=(0,a.useState)("All"),_=b[0],C=b[1];(0,l.useRouter)(),(0,a.useEffect)(function(){var i;(i=(0,t.Z)(function(){var i;return(0,n.__generator)(this,function(i){switch(i.label){case 0:return[4,fetch("/api/V3/List/Productsbycatid",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({catid:e.catid})}).then(function(e){return e.json()}).then(function(e){console.log(e.ReqD),h(e.ReqD.PS),T(!1)})];case 1:return i.sent(),[2]}})}),function(){return i.apply(this,arguments)})()},[]);var H=function(){var e=(0,r.Z)(o).sort(function(e,i){return e.mprice-i.mprice});h(e),G(null),C("Low to High Price")},k=function(){var e=(0,r.Z)(o).sort(function(e,i){return i.mprice-e.mprice});h(e),G(null),C("High to Low Price")},B=(0,c.Z)(a.useState(null),2),E=B[0],G=B[1],U=Boolean(E),S=function(e){G(e.currentTarget)},D=function(){G(null)};return(0,f.Z)(),(0,d.jsxs)(d.Fragment,{children:[!y&&(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:v().MainTitleBox,children:[(0,d.jsxs)("div",{className:v().MainTitleBoxA,children:[(0,d.jsx)("div",{className:v().MainTitleBoxAIcon,children:(0,d.jsx)(P.aox,{size:20})}),(0,d.jsx)("div",{className:v().MainTitleBoxAtext,children:e.catid})]}),(0,d.jsxs)("div",{className:v().MainTitleBoxB,children:[(0,d.jsx)("div",{className:v().OnlyDesktop,children:(0,d.jsx)("div",{style:{margin:10},children:(0,d.jsx)("span",{children:_})})}),(0,d.jsx)(A.Z,{variant:"contained",endIcon:(0,d.jsx)(P.KNx,{}),id:"fade-button","aria-controls":U?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":U?"true":void 0,onClick:S,children:"Filter"}),(0,d.jsxs)(g.Z,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:E,open:U,onClose:D,TransitionComponent:Z.Z,children:[(0,d.jsx)(p.Z,{onClick:H,children:(0,d.jsx)("small",{children:"Low to High Price"})}),(0,d.jsx)(p.Z,{onClick:k,children:(0,d.jsx)("small",{children:"High to Low Price"})})]})]})]}),(0,d.jsx)("div",{style:{minHeight:"20px"}}),(0,d.jsx)("div",{className:v().ProductGrid,children:o.map(function(e,s){return(0,d.jsxs)("div",{className:v().ProductGridItem,children:[(0,d.jsx)(x(),{href:"/Product/".concat(e.slug),style:{textDecoration:"none"},children:(0,d.jsx)("div",{className:v().ProductItemImage,children:(0,d.jsx)(m(),{src:"".concat(N.CK).concat(N.sH,"/").concat(e.img),alt:"image",layout:"responsive",placeholder:"blur",width:50,height:50,quality:100,blurDataURL:"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg=="})})},e.id),(0,d.jsx)("div",{className:v().ProductItemTitle,children:(0,d.jsx)("span",{children:e.title.slice(0,35)+"..."})}),(0,d.jsxs)("div",{className:v().ProductItemPrice,children:[(0,d.jsxs)("span",{children:["₹",e.sprice]})," ",(0,d.jsx)("del",{children:e.mprice})]}),(0,d.jsx)("div",{style:{minHeight:"10px"}}),(0,d.jsxs)("div",{className:v().ProductItemFooter,children:[(0,d.jsx)("div",{style:{minHeight:"10px"}}),(0,d.jsx)("div",{className:v().ProductItemFooterA,children:(0,d.jsxs)("span",{children:[e.UnitNumber,"/",e.UnitText]})}),(0,d.jsx)("div",{style:{minHeight:"10px"}}),(0,d.jsxs)("div",{className:v().ProductItemFooterB,children:[e._id in i.cart&&(0,d.jsxs)("div",{className:v().AddcartbtnGroup,children:[(0,d.jsx)(w.Z,{size:"small",styles:{color:"white"},"aria-label":"Remove from cart",onClick:function(){i.removeFromCart(e._id,1)},children:(0,d.jsx)(P.UOg,{})}),(0,d.jsx)("div",{className:v().AddcartbtnQty,children:(0,d.jsx)("span",{children:i.cart[e._id].qty})}),(0,d.jsx)(w.Z,{size:"small",styles:{color:"white"},"aria-label":"Add to cart",onClick:function(){i.addtoCart(e._id,1,e.sprice,e.title,e.img,e.UnitNumber,e.UnitText,e.mprice,e)},children:(0,d.jsx)(P.PqE,{})})]}),!(e._id in i.cart)&&(0,d.jsx)("div",{className:v().Addcartbtn,onClick:function(){i.addtoCart(e._id,1,e.sprice,e.title,e.img,e.UnitNumber,e.UnitText,e.mprice,e)},children:(0,d.jsx)("span",{children:"ADD"})})]}),(0,d.jsx)("div",{style:{minHeight:"10px"}})]})]})})})]}),y&&(0,d.jsx)("div",{children:(0,d.jsx)(I.Z,{})})]})}},11308:function(e,i,s){"use strict";var t=s(85893);s(67294);var c=s(88078),r=s(87737),n=s.n(r),d=function(){return(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:n().ProductGrid,children:[(0,t.jsxs)("div",{className:n().ProductGridItem,children:[(0,t.jsx)("div",{className:n().ProductItemImage,children:(0,t.jsx)(c.Z,{variant:"rectangular",width:"100%",height:118})}),(0,t.jsx)("div",{className:n().ProductItemTitle,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{className:n().ProductItemPrice,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{style:{minHeight:"10px"}}),(0,t.jsx)(c.Z,{width:"60%"})]}),(0,t.jsxs)("div",{className:n().ProductGridItem,children:[(0,t.jsx)("div",{className:n().ProductItemImage,children:(0,t.jsx)(c.Z,{variant:"rectangular",width:"100%",height:118})}),(0,t.jsx)("div",{className:n().ProductItemTitle,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{className:n().ProductItemPrice,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{style:{minHeight:"10px"}}),(0,t.jsx)(c.Z,{width:"60%"})]}),(0,t.jsxs)("div",{className:n().ProductGridItem,children:[(0,t.jsx)("div",{className:n().ProductItemImage,children:(0,t.jsx)(c.Z,{variant:"rectangular",width:"100%",height:118})}),(0,t.jsx)("div",{className:n().ProductItemTitle,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{className:n().ProductItemPrice,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{style:{minHeight:"10px"}}),(0,t.jsx)(c.Z,{width:"60%"})]}),(0,t.jsxs)("div",{className:n().ProductGridItem,children:[(0,t.jsx)("div",{className:n().ProductItemImage,children:(0,t.jsx)(c.Z,{variant:"rectangular",width:"100%",height:118})}),(0,t.jsx)("div",{className:n().ProductItemTitle,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{className:n().ProductItemPrice,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{style:{minHeight:"10px"}}),(0,t.jsx)(c.Z,{width:"60%"})]}),(0,t.jsxs)("div",{className:n().ProductGridItem,children:[(0,t.jsx)("div",{className:n().ProductItemImage,children:(0,t.jsx)(c.Z,{variant:"rectangular",width:"100%",height:118})}),(0,t.jsx)("div",{className:n().ProductItemTitle,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{className:n().ProductItemPrice,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{style:{minHeight:"10px"}}),(0,t.jsx)(c.Z,{width:"60%"})]}),(0,t.jsxs)("div",{className:n().ProductGridItem,children:[(0,t.jsx)("div",{className:n().ProductItemImage,children:(0,t.jsx)(c.Z,{variant:"rectangular",width:"100%",height:118})}),(0,t.jsx)("div",{className:n().ProductItemTitle,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{className:n().ProductItemPrice,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{style:{minHeight:"10px"}}),(0,t.jsx)(c.Z,{width:"60%"})]}),(0,t.jsxs)("div",{className:n().ProductGridItem,children:[(0,t.jsx)("div",{className:n().ProductItemImage,children:(0,t.jsx)(c.Z,{variant:"rectangular",width:"100%",height:118})}),(0,t.jsx)("div",{className:n().ProductItemTitle,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{className:n().ProductItemPrice,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)("div",{style:{minHeight:"10px"}}),(0,t.jsx)(c.Z,{width:"60%"})]})]})})};i.Z=d}},function(e){e.O(0,[9570,5201,400,1664,5296,6549,4347,9260,6412,5322,7737,9774,2888,179],function(){return e(e.s=37397)}),_N_E=e.O()}]);