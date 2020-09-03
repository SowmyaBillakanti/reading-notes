# LINKS
* Creating links between pages
* Linking to other sites
* Email links

### We will commonly come across the following types of links:

* Links from one website to another
* Links from one page to another on the same website
* Links from one part of a web page to another part of the same page
* Links that open in a new browser window
* Links that start up your email program and address a new email to someone

### DIRECTORY STRUCTURE

On larger websites it's a good idea to organize your code by placing the pages for each different section of the site into a new folder. Folders on a website are sometimes referred to as directories.
* STRUCTURE
* RELATIONSHIPS
* HOMEPAGES


### Overview

* Links are created using the `<a>` element.
* The `<a>` element uses the href attribute to indicate the page you are linking to.
* If you are linking to a page within your own site, it is best to use relative links rather than qualified URLs.
* You can create links to open email programs with an email address in the “to” field.
* You can use the id attribute to target elements within a page that can be linked to.


# LAYOUT
* Controlling the position of elements
* Creating site layouts
* Designing for different sized screens

### How designing for a screen can be different to designing for other mediums:
* Explore different ways to position elements using normal flow, relative positioning, absolute positioning and floats.
* Discover how various devices have different screen sizes and resolution, and how this affects the design process.
* Learn the difference between fixed width and liquid layouts, and how they are created.
* Find out how designers use grids to make their page designs look more professional. 

### CONTROLLING THE POSITION OF ELEMENTS
* NORMAL FLOW - POSITION:STATIC
* RELATIVE POSITIONING - POSITION:RELATIVE
* ABSOLUTE POSITIONING - POSITION:ABSOLUTE
* FIXED POSITIONING - POSITION:FIXED
* OVERLAPPING ELEMENTS - Z-INDEX
* FLOATING ELEMENTS - FLOAT

### SUMMARY LAYOUT
`<div>` elements are often used as containing elements to group together sections of a page.
Browsers display pages in normal flow unless you specify relative, absolute, or fixed positioning.
The float property moves content to the left or right of the page and can be used to create multi-column layouts. (Floated items require a defined width.)
Pages can be fixed width or liquid (stretchy) layouts.
Designers keep pages within 960-1000 pixels wide, and indicate what the site is about within the top 600 pixels (to demonstrate its relevance without scrolling).
Grids help create professional and flexible designs.
CSS Frameworks provide rules for common tasks.
You can include multiple CSS files in one page.
CopyAdd Highligh

# FUNCTIONS & METHODS
Functions consist of a series of statements that have been grouped together because they perform a specific task. A method is the same as a function, except methods are created inside (and are part of) an object.

### OBJECTS
#### BUILT-IN OBJECTS
The browser comes with a set of objects that act like a toolkit for creating interactive web pages.

### WHAT IS A FUNCTION?
Functions let you group a series of statements together to perform a specific task. If different parts of a script repeat the same task, you can reuse the function (rather than repeating the same set of statements).

### DECLARING A FUNCTION
To create a function, you give it a name and then write the statements needed to achieve its task inside the curly braces. This is known as a function declaration.

### CALLING A FUNCTION
Having declared the function, you can then execute all of the statements between its curly braces with just one line of code. This is known as calling the function.

### CALLING FUNCTIONS THAT NEED INFORMATION
* ARGUMENTS AS VALUES
getArea(3,5);
* ARGUMENTS AS VARIABLES
getArea(wallWidth, wallHeight);
* PARAMETERS VS ARGUMENTS

### WHAT IS AN OBJECT?
Objects group together a set of variables and functions to create a model of a something you would recognize from the real world. In an object, variables and functions take on new names.
* IN AN OBJECT: VARIABLES BECOME KNOWN AS PROPERTIES
* IN AN OBJECT: FUNCTIONS BECOME KNOWN AS METHODS

### ARRAYS
Arrays can store multiple pieces of information. Each piece of information is separated by a comma. The order of the values is important because items in an array are assigned a number (called an index).
Values in an array are put in square brackets, separated by commas.

### ARRAYS ARE OBJECTS
Arrays are actually a special type of object. They hold a related set of key/value pairs (like all objects), but the key for each value is its index number.

### WHAT IS AN OBJECT MODEL?
An object model is a group of objects, each of which represent related things from the real world. Together they form a model of something larger.

### Overview of FUNCTIONS, METHODS & OBJECTS

* Functions allow you to group a set of related statements together that represent a single task.
* Functions can take parameters (information required to do their job) and may return a value.
* An object is a series of variables and functions that represent something from the world around you.
* In an object, variables are known as properties of the object; functions are known as methods of the object.
* Web browsers implement objects that represent both the browser window and the document loaded into the browser window.
* JavaScript also has several built-in objects such as String, Number, Math, and Date. Their properties and methods offer functionality that help you write scripts.
* Arrays and objects can be used to create complex data sets (and both can contain the other).
 
