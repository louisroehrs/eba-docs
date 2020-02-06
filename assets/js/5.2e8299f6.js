(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{183:function(e,t,a){e.exports=a.p+"assets/img/activation.62d24e95.png"},184:function(e,t,a){e.exports=a.p+"assets/img/partial-activation.3e63bc06.png"},271:function(e,t,a){"use strict";a.r(t);var n=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"fine-grained-component-activation-and-deactivation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fine-grained-component-activation-and-deactivation","aria-hidden":"true"}},[e._v("#")]),e._v(" Fine grained component activation and deactivation")]),e._v(" "),n("p",[e._v("We are glad to announce a new control to EBA dev lab--fine grained component activation and deactivation. Following our last release which allowed developers to deactivate entire agents, developers can now deactivate particular components within an agent. We found that this feature is integral to active development and experimentation within EBA. Concepts, actions, assets, endpoints, etc. can now all be controlled in a more developer friendly way when debugging certain reasoning and execution flows within EBA. The example below shows a case where are all actions producing data for "),n("code",[e._v("weather:Forecast")]),e._v(" are deactivated.")]),e._v(" "),n("p",[n("a",{attrs:{href:"../images/activation.png"}},[n("img",{attrs:{src:a(183),alt:"Activation example",title:"Watson Marketing Assistant powered by EBA"}})])]),e._v(" "),n("p",[e._v("As concepts form the basis for more complex components such as action and rules, we have ensured that deactivation of a given concept is propagated to other related components. In other words, disabling a concept will also disable any actions or rules which make use of this particular concept.")]),e._v(" "),n("p",[e._v("As ontology is an interconnected set of relationships, we have also introduced the notion of "),n("em",[e._v("partially active")]),e._v(" concepts. These are concepts which contain a predicate which is deactivated. Partially active concepts are simply meant to signify that the concepts themselves are still active, but some underlying relationship is deactivated. The example below shows a case where the predicate "),n("code",[e._v("weather:Alerts isListOf weather:Alert")]),e._v(" is deactivated.")]),e._v(" "),n("p",[n("a",{attrs:{href:"../images/partial-activation.png"}},[n("img",{attrs:{src:a(184),alt:"Partial activation example",title:"Watson Marketing Assistant powered by EBA"}})])]),e._v(" "),n("h3",{attrs:{id:"some-use-cases-to-consider"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#some-use-cases-to-consider","aria-hidden":"true"}},[e._v("#")]),e._v(" Some use cases to consider")]),e._v(" "),n("p",[n("em",[e._v("Note: this is a general troubleshooting feature, but we provide some use cases to shed more light on how it can be leveraged.")])]),e._v(" "),n("p",[e._v("If a developer is implementing some action, and, in course of development, realized that the action should be decomposed into smaller actions, he would have previously had to manually delete the signature and back up relevant code block--quite tedious. Now you can simply deactivate the action and even refer to it in the course of your refactor.")]),e._v(" "),n("p",[e._v('Another example is with endpoints. If a developer wanted to test execution with and without a certain endpoint in the pipeline, we found that some developers would provide an invalid name as a way of "commenting" out this endpoint, e.g. rename '),n("code",[e._v("@start")]),e._v(" to "),n("code",[e._v("@start2")]),e._v(" or "),n("code",[e._v("@annotate")]),e._v(" to "),n("code",[e._v("@annotate-old")]),e._v(". Deactivation provides a standard way of doing this across "),n("em",[e._v("all")]),e._v(" components.")]),e._v(" "),n("p",[e._v("This can also be useful in the case of more fundamental changes to your agent--when intending to the refactor the ontology in a less destructive way. This feature allows you to easily comment out a concept (and all associated actions and rules) when providing your new implementation. You can maintain both side by side during experimentation phase.")])])}],o=a(0),i=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);t.default=i.exports}}]);