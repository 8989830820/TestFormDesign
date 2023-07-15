import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FormDesigner() {

    const navigate = useNavigate("/");

  return (
    <div>
      
      <div className='container d-flex  p-2'  style={{width : "1000px"}}>
    <div className='leftSide' style={{width:"400px", position:"left"}}>
        <h1>Elements</h1>

    </div>

    <div className='rightSide' style={{width:"900px"}}>
        <h1>Form Design</h1>
    </div>

      </div>


    </div>
  )
}
