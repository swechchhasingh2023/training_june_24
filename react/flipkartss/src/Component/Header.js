import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="nav-container">
          <Link to ="/"><div className="logo">
            <img src="https://i.ibb.co/zQjK7rF/fflogo.png" alt="logo" />
          </div></Link>
          
          <div className="search">
            <div className="search-container">
              <button className="search-button">
                <svg
                  width="24"
                  height="24"
                  className=""
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Search Icon</title>
                  <path
                    d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                    stroke="#717478"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16 16L21 21"
                    stroke="#717478"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <input
                type="text"
                className="search-box"
                placeholder="Search for Products, Brands and More"
              />
            </div>
          </div>
          <div className="right-header">
            <div className="login">
              <img src="https://i.ibb.co/9nMhLY4/profile.png" alt="Flipkart Profile" className="images-brand" />
              Flipkart
              <img src="https://i.ibb.co/Qjkmyrj/download-1.png" alt="download" />
            </div>
            <div className="cart">
              <img
                src="https://i.ibb.co/zmzrSqV/cart.png"
                alt="cart"
                className="images-brand"
              />
              Cart
            </div>
            <div className="become-seller brand-img">
              <img
                src="https://i.ibb.co/V3B6c0j/box.png"
                alt="seller"
                className="images-brand"
              />
              Beacome a Seller
            </div>
            <div className="more">
              <img src="https://i.ibb.co/Br1Gczh/header-3vertical-Dots-1.png" alt="Three verticals dots" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
