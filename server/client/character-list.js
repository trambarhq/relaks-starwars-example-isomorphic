exports.ids=["character-list"],exports.modules={140:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CharacterListSync=t.CharacterList=t.default=void 0;var r=h(a(39)),n=h(a(40)),l=h(a(64)),u=h(a(23)),i=h(a(24)),d=h(a(65)),f=h(a(66)),s=a(10),c=h(s),o=a(41),p=h(a(150)),m=h(a(151));function h(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(){return(0,u.default)(this,t),(0,d.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,i.default)(t,[{key:"renderAsync",value:function(){var e=(0,n.default)(r.default.mark(function e(t){var a,n,l,u;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props,n=a.route,l=a.swapi,u={route:n},t.show(c.default.createElement(y,u)),e.next=5,l.fetchList("/people/");case 5:return u.people=e.sent,u.people.more(),e.abrupt("return",c.default.createElement(y,u));case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(o.AsyncComponent);v.displayName="CharacterList";var y=function(e){function t(){return(0,u.default)(this,t),(0,d.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.people,a=e.route;if(!t)return c.default.createElement(m.default,null);var r={items:t,field:"name",pageName:"character-summary",route:a};return c.default.createElement("div",null,c.default.createElement("h1",null,"Characters"),c.default.createElement(p.default,r))}}]),t}(s.PureComponent);y.displayName="CharacterListSync",t.default=v,t.CharacterList=v,t.CharacterListSync=y},150:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var r,n=a(10),l=(r=n)&&r.__esModule?r:{default:r};function u(e){var t=e.route,a=e.urls,r=e.items,n=e.field,u=e.pageName;return a&&("string"==typeof a&&(a=[a],r=[r]),r=a.map(function(e,t){var a=r?r[t]:null;return a||(a={url:e,pending:!0}),a})),r?0===r.length?l.default.createElement("ul",{className:"empty"},l.default.createElement("li",null,l.default.createElement("span",null,"none"))):l.default.createElement("ul",null,r.map(function(e){var a=t.extractID(e.url),r=t.find(u,{id:a}),i=e.pending?"...":e[n],d={href:r,className:e.pending?"pending":void 0};return l.default.createElement("li",{key:a},l.default.createElement("a",d,i))})):null}u.defaultProps={field:"name"},u.displayName="List",t.default=u,t.List=u},151:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var r,n=a(10),l=(r=n)&&r.__esModule?r:{default:r};function u(){return l.default.createElement("div",{className:"loading"},l.default.createElement("div",null,l.default.createElement("i",{className:"fab fa-empire fa-spin"})," Loading"))}u.displayName="Loading",t.default=u,t.Loading=u}};
//# sourceMappingURL=character-list.js.map