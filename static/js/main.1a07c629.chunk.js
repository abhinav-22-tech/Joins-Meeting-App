(this["webpackJsonpx-meet"]=this["webpackJsonpx-meet"]||[]).push([[0],{118:function(e,t,c){},131:function(e,t,c){},133:function(e,t,c){},171:function(e,t,c){},176:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(16),i=c.n(s),o=(c(118),c(26)),r=c(96),l=c(97),j=c(108),d=c(106),h=c(27),u=c(98),b=(c(131),c.p+"static/media/X-oo.90f7da0a.svg"),m=c(4),O=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isSignedIn:!1},e.uiConfig={signInFlow:"popup",signInOptions:[h.a.auth.GoogleAuthProvider.PROVIDER_ID,h.a.auth.FacebookAuthProvider.PROVIDER_ID,h.a.auth.GithubAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!1}}},e.componentDidMount=function(){h.a.auth().onAuthStateChanged((function(t){e.setState({isSignedIn:!!t}),console.log("user",t)}))},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"continueWith",children:this.state.isSignedIn?Object(m.jsx)("span",{}):Object(m.jsxs)("div",{className:"continueWith__content",children:[Object(m.jsx)("img",{src:b,alt:"X-oo",className:"continueWith__logo"}),Object(m.jsx)("p",{className:"continueWith__title",children:"Sign in"}),Object(m.jsx)("p",{className:"continueWith__subtitle",children:"Continue to X-meet"}),Object(m.jsx)(u.StyledFirebaseAuth,{uiConfig:this.uiConfig,firebaseAuth:h.a.auth()})]})})}}]),c}(n.Component),_=O,p=c(208),g=c(225),x=c(223),v=c(216),f=c(224),N=c(222),y=c(226),S=c(221),I=c(211),w=c(213),C=c(214),A=c(215),k=c(217),D=c(218),E=c(219),M=c(220);c(82);h.a.initializeApp({apiKey:"AIzaSyAswSs5I_Ow2zqhEKy1cfpZTLS8sy7PYsA",authDomain:"meeting-3ecfa.firebaseapp.com",projectId:"meeting-3ecfa",storageBucket:"meeting-3ecfa.appspot.com",messagingSenderId:"940410080677",appId:"1:940410080677:web:dad8c866e2b666c92c6c4c",measurementId:"G-7QHJGCKWLK"});var T=h.a.auth(),P=c(67),R=(c(133),Object(p.a)((function(e){return{large:{width:e.spacing(7),height:e.spacing(7)}}})));var G=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("empty"),i=Object(o.a)(s,2),r=(i[0],i[1]),l=Object(n.useState)(null),j=Object(o.a)(l,2),d=j[0],h=j[1],u=Object(n.useState)(new Date),b=Object(o.a)(u,2),O=b[0],_=b[1],p=R(),G=Boolean(d),W=G?"simple-popover":void 0,z=null!==(null===c||void 0===c?void 0:c.displayName)?null===c||void 0===c?void 0:c.displayName.charAt(0).toUpperCase():" ";function B(){for(var e=(null===c||void 0===c?void 0:c.displayName)+"",t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return"hsl("+t%360+", 50%, 50%)"}return Object(n.useEffect)((function(){return T.onAuthStateChanged((function(e){e?(a(e),r("home")):(a(null),r("login"))})),setInterval((function(){return _(new Date)}),1e3)}),[]),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsxs)("div",{className:"header__logoContainer",children:[Object(m.jsx)("img",{src:"https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png",alt:"google",className:"header__logo"}),Object(m.jsx)("p",{children:"Meet"})]}),Object(m.jsxs)("div",{className:"header__icons",children:[Object(m.jsx)("div",{className:"header__TimeDate",children:Object(m.jsxs)("span",{children:[O.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})," ","\u2022"," ",O.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})]})}),Object(m.jsx)(I.a,{}),Object(m.jsx)(w.a,{}),Object(m.jsx)(C.a,{}),Object(m.jsx)("div",{className:"header__iconDivider"}),Object(m.jsx)(A.a,{}),Object(m.jsx)(g.a,{className:"header__avatar",onClick:function(e){h(e.currentTarget)},style:{backgroundColor:B()},children:z}),Object(m.jsx)(x.a,{open:G,id:W,onClose:function(){h(null)},anchorEl:d,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top"},children:Object(m.jsxs)("div",{className:"home__popoverContainer",children:[Object(m.jsxs)("div",{className:"home__popover__top",children:[Object(m.jsx)(v.a,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:Object(m.jsx)("div",{className:"home__badge",children:Object(m.jsx)(k.a,{className:"home__Camera"})}),children:Object(m.jsx)(g.a,{className:p.large,style:{backgroundColor:B()},children:z})}),Object(m.jsxs)("div",{className:"home__text",children:[Object(m.jsx)("div",{className:"home__displayName",children:null===c||void 0===c?void 0:c.displayName}),Object(m.jsx)("div",{className:"home__mail",children:null===c||void 0===c?void 0:c.email})]}),Object(m.jsx)("div",{className:"home__btn",children:"Manage your X-oo Account"})]}),Object(m.jsxs)("div",{className:"home__popover__btm",children:[Object(m.jsxs)("div",{className:"home__addBtn",children:[Object(m.jsx)(D.a,{className:"home__addIcon"}),Object(m.jsx)("p",{children:"Add another account"})]}),Object(m.jsx)(f.a,{onClick:function(){return T.signOut()},variant:"outlined",className:"home__signOut",children:"Sign Out"}),Object(m.jsxs)("div",{className:"home__popover__footer",children:[Object(m.jsx)("p",{children:"Privacy policy"}),Object(m.jsx)("span",{children:"\u2022"}),Object(m.jsx)("p",{children:"Terms of service"})]})]})]})})]})]}),Object(m.jsxs)("div",{className:"home",children:[Object(m.jsxs)("div",{className:"home__left",children:[Object(m.jsxs)("div",{className:"home__featureText",children:[Object(m.jsx)("h1",{className:"home__title",children:"Premium video meetings."}),Object(m.jsx)("h1",{className:"home__title",children:"Now free for everyone."}),Object(m.jsx)("p",{className:"home__subtitle",children:"We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all."})]}),Object(m.jsxs)("div",{className:"home__buttons",children:[Object(m.jsxs)(f.a,{color:"primary",variant:"contained",className:"home__createBTN",children:[Object(m.jsx)(E.a,{}),Object(m.jsx)("p",{children:"New meeting"})]}),Object(m.jsx)(N.a,{className:"home__input",variant:"outlined",placeholder:"Enter a code or link",InputProps:{startAdornment:Object(m.jsx)(y.a,{position:"start",children:Object(m.jsx)(M.a,{className:"icon"})})}}),Object(m.jsx)(P.b,{to:"/Trishul-Meeting-App/ChatRoom",children:Object(m.jsx)(f.a,{className:"home__joinBTN",children:"Join"})})]}),Object(m.jsx)(S.a,{}),Object(m.jsxs)("div",{className:"home__learn",children:[Object(m.jsx)("a",{href:"/",className:"home__learnMore",children:"Learn more"}),Object(m.jsx)("span",{children:" about Google Meet"})]})]}),Object(m.jsx)("div",{className:"home__right",children:Object(m.jsx)("img",{className:"home__image",src:"https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg",alt:"Feature IMG"})})]})]})},W=c(107),z=c(75),B=c(105),L=c.n(B),K="new-message-event",F=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useRef)();Object(n.useEffect)((function(){return s.current=L()("https://trishul-meeting-server.herokuapp.com/"),s.current.on(K,(function(e){var t=Object(z.a)(Object(z.a)({},e),{},{isOwner:e.senderId===s.current.id});a((function(e){return[].concat(Object(W.a)(e),[t])}))})),function(){s.current.disconnect()}}),[]);return{messages:c,sendMessage:function(e){s.current.emit(K,{body:e,senderId:s.current.id})}}},J=(c(171),function(){var e=F(),t=e.messages,c=e.sendMessage,a=Object(n.useState)(""),s=Object(o.a)(a,2),i=s[0],r=s[1],l=Object(n.useRef)();return Object(n.useEffect)((function(){return l.current.scrollIntoView({behavior:"smooth"})})),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("ol",{id:"messages",children:t.map((function(e,t){return Object(m.jsx)("li",{children:Object(m.jsx)("span",{children:e.body})},t)}))}),Object(m.jsx)("div",{ref:l})]}),Object(m.jsxs)("div",{id:"form",children:[Object(m.jsx)("input",{id:"message",placeholder:"Enter message here",value:i,onChange:function(e){r(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&""!==i&&(c(i),r(""))}}),Object(m.jsx)("button",{onClick:function(){""!==i&&(c(i),r(""))},children:"Send"})]})]})}),V=c(18);c(172),c(173),c(174),c(175),h.a.firestore(),h.a.analytics();var X=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=(t[0],t[1]),a=Object(n.useState)("empty"),s=Object(o.a)(a,2),i=s[0],r=s[1];return Object(n.useEffect)((function(){T.onAuthStateChanged((function(e){e?(c(e),r("home")):(c(null),r("login"))}))}),[]),Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(P.a,{children:Object(m.jsxs)(V.c,{children:[Object(m.jsx)(V.a,{path:"/Trishul-Meeting-App",exact:!0,children:Object(m.jsxs)("div",{children:["empty"===i&&Object(m.jsx)("p",{children:"Loading...."}),"home"===i&&Object(m.jsx)(G,{}),"login"===i&&Object(m.jsx)(_,{})]})}),Object(m.jsx)(V.a,{path:"/Trishul-Meeting-App/ChatRoom",children:Object(m.jsx)(J,{})})]})})})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(X,{})}),document.getElementById("root"))}},[[176,1,2]]]);
//# sourceMappingURL=main.1a07c629.chunk.js.map