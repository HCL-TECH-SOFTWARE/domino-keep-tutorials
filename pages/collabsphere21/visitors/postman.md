---
layout: default
prevPage: pages/collabsphere21/visitors/index
nextPage: pages/collabsphere21/visitors/signin
slug:
    - label: Collabsphere 2021 Workshop
      url: pages/collabsphere21/index
    - label: Node-RED Visitors
      url: pages/collabsphere21/visitors/index
    - label: Postman Setup
---

{::options parse_block_html="true" /}

### Create Database
In Postman, add a request to the Collabsphere collection.

1. Rename it "Create Visitors NSF"
2. Change "GET" to "POST".
3. Set the request URL to "&#123;&#123;HOST&#125;&#125;/design/nsf?db=&#123;&#123;VISITORS&#125;&#125;".
4. On the **Headers** tab, add a header "Content-Type" set to "application/json".
5. On the **Body** tab, select raw and enter:
    {% raw %}
    ~~~json
    {
        "filepath" : "visitors.nsf",
        "title" : "Visitors Demo"
    }
    ~~~
    {: .code}
    {% endraw %}
6. Send the request.

You should receive a response that includes the information about the newly-created NSF.

### Create Form

Add another request.

1. Rename it "Create Visitors Form"
2. Change "GET" to "PUT".
3. Set the request URL to "&#123;&#123;HOST&#125;&#125;/design/forms/Visitor?db=&#123;&#123;VISITORS&#125;&#125;".
4. On the **Headers** tab, add a header "Content-Type" set to "application/json".
5. On the **Body** tab, select raw and enter:
    {% raw %}
    ~~~json
    {
        "name" : "Visitor",
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
                "name" : "company",
                "type": "text",
                "allowmultivalues" : false
            },
            {
                "name" : "time_in",
                "type": "datetime",
                "allowmultivalues" : false
            },
            {
                "name" : "time_out",
                "type": "datetime",
                "allowmultivalues" : false
            },
            {
                "name" : "badgeNo",
                "type": "text",
                "allowmultivalues" : false
            }
        ]
    }
    ~~~
    {: .code}
    {% endraw %}
    This creates the Form with six text fields, all single value - first_name, last_name, company, time_in, time_out, badgeNo.
6. Send the request.

You should receive a JSON response `{"success": true}`.

### Create By Name View
Add another request.

1. Rename it to "Create Visitors By Name"
2. Change "GET" to "PUT"
3. Set the request URL to "&#123;&#123;HOST&#125;&#125;/design/views/byName?db=&#123;&#123;VISITORS&#125;&#125;".
4. On the **Headers** tab, add a header "Content-Type" set to "application/json".
5. On the **Body** tab, select raw and enter:
    {% raw %}
    ~~~json
    {
        "name" : "byName",
        "selectionFormula" : "Form = \"Visitor\"",
        "columns" : [
	    	{
		    	"name": "first_name",
			    "title": "First Name",
			    "separatemultiplevalues": false,
		    	"sort": "ascending",
	    		"formula": "first_name"
    		},
            {
	    		"name": "last_name",
		    	"title": "Last Name",
			    "separatemultiplevalues": false,
    			"sort": "ascending",
	    		"formula": "last_name"
		    },
            {
	    		"name": "company",
		    	"title": "Company",
			    "separatemultiplevalues": false,
    			"sort": "ascending",
	    		"formula": "company"
		    },
            {
	    		"name": "time_in",
		    	"title": "Time In",
			    "separatemultiplevalues": false,
    			"sort": "ascending",
	    		"formula": "time_in"
		    },
            {
	    		"name": "time_out",
		    	"title": "Time Out",
			    "separatemultiplevalues": false,
    			"sort": "ascending",
	    		"formula": "time_out"
		    },
            {
	    		"name": "badgeNo",
		    	"title": "Badge Number",
			    "separatemultiplevalues": false,
    			"sort": "ascending",
	    		"formula": "badgeNo"
    		}
        ]
    }
    ~~~
    {: .code}
    {% endraw %}
6. Send the request.

You should receive a JSON response `{"success": true}`.

### Create By Badge View
Add another request.

1. Rename it to "Create View By Badge"
2. Change "GET" to "PUT"
3. Set the request URL to "&#123;&#123;HOST&#125;&#125;/design/views/byBadge?db=&#123;&#123;VISITORS&#125;&#125;".
4. On the **Headers** tab, add a header "Content-Type" set to "application/json".
5. On the **Body** tab, select raw and enter:
    {% raw %}
    ~~~json
    {
        "name" : "byBadge",
        "selectionFormula" : "Form = \"Visitor\" & time_out = \"\"",
        "columns" : [
            {
		    	"name": "badgeNo",
			    "title": "Badge Number",
    			"separatemultiplevalues": false,
	    		"sort": "ascending",
		    	"formula": "badgeNo"
		    },
    		{
	    		"name": "first_name",
		    	"title": "First Name",
			    "separatemultiplevalues": false,
    			"sort": "ascending",
	    		"formula": "first_name"
		    },
            {
	    		"name": "last_name",
		    	"title": "Last Name",
			    "separatemultiplevalues": false,
        		"sort": "ascending",
		    	"formula": "last_name"
		    },
            {
	    		"name": "company",
		    	"title": "Company",
			    "separatemultiplevalues": false,
    			"sort": "ascending",
	    		"formula": "company"
		    },
            {
	    		"name": "time_in",
		    	"title": "Time In",
			    "separatemultiplevalues": false,
    			"sort": "ascending",
	    		"formula": "time_in"
		    }
        ]
    }
    ~~~
    {: .code}
    {% endraw %}
    This view is sorted on badge number, so we can check people out, but only including entries with no time out
6. Send the request.

You should receive a JSON response `{"success": true}`.

Now we are ready to interact with the database via Node-RED.