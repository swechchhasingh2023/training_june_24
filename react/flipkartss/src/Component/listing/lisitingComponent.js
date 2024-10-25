import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './listing.css'
import axios from 'axios';
import ListingDisplay from './listingDisplay';

const baseUrl ="https://api-537c.onrender.com"

const ListingComponent =()=> {

  let params = useParams();
  const [product,setProduct]= useState([]);
  let productId= params.productId;
  useEffect(()=>{
    sessionStorage.setItem('productId',productId)
    axios.get(`${baseUrl}/products?productId=${productId}`)
    .then((res) => {
      setProduct(res.data)
    })
},[])
  return (
    <>
    <h1>hello</h1>
    </>
  )
}

export default ListingComponent