---
layout: default
prevPage: pages/domino-new/dataAccess/customers
nextPage: pages/domino-new/dataAccess/lists
slug:
    - label: New Domino Database
      url: pages/domino-new
    - label: Data Access
      url: pages/domino-new/dataAccess
    - Contacts
---

{::options parse_block_html="true" /}

Before creating a contact, you will need to run the "create customer" request again, to have a valid customerUNID in the collection variables to tie the contact to.
{: .alert .alert-warning}
### Create a New Contact

1. Hover over the "keep-domino" collection name and click on the ellipsis (three dots). Select "Add Request".
1. Name the request "create contact" and click "Save to keep-domino".
1. Change the method from "GET" to "POST".
1. Set the URL as "&#123;&#123;HOST&#125;&#125;/document?dataSource=customers".
1. Set the headers for "Authorization" and "Content-Type".
1. On the Body tab change the type to "Raw".
1. Set the request body content as below, setting the customerUNID field to the **parentUNID** collection variable set when you created a customer:
    {% raw %}
    ~~~json
    {
      "Form": "Contact",
      "first_name": "Marvin",
      "last_name": "Acme",
      "customerUNID": "INSERT_UNID_HERE",
      "job_title": "Chairman",
      "email": "marvin.acme@acme.com",
      "phone": ""
    }
    ~~~
    {: .code}
    {% endraw %}
1. Click "Send".
    ![Create Contact](../images/data/create_contact.png)
1. Save the request.

### Create another New Contact

1. Change the request body content as below:
    {% raw %}
    ~~~json
    {
      "Form": "Contact",
      "first_name": "Wile E.",
      "last_name": "Coyote",
      "customerUNID": "{{parentUNID}}",
      "job_title": "Tester",
      "email": "wile.coyote@acme.com",
      "phone": ""
    }
    ~~~
    {: .code}
    {% endraw %}
1. Click "Send".