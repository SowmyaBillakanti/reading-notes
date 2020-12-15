# Review, Research, and Discussion

## Write the following steps in the correct order
* Register your application to get a client_id and client_secret
* Ask the client if they want to sign in via a third party
* Redirect to a third party authentication endpoint
* Make a request to a third-party API endpoint
* Receive authorization code
* Make a request to the access token endpoint
* Receive access token

## What can you do with an authorization code?
- The authorization code is a temporary code that the client will exchange for an access token. The code itself is obtained from the authorization server where the user gets a chance to see what the information the client is requesting, and approve or deny the request.

## What can you do with an access token?
- Access tokens are the thing that applications use to make API requests on behalf of a user. The access token represents the authorization of a specific application to access specific parts of a user's data. Access tokens must be kept confidential in transit and in storage.

## What’s a benefit of using OAuth instead of your own basic authentication?
- OAuth doesn't share password data but instead uses authorization tokens to prove an identity between consumers and service providers. OAuth is an authentication protocol that allows you to approve one application interacting with another on your behalf without giving away your password.

# Term

### Client ID
- The client_id is a public identifier for apps. Even though it’s public, it’s best that it isn’t guessable by third parties, so many implementations use something like a 32-character hex string. It must also be unique across all clients that the authorization server handles. If the client ID is guessable, it makes it slightly easier to craft phishing attacks against arbitrary applications.

#### Here are some examples of client IDs from services that support OAuth 2.0:
- Github: 6779ef20e75817b79602
- Google: 292085223830.apps.googleusercontent.com
- Instagram: f2a1ed52710d4533bde25be6da03b6e3

### Client Secret
- A client secret is a secret known only to your application and the authorization server. It protects your resources by only granting tokens to authorized requestors. Protect your client secrets and never include them in mobile or browser-based apps.

### Authentication Endpoint
- The Authentication API enables you to manage all aspects of user identity when you use Auth0. It offers endpoints so your users can log in, sign up, log out, access APIs, and more.

### Access Token Endpoint
-  where apps make a request to get an access token for a user

### API Endpoint
- Simply put, an endpoint is one end of a communication channel. When an API interacts with another system, the touchpoints of this communication are considered endpoints. For APIs, an endpoint can include a URL of a server or service. ... The place that APIs send requests and where the resource lives, is called an endpoint.

### Authorization Code
- Authorization codes are used for any transaction or entry that has restrictions on which users are entitled to access. For example, a credit card authorization code is a five- or six-number code from the issuing bank to the vendor, that authorizes the sale.

### Access Token
- An access token is an object encapsulating the security identity of a process or thread. A token is used to make security decisions and to store tamper-proof information about some system entity.

## Preview
1. Which 3 things had you heard about previously and now have better clarity on?
- APIs
- RESTful
- Linked list

2. Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
- the OAuth workflow
- Authentication
- Authorization

3. What are you most excited about trying to implement or see how it works?
- Google authorization
