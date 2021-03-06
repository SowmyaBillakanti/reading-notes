# TABLES
* How to create tables
* What information suits tables
* How to represent complex data in tables

## WHAT'S A TABLE?
A table represents information in a grid format. Examples of tables include financial reports, TV schedules, and sports results.

Grids allow us to understand complex data by referencing information on two axes.

Each block in the grid is referred to as a table cell. In HTML a table is written out row by row.

### TABLE HEADINGS
`<TH>`
The `<th>` element is used just like the `<td>` element but its purpose is to represent the heading for either a column or a row. (The th stands for table heading.)

### SPANNING COLUMNS
Sometimes you may need the entries in a table to stretch across more than one column.

The colspan attribute can be used on a `<th>` or `<td>` element and indicates how many columns that cell should run across.

### SPANNING ROWS
You may also need entries in a table to stretch down across more than one row.

The rowspan attribute can be used on a `<th>` or `<td>` element to indicate how many rows a cell should span down the table.

### LONG TABLES
There are three elements that help distinguish between the main content of the table and the first and last rows (which can contain different content).

These elements help people who use screen readers and also allow you to style these sections in a different manner than the rest of the table (as you will see when you learn about CSS).

`<THEAD>`
The headings of the table should sit inside the `<thead>` element.

`<TBODY>`
The body should sit inside the `<tbody>` element.

`<TFOOT>`
The footer belongs inside the `<tfoot>` element.

### OLD CODE: WIDTH & SPACING
There are some outdated attributes which you should not use on new websites. You may, however, come across some of them when looking at older code, so I will mention them here. All of these attributes have been replaced by the use of CSS.

### OLD CODE: BORDER & BACKGROUND
The border attribute was used on both the `<table>` and `<td>` elements to indicate the width of the border in pixels.

### SUMMARY TABLES
* The `<table>` element is used to add tables to a web page.
* A table is drawn out row by row. Each row is created with the `<tr>` element.
* Inside each row there are a number of cells represented by the `<td>` element (or `<th>` if it is a header).
* You can make cells of a table span more than one row or column using the rowspan and colspan attributes.
* For long tables you can split the table into a `<thead>`, `<tbody>`, and `<tfoot>`.

# FUNCTIONS, METHODS & OBJECTS

## WHAT IS A FUNCTION?
Functions let you group a series of statements together to perform a specific task. If different parts of a script repeat the same task, you can reuse the function (rather than repeating the same set of statements).

### DECLARING A FUNCTION
To create a function, you give it a name and then write the statements needed to achieve its task inside the curly braces.
This is known as a function declaration.
You declare a function using the function keyword.

### CALLING A FUNCTION
Having declared the function, you can then execute all of the statements between its curly braces with just one line of code. This is known as calling the function.

To run the code in the function, you use the function name followed by parentheses.

In programmer-speak, you would say that this code calls a function.

### DECLARING FUNCTIONS THAT NEED INFORMATION
Sometimes a function needs specific information to perform its task. In such cases, when you declare the function you give it parameters. Inside the function, the parameters act like variables.

If a function needs information to work, you indicate what it needs to know in parentheses after the function name.

### CALLING FUNCTIONS THAT NEED INFORMATION
When you call a function that has parameters, you specify the values it should use in the parentheses that follow its name. The values are called arguments, and they can be provided as values or as variables.

#### ARGUMENTS AS VARIABLES
You do not have to specify actual values when calling a function - you can use variables in their place. So the following does the same thing.

#### PARAMETERS VS ARGUMENTS
People often use the terms parameter and argument interchangeably, but there is a subtle difference.

### GETTING A SINGLE VALUE OUT OF A FUNCTION
Some functions return information to the code that called them. For example, when they perform a calculation, they return the result.

### GETTING MULTIPLE VALUES OUT OF A FUNCTION
Functions can return more than one value using an array. For example, this function calculates the area and volume of a box.

# WHAT IS AN OBJECT? 

Objects group together a set of variables and functions to create a model
of a something you would recognize from the real world. In an object,
variables and functions take on new names.

IN AN OBJECT: VARIABLES BECOME KNOWN AS PROPERTIES
IN AN OBJECT: FUNCTIONS BECOME KNOWN AS METHODS 

## Programmers use a lot of name/value pairs:
• HTML uses attribute names and values.
• CSS uses property names and values. 

## In JavaScript:
• Variables have a name and you can assign them a
value of a string, number, or Boolean.
• Arrays have a name and a group of values. (Each
item in an array is a name/value pair because it
has an index number and a value.)
• Named functions have a name and value that is a
set of statements to run if the function is called.
• Objects consist of a set of name/value pairs
(but the names are referred to as keys).

