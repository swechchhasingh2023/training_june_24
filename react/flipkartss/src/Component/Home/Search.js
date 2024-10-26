import React from 'react'
import './Search.css'

const Search =() =>{
  return (
    <>
    <section className="section-1">
      <div className="section-1-container">
        <div className="section-1-item">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/698ba0cebe456aaf.jpg?q=100"
            alt="item1"
          />Top Offers
        </div>
        <div className="section-1-item">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/44e10b16e649b691.jpg?q=100"
            alt="item1"
          />Top Offers
        </div>
        <div className="section-1-item">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/717b5077a5e25324.jpg?q=100"
            alt="item1"
          />Top Offers
        </div>
        <div className="section-1-item">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/4da1d0d19350cc84.jpg?q=100"
            alt="item1"
          />Top Offers
        </div>
        <div className="section-1-item">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/9d4e9c605fc1d2d3.jpg?q=100"
            alt="item1"
          />Top Offers
        </div>
        <div className="section-1-item">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/a5e656672d0548dd.jpg?q=100"
            alt="item1"
          />Top Offers
        </div>
        <div className="section-1-item">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/5b813b64a3179898.jpg?q=100"
            alt="item1"
          />Top Offers
        </div>
        <div className="section-1-item">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/7a5e96c10ada8a56.jpg?q=100"
            alt="item1"
          />Top Offers
        </div>
        <div className="section-1-item">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/57fe1ffe54569c41.jpg?q=100"
            alt="item1"
          />Top Offers
        </div>
        <div className="section-1-item">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/25f400c36bc3487d.jpg?q=100"
            alt="item1"
          />Top Offers
        </div>
      </div>
    </section>

<section>
    <div id="devCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#devCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#devCarousel" data-slide-to="1"></li>
        <li data-target="#devCarousel" data-slide-to="2"></li>
        <li data-target="#devCarousel" data-slide-to="3"></li>
        <li data-target="#devCarousel" data-slide-to=""></li>

      </ol>
      <div className="carousel-inner">
        <div className="item active">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e7230486b354e4d7.jpg?q=20" alt="slider" className="sliderImage" />
        </div>
        <div className="item">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5aab8847f5e9869f.jpg?q=20" alt="slider" className="sliderImage"/>
        </div>
        <div className="item">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a4967bcc3d7e2c25.jpeg?q=20" alt="slider" className="sliderImage"/>
        </div>
        <div className="item">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/693e9029da2a38d3.jpeg?q=20" alt="slider" className="sliderImage"/>
        </div>
        <div className="item">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0b258b0085c395ee.jpg?q=20" alt="slider" className="sliderImage"/>
        </div>
      </div>
      <a className="left carousel-control" href="#devCarousel" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span>
      </a>
      <a className="right carousel-control" href="#devCarousel" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span>
      </a>
    </div>
  </section>
    </>
  )
}

export default Search