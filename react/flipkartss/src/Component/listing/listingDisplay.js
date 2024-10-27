import React from "react";
import { Link } from "react-router-dom";

const ListingDisplay = (props) => {
  const renderData = ({ listData }) => {
    if (listData) {
      if (listData.length > 0) {
        return listData.map((item1) => {
          return (
            <div className="item1" key={item1._id}>
              <div className="row1">
                <div className="col-md-5">
                  <img
                    src={item1.Image}
                    alt={item1.product_name}
                    className="Image"
                  />
                </div>
                <div className="col-md-7">
                  <div className="hotel_name">
                    <Link to={`/details?proDetailsId=${item1.product_id}`}>
                      {item1.product_name}
                    </Link>
                  </div>
                  <div className="city_name">{item1.category}</div>
                  <div className="city_name">{item1.Color}</div>
                  <div className="city_name">Rs. {item1.Price}</div>
                  <div className="city_name">Rs. {item1.Brand}</div>
                </div>
              </div>
            </div>
          );
        });
      } else {
        return (
          <div>
            <h2>No Data Found</h2>
          </div>
        );
      }
    } else {
      return (
        <div>
          <h2>Loading.....</h2>
          <img src="/images/shoppingff-loader.gif" alt="loader" />
        </div>
      );
    }
  };

  return <div id="content">{renderData(props)}</div>;
};

export default ListingDisplay;
