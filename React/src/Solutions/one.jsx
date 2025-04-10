import React from 'react'
import { useState } from 'react'

const one = () => {

  const [count , setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div style={{textAlign: "center", margin: "auto", justifyContent: "center"}}>
        <h1>Counter : {count} </h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default one;