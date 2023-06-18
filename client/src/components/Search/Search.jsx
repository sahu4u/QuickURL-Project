import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import preventDefault from 'react'

export default function ({Url}) {
    const [items,setItems] = useState([[Url]])
    const [filteredItems,setFilteredItems] = useState([Url])
    const inputRef=useRef();
    // useEffect(()=>{
    //     // e.preventDefault();
    //     const value=;
    //     console.log(value)
    //     if(value ==="")
    //     return
    //     setItems(prev=>{
    //         return[...prev, value];
    //     })
    //     setFilteredItems(prev=>{
    //         return[...prev, value];
    //     })
    //     inputRef.current.value=""
    // }
    // ,[])
    function onChange(e){

        const value=e.target.value;
        setFilteredItems(Url.filter(item=>
            item.toLowerCase().includes(value.toLowerCase())))
    }
  return (
    <>
        Search:
        <input onChange={onChange} type="search" />
        <br />
        <br />

        {/* <form onSubmit={onSubmit} action="">
            New Item : <input ref={inputRef} type="text" />
            <button type='submit'>ADD</button>
        </form> */}
        {console.log(items)}
        <h3>ITEMS:</h3>
        {filteredItems.map(item=>(
            <div>{item}</div>
        ))}
        
    </>
  )
}
