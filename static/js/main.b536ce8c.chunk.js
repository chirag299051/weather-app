(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{23:function(e,t,n){},26:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),s=n(9),r=n.n(s),i=(n(23),n(24),n(25),n.p,n(26),n(5)),a=n(16),l=n(14),u=n.n(l),j=n(6),h=n.n(j),d=n(7),m=n(8),b=n(3),f="AIzaSyAobzmD0pf_jnvXCycI0bUYsBRJlL4ZEvw",O=o.a.createContext(),p=function(e){var t=e.children,n=Object(c.useState)(null),o=Object(i.a)(n,2),s=o[0],r=o[1],a=Object(c.useState)(!1),l=Object(i.a)(a,2),u=l[0],j=l[1],p=Object(c.useState)({}),g=Object(i.a)(p,2),x=g[0],y=g[1],w=Object(c.useState)(null),v=Object(i.a)(w,2),C=v[0],k=v[1],_=Object(c.useState)(null),N=Object(i.a)(_,2),S=N[0],E=N[1],I=Object(c.useState)(null),z=Object(i.a)(I,2),F=z[0],H=z[1],D=Object(c.useState)(!1),P=Object(i.a)(D,2),R=P[0],W=P[1],M=function(){navigator.geolocation&&(console.log("navigator.geolocation is available"),navigator.geolocation.getCurrentPosition((function(e){console.log("current position acquired");var t=e.coords.latitude,n=e.coords.longitude;console.log(t,n),fetch("https://fcc-weather-api.glitch.me/api/current?lon=".concat(n,"&lat=").concat(t)).then((function(e){return e.json()})).then((function(e){return y({lat:t,lon:n,city:e.name,country:e.sys.country})}))}),(function(e){console.warn("ERROR(".concat(e.code,"): ").concat(e.message))})))};Object(c.useEffect)((function(){M()}),[]);return Object(c.useEffect)(Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M();case 1:case"end":return e.stop()}}),e)}))),["https://geolocation-db.com/json/"]),Object(c.useEffect)((function(){j(!0),x.lat&&fetch("https://maps.googleapis.com/maps/api/timezone/json?location=".concat(x.lat,",").concat(x.lon,"&timestamp=").concat(Math.floor(Date.now()/1e3),"&key=").concat(f)).then((function(e){return e.json()})).then((function(e){console.log("Timezone :",e),k(e.timeZoneId)})),x.lat&&fetch("".concat("https://api.openweathermap.org/data/2.5/weather?lat=").concat(x.lat,"&lon=").concat(x.lon,"&appid=").concat("706c875644ce262a11af9eaf5a62df90","&units=metric")).then((function(e){return e.json()})).then((function(e){console.log("Weather :",e);var t=e.dt,n=e.weather,c=e.main,o=c.temp,s=c.feels_like,r=c.temp_min,i=c.temp_max,a=c.pressure,l=c.humidity,u=e.wind.speed,j=e.clouds.all,h=e.sys,d=h.country,m=h.sunrise,b=h.sunset,f=e.id;E({dt:t,weatherc:n[0],temp:o,feels_like:s,temp_min:r,temp_max:i,pressure:a,humidity:l,wind:u,clouds:j,country:d,sunrise:m,sunset:b,id:f})})).catch((function(e){console.error(e)})),j(!1)}),[x]),console.log(S&&S),console.log(C),Object(c.useEffect)((function(){r(S&&S.weatherc.icon.slice(-1))}),[S]),Object(c.useEffect)((function(){x.country&&fetch("".concat("https://api.currentsapi.services/v1/search?language=en&country=").concat(x.country,"&apiKey=").concat("oa9AFhpH80Xey9PNXgPTwZWkQUfBP4yY5iaHKaD6klhgkK9_")).then((function(e){return e.json()})).then((function(e){console.log("News :",e),H(e.news.filter((function(e){return"en"===e.language&&"zh-hant"!==e.language&&"None"!==e.image&&""!==e.author})))})).catch((function(e){console.error(e)}))}),[x]),Object(b.jsx)(O.Provider,{value:{theme:s,loading:u,location:x,fetchLocation:M,getCoords:function(e){fetch("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(e,"&key=").concat(f,"\n  ")).then((function(e){return e.json()})).then((function(e){console.log("Coords :",e),e.results[0].address_components.some((function(e){return e.types.includes("locality")}))?y(Object(m.a)(Object(m.a)({},x),{},{city:e.results[0].address_components.filter((function(e){return e.types.includes("locality")}))[0].long_name,lat:e.results[0].geometry.location.lat,lon:e.results[0].geometry.location.lng,country:e.results[0].address_components.filter((function(e){return e.types.includes("country")}))[0].short_name})):(W(!0),console.log("error: ",R))})).catch((function(e){console.error(e)}))},weather:S,timezone:C,news:F},children:t})},g=n(18),x=function(){var e=Object(c.useRef)(),t=Object(c.useContext)(O),n=t.location,o=t.getCoords,s=Object(c.useState)(""),r=Object(i.a)(s,2),a=r[0],l=r[1];return Object(c.useEffect)((function(){return console.log("places",e),console.log(n),l(n.city),function(){l("")}}),[n]),Object(b.jsx)("div",{className:"search",children:Object(b.jsx)(g.a,{ref:e,apiKey:"AIzaSyChD_ozQm2jhcWsqNgX3iSW1kMZjdGIbx4",selectProps:{defaultInputValue:a,placeholder:"City",onChange:function(e){console.log(e),l(e.value.structured_formatting.main_text),o(e.value.description),console.log(n),console.log("getCoords: ",e.value.description)}}})})},y=n(15),w=n.n(y),v=function(e){var t="Card "+e.className;return Object(b.jsx)("div",{className:t,children:e.children})},C=function(){var e=Object(c.useContext)(O),t=e.theme,n=e.weather,o=e.location,s=e.timezone,r=function(e,t){return new Date(1e3*e).toLocaleString("en-GB",{timeZone:t,hour:"numeric",minute:"numeric"})};return n&&s?Object(b.jsxs)(v,{className:t+" weather",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("h1",{children:[o.city,", ",o.country]})}),Object(b.jsxs)("div",{className:"clocks",children:[Object(b.jsx)(w.a,{format:"DD MMMM YYYY",ticking:!0,timezone:s}),Object(b.jsx)("br",{}),Object(b.jsx)(w.a,{className:"time",format:"HH:mm:ss",ticking:!0,timezone:s})]}),Object(b.jsx)("h3",{children:Object(b.jsx)("i",{children:n.weatherc.main})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(n.weatherc.icon,"@2x.png"),alt:"image"}),Object(b.jsx)("b",{children:Object(b.jsxs)("i",{children:[parseInt(n.temp).toFixed(1),"\xb0 C\u2003\u2003"]})}),Object(b.jsxs)("i",{children:["feels like ",parseInt(n.feels_like).toFixed(1),"\xb0 C"]}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsxs)("i",{children:[parseInt(n.temp_max).toFixed(1),"\xa0/\xa0",parseInt(n.temp_min).toFixed(1)]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("i",{children:["Sunrise: \xa0",r(n.sunrise,s)]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("i",{children:["Sunset: \xa0",r(n.sunset,s)]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("i",{children:["Wind: \xa0",parseInt(n.wind).toFixed(1)," km/h"]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("i",{children:["Humidity: \xa0",n.humidity," %"]})})]})]})]}):null},k=function(e){var t=e.item;return Object(b.jsxs)("a",{className:"news-item",href:t.url,target:"_blank",children:[Object(b.jsx)("img",{src:t.image,alt:"No Image"}),Object(b.jsx)("p",{children:t.title})]})},_=function(){var e=Object(c.useContext)(O),t=(e.theme,e.news);return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"news",children:[Object(b.jsx)("h1",{children:"Current News"}),Object(b.jsx)("div",{className:"news-items",children:t&&t.map((function(e,t){return Object(b.jsx)(k,{item:e},t)}))})]})})},N=n.p+"static/media/globe.e40c5193.png",S=function(e){var t=Object(c.useRef)(null),n=Object(c.useState)(0),o=Object(i.a)(n,2),s=o[0],r=o[1],l=Object(c.useContext)(O).theme;return Object(c.useEffect)((function(){return console.log(l),"d"===l?(s&&s.destroy(),r(u()({el:t.current,THREE:a,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:600,minWidth:200,backgroundColor:0}))):"n"===l&&(s&&s.destroy(),r(u()({el:t.current,THREE:a,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:600,minWidth:200,skyColor:131596,cloudColor:6978715,cloudShadowColor:528667,sunColor:16448250,sunGlareColor:16777215,sunlightColor:16119285}))),function(){s&&s.destroy()}}),[l]),Object(b.jsxs)("div",{ref:t,className:"header",children:[Object(b.jsxs)("div",{className:"logo",children:[Object(b.jsx)("img",{src:N,alt:""}),Object(b.jsx)("h2",{style:{color:"white"},children:"Weather App"})]}),Object(b.jsx)(x,{}),Object(b.jsx)(C,{}),Object(b.jsx)(_,{})]})},E=o.a.memo(S);function I(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(E,{})})}var z=o.a.memo(I),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(p,{children:Object(b.jsx)(z,{})})}),document.getElementById("root")),F()}},[[49,1,2]]]);
//# sourceMappingURL=main.b536ce8c.chunk.js.map