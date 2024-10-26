import React from "react";
import "./QuickSearch.css";
import { Link } from "react-router-dom";

const QuickSearch = (props) => {
  console.log("props", props);

  const listProduct = ({ quickData }) => {
    if (quickData) {
      return quickData.map((item) => {
        return (
          <Link to={`/listing/${item.category_id}`} className="section-3-item">
            <img src={item.Image} />
            {item.product_name} <span className="span-text">{item.Price}</span>
            <p>{item.Color}</p>
          </Link>
        );
      });
    }
  };
  return (
    <>
      <div className="section-3-container">
        <div className="smartphones">{listProduct(props)}</div>
      </div>
    </>
  );
};
export default QuickSearch;
