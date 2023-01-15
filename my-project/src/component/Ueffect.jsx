import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const Ueffect = () => {
const [count, setcount] = useState(0)

useEffect(()=>{
    console.log("Hello world! this is done using useeffct function!")
    if(count>0){

        document.title= `chats (${count})`
    }
    else{
        document.title= `chats`
    }
    
    // count|| document.title = `chats (${count})`;
})

  return (
   <section className="bg-red-300 w-full h-[350px] flex flex-col justify-center items-center">

    <div className="flex flex-col items-center">
        <span className="text-3xl">{count}</span>
        <button className="p-2 bg-blue-500 rounded " onClick={()=>{setcount(count+1)}}>Counter</button>
    </div>

   </section>
  )
}

export default Ueffect