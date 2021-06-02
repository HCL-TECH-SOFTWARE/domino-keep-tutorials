---
layout: default
prevPage: pages/domino-new/formModes/index
nextPage: pages/domino-new/formModes/contact
slug:
    - label: New Domino Database
      url: pages/domino-new
    - label: Form Modes
      url: pages/domino-new/formModes
    - Create Customer Form Mode
---

{::options parse_block_html="true" /}

### Customer Form Mode

The Customers database opens up to show two Forms for configuration - the two Forms that were created from Postman. In this part the Customer form will be configured for two different access settings.

#### Default Mode
1. Click on the Customer Form to open its configuration.
1. The Form configuration opens with the default mode open.
![Form Access Modes](../images/formModes/form-modes.png)
1. Click the "+" sign against each of the following fields and click on "Both":
  - name
  - category
  - address1
  - address2
  - city
  - state
  - zipCode
  - website<br/>
<img src="../images/formModes/names_field.png" alt="Names field" width="300px"/>
1. Click on the + sign against "status" but just select "Read Access".
1. In the "Formula for Write Access" type `Status = ""`. This will prevent updates using this Form Access Mode.
1. In the "On Save Formula" box type `@SetField("Status";"Active")`. This will force the "status" field to be "Active" for new documents.
1. Click on the "Save" button at the top of the default Form Access Mode.

#### Update Mode

1. Click on the "+ Mode" button.
2. Enter "update" as the Mode Name for the new mode. The new mode appears behind the "default" mode. It will be left as full CRUD access, so no changes are necessary.
4. Navigate back to the customers forms using the breadcrumbs.

<div class="panel panel-success">
**Congratulations!**
{: .panel-heading}
<div class="panel-body">

This has
- Configured the Customer form for Keep access.
- Ensured the status field cannot be set in REST API requests for new documents, but is always set to Active.
- Ensured the default Form Access Mode can be used to read documents at any time, but can only be used to create new documents.
- Enabled the "update" Form Access Mode for updating Customer documents, but ensuring only allowable values can be used for the status field.
</div>
</div>