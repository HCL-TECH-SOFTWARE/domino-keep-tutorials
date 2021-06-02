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

### Accessing Lists

In the Setup part we created two lists, one of all customers and the other of active customers.

#### Get All Customers

1. Hover over the "keep-domino" collection name and click on the ellipsis (three dots). Select "Add Request".  
1. Name the request "get customers" and click "Save to keep-domino".
2. Set the URL as "&#123;&#123;HOST&#125;&#125;/lists/Customers?db=customers".
3. Set the headers for "Authorization".
4. Click "Send".
5. Save the request.

You will receive a list of entries for all customers, with name, category and address.
{: .alert .alert-success}

#### Get Active Customers

1. Hover over the "keep-domino" collection name and click on the ellipsis (three dots). Select "Add Request".  
1. Name the request "get active customers" and click "Save to keep-domino".
2. Set the URL as "&#123;&#123;HOST&#125;&#125;/lists/Active%20Customers?db=customers".
3. Set the headers for "Authorization".
4. Click "Send".
5. Save the request.

You will receive a list of entries for all customers, this time with just name and category.
{: .alert .alert-success}