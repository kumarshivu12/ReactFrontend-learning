import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    },[])
    const login=async()=>{
        console.warn(email,password)
        let result=await fetch('http://127.0.0.1:5000/login',{
            method:"POST",
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
            
        })
        result=await result.json();
        console.warn(result)
        if(result.name){
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/')
        }
        
    }
  return (
    <div className='register'>
        <h1 style={{marginLeft:"15%",marginTop:"10%"}}>Log In</h1>
        <input className='input-box'type="email" placeholder='Email'onChange={(e)=>setEmail(e.target.value)}/>
        <input className='input-box'type="password" placeholder='Password'onChange={(e)=>setPassword(e.target.value)}/>
        <button className='signup-btn' onClick={login}>Log In</button>
    </div>
  )
}

export default Login