# Context API

### Describe use cases for `useMemo()` and `useReducer()`
`useReducer()` - Takes 3 arguments - a reducer, its initial state, and a function that can return the initial state 
`useMemo()` - It is similar to useCallback except that instead of memoizing a function, it memoizes a value.

### Why do custom hooks need the use prefix?
A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.

### What do custom hooks usually do?
Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.

### Using any list of custom hooks, research and name one that you think will be useful in your applications
`useEffect()`

### Describe how a hook that fetches API data might work
`useFetch()`

## Vocabulary
### Reducer
- It is used to manage state in an application

## Preview

### Which 3 things had you heard about previously and now have better clarity on?
- useEffect
- custom hook
- Fetch

### Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
- useFetch
- Reducer
- useMemo

### What are you most excited about trying to implement or see how it works?
- useFetch

