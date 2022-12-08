---
layout: default
prevPage: pages/todo/dataAccess/lists
nextPage: pages/todo/congrats
slug:
    - label: Domino ToDo Database
      url: pages/todo
    - label: Data Access
      url: pages/todo/dataAccess/index
    - DQL Queries
---

{::options parse_block_html="true" /}

### DQL Queries

If configuration allows DQL, you can also perform DQL queries against an NSF. A form has to have a mode with the name `dql`, otherwise documents with that Form are excluded from search results.

### Set Up dql Mode

Back in the Domino REST API Admin UI, access the todorest Domino REST API Database again. 

1. Open the "todo" form and click "+ Add Mode".
2. Set the mode name as `dql` and click "Save".
3. Add all fields, setting them all to Read Only.
   ![DQL Mode](../images/dataAccess/dql-mode.png)
4. Click Save.

#### Run a Query

1. Hover over the "domino-restapi-todo" collection name and click on the ellipsis (three dots). Select "Add Request".
1. Name the request "query data" and click "Save to domino-restapi-todo".
1. Change the method from "GET" to "POST".
1. Set the URL as {% raw %}"&#123;&#123;HOST&#125;&#125;/query?action=execute&dataSource=todorest"{% endraw %}.
1. Set the headers for "Authorization" and Content-Type.
1. On the Body tab change the type to "Raw".
1. Set the request body content to:
    {% raw %}
    ~~~json
    {
      "query": "form = 'todo' and completed = ?STATUS",
      "maxScanDocs": 500000,
      "maxScanEntries": 200000,
      "timeoutSecs": 300,
      "viewRefresh": true,
      "noViews": false,
      "variables": {
          "STATUS": "false"
      }
    }
    ~~~
    {: .code}
    {% endraw %}
1. Click "Send". You will get a list of documents matching the query in the database.
   ![DQL](../images/dataAccess/query.jpg)
1. Save and close the request.

You request can be refined with `count` and `start` parameters, as with views.
{: .alert .alert-info}