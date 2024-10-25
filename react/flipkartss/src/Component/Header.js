import React from "react";
import './Header.css';

const Header = () => {
  return (
    <>
      <header>
        <div class="nav-container">
          <div class="logo">
            <img src="images/logo.svg" alt="logo" />
          </div>
          <div class="search">
            <div class="search-container">
              <button class="search-button">
                <svg
                  width="24"
                  height="24"
                  class=""
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
                class="search-box"
                placeholder="Search for Products, Brands and More"
              />
            </div>
          </div>
          <div class="right-header">
            <div class="login">
              <img src="images/login.svg" alt="Flipkart" class="images-brand" />
              Flipkart
              <img src="images/download.svg" alt="download" />
            </div>
            <div class="cart">
              <img
                src="images/header-cart.svg"
                alt="cart"
                class="images-brand"
              />
              Cart
            </div>
            <div class="become-seller brand-img">
              <img
                src="images/become-seller.svg"
                alt="seller"
                class="images-brand"
              />
              Beacome a Seller
            </div>
            <div class="more">
              <img src="images/header-3verticalDots.svg" alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
