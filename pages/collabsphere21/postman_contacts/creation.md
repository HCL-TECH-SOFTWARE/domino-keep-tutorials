---
layout: default
prevPage: pages/collabsphere21/postman_contacts/authentication
nextPage: pages/collabsphere21/postman_contacts/schema
slug:
    - label: Collabsphere 2021 Workshop
      url: pages/collabsphere21/index
    - label: Postman Contacts Setup
      url: pages/collabsphere21/postman_contacts/index
    - label: Creation of Design
---

{::options parse_block_html="true" /}

Now it is time to set up the design of the database.

### Create NSF

Add a request as previously.

1. Rename it "Create Contacts NSF"
2. Change "GET" to "POST".
3. Set the request URL to {% raw %}"{{HOST}}/design/nsf?dataSource={{CONTACTS}}"{% endraw %}.
4. On the **Headers** tab, add a header "Content-Type" set to "application/json".
5. On the **Body** tab, select raw and enter:
    {% raw %}
    ~~~json
    {
        "nsfPath" : "collabsphere.nsf",
        "title" : "Collabsphere Demo"
    }
    ~~~
    {: .code}
    {% endraw %}
6. Send the request.

You should receive a response that includes the information about the newly-created NSF. This request has also created a **KEEP Schema** for the new database.

### Create Scope

Before we can create design elements, we also need to create a **KEEP Scope** for the database.

<div class="panel panel-info">
Schemas and Scopes
{: .panel-heading}
<div class="panel-body">
Exposing a database with KEEP comprises two parts - the **KEEP Schema** and the **KEEP Scope**.

The **schema** defines _what_ can be exposed and requires an understanding of the database design. It will usually be set up by a developer and is stored as part of the database.

The **scope** defines _whether_ it is exposed and is stored centrally on the server. Depending on the division of responsibilities for the Domino server, this may be done by an administrator or a developer.

Creating the NSF automatically creates a basic **schema**, although with nothing exposed.

Before we can continue creating the design programmatically, we need to expose a **scope**. This could be done via the REST Configuration UI. The [Domino ToDo Database tutorial](../../todo/index.html) is a tutorial that takes that approach. In this tutorial, the scope and schema will be managed via REST API calls.
</div>
</div>

1. Add a request as previously.
1. Rename it "Create Scope"
2. Change "GET" to "POST".
3. Set the request URL to {% raw %}"{{HOST}}/admin/scope?createSchema=true"{% endraw %}.
4. On the **Headers** tab, add a header "Content-Type" set to "application/json".
5. On the **Body** tab, select raw and enter:
    {% raw %}
    ~~~json
    {
        "Subject": "Domino Contacts",
        "apiName": "{{CONTACTS}}",
        "schemaName": "{{CONTACTS}}",
        "nsfPath": "collabsphere.nsf",
        "isActive": true
    }
    ~~~
    {: .code}
    {% endraw %}
6. Send the request.

### Create Form

Add another request.

1. Rename it "Create Form"
2. Change "GET" to "PUT".
3. Set the request URL to {% raw %}"{{HOST}}/design/forms/Contact?dataSource={{CONTACTS}}"{% endraw %}.
4. On the **Headers** tab, add a header "Content-Type" set to "application/json".
5. On the **Body** tab, select raw and enter:
    {% raw %}
    ~~~json
    {
        "name" : "Contact",
        "alias": "",
        "fields" : [
            {
                "name" : "first_name",
                "type": "text",
                "allowmultivalues" : false
            },
            {
                "name" : "last_name",
                "type": "text",
                "allowmultivalues" : false
            },
            {
                "name" : "email",
                "type": "text",
                "allowmultivalues" : false
            },
            {
                "name" : "gender",
                "type": "text",
                "allowmultivalues" : false
            },
            {
                "name" : "city",
                "type": "text",
                "allowmultivalues" : false
            },
            {
                "name" : "state",
                "type": "text",
                "allowmultivalues" : false
            }
        ]
    }
    ~~~
    {: .code}
    {% endraw %}
    This creates the Form with six text fields, all single value - first_name, last_name, email, gender, city, state.
6. Send the request.

You should receive a 200 JSON response echoing the schema configuration.

### Create By Name View

Add another request.

1. Rename it to "Create View By Name"
2. Change "GET" to "PUT"
3. Set the request URL to {% raw %}"{{HOST}}/design/views/byName?dataSource={{CONTACTS}}"{% endraw %}.
4. On the **Headers** tab, add a header "Content-Type" set to "application/json".
5. On the **Body** tab, select raw and enter:
    {% raw %}
    ~~~json
    {
        "name" : "byName",
        "selectionFormula" : "Form = \"Contact\"",
        "columns" : [
		    {
			    "name": "firstName",
    			"title": "First Name",
	    		"separatemultiplevalues": false,
		    	"sort": "ascending",
			    "formula": "firstName"
    		},
            {
	    		"name": "last_name",
    			"title": "Last Name",
			    "separatemultiplevalues": false,
		    	"sort": "ascending",
	    		"formula": "last_name"
    		},
            {
		    	"name": "email",
	    		"title": "Email",
    			"separatemultiplevalues": false,
			    "sort": "ascending",
		    	"formula": "email"
	    	},
            {
		    	"name": "city",
	    		"title": "City",
    			"separatemultiplevalues": false,
			    "sort": "ascending",
		    	"formula": "city"
	    	},
            {
			    "name": "state",
		    	"title": "State",
	    		"separatemultiplevalues": false,
    			"sort": "ascending",
			    "formula": "state"
		    }
        ]
    }
    ~~~
    {: .code}
    {% endraw %}
6. Send the request.

You should receive a JSON response `{"success": true}`.

### Create By State View

Add another request.

1. Rename it to "Create View By State"
2. Change "GET" to "PUT"
3. Set the request URL to {% raw %}"{{HOST}}/design/views/byState?dataSource={{CONTACTS}}".
4. On the **Headers** tab, add a header "Content-Type" set to "application/json".
5. On the **Body** tab, select raw and enter:
    {% raw %}
    ~~~json
    {
        "name" : "byState",
        "selectionFormula" : "Form = \"Contact\"",
        "columns" : [
            {
			    "name": "state",
    			"title": "State",
	    		"separatemultiplevalues": false,
		    	"sort": "ascending",
			    "formula": "state"
    		},
	    	{
		    	"name": "firstName",
			    "title": "First Name",
    			"separatemultiplevalues": false,
	    		"sort": "ascending",
		    	"formula": "firstName"
		    },
            {
	    		"name": "last_name",
		    	"title": "Last Name",
			    "separatemultiplevalues": false,
    			"sort": "ascending",
	    		"formula": "last_name"
		    },
            {
	    		"name": "email",
		    	"title": "Email",
			    "separatemultiplevalues": false,
    			"sort": "ascending",
	    		"formula": "email"
		    },
            {
	    		"name": "city",
		    	"title": "City",
			    "separatemultiplevalues": false,
    			"sort": "ascending",
	    		"formula": "city"
		    }
        ]
    }
    ~~~
    {: .code}
    {% endraw %}
6. Send the request.

You should receive a JSON response `{"success": true}`.

Now we are ready to update the schema. This will be done via Postman.
