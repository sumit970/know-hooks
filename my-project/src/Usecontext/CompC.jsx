import React from 'react'
import { useContext } from 'react'
// import CompB from './CompB'
import { BioData } from './CompA';

const CompC = ({name}) => {
    const channel = useContext(BioData)
  return (
    <div>THIS IS {channel} </div>
  )
  
}

export default CompC
