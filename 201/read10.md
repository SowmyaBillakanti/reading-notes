# ERROR HANDLING & DEBUGGING

When writing a long script, nobody gets everything right in their first attempt. The error messages that a browser gives look cryptic at first, but they can help you determine what went wrong in your JavaScript and how to fix it.

#### THE CONSOLE & DEV TOOLS
Tools built into the browser that help you hunt for errors.

#### COMMON PROBLEMS
Common sources of errors, and how to solve them.

#### HANDLING ERRORS
How code can deal with potential errors gracefully.

## ORDER OF EXECUTION
To find the source of an error, it helps to know how scripts are processed. The order in which statements are executed can be complex; some tasks cannot complete until another statement or function has been run:

## EXECUTION CONTEXTS
The JavaScript interpreter uses the concept of execution contexts. There is one global execution context; plus, each function creates a new new execution context. They correspond to variable scope.
Every statement in a script lives in one of three execution contexts:
*  GLOBAL CONTEXT
*  FUNCTION CONTEXT

#### Variable Scope
*  GLOBAL SCOPE
*  FUNCTION-LEVEL SCOPE

## THE STACK
The JavaScript interpreter processes one line of code at a time. When a statement needs data from another function, it stacks (or piles) the new function on top of the current task.

When a statement has to call some other code in order to do its job, the new task goes to the top of the pile of things to do.

## EXECUTION CONTEXT & HOISTING
Each time a script enters a new execution context, there are two phases of activity:
#### 1: PREPARE
* The new scope is created
* Variables, functions, and arguments are created
* The value of the this keyword is determined

#### 2: EXECUTE
* Now it can assign values to variables
* Reference functions and run their code
* Execute statements

## UNDERSTANDING SCOPE
In the interpreter, each execution context has its own variables object. It holds the variables, functions, and parameters available within it. Each execution context can also access its parent's variables object.

## UNDERSTANDING ERRORS
If a JavaScript statement generates an error, then it throws an exception. At that point, the interpreter stops and looks for exception-handling code.

## ERROR OBJECTS
Error objects can help you find where your mistakes are and browsers have tools to help you read them.

## ERROR OBJECTS CONTINUED
* SyntaxError
- SYNTAX IS NOT CORRECT - This is caused by incorrect use of the rules of the language. It is often the result of a simple typo.

* ReferenceError
- VARIABLE DOES NOT EXIST - This is caused by a variable that is not declared or is out of scope.

* EvalError
- INCORRECT USE OF eval() FUNCTION - The eval() function evaluates text through the interpreter and runs it as code (it is not discussed in this book). It is rare that you would see this type of error, as browsers often throw other errors when they are supposed to throw an EvalError.

* URIError
- INCORRECT USE OF URI FUNCTIONS - If these characters are not escaped in URIs, they will cause an error: / ? & # : ;

* TypeError
- VALUE IS UNEXPECTED DATA TYPE - This is often caused by trying to use an object or method that does not exist.

* RangeError
- NUMBER OUTSIDE OF RANGE - If you call a function using numbers outside of its accepted range.

* Error
- GENERIC ERROR OBJECT - The generic Error object is the template (or prototype) from which all other error objects are created.

* NaN  
- NOT AN ERROR - If you perform a mathematical operation using a value that is not a number, you end up with the value of NaN, not a type error.

## HOW TO DEAL WITH ERRORS
1. DEBUG THE SCRIPT TO FIX ERRORS
2. HANDLE ERRORS GRACEFULLY

## A DEBUGGING WORKFLOW
##### WHERE IS THE PROBLEM?
- Look at the error message, it tells you 
- Check how far the script is running.
##### WHAT EXACTLY IS THE PROBLEM?

## BROWSER DEV TOOLS & JAVASCRIPT CONSOLE
* CHROME / OPERA
On a PC, press the F12 key or:

1. Go to the options menu (or three line menu icon)
2. Select Tools or More tools.
3. Select JavaScript Console or Developer Tools On a Mac press Alt + Cmd + J. Or:
4. Go to the View menu.
5. Select Developer.
6. Open the JavaScript Console or Developer Tools option and select Console.

* INTERNET EXPLORER
1. Go to the settings menu in the top-right.
2. Select developer tools.

* FIREFOX
1. Go to the Firefox menu.
2. Select Web Developer.
3. Open the Web Console.

On a Mac press Alt + Cmd + K. Or:
1. Go to the Tools menu.
2. Select Web Developer.
3. Open the Web Console.

* SAFARI
1. Go to the Develop menu.
2. Select Show Error Console.

If the Develop menu is not shown:
1. Go to the Safari menu.
2. Select Preferences.
3. Select Advanced.
4. Check the box that says “Show Develop menu in menu bar.”

## LOGGING DATA TO THE CONSOLE
This example shows several uses of the console.log() method.
1. The first line is used to indicate the script is running.
2. Next an event handler waits for the user leaving a text input, and logs the value that they entered into that form field.

When the user submits the form, four values are displayed:
3. That the user clicked submit
4. The value in the width input
5. The value in the height input
6. The value of the area variable

## MORE CONSOLE METHODS
To differentiate between the types of messages you write to the console, you can use three different methods. They use various colors and icons to distinguish them.

1. console.info() can be used for general information
2. console.warn() can be used for warnings
3. console.error() can be used to hold errors

## WRITING TABULAR DATA
In browsers that support it, the console.table() method lets you output a table showing:
* objects
* arrays that contain other objects or arrays

## HANDLING EXCEPTIONS
If you know your code might fail, use try, catch, and finally. Each one is given its own code block.
* TRY
* CATCH
* FINALLY

## DEBUGGING TIPS
* ANOTHER BROWSER
* ADD NUMBERS
* STRIP IT BACK
* EXPLAINING THE CODE
* SEARCH
* CODE PLAYGROUNDS

### SUMMARY
#### ERROR HANDLING & DEBUGGING

* If you understand execution contexts (which have two stages) and stacks, you are more likely to find the error in your code.
* Debugging is the process of finding errors. It involves a process of deduction.
* The console helps narrow down the area in which the error is located, so you can try to find the exact error.
* JavaScript has 7 different types of errors. Each creates its own error object, which can tell you its line number and gives a description of the error.
* If you know that you may get an error, you can handle it gracefully using the try, catch, finally statements. Use them to give your users helpful feedback.