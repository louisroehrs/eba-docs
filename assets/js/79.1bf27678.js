(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{257:function(e,t,a){"use strict";a.r(t);var i=a(0),s=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[e._v("#")]),e._v(" Attributes")]),e._v(" "),a("p",[e._v("In EBA attributes are modeled via concepts, ontology, and semantic actions. Most of these components are auto-generated by EBA when an agent is loaded. For a developer there are only a few relations needed to be defined in the ontology:")]),e._v(" "),a("ol",[a("li",[e._v("An attribute concept has to be subclass of "),a("code",[e._v(":Attribute")]),e._v(";")]),e._v(" "),a("li",[e._v("An attribute concept has to be associated with an entity concept by defining an accessor (JSON field name).")])]),e._v(" "),a("p",[e._v('All of this ontology definitions can be done at "Concepts" tab in EBA Dev Lab.')]),e._v(" "),a("p",[e._v("EBA handles attributes on the assumption that entities are represented by JSON objects and collections are represented by JSON array of JSON objects. EBA only supports primitive types as attribute values. To enable type-specific OOB semantic actions (like ranking for numerical attributes, fuzzy search for string attributes) you need to define additional ontology:")]),e._v(" "),a("ul",[a("li",[e._v("A numeric attribute concept has to be subclass of "),a("code",[e._v(":NumAttribute")]),e._v(";")]),e._v(" "),a("li",[e._v("A string attribute concept has to be subclass of "),a("code",[e._v(":StrAttribute")]),e._v(";")]),e._v(" "),a("li",[e._v("A date attribute concept has to be subclass of "),a("code",[e._v(":DateAttribute")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"autogenerated-concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autogenerated-concepts","aria-hidden":"true"}},[e._v("#")]),e._v(" Autogenerated concepts")]),e._v(" "),a("p",[e._v("For every attribute EBA automatically generates all the neccessary components (concepts, ontology, and semantic actions). You may use some of these autogenerated concepts in your semantic actions or visualizers if necessary. If we define the attribute "),a("code",[e._v("example:Price")]),e._v(" as an attribute of "),a("code",[e._v("example:Product")]),e._v(" EBA will generate the following ontology:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("example:Product hasAttribute example:Price")]),e._v(" - this relation may be useful in polymorphic semantic actions or rewriting rules;")]),e._v(" "),a("li",[a("code",[e._v("example:PriceValue, example:PriceValues isValueOf example:Price")]),e._v(" - for every attribute additional concepts are generated which represent actual values of attributes. EBA distinguish singular and plural forms of attribute values. You should refer to these concepts when you define custom visualization for your attributes;")]),e._v(" "),a("li",[a("code",[e._v("attr:ProductPrice attributeOf example:Product, example:Products")]),e._v(" - for every attribute - entity relationship EBA generates an auxiliary concept to hold a JSON field name. These auxiliary concepts are used in OOB semantic actions to sort, filter or rank collections.")])]),e._v(" "),a("h3",{attrs:{id:"sharing-the-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sharing-the-attributes","aria-hidden":"true"}},[e._v("#")]),e._v(" Sharing the attributes")]),e._v(" "),a("p",[e._v("You can share attribute concepts among different business entities if necessary. For example you can define the attribute "),a("code",[e._v("example:Address")]),e._v(" and then make it as an attribute of both "),a("code",[e._v("example:Customer")]),e._v(" and "),a("code",[e._v("example:Supplier")]),e._v(". EBA will generate two auxiliary concepts to distinguish these attributes: "),a("code",[e._v("attr:CustomerAddress")]),e._v(" and "),a("code",[e._v("attr:SupplierAddress")]),e._v(".")])])}],!1,null,null,null);t.default=s.exports}}]);