# Custom Hooks

### What does a component’s lifecycle refer to?
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting.

### Why do you sometimes need to “wrap” functions in useCallback when called from within useEffect
Prevents the recreation of a function

### Why are functional components preferred over class components?
Because these are standard JS functions

### What is wrong with the following code?
Cannot use inside the loop.
```
import React, {useState, useEffect} from 'react';

function MyComponent(props) {
  const [count, setCount] = useState(0);

  function changeCount(e) {
    setCount(e.target.value);
  }

  let renderedItems = []

  for (let i = 0; i < count; i++) {
    useEffect( () => {
      console.log('component mount/update');
    }, [count]);

    renderedItems.push(<div key={i}>Item</div>);
  }

  return (<div>
     <input type='number' value={count} onChange={changeCount}/>
      {renderedItems}
    </div>);
}
```

## Vocabulary Terms

### State Hook
They let you use state and other React features without writing a class.

### Effect Hook
The Effect Hook lets you perform side effects in function components.

### Reducer Hook


### Which 3 things had you heard about previously and now have better clarity on?
hooks, useEffect, state Hook

### Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
Hooks, Effect hook, Reducer Hook






