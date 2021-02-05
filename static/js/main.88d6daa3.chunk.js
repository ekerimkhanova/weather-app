(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a(16),s=a.n(r),i=(a(57),a(12)),o=a(122),d=a(124),l=a(125),u=function(e){var t=e.temp,a=e.date,c=e.icon,r=e.pres,s=e.humidity,i=e.clouds,u=e.wind,b=e.classes;return!0===e.isLoading?Object(n.jsx)("p",{children:"Loading..."}):Object(n.jsx)(o.a,{className:b.card,children:Object(n.jsxs)(d.a,{className:b.contentCard,children:[Object(n.jsx)(l.a,{className:b.title,color:"textSecondary",gutterBottom:!0,children:a}),Object(n.jsx)("img",{src:c,alt:""}),Object(n.jsxs)(l.a,{variant:"h5",component:"h2",children:[t,"\xb0"]}),Object(n.jsxs)(l.a,{variant:"body2",component:"p",children:["\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",r," \u043c\u043c.\u0440\u0442.\u0441\u0442."]}),Object(n.jsxs)(l.a,{variant:"body2",component:"p",children:["\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",s,"%"]}),Object(n.jsxs)(l.a,{variant:"body2",component:"p",children:["\u041e\u0431\u043b\u0430\u0447\u043d\u043e\u0441\u0442\u044c: ",i,"%"]}),Object(n.jsxs)(l.a,{variant:"body2",component:"p",children:["\u0412\u0435\u0442\u0435\u0440: ",u," \u043c/\u0441"]})]})})},b=a(43),j=a.n(b),p=(a(74),{desktop:{breakpoint:{max:3e3,min:1024},items:5,slidesToSlide:5},tablet:{breakpoint:{max:1024,min:464},items:3,slidesToSlide:2},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}}),h=function(e){var t=e.city,a=e.cards;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"cards-city",children:t}),Object(n.jsx)(j.a,{swipeable:!0,draggable:!0,showDots:!1,responsive:p,ssr:!0,infinite:!1,autoPlaySpeed:1e3,keyBoardControl:!0,customTransition:"all .5",transitionDuration:500,containerClass:"carousel-container",removeArrowOnDeviceType:["tablet","mobile"],children:a})]})},m=(a(75),a(126)),O=Object(m.a)((function(){return{title:{fontSize:14},contentCard:{"&:last-child":{padding:16},textAlign:"center"},card:{borderRadius:0}}})),f={"01":"\u044f\u043d\u0432\u0430\u0440\u044f","02":"\u0444\u0435\u0432\u0440\u0430\u043b\u044f","03":"\u043c\u0430\u0440\u0442\u0430","04":"\u0430\u043f\u0440\u0435\u043b\u044f","05":"\u043c\u0430\u044f","06":"\u0438\u044e\u043d\u044f","07":"\u0438\u044e\u043b\u044f","08":"\u0430\u0432\u0433\u0443\u0441\u0442\u0430","09":"\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f",10:"\u043e\u043a\u0442\u044f\u0431\u0440\u044f",11:"\u043d\u043e\u044f\u0431\u0440\u044f",12:"\u0434\u0435\u043a\u0430\u0431\u0440\u044f"},x=function(e){var t=e.data,a=e.city,r=e.isLoading,s=O(),i=Object(c.useMemo)((function(){return t.map((function(e){return Object(n.jsx)(u,{temp:e.temp,date:e.datetime,description:e.weather.description,icon:"https://www.weatherbit.io/static/img/icons/"+"".concat(e.weather.icon,".png"),pres:e.pres,humidity:e.rh,clouds:e.clouds,wind:e.wind_spd,classes:s},e.datetime)}))}),[t,s]);return Object(n.jsx)(h,{city:a,cards:i,isLoading:r})},v=a(30),g=a.n(v),w=a(31),y=a(44),S=a(102),k=a(128),C=a(45),N=a.n(C),L=a(127),T=function(e){var t=e.searchInput,a=e.handleChange,c=e.handleSubmit,r=e.showError,s=e.classes,i=e.fullScreen;return Object(n.jsxs)("form",{className:i?"search-wrapper fullscreen":"search-wrapper",onSubmit:c,children:[Object(n.jsx)("h2",{className:"search-title",children:"WHAT IS THE WEATHER?"}),Object(n.jsxs)("div",{children:[Object(n.jsxs)(S.a,{className:s.root,children:[Object(n.jsx)(k.a,{className:s.input,inputProps:{"aria-label":"search"},value:t,onChange:a,placeholder:"City"}),Object(n.jsx)(L.a,{className:s.iconButton,"aria-label":"search",type:"submit",children:Object(n.jsx)(N.a,{})})]}),r&&Object(n.jsx)("div",{className:"search-error",children:"Please enter city"})]})]})},E=a(46),I=a.n(E).a.create({baseURL:"https://api.weatherbit.io/v2.0/forecast/daily",headers:{"Content-Type":"application/json"},params:{lang:"ru",key:"797306ec7cd54de5b48cd37e7c3b5dfb"}}),D=(a(99),a(15)),B=Object(m.a)((function(e){var t;return{root:(t={},Object(D.a)(t,e.breakpoints.down("sm"),{width:270}),Object(D.a)(t,"display","flex"),Object(D.a)(t,"alignItems","center"),Object(D.a)(t,"width",500),t),input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10,"&:hover":{borderRadius:0},borderRadius:0}}})),R=function(e){var t,a=e.split("-"),n="0"===a[2][0]?a[2][1]:a[2];for(var c in f)c===String(a[1])&&(t=f[c]);return n+" "+t},A=function(e){return"-0"===Math.ceil(e)?"0":Math.ceil(e)},_=function(e){var t=e.setData,a=e.setCity,r=e.setIsLoading,s=B(),o=Object(c.useState)(""),d=Object(i.a)(o,2),l=d[0],u=d[1],b=Object(c.useState)(!1),j=Object(i.a)(b,2),p=j[0],h=j[1],m=Object(c.useState)(!0),O=Object(i.a)(m,2),f=O[0],x=O[1],v=Object(c.useState)(""),S=Object(i.a)(v,2),k=S[0],C=S[1];return Object(c.useEffect)((function(){var e=!1;return k&&function(){var n=Object(y.a)(g.a.mark((function n(){var c;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),n.prev=1,n.next=4,I.get("/",{params:{city:k}});case 4:c=n.sent,e||(204===c.status?(h(!0),x(!0)):(x(!1),a(c.data.city_name),t(c.data.data.map((function(e){return Object(w.a)(Object(w.a)({},e),{},{temp:A(e.temp),datetime:R(e.datetime),pres:A(e.pres/1.333),wind_spd:(t=e.wind_spd,t.toFixed(1).replace(".",","))});var t}))),u(""))),r(!1),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.error("error",n.t0);case 12:r(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}()(),function(){e=!0}}),[k]),Object(n.jsx)(T,{handleChange:function(e){u(e.target.value)},handleSubmit:function(e){e.preventDefault(),""===l?(x(!0),h(!0),u("")):(h(!1),C(l))},searchInput:l,showError:p,classes:s,fullScreen:f})},F=function(){var e=Object(c.useState)(void 0),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),d=o[0],l=o[1],u=Object(c.useState)(!1),b=Object(i.a)(u,2),j=b[0],p=b[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(_,{setData:r,setCity:l,setIsLoading:p}),a&&Object(n.jsx)(x,{data:a,city:d,isLoading:j})]})};s.a.render(Object(n.jsx)(F,{}),document.getElementById("root"))},57:function(e,t,a){},75:function(e,t,a){},99:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.88d6daa3.chunk.js.map