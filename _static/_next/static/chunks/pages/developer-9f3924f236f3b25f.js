(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[762],{8263:function(a,b,c){"use strict";c.d(b,{ZP:function(){return w}});var d=c(3366),e=c(7462),f=c(7294),g=c(6010),h=c(5408),i=c(9707),j=c(4780),k=c(948),l=c(1657),m=c(2734);let n=f.createContext();var o=n,p=c(8673),q=c(5893);let r=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function s(a){let b=parseFloat(a);return`${b}${String(a).replace(String(b),"")||"px"}`}let t=(0,k.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver(a,b){let{ownerState:c}=a,{container:d,direction:e,item:f,spacing:g,wrap:h,zeroMinWidth:i,breakpoints:j}=c,k=[];d&&(k=function(a,b,c={}){if(!a||a<=0)return[];if("string"==typeof a&&!Number.isNaN(Number(a))||"number"==typeof a)return[c[`spacing-xs-${String(a)}`]];let d=[];return b.forEach(b=>{let e=a[b];Number(e)>0&&d.push(c[`spacing-${b}-${String(e)}`])}),d}(g,j,b));let l=[];return j.forEach(a=>{let d=c[a];d&&l.push(b[`grid-${a}-${String(d)}`])}),[b.root,d&&b.container,f&&b.item,i&&b.zeroMinWidth,...k,"row"!==e&&b[`direction-xs-${String(e)}`],"wrap"!==h&&b[`wrap-xs-${String(h)}`],...l]}})(({ownerState:a})=>(0,e.Z)({boxSizing:"border-box"},a.container&&{display:"flex",flexWrap:"wrap",width:"100%"},a.item&&{margin:0},a.zeroMinWidth&&{minWidth:0},"wrap"!==a.wrap&&{flexWrap:a.wrap}),function({theme:a,ownerState:b}){let c=(0,h.P$)({values:b.direction,breakpoints:a.breakpoints.values});return(0,h.k9)({theme:a},c,a=>{let b={flexDirection:a};return 0===a.indexOf("column")&&(b[`& > .${p.Z.item}`]={maxWidth:"none"}),b})},function({theme:a,ownerState:b}){let{container:c,rowSpacing:d}=b,e={};if(c&&0!==d){let f=(0,h.P$)({values:d,breakpoints:a.breakpoints.values});e=(0,h.k9)({theme:a},f,b=>{let c=a.spacing(b);return"0px"!==c?{marginTop:`-${s(c)}`,[`& > .${p.Z.item}`]:{paddingTop:s(c)}}:{}})}return e},function({theme:a,ownerState:b}){let{container:c,columnSpacing:d}=b,e={};if(c&&0!==d){let f=(0,h.P$)({values:d,breakpoints:a.breakpoints.values});e=(0,h.k9)({theme:a},f,b=>{let c=a.spacing(b);return"0px"!==c?{width:`calc(100% + ${s(c)})`,marginLeft:`-${s(c)}`,[`& > .${p.Z.item}`]:{paddingLeft:s(c)}}:{}})}return e},function({theme:a,ownerState:b}){let c;return a.breakpoints.keys.reduce((d,f)=>{let g={};if(b[f]&&(c=b[f]),!c)return d;if(!0===c)g={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===c)g={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{let i=(0,h.P$)({values:b.columns,breakpoints:a.breakpoints.values}),j="object"==typeof i?i[f]:i;if(null==j)return d;let k=`${Math.round(c/j*1e8)/1e6}%`,l={};if(b.container&&b.item&&0!==b.columnSpacing){let m=a.spacing(b.columnSpacing);if("0px"!==m){let n=`calc(${k} + ${s(m)})`;l={flexBasis:n,maxWidth:n}}}g=(0,e.Z)({flexBasis:k,flexGrow:0,maxWidth:k},l)}return 0===a.breakpoints.values[f]?Object.assign(d,g):d[a.breakpoints.up(f)]=g,d},{})}),u=a=>{let{classes:b,container:c,direction:d,item:e,spacing:f,wrap:g,zeroMinWidth:h,breakpoints:i}=a,k=[];c&&(k=function(a,b){if(!a||a<=0)return[];if("string"==typeof a&&!Number.isNaN(Number(a))||"number"==typeof a)return[`spacing-xs-${String(a)}`];let c=[];return b.forEach(b=>{let d=a[b];if(Number(d)>0){let e=`spacing-${b}-${String(d)}`;c.push(e)}}),c}(f,i));let l=[];i.forEach(b=>{let c=a[b];c&&l.push(`grid-${b}-${String(c)}`)});let m={root:["root",c&&"container",e&&"item",h&&"zeroMinWidth",...k,"row"!==d&&`direction-xs-${String(d)}`,"wrap"!==g&&`wrap-xs-${String(g)}`,...l]};return(0,j.Z)(m,p.H,b)},v=f.forwardRef(function(a,b){let c=(0,l.Z)({props:a,name:"MuiGrid"}),{breakpoints:h}=(0,m.Z)(),j=(0,i.Z)(c),{className:k,columns:n,columnSpacing:p,component:s="div",container:v=!1,direction:w="row",item:x=!1,rowSpacing:y,spacing:z=0,wrap:A="wrap",zeroMinWidth:B=!1}=j,C=(0,d.Z)(j,r),D=f.useContext(o),E=v?n||12:D,F={},G=(0,e.Z)({},C);h.keys.forEach(a=>{null!=C[a]&&(F[a]=C[a],delete G[a])});let H=(0,e.Z)({},j,{columns:E,container:v,direction:w,item:x,rowSpacing:y||z,columnSpacing:p||z,wrap:A,zeroMinWidth:B,spacing:z},F,{breakpoints:h.keys}),I=u(H);return(0,q.jsx)(o.Provider,{value:E,children:(0,q.jsx)(t,(0,e.Z)({ownerState:H,className:(0,g.Z)(I.root,k),as:s,ref:b},G))})});var w=v},8673:function(a,b,c){"use strict";c.d(b,{H:function(){return f}});var d=c(4867),e=c(1588);function f(a){return(0,d.Z)("MuiGrid",a)}let g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],h=(0,e.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(a=>`spacing-xs-${a}`),...["column-reverse","column","row-reverse","row"].map(a=>`direction-xs-${a}`),...["nowrap","wrap-reverse","wrap"].map(a=>`wrap-xs-${a}`),...g.map(a=>`grid-xs-${a}`),...g.map(a=>`grid-sm-${a}`),...g.map(a=>`grid-md-${a}`),...g.map(a=>`grid-lg-${a}`),...g.map(a=>`grid-xl-${a}`)]);b.Z=h},1591:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/developer",function(){return c(5293)}])},5293:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return i}});var d=c(5893);c(7294),c(1163),c(3193);var e=c(8263),f=c(9008),g=c.n(f),h=function(){return(0,d.jsxs)("div",{children:[(0,d.jsxs)(g(),{children:[(0,d.jsx)("title",{children:"Developer"}),(0,d.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,d.jsx)(e.ZP,{container:!0,justifyContent:"space-around",style:{marginTop:"40px",marginBottom:"40px"},children:(0,d.jsxs)(e.ZP,{item:!0,xs:10,md:8,children:[(0,d.jsxs)("h3",{style:{textAlign:"center",marginBottom:"40px"},children:["This App Was Developed Entirely By ",(0,d.jsx)("b",{style:{fontSize:"1.2em",color:"#1976D2",cursor:"pointer"},onClick:function(){window.open("https://www.linkedin.com/in/amer-sulaiman/")},children:"Amer Sulaiman"})]}),(0,d.jsxs)("pre",{style:{textAlign:"left"},children:[(0,d.jsx)("p",{style:{fontSize:"1.2em",fontWeight:"bold"},children:"The Used Techstack:"}),"\xa0\xa0\xa0\xa0- React.js/Next.js (For the frontend) ",(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0- Redux (State Management) ",(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0- Django (Backend) ",(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0- Django Rest Framework (API) ",(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0- MySQL (Database)",(0,d.jsx)("p",{style:{fontSize:"1.2em",fontWeight:"bold",marginTop:"40px"},children:"What Does this website do?"}),"\xa0\xa0\xa0\xa0If you need to repair your car in Sweden, all you have to do is enter your car's plate number and your location. And our website will gather data from multiple famous car repair companies to find the best option based on station location, price, and available date."]})]})})]})},i=h},9008:function(a,b,c){a.exports=c(5443)}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=1591)}),_N_E=a.O()}])