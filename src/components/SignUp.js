import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    },[])
    const signup=async()=>{
        // console.log(name,email,password);
        let result=await fetch('http://127.0.0.1:5000/register',{
            method:"POST",
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        localStorage.setItem('user',JSON.stringify(result))
        if(result){
            navigate('/')
        }
    }
  return (
    <div className='register'>
        <h1 style={{marginLeft:"15%"}}>Register</h1>
        <input className='input-box' type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
        <input className='input-box'type="email" placeholder='Email'onChange={(e)=>setEmail(e.target.value)}/>
        <input className='input-box'type="password" placeholder='Password'onChange={(e)=>setPassword(e.target.value)}/>
        <button className='signup-btn' onClick={signup}>Sign Up</button>
    </div>
  )
}

export default SignUp