import React from 'react';
import { useState } from 'react';
import ParentComponent from "../components/ParentComponent";


const CounterTest = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment!</button>
        <ParentComponent/>
    </div>
  )
}

export default CounterTest