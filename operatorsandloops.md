# Operators and Loops

FUNCTIONS, METHODS & OBJECTS
* Functions allow you to group a set of related
statements together that represent a single task.
* Functions can take parameters (informatiorJ required
to do their job) and may return a value.
* An object is a series of variables and functions that
represent something from the world around you.
* In an object, variables are known as properties of the
object; functions are known as methods of the object.
* Web browsers implement objects that represent both
the browser window and the document loaded into the
browser window.
* JavaScript also has several built-in objects such as
String, Number, Math, and Date. Their properties and
methods offer functionality that help you write scripts.
* Arrays and objects can be used to create complex data
sets (and both can contain the other).

# EVALUATING CONDITIONS & CONDITIONAL STATEMENTS
There are two components to a decision:
1. An expression is evaluated, which returns a value
2. A conditional statement says what to do in a given situation

## EVALUATION OF A CONDITION
In order to make a decision, your code checks the current status of the script. This is commonly done by comparing two values using a comparison operator which returns a value of true or false.

## CONDITIONAL STATEMENTS
A conditional statement is based on a concept of if/then/else; if a condition is met, then your code executes one or more statements, else your code does something different (or just skips the step).

# COMPARISON OPERATORS: EVALUATING CONDITIONS
You can evaluate a situation by comparing one value in the script to what you expect it might be. The result will be a Boolean: true or false.

== is Equal to
This operator compares two values (numbers, strings, or Booleans) to see if they are the same.

‘Hello’ == ‘Goodbye’ returns false
because they are not the same string.
‘Hello’ == ‘Hello’ returns true
because they are the same string.

It is usually preferable to use the strict method:
!= is Not Equal to
This operator compares two values (numbers, strings, or Booleans) to see if they are not the same.

‘Hello’ != ‘Goodbye’ returns true
because they are not the same string.
‘Hello’ != ‘Hello’ returns false
because they are the same string.

It is usually preferable to use the strict method:
=== Strict Equal to
This operator compares two values to check that both the data type and value are the same.

‘3’ === 3 returns false
because they are not the same data type or value.
‘3’ === ‘3’ returns true
because they are the same data type and value.

!== is Strict Not Equal to
This operator compares two values to check that both the data type and value are not the same.

‘3’ !== 3 returns true
because they are not the same data type or value.
‘3’ !== ‘3’ returns false
because they are the same data type and value.

# For and While Loops
## USING IF STATEMENTS
var pass = 50;
var score = 75;
var msg;

II Pass mark
II Current score
II Message

II Select message to write based on score
if (score >= pass) {
msg = 'Congratulations, you passed!';
} else {
msg = 'Have another go!';
var el = document .getElementByld('answer');
el .textContent = msg;

## SWITCH STATEMENTS
A switch statement starts with a variable called the switch value. Each case indicates a possible value for this variable and the code that should run if the variable matches that value.

Here, the variable named level is the switch value. If the value of the level variable is the string One, then the code for the first case is executed. If it is Two, the second case is executed. If it is Three, the third case is executed. If it is none of these, the code for the default case is executed.

The entire statement lives in one code block (set of curly braces), and a colon separates the option from the statements that are to be run if the case matches the switch value.

### IF…ELSE
There is no need to provide an else option. (You can just use an if statement.)
With a series of if statements, they are all checked even if a match has been found (so it performs more slowly than switch).

#### VS.

### SWITCH
You have a default option that is run if none of the cases match.
If a match is found, that code is run; then the break statement stops the rest of the switch statement running (providing better performance than multiple if statements).

## TYPE COERCION & WEAK TYPING
If you use a data type JavaScript did not expect, it tries to make sense of the operation rather than report an error.

JavaScript can convert data types behind the scenes to complete an operation. This is known as type coercion. For example, a string ‘1’ could be converted to a number 1 in the following expression: (‘1’ > 0). As a result, the above expression would evaluate to true.

JavaScript is said to use weak typing because the data type for a value can change. Some other languages require that you specify what data type each variable will be. They are said to use strong typing.

Type coercion can lead to unexpected values in your code (and also cause errors). Therefore, when checking if two values are equal, it is considered better to use strict equals operators === and !== rather than == and != as these strict operators check that the value and data types match.

### DATA TYPE PURPOSE
string	Text
number	Number
Boolean	true or false
null	Empty value
undefined	Variable has been declared but not yet assigned a value