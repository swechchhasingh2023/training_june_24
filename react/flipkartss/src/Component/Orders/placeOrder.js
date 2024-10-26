import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const orderUrl = "https://api-1-sk5b.onrender.com/";

const ordersUrl = "http://localhost:9910/order";

const PlaceOrder = () => {
  let params = useParams();
  let navigate = useNavigate();

  const initialValue = {
    id: Math.floor(Math.random() * 1000),
    prod_name: params.prodName,
    orderId: `SIO${Math.floor(Math.random() * (908233 - 31984) + 31984)}`,
    name: "Swechchha",
    email: "swesingh@gmail.com",
    cost: Math.floor(Math.random() * (2000 - 500) + 500),
    phone: "123456789",
    address: "Pune Maharastra",
  };

  const [values, setValue] = useState(initialValue);

  const checkout = () => {
    console.log(values);
    fetch(ordersUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(navigate("/viewOrder"));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <div className="container">
        <div className="panel panel-heading">
          <h3>Order for Proucts {values.prod_name}</h3>
        </div>
        <div className="panel panel-body">
          <div className="row">
            <div className="col-md-12 form-group">
              <label htmlFor="orderid" className="control-label">
                Order Id
              </label>
              <input
                className="form-control"
                id="orderId"
                name="orderid"
                value={values.orderId}
                readOnly
              />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="fname" className="control-label">
                Name
              </label>
              <input
                className="form-control"
                id="fname"
                name="name"
                value={values.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="email" className="control-label">
                Email
              </label>
              <input
                className="form-control"
                id="email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="phone" className="control-label">
                Phone
              </label>
              <input
                className="form-control"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="address" className="control-label">
                Address
              </label>
              <input
                className="form-control"
                id="address"
                name="address"
                value={values.address}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h2>Total Price is Rs.{values.cost}</h2>
            </div>
          </div>
          <button className="btn btn-success" onClick={checkout}>
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
