---
layout: default
prevPage: pages/domino-new/setup/create-customers-lists
nextPage: pages/domino-new/setup/create-scope
slug:
  - label: New Domino Database
    url: pages/domino-new
  - label: Setup
    url: pages/domino-new/setup
  - Update Schema
---

{::options parse_block_html="true" /}

# Update Schema

<div class="panel panel-info">
Schemas
{: .panel-heading}
<div class="panel-body">
**Domino REST API Schema** is the first part on exposing a database with Domino REST API.

The **schema** defines _what_ can be exposed and requires an understanding of the database design. It will usually be set up by a developer and is stored as part of the database.

Creating an NSF automatically creates a basic schema, although with nothing exposed.
</div>
</div>

## Viewing the Schema

1. Hover over the `Domino-REST-API-NewDB` collection name and click on the ellipsis (three dots). Select **Add Request**.
2. Name the request `view schema` and click **Save**.
3. Set the URL as {% raw %}`{{SETUP_HOST}}/schema?configName=customers&nsfPath=customers.nsf`{% endraw %}.
4. On the **Headers** tab, add a HTTP request header called **Authorization** with the value {% raw %}`{{bearer}}`{% endraw %}. This maps to the bearer collection variable we set from the `authenticate` request.
5. Click **Send** to make the request.
6. Save and close the request. The JSON object for the schema will be returned. This can be used to make update requests to the schema.

## Updating the Schema

