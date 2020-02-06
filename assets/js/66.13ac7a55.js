(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{243:function(e,t,a){"use strict";a.r(t);var i=a(0),n=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"native-ui-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#native-ui-components","aria-hidden":"true"}},[e._v("#")]),e._v(" Native UI Components")]),e._v(" "),a("p",[e._v("Our team provides users with a few pre-built and configurable react components that are generic across any application domain. We intend the detail these components and their usage within this document. In particular, we support "),a("a",{attrs:{href:"#list"}},[e._v("List")]),e._v(", "),a("a",{attrs:{href:"#table"}},[e._v("Table")]),e._v(", and "),a("a",{attrs:{href:"#props"}},[e._v("Props")]),e._v(" components.")]),e._v(" "),a("h2",{attrs:{id:"list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list","aria-hidden":"true"}},[e._v("#")]),e._v(" List")]),e._v(" "),a("p",[e._v('We support an enhanced list component that provides size control, pagination, searchablity, as well as unified styles with our native application. The list component can be particularly useful for questions that produce large collections of data. A short inline description of each individual data item can be shown along with a link to view, in turn, a detailed summary of the particular item. Our weather agent provides a good example of this. Ask Watson "show me weather alerts in 94404". Each alert is displayed as a list item which contains a brief description of the alert along with its geo-location. If you are interested in a particular alert, simply click the link to view an alert summary. You will note that clicking the link actually generated a new question within our conversation. This is because we expose a '),a("code",[e._v("bridge.trigger")]),e._v(" function within our frontend assets which enables us post new questions to Watson. Lets review the interface for this component as well as an example.")]),e._v(" "),a("p",[e._v("To initialize a list component, you may provide the following initialization properties:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("items")]),e._v(" -- the list of data items to be rendered")]),e._v(" "),a("li",[a("code",[e._v("searchKeys")]),e._v(" -- the keys, i.e. the data fields, which are searchable for a given item")]),e._v(" "),a("li",[a("code",[e._v("title")]),e._v(" -- title heading of the list")]),e._v(" "),a("li",[a("code",[e._v("numbered")]),e._v(" -- boolean whether or not the list is numbered")]),e._v(" "),a("li",[e._v("rendering function -- either "),a("code",[e._v("render")]),e._v(" or "),a("code",[e._v("renderList")])])]),e._v(" "),a("p",[e._v("Note that we provide two options for rendering the list--rendering item-by-item or rendering the entire list at once. Accordingly, the "),a("code",[e._v("render")]),e._v(" function will receive as input an individual data item, while "),a("code",[e._v("renderList")]),e._v(" will receive the entire list as well as the search component.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('React.createElement List,\n    items: _.filter @props.data, ({severity}) => @state.severities[severity].checked\n    searchKeys: ["event_desc", "area_name", "st_name", "cntry_cd", "severity"]\n    renderList: (items, search) =>\n        search\n        R.h2 null, "Weather alerts"\n        R.div className:"cca-weather-alerts-severities",\n            # code for rendering severities selection panel\n        R.ul style:margin:0,\n            _.map items, (item) =>\n                R.li\n                    key: item.key\n                    R.span null,\n                        R.a\n                            href: "#"\n                            onClick: (e) =>\n                                e.preventDefault()\n                                bridge.trigger "ask", "tell me more about weather alert #{item.key}"\n                            item.event_desc\n                        " in "\n                        item.area_name\n                        ", "\n                        item.st_name || item.cntry_cd\n')])])]),a("p",[e._v("We see first that we are supplying only those items whose severity level is marked, using "),a("code",[e._v("_.filter")]),e._v(". Furthermore, we see that certain data fields of the alerts themselves are searchable within this component, e.g. event description. In this case, we are choosing the render the entire list at once. This is because we plan to render some other components before rendering the list, e.g. the search component, a header, and a severity selection panel. After words, we use a "),a("code",[e._v("_.map")]),e._v(" to print the list items programmatically. Lastly, observe that we attached a click handler which utilizes our "),a("code",[e._v("bridge.trigger")]),e._v(" function.")]),e._v(" "),a("h2",{attrs:{id:"table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table","aria-hidden":"true"}},[e._v("#")]),e._v(" Table")]),e._v(" "),a("p",[e._v("We support a configurable table component which introduces a number of useful features, e.g. searching, filtering, exporting to csv, column draggability, size control, pagination, etc. This component is quite suitable to be rendered in the content tab when you wish to display many data fields within a single item. It is also suitable for rendering within the chat panel itself in the case that you are only showing a limited subset of data fields, as space is limited in this context. The table component has a similar interface to the list component.")]),e._v(" "),a("p",[e._v("To intialize a list component, you may provide the following initialization properties:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("items")]),e._v(" -- the list of data items to be rendered")]),e._v(" "),a("li",[a("code",[e._v("searchKeys")]),e._v(" -- the keys, i.e. the data fields, which are searchable for a given item")]),e._v(" "),a("li",[a("code",[e._v("title")]),e._v(" -- title heading of the list")]),e._v(" "),a("li",[a("code",[e._v("columns")]),e._v(" -- list of lists, detailing which data fields of the items you wish to render.")])]),e._v(" "),a("p",[e._v("Note that columns lists within the "),a("code",[e._v("columns")]),e._v(' property are triples on the order of [title, fieldName, (optional) rendering function]. For example, ["Score", "score", renderDecimal] will display a column within the table with title \'Score\' and it will populate each entry within this column by accessing the data field named '),a("code",[e._v("score")]),e._v(". It will render this item by applying the renderDecimal function. Rendering functions are optional.")]),e._v(" "),a("p",[e._v("If we were to construct a tabular view of weather alerts, it might look something like the following:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('React.createElement Table,\n    title: R.h2 null, "Weather alerts"\n    items: @props.data\n    searchKeys: ["event_desc", "area_name", "st_name", "cntry_cd", "severity"]\n    columns: [\n        ["Area", "area_name"]\n        ["State", "st_name"]\n        ["Country", "cntry_name"]\n        ["Phenomena", "phenomena"]\n        ["Event", "event_desc"]\n        ["Certainty", "certainty"]\n        ["Class", "class"]\n        ["Severity", "severity"]\n        ["Expire", "expire_time_gmt", renderDate]\n        ["Response", "response_types", (types) -> _(types).map(({response_type:type}) -> type).join(", ")]\n        ["Categories", "categories", (xs) -> _(xs).map(({category:x}) -> x).join(", ")]\n        ["Office", "office_name"]\n        ["Source", "source", (x) -> x.replace(/\\./g, \' \')]\n        ["Latitude", "lat"]\n        ["Longitude", "lon"]\n    ]\n\n')])])]),a("h2",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[e._v("#")]),e._v(" Props")]),e._v(" "),a("p",[e._v("We also introduce a Props component, which is provides users with a convenient mechanism for displaying each property of a particular data item. In fact, when you inspect a single weather alert via the click handler described in the List component, you will see the individual weather alert displayed using the Props component. It provides a detailed summary of the alert itself.")]),e._v(" "),a("p",[e._v("The interface for instantiating a Props component is detailed below.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("data")]),e._v(" -- the single data item being rendered")]),e._v(" "),a("li",[a("code",[e._v("style")]),e._v(" -- display style, either plain, dash, or table")]),e._v(" "),a("li",[a("code",[e._v("props")]),e._v(" -- list of lists, detailing which title and properties to use (similar to Table)")])]),e._v(" "),a("p",[e._v("Note that setting style to table creates a tabular representation for the data item. Note that Table is used for collections, while Props can provide a tabular view for a single item.")]),e._v(" "),a("p",[e._v("Here is the Props component for a given weather alert. You can note that this interface follows similar conventions to those already detailed above.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('React.createElement Props,\n    data: @props.data.alertDetails\n    style: "plain"\n    props: [\n        ["Area", "area_name"]\n        ["State", "st_name"]\n        ["Country", "cntry_name"]\n        ["Phenomena", "phenomena"]\n        ["Event", "event_desc"]\n        ["Certainty", "certainty"]\n        ["Class", "class"]\n        ["Severity", "severity"]\n        ["Expire", "expire_time_gmt", renderDate]\n        ["Response", "response_types", (types) -> _(types).map(({response_type:type}) -> type).join(", ")]\n        ["Categories", "categories", (xs) -> _(xs).map(({category:x}) -> x).join(", ")]\n        ["Office", "office_name"]\n        ["Source", "source", (x) -> x.replace(/\\./g, \' \')]\n        ["Latitude", "lat"]\n        ["Longitude", "lon"]\n    ]\n')])])])])}],!1,null,null,null);t.default=n.exports}}]);