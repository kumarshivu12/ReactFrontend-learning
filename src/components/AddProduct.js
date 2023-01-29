import React, { useState } from 'react'

const AddProduct = () => {
    const [company,setCompany]=useState();
    const [category,setCategory]=useState();
    const [name,setName]=useState();
    const [price,setPrice]=useState();
    const addProduct=async()=>{
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        let result=await fetch('http://127.0.0.1:5000/add',{
            method:"post",
            body:JSON.stringify({name,price,category,userId,company}),
            headers:{
                'Content-Type':"application/json"
            }
        })
        result=await result.json();
        console.warn(result);
    }
  return (
    <div className='register'>
        <h1 style={{marginLeft:"15%"}}>Add Product</h1>
        <input className='input-box' type="text" placeholder='Category Name' onChange={(e)=>setCategory(e.target.value)}/>
        <input className='input-box' type="text" placeholder='Company Name' onChange={(e)=>setCompany(e.target.value)}/>
        <input className='input-box'type="text" placeholder='Product Name'onChange={(e)=>setName(e.target.value)}/>
        <input className='input-box'type="text" placeholder='Price'onChange={(e)=>setPrice(e.target.value)}/>
        <button className='signup-btn' onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default AddProduct