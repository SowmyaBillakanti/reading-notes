# Trees
Tree data structures have many uses, and it’s good to have a basic understanding of how they work. Trees are the basis for other very used data structures like Maps and Sets. Also, they are used on databases to perform quick searches. The HTML DOM uses a tree data structure to represents the hierarchy of elements.

## Terminology
- Node - A node is the individual item/data that makes up the data structure
- Root - The root is the first/top Node in the tree
- Left Child - The node that is positioned to the left of a root or node
- Right Child - The node that is positioned to the right of a root or node
- Edge - The edge in a tree is the link between a parent and child node
- Leaf - A leaf is a node that does not contain any children
- Height - The height of a tree is determined by the number of edges from the root to the bottommost node

## Traversals
An important aspect of trees is how to traverse them. Traversing a tree allows us to search for a node, print out the contents of a tree, and much more! There are two categories of traversals when it comes to trees:

#### Depth First 
Depth first traversal is where we prioritize going through the depth (height) of the tree first. There are multiple ways to carry out depth first traversal, and each method changes the order in which we search/print the root.
Three methods:

* Pre-order: Root --> Left --> Right
* In-order: Left --> Root --> Right
* Post-order: Left --> Right --> Root


#### Breadth First
Breadth first traversal iterates through the tree by going through each level of the tree node-by-node.

# Binary Trees
Trees can have any number of children per node, but Binary Trees restrict the number of children to two (hence our left and right children).