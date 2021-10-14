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

With an appropriate Form Access Mode, data can also be queried. The Form Access Mode could be set up via the Admin GUI, but the APIs the Admin GUI uses are also available for authorised users. The Form Access Mode will be created via Postman.

### Create Form Access Mode

Add a request to the Postman collection.

1. Rename it "Create DQL Mode"
2. Change "GET" to "PUT"
3. Set the request URL to "&#123;&#123;HOST&#125;&#125;/admin/database/&#123;&#123;CONTACTS&#125;&#125;/Contact".
4. On the **Headers** tab, add a header "Content-Type" set to "application/json".
5. On the **Body** tab, select raw and enter:
    {% raw %}
    ~~~json
    {
      "modeName": "dql",
      "readAccessFields": [
        "Form",
        "city",
        "email",
        "first_name",
        "gender",
        "last_name",
        "state"
      ],
      "writeAccessFields": [
        "Form",
        "city",
        "email",
        "first_name",
        "gender",
        "last_name",
        "state"
      ],
      "readAccessFormula": "",
      "writeAccessFormula": "",
      "deleteAccessFormula": "@false",
      "onLoad": "",
      "onSave": "",
      "computeWithForm": false,
      "strictInput": true,
      "allowAnyField": false
    }
    ~~~
    {: .code}
    {% endraw %}
6. Send the request.

### Run Query

Add a request to the Postman collection.

1. Rename it "DQL Query"
2. Change "GET" to "PUT"
3. Set the request URL to "&#123;&#123;HOST&#125;&#125;/query?action=execute&db=&#123;&#123;CONTACTS&#125;&#125;".
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