# AWS: S3 and Lambda

## What’s the difference between a FIFO and a standard queue?
FIFO queues have essentially the same features as standard queues, but provide the added benefits of supporting ordering and exactly-once processing. FIFO queues provide additional features that help prevent unintentional duplicates from being sent by message producers or from being received by message consumers.

## How can the server be assured a message was properly received?
When the client emits a received event for that particular message. 

## What classic design pattern is best represented by event driven programming?

## How do you test an event driven system?
* Ensure supporting topics exist
* Start the application under test (“application” here could mean Kafka Streams, Kafka connectors, Samza, etc.)
* Send some input events
* Wait until the application has finished processing the test input
* Assert that it looks right

# Term

## Server Instances
A server instance is a collection of SQL Server databases which are run by a solitary SQL Server service or instance.

## Containers
provide a standard way to package your application’s code, configurations, and dependencies into a single object.

## Cloud Services
The term "cloud services" refers to a wide range of services delivered on demand to companies and customers over the internet.


## Cloud Architecture
Cloud Architecture refers to the various components in terms of databases, software capabilities, applications, etc. engineered to leverage the power of cloud resources to solve business problems.

## AWS
providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.

## EC2/Beanstalk vs Heroku
Elastic Compute Cloud and Elastic BeanStalk are Amazon's services that provide scalability, management, and deployment. Heroku allows developers to build, run, and operate applications in the cloud.

### Which 3 things had you heard about previously and now have better clarity on?
1. AWS 
2. Cloud
3. How to access and deploy

### Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
1. EC2
2. How to access
3. How to deploy

### What are you most excited about trying to implement or see how it works?
AWS