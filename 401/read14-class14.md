# Event Driven Architecture

# Review, Research, and Discussion
## What’s the difference between a FIFO and a standard queue?
FIFO queues have essentially the same features as standard queues, but provide the added benefits of supporting ordering and exactly-once processing. FIFO queues provide additional features that help prevent unintentional duplicates from being sent by message producers or from being received by message consumers

## How can the server be assured a message was properly received?

## What classic design pattern is best represented by event driven programming?

## How do you test an event driven system?
* Ensure supporting topics exist
* Start the application under test (“application” here could mean Kafka Streams, Kafka connectors, Samza, etc.)
* Send some input events
* Wait until the application has finished processing the test input
* Assert that it looks right

# Term
## FIFO Queue
In FIFO queues, messages are ordered based on message group ID.

## Pub/Sub 
Pub/Sub is an asynchronous messaging service that decouples services that produce events from services that process events.

# Preview

## Which 3 things had you heard about previously and now have better clarity on?
- FIFO
- Event Driven systems

## Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
- FIFO Queues
- EDS

## What are you most excited about trying to implement or see how it works?
- FIFO Queues
