---
layout: default
prevPage: pages/domino-new/setup/create-customer-form
nextPage: pages/domino-new/setup/create-customers-lists
slug:
    - label: New Domino Database
      url: pages/domino-new
    - label: Setup
      url: pages/domino-new/setup
    - Create Contact Form
---

{::options parse_block_html="true" /}

### Create Contact Form

1. Hover over the "customer form" request and click on the ellipsis (three dots). Select "Duplicate".  
2. Change the name of the request to "contact form" and click save.
3. Change the URL as "&#123;&#123;SETUP_HOST&#125;&#125;/design/forms/Contact?dataSource=customers.
4. On the Body tab set the request body content to:
    {% raw %}
    ~~~json
    {
        "name": "Contact",
        "alias": "",
        "fields": [
            {
                "name": "first_name",
                "type": "text",
                "allowmultivalues": false
            },
            {
                "name": "last_name",
                "type": "text",
                "allowmultivalues": false
            },
            {
                "name": "customerUNID",
                "type": "text",
                "allowmultivalues": false
            },
            {
                "name": "job_title",
                "type": "text",
                "allowmultivalues": true
            },
            {
                "name": "email",
                "type": "text",
                "allowmultivalues": false
            },
            {
                "name": "phone",
                "type": "text",
                "allowmultivalues": false
            }
        ]
    }
    ~~~
    {: .code}
    {% endraw %}
5. Click "Send" to make the request.

<div class="panel panel-success">
**Congratulations!**
{: .panel-heading}
<div class="panel-body">

This request has:

- Created another form in the customers database.
- Added fields to the form.

</div>
</div>
