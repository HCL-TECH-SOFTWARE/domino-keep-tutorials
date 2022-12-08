---
layout: default
prevPage: pages/todo/setup/authentication
nextPage: pages/todo/configure/index
slug:
    - label: Domino ToDo Database
      url: pages/todo
    - label: Setup
      url: pages/todo/setup
    - Check ACL
---

{::options parse_block_html="true" /}

### Check the ACL

Of course you can check the ACL of the To Do database via the Notes Client. But Domino REST API is intended as "API first" access to Domino. Consequently, there are APIs for view and editing database ACLs. However, the ACLs are restricted so that only users with Manager access to the database being queried can use them.
{: .alert .alert-info}

1. Hover over the "keep-notes" collection name and click on the ellipsis (three dots). Select "Add Request".  
2. Name the request "check acl" and click "Save to keep-notes".
3. Set the URL as "&#123;&#123;ADMIN_HOST&#125;&#125;/acl/entries?datasource=tutorials/ToDo.nsf".
4. On the Headers tab, add a HTTP request header called "Authorization" with the value "&#123;&#123;bearer&#125;&#125;". This maps to the bearer collection variable we set from the "authenticate" request.
5. Click "Send" to make the request.
6. Save and close the request.

You can perform full CRUD access on an individual ACL entry by using **"&#123;&#123;ADMIN_HOST&#125;&#125;/acl/entries/{aclEntryName}?dbataSource=tutorials/ToDo.nsf"**. <br/>**"&#123;&#123;ADMIN_HOST&#125;&#125;/acl/roles?dataSource=tutorials/ToDo.nsf"** will get all roles (there are none). <br/>**"&#123;&#123;ADMIN_HOST&#125;&#125;/acl/roles/{roleName}?dataSource=tutorials/ToDo.nsf"** provides create/update/delete access to ACL roles.<br/>See the OpenAPI documentation from the Domino KEEP homepage.
{: .advanced #advanced2}
<p/>
Did you know, you can even create new NSFs, create or edit basic Forms and basic Views via HCL Domino REST API? Of course, we require that the bearer token is for a user with appropriate access - Manager access to the Keep Configuration database for creating new NSFs, Designer access to the target database for creating / editing new Forms and Views.
{: .advanced #advanced1}
&nbsp;