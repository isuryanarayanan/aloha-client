var L=Object.defineProperty;var I=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var C=(s,a,o)=>a in s?L(s,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[a]=o,T=(s,a)=>{for(var o in a||(a={}))H.call(a,o)&&C(s,o,a[o]);if(I)for(var o of I(a))M.call(a,o)&&C(s,o,a[o]);return s};import{m as O,r as v,o as l,c as d,a as e,F as b,b as g,d as A,t as h,e as _,w as E,p as f,f as y,g as u,h as S,i as x,v as k,j as V,k as G,l as F,V as q,n as P,q as D,s as U}from"./vendor.4b88ec5d.js";const j=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}};j();var z="/assets/aloha-logo-little-1.02ae4108.png";var m=(s,a)=>{const o=s.__vccOpts||s;for(const[r,t]of a)o[r]=t;return o};const B={name:"Home",computed:T({},O({events:"getEvents"})),data(){return{}},methods:{copyLink:function(s){navigator.clipboard.writeText("https://aloha.herokuapp.com/register/"+s),alert("Link Copied to ClipBoard")}},mounted(){this.$store.dispatch("GET_EVENTS")}},N=s=>(f("data-v-0133ec56"),s=s(),y(),s),J={class:"row m-0"},X=A('<div class="col-sm-12 text-center bg-dark" data-v-0133ec56><div class="brand text-light py-3" data-v-0133ec56><h4 data-v-0133ec56>DEPARTMENT OF</h4><h1 data-v-0133ec56>COMPUTER SCIENCE AND ENGG.</h1><h4 data-v-0133ec56>PRESENTS</h4></div><img class="image-banner" src="'+z+'" data-v-0133ec56></div><div class="col-sm-12 card bg-transparent border-0 about text-center" data-v-0133ec56><div class="" data-v-0133ec56><figure class="bg-dark p-3 py-5 rounded text-light" style="border-right:0.5rem solid #a34e78;border-left:0.5rem solid #a34e78;" data-v-0133ec56><blockquote class="blockquote about-brand pb-2" data-v-0133ec56><p class="brand-2 brand-small" data-v-0133ec56> Aloha, a frosty, congenial fiesta organized by the CSE Department of Adi Shankara Institute of Engineering and Technology, Kalady is the much awaited one-day extravaganza of the year and is all set to commence on 23rd December, 2021. It is a concoction of art, fun and learning that invokes this Christmas time with much vibe and efficacy. This post Covid&#39;19 event is a symbol of great expectation, excitement and endowment for each computer science student bringing them all under a single screen and enjoying the celebration together. Filled with a set of top-notch technical and non-technical events, games and competitions that arouse your competency and a multitude of surprises, Aloha marks the year-end with much desired contentment and fondness. Aloha sets a platform for the students to network and know their peers and seniors, thus, creating a bewitching bonds between them. </p></blockquote><figcaption class="blockquote-footer mb-0 font-italic" data-v-0133ec56> Team </figcaption></figure></div></div><div class="col-sm-12 card bg-transparent border-0 p-0" data-v-0133ec56><h1 class="brand p-5" data-v-0133ec56>Events</h1></div>',3),K={class:"col-sm-12 row m-auto"},W={class:"p-2 text-center"},Q={class:"brand"},Y=N(()=>e("hr",null,null,-1)),Z={class:"brand-2 brand-small text-center"},ee=["innerHTML"],te=N(()=>e("br",null,null,-1)),se=N(()=>e("br",null,null,-1)),ae={class:"btn brand-2 btn-primary register-btn"},ne=u("Register here"),oe=A('<footer class="w-100 contact-footer flex-shrink-0" data-v-0133ec56><div class="row text-center pb-5" data-v-0133ec56><div class="col-sm-4" data-v-0133ec56></div><div class="col-sm-4 row text-center" data-v-0133ec56><div class="rounded-link col-4 m-auto" data-v-0133ec56><a href="https://www.instagram.com/cseasiet" data-v-0133ec56><i class="fa fa-instagram" aria-hidden="true" data-v-0133ec56></i></a></div><div class="rounded-link col-4 m-auto" data-v-0133ec56><a href="https://www.linkedin.com/company/department-of-cse-asiet" data-v-0133ec56><i class="fa fa-linkedin" aria-hidden="true" data-v-0133ec56></i></a></div><div class="rounded-link col-4 m-auto" data-v-0133ec56><a href="https://www.facebook.com/CSEASIET" data-v-0133ec56><i class="fa fa-facebook" aria-hidden="true" data-v-0133ec56></i></a></div></div><div class="col-sm-4" data-v-0133ec56></div></div><div class="row text-center pt-5" data-v-0133ec56><div class="col-sm-4" data-v-0133ec56><h5 class="h1 brand text-dark" data-v-0133ec56>Sidharth</h5><p class="small text-muted" data-v-0133ec56> K Sidharth <br data-v-0133ec56> +91 89211 46719 </p><p class="small text-muted mb-0" data-v-0133ec56>@ Event Organizer</p><hr data-v-0133ec56></div><div class="col-sm-4" data-v-0133ec56><h5 class="h1 brand text-dark" data-v-0133ec56>Fayis</h5><p class="small text-muted" data-v-0133ec56> Mohammed Fayis E<br data-v-0133ec56> +91 96453 15315 </p><p class="small text-muted mb-0" data-v-0133ec56>@ Event Organizer</p><hr data-v-0133ec56></div><div class="col-sm-4" data-v-0133ec56><h5 class="h1 brand text-dark" data-v-0133ec56>Surya</h5><p class="small text-muted" data-v-0133ec56> Surya Narayanan<br data-v-0133ec56> a.suryanarayanan2000@gmail.com </p><p class="small text-muted mb-0" data-v-0133ec56><a class="text-primary" href="https://github.com/isuryanarayanan" data-v-0133ec56>@ Developer</a></p><hr data-v-0133ec56></div></div></footer>',1);function re(s,a,o,r,t,i){const n=v("router-link");return l(),d("div",J,[X,e("div",K,[(l(!0),d(b,null,g(s.events,c=>(l(),d("div",{class:"col-sm-4 border py-2 bg-dark text-light",key:c.id},[e("div",W,[e("h3",Q,h(c.name),1)]),Y,e("p",Z,[e("span",{innerHTML:c.short_description.replace(/(?:\r\n|\r|\n)/g,"<br />")},null,8,ee),te,se,e("a",ae,[_(n,{class:"text-light",to:{name:"Register",params:{id:c.id}}},{default:E(()=>[ne]),_:2},1032,["to"])])])]))),128))]),oe])}var ie=m(B,[["render",re],["__scopeId","data-v-0133ec56"]]);const ce={name:"Events",components:{},computed:T({},O({events:"getEvents"})),data(){return{}},methods:{copyLink:function(s){navigator.clipboard.writeText("https://aloha.herokuapp.com/register/"+s),alert("Link Copied to ClipBoard")}},mounted(){this.$store.dispatch("GET_EVENTS")}},$=s=>(f("data-v-077a4cd0"),s=s(),y(),s),le={class:"event-container m-0 flex row"},de=$(()=>e("div",{class:"col-sm-12 card bg-transparent border-0 p-0 col-sm-6"},[e("h1",{class:"brand p-5"},"Events")],-1)),pe={class:"p-2 text-center"},he={class:"brand"},ue=$(()=>e("hr",null,null,-1)),me={class:"brand-2 brand-small text-center"},_e=["innerHTML"],ve=$(()=>e("br",null,null,-1)),be=$(()=>e("br",null,null,-1)),ge={class:"btn brand-2 btn-primary register-btn"},fe=u("Register");function ye(s,a,o,r,t,i){const n=v("router-link");return l(),d("div",le,[de,(l(!0),d(b,null,g(s.events,c=>(l(),d("div",{class:"col-sm-4 card border py-2 bg-dark text-light",key:c.id},[e("div",pe,[e("h3",he,h(c.name),1)]),ue,e("p",me,[e("span",{innerHTML:c.short_description.replace(/(?:\r\n|\r|\n)/g,"<br />")},null,8,_e),ve,be,e("a",ge,[_(n,{class:"text-light",to:{name:"Register",params:{id:c.id}}},{default:E(()=>[fe]),_:2},1032,["to"])])])]))),128))])}var xe=m(ce,[["render",ye],["__scopeId","data-v-077a4cd0"]]);const Ee={name:"Event",components:{},props:["id"],data(){return{event:"",phone_number:"",semester:"",batch:"",team_input:"",team:[],username:"",message:"",message_part:""}},mounted(){this.$store.dispatch("GET_EVENTS_DETAILS",this.id).then(s=>{this.event=JSON.parse(s.response),console.log(JSON.stringify(this.event))})},methods:{}},R=s=>(f("data-v-1285624a"),s=s(),y(),s),ke={class:""},$e={class:"table table-striped table-dark"},we=R(()=>e("thead",null,[e("tr",null,[e("th",{scope:"col"},"email"),e("th",{scope:"col"},"name"),e("th",{scope:"col"},"phone"),e("th",{scope:"col"},"semester"),e("th",{scope:"col"},"batch")])],-1)),Te={scope:"row"},Se={key:0,class:""},Ne=u(" Team "),Ie=R(()=>e("hr",null,null,-1));function Ce(s,a,o,r,t,i){return l(),d("div",ke,[e("table",$e,[we,(l(!0),d(b,null,g(t.event,n=>(l(),d("tbody",{key:n.id},[e("tr",null,[e("th",Te,h(n.email),1),e("td",null,h(n.name),1),e("td",null,h(n.phone),1),e("td",null,h(n.semester),1),e("td",null,h(n.batch),1),n.team!=0?(l(),d("div",Se,[Ne,Ie,(l(!0),d(b,null,g(n.team,c=>(l(),d("div",{class:"",key:c[0]},h(c),1))),128))])):S("",!0)])]))),128))])])}var Oe=m(Ee,[["render",Ce],["__scopeId","data-v-1285624a"]]);const Ae={name:"Register",components:{},props:["id"],data(){return{event:"",phone_number:"",semester:"",batch:"",team_input:"",team:[],username:"",message:"",message_part:""}},mounted(){this.$store.dispatch("GET_EVENT",this.id).then(s=>{this.event=JSON.parse(s.response)})},methods:{addTeamMember:function(){this.team.push(this.team_input)},deleteTeamMember:function(s){s>-1&&this.team.splice(s,1)},renderMessage:function(s,a){this.message=a,this.message_part=s},registerForEvent:async function(){await this.handleClickSignIn()},async handleClickSignIn(){try{const r=await this.$gAuth.signIn();if(!r)return null;var s=r.getAuthResponse(),a=s.id_token,o="";this.team.length==0?o="none":this.team.forEach(t=>{o=o+t+","}),this.$store.dispatch("LOGIN",{oauth_token:a,username:this.username,phone_number:this.phone_number,semester:this.semester,batch:this.batch,team:o,event_id:this.event.id}).then(t=>{t.status==200?this.renderMessage("Success","Registered as "+this.phone_number+"@"+r.getBasicProfile().getEmail()):(console.log(t.response),this.renderMessage("Danger","Uh oh!")),this.handleClickSignOut()})}catch(r){return console.error(r),null}},async handleClickSignOut(){try{await this.$gAuth.signOut()}catch(s){console.error(s)}}}},p=s=>(f("data-v-f759113e"),s=s(),y(),s),Re={class:"container"},Le={class:"row"},He={class:"card bg-transparent border-0"},Me={class:"card-header display-4 brand"},Ve={class:"card-body"},Ge={key:0,class:"text-danger"},Fe=p(()=>e("h1",null,"Registration closed",-1)),qe=[Fe],Pe={class:"card-title"},De={class:"card-text"},Ue=["innerHTML"],je={class:""},ze={class:"card p-5"},Be={class:"form-group"},Je=p(()=>e("label",{for:"exampleInputEmail3"},"Full Name",-1)),Xe={class:"form-group"},Ke=p(()=>e("label",{for:"exampleInputEmail1"},"Phone Number",-1)),We=p(()=>e("small",{id:"emailHelp",class:"form-text text-muted"},"We'll never share your data with anyone else.",-1)),Qe={class:"form-group"},Ye=p(()=>e("label",{for:"exampleFormControlSelect1"},"Select semester",-1)),Ze=p(()=>e("option",null,"1",-1)),et=p(()=>e("option",null,"3",-1)),tt=p(()=>e("option",null,"5",-1)),st=p(()=>e("option",null,"7",-1)),at=[Ze,et,tt,st],nt={class:"form-group"},ot=p(()=>e("label",{for:"exampleInputEmail2"},"Batch",-1)),rt={key:0,class:"form-group"},it=p(()=>e("label",{for:"exampleInputEmail2"},"Add Team Member",-1)),ct=p(()=>e("hr",null,null,-1)),lt=["onClick"],dt=p(()=>e("div",{class:"form-group form-check"},[e("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),e("label",{class:"form-check-label",for:"exampleCheck1"},"Remember me")],-1)),pt=p(()=>e("br",null,null,-1)),ht=p(()=>e("hr",null,null,-1)),ut={class:"muted"};function mt(s,a,o,r,t,i){return l(),d("div",Re,[e("div",Le,[e("div",He,[e("h5",Me,h(t.event.name),1),e("div",Ve,[t.event.closed?(l(),d("div",Ge,qe)):S("",!0),e("h5",Pe," Time: "+h(t.event.timing)+" | venue: "+h(t.event.venue),1),e("p",De,[e("span",{innerHTML:t.event.description.replace(/(?:\r\n|\r|\n)/g,"<br />")},null,8,Ue)]),e("div",je,[e("div",ze,[e("div",Be,[Je,x(e("input",{type:"text",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter your name","onUpdate:modelValue":a[0]||(a[0]=n=>t.username=n)},null,512),[[k,t.username]])]),e("div",Xe,[Ke,x(e("input",{type:"text",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter Phone Number","onUpdate:modelValue":a[1]||(a[1]=n=>t.phone_number=n)},null,512),[[k,t.phone_number]]),We]),e("div",Qe,[Ye,x(e("select",{class:"form-control","onUpdate:modelValue":a[2]||(a[2]=n=>t.semester=n),id:"exampleFormControlSelect1"},at,512),[[V,t.semester]])]),e("div",nt,[ot,x(e("input",{type:"text",class:"form-control",id:"exampleInputEmail2","aria-describedby":"emailHelp",placeholder:"Enter batch Eg CSB, CSA","onUpdate:modelValue":a[3]||(a[3]=n=>t.batch=n)},null,512),[[k,t.batch]])]),t.event.team_based?(l(),d("div",rt,[it,x(e("input",{type:"text",class:"form-control",id:"exampleInputEmail2","aria-describedby":"emailHelp",placeholder:"Enter member name and phone number","onUpdate:modelValue":a[4]||(a[4]=n=>t.team_input=n)},null,512),[[k,t.team_input]]),e("div",{class:"btn btn-success",onClick:a[5]||(a[5]=n=>i.addTeamMember())},"add"),(l(!0),d(b,null,g(t.team,n=>(l(),d("div",{class:"",key:n},[ct,e("div",{class:"btn btn-sm btn-danger",onClick:c=>i.deleteTeamMember(t.team.indexOf(n))}," delete ",8,lt),u(" "+h(n),1)]))),128))])):S("",!0),dt,e("button",{onClick:a[6]||(a[6]=(...n)=>i.registerForEvent&&i.registerForEvent(...n)),type:"submit",class:"btn btn-primary"}," Submit ")])]),pt,u(" "+h(t.message)+" ",1),ht,e("p",ut,"Organizers : "+h(t.event.organizers),1)])])])])}var _t=m(Ae,[["render",mt],["__scopeId","data-v-f759113e"]]);const vt={name:"Events",components:{},data(){return{}}},bt=s=>(f("data-v-c9c8112e"),s=s(),y(),s),gt={class:"container"},ft=bt(()=>e("div",{class:"display-1 text-danger"},"Route Invalid",-1)),yt=[ft];function xt(s,a,o,r,t,i){return l(),d("div",gt,yt)}var Et=m(vt,[["render",xt],["__scopeId","data-v-c9c8112e"]]);const kt=[{path:"/",name:"Home",component:ie},{path:"/events",name:"Events",component:xe},{path:"/event/:id",name:"Event",component:Oe,props:!0},{path:"/register/:id",name:"Register",component:_t,props:!0},{path:"/:catchAll(.*)",name:"NotFound",component:Et}],$t=G({history:F(),routes:kt}),wt=new q.Store({state:{events:[]},getters:{getEvents:s=>s.events},mutations:{set_events:function(s,a){s.events=a}},actions:{GET_EVENTS:function({getters:s,dispatch:a,commit:o}){let r=new XMLHttpRequest,t=new Promise((i,n)=>{r.open("GET","https://aloha.herokuapp.com/organizer/event"),r.setRequestHeader("Content-Type","Application/json"),r.onload=()=>{i(r)},r.onerror=()=>{n(r)},r.send()});return t.then(i=>{o("set_events",JSON.parse(i.response))}),t},GET_EVENTS_DETAILS:function({getters:s,dispatch:a,commit:o},r){let t=new XMLHttpRequest;return new Promise((n,c)=>{t.open("GET","https://aloha.herokuapp.com/organizer/event/registered/"+r+""),t.setRequestHeader("Content-Type","Application/json"),t.onload=()=>{n(t)},t.onerror=()=>{c(t)},t.send()})},GET_EVENT:function({getters:s,dispatch:a,commit:o},r){let t=new XMLHttpRequest;return new Promise((n,c)=>{t.open("GET","https://aloha.herokuapp.com/organizer/event/"+r+"/"),t.setRequestHeader("Content-Type","Application/json"),t.onload=()=>{n(t)},t.onerror=()=>{c(t)},t.send()})},LOAD_USER_GOOGLE:function(){},LOAD_USER_SERVER:function(){},LOGIN:function({getters:s,dispatch:a,commit:o},r){let t=new XMLHttpRequest;return new Promise((n,c)=>{t.open("POST","https://aloha.herokuapp.com/oauth/google/"),t.setRequestHeader("Content-Type","Application/json"),t.onload=()=>{n(t)},t.onerror=()=>{c(t)},t.send(JSON.stringify(r))})}}}),Tt={name:"Navbar"},St={class:"navbar navbar-expand-lg bg-dark navbar-light px-5"},Nt=e("a",{class:"navbar-brand",href:"#"},null,-1),It=e("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1),Ct={class:"collapse navbar-collapse",id:"navbarText"},Ot={class:"navbar-nav mr-auto"},At={class:"nav-item btn"},Rt=u("Home"),Lt={class:"nav-item btn"},Ht=u("Events");function Mt(s,a,o,r,t,i){const n=v("router-link");return l(),d("nav",St,[Nt,It,e("div",Ct,[e("ul",Ot,[e("li",At,[_(n,{class:"nav-link text-light border-bottom",to:"/"},{default:E(()=>[Rt]),_:1})]),e("li",Lt,[_(n,{class:"nav-link text-light border-bottom",to:"/events"},{default:E(()=>[Ht]),_:1})])])])])}var Vt=m(Tt,[["render",Mt]]);const Gt={name:"App",components:{Navbar:Vt},data(){return{googleOauth:null}},setup(){return{Vue3GoogleOauth:P("Vue3GoogleOauth")}},mounted(){}},Ft={class:"app"};function qt(s,a,o,r,t,i){const n=v("Navbar"),c=v("router-view");return l(),d("div",Ft,[_(n),_(c)])}var Pt=m(Gt,[["render",qt]]),Dt="1027589441319-13rlrl6k4hlht32in3a90m8nm3jt9aab.apps.googleusercontent.com";const Ut={clientId:Dt,scope:"profile email openid",prompt:"consent",fetch_basic_profile:!1},w=D(Pt);w.use(U,Ut);w.use($t);w.use(wt);w.mount("#app");
