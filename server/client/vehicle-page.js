exports.ids=["vehicle-page"],exports.modules={148:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VehiclePageSync=t.VehiclePage=t.default=void 0;var a=h(l(39)),n=h(l(40)),u=h(l(64)),r=h(l(23)),i=h(l(24)),d=h(l(65)),s=h(l(66)),c=l(10),f=h(c),m=l(41),o=l(151),p=h(l(152));function h(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(){return(0,r.default)(this,t),(0,d.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"renderAsync",value:function(){var e=(0,n.default)(a.default.mark(function e(t){var l,n,u,r;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l=this.props,n=l.route,u=l.swapi,r={route:n},t.show(f.default.createElement(E,r)),e.next=5,u.fetchOne("/vehicles/"+n.params.id+"/");case 5:return r.vehicle=e.sent,t.show(f.default.createElement(E,r)),e.next=9,u.fetchMultiple(r.vehicle.films,{minimum:"60%"});case 9:return r.films=e.sent,t.show(f.default.createElement(E,r)),e.next=13,u.fetchMultiple(r.vehicle.pilots,{minimum:"60%"});case 13:return r.pilots=e.sent,t.show(f.default.createElement(E,r)),e.abrupt("return",f.default.createElement(E,r));case 16:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(m.AsyncComponent);v.displayName="VehiclePage";var E=function(e){function t(){return(0,r.default)(this,t),(0,d.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.route,l=e.vehicle,a=e.pilots,n=e.films;return l?f.default.createElement("div",null,f.default.createElement("h1",null,l.name),f.default.createElement("div",null,"Model: ",l.model),f.default.createElement("div",null,"Manufacturer: ",l.manufacturer),f.default.createElement("div",null,"Cost in credits: ",l.cost_in_credits),f.default.createElement("div",null,"Length: ",l.length," m"),f.default.createElement("div",null,"Max atmosphering speed: ",l.max_atmosphering_speed," km/h"),f.default.createElement("div",null,"Crew: ",l.crew),f.default.createElement("div",null,"Passengers: ",l.passenger),f.default.createElement("div",null,"Cargo capacity: ",l.cargo_capacity," kg"),f.default.createElement("div",null,"Consumables: ",l.consumables),f.default.createElement("div",null,"Vehicle class: ",l.vehicle_class),f.default.createElement("h2",null,"Pilots"),f.default.createElement(o.List,{urls:l.pilots,items:a,pageName:"character-summary",route:t}),f.default.createElement("h2",null,"Films"),f.default.createElement(o.List,{urls:l.films,items:n,field:"title",pageName:"film-summary",route:t})):f.default.createElement(p.default,null)}}]),t}(c.PureComponent);E.displayName="VehiclePageSync",t.default=v,t.VehiclePage=v,t.VehiclePageSync=E},151:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var a,n=l(10),u=(a=n)&&a.__esModule?a:{default:a};function r(e){var t=e.route,l=e.urls,a=e.items,n=e.field,r=e.pageName;return l&&("string"==typeof l&&(l=[l],a=[a]),a=l.map(function(e,t){var l=a?a[t]:null;return l||(l={url:e,pending:!0}),l})),a?0===a.length?u.default.createElement("ul",{className:"empty"},u.default.createElement("li",null,u.default.createElement("span",null,"none"))):u.default.createElement("ul",null,a.map(function(e){var l=t.extractID(e.url),a=t.find(r,{id:l}),i=e.pending?"...":e[n],d={href:a,className:e.pending?"pending":void 0};return u.default.createElement("li",{key:l},u.default.createElement("a",d,i))})):null}r.defaultProps={field:"name"},r.displayName="List",t.default=r,t.List=r},152:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var a,n=l(10),u=(a=n)&&a.__esModule?a:{default:a};function r(){return u.default.createElement("div",{className:"loading"},u.default.createElement("div",null,u.default.createElement("i",{className:"fab fa-empire fa-spin"})," Loading"))}r.displayName="Loading",t.default=r,t.Loading=r}};