# Getting started tutorial

Welcome to EBA development! This article serves as a getting started guide for developers who are unfamiliar with our unique machine reasoning programming model. First, we provide a brief overview of EBA's collaborative reasoning pipeline. This will help you get a solid grasp of the fundamentals before you dive into building your first agent. Next, we provide a tutorial which guides the development of a sample Walmart agent from scratch. This agent will be able to answer various questions about trending products. You may reference and try out [the complete working sample](../../samples/Walmart.md) any time you wish.

## Reasoning pipeline


The steps below essentially describe how EBA works, and demonstrates the journey of a user's question through EBA's collaborative reasoning pipeline.

Encoded conceptual knowledge: Developers encode a set of concepts and relationships to tell our assistant what it can understand and reason about. Without conceptual entities, there is effectively nothing to reason about.

SyntaxTree creation: A user’s natural language question is broken down into its morphological and syntactical features and represented as a tree.

Annotation: Natural language within a user’s syntax tree is annotated or mapped to conceptual entities.

Reasoning: Given a starting point of conceptual entities, EBA considers all possible outcome paths and reasons to produce the most relevant one.

Execution: Having settled on the appropriate action path, EBA executes that path including any side effects it may produce.


## Development workflow
- [ontology](#Ontology)
- [patterns](#Patterns)
- [actions](#Actions)
- [rules](#Rules) 
- [visualizers](#Visualizers)

We propose the following development workflow for building any agent. Note that you will likely follow this workflow in an iterative process for each new piece of knowledge that you want to introduce to the assistant.
 
First, there should be an understanding of the domain you wish to model. You should ask yourself basic questions such as: What sorts of questions do I want the assistant to answer? What domain entities are used in such questions? Which attributes of these entities should I expose? How do these entities relate to one another? With this understanding in mind, you can begin to program an [ontology of concepts](../components/Ontology.md). Watson understands the world in terms of concepts. A concept is simply a domain object which your agent can recognize and understand given a sort of base definition. Likewise, an ontology is simply a set of relationships between concepts.

Secondly, we encourage the developer to implement [natural language patterns](../components/Patterns.md). These patterns serve as a bridge between natural language and the conceptual language which Watson is able to understand. In these patterns, you will match natural language tokens to their corresponding concepts. Natural language patterns are more than a mere keyword match; rather, they capture the syntactical context in which a token is used. For instance, consider the following the pattern:

`what is the {weather|:Weather} today?`

The term 'weather' signifies a noun subject in this case. However, the word 'weather' can contain a very different semantic meaning in other sentences, e.g. 'can we weather the storm?'. Based on the natural language pattern above, Watson will understand that this usage of 'weather' is different from the first usage and, subsequently, it will not introduce the concept `:Weather` into its reasoning pipeline when answering the second type of question.

Next we propose that [semantic actions](../components/Actions.md) and [rewriting rules](../components/Rules.md) should be developed. Reasoning in EBA is performed on a graph, where concepts represent nodes within this graph. The goal of actions is to produce real data for these concepts. For instance, if a user asks 'show me all products'. Watson will reason about the concept `wmt:Products` during reasoning time. During execution time, when it is ready to produce a response to this question, it should be able to produce real data via an executor function. This function may make a call to an external api or database to produce data. A rule, on the other hand, represents a kind of translation between concepts. Typically we will translate higher level concepts into lower level concepts.

Lastly, we encourage the development of visualizations for the data you are producing from your actions. All the data produced in your actions will be passed to your front end visualizers so that you can customize the visualization of your data. Visualizers are implemented as front end [assets](../lab/Assets.md).

## Ontology

Beginning with a completely empty configuration, we decide that our domain is mostly about one thing--products from Walmart. We want our assistant to understand products, so we begin by adding the following entries into our ontology tab.

| Name           | Spelling          | SubClass of         | List of       |
| -------------- | ----------------- | ------------------- | ------------- |
| `wmt:Product`  | `product`         | `:Showable`         |               |
| `wmt:Products` | `products|*`      | `:Showable`         | `wmt:Product` |

We have just provided the following information to our system. We can recognize two concepts, viz. `wmt:Product` and `wmt:Products`. Each of these concepts have an appropriate spelling which will be used in natural language generation (NLG). NLG enables Watson to compose appropriate responses to the user in the same terms as the original questions. For example, when asking for product 123, Watson may reply 'I have found the following **product** with id 123'. This helps to eliminate hard coded responses. Furthermore, each of these concepts is a subclass of `:Showable` meaning that the data associated with these concepts can actually be shown to user within the chat panel. Lastly, we have specified that products is a list of individual product elements, which helps to enable useful operations on the collection such as filtering, sorting, etc.


 We want `wmt:Product` to correspond to our real data model coming from the Walmart Api. Now Walmart's open api will return something on the order of `{ name: 'some name', msrp: 'some msrp', shortDescription: 'some description', 'salePrice': 'some price' ... }`, so we will want to map these json field names to actual concepts within our systems. They will serve as attributes for `wmt:Product`. This enables EBA to understand `wmt:Product` in terms of its component attributes.

| Attribute         | JSON Field        |
| ----------------- | ----------------- |
| `:Name`           | `name`            |
| `wmt:MSRP`        | `msrp`            |
| `wmt:SalePrice`   | `salePrice`       |
| `wmt:Description` | `shortDescription`|

In order to enable full attribute support, we need to specify some additional information in the ontology. In short, we should tell the system these concepts are in fact attributes along with their corresponding spelling. We add the following entries.

| Name              | Spelling      | Subclass of                      | 
| ----------------- | ------------- | -------------------------------- |
| `wmt:MSRP`        | `msrp`        | `:Attribute`, `:NumAttribute`    |
| `wmt:SalePrice`   | `sale price`  | `:Attribute`, `:NumAttribute`    | 
| `wmt:Description` | `description` | `:Attribute`, `:NumAttribute`    | 

By making a concept subclass from `:Attribute` we tell the system that it is an attribute. This system will then generate certain actions in the back end to enable attribute queries such as `show me the msrp of this product`. We additionally specify that type of the attribute, i.e. whether it is a string, number, or date attribute, which helps enable filtering questions such 'show me products with msrp below 100'. 
Lastly, they each contain an appropriate spelling for NLG. Note that we did not enter any data for `:Name`. This concept is already natively supported by our system, hence the lack of domain prefix. Note that attributes are treated as `:Showable` for our system, so it is redundant to add this subclass entry.

As mentioned in the introduction, we will want to iteratively test each new piece of knowledge that we add to our system. Since this sample is small enough we can add two more auxiliary nodes to cover all relevant types of questions. Lets add entries for `:UPC`, `wmt:Trending`, `wmt:TrendingNow`.

| Name              | Spelling      | 
| ----------------- | ------------- |
| `:UPC`            | `UPC`         |
| `wmt:Trending`    |               |
| `wmt:TrendingNow` |               |

It is now a good time to add patterns, actions, and visualization to support questions related to products.

## Patterns

We want Watson to map natural language from user questions to the concept language we have just defined in our ontology. Patterns enable this mapping via token annotations. We add the following patterns:

- `show me all {trending|wmt:Trending} {products|wmt:Products}`
- `show {popular|wmt:Trending} products`
- `what is the {description|wmt:Description}, {price|wmt:SalePrice}, and {msrp|wmt:MSRP} for this {product|wmt:Product}?`
- `{what's|:What} {trending now|wmt:TrendingNow}`
- `show me the product name for {upc|:UPC} 123`

The first pattern tells the system that the token 'products', when used in a similar syntactic context, should be annotated with the `wmt:Products` concept. The third pattern does the same for our attribute concepts as well as the product concept. Note that in this tutorial we have added four annotations on a single line in the second entry. It is possible to list each of these annotations as a separate entry, and, in fact, our posted walmart sample does this; however, the more compact representation above can be another good option. The last two entries supply annotations for our auxiliary concepts.

The result of entering these patterns is that whenever the user asks something like 'show me the msrp for this product'. An annotation tree can be created with the appropriate concepts in place. This annotation tree then becomes the starting point for reasoning.


## Rules

So far, any time that we want to search for products we must have the keyword 'products' within the original sentence. It is likely that real users will want to ask less qualified questions, such as `whats trending now?`. It is clear to us that this is a request to search for current trending products. Watson will likewise understand this if we add the following rewriting rule:

`wmt:TrendingNow -> wmt:Trending(wmt:Products)`

A rewriting rule effectively rewrites a higher level concept into a set of already existing lower level concepts. Here we are rewriting a request for `wmt:TrendingNow` into a request for trending products. We already added a pattern for this concept, so save your changes and try the question 'what's trending now'?

## Actions

As a quick test of Watson's natural language understanding, we can declare our actions and return hard coded responses just to verify that our questions are correctly understood. Once understanding is in place, we can hook up actual API calls to Walmart and return real data.

Let's support the most basic action first. We want to get all trending products for Walmart. In order to do so we must declare the appropriate action signature. Action signatures are broken into three components, viz. constraints, input, and output, where constraints are optional and can be omitted. Signatures conform the following formula: `constraints => input -> output`. In short, anything on the left of the `=>` is a constraint and should be entered in the constraint column. The next part should be entered in the input column, and the last part in the output column.

| Name                          | Signature                                                 |
| ----------------------------- | --------------------------------------------------------- |
| `wmt:GetTrendingProducts`     | `wmt:Products(wmt:Trending) -> data wmt:Products`         |

Lets reflect on the signature above. We expect questions such as 'show me all trending products' and 'what products are trending?'. We note that `wmt:Products` is the root object in such queries and that the keyword 'trending' is a modifier which qualifies this concept. Hence we define our input in the following manner  `wmt:Products(wmt:Trending)`. `wmt:Products` is the root concept and it points to a child concept `wmt:Trending` which modifies it. Lastly, in this action we plan to produce data for products, so we add `data wmt:Products` as the output.

We can add the following hardcoded placeholder action to test Watson's understanding of a question:

```
const {Result} = require('eba');
module.exports.main = () => new Result().setData('wmt:Products', ['product1', 'product2', 'product3']);
```

In this placeholder code, we import our standard [eba helpers package](../lab/NodeHelpers.md). This package is useful for working with parameters, results, and other features of our system. In the code above, we are returning a Result which sets data for the `wmt:Products` concept as a hard coded list of strings, viz. 'product1', 'product2', and 'product3'.

Save your changes and try the following questions in the chat: 'show me trending products' or 'what products are trending?'. Watson should respond with the hard coded list above. You can verify Watson's understanding by clicking the information icon above your original question. This should show you the annotation tree of your question. You can view the complete context of your chat in the information space as well by clicking the graph icon in the top right corner of the page.

Now that we have verified that Watson can understand such questions, we should produce real data from Walmart. In order to use walmart's open api, you should register for a free api key online at https://developer.walmartlabs.com/. Once you have obtained an api key, switch over to the General tab within our dev lab. In the secrets panel, add the following name:value pair: `apiKey` : `<value of your own api key from link above>`.

Now replace the code in your placeholder action with the following:

```
const request = require('request-promise-native')
const eba = require('eba');

const main = ({secrets}) => {
  return request
    .get(`http://api.walmartlabs.com/v1/trends?apiKey=${secrets.apiKey}`)
    .then(JSON.parse)
    .then(({items}) => {
      items.forEach((item) => {
        if (!item.shortDescription)
          item.shortDescription = ""
      })
      return new eba.Result().setData('wmt:Products', items);
    })
    .catch((error) => {
      return { error: `Walmart API error: ${error}` }
    })
}
module.exports = {main}
```

The action above is relatively straightforward. We are performing an http GET request to Walmart's /trends api. In this request, we are passing our apiKey which we just stored in our secrets (accessed via `secrets.apiKey`). We then parse the JSON result and perform some data minor data processing to ensure that each item returned from the api has a `shortDescription` field, even if it is empty. The api can otherwise return some items where this field is missing. Recall from our ontology entries that `wmt:Products` is a list of `wmt:Product` and that `wmt:Product` is composed a few fields, one of which is the short description. Lastly, we return a Result which sets data as this processed list of items from walmart.

Save your changes and try out the same questions again. You should see real data returned in this case.

Let's add the remaining actions we want to support for this sample.

| Name                          | Signature                                                                 |
| ----------------------------- | ------------------------------------------------------------------------- |
| `wmt:SearchProductByName`     | `wmt:Product(optional :WithName(data :UserString)) -> data wmt:Product`   |

Here we are defining an action for searching for a particular product by name. `wmt:Product` is the root concept and it can be optionally qualified by a `:WithName` keyword followed by actual string data containing the product name to be searched against. By `:WithName` keyword we mean a keyword which signifies a name, e.g. 'show me products **named** "Call of Duty"' or 'show me products **with name** "Call of Duty"'. Since we are not using any named entity recognition in this sample, we are supplying the product name within quoted strings. Such quoted strings are denoted by `:UserString` concept. Note that `:UserString` is a convenience concept for local development and is not meant for production quality assistants. Named entity recognition for keywords is strongly encouraged in such cases. The output of this action should be data for a single product.

Add the following code into the action body:

```
const request = require('request-promise-native')
const eba = require('eba')

module.exports.main = function (params) {
  let h = new eba.Params(params)
  let nameString = h.get(":UserString")

  return request
    .get(`http://api.walmartlabs.com/v1/search?apiKey=${params.secrets.apiKey}&query=${encodeURIComponent(nameString)}`)
    .then(JSON.parse)
    .then(({items}) => {
      let item = items[0]
      if (item) {
        if (!item.shortDescription)
          item.shortDescription = ""
        return new eba.Result().setData('wmt:Product', item)
      } else {
        return { error: "I haven't found any product" }
      }
    })
    .catch((error) => {
      return { error: `Walmart API error: ${error}` }
    })
}
```

This action is similar to what we have created already. Note that we are using `eba` helpers pacakge to access the value of the `:UserString` via `let nameString = h.get(":UserString")`. We then supply the name and api key to the query string. When returning the results, we only take the first element returned and performing the same data processing as before. We are taking the first element as this action is meant to returning an object not a collection. Since it is possible to return multiple items with the same name from this api, we should add an action similar to the one above which can return this collection. We leave this as an exercise to the reader, as it is exactly the same signature but `wmt:Products` is used instead of `wmt:Product` and the data processing step is the same, except that is performed for each element in the collection instead of the first element:

```
items.forEach((item) => {
    if (!item.shortDescription)
        item.shortDescription = ""
})
return new eba.Result().setData('wmt:Products', items);
```

The last action to be programmed is similar to one above, except that it is UPC based search. Instead of searching against a name string, we will be searching against a number.


| Name                          | Signature                                                                 |
| ----------------------------- | ------------------------------------------------------------------------- |
| `wmt:SearchProductByUPC`     | `wmt:Product(optional :UPC(data :Number)) -> data wmt:Product`             |

Rather than a `:WithName` keyword, we expect a `:UPC` keyword as well as a `:Number`. Hence questions such as `show me product with UPC 123` will be supported by this action. The body of this action is likewise similar to its search-by-name counterpart. The only differences is that we unwrap `h.get(':Number')` and we supply a different query string, viz. `http://api.walmartlabs.com/v1/items?apiKey=${params.secrets.apiKey}&upc=${encodeURIComponent(upc)`.

With these actions in place, we have decent coverage for questions which search for trending products as well as questions which perform general product search by name or upc. On top of these questions, Watson provides you with out of the box support for filtering, sorting, aggregation, etc.

Here is a short list of questions you should be able to ask at this point within the tutorial.

- which products are trending?
- show me top 5 popular products
- show me average price of these
- what is product name for UPC 647627503349?
- show me products named "call of duty"
- show me popular products with positive description
- show me popular products with price less than $50


## Visualizers

Watson is able to understand our questions, but these raw JSON responses are not very pretty. We should add some visualizers to our front end.

Switch to the Assets tab, create two assets, and mark them as front end. The first asset is `wmt/products.jsx` and the second is `wmt/product.css`. Make sure you set the type of each file appropriately, viz. `text/jsx` and `text/css`

In the jsx file we will declare the following objects, viz. `wmt_ProductsData` and `wmt_ProductData`. Each concept can be assigned a visualization following the pattern: `<namespace>_<Concept>Data`. The data produced by our actions is passed to these functions for visualization.

Add the following jsx code to your asset:

```
wmt_ProductsData = ({data}) => {
  return (
    <div className="wmt-products">
      { data.map((item) =>
        React.createElement(
          wmt_ProductData,
          {data:item, key:item.itemId})) }
    </div>)
}

wmt_ProductData = ({data}) => {
  const item = data
  return (
    <div key={item.itemId} className="wmt-product">
      <div className="wmt-product-info">
        <a href={item.addToCartUrl} target="_blank" className="wmt-product-info-image">
          <img src={item.mediumImage}/>
        </a>
        <div className="wmt-product-info-name">
          <p><strong>{item.name}</strong></p>
          <p>
            {new Number(item.salePrice)
              .toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD"})
              .replace(/\.00/,"")}
            {item.msrp && item.salePrice/item.msrp < 0.99 ?
              <span> {"\u2014 "}
                <span className="wmt-product-discount">
                  {new Number(1-item.salePrice/item.msrp)
                    .toLocaleString("en-US", {style: "percent"})}
                  {" off MSRP"}
                </span>
              </span> : null}
          </p>
        </div>
      </div>
      <div className="wmt-product-info-description">
        <div dangerouslySetInnerHTML={{__html:wmt_decodeHTMLEntities(item.shortDescription
)}}/>
      </div>
    </div>)
}

wmt_decodeHTMLEntities = (encoded) => {
  if (encoded) {
    var elem = document.createElement('textarea')
    elem.innerHTML = encoded.replace(/[\uFFFD]/g,' ')
    return elem.value
  }
  else return ""
}

```

Our system understands that products is a list of product elements, so in our products visualizer, we simply call `data.map` to render each individual product. Inside of the product visualizer, we implement an html outline and fill in the tags with raw data from our product, e.g. `item.mediumImage`. These html tags make use of a few styles which we will expose in our second asset.

In the css file, add the following styles:

```
.wmt-product {
  margin-bottom: 20px;
}
.wmt-product:last-child {
  margin-bottom: 0;
}
.wmt-product-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.wmt-product-info img {
  max-width: 100px;
  margin-right: 15px;
}
.wmt-product-discount {
  color: red;
}
.wmt-product-info-description {
  display: block;
  overflow: hidden;
  line-height: 16px;
  max-height: calc(16px * 5);
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
}
```

We now have some nice visualizations for our responses. Save your changes and try them out. Note: if you do not see any changes, try refreshing your browser. Session refresh and browser refresh are two distinct operations within our application.

## Next Steps

At this point, you should have a working Walmart sample, which is almost identical to the sample we have posted online. There are always a points of improvement. We leave these as an exercise to the reader. For instance, you may have noticed that our action bodies are almost identical. In this case, we may create a back end asset which encapsulates our http request to walmart by exposing a simple `get` function with takes certain configuration parameters. You can then import this asset within your actions and perform a single function call to return the appropriate data. Additionally, the NLG could be improved for a few responses. You may reference our other public samples for examples on how to tune NLG using our helpers package. And, of course, feel free to extend the sample according to your desire.
