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
3. Set the request URL to {% raw %}"{{HOST}}/design/nsf?dataSource={{VISITORS}}"{% endraw %}.
4. On the **Headers** tab, add a header "Content-Type" set to "application/json".
5. On the **Body** tab, select raw and enter:
    {% raw %}
    ~~~json
    {
        "nsfPath" : "visitors.nsf",
        "title" : "Visitors Demo"
    }
    ~~~
    {: .code}
    {% endraw %}
6. Send the request.

You should receive a response that includes the information about the newly-created NSF.

## Create Scope

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
        "apiName": "{{VISITORS}}",
        "schemaName": "{{VISITORS}}",
        "nsfPath": "visitors.nsf",
        "isActive": true
    }
    ~~~
    {: .code}
    {% endraw %}
6. Send the request.

### Create Form

Add another request.

1. Rename it "Create Visitors Form"
2. Change "GET" to "PUT".
3. Set the request URL to {% raw %}"{{HOST}}/design/forms/Visitor?dataSource={{VISITORS}}"{% endraw %}.
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

You should receive a 200 JSON response echoing the schema configuration.

### Create By Name View

Add another request.

1. Rename it to "Create Visitors By Name"
2. Change "GET" to "PUT"
3. Set the request URL to {% raw %}"{{HOST}}/design/views/byName?dataSource={{VISITORS}}"{% endraw %}.
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

### Update the Schema

Add another request.

1. Rename it "Get Visitors Schema"
1. Set the request URL to {% raw %}"{{HOST}}/schema?configName={{VISITORS}}&nsfPath=visitors.nsf"{% endraw %}.
1. Send the request.

The response will be the current schema, which can be used to update the schema.

Add a request as previously.

1. Rename it "Update Visitors Schema"
1. Change "GET" to "POST".
1. Set the request URL to {% raw %}"{{HOST}}/schema?configName={{VISITORS}}&nsfPath=visitors.nsf"{% endraw %}.
1. On the **Headers** tab, add a header "Content-Type" set to "application/json".
1. On the **Body** tab, select raw and enter:
    {% raw %}
    ~~~json
    {
        "nsfPath": "visitors.nsf",
        "iconName": "KEEP",
        "icon": "Base64 stuff, preferably SVG",
        "description": "Visitors Demo",
        "formulaEngine": "domino",
        "schemaName": "visitors",
        "requireRevisionToUpdate": false,
        "allowDecryption": false,
        "cacheTimestamp": 1,
        "dqlAccess": false,
        "dqlFormula": {
            "formulaType": "domino",
            "formula": "@False"
        },
        "allowCode": false,
        "openAccess": true,
        "forms": [
            {
                "formName": "Visitor",
                "formModes": [
                    {
                        "modeName": "default",
                        "computeWithForm": false,
                        "readAccessFormula": {
                            "formulaType": "domino",
                            "formula": "@True"
                        },
                        "writeAccessFormula": {
                            "formulaType": "domino",
                            "formula": "@True"
                        },
                        "deleteAccessFormula": {
                            "formulaType": "domino",
                            "formula": "@False"
                        },
                        "fields": [
                            {
                                "name": "first_name",
                                "isMultiValue": false,
                                "writeOnly": false,
                                "readOnly": false,
                                "format": "string",
                                "type": "string"
                            },
                            {
                                "name": "last_name",
                                "isMultiValue": false,
                                "writeOnly": false,
                                "readOnly": false,
                                "format": "string",
                                "type": "string"
                            },
                            {
                                "name": "company",
                                "isMultiValue": false,
                                "writeOnly": false,
                                "readOnly": false,
                                "format": "string",
                                "type": "string"
                            },
                            {
                                "name": "time_in",
                                "isMultiValue": false,
                                "writeOnly": false,
                                "readOnly": false,
                                "format": "date-time",
                                "type": "string"
                            },
                            {
                                "name": "time_out",
                                "isMultiValue": false,
                                "writeOnly": false,
                                "readOnly": false,
                                "format": "date-time",
                                "type": "string"
                            },
                            {
                                "name": "badgeNo",
                                "isMultiValue": false,
                                "writeOnly": false,
                                "readOnly": false,
                                "format": "string",
                                "type": "string"
                            }
                        ],
                        "strictInput": true
                    }
                ]
            }
        ],
        "isActive": true,
        "prohibitRefresh": true,
        "@unid": "3A763052FED029BCC125888E004AB270",
        "views": [
            {
                "name": "byBadge",
                "alias": [
                    "byBadge"
                ],
                "unid": "285345B8A85520CDC125888E004B2B77"
            },
            {
                "name": "byName",
                "alias": [
                    "byName"
                ],
                "unid": "27C92F678277FD95C125888E004B2788"
            }
        ]
    }
    ~~~
    {: .code}
    {% endraw %}
1. Send the request.

Now we are ready to interact with the database via Node-RED.
