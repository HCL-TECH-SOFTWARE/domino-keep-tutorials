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

### Create NSF

<div class="panel panel-info">
**Note**
{: .panel-heading}
<div class="panel-body">

An **NSF** (Notes Storage Facility) is a repository for data. As a result, it is typically referred to as a Notes database. The design can be inherited from an **NTF** (Notes Template Facility) or can be designed from scratch. We will be doing the latter.

Each NSF has an **ACL** (Access Control List) which manages access to the Notes database, whether for **Users**, **Groups** or **Servers**.

Not all NSFs on the Domino server are exposed via Keep. You need to explicitly add a **Keep Database** configuration for an NSF. This defines the alias for Keep requests to use when accessing the database and what kinds of requests are exposed. Creating an NSF via Keep automatically creates the Keep Database configuration for you.

The same NSF can be exposed via multiple Keep Database configurations. This can be useful for exposing a subset of content to a specific audience and enforcing tighter restrictions. This tutorial will not cover creating multiple Keep Database configurations.

</div>
</div>

1. Hover over the "keep-domino" collection name and click on the ellipsis (three dots). Select "Add Request".  
2. Name the request "create nsf" and click "Save to keep-domino".
3. Change the method from "GET" to "POST".
4. Set the URL as "&#123;&#123;HOST&#125;&#125;/design/nsf?dataSource=customers".
5. On the Headers tab, add a HTTP request header called "Authorization" with the value "&#123;&#123;bearer&#125;&#125;". This maps to the bearer collection variable we set from the "authenticate" request.
6. Add an HTTP request header "Content-Type" set to "application/json".
7. On the Body tab change the type to "Raw".
8. Set the request body content to:
    {% raw %}
    ~~~json
    {
        "nsfPath": "tutorials/customers.nsf",
        "title": "Customers"
    }
    ~~~
    {: .code}
    {% endraw %}
    <p/>
    If you get a 403 response, check to ensure that the user you are authenticated as has access to create databases in the Server document, as covered in the [Prerequisites](../index.html#pre-requisites)
    {: .trouble #trouble1}
    The "dataSource" query parameter is the Keep Database Schema name you wish to create. The request creates an NSF on the Domino server at the filepath requested, sets up the ACL and creates a Keep Database Schema with default settings.
    {: .why #why1}
9. Click "Send" to make the request.
![Create NSF](../images/setup/create-nsf.png)
10. Save and close the request.


If an NSF already exists at the filepath, this API call will fail. It will also fail if you attempt to pass a Keep Database name as the "db" query parameter.
{: .alert .alert-danger}

<div class="panel panel-success">
**Congratulations!**
{: .panel-heading}
<div class="panel-body">

This request has:
- Created a new Domino database at the filepath specified.
- Configured it with a default ACL:
    - LocalDomainServers group has Manager access to the database. This means other trusted servers have full access.
    - LocalDomainAdmins group has Manager access to the database. This means all administrators for the server have full access.
    - Default has Editor access to the database. Any authenticated users can create, edit and delete documents.
    - Anonymous users have no access to the database.
    - OtherDomainServers group has no access to the database. Untrusted servers cannot access the database.
- Created a Keep Database configuration under the name "customers" with default settings. REST service access is allowed, DQL (Domino Query Language) can be used by all authenticated users for querying data as well as pre-indexed lists of documents.
</div>
</div>