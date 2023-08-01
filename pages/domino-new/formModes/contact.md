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

# Add Contact Form to Configured Forms

1. Click on `customers` in the breadcrumbs to get back to the main schema configuration.
2. Click on the **Contact** form to configure it. You will be advised that it will automatically be configured as default, select **Yes**. Click on **Contact** to open it to the form access mode.
3. Select all fields since these will be used for basic CRUD.

## Add DQL Form Mode

1. Click on the **+ Add Mode** button.
2. Enter `dql` as the mode name for the new mode and click **Save**.
3. Click the `+` sign against all fields to add them.
4. Click on the **Save** button at the top of the Form Access Mode.

    <div class="panel panel-info">
    **Note**
    {: .panel-heading}
    <div class="panel-body">
    Adding in `dql` form mode for **Contact** declares what fields it returns for DQL queries on this form.
    </div>
    </div>

<br/>

<div class="panel panel-success">
**Congratulations!**
{: .panel-heading}
<div class="panel-body">

This has configured the Contact form for Domino REST API access. You should now have both forms configured.
![Form Access Modes Configured](../images/formModes/form_modes_configured.png)
</div>
</div>
