(this["webpackJsonpjoins-meet"]=this["webpackJsonpjoins-meet"]||[]).push([[0],{165:function(e,t,n){},178:function(e,t,n){},184:function(e,t,n){},189:function(e,t,n){},219:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),i=n.n(s),o=(n(165),n(13)),r=n(128),l=n(129),j=n(152),d=n(151),b=n(45),h=n(130),u=(n(178),n(132)),m=n.n(u),O=n(4),p=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={isSignedIn:!1},e.uiConfig={signInFlow:"popup",signInOptions:[b.a.auth.GoogleAuthProvider.PROVIDER_ID,b.a.auth.FacebookAuthProvider.PROVIDER_ID,b.a.auth.GithubAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!1}}},e.componentDidMount=function(){b.a.auth().onAuthStateChanged((function(t){e.setState({isSignedIn:!!t})}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"continueWith",children:this.state.isSignedIn?Object(O.jsx)("span",{}):Object(O.jsxs)("div",{className:"continueWith__content",children:[Object(O.jsx)("p",{className:"continueWith__title",children:"Sign in"}),Object(O.jsx)("p",{className:"continueWith__subtitle",children:"Continue to Joins"}),Object(O.jsx)(h.StyledFirebaseAuth,{uiConfig:this.uiConfig,firebaseAuth:b.a.auth()}),Object(O.jsx)("div",{className:"continueWith__try_text",children:"Try demo"}),Object(O.jsxs)("button",{className:"firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-id-idp-button",style:{backgroundColor:"red"},"data-upgraded":",MaterialButton",onClick:function(){b.a.auth().signInAnonymously().then((function(){})).catch((function(e){e.code,e.message}))},children:[Object(O.jsx)("span",{class:"firebaseui-idp-icon-wrapper",children:Object(O.jsx)(m.a,{style:{color:"white",verticalAlign:"middle"}})}),Object(O.jsx)("span",{class:"firebaseui-idp-text firebaseui-idp-text-long",children:"Sign in with Dummy"}),Object(O.jsx)("span",{class:"firebaseui-idp-text firebaseui-idp-text-short",children:"GitHub"})]})]})})}}]),n}(a.Component),x=p,g=n(280),v=n(300),f=n(296),_=n(288),N=n(298),y=n(295),S=n(301),C=n(293),I=n(283),w=n(285),k=n(286),D=n(287),A=n(289),E=n(290),M=n(291),R=n(292);n(111);b.a.initializeApp({apiKey:"AIzaSyAswSs5I_Ow2zqhEKy1cfpZTLS8sy7PYsA",authDomain:"meeting-3ecfa.firebaseapp.com",projectId:"meeting-3ecfa",storageBucket:"meeting-3ecfa.appspot.com",messagingSenderId:"940410080677",appId:"1:940410080677:web:dad8c866e2b666c92c6c4c",measurementId:"G-7QHJGCKWLK"});var P=b.a.auth(),B=n(22),T=(n(184),Object(g.a)((function(e){return{large:{width:e.spacing(7),height:e.spacing(7)}}})));var G=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)("empty"),i=Object(o.a)(s,2),r=(i[0],i[1]),l=Object(a.useState)(null),j=Object(o.a)(l,2),d=j[0],b=j[1],h=Object(a.useState)(new Date),u=Object(o.a)(h,2),m=u[0],p=u[1],x=Object(a.useState)(""),g=Object(o.a)(x,2),G=g[0],L=g[1],F=T(),W=Object(B.f)(),z=Boolean(d),J=z?"simple-popover":void 0,K=null!==(null===n||void 0===n?void 0:n.displayName)?null===n||void 0===n?void 0:n.displayName.charAt(0).toUpperCase():"S";function V(){for(var e=(null===n||void 0===n?void 0:n.displayName)+"",t=0,a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<5)-t);return"hsl("+t%360+", 50%, 50%)"}return Object(a.useEffect)((function(){return P.onAuthStateChanged((function(e){e?(c(e),r("home")):(c(null),r("login"))})),setInterval((function(){return p(new Date)}),1e3)}),[]),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsxs)("div",{className:"header__logoContainer",children:[Object(O.jsx)("img",{src:"https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png",alt:"google",className:"header__logo"}),Object(O.jsx)("p",{children:"Meet"})]}),Object(O.jsxs)("div",{className:"header__icons",children:[Object(O.jsx)("div",{className:"header__TimeDate",children:Object(O.jsxs)("span",{children:[m.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})," ","\u2022"," ",m.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})]})}),Object(O.jsx)(I.a,{}),Object(O.jsx)(w.a,{}),Object(O.jsx)(k.a,{}),Object(O.jsx)("div",{className:"header__iconDivider"}),Object(O.jsx)(D.a,{}),Object(O.jsx)(v.a,{className:"header__avatar",onClick:function(e){b(e.currentTarget)},style:{backgroundColor:V()},children:K}),Object(O.jsx)(f.a,{open:z,id:J,onClose:function(){b(null)},anchorEl:d,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top"},children:Object(O.jsxs)("div",{className:"home__popoverContainer",children:[Object(O.jsxs)("div",{className:"home__popover__top",children:[Object(O.jsx)(_.a,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:Object(O.jsx)("div",{className:"home__badge",children:Object(O.jsx)(A.a,{className:"home__Camera"})}),children:Object(O.jsx)(v.a,{className:F.large,style:{backgroundColor:V()},children:K})}),Object(O.jsxs)("div",{className:"home__text",children:[Object(O.jsx)("div",{className:"home__displayName",children:null!==(null===n||void 0===n?void 0:n.displayName)?null===n||void 0===n?void 0:n.displayName:"Sample"}),Object(O.jsx)("div",{className:"home__mail",children:null!==(null===n||void 0===n?void 0:n.email)?null===n||void 0===n?void 0:n.email:"sample@joins.com"})]}),Object(O.jsx)("div",{className:"home__btn",children:"Manage your X-oo Account"})]}),Object(O.jsxs)("div",{className:"home__popover__btm",children:[Object(O.jsxs)("div",{className:"home__addBtn",children:[Object(O.jsx)(E.a,{className:"home__addIcon"}),Object(O.jsx)("p",{children:"Add another account"})]}),Object(O.jsx)(N.a,{onClick:function(){return P.signOut()},variant:"outlined",className:"home__signOut",children:"Sign Out"}),Object(O.jsxs)("div",{className:"home__popover__footer",children:[Object(O.jsx)("p",{children:"Privacy policy"}),Object(O.jsx)("span",{children:"\u2022"}),Object(O.jsx)("p",{children:"Terms of service"})]})]})]})})]})]}),Object(O.jsxs)("div",{className:"home",children:[Object(O.jsxs)("div",{className:"home__left",children:[Object(O.jsxs)("div",{className:"home__featureText",children:[Object(O.jsx)("h1",{className:"home__title",children:"Premium video meetings."}),Object(O.jsx)("h1",{className:"home__title",children:"Now free for everyone."}),Object(O.jsx)("p",{className:"home__subtitle",children:"We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all."})]}),Object(O.jsxs)("div",{className:"home__buttons",children:[Object(O.jsxs)(N.a,{color:"primary",variant:"contained",className:"home__createBTN",onClick:function(){var e=Date.now();console.log(e),e=(e=Math.floor(Math.random()*Math.floor(Math.random()*e.toString().slice(-9)))).toString().substring(0,3)+"-"+e.toString().substring(3,6)+"-"+e.toString().substring(6,e.toString().length),console.log(e),L(e)},children:[Object(O.jsx)(M.a,{}),Object(O.jsx)("p",{children:"New meeting"})]}),Object(O.jsx)(y.a,{className:"home__input",variant:"outlined",value:G,onChange:function(e){return L(e.target.value)},placeholder:"Enter a code or link",InputProps:{startAdornment:Object(O.jsx)(S.a,{position:"start",children:Object(O.jsx)(R.a,{className:"icon"})})}}),Object(O.jsx)(N.a,{color:"primary",variant:"outlined",className:"home__joinBTN",disabled:""===G,onClick:function(){""!==G&&W.push("/".concat(G))},children:"Join"})]}),Object(O.jsx)(C.a,{}),Object(O.jsxs)("div",{className:"home__learn",children:[Object(O.jsx)("a",{href:"/",className:"home__learnMore",children:"Learn more"}),Object(O.jsx)("span",{children:" about Google Meet"})]})]}),Object(O.jsx)("div",{className:"home__right",children:Object(O.jsx)("img",{className:"home__image",src:"https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg",alt:"Feature IMG"})})]})]})},L=(n(189),n(150)),F=n.n(L),W=n(297),z=n(141),J=n(34),K=n(105),V=n(142),q=n.n(V),U="new-message-event",H=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(a.useRef)();Object(a.useEffect)((function(){return i.current=q()("https://trishul-meeting-server.herokuapp.com/",{query:{roomId:e}}),i.current.on(U,(function(e){var t=Object(K.a)(Object(K.a)({},e),{},{isOwner:e.senderId===i.current.id});s((function(e){return[].concat(Object(J.a)(e),[t])}))})),function(){i.current.disconnect()}}),[e]);return{messages:c,sendMessage:function(e,t){t?i.current.emit(U,{body:t,type:"file",mimeType:t.type,fileName:t.name,senderId:i.current.id}):i.current.emit(U,{body:e,senderId:i.current.id})}}},Q=(n(219),n(146)),X=n.n(Q),Y=n(294),Z=n(145),$=n.n(Z);var ee=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],s=n[1];return Object(a.useEffect)((function(){var t=new FileReader;t.readAsDataURL(e.blob),t.onloadend=function(){s(t.result)}}),[e.blob]),Object(O.jsx)("img",{className:"image",style:{width:150,height:"auto"},src:c,alt:e.fileName})},te=n(143),ne=n.n(te),ae=n(144),ce=n.n(ae),se=function(e){var t=e.roomId,n=H(t),c=n.messages,s=n.sendMessage,i=Object(a.useState)(""),r=Object(o.a)(i,2),l=r[0],j=r[1],d=Object(a.useState)(),b=Object(o.a)(d,2),h=b[0],u=b[1],m=Object(a.useState)(null),p=Object(o.a)(m,2),x=(p[0],p[1]),g=Object(a.useState)("notDisplayEmoji"),v=Object(o.a)(g,2),f=v[0],_=v[1],N=Object(a.useRef)(),y=function(){""!==l&&(s(l,h),j(""),u(),_("notDisplayEmoji"))};return Object(a.useEffect)((function(){return N.current.scrollIntoView({behavior:"smooth"})})),Object(O.jsx)("div",{className:"chatbox",children:Object(O.jsxs)("div",{className:"chatRoomMain",children:[Object(O.jsxs)("div",{className:"buttons",children:[Object(O.jsx)("button",{id:"head",children:"Group Chat"}),Object(O.jsx)("button",{id:"head",children:"Messages"}),Object(O.jsx)("button",{id:"head",children:"Participants"})]}),Object(O.jsxs)("div",{className:"chat-container",children:[Object(O.jsxs)("div",{className:"msg",children:[Object(O.jsx)("ol",{id:"messages",children:c.map((function(e,t){if("file"===e.type){var n=new Blob([e.body],{type:e.type});return Object(O.jsx)("div",{className:e.isOwner?"my-message":"received-message",children:Object(O.jsx)("div",{className:"msgBody",children:Object(O.jsx)(ee,{fileName:e.fileName,blob:n})})},t)}return Object(O.jsx)("div",{className:e.isOwner?"my-message":"received-message",children:Object(O.jsx)("div",{className:"msgBody",children:Object(O.jsx)(ce.a,{componentDecorator:function(e,t){return Object(O.jsx)(z.SecureLink,{href:e,children:t})},children:e.body})})},t)}))}),Object(O.jsx)("div",{ref:N})]}),Object(O.jsx)("div",{className:f,children:Object(O.jsx)(ne.a,{onEmojiClick:function(e,t){j(l+t.emoji),x(t)}})}),Object(O.jsxs)("div",{id:"form",className:"textField",children:[Object(O.jsxs)("label",{htmlFor:"raised-button-file",children:[Object(O.jsx)("input",{accept:"image/*",onChange:function(e){j(e.target.files[0].name),u(e.target.files[0])},style:{display:"none"},id:"raised-button-file",multiple:!0,type:"file"}),Object(O.jsx)(W.a,{className:"camera","aria-label":"upload picture",component:"span",children:Object(O.jsx)(Y.a,{})})]}),Object(O.jsx)("label",{children:Object(O.jsx)(W.a,{"aria-label":"emoji",component:"span",onClick:function(){"notDisplayEmoji"===f?_("displayEmoji"):"displayEmoji"===f&&_("notDisplayEmoji")},children:Object(O.jsx)($.a,{})})}),Object(O.jsx)("input",{id:"message",placeholder:"Enter message here",value:l,onChange:function(e){j(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&y()}}),Object(O.jsx)("button",{onClick:y,children:Object(O.jsx)(X.a,{})})]})]})]})})},ie=n(147),oe=n.n(ie),re=n(148),le=n.n(re),je=n(149),de=n.n(je);var be=function(e){var t=Object(a.useState)("notDisplayChat"),n=Object(o.a)(t,2),c=n[0],s=n[1];return Object(O.jsxs)("div",{className:"main",children:[Object(O.jsx)("div",{className:"messageIcon",children:Object(O.jsxs)("div",{children:[Object(O.jsx)(W.a,{children:Object(O.jsx)(oe.a,{})}),Object(O.jsx)(W.a,{children:Object(O.jsx)(le.a,{})}),Object(O.jsx)(W.a,{children:Object(O.jsx)(de.a,{})}),Object(O.jsx)(W.a,{onClick:function(){"notDisplayChat"===c?s("displayChat"):"displayChat"===c&&s("notDisplayChat")},"aria-label":"",component:"span",children:Object(O.jsx)(F.a,{})})]})}),Object(O.jsx)("div",{className:"chatRoom",children:Object(O.jsx)("div",{className:c,children:Object(O.jsx)(se,{roomId:e.match.params.roomId})})})]})},he=n(100);var ue=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=(t[0],t[1]),c=Object(a.useState)("empty"),s=Object(o.a)(c,2),i=s[0],r=s[1];return Object(a.useEffect)((function(){P.onAuthStateChanged((function(e){e?(n(e),r("home")):(n(null),r("login"))}))}),[]),Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(he.a,{children:Object(O.jsxs)(B.c,{children:[Object(O.jsx)(B.a,{path:"/Joins-Meeting-App",exact:!0,children:Object(O.jsxs)("div",{children:["empty"===i&&Object(O.jsx)("p",{children:"Loading...."}),"home"===i&&Object(O.jsx)(G,{}),"login"===i&&Object(O.jsx)(x,{})]})}),Object(O.jsx)(B.a,{exact:!0,path:"/:roomId",component:be})]})})})};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(ue,{})}),document.getElementById("root"))}},[[233,1,2]]]);
//# sourceMappingURL=main.df7bcaa1.chunk.js.map