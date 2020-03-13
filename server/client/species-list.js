exports.ids=["species-list"],exports.modules={139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SpeciesListSync=t.SpeciesList=t.default=void 0;var i=h(n(39)),u=h(n(40)),r=h(n(63)),s=h(n(23)),a=h(n(24)),l=h(n(64)),d=h(n(65)),o=n(10),p=n(41),f=h(n(145)),c=h(n(146));function h(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(){return(0,s.default)(this,t),(0,l.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,a.default)(t,[{key:"renderAsync",value:function(){var e=(0,u.default)(i.default.mark(function e(t){var n,u,r,s;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props,u=n.route,r=n.swapi,s={route:u},t.show((0,o.h)(m,s)),e.next=5,r.fetchList("/species/");case 5:return s.species=e.sent,s.species.more(),e.abrupt("return",(0,o.h)(m,s));case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(p.AsyncComponent);v.displayName="SpeciesList";var m=function(e){function t(){return(0,s.default)(this,t),(0,l.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e=this.props,t=e.species,n=e.route;if(!t)return(0,o.h)(c.default,null);var i={items:t,pageName:"species-summary",route:n};return(0,o.h)("div",null,(0,o.h)("h1",null,"Species"),(0,o.h)(f.default,i))}}]),t}(o.Component);m.displayName="SpeciesListSync",t.default=v,t.SpeciesList=v,t.SpeciesListSync=m},145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var i=n(10);function u(e){var t=e.route,n=e.urls,u=e.items,r=e.field,s=e.pageName;return n&&("string"==typeof n&&(n=[n],u=[u]),u=n.map(function(e,t){var n=u?u[t]:null;return n||(n={url:e,pending:!0}),n})),u?0===u.length?(0,i.h)("ul",{className:"empty"},(0,i.h)("li",null,(0,i.h)("span",null,"none"))):(0,i.h)("ul",null,u.map(function(e){var n=t.extractID(e.url),u=t.find(s,{id:n}),a=e.pending?"...":e[r],l={href:u,className:e.pending?"pending":void 0};return(0,i.h)("li",null,(0,i.h)("a",l,a))})):null}u.defaultProps={field:"name"},u.displayName="List",t.default=u,t.List=u},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var i=n(10);function u(){return(0,i.h)("div",{className:"loading"},(0,i.h)("div",null,(0,i.h)("i",{className:"fab fa-empire fa-spin"})," Loading"))}u.displayName="Loading",t.default=u,t.Loading=u}};