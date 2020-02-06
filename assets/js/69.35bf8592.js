(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{247:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[e._v("#")]),e._v(" Props")]),e._v(" "),a("p",[e._v("We also introduce a Props component, which is provides users with a convenient mechanism for displaying each property of a particular data item. In fact, when you inspect a single weather alert via the click handler described in the List component, you will see the individual weather alert displayed using the Props component. It provides a detailed summary of the alert itself.")]),e._v(" "),a("p",[e._v("The interface for instantiating a Props component is detailed below.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("data")]),e._v(" -- the single data item being rendered")]),e._v(" "),a("li",[a("code",[e._v("style")]),e._v(" -- display style, either plain, dash, or table")]),e._v(" "),a("li",[a("code",[e._v("props")]),e._v(" -- list of lists, detailing which title and properties to use (similar to Table)")])]),e._v(" "),a("p",[e._v("Note that setting style to table creates a tabular representation for the data item. Note that Table is used for collections, while Props can provide a tabular view for a single item.")]),e._v(" "),a("p",[e._v("Here is the Props component for a given weather alert. You can note that this interface follows similar conventions to those already detailed above.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('React.createElement Props,\n    data: alert\n    style: "plain"\n    props: [\n        ["Area", "area_name"]\n        ["State", "st_name"]\n        ["Country", "cntry_name"]\n        ["Phenomena", "phenomena"]\n        ["Event", "event_desc"]\n        ["Certainty", "certainty"]\n        ["Class", "class"]\n        ["Severity", "severity"]\n        ["Expire", "expire_time_gmt", renderDate]\n        ["Response", "response_types", (types) -> _(types).map(({response_type:type}) -> type).join(", ")]\n        ["Categories", "categories", (xs) -> _(xs).map(({category:x}) -> x).join(", ")]\n        ["Office", "office_name"]\n        ["Source", "source", (x) -> x.replace(/\\./g, \' \')]\n        ["Latitude", "lat"]\n        ["Longitude", "lon"]\n    ]\n')])])])])}],!1,null,null,null);t.default=s.exports}}]);