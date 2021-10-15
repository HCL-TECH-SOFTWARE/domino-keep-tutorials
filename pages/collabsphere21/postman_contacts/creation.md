---
layout: default
prevPage: pages/collabsphere21/postman_contacts/authentication
nextPage: pages/collabsphere21/postman_contacts/population
slug:
    - label: Collabsphere 2021 Workshop
      url: pages/collabsphere21/index
    - label: Postman Contacts Setup
      url: pages/collabsphere21/postman_contacts/index
    - label: Creation of Design
---

Now it is time to set up the design of the database.

There is an error in the form template in Early Access 3. To resolve this, navigate to the location of the KEEP files (**opt/hcl/keep** on Linux), navigate to the **resources** sub-directory and open "cd /opt/hcl/keepformtemplate.dxl". The window title formula at the top is missing a closing bracket, so needs updating to <br/>`@If(@IsNewDoc;"New {{formName}}";"{{formName}} "+@Text(@Created))`.
{: .alert .alert-danger}

### Create NSF
Add a request as previously.

1. Rename it "Create Contacts NSF"
2. Change "GET" to "POST".
3. Set the request URL to "&#123;&#123;HOST&#125;&#125;/design/nsf?db=&#123;&#123;CONTACTS&#125;&#125;".
4. On the **Headers** tab, add a header "Content-Type" set to "application/json".
5. On the **Body** tab, select raw and enter:
    {% raw %}
    ~~~json
    {
        "filepath" : "collabsphere.nsf",
        "title" : "Collabsphere Demo"
    }
    ~~~
    {: .code}
    {% endraw %}
6. Send the request.

You should receive a response that includes the information about the newly-created NSF.

### Create Form
Add another request.

1. Rename it "Create Form"
2. Change "GET" to "PUT".
3. Set the request URL to "&#123;&#123;HOST&#125;&#125;/design/forms/Contact?db=&#123;&#123;CONTACTS&#125;&#125;".
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

You should receive a JSON response `{"success": true}`.

### Create By Name View
Add another request.

1. Rename it to "Create View By Name"
2. Change "GET" to "PUT"
3. Set the request URL to "&#123;&#123;HOST&#125;&#125;/design/views/byName?db=&#123;&#123;CONTACTS&#125;&#125;".
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
3. Set the request URL to "&#123;&#123;HOST&#125;&#125;/design/views/byState?db=&#123;&#123;CONTACTS&#125;&#125;".
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

Now the database is ready to receive data.