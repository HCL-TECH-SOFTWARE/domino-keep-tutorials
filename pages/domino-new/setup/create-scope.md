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

# Schemas and Scopes

Exposing a database with Domino REST API comprises two parts - the **Domino REST API Schema** and the **Domino REST API Scope**.

The **schema** defines _what_ can be exposed and requires an understanding of the database design. It will usually be set up by a developer and is stored as part of the database.

The **scope** defines _whether_ it is exposed and is stored centrally on the server. Depending on the division of responsibilities for the Domino server, this may be done by an administrator or a developer.

Creating the NSF automatically creates a basic **schema**, although with nothing exposed.

Before we can continue creating the design programmatically, we need to expose a **scope**. This could be done via the Domino REST API Configuration UI. The [Domino ToDo Database tutorial](../../todo/index.md) is a tutorial that takes that approach. In this tutorial, the schema and scope will be managed via REST API calls.


### Viewing The Schema

1. Hover over the "HCL DOMINO REST API" collection name and click on the ellipsis (three dots). Select "Add Request" Change the request to "GET" method.
2. Name the request "get schema" and click "Save".
3. Set the URL as "&#123;&#123;SETUP_HOST&#125;&#125;/schema?configName=customers&nsfPath=customers.nsf".
4. On the Headers tab, add a HTTP request header called "Authorization" with the value "&#123;&#123;bearer&#125;&#125;". This maps to the bearer collection variable we set from the "authenticate" request.
5. Click "Send" to make the request.
6. Save and close the request. The JSON object for the schema will be returned. This can be used to make update requests to the schema.

### Creating The Scope

1. Hover over the "HCL DOMINO REST API collection name and click on the ellipsis (three dots). Select "Add Request".
2. Name the request "create scope" and click "Save".
3. Change the method from "GET" to "POST".
4. Set the URL as "&#123;&#123;SETUP_HOST&#125;&#125;/admin/scope?createSchema=true".
5. On the Headers tab, add a HTTP request header called "Authorization" with the value "&#123;&#123;bearer&#125;&#125;". This maps to the bearer collection variable we set from the "authenticate" request.
6. Add an HTTP request header "Content-Type" set to "application/json".
7. On the Body tab change the type to "Raw".
8. Set the request body content to:
   {% raw %}
    ~~~json
    {
      "apiName": "demoapi",
      "createSchema": false,
      "description": "The famous demo database",
      "icon": "Base64 stuff, preferably SVG",
      "iconName": "beach",
      "isActive": true,
      "nsfPath": "Demo.nsf",
      "schemaName": "demoapi",
      "server": "*" 
    }
    ~~~
    {: .code}
    {% endraw %}
    <p/>    
9. Click "Send" to make the request.
10. Save and close the request.

<div class="panel panel-success">
**Congratulations!**
{: .panel-heading}
<div class="panel-body">

This request has enabled the new scope database to be administered via HCL Domino Rest API.
</div>
</div>
