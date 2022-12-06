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

## Customer Form Mode

Click on the "Database Forms" tab. The Customers database has two Forms available for configuration - the two Forms that were created from Postman. In this part the Customer form will be configured for two different access settings.

#### Default Mode
1. Click on the Customer Form. You will be prompted that it will be configured as default, select "Yes". Click to open the Customer form access mode.
2. The Form configuration opens with the default mode open.
![Form Access Modes](../images/formModes/form-modes.png)
3. Click the "+" sign against each of the following fields to enable them for Read / Write access:
    - name
    - category
    - address1
    - address2
    - city
    - state
    - zipCode
    - website<br/>
<img src="../images/formModes/names_field.png" alt="Names field" width="300px"/>
4. Click on the + sign against "status". Then select that field in the main area and change "Read Write" to "Read Only".
5. In the "Formula for Write Access" type `Status = ""`. This will prevent updates using this Form Access Mode.
6. In the "On Save Formula" box type `@SetField("Status";"Active")`. This will force the "status" field to be "Active" for new documents.
7. Click on the "Save" button at the top of the default Form Access Mode.

#### Update Mode

1. Click on the "+ Mode" button.
2. Enter "update" as the Mode Name for the new mode and click "ADD".
3. Click the cross to get back to field selection.
4. Click the + sign against all fields to add them.
5. Scroll down to the "Formula for Delete Access". Change `@False` to `Status = "Inactive"`.
6. Click on the "Save" button at the top of the Form Access Mode.

The "Formula for Write Access" could be used to ensure only certain options are allowed for the Status field. Try ensuring only "Active" and "Inactive" are allowed.
{: .advanced}
<br/>

<div class="panel panel-success">
**Congratulations!**
{: .panel-heading}
<div class="panel-body">

This tutorial has enabled the user to:

- Configure the Customer form for Domino REST API access.
- Ensured the status field cannot be set in REST API requests for new documents, but is always set to Active.
- Ensured the default Form Access Mode can be used to read documents at any time, but can only be used to create new documents.
- Enabled the "update" Form Access Mode for updating Customer documents.
- Enabled deletion at the "update" Form Access Mode, if the customer is inactive.

</div>
</div>
