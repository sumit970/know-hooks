import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'



const Useffect = () => {
    const [width, setwidth] = useState(window.screen.width)
    useEffect(() => {
      
        window.addEventListener("resize",changew)
    
       return ()=>{
        window.removeEventListener("resize",changew)

       }
    },)
    const changew=()=>{
        setwidth(window.innerWidth)
    }
    
  return (
    <div className="flex flex-col bg-pink-300 w-full h-[350px]  justify-center items-center">
        
        <h1 className="text-2xl text-white" draggable="true">this is the size of screen</h1>
        <span className="text-2xl text-white" draggable="true">{width}</span>

    </div>
  )
}

export default Useffect
