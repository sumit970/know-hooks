import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'


const Usref = () => {
    const [show,setshow ]= useState(false);

    const myname = useRef(null)
    const submit=(e)=>{
        e.preventDefault();
        const name=myname.current.value;
        name === "" ? alert("Please enter a name"):setshow(true); 
    }


  return (
    <>
    <div>
        <form action="" onSubmit={submit}>
            <label htmlFor="myname">Enter your Name</label>
            <input type="text" id='myname' ref={myname} />
            <button type="submit">submit</button>
        </form>
    </div>
    <div className="">
        <p>{show ? `Your lucky name is ${myname.current.value}`:""}</p>

    </div>
    
    </>

  )
}

export default Usref