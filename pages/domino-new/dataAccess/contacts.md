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

# Contacts

Before creating a contact, you will need to run the `create customer` request again (in case you deleted a created customer), to have a valid `customerUNID` in the collection variables to tie the contact to.
{: .alert .alert-warning}

## Create Contact

1. Hover over the `Domino-REST-API-NewDB` collection name and click on the ellipsis (three dots). Select **Add Request**.
2. Name the request `create contact` and click **Save**.
3. Change the method from **GET** to **POST**.
4. Set the URL as {% raw %}`{{HOST}}/document?dataSource=customers`{% endraw %}.
5. Set the headers for **Authorization** and **Content-Type**.
6. On the **Body** tab change the type to `Raw` and also change the type from `Text` to `JSON`.
7. Set the request body content as below:
    {% raw %}
    ~~~json
    {
      "Form": "Contact",
      "first_name": "Marvin",
      "last_name": "Acme",
      "customerUNID": "{{parentUNID}}",
      "job_title": "Chairman",
      "email": "marvin.acme@acme.com",
      "phone": ""
    }
    ~~~
    {: .code}
    {% endraw %}

    <div class="panel panel-info">
    NOTE
    {: .panel-heading}
    <div class="panel-body">
    Notice the `customerUNID` is set to {% raw %}`{{parentUNID}}`{% endraw %} collection variable set when you created the customer.
    </div>
    </div>
8. Click **Send**.
    ![Create Contact](../images/data/create_contact.png)

## Create Another Contact

1. Change the request body content and repeat the step on the **Create Contact** as below:
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
2. Click **Send**.
3. **Save** and close the request.