## Creating an Object: Literal Notation
Literal notation is the easiest and most popular way to create objects. (There are several ways to create objects.)

Separate each key from its value using a colon. Separate each property and method with a comma (but not after the last value).

## ACCESSING AN OBJECT AND DOT NOTATION
You access the properties or methods of an object using dot notation. You can also access properties using square brackets.

To access a property or method of an object you use the name of the object, followed by a period, then the name of the property or method you want to access. This is known as dot notation.

The period is known as the member operator. The property or method on its right is a member of the object on its left. Here, two variables are created to hold the hotel name and number of vacant rooms.

# Understanding The Problem Domain Is The Hardest Part Of Programming
What is the hardest thing about writing code?

There are many common answers to this question:

Learning a new technology
Naming things
Testing your code
Debugging
Fixing bugs
Making software maintainable
The list goes on and on.

# DOCUMENT OBJECT MODEL
The Document Object Model (DOM) specifies how browsers should create a model of an HTML page and how JavaScript can access and update the contents of a web page while it is in the browser window.
The DOM is neither part of HTML, nor part of JavaScript; it is a separate set of rules. It is implemented by all major browser makers, and covers two primary areas:

### MAKING A MODEL OF THE HTML PAGE
The DOM specifies the way in which the browser should structure this model using a DOM tree.

The DOM is called an object model because the model (the DOM tree) is made of objects.

Each object represents a different part of the page loaded in the browser window.

### ACCESSING AND CHANGING THE HTML PAGE
The DOM also defines methods and properties to access and update each object in this model, which in turn updates what the user sees in the browser.

You will hear people call the DOM an Application Programming Interface (API). User interfaces let humans interact with programs; APIs let programs (and scripts) talk to each other. The DOM states what your script can ask the browser about the current page, and how to tell the browser to update what is being shown to the user.

## THE DOM TREE IS A MODEL OF A WEB PAGE
As a browser loads a web page, it creates a model of that page. The model is called a DOM tree, and it is stored in the browsers’ memory. It consists of four main types of nodes.
* BODY OF HTML PAGE
* THE DOCUMENT NODE
* ELEMENT NODES
* ATTRIBUTE NODES
* TEXT NODES

## WORKING WITH THE DOM TREE
Accessing and updating the DOM tree involves two steps:
1: Locate the node that represents the element you want to work with.
2: Use its text content, child elements, and attributes.

## CACHING DOM QUERIES
Methods that find elements in the DOM tree are called DOM queries. When you need to work with an element more than once, you should use a variable to store the result of this query.

When a script selects an element to access or update, the interpreter must find the element(s) in the DOM tree.

### ACCESSING ELEMENTS
DOM queries may return one element, or they may return a NodeList, which is a collection of nodes.

## NODELISTS: DOM QUERIES THAT RETURN MORE THAN ONE ELEMENT
When a DOM method can return more than one element, it returns a NodeList (even if it only finds one matching element).

A NodeList is a collection of element nodes. Each node is given an index number (a number that starts at zero, just like an array).

The order in which the element nodes are stored in a NodeList is the same order that they appeared in the HTML page.

When a DOM query returns a NodeList, you may want to:

Select one element from the NodeList.
Loop through each item in the NodeList and perform the same statements on each of the element nodes.
NodeLists look like arrays and are numbered like arrays, but they are not actually arrays; they are a type of object called a collection.

Like any other object, a NodeList has properties and methods, notably:

The length property tells you how many items are in the NodeList.
The item() method returns a specific node from the NodeList when you tell it the index number of the item that you want (in the parentheses). However, it is more common to use array syntax (with square brackets) to retrieve an item from a NodeList.

### LIVE & STATIC NODELISTS
There are times when you will want to work with the same selection of elements several times, so the NodeList can be stored in a variable and re-used (rather than collecting the same elements again).

In a live NodeList, when your script updates the page, the NodeList is updated at the same time. The methods beginning getElementsBy… return live NodeLists. They are also typically faster to generate than static NodeLists.

In a static NodeList when your script updates the page, the NodeList is not updated to reflect the changes made by the script.

## SELECTING AN ELEMENT FROM A NODELIST
There are two ways to select an element from a NodeList: The item() method and array syntax. Both require the index number of the element you want.

THE item() METHOD
NodeLists have a method called item() which will return an individual node from the NodeList.

You specify the index number of the element you want as a parameter of the method (inside the parentheses).

## ARRAY SYNTAX
You can access individual nodes using a square bracket syntax similar to that used to access individual items from an array.

You specify the index number of the element you want inside square brackets that follow the NodeList.

### SELECTING ELEMENTS USING CLASS ATTRIBUTES
The getElementsByClassName() method allows you to select elements whose class attribute contains a specific value.

