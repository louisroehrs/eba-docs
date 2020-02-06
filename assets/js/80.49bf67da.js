(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{258:function(e,t,a){"use strict";a.r(t);var i=a(0),s=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"core-concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core-concepts","aria-hidden":"true"}},[e._v("#")]),e._v(" Core concepts")]),e._v(" "),a("p",[e._v("EBA is an ecosystem of domain specific agents. In order to encapsulate and expose common functionality across our system, EBA contains a set of prebuiilt native agents. These agents, like any other agents, implement a set of concepts which can be utilized and extended by other agents within the ecosystem. In this article, we aim to highlight the key set of concepts which developers may want to familarize themselves with in order to better understand the generic functionalities they have available. The catalog below is not meant to be exhaustive, and, as with all our agents, you can view their further details within our dev lab at eba.ibm.com.")]),e._v(" "),a("h3",{attrs:{id:"system-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-interface","aria-hidden":"true"}},[e._v("#")]),e._v(" System interface")]),e._v(" "),a("p",[e._v("Concepts which represent a high level interface for capturing the role of your concept, e.g. a textual message or a showable data element.")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v(":Message")]),e._v(" -- any subclass will be treated as type of message where underlying textual data is propagated as a response to the user. These concepts will be treated as directives to interact with the user rather than as composable data elements. This is particularly useful in cases where you want to interact with the user but not return any associated data, e.g. "),a("code",[e._v("ns:DeleteProduct subClass :Message")]),e._v(" can enable the textual response 'I have deleted your product named abc' when "),a("code",[e._v("data ns:DeleteProduct")]),e._v(" is produced.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v(":Showable")]),e._v(" -- any subclass will be treated as a showable entity. This entity can be visualized using our standard assets and displayed to the user in our chat, graph, and content views. If a entity is not "),a("code",[e._v(":Showable")]),e._v(", then it will not recieve a high score when used in conjunction with "),a("code",[e._v(":ActionShow")]),e._v(".")])])]),e._v(" "),a("h3",{attrs:{id:"actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[e._v("#")]),e._v(" Actions")]),e._v(" "),a("p",[e._v("All action concepts are a subclass of "),a("code",[e._v(":Message")]),e._v(" as they reprsent operations by the machine which require user interaction, e.g. show data elements or remove data elements will produce the appropriate message to the user. The following concepts are analogous to CRUD operations, all which are supported by our system.")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v(":ActionCreate")]),e._v(" -- concept which represents a user's request to have data created. It will create data and post a message to the user.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v(":ActionShow")]),e._v(" -- concept which represents an user's request to have data shown. It will produce "),a("code",[e._v(":Showable")]),e._v(" data.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v(":ActionModify")]),e._v(" -- concept which represents a user's request to have data updated. It will modify data and post a message to the user.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v(":ActionDelete")]),e._v(" -- concept which represents a user's request to have data removed. It will remove data and produce a textual response to the user.")])])]),e._v(" "),a("h3",{attrs:{id:"basic-data-entities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-data-entities","aria-hidden":"true"}},[e._v("#")]),e._v(" Basic data entities")]),e._v(" "),a("p",[e._v("These concepts represent the basic types of data which our system provides OOB.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v(":UserString")]),e._v(" -- underlying data within quoted strings.")]),e._v(" "),a("li",[a("code",[e._v(":Number")]),e._v("     -- a numeric value.")]),e._v(" "),a("li",[a("code",[e._v(":Timeframe")]),e._v("  -- a timeframe element containing information such as the start and end of the timeframe as well as its level of grainularity.")]),e._v(" "),a("li",[a("code",[e._v(":FreeText")]),e._v("   -- textual input form user's question which is not consumed by any other actions within a particular variant. This concept can be useful in cases where more free-formed input is expected.")])]),e._v(" "),a("h3",{attrs:{id:"conditions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conditions","aria-hidden":"true"}},[e._v("#")]),e._v(" Conditions")]),e._v(" "),a("ul",[a("li",[a("code",[e._v(":Contains")]),e._v("    -- condition which signifies that source value contains target value.")]),e._v(" "),a("li",[a("code",[e._v(":StartsWith")]),e._v("  -- condition which signifies that source value starts with target value.")]),e._v(" "),a("li",[a("code",[e._v(":EndsWith")]),e._v("    -- condition which signifies that source value ends with target value.")]),e._v(" "),a("li",[a("code",[e._v(":Like")]),e._v("        -- condition which signifies that source value matches target value in a fuzzy search.")]),e._v(" "),a("li",[a("code",[e._v(":GreaterThan")]),e._v(" -- condition which signifies that source value is greater than target value.")]),e._v(" "),a("li",[a("code",[e._v(":LessThan")]),e._v("    -- condition which signifies that source value is less than target value.")]),e._v(" "),a("li",[a("code",[e._v(":Equivalent")]),e._v("  -- condition which signifies that source value is strictly equal to the target value.")])]),e._v(" "),a("h3",{attrs:{id:"aggregation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aggregation","aria-hidden":"true"}},[e._v("#")]),e._v(" Aggregation")]),e._v(" "),a("p",[e._v("These concepts represent aggregration and modifier operations on top of collections. Typically these concepts will be used in conjunction with certain predicates and collections, e.g. "),a("code",[e._v(":SortedBy(:Quantity, :SalesOrders)")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("code",[e._v(":TopN")]),e._v("      -- gets the top N elements within a collection")]),e._v(" "),a("li",[a("code",[e._v(":SortedBy")]),e._v("  -- sorts a collection by a criteria")]),e._v(" "),a("li",[a("code",[e._v(":Filter")]),e._v("    -- filter a collection")]),e._v(" "),a("li",[a("code",[e._v(":First")]),e._v("     -- get the first element in a collection")]),e._v(" "),a("li",[a("code",[e._v(":Largest")]),e._v("   -- get the largest element in a collection")]),e._v(" "),a("li",[a("code",[e._v(":HighValue")]),e._v(" -- gets elements within a collection within the highest quartile")]),e._v(" "),a("li",[a("code",[e._v(":LowValue")]),e._v("  -- gets elements within a collection within the lowest quartile")]),e._v(" "),a("li",[a("code",[e._v(":Average")]),e._v("   -- get the average value across a collection")]),e._v(" "),a("li",[a("code",[e._v(":Total")]),e._v("     -- get the sum total value across a collection")]),e._v(" "),a("li",[a("code",[e._v(":Minimum")]),e._v("   -- get the minimum element within a collection")]),e._v(" "),a("li",[a("code",[e._v(":Maximum")]),e._v("   -- get the maximum element within a collection")]),e._v(" "),a("li",[a("code",[e._v(":MinimumBy")]),e._v(" -- get the minimum element by a particular predicate within a colleciton")]),e._v(" "),a("li",[a("code",[e._v(":MaximumBy")]),e._v(" -- get the maximum element by a particular predicate within a colleciton")])]),e._v(" "),a("h3",{attrs:{id:"qualifiers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qualifiers","aria-hidden":"true"}},[e._v("#")]),e._v(" Qualifiers")]),e._v(" "),a("p",[e._v("These concepts represent certain language qualifiers for designated entities. Often times these qualifiers can be ommitted in natural language, and, consequently, they are often denoted as "),a("code",[e._v("optional")]),e._v(" when used within semantic actions.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v(":WithName")]),e._v(" -- qualifier which references a value as being the name of an entity, e.g. 'show product "),a("em",[e._v("named")]),e._v(" iPhone X.")]),e._v(" "),a("li",[a("code",[e._v(":WithId")]),e._v("   -- qualifier which references a value as being the id of an entity, e.g. 'show product "),a("em",[e._v("id")]),e._v(" 123.")]),e._v(" "),a("li",[a("code",[e._v(":Relation")]),e._v(" -- qualifier which explictly denotes the relationship between two entities, e.g. show me contacts "),a("em",[e._v("in")]),e._v(" this org.")]),e._v(" "),a("li",[a("code",[e._v(":All")]),e._v("      -- qualifier which explictly denotes that all entities should be qualified, e.g. 'show me "),a("em",[e._v("all")]),e._v(" sales orders'.")]),e._v(" "),a("li",[a("code",[e._v(":Own")]),e._v("      -- qualifier which explictly denotes entities belonging to the user, e.g. 'show me "),a("em",[e._v("my")]),e._v(" contacts'.")])]),e._v(" "),a("h3",{attrs:{id:"nlg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nlg","aria-hidden":"true"}},[e._v("#")]),e._v(" NLG")]),e._v(" "),a("p",[e._v("These concepts pertain to extending custom NLG capabilties.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("nlg:PostModifier")]),e._v(" -- denotes that the spelling for a particular concept operates as a post modifier, e.g. 'show me complaints "),a("em",[e._v("against")]),e._v(" this product'.")]),e._v(" "),a("li",[a("code",[e._v("nlg:PreModifier")]),e._v(" -- denotes that the spelling for a particular concept operates as a pre modifier, e.g. 'show me "),a("em",[e._v("late")]),e._v(" sales orders'.")]),e._v(" "),a("li",[a("code",[e._v("nlg:PlainText")]),e._v("   -- used within NLToken interface to denote a plain text entry, where the data supplied to this concept will be spelled as is.")])])])}],!1,null,null,null);t.default=s.exports}}]);