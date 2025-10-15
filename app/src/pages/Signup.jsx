import React from 'react'
import './Signup.css'
import { useState } from 'react'

const Signup = () => {

  const [name,setName] =useState("")
  const [email,setEmail] =useState("")
  const [password,setPassword] =useState("")

  const details ={name, email, password}

  const saveuser = async () =>{
    const response = await fetch("http://localhost:5000/api/user",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(details)
    })
    const data =await response.json()
    console.log(data)
  }

  const handlename = (e)=>{
    setName(e.target.value)
  }
   const handleemail = (e)=>{
    setEmail(e.target.value)
  }
   const handlepassword = (e)=>{
    setPassword(e.target.value)
  }

  return (
    <div className='signup-card'>
        <h3> Sign up</h3>
        <input value={name} placeholder='company name' className='name' onChange={handlename}></input>
        <input placeholder='email'className='email' onChange={handleemail}></input>
        <input placeholder='password' className='password' onChange={handlepassword}></input>
        <button onClick={saveuser}>submitt</button>
    </div>
  )
}

export default Signup 