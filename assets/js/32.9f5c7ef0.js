(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{207:function(e,t,i){"use strict";i.r(t);var n=i(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("EBA represents a paradigm shift in the way conversational AI is implemented for businesses. It is not based on intent-classification or ownership of a particular question which belongs to a single agent. The system is designed to be collaborative, where multiple agents work together to produce understanding and meaningful assistance. Free collaboration will always imply that one agent can introduce side effects across the total environment. For instance, our "),i("router-link",{attrs:{to:"./../../samples/Riddles.html"}},[e._v("Riddle agent")]),e._v(" can entirely take over a conversation--by design, of course. The implication for developers is that a particular agent should follow a set of best practices to avoid introducing unwanted interference to their NLU pipeline. To this end, we outline key steps to developing a quality agent, one which can serve as a good citizen within a larger system.")],1),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("Additionally, by way of negation, we provide a list of areas where best practices should be carefully considered to avoid common pitfalls:")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),i("p",[e._v("The golden rule of EBA is to "),i("em",[e._v("describe")]),e._v(" your business domain to the machine in a simple, consistent, complete and straightforward way. We say this because EBA is not a chat bot. The typical workflow for chat bot development is to be provided with a list of questions or dialogs and to begin to implement each one in turn, the result of which is often a patch-work agent with poor NLU. Your goal as an EBA developer, on the other hand, is to explain your world, your domain, your business in a way that makes sense to the machine. When you begin your development process, you should begin by understanding your own domain and formulating this at a conceptual level. In fact, using our "),i("router-link",{attrs:{to:"./DebuggingEBA.html#reasoning-in-debug-mode"}},[e._v("debug mechanism")]),e._v(" you can even verify that your agent is conceptually consistent without executing one line of code.")],1),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),i("p",[e._v("Every agent loaded into an environment is invoked in an effort to provide understanding of natural language for its particular domain. In other words, each agent will provide a set of annotations to introduce conceptual knowledge into the system. Consequently, developers should be careful to introduce conceptual knowledge that actually makes sense, i.e. conveys the correct semantics. Consider this NL pattern and its directive to the system:")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),i("p",[e._v("We must accept that conversation in general is often unqualified and implicit. Any true AI must be able to cope with this and understand implicit connections between different conceptual entities. To this end, EBA provides multiple mechanisms for capturing implicit knowledge within your agent. However such mechanisms can be abused and, in some cases, even result in performance issues. In the case of rewriting rules and certain actions, EBA allows developers to identify a set of higher level concepts into a set of lower level concepts. The ability to create or invent new concepts which do not exist within NL itself is a powerful capability, and, for this reason, we provide a penalty score for such created concepts in our scoring model. Consider the following rewriting rule:")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._m(23)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"best-practices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practices","aria-hidden":"true"}},[this._v("#")]),this._v(" Best practices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"#the-golden-rule"}},[this._v("The Golden Rule")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#thorough-ontology"}},[this._v("Thorough ontology")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#baseline-nlu"}},[this._v("Baseline NLU")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"#correct-semantics"}},[this._v("Conceptual semantics")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#implicit-knowledge"}},[this._v("Implicit knowledge")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#extending-core-functionality"}},[this._v("Extending core functionality")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#atomic-actions"}},[this._v("Atomic actions")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-golden-rule"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-golden-rule","aria-hidden":"true"}},[this._v("#")]),this._v(" The Golden Rule")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"thorough-ontology"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thorough-ontology","aria-hidden":"true"}},[this._v("#")]),this._v(" Thorough ontology")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Following the golden rule, it is only natural that, as you begin your development process, you concentrate on providing a consistent and thorough semantic ontology. It is here that you will want to consider basic questions like 'what entities does my business have?', 'what fields comprise my business entity?', 'what are the data types of these fields?'. Answering these questions, everything will be in place to implement the basic requirements of a coherent ontology, an ontology that will unlock the most out-of-the-box core functionality from EBA. The basic requirements here are to implement a set of foundational predicate relationships, viz. subclasses, attributes, and lists. Regarding subclasses, you will want to ensure that your entities are showable and that subtypes are organized appropriately, e.g. 'sales order' can be a derivative of the more generic 'order'. Additionally, for each entity, there will be a set of attribute fields which will be modeled as concepts within their own right. You will want to map these attributes to an appropriate json field. For each attribute concept, you will want to ensure that it subclasses from the appropriate core attribute concepts. For instance, if an attribute is a date attribute, it should subclass from "),t("code",[this._v(":Attribtue, :DateAttribute")]),this._v(". With these predicate declarations in place, EBA will be enabled to support data retrieval and data aggregation questions out-of-the-box once NLU is provided. Failing to implement the necessary predicate relationships can lead to issues such as a failure to distinguish between plural and singular references, the inability to perform data aggregation, and the inability to show data.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"baseline-nlu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#baseline-nlu","aria-hidden":"true"}},[this._v("#")]),this._v(" Baseline NLU")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Following the advice posed by the golden rule, rather than implementing an arbitrary set of questions, developers should initially focus on a foundational baseline for NLU. At the outset, patterns should capture basic references to entities and attributes declared in the ontology, even a one-to-one proportion between NL and concept annotation can suffice initially. Likewise, in the case of patterns, simple data retrieval actions will suffice, e.g. fetch object by id and fetch unqualified collection. These actions in conjunction with our lazy interface in the "),t("code",[this._v("@force")]),this._v(" endpoint will enable you to ask a thorough set of data retrieval and aggregation questions, which are optimized to leverage your businesses APIs. In particular, implicit knowledge, follow up questions, more advanced KPI questions, etc. should not be modeled in the initial development phase. The reason for this baseline approach is that it ensures a coherent foundation for your agent, which can be incrementally extended. Developers who try to tackle more complex, implicit, or ambiguous questions during the beginning of the development process are liable to introduce side effects or certain design decisions which skew the remainder of the development process. Paraphrasing the remark of Aristotle, a small error at the outset can lead to large proportions.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"correct-semantics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#correct-semantics","aria-hidden":"true"}},[this._v("#")]),this._v(" Correct semantics")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("when was this order [delivered](example:DeliveryDate)")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("In the first pattern, the intention of the developer is to support questions requesting the delivery date of some business entity such as an order or a shipment. However, this pattern introduces a side effect to the system. Any time the word 'delivered' occurs in a similar usage, it "),i("em",[e._v("must")]),e._v(" be considered as potentially a reference to some delivery date. This means that when we reason about questions such as 'the package was delivered', 'we delivered the software update', or 'show me the delivered goods', the system must consider all possible ways in which it can potentially resolve a "),i("em",[e._v("delivery date")]),e._v(". Clearly this represents an unwanted performance overhead for such questions which have nothing to do with dates. One could argue that this pattern is "),i("em",[e._v("prima facie")]),e._v(" incorrect. "),i("code",[e._v("example:DeliveryDate")]),e._v(" is an date attribute, but there is no notion of "),i("em",[e._v("date")]),e._v(" expressed in the pattern, only the notion of "),i("em",[e._v("delivered")]),e._v(". The word 'delivered' can signify a multitude of things, and it should be considered as an aggressive move to annotate all references as a tied to some "),i("em",[e._v("date")]),e._v(". The developer's original intention can be better served here by encoding some more context. What the developer truly means to capture is that an inquisition like 'when' in conjunction with the notion of 'delivered' can be treated as a request to show a delivery date. For instance, the question 'when will the order be delivered?' clearly stands as a request for the delivery date. A simple adjustment to the pattern allows it to be rewritten as "),i("code",[e._v("[when will](:ShowDeliveryDate) the order [be delivered](:ShowDeliveryDate)?")]),e._v(". Additionally, a rewriting rule can then be added to indicate that "),i("code",[e._v(":ShowDeliveryDate")]),e._v(" in conjunction with "),i("code",[e._v(":Order")]),e._v(" should fetch the delivery date. This conveys the intended semantics in a safe way; we search for a delivery date if a request to show it is found in conjunction with an entity like "),i("code",[e._v(":Order")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"implicit-knowledge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implicit-knowledge","aria-hidden":"true"}},[this._v("#")]),this._v(" Implicit knowledge")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("TimeframeWithFilter: a subClassOf :Showable => a(:Timeframe) -> :Filter(:Timeframe)")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This rule states that every time any showable entity is referenced in NL along with a timeframe, an additional "),t("code",[this._v(":Filter")]),this._v(" concept should be introduced. This leads to performance and scoring side effect.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The performance side effect is that within a single question, there may be multiple showable entities and for each of these showable entities, we will consider how to make use of some filter operation. For agents focused on data retrieval and KPI support, the majority of its actions will expose a filter. This can lead to quite a substantive search at reasoning time. Furthermore, this rewriting rules violates "),t("a",{attrs:{href:"#correct-semantics"}},[this._v("conceptual semantics")]),this._v(", as it is a wrong and aggressive assumption that every time a showable entity and a timeframe occurs within a question that a filter must be applied. For instance, in the question 'show me my appointment for this Thursday', we are fetching a singular entity and there is no collection or filter involved. Of course, this can lead to a performance overhead for such questions which do not fit this use case at all.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The scoring side effect is that, since "),t("code",[this._v(":Timeframe")]),this._v(" occurs on both LHS and RHS, this concept can be used both in the production of a new concept via this rule as well as by a separate action. Additionally the "),t("code",[this._v(":Filter")]),this._v(" concept will inherit the score of the root node used to create it, viz. some showable entity. Such entities typically hold higher score as they can span multiple tokens, and, furthermore, there POS tag is that of nouns, which hold the highest score in our model.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"extending-core-functionality"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extending-core-functionality","aria-hidden":"true"}},[this._v("#")]),this._v(" Extending core functionality")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("While we enable developers to extend core functionality in cases where it makes sense, it requires caution. There is a fine line after all between "),t("em",[this._v("extending")]),this._v(" core functionality and "),t("em",[this._v("overriding")]),this._v(" core functionality. The latter will almost certainly lead to poor NLU. Our team has provided some safe guards to warn users about potentially overriding core functionality within NL patterns. Consider the following pattern:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v('[are there](:ActionShow) any orders with shipment number [matching](:Equivalent) "__"')])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("This pattern is an example of overriding core functionality, insofar as ambiguation is introduced in the place where existing functionality would otherwise be clear and expected. For instance, consider the annotation "),i("code",[e._v("[are there](:ActionShow)")]),e._v(". EBA intentionally distinguishes between existential questions (via "),i("code",[e._v(":IsThere")]),e._v(") and requests to show data (via "),i("code",[e._v(":ActionShow")]),e._v("). This annotation confuses the two, which leads to additional complexity as well as to potential system disambiguation follow ups. The difference between a chat bot and AI is that AI should actually understand, in a fine grained way, what is being asked. Forcing all types of interactions to be show requests, on the other hand, intimates that, in a contrived effort, one is seeking to build the former rather than the latter. Additionally, consider the annotation "),i("code",[e._v("[matching](:Equivalent)")]),e._v(". In EBA core, "),i("code",[e._v(":Equivalent")]),e._v(" denotes strict equivalence and is reserved for NL triggers like 'equal to', 'equivalent', 'is', '=', etc. EBA also supports a fuzzy search via the concept "),i("code",[e._v(":Like")]),e._v(". 'Match' is more aligned with the latter rather than the former, but this annotation blurs this line across the system. Note that if there is ever a doubt about what concepts our core agents supports and their expected usage, we have exposed their implementation, including patterns and action signatures, to all users within the dev lab.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"atomic-actions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#atomic-actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Atomic actions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Within EBA, actions are composed of two components, viz. conceptual signatures and execution logic. It is particularly important to think of actions with respect the first component. Actions represent conceptual signatures which allow your assistant to reason about actionable outcomes when resolving a particular question. We allow for a degree of polymorphism within actions. This enables reusable functionality across the same of class of entities, but, like other convenience features, it too can be abused. Actions which are highly polymorphic can lead to unpredictable runtime behavior as they are given permission to consume many concepts within a question. Regarding these signatures, there is a golden rule which should be followed--actions should be atomic in the functionality they provide. An action should not "),t("em",[this._v("both")]),this._v(" fetch unqualified entities as well as search against this entity for a subset. Following this rule allows the system to have atomic predictable building blocks when reasoning. To illustrate these points, consider the following action:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("name:\nexample:GetObjectById\n\nconstraint:\nobject subClassOf example:Object, field subClassOf example:Field\n\ninput:\nobject (optional field (optional example:Identifier (data :UserString)))\n\noutput:\ndata object\n")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("Based on the provided name, you would expect this action to do one thing--to fetch an object by its id. However, a close look at the signature reveals that it "),i("em",[e._v("optionally")]),e._v(" can take any given field and identifier to perform data filtering. This action is clearly not atomic. Furthermore, the constraints are loosely provided, it allows any object and any field but does not necessarily constrain this field to belong to this object. Because these constraints are so loose, we can reasonably expect that, in the course of reasoning, this action can be used to consume "),i("em",[e._v("some")]),e._v(" attribute for "),i("em",[e._v("some")]),e._v(" entity in "),i("em",[e._v("some")]),e._v(" unexpected way. Decomposing this action into two atomic pieces, removing hidden optional functionality, and providing more substantive constraints will lead to a much more predictable behavior at reasoning time.")])}],!1,null,null,null);t.default=a.exports}}]);