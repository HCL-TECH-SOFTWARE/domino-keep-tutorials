---
layout: default
prevPage: pages/domino-new/setup/update-schema
nextPage: pages/domino-new/formModes/index
slug:
  - label: New Domino Database
    url: pages/domino-new
  - label: Setup
    url: pages/domino-new/setup
  - Create Scope
---

{::options parse_block_html="true" /}

# Create Scope

<div class="panel panel-info">
Scopes
{: .panel-heading}
<div class="panel-body">
**Domino REST API Scope** is the final part on exposing a database with Domino REST API.

The scope defines to whom a specific schema is exposed. This is not done directly, there isn't a place you pick users to add to a scope, instead you can specify a list of scopes a user has when they log in with the authentication endpoint. Because of this, you can set up multiple scopes, each pointing to a different schema for the same database. You could have different fields exposed through one scope that aren't exposed in another or that only documents of a certain form type are available through one scope, giving you many different options. It is important to note that all Domino Database ACL security and rights are maintained.

Now, we need to expose a **scope**. This could be done via the Domino REST API Configuration UI. The [Domino ToDo Database tutorial](../../todo/index.md) is a tutorial that takes that approach. In this tutorial, the schema and scope will be managed via REST API calls.
</div>
</div>

## Creating The Scope

1. Hover over the `Domino-REST-API-NewDB` collection name and click on the ellipsis (three dots). Select **Add Request**.
2. Name the request `create scope` and click **Save**.
3. Change the method from **GET** to **POST**.
4. Set the URL as {% raw %}`{{SETUP_HOST}}/admin/scope?createSchema=true`{% endraw %}.
5. On the **Headers** tab, add a HTTP request header called **Authorization** with the value {% raw %}`{{bearer}}`{% endraw %}. This maps to the bearer collection variable we set from the `authenticate` request.
6. Add an HTTP request header **Content-Type** set to `application/json`.
7. On the **Body** tab change the type to `Raw` and also change the type from `Text` to `JSON`.
8. Set the request body content to:
   {% raw %}
    ~~~json
    {
      "apiName": "customers",
      "description": "Customer scope",
      "icon": "Base64 stuff, preferably SVG",
      "iconName": "beach",
      "isActive": true,
      "nsfPath": "customers.nsf",
      "schemaName": "customers"
    }
    ~~~
    {: .code}
    {% endraw %}
9. Click **Send** to make the request.
10. **Save** and close the request.

<div class="panel panel-success">
**Congratulations!**
{: .panel-heading}
<div class="panel-body">

This request has enabled the new scope database to be administered via Domino Rest API.
</div>
</div>
