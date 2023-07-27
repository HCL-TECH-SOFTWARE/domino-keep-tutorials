---
layout: default
prevPage: pages/domino-new/dataAccess/contacts
nextPage: pages/domino-new/dataAccess/query
slug:
  - label: New Domino Database
    url: pages/domino-new
  - label: Data Access
    url: pages/domino-new/dataAccess
  - Lists
---

{::options parse_block_html="true" /}

# Accessing Lists

In the **Setup** part we created two lists, one of all customers and the other of active customers.

## Get All Customers

1. Hover over the `Domino-REST-API-NewDB` collection name and click on the ellipsis (three dots). Select **Add Request**.  
2. Name the request `get customers`, change the request method to **GET** and click **Save**.
3. Set the URL as {% raw %}`{{HOST}}/lists/Customers?dataSource=customers`{% endraw %}.
4. Set the headers for **Authorization**.
5. Click **Send**.

You will receive a list of entries for all customers, with name, category and address.
{: .alert .alert-success}

## Get Active Customers

1. Hover over the `Domino-REST-API-NewDB` collection name and click on the ellipsis (three dots). Select **Add Request**.  
2. Name the request `get active customers`, change the request method to **GET** and click **Save**.
3. Set the URL as {% raw %}`{{HOST}}/lists/Active%20Customers?dataSource=customers`{% endraw %}.
4. Set the headers for **Authorization**.
5. Click **Send**.

You will receive a list of entries for active customers, this time with just name and category.
{: .alert .alert-success}
