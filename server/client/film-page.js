exports.ids=["film-page"],exports.modules={134:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FilmPageSync=t.FilmPage=t.default=void 0;var s=d(a(39)),l=d(a(40)),r=d(a(63)),n=d(a(23)),i=d(a(24)),u=d(a(64)),h=d(a(65)),c=a(10),p=a(41),o=a(145),m=d(a(146));function d(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return(0,n.default)(this,t),(0,u.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,i.default)(t,[{key:"renderAsync",value:function(){var e=(0,l.default)(s.default.mark(function e(t){var a,l,r,n;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props,l=a.route,r=a.swapi,n={route:l},t.show((0,c.h)(v,n)),e.next=5,r.fetchOne("/films/"+l.params.id+"/");case 5:return n.film=e.sent,t.show((0,c.h)(v,n)),e.next=9,r.fetchMultiple(n.film.characters,{minimum:5});case 9:return n.characters=e.sent,t.show((0,c.h)(v,n)),e.next=13,r.fetchMultiple(n.film.species,{minimum:"60%"});case 13:return n.species=e.sent,t.show((0,c.h)(v,n)),e.next=17,r.fetchMultiple(n.film.planets);case 17:return n.planets=e.sent,t.show((0,c.h)(v,n)),e.next=21,r.fetchMultiple(n.film.vehicles,{minimum:"60%"});case 21:return n.vehicles=e.sent,t.show((0,c.h)(v,n)),e.next=25,r.fetchMultiple(n.film.starships,{minimum:"60%"});case 25:return n.starships=e.sent,e.abrupt("return",(0,c.h)(v,n));case 27:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(p.AsyncComponent);f.displayName="FilmPage";var v=function(e){function t(){return(0,n.default)(this,t),(0,u.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.route,a=e.film,s=e.characters,l=e.species,r=e.planets,n=e.vehicles,i=e.starships;return a?(0,c.h)("div",{className:"character-page"},(0,c.h)("h1",null,a.title),(0,c.h)("p",null,a.opening_crawl),(0,c.h)("div",null,"Director: ",a.director),(0,c.h)("div",null,"Producer: ",a.producer),(0,c.h)("div",null,"Release date: ",a.release_date),(0,c.h)("h2",null,"Characters"),(0,c.h)(o.List,{urls:a.characters,items:s,pageName:"character-summary",route:t}),(0,c.h)("h2",null,"Species"),(0,c.h)(o.List,{urls:a.species,items:l,pageName:"species-summary",route:t}),(0,c.h)("h2",null,"Planets"),(0,c.h)(o.List,{urls:a.planets,items:r,pageName:"planet-summary",route:t}),(0,c.h)("h2",null,"Vehicles"),(0,c.h)(o.List,{urls:a.vehicles,items:n,pageName:"vehicle-summary",route:t}),(0,c.h)("h2",null,"Starships"),(0,c.h)(o.List,{urls:a.starships,items:i,pageName:"starship-summary",route:t})):(0,c.h)(m.default,null)}}]),t}(c.Component);v.displayName="FilmPageSync",t.default=f,t.FilmPage=f,t.FilmPageSync=v},145:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var s=a(10);function l(e){var t=e.route,a=e.urls,l=e.items,r=e.field,n=e.pageName;return a&&("string"==typeof a&&(a=[a],l=[l]),l=a.map(function(e,t){var a=l?l[t]:null;return a||(a={url:e,pending:!0}),a})),l?0===l.length?(0,s.h)("ul",{className:"empty"},(0,s.h)("li",null,(0,s.h)("span",null,"none"))):(0,s.h)("ul",null,l.map(function(e){var a=t.extractID(e.url),l=t.find(n,{id:a}),i=e.pending?"...":e[r],u={href:l,className:e.pending?"pending":void 0};return(0,s.h)("li",null,(0,s.h)("a",u,i))})):null}l.defaultProps={field:"name"},l.displayName="List",t.default=l,t.List=l},146:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var s=a(10);function l(){return(0,s.h)("div",{className:"loading"},(0,s.h)("div",null,(0,s.h)("i",{className:"fab fa-empire fa-spin"})," Loading"))}l.displayName="Loading",t.default=l,t.Loading=l}};