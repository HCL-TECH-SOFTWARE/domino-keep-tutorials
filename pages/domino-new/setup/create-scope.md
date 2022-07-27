---
layout: default
prevPage: pages/domino-new/setup/create-nsf
nextPage: pages/domino-new/setup/create-customer-form
slug:
    - label: New Domino Database
      url: pages/domino-new
    - label: Setup
      url: pages/domino-new/setup
    - Create Scope
---

{::options parse_block_html="true" /}


<div class="panel panel-info">
Schemas and Scopes
{: .panel-heading}
<div class="panel-body">
Exposing a database with KEEP comprises two parts - the **KEEP Schema** and the **KEEP Scope**.

The **schema** defines _what_ can be exposed and requires an understanding of the database design. It will usually be set up by a developer and is stored as part of the database.

The **scope** defines _whether_ it is exposed and is stored centrally on the server. Depending on the division of responsibilities for the Domino server, this may be done by an administrator or a developer.

Creating the NSF automatically creates a basic **schema**, although with nothing exposed.

Before we can continue creating the design programmatically, we need to expose a **scope**. This could be done via the REST Configuration UI. The [Domino ToDo Database tutorial](../../todo/index.html) is a tutorial that takes that approach. In this tutorial, the scope and schema will be managed via REST API calls.
</div>
</div>

### Viewing The Schema

1. Hover over the "keep-domino" collection name and click on the ellipsis (three dots). Select "Add Request".
1. Name the request "get schema" and click "Save to keep-domino".
1. Set the URL as "&#123;&#123;HOST&#125;&#125;/schema?configName=customers&nsfPath=customers.nsf".
1. On the Headers tab, add a HTTP request header called "Authorization" with the value "&#123;&#123;bearer&#125;&#125;". This maps to the bearer collection variable we set from the "authenticate" request.
1. Click "Send" to make the request.
1. Save and close the request. The JSON object for the schema will be returned. This can be used to make update requests to the schema.

### Creating The Scope

1. Hover over the "keep-domino" collection name and click on the ellipsis (three dots). Select "Add Request".
1. Name the request "create scope" and click "Save to keep-domino".
1. Change the method from "GET" to "POST".
1. Set the URL as "&#123;&#123;HOST&#125;&#125;/scope?createSchema=true".
1. On the Headers tab, add a HTTP request header called "Authorization" with the value "&#123;&#123;bearer&#125;&#125;". This maps to the bearer collection variable we set from the "authenticate" request.
1. Add an HTTP request header "Content-Type" set to "application/json".
1. On the Body tab change the type to "Raw".
1. Set the request body content to:
    {% raw %}
    ~~~json
{
    "Subject": "Domino Customers",
    "apiName": "customers",
    "schemaName": "customers",
    "nsfPath": "customers.nsf",
    "isActive": true,
    "ISiteNameFull": "REST Database Site: customers (active)",
    "ISiteOrg": "Domino Customers access"
}
    ~~~
    {: .code}
    {% endraw %}
    <p/>
1. Click "Send" to make the request.
1. Save and close the request.

<div class="panel panel-success">
**Congratulations!**
{: .panel-heading}
<div class="panel-body">

This request has enabled the new database to be administered via KEEP.
</div>
</div>
