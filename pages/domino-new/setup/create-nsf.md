---
layout: default
prevPage: pages/domino-new/setup/authentication
nextPage: pages/domino-new/setup/create-customer-form
slug:
  - label: New Domino Database
    url: pages/domino-new
  - label: Setup
    url: pages/domino-new/setup
  - Create NSF
---

{::options parse_block_html="true" /}

# Create NSF

<div class="panel panel-info">
**Note**
{: .panel-heading}
<div class="panel-body">

An **NSF** (Notes Storage Facility) is a repository for data. As a result, it is typically referred to as a Notes database. The design can be inherited from an **NTF** (Notes Template Facility) or can be designed from scratch. We will be doing the latter.

Each NSF has an **ACL** (Access Control List) which manages access to the Notes database, whether for **Users**, **Groups** or **Servers**.

Not all NSFs on the Domino server are exposed via Domino Rest API. You need to explicitly add a Domino Rest API configuration (schema) for an NSF. This schema allows you to define the forms, fields, views and agents that can be available through Domino Rest API. The schema combined with a scope (discussed later) allows you to access your data via the Domino Rest API. Creating an NSF via Domino Rest API automatically creates the Domino Rest API schema for you.

The same NSF can be exposed via multiple Domino REST API Database configurations. This can be useful for exposing a subset of content to a specific audience and enforcing tighter restrictions. This tutorial will not cover creating multiple Domino REST API Database configurations.

</div>
</div>

1. Hover over the `Domino-REST-API-NewDB` collection name and click on the ellipsis (three dots). Select **Add Request**.
2. Name the request `create nsf` and click **Save**.
3. Change the method from **GET** to **POST**.
4. Set the URL as {% raw %}`{{SETUP_HOST}}/design/nsf?dataSource=customers`{% endraw %}.
5. On the Headers tab, add a HTTP request header called **Authorization** with the value {% raw %}`{{bearer}}`{% endraw %}. This maps to the bearer collection variable we set from the `authenticate` request.
6. Add an HTTP request header **Content-Type** set to `application/json`.
7. On the **Body** tab change the type to `Raw` and also change the type from `Text` to `JSON`.
8. Set the request body content to:
    {% raw %}
    ~~~json
    {
      "nsfPath": "customers.nsf",
      "title": "Customers"
    }
    ~~~
    {: .code}
    {% endraw %}
    <p/>
    The `dataSource` query parameter is the Domino REST API Database Schema name you wish to create. The request creates an NSF on the Domino server at the filepath requested, sets up the ACL and creates a Domino REST API Database Schema with default settings.
    {: .why #why1}
9. Click **Send** to make the request.
    ![Create NSF](../images/setup/create-nsf.png)
    If you get a 403 response, check to ensure that the user you are authenticated as has access to create databases in the Server document, as covered in the [Prerequisites](../index.html#pre-requisites)
    {: .trouble #trouble1}
10. **Save** and close the request.

If an NSF already exists at the filepath, this API call will fail. It will also fail if you attempt to pass a Domino REST API Database name as the `dataSource` query parameter.
{: .alert .alert-danger}

<div class="panel panel-success">
**Congratulations!**
{: .panel-heading}
<div class="panel-body">

This request has:

- Created a new Domino database at the filepath specified.
- Configured it with a default ACL:
  - **LocalDomainServers** group has Manager access to the database. This means other trusted servers have full access.
  - **LocalDomainAdmins** group has Manager access to the database. This means all administrators for the server have full access.
  - **Default** has Editor access to the database. Any authenticated users can create, edit and delete documents.
  - **Anonymous** users have no access to the database.
  - **OtherDomainServers** group has no access to the database. Untrusted servers cannot access the database.

</div>
</div>
