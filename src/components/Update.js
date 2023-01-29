import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const AddProduct = () => {
    const [company,setCompany]=useState();
    const [category,setCategory]=useState();
    const [name,setName]=useState();
    const [price,setPrice]=useState();
    const params=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        getProduct();
    },[])
    const getProduct=async ()=>{
        let result = await fetch(`http://127.0.0.1:5000/update/${params.id}`);
        result= await result.json();
        setName(result.name)
        setCategory(result.category)
        setPrice(result.price)
        setCompany(result.company)
    }
    const updateProduct=async()=>{
        let result=await fetch(`http://127.0.0.1:5000/update/${params.id}`,{
            method:"put",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':"application/json"
            }
        })
        result=await result.json();
        navigate('/');
    }
  return (
    <div className='register'>
        <h1 style={{marginLeft:"15%"}}>Update Product</h1>
        <input className='input-box' type="text"  placeholder='Category Name' value={category} onChange={(e)=>setCategory(e.target.value)}/>
        <input className='input-box' type="text" value={company} placeholder='Company Name' onChange={(e)=>setCompany(e.target.value)}/>
        <input className='input-box'type="text" value={name} placeholder='Product Name'onChange={(e)=>setName(e.target.value)}/>
        <input className='input-box'type="text" value={price} placeholder='Price'onChange={(e)=>setPrice(e.target.value)}/>
        <button className='signup-btn' onClick={updateProduct}>Update Product</button>
    </div>
  )
}

export default AddProduct