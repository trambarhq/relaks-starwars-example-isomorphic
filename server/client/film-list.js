exports.ids=["film-list"],exports.modules={133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FilmListSync=t.FilmList=t.default=void 0;var u=m(n(39)),i=m(n(40)),l=m(n(63)),a=m(n(23)),r=m(n(24)),s=m(n(64)),d=m(n(65)),f=n(10),o=n(41),p=m(n(145)),c=m(n(146));function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(){return(0,a.default)(this,t),(0,s.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,r.default)(t,[{key:"renderAsync",value:function(){var e=(0,i.default)(u.default.mark(function e(t){var n,i,l,a;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props,i=n.route,l=n.swapi,a={route:i},t.show((0,f.h)(v,a)),e.next=5,l.fetchList("/films/");case 5:return a.planets=e.sent,a.planets.more(),e.abrupt("return",(0,f.h)(v,a));case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(o.AsyncComponent);h.displayName="FilmList";var v=function(e){function t(){return(0,a.default)(this,t),(0,s.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.planets,n=e.route;if(!t)return(0,f.h)(c.default,null);var u={items:t,field:"title",pageName:"film-summary",route:n};return(0,f.h)("div",null,(0,f.h)("h1",null,"Films"),(0,f.h)(p.default,u))}}]),t}(f.Component);v.displayName="FilmListSync",t.default=h,t.FilmList=h,t.FilmListSync=v},145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var u=n(10);function i(e){var t=e.route,n=e.urls,i=e.items,l=e.field,a=e.pageName;return n&&("string"==typeof n&&(n=[n],i=[i]),i=n.map(function(e,t){var n=i?i[t]:null;return n||(n={url:e,pending:!0}),n})),i?0===i.length?(0,u.h)("ul",{className:"empty"},(0,u.h)("li",null,(0,u.h)("span",null,"none"))):(0,u.h)("ul",null,i.map(function(e){var n=t.extractID(e.url),i=t.find(a,{id:n}),r=e.pending?"...":e[l],s={href:i,className:e.pending?"pending":void 0};return(0,u.h)("li",null,(0,u.h)("a",s,r))})):null}i.defaultProps={field:"name"},i.displayName="List",t.default=i,t.List=i},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var u=n(10);function i(){return(0,u.h)("div",{className:"loading"},(0,u.h)("div",null,(0,u.h)("i",{className:"fab fa-empire fa-spin"})," Loading"))}i.displayName="Loading",t.default=i,t.Loading=i}};