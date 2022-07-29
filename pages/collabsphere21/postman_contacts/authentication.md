---
layout: default
prevPage: pages/collabsphere21/postman_contacts/environment
nextPage: pages/collabsphere21/postman_contacts/creation
slug:
    - label: Collabsphere 2021 Workshop
      url: pages/collabsphere21/index
    - label: Postman Contacts Setup
      url: pages/collabsphere21/postman_contacts/index
    - label: Postman Authentication
---

Now it is time to set up the authentication request. Hover on the collection and click on the ellipsis (three periods). Select the "Add request" menu option.<br/>
<img src="../images/postman_contacts/add-request.png" alt="Add Request" height="150px"/>

With the request:
1. Rename it "Authentication".
2. Change "GET" to "POST"
3. As the Request URL enter {% raw %}"{{HOST}}/auth"{% endraw %}.
4. On the **Authorization** tab, set "Type" to "No Auth".
5. On the **Headers** tab, add a header "Content-Type" set to "application/json".
6. On the **Body** tab, select raw and enter:
    {% raw %}
    ~~~json
    {
      "username" : "{{USERNAME}}",
      "password" : "{{PASSWORD}}"
    }
    ~~~
    {: .code}
    {% endraw %}
7. On the **Tests** tab, enter the following code:
    {% raw %}
    ~~~js
    var content = pm.response.json();
    pm.collectionVariables.set("TOKEN", content.bearer);
    ~~~
    {: .code}
    {% endraw %}
8. Send the request.

Click on the Collabsphere collection again to open the collection contents. Check the **Variables** tab. The TOKEN variable should now have been set.

<div class="advanced">
You can clear the username and password variables by adding the following code to the Tests tab.<br/>
<div class="code language-js">
<div class="highlight">
pm.collectionVariables.set("USERNAME", "");<br/>
pm.collectionVariables.set("PASSWORD", "");
</div>
</div>
<br/>
This is good if you're sharing the Postman collection. It avoids accidentally sharing credentials. However, if you do this, you will need to enter the username and password, and save the Collection whenever authenticating.
</div>
<p/>
The most common cause for errors is using the wrong HTTP verb (e.g. using the default "GET" instead of "POST).
{: .troubleshoot}
<br/>
