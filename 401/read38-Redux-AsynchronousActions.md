# Redux-AsynchronousActions

### How granular should your reducers be?
Reducer functions should only depend on their state and action arguments, and ... subscribed to the Redux store and reading data at a more granular level.

### Pro or Con – multiple reducers can “fire” when a commonly named action is dispatched
I think it is con

### Name a strategy for preventing the above


## Terms
### store
Redux doesn't have a Dispatcher or support many stores. Instead, there is just a single store with a single root reducing function. As your app grows, instead of adding stores, you split the root reducer into smaller reducers independently operating on the different parts of the state tree.

### combined reducers
The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

## Preview

### Which 3 things had you heard about previously and now have better clarity on?
1. Store
2. Reducer
3. Dispatch

### Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
1. Combined Reducers
2. Dispatch
3. Store

### What are you most excited about trying to implement or see how it works?
Not at all excited about React:-/
