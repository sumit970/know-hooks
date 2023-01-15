import React from 'react'
import { useState } from 'react';


const Shortcircuit = () => {

    const[demo,setdemo]= useState("");

  return (
    
    <>
    <h1 className="">{demo || 
    <> 
    <h1 className="text-3xl text-blue-500">this is the short circuit evaluation</h1>

    
    </>
    
    
    }</h1>
    {/* <h1 className="">{"sumit is my name" && demo }</h1> */}
    </>
  )
}

export default Shortcircuit