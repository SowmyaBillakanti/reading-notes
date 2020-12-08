## What’s the difference between PUT and PATCH?
Put can update all or just a portion of the record. Patch can only update a partial record.

## Provide links to 3 services or tools that allow you to “mock” an API for development like json-server
[Postman](https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/)
[Spotlight](https://stoplight.io/mock-api-guide/advanced/)
[Mockable.io](https://www.mockable.io/)

## Compare and contrast Swagger and APIDoc.js
### Swagger
- Language for describing RESTful APIs
- Has good formatting.
- Example:

```
swagger: "2.0"
info:
  title: Sample API
  description: API description in Markdown.
  version: 1.0.0
host: api.example.com
basePath: /v1
schemes:
  - https
paths:
  /users:
    get:
      summary: Returns a list of users.
      description: Optional extended description in Markdown.
      produces:
        - application/json
      responses:
        200:
          description: OK
```

### ApiDoc
- Inline docs for RESTful APIs.
- Simply uses comments.
- Example:

```
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
 ```

## Which HTTP status codes should be sent with each type of (un)successful API call?
### 400s - Client errors
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found

### 500s - Server errors
- 500 Internal Server Error
- 501 Not Implemented
- 502 Bad Gateway
- 503 Service Unavailable
- 504 Gateway Timeout

## Compare and contrast SOAP and ReST
### Soap
- Messaging Protocol
- For exchanging info
- In implementing Web Services
- Example:

```
<?xml version="1.0"?>

<soap:Envelope
xmlns:soap="http://www.w3.org/2003/05/soap-envelope/"
soap:encodingStyle="http://www.w3.org/2003/05/soap-encoding">

<soap:Header>
...
</soap:Header>

<soap:Body>
...
  <soap:Fault>
  ...
  </soap:Fault>
</soap:Body>

</soap:Envelope>
```

### Rest
- Architectural style for creating Web Services.
- Provide interoperability between systems.
- Example:

```
POST
GET
PUT
DELETE
```

## Vocabulary Terms:

### Web Server 
- A web server is software and hardware that uses HTTP (Hypertext Transfer Protocol) and other protocols to respond to client requests made over the World Wide Web.

### Express
- A Node web framework that provides functionality for building http routes, integrates with view rendering engines, provides common application settings, adds the option of middleware.

### Routing
- A construct of Express which defines how clients and servers communicate and transfer information

### WRRC
-  Web Request Response Cycle - the process by which servers and clients communicate and transfer information


