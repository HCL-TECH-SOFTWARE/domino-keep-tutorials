---
layout: default
prevPage: pages/domino-new/setup/create-contact-form
nextPage: pages/domino-new/setup/create-scope
slug:
    - label: New Domino Database
      url: pages/domino-new
    - label: Setup
      url: pages/domino-new/setup
    - Create Customers Views
---

{::options parse_block_html="true" /}

Lists are collections of documents stored in Domino View design elements. This part of the tutorial will create two Domino Views.
{: .alert .alert-info}

### Create Customers Lists

#### "Customers By Name" Lists

1. Hover over the "Domino-REST-API-NewDB" collection name and click on the ellipsis (three dots). Select "Add Request".  
2. Name the request "customers list" and click Save by.
3. Change the method from "GET" to "PUT".
4. Set the URL as "&#123;&#123;SETUP_HOST&#125;&#125;/design/views/Customers?nsfPath=customers.nsf".
5. On the Headers tab, add a HTTP request header called "Authorization" with the value "&#123;&#123;bearer&#125;&#125;". This maps to the bearer collection variable we set from the "authenticate" request.
6. Add an HTTP request header "Content-Type" set to "application/json".
7. On the Body tab change the type to "Raw".
8. Set the request body content to:
    {% raw %}
    ~~~json
    {
        "name": "Customers",
        "selectionFormula": "SELECT (Form=\"Customer\")",
        "columns": [
            {
                "name": "name",
                "title": "Name",
                "separatemultiplevalues": false,
                "sort": "ascending",
                "formula": "name"
            },
            {
                "name": "category",
                "title": "Category",
                "separatemultiplevalues": false,
                "sort": "ascending",
                "formula": "category"
            },
            {
                "name": "address1",
                "title": "Address",
                "separatemultiplevalues": false,
                "sort": "ascending",
                "formula": "address1"
            },
            {
                "name": "address2",
                "title": "Address",
                "separatemultiplevalues": false,
                "sort": "ascending",
                "formula": "address2"
            },
            {
                "name": "city",
                "title": "City",
                "separatemultiplevalues": false,
                "sort": "ascending",
                "formula": "city"
            },
            {
                "name": "state",
                "title": "State",
                "separatemultiplevalues": false,
                "sort": "ascending",
                "formula": "state"
            },
            {
                "name": "zipCode",
                "title": "Zip Code",
                "separatemultiplevalues": false,
                "sort": "ascending",
                "formula": "zipCode"
            }
        ]
    }
    ~~~
    {: .code}
    {% endraw %}
1. Click "Send" to make the request.

#### Active Customers List

1. Hover over the "customers list" request and click on the ellipsis (three dots). Select "Duplicate".  
2. Change the name of the request to "active customers list" and click save.
3. Change the URL as "&#123;&#123;SETUP_HOST&#125;&#125;/design/views/Active%20Customers?nsfPath=customers.nsf".
4. On the Body tab set the request body content to:
    {% raw %}
    ~~~json
    {
        "name": "Active Customers",
        "selectionFormula": "SELECT (Form=\"Customer\" & status=\"Active\")",
        "columns": [
            {
                "name": "name",
                "title": "name",
                "separatemultiplevalues": false,
                "sort": "ascending",
                "formula": "name"
            },
            {
                "name": "category",
                "title": "category",
                "separatemultiplevalues": false,
                "sort": "ascending",
                "formula": "category"
            }
        ]
    }
    ~~~
    {: .code}
    {% endraw %}
5. Click "Send" to make the request.

Setting `separatemultiplevalues` to true will display the same document multiple times in the list, once for each value in that field. This option will typically be used in lists indexed specifically by those fields.
{: .alert .alert-info}

<div class="panel panel-info">
**Note**
{: .panel-heading}
<div class="panel-body">

For Domino REST API, lists have to explicitly be enabled for use. This provides flexibility for other methods of access to the NSF, e.g. Notes Client. It also provides the ability to create different database configurations for different audiences.

</div>
</div>

<div class="panel panel-success">
**Congratulations!**
{: .panel-heading}
<div class="panel-body">

This request has:

- Created a list of Customers by name.
- Created a list of only active customers.

</div>
</div>
