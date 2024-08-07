import React, { useState } from 'react'

const Inputt = () => {
    const [text,setText]=useState("");

    return (
    <>
    <div className="container">
        <input type="text" className=" w-30 h-10 rounded border border-black" onChange={(e)=>{setText(e.target.value)}}/>
      <h3>user Input <span>{text}</span></h3>
    </div>
    
    </>

  )
}

export default Inputt;