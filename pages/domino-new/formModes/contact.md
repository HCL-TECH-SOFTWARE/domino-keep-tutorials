---
layout: default
prevPage: pages/domino-new/formModes/customer
nextPage: pages/domino-new/formModes/lists
slug:
    - label: New Domino Database
      url: pages/domino-new
    - label: Form Modes
      url: pages/domino-new/formModes
    - Create Contact Form Mode
---

{::options parse_block_html="true" /}

## Add a Form to Configured Forms

1. Click on "customers" in the breadcrumbs to get back to the main schema configuration.
2. Click on the Contact form to configure it. You will be advised that it will automatically be configured as default, select "Yes". Click on Contact to open it to the form access mode.
3. Switch the "Show fields from:" drop-down from "Customer" to "Contact".
4. This will be used for basic CRUD, so select all fields.

Designing the Form does not enforce a schema. By not specifying any fields for Read Access, no fields will be returned by GET requests or accepted for POST requests.<br/>

<div class="panel panel-success">
**Congratulations!**
{: .panel-heading}
<div class="panel-body">

This has configured the Contact form for HCL DOMINO REST API access. You should now have both forms configured.
![Form Access Modes Configured](../images/formModes/form_modes_configured.png)
</div>
</div>
