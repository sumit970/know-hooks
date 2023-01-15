import React from 'react'
import { useReducer } from 'react'

const Usreducerhook = () => {
const initialState=0;
    const reducer=(state,action)=>{
        if(action.type =='INCREMENT'){
            state+=1;
        }
        if(action.type =='DECREMENT'){
            state-=1;
        }
        if(state<=0){
             state=0;
        }

        return(state)

    }

const [state, dispatch] = useReducer(reducer,initialState)

  return (
    <div>

        <p className="text-3xl">{state}</p>
        <button className=""onClick={()=>{dispatch({type: "INCREMENT"})}}>INC</button>
        <button className=""onClick={()=>{dispatch({type: "DECREMENT"})}}>DEC</button>

                  
    </div>
  )
}

export default Usreducerhook