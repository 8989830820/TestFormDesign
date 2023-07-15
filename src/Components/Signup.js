import React, { useState } from 'react'

import useNavigate from "react-router-dom";
export default function Signup() {

    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('') 


    const handleSubmit = async(e)  =>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/signin",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password })
        })
       
        const data = await response.json();
        console.log(data);
      
    }
   
  return (
    <div>

<form onSubmit={handleSubmit}>
    <div className='container' style={{width:"500px", marginTop:"100px"}}>
  <div className="mb-3">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" value = {email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter email"/>
 
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value = {password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
  </div>
  
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      
    </div>
    
  )

}
