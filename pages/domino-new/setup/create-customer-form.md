---
layout: default
prevPage: pages/domino-new/setup/create-nsf
nextPage: pages/domino-new/setup/create-contact-form
slug:
    - label: New Domino Database
      url: pages/domino-new
    - label: Setup
      url: pages/domino-new/setup
    - Create Customer Form
---

{::options parse_block_html="true" /}

### Create Customer Form

1. Hover over the "keep-domino" collection name and click on the ellipsis (three dots). Select "Add Request".  
1. Name the request "customer form" and click "Save to keep-domino".
1. Change the method from "GET" to "PUT".
1. Set the URL as "&#123;&#123;HOST&#125;&#125;/design/forms/Customer?db=customers".
1. On the Headers tab, add a HTTP request header called "Authorization" with the value "&#123;&#123;bearer&#125;&#125;". This maps to the bearer collection variable we set from the "authenticate" request.
1. Add an HTTP request header "Content-Type" set to "application/json".
1. On the Body tab change the type to "Raw".
1. Set the request body content to:
    {% raw %}
    ~~~json
    {
        "name": "Customer",
        "alias": "",
        "fields": [
            {
                "name": "name",
                "type": "text",
                "allowmultivalues": false
            },
            {
                "name": "category",
                "type": "text",
                "allowmultivalues": true
            },
            {
                "name": "address1",
                "type": "text",
                "allowmultivalues": false
            },
            {
                "name": "address2",
                "type": "text",
                "allowmultivalues": false
            },
            {
                "name": "city",
                "type": "text",
                "allowmultivalues": false
            },
            {
                "name": "state",
                "type": "text",
                "allowmultivalues": false
            },
            {
                "name": "zipCode",
                "type": "text",
                "allowmultivalues": false
            },
            {
                "name": "website",
                "type": "text",
                "allowmultivalues": false
            },
            {
                "name": "status",
                "type": "text",
                "allowmultivalues": false
            }
        ]
    }
    ~~~
    {: .code}
    {% endraw %}
1. Click "Send" to make the request.

If you get a 404 message, verify the method is "PUT" and the Content-Type header is set correctly. The same endpoint is used for creating or updating forms, so it is a PUT rather than a POST.
{: .troubleshoot #trouble1}

<br/>

<div class="panel panel-info">
**Note**
{: .panel-heading}
<div class="panel-body">

For a Keep Database, Forms have to explicitly be enabled. Otherwise documents saved with that Form will not be returned by the API. Creating a Form via Keep will automatically enable it for full CRUD access with a Form Access Mode called "default".

Form Access Modes provide more granular access to documents that use a specific Form. You can:  
- restrict access to certain fields on the form for read or write access.  
- restrict who can read, write or delete documents at that mode.  
- for read access, compute additional fields not stored on the document, e.g. concatenating a name or an address.  
- compute additional fields to be saved to the document, e.g. a Status field, to ensure documents cannot be created with arbitrary statuses.

</div>
</div>

<div class="panel panel-success">
**Congratulations!**
{: .panel-heading}
<div class="panel-body">

This request has:
- Created a form in the customers database.
- Added fields to the form.
- Exposed the form for Keep data access.
</div>
</div>