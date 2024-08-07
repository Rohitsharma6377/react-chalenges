import React, { useState } from 'react'

const Counter = () => {
    const [increment , SetIncrement] = useState(0);
    const [decrement , SetDecrement] = useState(0);
// use state hook for state manegment 
  return (
    <>
    <div className="container grid grid-cols-12 items-center p-40 gap-10">
        <h1>Counter</h1>
       <button onClick={()=>{SetIncrement(increment+1)}}>{increment}</button>
       <button onClick={()=>{SetDecrement(decrement-1)}}>{decrement}</button>
    </div>
    </>
  )
}

export default Counter;