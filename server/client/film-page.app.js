exports.ids=["film-page"],exports.modules={"./pages/film-page.jsx":function(e,t,s){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.FilmPageSync=t.FilmPage=t.default=void 0;var a=s("../node_modules/babel-runtime/regenerator/index.js"),r=l(a),n=s("../node_modules/babel-runtime/helpers/asyncToGenerator.js"),i=l(n),u=s("../node_modules/babel-runtime/core-js/object/get-prototype-of.js"),o=l(u),d=s("../node_modules/babel-runtime/helpers/classCallCheck.js"),c=l(d),p=s("../node_modules/babel-runtime/helpers/createClass.js"),h=l(p),m=s("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),f=l(m),g=s("../node_modules/babel-runtime/helpers/inherits.js"),v=l(g),_=s("../node_modules/preact/dist/preact.esm.js"),y=s("../node_modules/relaks/preact.js"),b=s("./widgets/list.jsx"),j=s("./widgets/loading.jsx"),x=l(j),N=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,h.default)(t,[{key:"renderAsync",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,i.default)(r.default.mark(function e(t){var s,l,a,n;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=this.props,l=s.route,a=s.swapi,n={route:l},t.show((0,_.h)(w,n)),e.next=5,a.fetchOne("/films/"+l.params.id+"/");case 5:return n.film=e.sent,t.show((0,_.h)(w,n)),e.next=9,a.fetchMultiple(n.film.characters,{minimum:5});case 9:return n.characters=e.sent,t.show((0,_.h)(w,n)),e.next=13,a.fetchMultiple(n.film.species,{minimum:"60%"});case 13:return n.species=e.sent,t.show((0,_.h)(w,n)),e.next=17,a.fetchMultiple(n.film.planets);case 17:return n.planets=e.sent,t.show((0,_.h)(w,n)),e.next=21,a.fetchMultiple(n.film.vehicles,{minimum:"60%"});case 21:return n.vehicles=e.sent,t.show((0,_.h)(w,n)),e.next=25,a.fetchMultiple(n.film.starships,{minimum:"60%"});case 25:return n.starships=e.sent,e.abrupt("return",(0,_.h)(w,n));case 27:case"end":return e.stop()}},e,this)}));return e}()}]),t}(y.AsyncComponent);N.displayName="FilmPage";var w=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,h.default)(t,[{key:"render",value:function(){var e=this.props,t=e.route,s=e.film,l=e.characters,a=e.species,r=e.planets,n=e.vehicles,i=e.starships;return s?(0,_.h)("div",{className:"character-page"},(0,_.h)("h1",null,s.title),(0,_.h)("p",null,s.opening_crawl),(0,_.h)("div",null,"Director: ",s.director),(0,_.h)("div",null,"Producer: ",s.producer),(0,_.h)("div",null,"Release date: ",s.release_date),(0,_.h)("h2",null,"Characters"),(0,_.h)(b.List,{urls:s.characters,items:l,pageName:"character-summary",route:t}),(0,_.h)("h2",null,"Species"),(0,_.h)(b.List,{urls:s.species,items:a,pageName:"species-summary",route:t}),(0,_.h)("h2",null,"Planets"),(0,_.h)(b.List,{urls:s.planets,items:r,pageName:"planet-summary",route:t}),(0,_.h)("h2",null,"Vehicles"),(0,_.h)(b.List,{urls:s.vehicles,items:n,pageName:"vehicle-summary",route:t}),(0,_.h)("h2",null,"Starships"),(0,_.h)(b.List,{urls:s.starships,items:i,pageName:"starship-summary",route:t})):(0,_.h)(x.default,null)}}]),t}(_.Component);w.displayName="FilmPageSync",t.default=N,t.FilmPage=N,t.FilmPageSync=w},"./widgets/list.jsx":function(e,t,s){"use strict";function l(e){var t=e.route,s=e.urls,l=e.items,r=e.field,n=e.pageName;return s&&("string"==typeof s&&(s=[s],l=[l]),l=s.map(function(e,t){var s=l?l[t]:null;return s||(s={url:e,pending:!0}),s})),l?0===l.length?(0,a.h)("ul",{className:"empty"},(0,a.h)("li",null,(0,a.h)("span",null,"none"))):(0,a.h)("ul",null,l.map(function(e){var s=t.extractID(e.url),l=t.find(n,{id:s}),i=e.pending?"...":e[r],u={href:l,className:e.pending?"pending":void 0};return(0,a.h)("li",null,(0,a.h)("a",u,i))})):null}Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var a=s("../node_modules/preact/dist/preact.esm.js");l.defaultProps={field:"name"},l.displayName="List",t.default=l,t.List=l},"./widgets/loading.jsx":function(e,t,s){"use strict";function l(){return(0,a.h)("div",{className:"loading"},(0,a.h)("div",null,(0,a.h)("i",{className:"fab fa-empire fa-spin"})," Loading"))}Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var a=s("../node_modules/preact/dist/preact.esm.js");l.displayName="Loading",t.default=l,t.Loading=l}};