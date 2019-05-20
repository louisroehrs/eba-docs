---
sidebarDepth : 1
---

# Example agents

We have provided some example agents with notes about how they were developed to help introduce you to the features available to EBA..

These agents were developed completely within the EBA lab tools. For each agent, we have provided the yaml configuration which you load into your own sandbox and review. 

[Walmart trends](#walmart-trends) - gets trending products from Walmart.  
*topics:* external api, settings configuration, UI assets, collaborative reasoning.

[Riddles](#riddles) - take over agent for asking riddles.  
*topics:* crafted dialog messages, session storage, reasoning take over, custom annotations.

[Wikipedia](#wikipedia) - fallback style agent which searches Wikipedia for relevant article if no other agent handled user question.  
*topics:* fallback style agent, @fallback endpoint, user input cleaning.

[Watson Discovery](#watson-discovery) - fallback style agent which searches Watson Discovery collections for relevant articles.
*topics:* fallback style agent, @fallback endpoint, frontend visualizations

[EDI](#edi) - models inspection operations and a small submission process for objects within the Electronic Data Interchange.  
*topics:* attribute support, data modifiers, user storage using eba api, @start endpoint, basic process management.

[Supply chain insights](#supply-chain) - provides an agent interface for working with supply orders and sales orders.  
*topics:* lazy data api, @force endpoint, multiple attribute types, backend assets, complex action signatures.


[Quest](#quest) - provides Natural Language Interface to Databases by creating SQL queries from natural language questions. 
*topics:* structured data, database schema, SQL queries.


## Walmart trends

This sample uses the Walmart API to build an agent interface for inpsecting their products.

The Walmart agent should prvoide insight into how to leverage an existing api. You will note that this assitant supports only one action, viz. `getTrendingProducts`, yet the user may ask a wide variety of questions. This is partly because EBA provides concept attribute support out of the box, but, more importantly, EBA is able to reason and compose together multiple agents in a colloborative process. This enables users to ask questions such as "show me popular products with negative description". Watson is able to understand products concepts within the Walmart domain and sentiment analysis from another existing agent. You can view existing agents in the agent selector in the top actions bar. Additionally, this sample provides a substantial example of utilizing frontend assets to customize the visualization of your data to end users.

To get the most out of this sample, please load the [yaml configuration](./walmart.yaml) into your own sandbox enviornment. You will need to supply your own walmart apiKey within settings. You can get your API key [here](https://developer.walmartlabs.com).


### General

A description of potential actions you can ask the agent are provided in the description panel. As stated above, you will need to provide an apiKey to the settings table within General.

### Concepts

The main domain object that this agent supports is `wmt:Products`. This concept supports a number of attributes, e.g. `wmt:SalesPriceValue` and `wmt:Description`. You can view all attributes in the attributes tab for the `wmt:Product` concept. Note that you must subclass these attributes appropriately. For instance, `wmt:Description` subclasses from `:Attribute` and `:StrAttribute`. All attributes must subclass from `:Attribute` and depending on the type of the attribute, it may additionaly subclass from `:StrAttribute`, `:NumAttribute`, and `:DateAttribute`.

### Patterns

Patterns for this agent are straight forward. We label those concepts and attributes that we expect users to ask accordingly. Please view [patterns documentation](../docs/components/Patterns.md) if you are unfamilar with the notion of patterns within EBA.

### Actions

This sample makes use of one action, viz. a call to get all trending products. You will notice that the action body contains the definition of the `main` function. This function takes as input any settings parameters that were set by the developer. Hence, it is through this parameter that developers can access their apiKey to call their existing apis.

### Rewriting rules

We supply one rewriting rule to the agent to inform it that whenever we ask for a `wmt:TrendingNow` concept, we are asking for the slightly lower level composition of concepts, viz. `wmt:Products(wmt:Trending)`, i.e. products trending now.

### Assets

This sample provides frontend jsx and css assets, which help render our resulting products. Styling can greatly improve the visualization of your results the end user. The assets are integrated so that setting a class attribute in jsx corresponds to the same class within css.


## Riddles

This agent helps you solve riddles! It is an example of a "take over" agent in EBA, i.e. an agent which, given a certain trigger, can take control of an entire conversation.

When the user says "Watson, ask me a riddle", this agent will respond accordingly and begin to supply custom annotations for subsequent interactions. It maintains its own gameplay logic until the user exists the game.

To get the most out of this sample, please load the [yaml configuration](./riddles.yaml) into your own sandbox enviornment.

### General

The Riddle agent provides an @annotate endpoint. This endpoint checks to see whether the agent has been triggered to listen to incoming interactions. If it has been triggered to listen, it will supply the custom annotation `riddle:PossibleAnswer` to every token in the interaction, meaning that the entire user input will be treated as a possible answer to the riddle. Additional checks to see whether the user has stopped the game or asked for a clue is provided. `riddle:Clue` and `riddle:Stop` are supplied to the agent via patterns. When the agent sees these patterns, it will not render the input as `riddle:PossibleAnswer`. Instead, it will execute the appropriate gameplay logic driven by its actions.

### Concepts

Concepts may be categorized as follows. The concepts `riddle:StartGame` and `riddle:Stop` correspond to the entry and exit points of the agent. Labels are supplied to the agent via patterns so that it can recognize these events. Next there are gameplay concepts, viz. `riddle:Question`, `riddle:Clue`, `riddle:Message`, and `riddle:PossibleAnswer`. When the agent needs to respond the user within the chat to the user, it marks the corresponding concept as a subclass of :Message. For instance, on `riddle:Question`, we must ask the user a riddle in the form of a question. Subclassing from `:Message` is a natural way to put this question into the chat interface. There are few other auxilary concepts provided by the Assistant, e.g. :Cancellation and :Confirmation. These concepts are already built into the assistant and are used in cases when we ask the user for action confirmation.

### Actions

The Riddle agent makes uses of a gameplay.js asset to provide actual game play logic. The actions provide a way to map concepts to data. Note that when we provide data for those concepts that derive from `:Message` we are directly passing this to the user within the chat interface. Concepts to data mapping are organized in a manner that is consistent with the game. Hence organizations of the actions is largely contigent on domain or game in this case.

### Assets

gameplay.js contains logic for handling questions, clues, answers, and exit logic for the game. It utilizes the "eba" package to set parameters, such as `listenAnswer:true`, as well as data on certain concepts. Takeover agents almost by definition have to manage execution state internally. Assets are a good place to register this functionality.

## Wikipedia

Fallback style agents are agents which can handle questions if no matching Semantic API is found. So you can search knowledge base, describe what your agents can do, call other systems and etc.

This example leverages partial reasoning data and adjusts user questions to improve Wikipedia search query to improve search result relevance.

To get the most out of this sample, please load the [yaml configuration](./Wikipedia.yaml) into your own sandbox enviornment.

## Watson Discovery

This agent allows you to search content using Watson Discovery. It utilizes our @fallback endpoint which is triggered when EBA detects that a given question does not surpass its understanding level threshold. In such cases, the agent processes this question by sending it to Watson Discovery. Consequently, this agent provides an illustration how EBA can be leveraged as a fallback documentation service in conjunction with other traditional agents.

To get the most out of this sample, please load the [yaml configuration](./WatsonDiscovery.yaml) into your own sandbox enviornment.

### General

To connect to Watson Discovery via the Watson Developer Cloud modules provided in the IBM Cloud FaaS node.js runtime. You will need to enter some secret credentials, including username and password, as well as certain settings, such as collection id and envionrment id. This values will be accessed respectively via `params.secrets` and `params.setting` within the `@fallback` endpoint.

### Fallback

As alluded to above, [@fallback](../docs/lab/General.md#fallback-endpoint) is an endpoint which is triggered when EBA determines that it cannot sufficently understand a question, i.e. the level of understanding does not surprass its designated threshold. In such cases, as a last resort, EBA will process this question in one shot utilizing whatever logic is provided within this endpoint. In this case, we establish a connection to Watson Discovery and query our documentation collection with the user's original question. Note that this particular example, passes the user's original question as is.

### Assets

This example provides another illustration of how to render your underlying data in a way to makes sense to your end users. Within a frontend asset titled 'watson-discovery-viz.coffee' we implement the appropriate logic for rendering a list of articles produced by the Watson Discovery search engine. Note that this visualization utilizes one of our [native UI components](../docs/lab/UIComponents.md), viz. our List component. 


## EDI

This sample models some basic operations within the [electronic data interchange](https://en.wikipedia.org/wiki/Electronic_data_interchange) or "EDI".

In particular, we support a set of inspection operations for purchase orders as well as a small process for submitting a complete invoice. This sample should provide some insight into a number of areas in EBA development, e.g. attribute support, data modifiers, user storage via Params api, the start endpoint, as well as a simple action logic for handling a process.

To get the most out of this sample, please load the [yaml configuration](edi.yaml) into your own sandbox enviornment.

### General

This sample makes use of the endpoints within the General tab. In particular, we implement the @start endpoint, which is used 
to perform some initialization tasks upon session creation. This sample makes use of small persistent storage which EBA provides to its users. The start endpoint contains some bootstrap logic for populating the storage endpoints "purchaseOrders" and "invoices" for first time users. The Params api, made available in the "eba" pacakge, provides a simple load/save interface for read and modifying data from these endpoints. We check if the load operation returns a 404, meaning that the storage endpoint is empty. If it is empty, we populate some hardcoded sample data in the form of json data, which is located in the assets table.

### Concepts

We support two concepts which correspond to our business entities, viz. `edi:PurchaseOrders` and `edi:Invoices`. Additionally, we support a wide variety of attributes for inspecting different parts of our purchase orders. You can view the attributes on purchase orders in the attribtues tab. Concepts of particular interest will be `edi:Modify`, `edi:Cancel`, and `edi:Submit`. These concepts derive from :Message, meaning that their primary intent is to notify the user of some operations that involve side effects. In fact, they are created with the intention of representing data modification in the course of our business process. We make these side effects viewable to the user using rewriting rules--discussed below.

### Patterns

Patterns will be straigtforward for the most part. It is important to note only two details. First, note that we have implemented some granular patterns for certain prepositions: 

`{set|edi:Modify} {transportation mode|edi:TransportationMode} {to|edi:To} "road"`

We label {to|edi:To} to provide some increased confidence to the system. Other agents within the system may provide a different meaning to such tokens, e.g. it may be interpretted as `:RelationTo` and `:With`. More importantly, be advised that we have consolidated certain patterns, e.g. 

`what is the {trailer items count|edi:TrailerCount} and {trailer details|edi:TrailerDetails} and {trailer amount|edi:TrailerAmount} for this {order|edi:PurchaseOrder}`.

This pattern will enable EBA to perform natural language understanding for these different concepts using just one pattern as an input. However, the assistant may not support answering this exact question. In this particular example, the assistant is not able to reuse the purchase order concept three times.

### Actions

We have provided some detailed description of action signatures within the configuration itself. The actions are modeled in a straight forward fashion. We support actions for fetching collections or fetching particualr elements by an indentifier, e.g. purchase order number. For data modification actions, you will see that we use the following pattern `dataModifier(context data edi:Invoice)`. We are supporting actions that modify data within the context of the information space. We expect users to input things like "set transporation mode to air", which modifies the invoice already existing within the conversation context. It is important to note that the data modifiers are simply appending attributes onto the existing invoice, e.g. canceling an invoice appends `isCancled:false` to the invoice. In order to persist these changes remotely, we need to actually finish the invoice submission process.The action bodies themselves make use of the Params and Result api to fetch objects from storage and update data to objects within the information space respectively. 

### Rewriting rules

In order to show the user the results of our modifications. We following a convention of converting our data modification concepts to be reintrepeting as `:ActionShow`. This has the effect that, after performing modifications to the invoice, the resulting invoice will be shown to the end user after the operation completes. 

### Assets

We have two types of assets. First we have assets in the form of json, which are used to popualte our storage with syntethic data. Secondly, we have a utility file for performing some basic functionality across multiple actions. 

### Debug

View the debug log if things go wrong!


## Supply Chain

This sample models a supply chain domain. In particular it allows us to inspect sales orders and supply orders.

The supply chain agent is perhaps the most concrete sample that we provide insofar as it utilizes our lazy data interface and provides insight into many areas of EBA Development, viz. endpoints, backend and frontend assets, multiple attribute types, and complex action signatures.

To get the most out of this sample, please load the [yaml configuration](./supplychain.yaml) into your own sandbox enviornment. You will need access to the [supply chain insights api](https://developer.ibm.com/api/view/scinsights-prod:supply-chain-insights:title-Supply_Chain_Insights) in order to use this agent. Otherwise this agent should be treated as read-only.

### General

In order to run this agent, you will need to enter the appropriate credentials in their designated fields in settings. Additionally, you notice that this agent uses an endpoint called `@force`. This endpoint forces lazy data to be evaluated. Lazy data evaluation provides a method for pushing data modifiers on top of large collections to the api level. To clarify, if we are operating on a large data collection that needs to be filtered, sorted, etc. then, rather than passing this large collection to each intermediate operation, we simply create a lazy data wrapper. This wrapper is analogous to an onion. At the bottom we have our api call to produce real data, but on top of these we have several layers of lazy operations, e.g. filter data, sort data, and take first 5 of data. The `@force` endpoint is where we unwrap this onion the produce only the necessary subset of data--culminating in a smaller footprint. The intermediate lazy operations will be registered within our actions and supplied to this endpoint as a set of parameters.

### Concepts

This agent follows a similar paradigm as our other samples. We have our main domain objects, viz. `sc:SalesOrders` and `sc:SupplyOrders`, following by a set a relevant attributes for each. Note that we support a few `:DateAttributes` in this sample, e.g. `sc:RequestedShipDate`. We do highlight one particular ontology entry: `sc:FilterScheduledOrders subClassOf action:Filter`. This is an example where we an action subclasses from a concept. In this case, we specify that our action is a type of filtering actions. The Assistant will internally assign it a given priority wihtin a chain of lazy operations. Our system supports three kinds of action types, viz. `action:Filter`, `action:Sort`, and `action:Select`. These are listed in ascending order of priority.

### Patterns

Patterns for this agent are straightforward. Please see our [documentation on patterns](../docs/components/Patterns.md) if you are unfamiliar with this component of the assistant.

### Actions

To help clarify, we break down the supply chain actions into two main categories: actions which make lazy data parameters and actions which operate on lazy data parameters. You will find that `sc:GetSalesOrdersByDates`, `sc:GetAllSalesOrders`, and `sc:GetAllSupplyOrders` are actions which make lazy data parameters. They use the Params api provided by the eba package to accomplish this. This should register with our general intuition behind lazy data. Each of these actions may produce very large collections. Hence we make them lazy. We have the `sc:FilterScheduledOrders` actions which operates on these lazy data parameters. It simply fetches the lazy parameters from the previous actions and uses the Params api to append a lazy filtering operation on top. When the assistant needs real data, it will use `@force` to create this data in one shot. Note that there is also an action named `sc:GetSalesOrderById`. This action returns a single element, hence no lazy data interface is required.

### Assets

Frontend assets are implemented in order to help visualize our results, and a backend util.js module is implemented to encourage code reuse. If multiple actions make you the same routine, consider creating a backend asset containing this routine and importing it where required.


## Quest

This agent allows the user to query structured data from a relational database using natural language by converting natural language questions to SQL queries (or other structured languages). Aside from relational databases, this extension (code name "Quest") supports multiple data sources, e.g. HIVE, Salesforce.com and others.

A semantic model of the database schema should be created during the training time. The model specifies the tables, columns, and their relations and is used by Quest to process the natural language questions and produce SQL queries. 

The Warehouse schema model that is shown here represents a Sales/Warehouse database with 8 tables. This schema is used with a sample Quest agent. To try this example, please load the yaml configuration [yaml configuration](./Quest.yaml) into your own sandbox environment. The sample questions bellow demonstrate what can be asked of this schema.

 ![Warehouse schema](./images/warehouseSchema.png)

### Sample questions:  

* which  shops have stocked more  products than average quantity of stocked products; show shop name and location  
* which products have higher price than IPHONE; show product types  
* what is the name of manufacturer that has manufactured lower number of products than APPLE  
* what manufacturer manufactured more than 2 products; add manufacturer names  
* what products have prices greater than GALAXYTAB;  add product type and prices  
* what is the most expensive product; show product type  
* which vendor sold the most products in 2014; show vendor name  
* which shop has stocked the highest quantity of products; show shop name  
* what type of products are manufactured by SAMSUNG  
* how many times did Willie buy IPHONE  
* how many iphones were sold before October 2018 in shops located in New York  
* how many customers bought more than 5 IPHONEs before 2018  
* what are the types of products that were sold since 10/11/2011 in Chicago  
* which is the percentage of products with price above IPHONE  
* how many products with prices greater than 100 were sold before October 2017 in  New York or San Francisco  
* what is the name of customers who bought iphones more than 2 times.
