# What is a Linked List
A Linked List is a sequence of Nodes that are connected/linked to each other. The most defining feature of a Linked List is that each Node references the next Node in the link.

## Types
- Singly : Singly refers to the number of references the node has. A Singly linked list means that there is only one reference, and the reference points to the Next node in a linked list.
- Doubly : Doubly refers to there being two (double) references within the node. A Doubly linked list means that there is a reference to both the Next and Previous node.

## Big O
The Big O of time for Includes would be O(n). This is because, at its worse case, the node we are looking for will be the very last node in the linked list. n represents the number of nodes in the linked list.

The Big O of space for Includes would be O(1). This is because there is no additional space being used than what is already given to us with the linked list input.

## Prerequisites
When constructing your code, a few things to keep in mind.

When making your Node class, consider requiring a value to be passed in to require that each node has a value.

When making a Linked List, you may want to require that at least one node gets passed in upon instantiation. This first node is what your Head and Current will point too.

Whiteboarding for my understanding and reference: 
![Whiteboard](../assets/Linkedlists.png)
