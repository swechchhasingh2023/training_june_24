import React from "react";
import "./QuickSearch.css";

const QuickSearch = (props) => {
  console.log("props", props);

  const product = ({ quickData }) => {
    if (quickData) {
      return quickData.map((item) => {
        return (
          <div class="section-3-item">
            <img src={item.Image} />
            {item.product_name} <span class="span-text">{item.Price}
            </span>
            <p>{item.Color}</p>
            <p>{item.Color}</p>
          </div>
        );
      });
    }
  };
  return (
    <>
      <div class="section-3">
        <div class="section-3-container">
          <div class="smartphones">{product(props)}</div>
        </div>
      </div>
    </>
  );
};
export default QuickSearch;