1. Hover over the `Domino-REST-API-NewDB` collection name and click on the ellipsis (three dots). Select **Add Request**.
2. Name the request `update schema` and click **Save**.
3. Change the method from **GET** to **POST**.
4. Set the URL as {% raw %}`{{SETUP_HOST}}/schema?configName=customers&nsfPath=customers.nsf`{% endraw %}.
5. On the **Headers** tab, add a HTTP request header called **Authorization** with the value {% raw %}`{{bearer}}`{% endraw %}. This maps to the bearer collection variable we set from the `authenticate` request.
6. Add an HTTP request header **Content-Type** set to `application/json`.
7. On the **Body** tab change the type to `Raw`.
8. Copy the results from `view schema` and paste it inside the request body.
9. Replace `iconName` with `mountain`.
10. Replace `icon` with:
    {% raw %}
    ~~~text
    PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNERTRDM0M7IiBwb2ludHM9IjMwOC45NjYsMjYuNDgzIDI1NiwwIDI1Niw1Mi45NjYgIi8+DQo8cmVjdCB4PSIyNDcuMTcyIiBzdHlsZT0iZmlsbDojQ0ZDRkNGOyIgd2lkdGg9IjE3LjY1NSIgaGVpZ2h0PSIxMzIuNDE0Ii8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojODdDRUQ5OyIgcG9pbnRzPSI0MTQuODk3LDE5NC4yMDcgMzkzLjU4NywyMjQuMDM1IDM0NC4yNzYsMTUwLjA2OSAzMTcuNzkzLDE5NC4yMDcgMjU2LDk3LjEwMyAxOTQuNjc1LDE4NC43MTcgMTY3LjcyNCwxNTAuMDY5IDAsMzcwLjc1OSAwLDUxMiA1MTIsNTEyIDUxMiwzNzkuNTg2ICIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzcxQzREMTsiIGQ9Ik00NTIuNTM3LDI2Ni4wNjNDMzE3LjU4MSw0MDAuMTAyLDk3LjE0OCw0NjAuMTU2LDAsNDgyLjI0MlY1MTJoNTEyVjM3OS41ODZMNDUyLjUzNywyNjYuMDYzeiIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzcyOUUxQzsiIHBvaW50cz0iMjI5LjUxNyw1MTIgNDE0Ljg5NywzNTMuMTAzIDQ1OS4wMzQsMzg4LjQxNCA1MTIsMzM1LjQ0OCA1MTIsNTEyICIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzhCQjM0MDsiIHBvaW50cz0iMjU2LDQyMy43MjQgMjMxLjExNSw0NDguNjA5IDEzNi4yNzEsMzM0LjkwMSAxMTIuMDMxLDM2NS4yNTkgMjYuNDgzLDI2NC44MjggMCwzMDAuMTM4IDAsNTEyIDMyNi42MjEsNTEyICIvPg0KPHJlY3QgeD0iNTIuOTY2IiB5PSI0NDEuMzc5IiBzdHlsZT0iZmlsbDojNzU0NjJFOyIgd2lkdGg9IjE3LjY1NSIgaGVpZ2h0PSIzNS4zMSIgLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiM3MjlFMUM7IiBwb2ludHM9IjM1LjMxLDQ0MS4zNzkgODguMjc2LDQ0MS4zNzkgNjEuNzkzLDM2MS45MzEgIiAvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzcyOUUxQzsiIHBvaW50cz0iOTcuMTAzLDUxMiAxNTAuMDY5LDUxMiAxMjMuNTg2LDQzMi41NTIgIiAvPg0KPHJlY3QgeD0iNDUwLjIwNyIgeT0iNDU5LjAzNCIgc3R5bGU9ImZpbGw6Izc1NDYyRTsiIHdpZHRoPSIxNy42NTUiIGhlaWdodD0iNDQuMTM4Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNzFDNEQxOyIgZD0iTTI3OC44NzIsMjU0Ljg3bC0zMS43LTM4LjA0N2wtMzEuNywzOC4wNDdjLTMuMTE2LDMuNzQzLTguNjg2LDQuMjU1LTEyLjQyOSwxLjEzOSBDMjAzLjAzNCwyNTYsMjAzLjAzNCwyNTYsMjAzLjAzNCwyNTZsMCwwYy0zLjc0My0zLjExNi00LjI1NS04LjY4Ni0xLjEzOS0xMi40MjljMCwwLDAsMCwwLjAwOS0wLjAwOWwzOC40NzktNDYuMTc3IGMzLjExNi0zLjc1Miw4LjY4Ni00LjI2NCwxMi40MjktMS4xNDhjMC40MTUsMC4zNDQsMC44MDMsMC43MzMsMS4xNDgsMS4xNDhsMzguNDc5LDQ2LjE3N2MzLjEyNSwzLjc0MywyLjYyMiw5LjMxMy0xLjEyMSwxMi40MjkgQzI5MS4zMSwyNTYsMjkxLjMxLDI1NiwyOTEuMzEsMjU2bDAsMEMyODcuNTY3LDI1OS4xMjUsMjgxLjk5NywyNTguNjIyLDI3OC44NzIsMjU0Ljg3TDI3OC44NzIsMjU0Ljg3eiIvPg0KPHJlY3QgeD0iMTY3LjcyNCIgeT0iMzg4LjQxNCIgc3R5bGU9ImZpbGw6Izc1NDYyRTsiIHdpZHRoPSIxNy42NTUiIGhlaWdodD0iMzUuMzEiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiM3MjlFMUM7IiBwb2ludHM9IjE1MC4wNjksMzg4LjQxNCAyMDMuMDM0LDM4OC40MTQgMTc2LjU1MiwzMDguOTY2ICIvPg0KPHJlY3QgeD0iMzcwLjc1OSIgeT0iNDMyLjU1MiIgc3R5bGU9ImZpbGw6Izc1NDYyRTsiIHdpZHRoPSIxNy42NTUiIGhlaWdodD0iMzUuMzEiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiM4OEIzMzc7IiBwb2ludHM9IjM1My4xMDMsNDMyLjU1MiA0MDYuMDY5LDQzMi41NTIgMzc5LjU4NiwzNTMuMTAzICIgLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM3MUM0RDE7IiBkPSJNMjI2LjIxNiwyMzUuMDM0Yy0yLjcxOSwwLTUuMjg4LTEuMjQ1LTYuOTY1LTMuMzlsLTU1LjE3Mi03MC42MjEgYy0zLjAwMS0zLjg0LTIuMzIyLTkuMzkzLDEuNTE4LTEyLjM5NGMzLjg0LTMuMDAxLDkuMzkzLTIuMzIyLDEyLjM5NCwxLjUxOGw1NS4xNzIsNzAuNjIxYzMuMDAxLDMuODQsMi4zMjIsOS4zOTMtMS41MTgsMTIuMzk0IEMyMzAuMSwyMzQuMzcyLDIyOC4xODQsMjM1LjAzNCwyMjYuMjE2LDIzNS4wMzR6IiAvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzcxQzREMTsiIGQ9Ik0zNzYuNjY0LDI1NS44NDFjLTQuODczLDAtOC44MjgtMy45NTUtOC44MTktOC44MzZjMC0xLjkzMywwLjYzNi0zLjgxNCwxLjgxLTUuMzVsMzYuMDE3LTQ4LjM5MyBjMi45NTctMy44NzUsOC41MDEtNC42MTcsMTIuMzc2LTEuNjZjMy44NzUsMi45NTcsNC42MTcsOC41MDEsMS42NiwxMi4zNzZsLTM2LjAxNyw0OC4zOTMgQzM4Mi4wMjMsMjU0LjU2MSwzNzkuNDE4LDI1NS44NDEsMzc2LjY2NCwyNTUuODQxeiIgLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiM4OEIzMzc7IiBwb2ludHM9IjQzMi41NTIsNDY3Ljg2MiA0ODUuNTE3LDQ2Ny44NjIgNDU5LjAzNCwzODguNDE0ICIgLz4NCjxyZWN0IHg9IjUyLjk2NiIgeT0iNDQxLjM3OSIgc3R5bGU9ImZpbGw6IzVFMzgyNTsiIHdpZHRoPSIxNy42NTUiIGhlaWdodD0iOC44MjgiIC8+DQo8cmVjdCB4PSIxNjcuNzI0IiB5PSIzODguNDE0IiBzdHlsZT0iZmlsbDojNUUzODI1OyIgd2lkdGg9IjE3LjY1NSIgaGVpZ2h0PSI4LjgyOCIgLz4NCjxyZWN0IHg9IjM3MC43NTkiIHk9IjQzMi41NTIiIHN0eWxlPSJmaWxsOiM1RTM4MjU7IiB3aWR0aD0iMTcuNjU1IiBoZWlnaHQ9IjguODI4IiAvPg0KPHJlY3QgeD0iNDUwLjIwNyIgeT0iNDY3Ljg2MiIgc3R5bGU9ImZpbGw6IzVFMzgyNTsiIHdpZHRoPSIxNy42NTUiIGhlaWdodD0iOC44MjgiIC8+DQo8L3N2Zz4NCg==
    ~~~
    {: .code}
    {% endraw %}
11. Replace `description` with `My favorite Customers database`.
12. Click **Send** to make the request.

<div class="panel panel-success">
**Congratulations!**
{: .panel-heading}
<div class="panel-body">

This request has updated our schema with a new description and icon.
</div>
</div>
