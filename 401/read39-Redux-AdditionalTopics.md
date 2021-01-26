# Redux-AdditionalTopics

### What’s the best practice for “pre-loading” data into the store (on application start) in a Redux application?
- Initial state

### When using a thunk/async action that dispatches the actual action, which do you export from your reducer?
- Function

## Terms
#### Middleware 
It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.

#### Thunk
thunks are a functional programming technique used to delay computation. Instead of performing some work now, you produce a function body or unevaluated expression (the “thunk”) which can optionally be used to perform the work later.

### MobX
- Use the observable decorator or observable(object or array) functions to make objects trackable for MobX.
- The computed decorator can be used to create functions that can automatically derive value from the state and cache them.
- Use autorun to automatically run functions that depend on some observable state. This is useful for logging, making network requests, etc.
- Use the observer wrapper from the mobx-react-lite package to make your React components truly reactive. They will update automatically and efficiently. Even when used in large complex applications with large amounts of data.

### Hookstate
- It is easy to use
- Incredibly Fast
- Feature Rich
- First-class Typescript
- Plugins System
- Development Tools