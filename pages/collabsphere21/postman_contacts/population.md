---
layout: default
prevPage: pages/collabsphere21/postman_contacts/creation
nextPage: pages/collabsphere21/postman_contacts/retrieval
slug:
    - label: Collabsphere 2021 Workshop
      url: pages/collabsphere21/index
    - label: Postman Contacts Setup
      url: pages/collabsphere21/postman_contacts/index
    - label: Population of Data
---

Now the database is ready to be populated. 

### Mock Data
To get dummy data, <a href="https://www.mockaroo.com" target="_new">https://www.mockaroo.com</a> can be used.

1. "id" field is not needed, but a "Form" field is required. Change the field name to "Form", change the type to "Custom List" and set only one option - "Contact".
2. Leave "first_name", "last_name", "email" and "gender" unchanged.
3. Change ip_address to "city" and set the type to "City".
4. Add another field. Name it "state", set the type to "State" and change the set to "Only US".
5. Change the format to JSON.
6. Download the data.

### Bulk Import
Add a request to the Postman collection.

1. Rename it "Bulk Create"
2. Change "GET" to "POST"
3. Set the request URL to "&#123;&#123;HOST&#125;&#125;/bulk/create?db=&#123;&#123;CONTACTS&#125;&#125;".
4. On the **Headers** tab, add a header "Content-Type" set to "application/json".
5. On the **Body** tab, select raw. Add `{"documents" : }` and paste in the JSON array from Mockaroo as the value of the "documents" property.
6. Send the request.