# Call Stack 
A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

* When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
* Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
* When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
* If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.


### Example
```
function greeting() {
   // [1] Some codes here
   sayHi();
   // [2] Some codes here
}
function sayHi() {
   return "Hi!";
}

// Invoke the `greeting` function
greeting();

// [3] Some codes here
```


# The JavaScript Call Stack - What It Is and Why It's Necessary

The key takeaways from the call stack are:
1. It is single-threaded. Meaning it can only do one thing at a time.
2. Code execution is synchronous.
3. A function invocation creates a stack frame that occupies a temporary memory.
4. It works as a LIFO — Last In, First Out data structure.

# JavaScript error messages && debugging

## Types of error messages
* Reference errors
EX: `console.log(foo) // Uncaught ReferenceError: foo is not defined`
* Syntax errors
EX: `JSON.parse( {'foo': 'bar'} ) // Uncaught SyntaxError: Unexpected token o in JSON at position 1`
* Range errors
EX: 
```
var foo= []
foo.length = foo.length -1 // Uncaught RangeError: Invalid array length
```

* Type errors
EX: 
```
var foo = {}
foo.bar // undefined
foo.bar.baz // Uncaught TypeError: Cannot read property 'baz' of undefined
```

## Debugging
1. Console.log()
2. Chrome developer tools
3. Can also add conditional breakpoints by right-clicking a previous set breakpoint.

## Tools to avoid runtime errors
* quokka to evaluate your code as you type
* eslint to make sure your style guide is consistency and it will grab you an error or two along the way and
* TypeScript 