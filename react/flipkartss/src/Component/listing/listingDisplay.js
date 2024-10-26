import React from "react";
import { Link } from "react-router-dom";

const ListingDisplay = (props) => {
  const renderData = ({ listData }) => {
    if (listData) {
      if (listData.length > 0) {
        return listData.map((item) => {
          return (
            <div className="item" key={item._id}>
              <div className="row">
                <div className="col-md-5">
                  <img
                    src={item.Image}
                    alt={item.product_name}
                    className="Image"
                  />
                </div>
                <div className="col-md-7">
                  <div className="hotel_name">
                    <Link to={`/details?proDetailsId=${item.category_id}`}>
                      {item.product_name}
                    </Link>
                  </div>
                  <div className="city_name">{item.category}</div>
                  <div className="city_name">{item.Color}</div>
                  <div className="city_name">Rs. {item.Price}</div>
                  <div className="city_name">Rs. {item.Brand}</div>
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
