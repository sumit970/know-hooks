//always write it inside the conmponent or function
import React from 'react'
import { useState } from 'react';

const Hooksrule = () => {

const biodata=[
    {
        id:0, myName:"sumit", age:20
    },
    {
        id:1, myName:"satyam", age:23
    },
    {
        id:2, myName:"sonu", age:22
    },

]

console.log(biodata);

    const [data, setdata] = useState(biodata)

    const cleardata = () => {
        setdata([]);
    }


  return (
    
    <div className='flex-col align-middle space-y-2 p-3 items-center text-3xl justify-center  text-white'>
        {/* <h1 className="">{data.myName}</h1> */}
        {/* {setdata(biodata)} */}
        {biodata.map((elem)=>{
         const {myName,age}=elem
            return(
                <h1 key={elem.id} className="text-2xl text-white bg-blue-500 rounded">{`The name is ${myName} and the age is ${age}`}</h1>
            )
        })}
        <button className="bg-red-700 rounded-[6px] p-3 " onClick={cleardata}>Clear</button>

        
    </div>
  )
}

export default Hooksrule;