---
layout: default
prevPage: pages/collabsphere21/postman_contacts/population
nextPage: pages/collabsphere21/nodered_contacts/index
slug:
    - label: Collabsphere 2021 Workshop
      url: pages/collabsphere21/index
    - label: Postman Contacts Setup
      url: pages/collabsphere21/postman_contacts/index
    - label: Query of Data
---

With an appropriate Form Access Mode, data can also be queried.

### Run Query

Add a request to the Postman collection.

1. Rename it "DQL Query"
2. Change "GET" to "PUT"
3. Set the request URL to {% raw %}"{{HOST}}/query?action=execute&dataSource={{CONTACTS}}"{% endraw %}.
4. On the **Headers** tab, add a header "Content-Type" set to "application/json".
5. On the **Body** tab, select raw and enter:On the **Body** tab, select raw and enter:
    {% raw %}
    ~~~json
    {
      "query": "form = 'Contact' and state = ?State",
      "maxScanDocs": 500000,
      "maxScanEntries": 200000,
      "timeoutSecs": 300,
      "viewRefresh": true,
        "noViews": false,
        "variables": {
          "State": "CA"
      }
    }
    ~~~
    {: .code}
    {% endraw %}
6. Send the request.
