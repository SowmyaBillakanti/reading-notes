# Socket.io

## What is the benefit of transforming data into packets?
Packets are the basic units of communication over a TCP/IP network. Devices on a TCP/IP network divide data into small pieces, allowing the network to accommodate various bandwidths, to allow for multiple routes to a destination, and to retransmit the pieces of data which are interrupted or lost. Each piece is a packet, a term interchangeable with datagram.

## UDP is often refereed to as a connectionless protocol. Why is this?
UDP is a connectionless protocol. No connection needs to be established between the source and destination before you transmit data. UDP does not have a mechanism to make sure that the payload is not corrupted. As a result, the application must take care of data integrity all by itself.

## Can a socket server application have multiple socket connections?
Yes, Multiple connections on the same server can share the same server-side IP/Port pair as long as they are associated with different client-side IP/Port pairs, and the server would be able to handle as many clients as available system resources allow it to.

## Can a socket connection application be connected to multiple socket servers?
No, A server socket listens on a single port.

## Can an application be both a socket server and a socket connection?
Yes

# Terms

## Observer Pattern
The observer pattern is a software design pattern in which an object, named the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

## Listener
An object or function that is activated by a specific event

## Event Handler
Function that responds or processes an event

## Event Driven Programming
In computer programming, event-driven programming is a programming paradigm in which the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs, or messages from other programs or threads.

## Event Loop
In computer science, the event loop is a programming construct or design pattern that waits for and dispatches events or messages in a program.

## Event Queue
An event queue is a repository where events from an application are held prior to being processed by a receiving program or system. Event queues are often used in the context of an enterprise messaging system.

## Call Stack
Call stack is a stack data structure that stores information about the active subroutines of a computer program

## Emit/Raise/Trigger
Emit's job is to trigger named event(s) which in turn cause functions called listeners to be called

# Preview

## Which 3 things had you heard about previously and now have better clarity on?
- Event Driven programming
- Listener
- Emit

## Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
- EDP
- Listener
- Stacks and Queues

## What are you most excited about trying to implement or see how it works?
- EDP
