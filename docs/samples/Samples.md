---
sidebarDepth : 1
---

# Example agents

We have provided some example agents with notes about how they were developed to help introduce you to the features available to EBA..

These agents were developed completely within the EBA lab tools. For each agent, we have provided the yaml configuration which you load into your own sandbox and review. 

[Walmart trends](./Walmart.md) - gets trending products from Walmart.  
*topics:* external api, settings configuration, UI assets, collaborative reasoning.

[Riddles](./Riddles.md) - take over agent for asking riddles.  
*topics:* crafted dialog messages, session storage, reasoning take over, custom annotations.

[Wikipedia](./Wikipedia.md) - fallback style agent which searches Wikipedia for relevant article if no other agent handled user question.  
*topics:* fallback style agent, @fallback endpoint, user input cleaning.

[Watson Discovery](./WatsonDiscovery.md) - fallback style agent which searches Watson Discovery collections for relevant articles.
*topics:* fallback style agent, @fallback endpoint, frontend visualizations

[EDI](./EDI.md) - models inspection operations and a small submission process for objects within the Electronic Data Interchange.  
*topics:* attribute support, data modifiers, user storage using eba api, @start endpoint, basic process management.

[Supply chain insights](./SupplyChain.md) - provides an agent interface for working with supply orders and sales orders.  
*topics:* lazy data api, @force endpoint, multiple attribute types, backend assets, complex action signatures.


[Quest](./Quest.md) - provides Natural Language Interface to Databases by creating SQL queries from natural language questions. 
*topics:* structured data, database schema, SQL queries.

