---
layout: default
prevPage: pages/domino-new/setup/index
nextPage: pages/domino-new/setup/create-nsf
slug:
    - label: New Domino Database
      url: pages/domino-new
    - label: Setup
      url: pages/domino-new/setup
    - Postman Authentication
---

{::options parse_block_html="true" /}

### Postman Authentication

#### Create Collection
1. On the Collections tab, click the "New Collections" button.  
2. In the "CREATE A NEW COLLECTION" dialog, set the Name as "keep-domino".  
3. On the Variables tab of the dialog, add a new variable called "HOST". This should map to the Domino KEEP API url and should end "/api/v1". For example, if you're running Keep locally and with the default ports, this will be "http://localhost:8880/api/v1".  
4. Click "Create".
![Postman Environment](../images/setup/collection.jpg)

#### Create Authentication
1. Hover over the "keep-domino" collection name and click on the ellipsis (three dots). Select "Add Request".  
<img src="../images/setup/add-request.jpg" alt="Postman Add Request" width="250" />
1. Name the request "authenticate" and click "Save to keep-domino".  
1. Change the method from "GET" to "POST".  
1. Set the URL as "&#123;&#123;HOST&#125;&#125;/auth".  
1. On the Headers tab add a header for "Content-Type", set to "application/json".  
1. On the Body tab change the type to "Raw" and enter the username and password as a JSON payload.
1. Click "Send" to make the request.
![Postman Environment](../images/setup/authentication.jpg)

If you get a 404 message, verify the method is "POST" and the Content-Type header is set correctly. Validation requires these.
{: .troubleshoot #trouble1}

#### Store Bearer Token
1. On the Tests tab add the following code:
    {% raw %}
    ~~~javascript
    var jsonData = pm.response.json();
    pm.collectionVariables.set("bearer", "Bearer " + jsonData.bearer);
    ~~~
    {: .code}
    {% endraw %}
    Line 1 extracts the HTTP response as JSON. Line 2 extract the bearer token from the response and stores it in a collection variable for use in all future authenticated requests.
1. Click "Send" to make the request again.
1. Hover over the "keep-domino" collection name and click on the ellipsis (three dots). Select "Edit" and check the Variables tab. You should now see the bearer token also stored.
![Bearer token](../images/setup/bearer.jpg)
1. Save and close the request.