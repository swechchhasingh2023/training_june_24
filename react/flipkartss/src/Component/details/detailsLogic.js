import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./details.css";
import axios from "axios";
import { Link } from "react-router-dom";

const url = "https://api-1-sk5b.onrender.com";

const DetailsLogic = () => {
  let navigate = useNavigate();
  const [productDetails, setproductDetails] = useState();

  let [serachParams] = useSearchParams();
  let [productId] = useState(sessionStorage.getItem("productId"));
  let proDetailsId = serachParams.getAll("proDetailsId");

  useEffect(() => {
    const pDetails = async () => {
      const pdata = await axios.get(`${url}/details/${proDetailsId}`);
      setproductDetails(pdata.data[0]);
    };

    pDetails();
  }, []);

  const proceed = ()=>{
    navigate (`/placeOrder/${productDetails.product_name}`)
  }

  const renderDetails = () => {
    if (productDetails) {
      return (
        <>
          <div className="tileImage">
            <div className="imageClass">
              <img
                src={productDetails.Image}
                alt={productDetails.product_name}
              />
            </div>
          </div>
          <div className="tileContent">
            <div className="content">
              <h1>{productDetails.product_name}</h1>
              <span id="cfeedback">231 Customer Rating 5</span>
              <h3>
                Old Price <del>Rs.90500</del>
              </h3>
              <h3>Offer Price {productDetails.Price}</h3>
              <h3>Best Offers for Diwali Shopping!!</h3>
              <div>
                <div className="icons">
                  <img
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="col-md-12">
              <Link className="btn btn-danger" to={`/listing/${productId}`}>
                Back
              </Link>
              &nbsp;&nbsp;
              <button className="btn btn-success" onClick={proceed}>
                Proceed
              </button>
            </div>
          </div>
          <hr />
        </>
      );
    }
  };

  return <div className="main">{renderDetails()}</div>;
};

export default DetailsLogic;
