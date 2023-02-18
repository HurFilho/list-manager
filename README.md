# Gerenciador de tarefas - API

This project was created to provide API endpoints to the "Gerenciador de tarefas" project, developed by Laís Floriano as coding practice.

## Dependencies and technologies

* Node.js
* Express.js

## Available Endpoints

### CHANNELS
+ **Path:** /channels
+ **Method:** GET
+ **Produces:** application/json
+ **Path parameters:** none
+ **Query parameters:** none
+ **Response example:** 
```
    [
    {
        "name": "Team 1",
        "channels": [
            {
                "name": "Channel 1",
                "id": 1
            },
            {
                "name": "Channel 2",
                "id": 2
            }
        ]
    }
]
```
