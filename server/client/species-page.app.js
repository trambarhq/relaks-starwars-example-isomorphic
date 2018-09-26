exports.ids=["species-page"],exports.modules={"./pages/species-page.jsx":function(e,s,l){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(s,"__esModule",{value:!0}),s.SpeciesPageSync=s.SpeciesPage=s.default=void 0;var n=l("../node_modules/babel-runtime/regenerator/index.js"),a=t(n),r=l("../node_modules/babel-runtime/helpers/asyncToGenerator.js"),i=t(r),u=l("../node_modules/babel-runtime/core-js/object/get-prototype-of.js"),o=t(u),d=l("../node_modules/babel-runtime/helpers/classCallCheck.js"),p=t(d),c=l("../node_modules/babel-runtime/helpers/createClass.js"),h=t(c),m=l("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),f=t(m),g=l("../node_modules/babel-runtime/helpers/inherits.js"),v=t(g),_=l("../node_modules/preact/dist/preact.esm.js"),y=l("../node_modules/relaks/preact.js"),b=l("./widgets/list.jsx"),j=l("./widgets/loading.jsx"),w=t(j),x=function(e){function s(){return(0,p.default)(this,s),(0,f.default)(this,(s.__proto__||(0,o.default)(s)).apply(this,arguments))}return(0,v.default)(s,e),(0,h.default)(s,[{key:"renderAsync",value:function(){function e(e){return s.apply(this,arguments)}var s=(0,i.default)(a.default.mark(function e(s){var l,t,n,r;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l=this.props,t=l.route,n=l.swapi,r={species:null,films:null,people:null,homeworld:null,route:t},s.show((0,_.h)(N,r)),e.next=5,n.fetchOne("/species/"+t.params.id+"/");case 5:return r.species=e.sent,s.show((0,_.h)(N,r)),e.next=9,n.fetchMultiple(r.species.films,{partial:.4});case 9:return r.films=e.sent,s.show((0,_.h)(N,r)),e.next=13,n.fetchMultiple(r.species.people,{partial:.4});case 13:return r.people=e.sent,s.show((0,_.h)(N,r)),e.next=17,n.fetchOne(r.species.homeworld);case 17:return r.homeworld=e.sent,e.abrupt("return",(0,_.h)(N,r));case 19:case"end":return e.stop()}},e,this)}));return e}()}]),s}(y.AsyncComponent);x.displayName="SpeciesPage";var N=function(e){function s(){return(0,p.default)(this,s),(0,f.default)(this,(s.__proto__||(0,o.default)(s)).apply(this,arguments))}return(0,v.default)(s,e),(0,h.default)(s,[{key:"render",value:function(){var e=this.props,s=e.route,l=e.species,t=e.homeworld,n=e.people,a=e.films;return l?(0,_.h)("div",{className:"character-page"},(0,_.h)("h1",null,l.name),(0,_.h)("div",null,"Classification: ",l.classification),(0,_.h)("div",null,"Designation: ",l.designation),(0,_.h)("div",null,"Average height: ",l.average_height),(0,_.h)("div",null,"Skin colors: ",l.skin_colors),(0,_.h)("div",null,"Hair colors: ",l.hair_colors),(0,_.h)("div",null,"Eye colors: ",l.eye_colors),(0,_.h)("div",null,"Average lifespan: ",l.average_lifespan),(0,_.h)("div",null,"Language: ",l.language),(0,_.h)("h2",null,"Homeworld"),(0,_.h)(b.List,{urls:l.homeworld,items:t,pageName:"planet-summary",route:s}),(0,_.h)("h2",null,"Members"),(0,_.h)(b.List,{urls:l.people,items:n,pageName:"character-summary",route:s}),(0,_.h)("h2",null,"Films"),(0,_.h)(b.List,{urls:l.films,items:a,field:"title",pageName:"film-summary",route:s})):(0,_.h)(w.default,null)}}]),s}(_.Component);N.displayName="SpeciesPageSync",s.default=x,s.SpeciesPage=x,s.SpeciesPageSync=N},"./widgets/list.jsx":function(e,s,l){"use strict";function t(e){var s=e.route,l=e.urls,t=e.items,a=e.field,r=e.pageName;return l&&("string"==typeof l?t=t?[t]:[{url:l,pending:!0}]:l instanceof Array&&(t=l.map(function(e,s){var l=t?t[s]:null;return l||(l={url:e,pending:!0}),l}))),t?0===t.length?(0,n.h)("ul",{className:"empty"},(0,n.h)("li",null,(0,n.h)("span",null,"none"))):(0,n.h)("ul",null,t.map(function(e){var l=s.extractID(e.url),t=s.find(r,{id:l}),i=e.pending?"...":e[a],u={href:t,className:e.pending?"pending":void 0};return(0,n.h)("li",null,(0,n.h)("a",u,i))})):null}Object.defineProperty(s,"__esModule",{value:!0}),s.List=s.default=void 0;var n=l("../node_modules/preact/dist/preact.esm.js");t.defaultProps={field:"name"},t.displayName="List",s.default=t,s.List=t},"./widgets/loading.jsx":function(e,s,l){"use strict";function t(){return(0,n.h)("div",{className:"loading"},(0,n.h)("div",null,(0,n.h)("i",{className:"fab fa-empire fa-spin"})," Loading"))}Object.defineProperty(s,"__esModule",{value:!0}),s.Loading=s.default=void 0;var n=l("../node_modules/preact/dist/preact.esm.js");t.displayName="Loading",s.default=t,s.Loading=t}};