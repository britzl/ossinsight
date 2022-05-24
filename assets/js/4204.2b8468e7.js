"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[4204],{46483:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(63366),n=a(87462),o=a(67294),i=a(86010),l=a(39707),p=a(94780),c=a(90948),h=a(71657),s=a(98216),m=a(34867);function g(e){return(0,m.Z)("MuiTypography",e)}(0,a(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var u=a(85893);const d=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t[`align${(0,s.Z)(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var Z=o.forwardRef((function(e,t){const a=(0,h.Z)({props:e,name:"MuiTypography"}),o=(e=>y[e]||e)(a.color),c=(0,l.Z)((0,n.Z)({},a,{color:o})),{align:m="inherit",className:Z,component:w,gutterBottom:N=!1,noWrap:b=!1,paragraph:E=!1,variant:k="body1",variantMapping:B=v}=c,W=(0,r.Z)(c,d),x=(0,n.Z)({},c,{align:m,color:o,className:Z,component:w,gutterBottom:N,noWrap:b,paragraph:E,variant:k,variantMapping:B}),M=w||(E?"p":B[k]||v[k])||"span",S=(e=>{const{align:t,gutterBottom:a,noWrap:r,paragraph:n,variant:o,classes:i}=e,l={root:["root",o,"inherit"!==e.align&&`align${(0,s.Z)(t)}`,a&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,p.Z)(l,g,i)})(x);return(0,u.jsx)(f,(0,n.Z)({as:M,ref:t,ownerState:x,className:(0,i.Z)(S.root,Z)},W))}))},84204:function(e,t,a){a.r(t);var r=a(67294),n=a(93678),o=a(95999),i=a(76775),l=a(98456),p=a(46483);t.default=function(){var e=(0,i.k6)(),t=(0,r.useState)(!1),a=t[0],c=t[1];return(0,r.useEffect)((function(){var t,a,r=window.location,n=r.pathname,o=r.search,i=r.hash;o=null==(t=o)?void 0:t.replace(/^\?/,""),i=null==(a=i)?void 0:a.replace(/^#/,""),/^\/analyze\/[^\/?#]+\/[^\/?#]+\/?$/.test(n)?e.replace({pathname:n,search:o,hash:i}):/^\/analyze\/?$/.test(n)?e.replace({pathname:"/analyze/pingcap/tidb",search:o,hash:i}):c(!0)}),[]),r.createElement(n.Z,{title:a?(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"}):"Loading..."},a?r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))):r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement(p.Z,{variant:"body1",fontSize:24},"Loading... \xa0",r.createElement(l.Z,{display:"inline-block",size:24}))))))}}}]);