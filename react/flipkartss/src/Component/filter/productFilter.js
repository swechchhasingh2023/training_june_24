import React from 'react'
import axios from 'axios'

const url ="https://api-1-sk5b.onrender.com/products"

const ProductFilter =(props)=> {
  const handleFilter =(e)=>{
   let productId = props.productId;
   let prodfilterId = e.target.value;
   let prodfilterurl =""
   if(prodfilterId ===""){
          prodfilterurl = `${url}`
      }else{
        prodfilterurl = `${url}?category_id=${productId}`
      }
      axios.get(prodfilterurl)
      .then((res)=>{props.prodPerFilter(res.data)})
  }

  return (
    <>
    <center><h3>Products Filter</h3></center>
    <div style={{marginLeft:'15%'}} onChange={handleFilter}>
        <label className='radio'>
            <input type='radio' name='filter' value="" />All
        </label>
        <label className='radio'>
            <input type='radio' name='filter' value="1" />Smartphones
        </label>
        <label className='radio'>
            <input type='radio' name='filter' value="2" />Electronics
        </label>
        <label className='radio'>
            <input type='radio' name='filter' value="3" />Appliances
        </label>
        <label className='radio'>
            <input type='radio' name='filter' value="4" />Grooming
        </label>
        <label className='radio'>
            <input type='radio' name='filter' value="5" />Kitchen
        </label>
        <label className='radio'>
            <input type='radio' name='filter' value="6" />Others
        </label>
    </div>
    </>
  )
}

export default ProductFilter