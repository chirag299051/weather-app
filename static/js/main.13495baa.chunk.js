(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{30:function(e,t,c){},33:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),o=c(8),r=c.n(o),i=(c(30),c(31),c(32),c.p,c(33),c(6)),a=c(17),l=c(15),u=c.n(l),j=(c(56),c(5)),h=c.n(j),d=c(7),b=c(9),m=c(3),O="https://geolocation-db.com/json/",f="AIzaSyChD_ozQm2jhcWsqNgX3iSW1kMZjdGIbx4",p=s.a.createContext(),x=function(e){var t=e.children,c=Object(n.useState)(null),s=Object(i.a)(c,2),o=s[0],r=s[1],a=Object(n.useState)(!1),l=Object(i.a)(a,2),u=l[0],j=l[1],x=Object(n.useState)({}),g=Object(i.a)(x,2),y=g[0],v=g[1],C=Object(n.useState)(null),w=Object(i.a)(C,2),_=w[0],k=w[1],N=Object(n.useState)(null),S=Object(i.a)(N,2),I=S[0],E=S[1],z=Object(n.useState)(null),F=Object(i.a)(z,2),W=F[0],D=F[1],H=Object(n.useState)(null),M=Object(i.a)(H,2),T=M[0],P=M[1],A=Object(n.useState)(!1),G=Object(i.a)(A,2),L=G[0],Y=G[1],Z=function(){var e=Object(b.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,v(Object(d.a)(Object(d.a)({},y),{},{city:c.city,lat:c.latitude,lon:c.longitude,country:c.country_code})),console.log("Geo :",c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Z();case 1:case"end":return e.stop()}}),e)}))),[O]),Object(n.useEffect)((function(){j(!0),y.lat&&fetch("https://maps.googleapis.com/maps/api/timezone/json?location=".concat(y.lat,",").concat(y.lon,"&timestamp=").concat(Math.floor(Date.now()/1e3),"&key=").concat(f)).then((function(e){return e.json()})).then((function(e){console.log("Timezone :",e),k(e.timeZoneId)})),y.lat&&fetch("".concat("https://api.openweathermap.org/data/2.5/weather?lat=").concat(y.lat,"&lon=").concat(y.lon,"&appid=").concat("706c875644ce262a11af9eaf5a62df90","&units=metric")).then((function(e){return e.json()})).then((function(e){console.log("Weather :",e);var t=e.dt,c=e.weather,n=e.main,s=n.temp,o=n.feels_like,r=n.temp_min,i=n.temp_max,a=n.pressure,l=n.humidity,u=e.wind.speed,j=e.clouds.all,h=e.sys,d=h.country,b=h.sunrise,m=h.sunset,O=e.id;E({dt:t,weatherc:c[0],temp:s,feels_like:o,temp_min:r,temp_max:i,pressure:a,humidity:l,wind:u,clouds:j,country:d,sunrise:b,sunset:m,id:O})})).catch((function(e){console.error(e)})),j(!1)}),[y]),console.log(I&&I),console.log(_),Object(n.useEffect)((function(){r(I&&I.weatherc.icon.slice(-1))}),[I]),console.log("Theme:",o),Object(n.useEffect)((function(){y.country&&fetch("".concat("https://api.currentsapi.services/v1/search?language=en&country=").concat(y.country,"&apiKey=").concat("oa9AFhpH80Xey9PNXgPTwZWkQUfBP4yY5iaHKaD6klhgkK9_")).then((function(e){return e.json()})).then((function(e){console.log("News :",e),D(e.news.filter((function(e){return"en"===e.language&&"zh-hant"!==e.language&&"None"!==e.image&&""!==e.author})))})).catch((function(e){console.error(e)}))}),[y]),Object(n.useEffect)((function(){fetch("https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/cases_by_country.php",{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor-v2.p.rapidapi.com","x-rapidapi-key":"b74faec440mshb8fdb8ea26ffea9p1aaf6bjsn50000fc429ce"}}).then((function(e){return e.json()})).then((function(e){console.log("Covid :",e);var t=e.statistic_taken_at,c=e.countries_stat;P({countries:c.map((function(e){return{name:e.country_name,cases:e.cases,deaths:e.deaths,new_cases:e.new_cases,new_deaths:e.new_deaths,active_cases:e.active_cases}})),sources:t.split(" ")[0]})})).catch((function(e){console.error(e)}))}),[]),console.log(T),Object(m.jsx)(p.Provider,{value:{theme:o,loading:u,location:y,fetchLocation:Z,getCoords:function(e){fetch("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(e,"&key=").concat(f,"\n")).then((function(e){return e.json()})).then((function(e){console.log("Coords :",e),e.results[0].address_components.some((function(e){return e.types.includes("locality")}))?v(Object(d.a)(Object(d.a)({},y),{},{city:e.results[0].address_components.filter((function(e){return e.types.includes("locality")}))[0].long_name,lat:e.results[0].geometry.location.lat,lon:e.results[0].geometry.location.lng,country:e.results[0].address_components.filter((function(e){return e.types.includes("country")}))[0].short_name})):(Y(!0),console.log("error: ",L))})).catch((function(e){console.error(e)}))},weather:I,timezone:_,news:W,covid:T},children:t})},g=c(20),y=function(){var e=Object(n.useRef)(),t=Object(n.useContext)(p),c=(t.theme,t.isLoading,t.location),s=t.getCoords,o=Object(n.useState)(""),r=Object(i.a)(o,2),a=r[0],l=r[1];return Object(n.useEffect)((function(){return console.log("places",e),console.log(c),l(c.city),function(){l("")}}),[c]),Object(m.jsx)("div",{className:"search",children:Object(m.jsx)(g.a,{ref:e,apiKey:"AIzaSyChD_ozQm2jhcWsqNgX3iSW1kMZjdGIbx4",selectProps:{defaultInputValue:a,placeholder:"City",onChange:function(e){console.log(e),l(e.value.structured_formatting.main_text),s(e.value.description),console.log(c)}}})})},v=c(16),C=c.n(v),w=function(e){var t="Card "+e.className;return Object(m.jsx)("div",{className:t,children:e.children})},_=function(){var e=Object(n.useContext)(p),t=e.theme,c=e.weather,s=e.location,o=e.timezone,r=function(e,t){return new Date(1e3*e).toLocaleString("en-GB",{timeZone:t,hour:"numeric",minute:"numeric"})};return c&&o&&Object(m.jsxs)(w,{className:t+" weather",children:[Object(m.jsx)("div",{children:Object(m.jsxs)("h1",{children:[s.city,", ",s.country]})}),Object(m.jsxs)("div",{className:"clocks",children:[Object(m.jsx)(C.a,{format:"DD MMMM YYYY",ticking:!0,timezone:o}),Object(m.jsx)("br",{}),Object(m.jsx)(C.a,{className:"time",format:"HH:mm:ss",ticking:!0,timezone:o})]}),Object(m.jsx)("h3",{children:Object(m.jsx)("i",{children:c.weatherc.main})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(c.weatherc.icon,"@2x.png")}),Object(m.jsx)("b",{children:Object(m.jsxs)("i",{children:[parseInt(c.temp).toFixed(1),"\xb0 C\u2003\u2003"]})}),Object(m.jsxs)("i",{children:["feels like ",parseInt(c.feels_like).toFixed(1),"\xb0 C"]}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsxs)("i",{children:[parseInt(c.temp_max).toFixed(1),"\xa0/\xa0",parseInt(c.temp_min).toFixed(1)]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("i",{children:["Sunrise: \xa0",r(c.sunrise,o)]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("i",{children:["Sunset: \xa0",r(c.sunset,o)]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("i",{children:["Wind: \xa0",parseInt(c.wind).toFixed(1)," km/h"]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("i",{children:["Humidity: \xa0",c.humidity," %"]})})]})]})]})},k=function(e){var t=e.item;return Object(m.jsxs)("a",{className:"news-item",href:t.url,target:"_blank",children:[Object(m.jsx)("img",{src:t.image,alt:"No Image"}),Object(m.jsx)("p",{children:t.title})]})},N=function(){var e=Object(n.useContext)(p),t=e.theme,c=e.news;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(w,{className:t+" news",children:[Object(m.jsx)("h1",{children:"Current News"}),Object(m.jsx)("div",{className:"news-items",children:c&&c.map((function(e,t){return Object(m.jsx)(k,{item:e},t)}))})]})})},S=c(62),I=function(){var e=Object(n.useContext)(p),t=e.covid,c=e.theme;return Object(m.jsxs)(w,{className:c+" covid",children:[Object(m.jsx)("h1",{style:{position:"sticky"},children:"Covid Cases by Country"}),Object(m.jsxs)(S.a,{className:"table",size:"sm",variant:"dark",striped:!0,hover:!0,responsive:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"Country"}),Object(m.jsx)("th",{children:"Cases"}),Object(m.jsx)("th",{children:"Active"}),Object(m.jsx)("th",{children:"Deaths"})]})}),Object(m.jsx)("tbody",{children:t&&t.countries.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t+1}),Object(m.jsx)("td",{children:e.name}),Object(m.jsx)("td",{children:e.cases}),Object(m.jsx)("td",{children:e.active_cases}),Object(m.jsx)("td",{children:e.deaths})]},t)}))})]}),t&&Object(m.jsxs)("p",{children:["Source: as of ",t.sources]})]})},E=c.p+"static/media/globe.e40c5193.png",z=function(e){var t=Object(n.useRef)(null),c=Object(n.useState)(0),s=Object(i.a)(c,2),o=s[0],r=s[1],l=Object(n.useContext)(p).theme;return Object(n.useEffect)((function(){return console.log(l),"d"===l?r(u()({el:t.current,THREE:a,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:600,minWidth:200,backgroundColor:0})):"n"===l&&r(u()({el:t.current,THREE:a,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:600,minWidth:200,skyColor:131596,cloudColor:6978715,cloudShadowColor:528667,sunColor:16448250,sunGlareColor:16777215,sunlightColor:16119285})),function(){o&&o.destroy()}}),[l]),Object(m.jsxs)("div",{ref:t,className:"header",children:[Object(m.jsxs)("div",{className:"logo",children:[Object(m.jsx)("img",{src:E,alt:""}),Object(m.jsx)("h2",{style:{color:"white"},children:"Weather App"})]}),Object(m.jsx)(y,{}),Object(m.jsx)(_,{}),Object(m.jsx)(N,{}),Object(m.jsx)(I,{})]})},F=function(){return Object(m.jsx)("div",{className:"footer",children:Object(m.jsxs)("span",{children:["Copyright \xa9 2021 - ",Object(m.jsx)("a",{href:"http://chirag9.com",children:" Chirag Singh"})]})})};var W=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(z,{}),Object(m.jsx)(F,{})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),o(e),r(e)}))};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(x,{children:Object(m.jsx)(W,{})})}),document.getElementById("root")),D()}},[[57,1,2]]]);
//# sourceMappingURL=main.13495baa.chunk.js.map