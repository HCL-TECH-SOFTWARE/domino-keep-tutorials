---
layout: default
prevPage: pages/collabsphere21/postman_contacts/creation
nextPage: pages/collabsphere21/postman_contacts/population
slug:
    - label: Collabsphere 2021 Workshop
      url: pages/collabsphere21/index
    - label: Postman Contacts Setup
      url: pages/collabsphere21/postman_contacts/index
    - label: Updating the Schema
---

{::options parse_block_html="true" /}

The schema could be updated via the REST Configuration UI. But because KEEP is API first, it can also be done via REST service calls with an authorized user.

### Get Schema

Add a request as previously.

1. Rename it "Get Schema"
1. Set the request URL to {% raw %}"{{HOST}}/schema?configName={{CONTACTS}}&nsfPath=collabsphere.nsf"{% endraw %}.
1. Send the request.

The response will be the current schema, which can be used to update the schema.

### Update Schema

Add a request as previously.

1. Rename it "Update Schema"
1. Change "GET" to "POST".
1. Set the request URL to {% raw %}"{{HOST}}/schema?configName={{CONTACTS}}&nsfPath=collabsphere.nsf"{% endraw %}.
1. On the **Headers** tab, add a header "Content-Type" set to "application/json".
1. On the **Body** tab, select raw and enter:
    {% raw %}
    ~~~json
    {
        "nsfPath": "collabsphere.nsf",
        "iconName": "KEEP",
        "icon": "Base64 stuff, preferably SVG",
        "description": "Collabsphere Demo",
        "formulaEngine": "domino",
        "schemaName": "contacts",
        "requireRevisionToUpdate": false,
        "allowDecryption": false,
        "cacheTimestamp": 1,
        "dqlAccess": true,
        "dqlFormula": {
            "formulaType": "domino",
            "formula": "@True"
        },
        "allowCode": false,
        "openAccess": true,
        "forms": [
            {
                "formName": "Contact",
                "alias": [
                    "Contact"
                ],
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
                                "name": "email",
                                "isMultiValue": false,
                                "writeOnly": false,
                                "readOnly": false,
                                "format": "string",
                                "type": "string"
                            },
                            {
                                "name": "gender",
                                "isMultiValue": false,
                                "writeOnly": false,
                                "readOnly": false,
                                "format": "string",
                                "type": "string"
                            },
                            {
                                "name": "city",
                                "isMultiValue": false,
                                "writeOnly": false,
                                "readOnly": false,
                                "format": "string",
                                "type": "string"
                            },
                            {
                                "name": "state",
                                "isMultiValue": false,
                                "writeOnly": false,
                                "readOnly": false,
                                "format": "string",
                                "type": "string"
                            }
                        ],
                        "strictInput": true
                    },
                    {
                        "modeName": "dql",
                        "computeWithForm": false,
                        "readAccessFormula": {
                            "formulaType": "domino",
                            "formula": "@True"
                        },
                        "writeAccessFormula": {
                            "formulaType": "domino",
                            "formula": "@False"
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
                                "readOnly": true,
                                "format": "string",
                                "type": "string"
                            },
                            {
                                "name": "last_name",
                                "isMultiValue": false,
                                "writeOnly": false,
                                "readOnly": true,
                                "format": "string",
                                "type": "string"
                            },
                            {
                                "name": "email",
                                "isMultiValue": false,
                                "writeOnly": false,
                                "readOnly": true,
                                "format": "string",
                                "type": "string"
                            },
                            {
                                "name": "gender",
                                "isMultiValue": false,
                                "writeOnly": false,
                                "readOnly": true,
                                "format": "string",
                                "type": "string"
                            },
                            {
                                "name": "city",
                                "isMultiValue": false,
                                "writeOnly": false,
                                "readOnly": true,
                                "format": "string",
                                "type": "string"
                            },
                            {
                                "name": "state",
                                "isMultiValue": false,
                                "writeOnly": false,
                                "readOnly": true,
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
        "@unid": "F0C9412C53DD2FA5C125888C004EB82E",
        "views": [
            {
                "name": "byState",
                "alias": [
                    "byState"
                ],
                "unid": "ED543CAECB0A55D2C125888C00533B97"
            },
            {
                "name": "byName",
                "alias": [
                    "byName"
                ],
                "unid": "2DAFEAC3DAE99325C125888C0051AB93"
            }
        ]
    }
    ~~~
    {: .code}
    {% endraw %}
    <br/>
    <div class="panel panel-info">
    Understanding the Schema
    {: .panel-heading}
    <div class="panel-body">
    The schema looks complicated, so it will be useful to deconstruct it.

    - The `dqlFormula` object tells KEEP to use the Domino formula `@True` to determine whether DQL can be used.
    - The `forms` property enables the Contact form with all fields read-write in "default" mode and all fields only read-only in "dql" mode.
    - The `views` property exposes the "byState" view.
    </div>
    </div>
1. Send the request.
