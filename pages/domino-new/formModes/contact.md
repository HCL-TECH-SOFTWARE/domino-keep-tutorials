---
layout: default
prevPage: pages/domino-new/formModes/customer
nextPage: pages/domino-new/dataAccess/index
slug:
    - label: New Domino Database
      url: pages/domino-new
    - label: Form Modes
      url: pages/domino-new/formModes
    - Create Contact Form Mode
---

{::options parse_block_html="true" /}

### Contact Form Mode

1. Click on the Contact form to open its configuration.
1. This will be left as basic CRUD so no changes are required.

Designing the Form does not enforce a schema. By not specifying any fields for Read Access, all fields will be returned by GET requests. This is a quick way to return all fields on the document.<br/>
By not specifying any fields for Write Access, any field name could be written to document, e.g. "Foo". Consequently, specifying write access fields for a Form Access Mode is recommended a best practice approach.
{: .alert .alert-warning}

<div class="panel panel-success">
**Congratulations!**
{: .panel-heading}
<div class="panel-body">

This has configured the Contact form for Keep access. You should now have both forms configured.
![Form Access Modes Configured](../images/formModes/form_modes_configured.png)
</div>
</div>