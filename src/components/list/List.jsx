import React, { useState } from 'react'

const List = () => {
    const [items, setItems] = useState([""])
    const item = ["item1" ,"item2","item3","item4"]
  return (
    <>
    <div>
        <input type="text" onChange={(e)=>{setItems(e.target.value)}} />
    </div>
    {items.map((index,key)=>{
        return (
            <div key={key}>
                {index}
            </div>
        )
    })}
    </>
  )
}

export default List;