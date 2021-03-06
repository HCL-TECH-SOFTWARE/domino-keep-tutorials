---
layout: default
nextPage: pages/domino-new/setup/index
slug:
    - New Domino Database
---

{::options parse_block_html="true" /}

![Domino Keep](../../images/KeepNewLogo.svg "HCL Labs - Domino Keep")

### Introduction
HCL Domino REST API, a.k.a Domino KEEP, provides secure REST API access into HCL Domino. This tutorial will walk you through:  
- Creating a new Domino database.
- Adding Forms for Customers and Contacts.
- Adding Views.
- Configuring it for validated REST API access.
- Updating the access for the database.
Some steps will be done via the KeepAdmin GUI, some will be done via Postman.

<div class="panel panel-info">
**Note**
{: .panel-heading}
<div class="panel-body">

Keep Databases can be left open for REST APIs secured only by user authentication via a JWT token. Alternatively it can be secured only for server-to-server access by approved Keep Applications, in which case all requests not only user authentication via a JWT token but also an application key and secret. In this tutorial, we will only require user authentication via a JWT token.

</div>
</div>

### Pre-requisites

To run through this tutorial you will need the following:
- An HCL Domino server with HCL Domino REST API, a.k.a. Domino KEEP running.
- A username and password that has administration access to the server. If you have used the Keep Domino Docker image, you can use the admin username and password you supplied when creating the container.
- [Postman](https://www.postman.com/) installed.

<div class="panel panel-info">
**Note**
{: .panel-heading}
<div class="panel-body">
Traditionally you would have needed to install the combined HCL Notes, Domino Designer and Domino Administrator client. The browser-based Keep Admin GUI will allow complete setup and configuration of databases. But Keep is built "API first", so it can also be done via Postman or extensions could be added to your favourite development IDE.
</div>
</div>

