---
layout: default
nextPage: pages/todo/setup/index
slug:
    Domino ToDo Database
---

{::options parse_block_html="true" /}

![Domino KEEP](../../images/HCL_KEEP_lightmode_horiz.svg "HCL Labs - Domino KEEP")

### Introduction

HCL Domino REST API provides secure REST API access into HCL Domino. This tutorial will walk you through:  

- Importing the XPages ToDo Application.
- Configuring it for validated Domino REST API access.
- Adding validation to ensure status cannot be set to an invalid value.
All steps will be done via the Domino REST API Admin UI.

<div class="panel panel-info">
**Note**
{: .panel-heading}
<div class="panel-body">

Domino REST API requires authenticated access. You cannot access data anonymously. In addition, Domino REST API can be secured specifically for access by approved Domino REST API Applications, in which case all requests not only user authentication via a JWT token but also an application key and secret. In this tutorial, we will only require user authentication via a JWT token.

</div>
</div>

### Pre-requisites

To run through this tutorial you will need the following:

- An HCL Domino server.
- The XPages ToDo application, put on the Domino server at **ToDo.nsf**. with an appropriate ACL.
  - It is included in the [XPages Extension Library release](https://extlib.openntf.org/main.nsf/project.xsp?r=project/XPages%20Extension%20Library/releases/90465DD127801C93852581D0005F915E)
- A username and password that has is in the KEEPAdmins group on the server.
- [Postman](https://www.postman.com/) installed.

<div class="panel panel-info">
**Note**
{: .panel-heading}
<div class="panel-body">
Traditionally developing, configuring or deploying a REST API would have required the HCL Notes / Domino Designer / Domino Administrator client. The browser-based Domino REST API Admin UI will allow complete setup and configuration of databases. But Domino REST API is built "API first", so it can also be done via Postman. And of course Postman will also be used to access the data via REST service calls.
</div>
</div>

<div class="panel panel-warning">
Why Postman?
{: .panel-heading}
<div class="panel-body">

Of course your end users would not use Postman to push data into HCL Domino via Domino REST API. And you would not use KEEP from a NotesHTTPRequest in LotusScript or an XPages application. But the (non-Domino) application you or a third-party build will use REST service calls to connect. Postman is an easy REST Client that allows you to test those REST service calls without needing to build a full web or rich client application. Command-line curl commands would be another option, but Postman has a lower barrier of entry. Once you're familiar with the REST service calls for Domino REST API, calling it from a web application is the same as calling any other REST service.
</div>
</div>

<div class="panel panel-success">
**Security First**
{: .panel-heading}
<div class="panel-body">
HCL Domino REST API takes a "Security First" approach to Domino.

- By default no NSFs are exposed for access via Domino REST API. **YOU** explicitly enable access. (Of course Domino REST API is also API first, so you could automate a process to generate Keep Schema and Scope configurations for multiple databases, if you wish.)
- When an NSF is exposed, by default no agents can be triggered, no Views are available and no Forms are configured.
- Agents can be exposed - you choose which agents in the **Domino REST API Admin UI**.
- DQL access is enabled by default, allowing users to run DQL queries. But if a DQL query returns a document whose Form is not configured, Keep will exclude it.
- If you want to prevent DQL queries, it can be done by a click of the mouse in the Domino REST API Schema configuration.
- When you configure a Form for Domino REST API access you decide:
  - Which fields are sent to the user.
  - Which fields can be changed.
  - Who can read documents at that Form Access Mode.
  - Who can write documents at that Form Access Mode.
  - Who can delete documents at that Form Access Mode.
  - Pre-processing on GET requests and post-processing on POST / PUT requests.
  - Whether pre-existing Input Translation and Input Validation formulas should be applied.
- **AND ABOVE ALL, DOMINO'S ACL SETTINGS ARE HONOURED. DOMINO REST API JUST ADDS AN EXTRA LAYER OF FLEXIBLE SECURITY ON TOP**

**Why is this important?**
Well, a REST service is basically a callable import agent. And you wouldn't create an import agent that anyone can use to post any content into your database. In the same way, you wouldn't want a REST service that's accessible to any HTTP client that has authenticated.
</div>
</div>
