(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(914)}])},914:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return G}});var d=c(5893),e=c(682),f=c(1608),g=c(1555),h=c(9669),i=c.n(h),j=c(6968),k=c(2318),l=c(2878),m=c(5005),n=c(7617),o=c(7294),p=c(1163),q=c(1955),r=function(){var a=(0,p.useRouter)(),b=(0,o.useState)(!1);b[0],b[1];var c=(0,o.useState)(!1),e=c[0],f=c[1],h=(0,o.useState)(""),r=h[0],s=h[1],t=(0,o.useState)(!1),u=t[0],v=t[1],w=(0,o.useState)(!1);w[0],w[1];var x=(0,o.useState)(!1),y=x[0],z=x[1],A=(0,o.useState)({}),B=A[0],C=A[1],D=(0,o.useState)(!1),E=D[0],F=D[1],G=(0,o.useState)(""),H=G[0],I=G[1],J=(0,o.useState)(""),K=J[0],L=J[1],M=function(a){a.preventDefault(),f(!0),F(!1),N()&&(v(!0),z(!0),i().get("https://api.besiktningsval.se/api/getCarInfo/"+r+"/").then(function(a){C(a.data.hits.idents),console.log(B),z(!1)}))},N=function(){var a=RegExp("[A-Za-z]{3}\\s?[0-9]{2}[A-Za-z0-9]{1}");return(7===r.length||8===r.length)&&" "===r[r.length-1]&&s(r.slice(0,r.length-1)),a.test(r)&&(6===r.length||7===r.length&&" "===r[3])},O=function(){console.log(H);var a=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(H);return console.log(a),a&&K.length>0},P=function(){q.Z.set("regNum",r),void 0!==q.Z.get("email")?a.push("/SearchForStations"):F(!0)},Q=function(b){b.preventDefault(),i().post("https://api.besiktningsval.se/emailList/addEmail/",JSON.stringify({first_name:K,email:H}),{headers:{"content-type":"text/json"}}),q.Z.set("email",H),a.push("/SearchForStations")};return(0,d.jsxs)("div",{className:"RegNumConfirmation",children:[(0,d.jsxs)(n.Z,{show:u,onHide:function(){v(!1)},children:[B.length>0&&!E&&!y&&(0,d.jsx)(n.Z.Header,{closeButton:!0,children:(0,d.jsx)(n.Z.Title,{children:"\xe4r detta din korrekta bilinformation?"})}),E&&!y&&(0,d.jsx)(n.Z.Header,{closeButton:!0,children:(0,d.jsx)(n.Z.Title,{children:"Prenumerera p\xe5 v\xe5r e-postlista f\xf6r att h\xe5lla dig uppdaterad."})}),(0,d.jsxs)(n.Z.Body,{children:[B.length>0&&!E&&!y&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("p",{className:"card-subtitle mb-4 mt-2 text-muted",children:["registreringsnummer: ",B[0].licence_plate]}),(0,d.jsxs)("p",{className:"card-text",children:["fordonsmodell: ",B[0].full_name]}),(0,d.jsxs)("p",{className:"card-text",children:["N\xe4sta deadline f\xf6r inspektion: ",B[0].inspection_before]}),(0,d.jsxs)("p",{className:"card-text",children:["licenskod: ",B[0].license_code]})]}),!B.length>0&&!E&&!y&&(0,d.jsx)("p",{className:"card-text",children:"Registreringsnumret du har angett finns inte"}),E&&!y&&(0,d.jsxs)(l.Z,{children:[(0,d.jsxs)(l.Z.Group,{as:g.Z,md:"5",controlId:"validationFormik01",children:[(0,d.jsx)(l.Z.Label,{children:"F\xf6rnamn"}),(0,d.jsx)(l.Z.Control,{type:"text",name:"first_name",placeholder:"Skriv in ditt f\xf6rnamn",value:K,onChange:function(a){L(a.target.value)},className:"mb-3"})]}),(0,d.jsxs)(l.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,d.jsx)(l.Z.Label,{children:"E-postadress"}),(0,d.jsx)(l.Z.Control,{type:"email",placeholder:"Skriv in din e-postadress",value:H,onChange:function(a){I(a.target.value)}}),(0,d.jsx)(l.Z.Text,{className:"text-muted",children:"Vi kommer aldrig att dela din e-post med n\xe5gon annan."})]})]}),y&&(0,d.jsx)("div",{className:"text-center",style:{width:"100%"},children:(0,d.jsx)(j.Z,{animation:"grow"})})]}),B.length>0&&!y&&!E&&(0,d.jsxs)(n.Z.Footer,{children:[(0,d.jsx)(m.Z,{variant:"secondary",onClick:function(){v(!1)},children:"Felaktig (g\xe5 tillbaka)"}),(0,d.jsx)(m.Z,{variant:"primary",onClick:function(){P()},children:"R\xe4tt (forts\xe4tt)"})]}),E&&!y&&(0,d.jsxs)(n.Z.Footer,{children:[O()&&(0,d.jsx)(m.Z,{variant:"primary",onClick:function(a){Q(a)},children:"Prenumerera"}),!O()&&(0,d.jsx)(m.Z,{variant:"secondary",onClick:function(){v(!1)},disabled:!0,children:"Prenumerera"}),(0,d.jsx)(m.Z,{variant:"primary",onClick:function(){a.push("/SearchForStations")},children:"Hoppa \xf6ver"})]}),!B.length>0&&!y&&!E&&(0,d.jsx)(n.Z.Footer,{children:(0,d.jsx)(m.Z,{variant:"secondary",onClick:function(){v(!1)},children:"G\xe5 tillbaka"})}),y&&(0,d.jsx)(n.Z.Footer,{children:(0,d.jsx)(m.Z,{variant:"secondary",onClick:function(){v(!1)},children:"Sluta"})})]}),(0,d.jsxs)("form",{onSubmit:M,children:[(0,d.jsxs)(k.Z,{hasValidation:!0,children:[(0,d.jsx)("img",{src:"/eu-flag.jpg",style:{height:"60px",borderRadius:"10px 0 0 10px"}}),(0,d.jsx)(l.Z.Control,{type:"text",size:"lg",placeholder:"ABC123",value:r,onChange:function(a){var b=a.target.value;" "===b[b.length-1]&&(b=b.slice(0,b.length-1)),s(b)},style:{textTransform:"uppercase"},required:!0,isInvalid:!N()&&e}),(0,d.jsx)(l.Z.Control.Feedback,{type:"invalid",children:"Numret du har angett \xe4r ogiltigt"})]}),N()&&(0,d.jsx)(m.Z,{type:"Submit",variant:"primary",style:{margin:"20px auto"},children:"forts\xe4tt"})," ",!N()&&(0,d.jsx)(m.Z,{variant:"secondary",style:{margin:"20px auto"},disabled:!0,children:"forts\xe4tt"})]})]})},s=r,t=c(3056),u=c.n(t),v=c(1987),w=c(7357),x=function(a){return(0,d.jsx)(w.Z,{sx:{margin:"20px auto",width:"80%",marginTop:"20px",marginBottom:"20px"},children:(0,d.jsx)(u(),{next:function(){console.log("next")},previous:function(){console.log("prev")},children:[{review:"Tack! P\xe5 1 minut hittade jag det b\xe4sta besiktningen. Bra hj\xe4lp av kundtj\xe4nst och snabb och smidig best\xe4llning!",author:"Johan"},{review:"Perfekt! S\xf6kte p\xe5 registreringsnummer och satte n\xe4r och var till dagen f\xf6re inflytt. Otroligt smidigt!",author:"Nina"},{review:"besiktningsval.se gav mig en bra j\xe4mf\xf6relse direkt. Jag s\xe5g precis vad det skulle kosta och kunde best\xe4lla snabbare besiktning till ett b\xe4ttre pris!",author:"David"}].map(function(a,b){return(0,d.jsx)(z,{item:a},b)})})})},y=x;function z(a){return(0,d.jsx)(v.Z,{style:{backgroundColor:"#B0E0E6",padding:"25px 20px 10px 20px"},children:(0,d.jsxs)(e.Z,{children:[(0,d.jsx)(f.Z,{children:(0,d.jsxs)("h4",{style:{marginBottom:"25px"},children:['"',a.item.review,'"']})}),(0,d.jsx)(f.Z,{style:{display:"inline-block"},children:(0,d.jsx)(g.Z,{children:(0,d.jsxs)("p",{style:{width:"100px",float:"right"},children:["~ ",a.item.author]})})})]})})}var A=c(2623),B=c(3972),C=function(){return(0,d.jsx)("div",{className:"PartneringCompanies",style:{width:"90%",margin:"20px auto",backgroundColor:"white"},children:(0,d.jsx)(A.Z,{children:(0,d.jsxs)(e.Z,{children:[(0,d.jsx)(f.Z,{style:{paddingTop:"10px"},children:(0,d.jsx)(B.Z,{variant:"button",children:"Vi j\xe4mf\xf6r besiktnings fr\xe5n bland annat"})}),(0,d.jsxs)(f.Z,{children:[(0,d.jsx)(g.Z,{children:(0,d.jsx)("img",{src:"/companiesLogos/Carspect-logo.png",alt:"Carspect logo",height:"100px",width:"100px",style:{}})}),(0,d.jsx)(g.Z,{children:(0,d.jsx)("img",{src:"/companiesLogos/Opus-logo.png",alt:"Opus logo",height:"100px",width:"100px",style:{}})}),(0,d.jsx)(g.Z,{style:{paddingTop:"37px",paddingBottom:"37px"},children:(0,d.jsx)("img",{height:"27px",width:"100px",alt:"Dekra logo",src:"/companiesLogos/Dekra-logo.png",style:{}})})]})]})})})},D=c(9008),E=c.n(D);c(4298);var F=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(E(),{children:[(0,d.jsx)("title",{children:"Att v\xe4lja besiktning, f\xf6rsta steget"}),(0,d.jsx)("meta",{name:"description",content:"V\xe5r hemsida l\xe5ter dig hitta bilbesiktning som passar dig b\xe4st genom att s\xf6ka bland massor av besiktningsleverant\xf6rer n\xe4ra din plats"}),(0,d.jsx)("meta",{name:"google-site-verification",content:"gAkjm1JZ3heBYkzL4E3LSFrjAzmS-_Yp1sqn6Q_SqsU"})]}),(0,d.jsxs)("div",{className:"RegNumSearch",children:[(0,d.jsxs)("div",{className:"bg-image p-5 text-center shadow-1-strong mb-5 text-white",style:{backgroundImage:"url('besiktning-banner.jpg')",backgroundSize:"100% 100%"},children:[(0,d.jsxs)(e.Z,{children:[(0,d.jsx)(f.Z,{style:{marginBottom:"40px"},children:(0,d.jsxs)(g.Z,{lg:8,md:8,xs:12,style:{margin:"0 auto"},children:[(0,d.jsx)("h1",{className:"mb-3 h2",style:{color:"white"},children:"Redo att v\xe4lja besiktning?"}),(0,d.jsx)("h6",{className:"mt-3 h6",style:{color:"white"},children:"Ange din bils registreringsnummer"})]})}),(0,d.jsx)(f.Z,{style:{marginBottom:"40px"},children:(0,d.jsx)(g.Z,{lg:3,md:4,sm:10,xs:12,style:{margin:"0 auto"},children:(0,d.jsx)(s,{})})})]}),(0,d.jsx)("p",{children:"Vi j\xe4mf\xf6r bilbesiktningar fr\xe5n flera leverant\xf6rer f\xf6r att hitta den som passar dig b\xe4st"})]}),(0,d.jsx)(C,{}),(0,d.jsx)(y,{})]})]})},G=F}},function(a){a.O(0,[319,205,958,774,888,179],function(){var b;return a(a.s=5557)}),_N_E=a.O()}])