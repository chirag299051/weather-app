(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),a=n(16),r=n.n(a),i=(n(61),n(62),n(63),n(64),n.p,n(65),n(10)),s=n(53),u=n(47),j=n.n(u),l=n(51),b=n(52),h=(n(46),n(11)),d=n.n(h),f=n(23),p=n(17),O=n(6),g=o.a.createContext(),y=function(e){var t=e.children,n=Object(c.useState)("day"),o=Object(i.a)(n,2),a=o[0],r=(o[1],Object(c.useState)(!1)),s=Object(i.a)(r,2),u=s[0],j=s[1],l=Object(c.useState)({}),b=Object(i.a)(l,2),h=b[0],y=b[1],m=Object(c.useState)([]),x=Object(i.a)(m,2),v=x[0],S=x[1],C=Object(c.useState)(),w=Object(i.a)(C,2),E=w[0],k=(w[1],Object(c.useState)()),L=Object(i.a)(k,2),T=L[0],F=(L[1],Object(c.useState)()),A=Object(i.a)(F,2),I=A[0];A[1];Object(c.useEffect)(Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://geolocation-db.com/json/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,y(Object(f.a)(Object(f.a)({},h),{},{city:n.city,lat:n.latitude,lon:n.longitude,country:n.country_code})),console.log("Geo :",n);case 8:case"end":return e.stop()}}),e)}))),[]);return Object(O.jsx)(g.Provider,{value:{theme:a,isLoading:u,location:h,options:v,handleSearch:function(e){j(!0);try{fetch("".concat("https://api.openweathermap.org/geo/1.0/direct?q=").concat(e,"&limit=3&appid=").concat("706c875644ce262a11af9eaf5a62df90")).then((function(e){return e.json()})).then((function(e){if(console.log("items :",e),Array.isArray(e)){var t=e.map((function(e){return{city:e.name,lat:e.lat,lon:e.lon,country:e.country}}));console.log(e,t),j(!1),S(t)}}))}catch(t){console.log("Error ;",t),S([]),j(!1)}j(!1)},weather:E,news:T,covid:I},children:t})},m=function(){var e=Object(c.useRef)();console.log(e);var t=Object(c.useState)(0),n=Object(i.a)(t,2),o=(n[0],n[1],Object(c.useContext)(g)),a=(o.theme,o.isLoading),r=o.location,s=o.options,u=o.handleSearch;Object(c.useEffect)((function(){u(r.city)}),[r]);return Object(O.jsxs)("div",{style:{padding:"50px 10px",width:"21%",margin:"auto"},children:[Object(O.jsx)(l.a,{ref:e,filterBy:function(){return!0},id:"async-TA",isLoading:a,labelKey:"city",minLength:2,defaultInputValue:r.city||"",onSearch:u,options:s,placeholder:"City",renderMenuItemChildren:function(e){return e&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{children:e.city}),Object(O.jsx)("span",{style:{float:"right"},children:e.country})]})}}),Object(O.jsx)(b.a,{gradient:"aqua",rounded:!0,size:"md",type:"submit",className:"mr-auto",children:"Search"})]},Math.random())},x=function(e){var t=Object(c.useRef)(null),n=Object(c.useState)(0),o=Object(i.a)(n,2),a=o[0],r=o[1],u=Object(c.useState)({}),l=Object(i.a)(u,2),b=l[0];l[1],Object(c.useContext)(g).theme;return Object(c.useEffect)((function(){return a||(console.log("Vanta :",b),r(j()({THREE:s,el:t.current,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:600,minWidth:200,backgroundColor:0}))),function(){a&&a.destroy()}}),[a]),Object(O.jsx)("div",{ref:t,style:{width:"100%",marginTop:"0px"},children:Object(O.jsx)(m,{})})},v=function(){return Object(c.useEffect)((function(){fetch("https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/cases_by_country.php",{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor-v2.p.rapidapi.com","x-rapidapi-key":"b74faec440mshb8fdb8ea26ffea9p1aaf6bjsn50000fc429ce"}}).then((function(e){return e.json()})).then((function(e){console.log("Covid :",e)})).catch((function(e){console.error(e)}))}),[]),Object(O.jsx)("div",{})},S=function(){return Object(c.useEffect)((function(){fetch("".concat("https://newsapi.org/v2/top-headlines?country=","us&apiKey=").concat("07a79a233918493ea5e2dc75ebbf7f3a")).then((function(e){return e.json()})).then((function(e){console.log("News :",e)})).catch((function(e){console.error(e)}))}),[]),Object(O.jsx)("div",{})},C=function(){return Object(O.jsxs)("section",{style:{backgroundColor:"#1D272D",height:"100vh"},children:[Object(O.jsx)(S,{}),Object(O.jsx)(v,{})]})};var w=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(x,{}),Object(O.jsx)(C,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,105)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),a(e),r(e)}))};n(99);r.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(y,{children:Object(O.jsx)(w,{})})}),document.getElementById("root")),E()},61:function(e,t,n){},65:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.9af3603b.chunk.js.map