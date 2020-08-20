# Introduction

* Understanding some basic programming concepts and the terms that JavaScript programmers use to describe them.
* Learning the language itself, and, like all languages, you need to know its vocabulary and how to structure your sentences.
* Becoming familiar with how it is applied by looking at examples of how JavaScript is commonly used in websites today.

# How JS makes page more interactive
* By Accessing the content
* By Modify content
* Program rules
* React to events

# EXAMPLES OF JAVASCRIPT IN THE BROWSER
1. SLIDESHOWS
2. FORMS
3. RELOAD PART OF PAGE
4. FILTERING DATA

# Chapter 3
# WHAT IS A FUNCTION?
Functions let you group a series of statements together to perform a specific task. If different parts of a script repeat the same task, you can reuse the function (rather than repeating the same set of statements).
Grouping together the statements that are required to answer a question or perform a task helps organize your code.

## DECLARING A FUNCTION
o create a function, you give it a name and then write the statements needed to achieve its task inside the curly braces.
This is known as a function declaration.

You declare a function using the function keyword.
You give the function a name (sometimes called an identifier)

## CALLING A FUNCTION
Having declared the function, you can then execute all of the statements between its curly braces with just one line of code. This is known as calling the function.

To run the code in the function, you use the function name followed by parentheses.
In programmer-speak, you would say that this code calls a function.
You can call the same function as many times as you want within the same JavaScript file.

## DECLARING FUNCTIONS THAT NEED INFORMATION
Sometimes a function needs specific information to perform its task. In such cases, when you declare the function you give it parameters. Inside the function, the parameters act like variables.

If a function needs information to work, you indicate what it needs to know in parentheses after the function name.

## CALLING FUNCTIONS THAT NEED INFORMATION
When you call a function that has parameters, you specify the values it should use in the parentheses that follow its name. The values are called arguments, and they can be provided as values or as variables.
* ARGUMENTS AS VALUES
* ARGUMENTS AS VARIABLES
* PARAMETERS VS ARGUMENTS

## GETTING A SINGLE VALUE OUT OF A FUNCTION
Some functions return information to the code that called them. For example, when they perform a calculation, they return the result.

This calculateArea() function returns the area of a rectangle to the code that called it.

Inside the function, a variable called area is created. It holds the calculated area of the box.

The return keyword is used to return a value to the code that called the function.

## GETTING MULTIPLE VALUES OUT OF A FUNCTION
Functions can return more than one value using an array. For example, this function calculates the area and volume of a box.

First, a new function is created called getSize(). The area of the box is calculated and stored in a variable called area.

The volume is calculated and stored in a variable called volume. Both are then placed into an array called sizes.

This array is then returned to the code that called the getSize() function, allowing the values to be used.

## ANONYMOUS FUNCTIONS & FUNCTION EXPRESSIONS
Expressions produce a value. They can be used where values are expected. If a function is placed where a browser expects to see an expression, (e.g., as an argument to a function), then it gets treated as an expression.
* FUNCTION DECLARATION
* FUNCTION EXPRESSION

## IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
This way of writing a function is used in several different situations. Often functions are used to ensure that the variable names do not conflict with each other (especially if the page uses more than one script).

# Chapter 2
# EXPRESSIONS
An expression evaluates into (results in) a single value. Broadly speaking there are two types of expressions.
* EXPRESSIONS THAT JUST ASSIGN A VALUE TO A VARIABLE
* EXPRESSIONS THAT USE TWO OR MORE VALUES TO RETURN A SINGLE VALUE

# OPERATORS
Expressions rely on things called operators; they allow programmers to create a single value from one or more values.
* ASSIGNMENT OPERATORS
* ARITHMETIC OPERATORS
* STRING OPERATORS
* COMPARISON OPERATORS
* LOGICAL OPERATORS

