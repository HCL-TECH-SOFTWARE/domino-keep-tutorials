---
layout: default
prevPage: pages/domino-new/dataAccess/lists
nextPage: pages/domino-new/congrats
slug:
    - label: New Domino Database
      url: pages/domino-new
    - label: Data Access
      url: pages/domino-new/dataAccess
    - Queries
---

{::options parse_block_html="true" /}

## Querying The Database

We didn't create a list of contacts. But we can run a dynamic query. Of course, performance is not quite as good as for an indexed list.

### Getting Contacts for a Customer

1. Hover over the "Domino-REST-API-NewDB" collection name and click on the ellipsis (three dots). Select "Add Request".   
2. Name the request "get contact from customer UNID".
3. Change the method from "GET" to "POST".
4. Set the URL as "&#123;&#123;HOST&#125;&#125;/query?dataSource=customers&action=execute".
5. Set the headers for "Authorization" and "Content-Type".
6. On the Body tab change the type to "Raw".
7. Set the request body content as below, but setting the UNID variable to the value for **@unid** you received when creating the customer:
  {% raw %}
  ~~~json
  {
      "query": "form = 'contact' and customerUNID = ?UNID",
      "maxScanDocs": 500000,
      "maxScanEntries": 200000,
      "timeoutSecs": 300,
      "viewRefresh": true,
      "noViews": false,
      "variables": {
          "UNID": "{{parentUNID}}"
      }
  }
  ~~~
  {: .code}
  {% endraw %}
8. Click "Send".
9. Save the request.

![DQL Query](../images/data/query.png)

You have queried all contacts for the company requested.
{: .alert .alert-success}
