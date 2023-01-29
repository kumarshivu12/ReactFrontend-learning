import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const[products,setProducts]=useState()
    const navigate=useNavigate();
    useEffect(()=>{
        getProducts();
    },[])
    const getProducts= async ()=>{
        let result= await fetch('http://127.0.0.1:5000/list');
        result=await result.json();
        setProducts(result);
    }
    const deleteHandler=async (id)=>{
        let result=await fetch(`http://127.0.0.1:5000/delete/${id}`,{
            method:"delete"
        })
        result=await result.json();
        if(result){
            getProducts();
        }    
    }
    const updateHandler=(id)=>{
        navigate(`/update/${id}`)
    }
    const searchHandler=async (event)=>{
        const key=event.target.value;
        if(key){
            let result=await fetch(`http://127.0.0.1:5000/search/${key}`);
            result = await result.json();
            if(result){
                setProducts(result);
            }
        }
        else{
            getProducts();
        }
        
    }
  return (
    <div className='product-list'>
        <h1>Product List</h1>
        <input type="text" placeholder='Search'className='search' onChange={searchHandler}/>
        <ul>
            <li>S.No</li>
            <li>Category</li>
            <li>Company</li>
            <li>Name</li>
            <li>Price</li>
            <li>Operations</li>
        </ul>
        {
            products && products.length >0 ? products.map((item,index)=>
            <ul>
                <li>{index+1}</li>
                <li>{item.category}</li>
                <li>{item.company}</li>
                <li>{item.name}</li>
                <li>$ {item.price}</li>
                <li>
                    <button onClick={()=>deleteHandler(item._id)} style={{cursor:"pointer"}}>Delete</button>
                    <button onClick={()=>updateHandler(item._id)} style={{cursor:"pointer"}}>Update</button>
                </li>
            </ul>
            )
            :<h3>No Result Found !</h3>
        }
    </div>
  )
}

export default Product