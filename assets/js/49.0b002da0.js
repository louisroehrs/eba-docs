(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{225:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("The assets tab within EBA provides developers a mechanism to create reusable code which can be leveraged across all actions as well as to implement client side renderers for their data. Consequently, we support two types of assets within the dev lab, viz. backend assets and frontend assets.")]),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("It is common in the course of building an agent that certain routines and api calls will be repeated across different actions. In an effort to prevent duplication and promote more modular code, EBA allows developers to create backend assets which can be imported as modules within an action. These assets should export a set of functions and objects which are intended to be reused. Likewise, these assets can import any modules loaded in their particular envionrment, e.g. an http request client. In the case of javascript, these assets are bundled together at runtime and can be imported as local files. For instance, consider a backend asset named 'api-client.js' containing the following code:")]),e._v(" "),e._m(2),e._m(3),e._v(" "),e._m(4),e._m(5),e._v(" "),s("p",[e._v("EBA enables data visualizations directly within agents. As each agent can introduce its own conceptual domain understanding and produce data for its particular ontology, it can likewise visual its own data. Custom visualization components and styles can be added by developers within our development lab to render their data in any way they choose to. These are added under the 'Assets' tab within the dev lab and denoted as 'frontend' assets. We support jsx, javascript, coffeescript, css, sccs, sass files as frontend assets. Live examples of such assets can be viewed from shared agents, e.g. the Weather agent. Below we detail the environment provided to agent developers on the client side.")]),e._v(" "),s("p",[e._v("For full details on data visualizations please consult our "),s("router-link",{attrs:{to:"./assets/Frontend.html"}},[e._v("frontend docs")])],1)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"assets-tab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#assets-tab","aria-hidden":"true"}},[this._v("#")]),this._v(" Assets tab")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"backend-assets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backend-assets","aria-hidden":"true"}},[this._v("#")]),this._v(" Backend assets")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("const rp = require('request-promise-native')\n\nconst getEntities = (entity, secrets) => {\n   // construct some api options\n   const data = await rp(someApiOptions)\n   return data\n}\n\nmodule.exports.getEntities = getEntities\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This module imports the 'request-promise-native' module which is provided OOB by OpenWhisk for the Node.js runtime. It then\nexports a function called "),t("code",[this._v("getEntities")]),this._v(", which can be reused across our actions for different entities, e.g. sales orders, shipments, etc. Within a semantic action, we can import and use this exposed functionality.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("const eba    = require('eba')\nconst client = require('./api-client.js')\n\nmodule.exports.main = async (params) => {\n   // some code ...\n   const entities = await client.getEntities('shipments', params.secrets)\n   // some code...\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frontend-assets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontend-assets","aria-hidden":"true"}},[this._v("#")]),this._v(" Frontend assets")])}],!1,null,null,null);t.default=n.exports}}]);