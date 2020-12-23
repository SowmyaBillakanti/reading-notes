# Message Queues

## What does it mean that web sockets are bidirectional? Why is this useful?
BIDIRECTIONAL. Whereas HTTP relies on a client request to receive a response from the server for every exchange, WebSockets allow for full-duplex bidirectional communication. This enables the server to send real-time updates asynchronously, without requiring the client to submit a request each time.

## Does socket.io use HTTP? Why?
The premise on which your question seems to be based is that socket.io is a websocket library, which it isn't. ... Even when websockets can be used, the initial connection setup it done over HTTP. Also, a socket.io server will attach to an HTTP server so it can serve its own client code through /socket.io/socket.io.js 

## What happens when a client emits an event?
That event is passed to and handled by the server.

## What happens when a server emits an event?
A callback function allows us to implement some sort of action on the client end

## What happens if a client “misses” an event?
A missed event doesn’t trigger any code. You should always have listeners on.


# Term

## Socket
- Socket is a Missouri-based telecommunications provider, with its headquarters in Columbia, Missouri.

## Web Socket
- WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection.

## Socket.io
- Socket.IO is a JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers.

## Client
- In computing, a client is a piece of computer hardware or software that accesses a service made available by a server as part of the client–server model of computer networks

## Server
- computer that accepts requests from a client and returns data

## OSI Model
- The Open Systems Interconnection model is a conceptual model that characterises and standardises the communication functions of a telecommunication or computing system without regard to its underlying internal structure and technology.

## TCP Model
- TCP/IP Reference Model is a four-layered suite of communication protocols. ... TCP stands for Transmission Control Protocol and IP stands for Internet Protocol. The four layers in the TCP/IP protocol suite are − Host-to- Network Layer −It is the lowest layer that is concerned with the physical transmission of data.

## TCP
- The Transmission Control Protocol is one of the main protocols of the Internet protocol suite. It originated in the initial network implementation in which it complemented the Internet Protocol. Therefore, the entire suite is commonly referred to as TCP/IP.

## UDP
- UDP (User Datagram Protocol) is a communications protocol that is primarily used for establishing low-latency and loss-tolerating connections between applications on the internet.

## Packets
- A packet is a small amount of data sent over a network, such as a LAN or the Internet. Similar to a real-life package, each packet includes a source and destination as well as the content (or data) being transferred.


## Which 3 things had you heard about previously and now have better clarity on?
- server
- client
- socket

## Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
- TCP
- TCP model
- Packets

## What are you most excited about trying to implement or see how it works?
- TCP