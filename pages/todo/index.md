---
layout: default
nextPage: pages/todo/setup/index
slug:
    Domino ToDo Database
---

{::options parse_block_html="true" /}

![Domino KEEP](../../images/KeepNewLogo.svg "HCL Labs - Domino KEEP")

### Introduction
HCL Domino REST API, a.k.a Domino KEEP, provides secure REST API access into HCL Domino. This tutorial will walk you through:  
- Importing the XPages ToDo Application.
- Configuring it for validated Keep API access.
- Adding validation to ensure status cannot be set to an invalid value.
All steps will be done via the KeepAdmin GUI.

<div class="panel panel-info">
**Note**
{: .panel-heading}
<div class="panel-body">

Keep Databases require authenticated access. You cannot access data anonymously. In addition, a Keep Database can be secured specifically for server-to-server access by approved Keep Applications, in which case all requests not only user authentication via a JWT token but also an application key and secret. In this tutorial, we will only require user authentication via a JWT token.

</div>
</div>

### Pre-requisites

To run through this tutorial you will need the following:
- An HCL Domino server.
- The XPages ToDo application, put on the Domino server at **tutorials/ToDo.nsf**. with an appropriate ACL.
  - The database can be downloaded from the [Collabsphere site](https://collabsphere.org/ug/collabsphere2019.nsf/todo.zip).
  - If that's no longer available, it is included in the [XPages Extension Library release](https://extlib.openntf.org/main.nsf/project.xsp?r=project/XPages%20Extension%20Library/releases/90465DD127801C93852581D0005F915E)
- A username and password that has is in the LocalDomainAdmins group on the server.
- [Postman](https://www.postman.com/) installed.

<div class="panel panel-info">
**Note**
{: .panel-heading}
<div class="panel-body">
Traditionally developing, configuring or deploying a REST API would have required the HCL Notes / Domino Designer / Domino Administrator client. The browser-based Keep Admin GUI will allow complete setup and configuration of databases. But Keep is built "API first", so it can also be done via Postman. And of course Postman will also be used to access the data via REST service calls.
</div>
</div>

<div class="panel panel-success">
**Security First**
{: .panel-heading}
<div class="panel-body">
Some companies have been reluctant to turn on web access to Domino servers because older Domino applications were not locked down to prevent unplanned access. Domino KEEP takes a "Security First" approach to Domino. 
- By default no NSFs are exposed for access via Keep. **YOU** explicitly enable access. (Of course Keep is also API first, so you could automate a process to generate a Keep Database configuration for multiple databases, if you wish.) 
- When an NSF is exposed, by default no agents can be triggered and no Forms are configured. 
- All views are available by default, but you can exclude views from access.
- Agents can be exposed - you choose which agents in the **Keep Admin GUI**.
- DQL access is enabled by default, allowing users to run DQL queries. But if a DQL query returns a document whose Form is not configured, Keep will exclude it. 
- If you want to prevent DQL queries, it can be done by a click of the mouse in the Keep Database configuration.
- When you configure a Form for Keep access you decide:
  - Which fields are sent to the user.
  - Which fields can be changed.
  - Who can read documents at that Form Access Mode.
  - Who can write documents at that Form Access Mode.
  - Who can delete documents at that Form Access Mode.
  - Pre-processing on GET requests and post-processing on POST / PUT requests.
  - Whether pre-existing Input Translation and Input Validation formulas should be applied.
- **AND ABOVE ALL, DOMINO'S ACL SETTINGS ARE HONOURED. KEEP JUST ADDS AN EXTRA LAYER OF FLEXIBLE SECURITY ON TOP**
</div>
</div>