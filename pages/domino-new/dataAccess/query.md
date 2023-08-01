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

# Querying The Database

Remember when we set the `dqlFormula` of the schema to `@True` and added `dql` form mode in `Contact` form? Both of these steps are required in order for us to run a DQL query.

## Getting Contacts for a Customer

1. Hover over the `Domino-REST-API-NewDB` collection name and click on the ellipsis (three dots). Select **Add Request**.
2. Name the request `get contact from customer UNID` and click **Save**.
3. Change the method from **GET** to **POST**.
4. Set the URL as {% raw %}`{{HOST}}/query?dataSource=customers&action=execute`{% endraw %}.
5. Set the headers for **Authorization** and **Content-Type**.
6. On the **Body** tab change the type to `Raw` and also change the type from `Text` to `JSON`.
7. Set the request body content as below, but setting the UNID variable to the value for `unid` you received when creating the customer:
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
8. Click **Send**.
9. **Save** and close the request.

![DQL Query](../images/data/query.png)

You have queried all contacts for the company requested.
{: .alert .alert-success}
