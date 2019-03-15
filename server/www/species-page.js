(window.webpackJsonp=window.webpackJsonp||[]).push([["species-page"],{147:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SpeciesPageSync=t.SpeciesPage=t.default=void 0;var l=h(a(39)),n=h(a(40)),u=h(a(64)),r=h(a(23)),i=h(a(24)),s=h(a(65)),d=h(a(66)),c=a(10),f=h(c),o=a(41),m=a(152),p=h(a(153));function h(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,i.default)(t,[{key:"renderAsync",value:function(){var e=(0,n.default)(l.default.mark(function e(t){var a,n,u,r;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props,n=a.route,u=a.swapi,r={route:n},t.show(f.default.createElement(g,r)),e.next=5,u.fetchOne("/species/"+n.params.id+"/");case 5:return r.species=e.sent,t.show(f.default.createElement(g,r)),e.next=9,u.fetchMultiple(r.species.films,{minimum:"60%"});case 9:return r.films=e.sent,t.show(f.default.createElement(g,r)),e.next=13,u.fetchMultiple(r.species.people,{minimum:"60%"});case 13:return r.people=e.sent,t.show(f.default.createElement(g,r)),e.next=17,u.fetchOne(r.species.homeworld);case 17:return r.homeworld=e.sent,e.abrupt("return",f.default.createElement(g,r));case 19:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(o.AsyncComponent);v.displayName="SpeciesPage";var g=function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.route,a=e.species,l=e.homeworld,n=e.people,u=e.films;return a?f.default.createElement("div",{className:"character-page"},f.default.createElement("h1",null,a.name),f.default.createElement("div",null,"Classification: ",a.classification),f.default.createElement("div",null,"Designation: ",a.designation),f.default.createElement("div",null,"Average height: ",a.average_height),f.default.createElement("div",null,"Skin colors: ",a.skin_colors),f.default.createElement("div",null,"Hair colors: ",a.hair_colors),f.default.createElement("div",null,"Eye colors: ",a.eye_colors),f.default.createElement("div",null,"Average lifespan: ",a.average_lifespan),f.default.createElement("div",null,"Language: ",a.language),f.default.createElement("h2",null,"Homeworld"),f.default.createElement(m.List,{urls:a.homeworld,items:l,pageName:"planet-summary",route:t}),f.default.createElement("h2",null,"Members"),f.default.createElement(m.List,{urls:a.people,items:n,pageName:"character-summary",route:t}),f.default.createElement("h2",null,"Films"),f.default.createElement(m.List,{urls:a.films,items:u,field:"title",pageName:"film-summary",route:t})):f.default.createElement(p.default,null)}}]),t}(c.PureComponent);g.displayName="SpeciesPageSync",t.default=v,t.SpeciesPage=v,t.SpeciesPageSync=g},152:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var l,n=a(10),u=(l=n)&&l.__esModule?l:{default:l};function r(e){var t=e.route,a=e.urls,l=e.items,n=e.field,r=e.pageName;return a&&("string"==typeof a&&(a=[a],l=[l]),l=a.map(function(e,t){var a=l?l[t]:null;return a||(a={url:e,pending:!0}),a})),l?0===l.length?u.default.createElement("ul",{className:"empty"},u.default.createElement("li",null,u.default.createElement("span",null,"none"))):u.default.createElement("ul",null,l.map(function(e){var a=t.extractID(e.url),l=t.find(r,{id:a}),i=e.pending?"...":e[n],s={href:l,className:e.pending?"pending":void 0};return u.default.createElement("li",{key:a},u.default.createElement("a",s,i))})):null}r.defaultProps={field:"name"},r.displayName="List",t.default=r,t.List=r},153:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var l,n=a(10),u=(l=n)&&l.__esModule?l:{default:l};function r(){return u.default.createElement("div",{className:"loading"},u.default.createElement("div",null,u.default.createElement("i",{className:"fab fa-empire fa-spin"})," Loading"))}r.displayName="Loading",t.default=r,t.Loading=r}}]);