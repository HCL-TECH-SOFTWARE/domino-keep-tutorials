---
layout: default
prevPage: pages/domino-new/setup/create-contact-form
nextPage: pages/domino-new/formModes/index
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

1. Hover over the "keep-domino" collection name and click on the ellipsis (three dots). Select "Add Request".  
1. Name the request "customers list" and click "Save to keep-domino".
1. Change the method from "GET" to "PUT".
1. Set the URL as "&#123;&#123;HOST&#125;&#125;/design/views/Customers?dataSource=customers&nsfPath=tutorials/customers.nsf".
1. On the Headers tab, add a HTTP request header called "Authorization" with the value "&#123;&#123;bearer&#125;&#125;". This maps to the bearer collection variable we set from the "authenticate" request.
1. Add an HTTP request header "Content-Type" set to "application/json".
1. On the Body tab change the type to "Raw".
1. Set the request body content to:
    {% raw %}
    ~~~json
    {
        "name": "Customers",
        "selectionFormula": "Form = \"Customer\"",
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
1. Change the name of the request to "active customers list".
1. Change the URL as "&#123;&#123;HOST&#125;&#125;/design/views/Active%20CustomersdataSource=customers&nsfPath=tutorials/customers.nsf".
1. On the Body tab set the request body content to:
    {% raw %}
    ~~~json
    {
        "name": "Active Customers",
        "selectionFormula": "Form = \"Customer\" & \"status\" = \"Active\"",
        "fields": [
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
1. Click "Send" to make the request.

Setting `separatemultiplevalues` to true will display the same document multiple times in the list, once for each value in that field. This option will typically be used in lists indexed specifically by those fields.
{: .alert .alert-info}

<div class="panel panel-info">
**Note**
{: .panel-heading}
<div class="panel-body">

For a Keep Database, lists have to explicitly be enabled for use. This provides flexibility for other methods of access to the NSF, e.g. Notes Client. It also provides the ability to create different Keep Database configurations for different audiences.

When creating a view, it will automatically be enabled.

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
