# `<Login/>` and `<Auth/>`

### Why is the Context API useful?
Context API is a way to enable components to share some data without explicitly passing via each component manually. Context is like a global object to the React component sub-tree.

### Can a component outside of a provider get its context?
Yes! We can access component outside of a provider

### What are some common use cases for using the Context API?
1. Themes
2. Multilingual application
3. Authorisation - setting the user role and info

### Describe “Context Hell”
Nested layers

## Vocabulary
### global state
It is only a way to pass props from a parent component to grandchild components without having to pass the props through all child components. 

### global context
We set up separate contexts for state, and dispatch as an optimisation to avoid components who are only interested in triggering updates to re-render on state changes.

### provider
The Provider component will compose our two Providers, respectively passing down state and dispatch thus giving any nested components access to them.

### consumer
Consumer that involves the use of a Consumer. Each context object also comes with a Consumer React component which can be used in a class-based component. The consumer component takes a child as a function and that function returns a React node. The current context value is passed to that function as an argument.

## Preview
### Which 3 things had you heard about previously and now have better clarity on?
- global state
- context API
- global context

### Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
- More on context API

### What are you most excited about trying to implement or see how it works?
Not sure about what I am excited in learning React. 





