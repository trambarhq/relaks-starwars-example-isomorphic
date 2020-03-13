exports.ids=["planet-list"],exports.modules={137:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PlanetListSync=t.PlanetList=t.default=void 0;var a=h(n(39)),u=h(n(40)),l=h(n(63)),r=h(n(23)),i=h(n(24)),s=h(n(64)),d=h(n(65)),o=n(10),f=n(41),p=h(n(145)),c=h(n(146));function h(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,i.default)(t,[{key:"renderAsync",value:function(){var e=(0,u.default)(a.default.mark(function e(t){var n,u,l,r;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props,u=n.route,l=n.swapi,r={route:u},t.show((0,o.h)(m,r)),e.next=5,l.fetchList("/planets/");case 5:return r.planets=e.sent,r.planets.more(),e.abrupt("return",(0,o.h)(m,r));case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(f.AsyncComponent);v.displayName="PlanetList";var m=function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.planets,n=e.route;if(!t)return(0,o.h)(c.default,null);var a={items:t,pageName:"planet-summary",route:n};return(0,o.h)("div",null,(0,o.h)("h1",null,"Planets"),(0,o.h)(p.default,a))}}]),t}(o.Component);m.displayName="PlanetListSync",t.default=v,t.PlanetList=v,t.PlanetListSync=m},145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var a=n(10);function u(e){var t=e.route,n=e.urls,u=e.items,l=e.field,r=e.pageName;return n&&("string"==typeof n&&(n=[n],u=[u]),u=n.map(function(e,t){var n=u?u[t]:null;return n||(n={url:e,pending:!0}),n})),u?0===u.length?(0,a.h)("ul",{className:"empty"},(0,a.h)("li",null,(0,a.h)("span",null,"none"))):(0,a.h)("ul",null,u.map(function(e){var n=t.extractID(e.url),u=t.find(r,{id:n}),i=e.pending?"...":e[l],s={href:u,className:e.pending?"pending":void 0};return(0,a.h)("li",null,(0,a.h)("a",s,i))})):null}u.defaultProps={field:"name"},u.displayName="List",t.default=u,t.List=u},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var a=n(10);function u(){return(0,a.h)("div",{className:"loading"},(0,a.h)("div",null,(0,a.h)("i",{className:"fab fa-empire fa-spin"})," Loading"))}u.displayName="Loading",t.default=u,t.Loading=u}};