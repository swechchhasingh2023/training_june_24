import axios from 'axios';
import React from 'react';

const url = "https://api-1-sk5b.onrender.com/products";

const CostFilter =(props)=> {
    const handleFilter=(event) => {
        let product = props.product;
        let cost = (event.target.value).split('-');
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl = "";
        if(event.target.value === ''){
            costUrl = `${url}`
        }else{
            costUrl = `${url}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
        .then((res) => {props.prodPerCost(res.data)})
    }

    return(
        <>
            <center><h3>Cost Filter</h3></center>
            <div style={{marginLeft:'15%'}} onChange={handleFilter}>
                <label className='radio'>
                    <input type="radio" name="filter" value=""/>All
                </label>
                <label className='radio'>
                    <input type="radio" name="filter" value="0-300"/>0-300
                </label>
                <label className='radio'>
                    <input type="radio" name="filter" value="301-600"/>301-600
                </label>
                <label className='radio'>
                    <input type="radio" name="filter" value="601-900"/>601-900
                </label>
                <label className='radio'>
                    <input type="radio" name="filter" value="901-1200"/>901-1200
                </label>
                <label className='radio'>
                    <input type="radio" name="filter" value="1201-5000"/>1201-5000
                </label>
            </div>
        </>
    )
}

export default CostFilter