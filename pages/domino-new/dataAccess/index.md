---
layout: default
prevPage: pages/domino-new/formModes/lists
nextPage: pages/domino-new/dataAccess/customers
slug:
  - label: New Domino Database
    url: pages/domino-new
  - Data Access
---

# Data Access

We are now ready to push data into our database. Because we have enabled `openAccess` (It is shown as **In $DATA Scope** in the admin UI), we can perform any action via a browser or Postman using just the JWT token for an authenticated user.

If communication is done server-to-server, for example from a Node.js or Java application, `openAccess` can be switched off. Then a Domino REST API Application can be set up, with an app ID and app secret. Only request using a valid app ID and app secret would be accepted, providing an extra layer of security.

All requests must be authenticated. As a result, all Postman requests are expected to have:

- HTTP request header called **Authorization** with the value {% raw %}`{{bearer}}`{% endraw %}.
- HTTP request header **Content-Type** set to `application/json` if it is a **PUT** or **POST**.
