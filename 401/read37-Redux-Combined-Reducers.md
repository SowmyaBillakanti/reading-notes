# Redux-Combined-Reducers

### Why choose Redux instead of the Context API for global state?
Any change to your app's state or component structure also leads to significant refactoring work. That's why Redux became popular, it solves that problem! It also helps with routing where we might not be using our components via JSX. React's Context API provides a comparable way of passing data though.

### What is the purpose of a reducer?
A reducer is a function that determines changes to an application's state. It uses the action it receives to determine this change. We have tools, like Redux, that help manage an application's state changes in a single store so that they behave consistently.

### What does an action contain?
An action verb explains what the subject of the sentence is doing or has done.

### Why do we need to copy the state in a reducer?
In addition to update of the state, dispatch also notifies every subscriber of the store about the changes. ... If the new state is different, the reducer must create new object, and making a copy is a way to describe the unchanged part.

## Terms

### immutable state
Immutable state is state that cannot be changed. Immutable objects (for which none of the state can be changed) become important when you are dealing with concurrency, the ability for more than one processor in your computer to operate on that object at the same time.

### time travel in redux
Time travel is the ability to move back and forth among the previous states of an application and view the results in real time. With Redux, given a specific state and a specific action, the next state of the application is always exactly the same. Redux is a predictable state container and it easy to implement time travel with it.

### action creator
It's just a utility that takes an action creator (or a whole object of action creators) and binds them all to the dispatch function you got from a store.

### reducer
A reducer is a function that determines changes to an application's state. It uses the action it receives to determine this change. We have tools, like Redux, that help manage an application's state changes in a single store so that they behave consistently.

### dispatch
dispatch is a function of the Redux store. You call store. dispatch to dispatch an action. This is the only way to trigger a state change. With React Redux, your components never access the store directly - connect does it for you.

## Preview
### Which 3 things had you heard about previously and now have better clarity on?
None of the above 

### Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
Everything from this reading

### What are you most excited about trying to implement or see how it works?
All the terms from above

