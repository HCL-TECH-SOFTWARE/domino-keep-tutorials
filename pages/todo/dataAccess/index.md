---
layout: default
prevPage: pages/todo/configure/to-do-config
nextPage: pages/todo/dataAccess/create-todos
slug:
    - label: Domino ToDo Database
      url: pages/todo
    - Data Access
---

{::options parse_block_html="true" /}

We are now ready to push data into our Keep Database. Because we have enabled "Open Access", we can perform any action via a browser or Postman using just the JWT token for an authenticated user.

If communication is done server-to-server, for example from a Node.js or Java application, "Open Access" can be switched off. Then a Keep Application can be set up, with an app ID and app secret. Only request using a valid app ID and app secret would be accepted, providing an extra layer of security.

All requests must be authenticated. As a result, all Postman requests are expected to have:
- HTTP request header called "Authorization" with the value "&#123;&#123;bearer&#125;&#125;".
- HTTP request header "Content-Type" set to "application/json" if it is a PUT or POST.
- We have configured the NSF for access under the name "todo-keep", so every API will use the querystring parameter `?db=todo-keep`.