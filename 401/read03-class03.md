# Review, Research, and Discussion
#### Name 3 real world use cases where you’d want to change the request with custom middleware
1. Facebook post can be validated for malicious code before the actual post
2. In Instagram "stories" get request an ad middleware can be used to serve ads
3. In google photos, an object recognition middleware can be used to identify persons in a photo before storing it.

#### True or false: The route handler is middleware?
- False

#### In what ways can a middleware function end the process and send data to the browser?
- next()

#### At what point in the request lifecycle can you “inject” middleware?
- After making the request but before receiving the route handler

#### What can cause express to error with “Request headers sent twice, cannot start a second response”
- If the body is missing



# Vocabulary Terms
1. Middleware : a function that acts on a client req before receiving by route handler
2. Req object: To get info from client and and deliver to the server
3. Res object: Provides the return info that is sent back to the server
4. Application Middleware: A piece of software that intercepts an incoming request prior to hitting its target route. It can perform additional processing, make changes to the request, or reject the request.
5. Test Driven Development : Tests written first and then real code
6. Behavioral Testing AKA Black Box Testing, tests software by applying inputs and assessing the outputs

