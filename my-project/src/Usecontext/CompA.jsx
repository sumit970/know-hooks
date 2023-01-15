import React from 'react'
import { createContext } from 'react'

import CompB from './CompB'

const BioData=createContext();

const CompA = () => {

  return (
    <>
    <BioData.Provider value={"sumit kumar"}>
     <CompB />
    </BioData.Provider>

    </>

  )
}

export default CompA;
export {BioData};