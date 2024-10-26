import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './listing.css'
import axios from 'axios';
import ListingDisplay from './listingDisplay';

const baseUrl ="https://api-1-sk5b.onrender.com"

const ListingComponent =()=> {

  let params = useParams();
  const [productList, setproductList] = useState()
  let productId = params.productId;
  useEffect(()=>{
    sessionStorage.setItem('productId',productId)
    axios.get(`${baseUrl}/products?category_id=${productId}`)
    .then((res) => {
      setproductList(res.data)
    })
},[])

const setDataPerFilter = (data) => {
  setproductList(data)
}
  return (
    <>
    <div className='row'>
      <div className='mainListing'>
        <div id='filter'>

        </div>
      </div>
      <ListingDisplay listData={productList}/>
    </div>
    </>
  )
}

export default ListingComponent