import React from 'react'

export default function Loginup() {
    
    const handleSubmit = (e)  =>{
        e.preventDefault();
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='container' style={{width:"500px", marginTop:"100px"}}>
  <div class="mb-3"  >
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  </div>
 
  <button type="submit" class="btn btn-primary">Login</button>
</form>
      
    </div>
  )
}
