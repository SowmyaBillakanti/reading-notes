# AWS: API, Dynamo and Lambda

## What’s the difference between a FIFO and a standard queue?
FIFO queues have essentially the same features as standard queues, but provide the added benefits of supporting ordering and exactly-once processing. FIFO queues provide additional features that help prevent unintentional duplicates from being sent by message producers or from being received by message consumers.

## How can the server be assured a message was properly received?
When the client emits a received event for that particular message. 

## What classic design pattern is best represented by event driven programming?
 A messaging service is a classic event driven architecture.

## How do you test an event driven system?
* Ensure supporting topics exist
* Start the application under test (“application” here could mean Kafka Streams, Kafka connectors, Samza, etc.)
* Send some input events
* Wait until the application has finished processing the test input
* Assert that it looks right

# Term

## Serverless Functions
Serverless computing is a cloud computing execution model in which the cloud provider runs the server, and allocates machine resources on demand.

## Cloud Storage
Storage on servers located offsite

## CDN
Content distribution network

### Which 3 things had you heard about previously and now have better clarity on?
1. AWS 
2. Lambda
3. How to access and deploy

### Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
1. EC2
2. S3
3. Lambda

### What are you most excited about trying to implement or see how it works?
AWS