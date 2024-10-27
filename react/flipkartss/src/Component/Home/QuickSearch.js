import React, { useState, useEffect } from "react";
import "./QuickSearch.css";
import QuickDisplay from "./QuickDisplay";

const url = "https://api-1-sk5b.onrender.com/products";

const QuickSearch = () => {
  const [productType, setproductType] = useState([]);

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setproductType(data);
      });
  }, []);

  return (
    <>
      <p className="section-3-headline">All Best Offers</p>
      <div className="section-3-container">
        <div className="smartphones">
          <QuickDisplay quickData={productType} />
        </div>
      </div>
    </>
  );
};
export default QuickSearch;
