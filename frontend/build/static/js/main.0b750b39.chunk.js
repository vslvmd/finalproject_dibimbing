(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{102:function(e,t,a){e.exports=a(137)},136:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),l=a(14),i=a(50),s=a(93),u=a(94),p=a(6),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(p.a)({},null===t||void 0===t?void 0:t.data))),Object(p.a)(Object(p.a)({},e),{},{authData:t.data,loading:!1,errors:null});case"LOGOUT":return localStorage.clear(),Object(p.a)(Object(p.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}},d=Object(i.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,posts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case"END_LOADING":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1});case"FETCH_ALL":return Object(p.a)(Object(p.a)({},e),{},{posts:t.payload.data,currentPage:t.payload.currentPage,numberOfPages:t.payload.numberOfPages});case"FETCH_BY_SEARCH":return Object(p.a)(Object(p.a)({},e),{},{posts:t.payload.data});case"FETCH_POST":return Object(p.a)(Object(p.a)({},e),{},{post:t.payload.post});case"LIKE":return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case"CREATE":return Object(p.a)(Object(p.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[t.payload])});case"UPDATE":return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case"DELETE":return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.filter((function(e){return e._id!==t.payload}))});default:return e}},auth:m}),f=a(184),g=a(25),b=a(13),v=a(96),h=a(175),E=a(138),O=a(62),j=a.n(O),y=a(9),x=a.n(y),w=a(21),C=a(78),k=a.n(C).a.create({baseURL:"https://finpro-backend.herokuapp.com/"});k.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var S=function(e){return k.get("/posts/".concat(e))},N=function(e){return k.get("/posts?page=".concat(e))},I=function(e){return k.get("/posts/search?searchQuery=".concat(e.search||"none","&tags=").concat(e.tags))},T=function(e){return k.patch("/posts/".concat(e,"/likePost"))},A=function(e,t){return k.patch("/posts/".concat(e),t)},L=function(e){return k.delete("/posts/".concat(e))},D=function(e){return k.post("/user/signin",e)},_=function(e){return k.post("/user/signup",e)},P=function(e){return function(){var t=Object(w.a)(x.a.mark((function t(a){var n,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,I(e);case 4:n=t.sent,r=n.data.data,a({type:"FETCH_BY_SEARCH",payload:{data:r}}),a({type:"END_LOADING"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},F=function(e,t){return function(){var a=Object(w.a)(x.a.mark((function a(n){var r,c;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:"START_LOADING"}),a.next=4,o=e,k.post("/posts",o);case 4:r=a.sent,c=r.data,n({type:"CREATE",payload:c}),t.push("/posts/".concat(c._id)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0);case 13:case"end":return a.stop()}var o}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()},R=function(e,t){return function(){var a=Object(w.a)(x.a.mark((function a(n){var r,c;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,A(e,t);case 3:r=a.sent,c=r.data,n({type:"UPDATE",payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},B=a(20),H=a(171),W=Object(H.a)((function(e){return{media:{borderRadius:"20px",objectFit:"cover",width:"100%",maxHeight:"600px"},card:Object(B.a)({display:"flex",width:"100%"},e.breakpoints.down("sm"),{flexWrap:"wrap",flexDirection:"column"}),section:{borderRadius:"20px",margin:"10px",flex:1},imageSection:Object(B.a)({marginLeft:"20px"},e.breakpoints.down("sm"),{marginLeft:0}),recommendedPosts:Object(B.a)({display:"flex"},e.breakpoints.down("sm"),{flexDirection:"column"}),loadingPaper:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",borderRadius:"15px",height:"39vh"}}})),G=function(){var e=Object(l.c)((function(e){return e.posts})),t=e.post,a=(e.posts,e.isLoading),c=Object(l.b)(),o=(Object(b.g)(),W()),i=Object(b.i)().id;if(Object(n.useEffect)((function(){c(function(e){return function(){var t=Object(w.a)(x.a.mark((function t(a){var n,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,S(e);case 4:n=t.sent,r=n.data,a({type:"FETCH_POST",payload:{post:r}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(i))}),[i]),Object(n.useEffect)((function(){t&&c(P({search:"none",tags:null===t||void 0===t?void 0:t.tags.join(",")}))}),[t]),!t)return null;return a?r.a.createElement(v.a,{elevation:6,className:o.loadingPaper},r.a.createElement(h.a,{size:"7em"})):r.a.createElement(v.a,{style:{padding:"20px",borderRadius:"15px"},elevation:6},r.a.createElement("div",{className:o.card},r.a.createElement("div",{className:o.section},r.a.createElement(E.a,{variant:"h3",component:"h2"},t.title),r.a.createElement(E.a,{gutterBottom:!0,variant:"h6",color:"textSecondary",component:"h2"},t.tags.map((function(e){return"#".concat(e," ")}))),r.a.createElement(E.a,{gutterBottom:!0,variant:"body1",component:"p"},t.message),r.a.createElement(E.a,{variant:"h6"},"Created by: ",t.name),r.a.createElement(E.a,{variant:"body1"},j()(t.createdAt).fromNow())),r.a.createElement("div",{className:o.imageSection},r.a.createElement("img",{className:o.media,src:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",alt:t.title}))))},U=a(27),z=a(177),J=a(178),M=a(190),K=a(179),Q=a(84),V=a(176),Y=Object(H.a)((function(e){var t;return{appBar:(t={borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},Object(B.a)(t,e.breakpoints.down("sm"),{flexDirection:"column"}),Object(B.a)(t,"backgroundColor",V.a),t),heading:{color:e.palette.primary.main,textDecoration:"none",fontSize:"2em",fontWeight:300},image:{marginLeft:"10px",marginTop:"5px"},toolbar:Object(B.a)({display:"flex",justifyContent:"flex-end",width:"400px"},e.breakpoints.down("sm"),{width:"auto"}),profile:Object(B.a)({display:"flex",justifyContent:"space-between",width:"400px",alignItems:"center"},e.breakpoints.down("sm"),{width:"auto",marginTop:20,justifyContent:"center"}),logout:{marginLeft:"20px"},userName:{display:"flex",alignItems:"center",textAlign:"center"},brandContainer:{display:"flex",alignItems:"center"},palette:{primary:{main:V.a[200]},secondary:{main:"#90A4AE"}}}})),q=a(85),Z=a.n(q),X=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),t=Object(U.a)(e,2),a=t[0],c=t[1],o=Object(l.b)(),i=Object(b.h)(),s=Object(b.g)(),u=Y(),p=function(){o({type:"LOGOUT"}),s.push("/auth"),c(null)};return Object(n.useEffect)((function(){var e=null===a||void 0===a?void 0:a.token;e&&(1e3*Object(Q.a)(e).exp<(new Date).getTime()&&p());c(JSON.parse(localStorage.getItem("profile")))}),[i]),r.a.createElement(z.a,{className:u.appBar,position:"static",color:"default"},r.a.createElement("div",{className:u.brandContainer},r.a.createElement("img",{className:u.image,src:Z.a,alt:"icon",style:{margin:"5px"},height:"60"}),r.a.createElement(E.a,{component:g.b,to:"/",className:u.heading,variant:"h3",align:"center"},"PhotoShareApp")),r.a.createElement(J.a,{className:u.toolbar},(null===a||void 0===a?void 0:a.result)?r.a.createElement("div",{className:u.profile},r.a.createElement(M.a,{className:u.purple,alt:null===a||void 0===a?void 0:a.result.name,src:null===a||void 0===a?void 0:a.result.imageUrl},null===a||void 0===a?void 0:a.result.name.charAt(0)),r.a.createElement(E.a,{className:u.userName,variant:"h6"},null===a||void 0===a?void 0:a.result.name),r.a.createElement(K.a,{variant:"contained",className:u.logout,color:"secondary",onClick:p},"Logout")):r.a.createElement(K.a,{component:g.b,to:"/auth",variant:"contained",style:{align:"right"},color:"primary"},"Sign In")))},$=a(189),ee=a(183),te=a(187),ae=a(180),ne=a(97),re=a(181),ce=a(182),oe=a(86),le=a.n(oe),ie=a(87),se=a.n(ie),ue=a(64),pe=a.n(ue),me=Object(H.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},cardAction:{display:"block",textAlign:"initial"}}),de=function(e){var t,a,n=e.post,c=(e.setCurrentId,Object(l.b)()),o=me(),i=JSON.parse(localStorage.getItem("profile")),s=Object(b.g)(),u=function(){var e;return(null===n||void 0===n||null===(e=n.likes)||void 0===e?void 0:e.length)>0?n.likes.find((function(e){var t,a;return e===((null===i||void 0===i||null===(t=i.result)||void 0===t?void 0:t.googleId)||(null===i||void 0===i||null===(a=i.result)||void 0===a?void 0:a._id))}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,{fontSize:"small"}),"\xa0",n.likes.length>2?"You and ".concat(n.likes.length-1," others"):"".concat(n.likes.length," like").concat(n.likes.length>1?"s":"")):r.a.createElement(r.a.Fragment,null,r.a.createElement(pe.a,{fontSize:"small"}),"\xa0",n.likes.length," ",1===n.likes.length?"Like":"Likes"):r.a.createElement(r.a.Fragment,null,r.a.createElement(pe.a,{fontSize:"small"}),"\xa0Like")};return r.a.createElement(ae.a,{className:o.card,raised:!0,elevation:6},r.a.createElement(ne.a,{component:"span",name:"test",className:o.cardAction,onClick:function(e){s.push("/posts/".concat(n._id))}},r.a.createElement(re.a,{className:o.media,image:n.selectedFile||"https://image.shutterstock.com/image-vector/no-photo-camera-outline-icon-260nw-1081893020.jpg",title:n.title})),r.a.createElement("div",{className:o.details},r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"h2"},n.tags.map((function(e){return"#".concat(e," ")})))),r.a.createElement(E.a,{className:o.title,gutterBottom:!0,variant:"h6",component:"h5"},n.title),r.a.createElement(ce.a,{className:o.cardActions},r.a.createElement(K.a,{size:"small",color:"primary",disabled:!(null===i||void 0===i?void 0:i.result),onClick:function(){return c((e=n._id,function(){var t=Object(w.a)(x.a.mark((function t(a){var n,r,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("profile")),t.prev=1,t.next=4,T(e,null===n||void 0===n||n.token);case 4:r=t.sent,c=r.data,a({type:"LIKE",payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(u,null)),((null===i||void 0===i||null===(t=i.result)||void 0===t?void 0:t.googleId)===(null===n||void 0===n?void 0:n.creator)||(null===i||void 0===i||null===(a=i.result)||void 0===a?void 0:a._id)===(null===n||void 0===n?void 0:n.creator))&&r.a.createElement(K.a,{size:"small",color:"secondary",onClick:function(){return c((e=n._id,function(){var t=Object(w.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L(e);case 3:return t.next=5,t.sent;case 5:a({type:"DELETE",payload:e}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(se.a,{fontSize:"small"})," \xa0 Delete")))},fe=Object(H.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),ge=function(e){var t=e.setCurrentId,a=Object(l.c)((function(e){return e.posts})),n=a.posts,c=a.isLoading,o=fe();return n.length||c?c?r.a.createElement(h.a,null):r.a.createElement(ee.a,{className:o.container,container:!0,alignItems:"stretch",spacing:3},null===n||void 0===n?void 0:n.map((function(e){return r.a.createElement(ee.a,{key:e._id,item:!0,xs:12,sm:12,md:6,lg:3},r.a.createElement(de,{post:e,setCurrentId:t}))}))):"No posts"},be=a(88),ve=a.n(be),he=Object(H.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"95%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Ee=function(e){var t,a=e.currentId,c=e.setCurrentId,o=Object(n.useState)({title:"",tags:"",selectedFile:""}),i=Object(U.a)(o,2),s=i[0],u=i[1],m=Object(l.c)((function(e){return a?e.posts.find((function(e){return e._id===a})):null})),d=Object(l.b)(),g=he(),h=JSON.parse(localStorage.getItem("profile")),O=Object(b.g)(),j=function(){c(0),u({title:"",tags:"",selectedFile:""})};Object(n.useEffect)((function(){(null===m||void 0===m?void 0:m.title)||j(),m&&u(m)}),[m]);var y=function(){var e=Object(w.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===a?(d(F(Object(p.a)(Object(p.a)({},s),{},{name:null===h||void 0===h||null===(n=h.result)||void 0===n?void 0:n.name}),O)),j()):(d(R(a,Object(p.a)(Object(p.a)({},s),{},{name:null===h||void 0===h||null===(r=h.result)||void 0===r?void 0:r.name}))),j());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===h||void 0===h||null===(t=h.result)||void 0===t?void 0:t.name)?r.a.createElement(v.a,{className:g.paper},r.a.createElement(f.a,null,r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(g.root," ").concat(g.form),onSubmit:y,style:{margin:"10px"}},r.a.createElement(E.a,{variant:"h6"},a?'Editing "'.concat(m.title,'"'):"Creating a Memory"),r.a.createElement(te.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return u(Object(p.a)(Object(p.a)({},s),{},{title:e.target.value}))}}),r.a.createElement(te.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:s.tags,onChange:function(e){return u(Object(p.a)(Object(p.a)({},s),{},{tags:e.target.value.split(",")}))}}),r.a.createElement("div",{className:g.fileInput},r.a.createElement(ve.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return u(Object(p.a)(Object(p.a)({},s),{},{selectedFile:t}))}})),r.a.createElement(K.a,{className:g.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(K.a,{variant:"contained",color:"secondary",size:"small",onClick:j,fullWidth:!0},"Clear")))):r.a.createElement(v.a,{className:g.paper,elevation:6},r.a.createElement(E.a,{variant:"h6",align:"center"},"Please Sign In to submit your photo."))},Oe=a(191),je=a(188),ye=Object(H.a)((function(){return{ul:{justifyContent:"space-around"}}})),xe=function(e){var t=e.page,a=Object(l.c)((function(e){return e.posts})).numberOfPages,c=Object(l.b)(),o=ye();return Object(n.useEffect)((function(){t&&c(function(e){return function(){var t=Object(w.a)(x.a.mark((function t(a){var n,r,c,o,l;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,N(e);case 4:n=t.sent,r=n.data,c=r.data,o=r.currentPage,l=r.numberOfPages,a({type:"FETCH_ALL",payload:{data:c,currentPage:o,numberOfPages:l}}),a({type:"END_LOADING"}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[c,t]),r.a.createElement(Oe.a,{classes:{ul:o.ul},count:a,page:Number(t)||1,variant:"outlined",color:"primary",renderItem:function(e){return r.a.createElement(je.a,Object.assign({},e,{component:g.b,to:"/posts?page=".concat(e.page)}))}})},we=Object(H.a)((function(e){return{appBarSearch:{borderRadius:4,marginBottom:"1rem",display:"flex",padding:"16px"},pagination:{borderRadius:4,marginTop:"1rem",padding:"16px"},gridContainer:Object(B.a)({},e.breakpoints.down("xs"),{flexDirection:"column-reverse"})}}));var Ce=function(){var e=we(),t=new URLSearchParams(Object(b.h)().search),a=t.get("page")||1,c=t.get("searchQuery"),o=Object(n.useState)(0),i=Object(U.a)(o,2),s=i[0],u=i[1],p=Object(l.b)(),m=Object(n.useState)(""),d=Object(U.a)(m,2),g=d[0],v=d[1],h=Object(n.useState)([]),E=Object(U.a)(h,2),O=E[0],j=(E[1],Object(b.g)()),y=function(){g.trim()||O?(p(P({search:g,tags:O.join(",")})),j.push("/posts/search?searchQuery=".concat(g||"none","&tags=").concat(O.join(",")))):j.push("/")};return r.a.createElement($.a,{in:!0},r.a.createElement(f.a,{maxWidth:"xl"},r.a.createElement(ee.a,{container:!0,justifyContent:"space-between",alignItems:"stretch",spacing:3,className:e.gridContainer},r.a.createElement(ee.a,{item:!0,xs:12,sm:6,md:9},r.a.createElement(ge,{setCurrentId:u}),!c&&!O.length&&r.a.createElement("div",{className:e.pagination,elevation:6},r.a.createElement(xe,{page:a}))),r.a.createElement(ee.a,{item:!0,xs:12,sm:6,md:3},r.a.createElement(z.a,{className:e.appBarSearch,position:"static",color:"inherit"},r.a.createElement(te.a,{onKeyDown:function(e){13===e.keyCode&&y()},name:"search",variant:"outlined",label:"Search Photos",fullWidth:!0,value:g,onChange:function(e){return v(e.target.value)}}),r.a.createElement(K.a,{onClick:y,className:e.searchButton,variant:"contained",color:"primary"},"Search")),r.a.createElement(Ee,{currentId:s,setCurrentId:u})))))},ke=a(89),Se=a(92),Ne=a.n(Se),Ie=function(){return r.a.createElement("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"}))},Te=Object(H.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),Ae=a(185),Le=a(186),De=a(90),_e=a.n(De),Pe=a(91),Fe=a.n(Pe),Re=function(e){var t=e.name,a=e.handleChange,n=e.label,c=e.half,o=e.autoFocus,l=e.type,i=e.handleShowPassword;return r.a.createElement(ee.a,{item:!0,xs:12,sm:c?6:12},r.a.createElement(te.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:o,type:l,InputProps:"password"===t?{endAdornment:r.a.createElement(Ae.a,{position:"end"},r.a.createElement(Le.a,{onClick:i},"password"===l?r.a.createElement(_e.a,null):r.a.createElement(Fe.a,null)))}:null}))},Be={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},He=function(){var e=Object(n.useState)(Be),t=Object(U.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),i=Object(U.a)(o,2),s=i[0],u=i[1],m=Object(l.b)(),d=Object(b.g)(),g=Te(),h=Object(n.useState)(!1),O=Object(U.a)(h,2),j=O[0],y=O[1],C=function(){var e=Object(w.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=null===t||void 0===t?void 0:t.profileObj,n=null===t||void 0===t?void 0:t.tokenId;try{m({type:"AUTH",data:{result:a,token:n}}),d.push("/")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){return c(Object(p.a)(Object(p.a)({},a),{},Object(B.a)({},e.target.name,e.target.value)))};return r.a.createElement(f.a,{component:"main",className:g.body,maxWidth:"xs"},r.a.createElement(v.a,{className:g.paper,elevation:3},r.a.createElement(M.a,{className:g.avatar},r.a.createElement(Ne.a,null)),r.a.createElement(E.a,{component:"h1",variant:"h5"},s?"Sign up":"Sign in"),r.a.createElement("form",{className:g.form,onSubmit:function(e){var t,n;e.preventDefault(),m(s?(t=a,n=d,function(){var e=Object(w.a)(x.a.mark((function e(a){var r,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(t);case 3:r=e.sent,c=r.data,a({type:"AUTH",data:c}),n.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()):function(e,t){return function(){var a=Object(w.a)(x.a.mark((function a(n){var r,c;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,D(e);case 3:r=a.sent,c=r.data,n({type:"AUTH",data:c}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(a,d))}},r.a.createElement(ee.a,{container:!0,spacing:2},s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Re,{name:"firstName",label:"First Name",handleChange:k,autoFocus:!0,half:!0}),r.a.createElement(Re,{name:"lastName",label:"Last Name",handleChange:k,half:!0})),r.a.createElement(Re,{name:"email",label:"Email Address",handleChange:k,type:"email"}),r.a.createElement(Re,{name:"password",label:"Password",handleChange:k,type:j?"text":"password",handleShowPassword:function(){return y(!j)}}),s&&r.a.createElement(Re,{name:"confirmPassword",label:"Repeat Password",handleChange:k,type:"password"})),r.a.createElement(K.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:g.submit},s?"Sign Up":"Sign In"),r.a.createElement(ke.GoogleLogin,{clientId:"564033717568-e5p23rhvcs4i6kffgsbci1d64r8hp6fn.apps.googleusercontent.com",render:function(e){return r.a.createElement(K.a,{className:g.googleButton,color:"primary",fullWidth:!0,onClick:e.onClick,disabled:e.disabled,startIcon:r.a.createElement(Ie,null),variant:"contained"},"Google Sign In")},onSuccess:C,onFailure:function(){return alert("Google Sign In was unsuccessful. Try again later")},cookiePolicy:"single_host_origin"}),r.a.createElement(ee.a,{container:!0,justify:"flex-end"},r.a.createElement(ee.a,{item:!0},r.a.createElement(K.a,{onClick:function(){c(Be),u((function(e){return!e})),y(!1)}},s?"Already have an account? Sign in":"Don't have an account? Sign Up"))))))},We=function(){var e=JSON.parse(localStorage.getItem("profile"));return r.a.createElement(g.a,null,r.a.createElement(f.a,{maxWidth:"xl"},r.a.createElement(X,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/",exact:!0,component:function(){return r.a.createElement(b.a,{to:"/posts"})}}),r.a.createElement(b.b,{path:"/posts",exact:!0,component:Ce}),r.a.createElement(b.b,{path:"/posts/search",exact:!0,component:Ce}),r.a.createElement(b.b,{path:"/posts/:id",exact:!0,component:G}),r.a.createElement(b.b,{path:"/auth",exact:!0,component:function(){return e?r.a.createElement(b.a,{to:"/posts"}):r.a.createElement(He,null)}}))))},Ge=(a(136),Object(i.d)(d,Object(i.c)(Object(i.a)(s.a))));o.a.render(r.a.createElement(l.a,{store:Ge},r.a.createElement(We,null)),document.getElementById("root"))},85:function(e,t,a){e.exports=a.p+"static/media/logo.8e6f5ee3.png"}},[[102,1,2]]]);
//# sourceMappingURL=main.0b750b39.chunk.js.map