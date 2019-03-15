exports.ids=["character-page"],exports.modules={142:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CharacterPageSync=t.CharacterPage=t.default=void 0;var l=h(a(39)),r=h(a(40)),n=h(a(64)),u=h(a(23)),s=h(a(24)),i=h(a(65)),c=h(a(66)),d=a(10),m=h(d),o=a(41),f=a(151),p=h(a(152));function h(e){return e&&e.__esModule?e:{default:e}}var E=function(e){function t(){return(0,u.default)(this,t),(0,i.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,s.default)(t,[{key:"renderAsync",value:function(){var e=(0,r.default)(l.default.mark(function e(t){var a,r,n,u;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props,r=a.route,n=a.swapi,u={route:r},t.show(m.default.createElement(v,u)),e.next=5,n.fetchOne("/people/"+r.params.id+"/");case 5:return u.person=e.sent,t.show(m.default.createElement(v,u)),e.next=9,n.fetchMultiple(u.person.films,{minimum:"60%"});case 9:return u.films=e.sent,t.show(m.default.createElement(v,u)),e.next=13,n.fetchMultiple(u.person.species,{minimum:"60%"});case 13:return u.species=e.sent,t.show(m.default.createElement(v,u)),e.next=17,n.fetchOne(u.person.homeworld);case 17:return u.homeworld=e.sent,t.show(m.default.createElement(v,u)),e.next=21,n.fetchMultiple(u.person.vehicles,{minimum:"60%"});case 21:return u.vehicles=e.sent,t.show(m.default.createElement(v,u)),e.next=25,n.fetchMultiple(u.person.starships,{minimum:"60%"});case 25:return u.starships=e.sent,t.show(m.default.createElement(v,u)),e.abrupt("return",m.default.createElement(v,u));case 28:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(o.AsyncComponent);E.displayName="CharacterPage";var v=function(e){function t(){return(0,u.default)(this,t),(0,i.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.route,a=e.person,l=e.homeworld,r=e.films,n=e.species,u=e.vehicles,s=e.starships;return a?m.default.createElement("div",{className:"character-page"},m.default.createElement("h1",null,a.name),m.default.createElement("div",null,"Height: ",a.height," cm"),m.default.createElement("div",null,"Mass: ",a.mass," kg"),m.default.createElement("div",null,"Hair color: ",a.hair_color),m.default.createElement("div",null,"Skin color: ",a.skin_color),m.default.createElement("div",null,"Hair color: ",a.hair_color),m.default.createElement("div",null,"Eye color: ",a.eye_color),m.default.createElement("div",null,"Birth year: ",a.birth_year),m.default.createElement("h2",null,"Homeworld"),m.default.createElement(f.List,{urls:a.homeworld,items:l,pageName:"planet-summary",route:t}),m.default.createElement("h2",null,"Films"),m.default.createElement(f.List,{urls:a.films,items:r,field:"title",pageName:"film-summary",route:t}),m.default.createElement("h2",null,"Species"),m.default.createElement(f.List,{urls:a.species,items:n,pageName:"species-summary",route:t}),m.default.createElement("h2",null,"Vehicles"),m.default.createElement(f.List,{urls:a.vehicles,items:u,pageName:"vehicle-summary",route:t}),m.default.createElement("h2",null,"Starships"),m.default.createElement(f.List,{urls:a.starships,items:s,pageName:"starship-summary",route:t})):m.default.createElement(p.default,null)}}]),t}(d.PureComponent);v.displayName="CharacterPageSync",t.default=E,t.CharacterPage=E,t.CharacterPageSync=v},151:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var l,r=a(10),n=(l=r)&&l.__esModule?l:{default:l};function u(e){var t=e.route,a=e.urls,l=e.items,r=e.field,u=e.pageName;return a&&("string"==typeof a&&(a=[a],l=[l]),l=a.map(function(e,t){var a=l?l[t]:null;return a||(a={url:e,pending:!0}),a})),l?0===l.length?n.default.createElement("ul",{className:"empty"},n.default.createElement("li",null,n.default.createElement("span",null,"none"))):n.default.createElement("ul",null,l.map(function(e){var a=t.extractID(e.url),l=t.find(u,{id:a}),s=e.pending?"...":e[r],i={href:l,className:e.pending?"pending":void 0};return n.default.createElement("li",{key:a},n.default.createElement("a",i,s))})):null}u.defaultProps={field:"name"},u.displayName="List",t.default=u,t.List=u},152:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var l,r=a(10),n=(l=r)&&l.__esModule?l:{default:l};function u(){return n.default.createElement("div",{className:"loading"},n.default.createElement("div",null,n.default.createElement("i",{className:"fab fa-empire fa-spin"})," Loading"))}u.displayName="Loading",t.default=u,t.Loading=u}};