## SELECTING ELEMENTS BY TAG NAME
The getElementsByTagName() method allows you to select elements using their tag name.

The element name is specified as a parameter, so it is placed inside the parentheses and is contained by quote marks.

## SELECTING ELEMENTS USING CSS SELECTORS
querySelector() returns the first element node that matches the CSS-style selector. querySelectorAll() returns a NodeList of all of the matches.

Both methods take a CSS selector as their only parameter. The CSS selector syntax offers more flexibility and accuracy when selecting an element than just specifying a class name or a tag name, and should also be familiar to front-end web developers who are used to targeting elements using CSS.

## REPEATING ACTIONS FOR AN ENTIRE NODELIST
When you have a NodeList, you can loop through each node in the collection and apply the same statements to each.

## LOOPING THROUGH A NODELIST
If you want to apply the same code to numerous elements, looping through a NodeList is a powerful technique.

It involves finding out how many items are in the NodeList, and then setting a counter to loop through them, one-by-one.

Each time the loop runs, the script checks that the counter is less than the total number of items in the NodeList.

## TRAVERSING THE DOM
When you have an element node, you can select another element in relation to it using these five properties. This is known as traversing the DOM.

* parentNode
This property finds the element node for the containing (or parent) element in the HTML.

* previousSibling nextSibling
These properties find the previous or next sibling of a node if there are siblings.

* firstChild lastChild
These properties find the first or last child of the current element.

## WHITESPACE NODES
Traversing the DOM can be difficult because some browsers add a text node whenever they come across whitespace between elements.

## PREVIOUS & NEXT SIBLING
You have just seen that these properties can return inconsistent results in different browsers. However, it is safe to use them when there is no whitespace between elements.

## ADDING AN ELEMENT TO THE DOM TREE
createElement() creates an element that can be added to the DOM tree, in this case an empty `<li>` element for the list.

This new element is stored inside a variable called newEl until it is attached to the DOM tree later on.

createTextNode() allows you to create a new text node to attach to an element. It is stored in a variable called newText.

## ATTRIBUTE NODES
Once you have an element node, you can use other properties and methods on that element node to access and change its attributes.

There are two steps to accessing and updating attributes.

First, select the element node that carries the attribute and follow it with a period symbol.

Then, use one of the methods or properties below to work with that element's attributes.

### CHECK FOR AN ATTRIBUTE AND GET ITS VALUES
Before you work with an attribute, it is good practice to check whether it exists. This will save resources if the attribute cannot be found.

The hasAttribute() method of any element node lets you check if an attribute exists. The attribute name is given as an argument in the parentheses.

Using hasAttribute() in an if statement like this means that the code inside the curly braces will run only if the attribute exists on the given element.

### CREATING ATTRIBUTES & CHANGING THEIR VALUES
The className property allows you to change the value of the class attribute. If the attribute does not exist, it will be created and given the specified value.

### REMOVING ATTRIBUTES
To remove an attribute from an element, first select the element, then call removeAttribute(). It has one parameter: the name of the attribute to remove.

### EXAMINING THE DOM IN CHROME
Modern browsers come with tools that help you inspect the page loaded in the browser and understand the structure of the DOM tree.

In the screenshot to the right, the `<li>` element is highlighted and the Properties panel (1) indicates that this is an:

* li element with an id attribute whose value is one and class whose value is hot
* an HTMLLIElement
* an HTMLElement
* an element
* a node
* an object

### SUMMARY

#### DOCUMENT OBJECT MODEL

* The browser represents the page using a DOM tree.
* DOM trees have four types of nodes: document nodes, element nodes, attribute nodes, and text nodes.
* You can select element nodes by their id or class attributes, by tag name, or using CSS selector syntax.
* Whenever a DOM query can return more than one node, it will always return a NodeList.
* From an element node, you can access and update its content using properties such as textContent and innerHTML or using DOM manipulation techniques.
* An element node can contain multiple text nodes and child elements that are siblings of each other.
* In older browsers, implementation of the DOM is inconsistent (and is a popular reason for using jQuery).
* Browsers offer tools for viewing the DOM tree.

### SUMMARY

#### FUNCTIONS, METHODS & OBJECTS

* Functions allow you to group a set of related statements together that represent a single task.
* Functions can take parameters (information required to do their job) and may return a value.
* An object is a series of variables and functions that represent something from the world around you.
* In an object, variables are known as properties of the object; functions are known as methods of the object.
* Web browsers implement objects that represent both the browser window and the document loaded into the browser window.
* JavaScript also has several built-in objects such as String, Number, Math, and Date. Their properties and methods offer functionality that help you write scripts.
* Arrays and objects can be used to create complex data sets (and both can contain the other).
