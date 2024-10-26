import React from "react";

const ListingDisplay = (props) => {
  const renderData = ({ listData }) => {
    if(listData){
      if(listData.length >0){
         return listData.map((item)=>{
            return (
                <div className="item" key={item._id}>

                </div>
            )
         })
      }else{
        return(
            <div>
                <h2>Loading.....</h2>
                <img src="/images/loader.gif" alt="loader"/>
            </div>
        )
    }
    }
  };

  return (
    <>
      <div id="content">
           {renderData(props)}
        </div>
    </>
  );
};

export default ListingDisplay;