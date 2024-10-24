import React, {useState, useEffect} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const url= "https://api-537c.onrender.com/products"

const QuickSearch = () => {

    const [product,setProduct]= useState([])

    useEffect(()=>{
        fetch(url, {method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            setProduct(data)
        })
    },[])

  return (
    <>
    <div class="section-3">
      <div class="section-3-container">
        <p class="section-3-headline">Best On Electronincs</p>
          <QuickDisplay quickData={product}/>
      </div>
    </div>

    <div class="section-3">
        <div class="section-3-container">
          <p class="section-3-headline">Beauty, Food, Toys & More</p>
          <div class="smartphones">
            <div class="section-3-item">
              <img
                src="https://rukminim2.flixcart.com/image/210/210/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=90"
              />Iphone 15 <span class="span-text">Just ₹64,999</span>
            </div>
            <div class="section-3-item">
              <img
                src="https://rukminim2.flixcart.com/image/210/210/l51d30w0/shopsy-sport-mat/p/w/s/anadi-01-yoga-mat-4-30-anadi-enterprise-15-original-imagfsxudxcm7r48.jpeg?q=90"
                alt="item3"
              />Iphone 15 <span class="span-text">Just ₹64,999</span>
            </div>
            <div class="section-3-item">
              <img
                src="https://rukminim2.flixcart.com/image/210/210/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=90"
                alt="item3"
              />Iphone 15 <span class="span-text">Just ₹64,999</span>
            </div>
            <div class="section-3-item">
              <img
                src="https://rukminim2.flixcart.com/image/210/210/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=90"
                alt="item3"
              />Iphone 15 <span class="span-text">Just ₹64,999</span>
            </div>
            <div class="section-3-item">
              <img
                src="https://rukminim2.flixcart.com/image/210/210/krtjgcw0/microphone/x/h/j/3-5mm-clip-metal-microphone-for-voice-recording-lapel-mic-mobile-original-imag5gxrug6fcbct.jpeg?q=90"
                alt="item3"
              />Iphone 15 <span class="span-text">Just ₹64,999</span>
            </div>
            <div class="section-3-item">
              <img
                src="https://rukminim2.flixcart.com/image/210/210/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=90"
                alt="item3"
              />Iphone 15 <span class="span-text">Just ₹64,999</span>
            </div>
            <div class="section-3-item">
              <img
                src="https://rukminim2.flixcart.com/image/210/210/kiqbma80-0/musical-toy/s/k/b/xylophone-guitar-wooden-kids-first-musical-sound-instrument-toy-original-imafyfszcjkjcwwz.jpeg?q=90"
                alt="item3"
              />Iphone 15 <span class="span-text">Just ₹64,999</span>
            </div>
          </div>
        </div>
      </div>

      <div class="section-3">
        <div class="section-3-container">
          <p class="section-3-headline">Sports, Healthcare & more</p>
          <div class="smartphones">
            <div class="section-3-item">
              <img
                src="https://rukminim2.flixcart.com/image/210/210/l58iaa80/electric-cycle/i/y/f/-original-imagfykthgudy4qz.jpeg?q=90"
              />Iphone 15 <span class="span-text">Just ₹64,999</span>
            </div>
            <div class="section-3-item">
              <img
                src="https://rukminim2.flixcart.com/image/210/210/acoustic-guitar/e/y/y/dd-380c-blk-jixing-original-imaeff94e9tczafp.jpeg?q=90"
                alt="item3"
              />Iphone 15 <span class="span-text">Just ₹64,999</span>
            </div>
            <div class="section-3-item">
              <img
                src="https://rukminim2.flixcart.com/image/210/210/kiqbma80-0/musical-toy/s/k/b/xylophone-guitar-wooden-kids-first-musical-sound-instrument-toy-original-imafyfszcjkjcwwz.jpeg?q=90"
                alt="item3"
              />Iphone 15 <span class="span-text">Just ₹64,999</span>
            </div>
            <div class="section-3-item">
              <img
                src="https://rukminim2.flixcart.com/image/210/210/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=90"
                alt="item3"
              />Iphone 15 <span class="span-text">Just ₹64,999</span>
            </div>
            <div class="section-3-item">
              <img
                src="https://rukminim2.flixcart.com/image/210/210/kcjexe80/honey/w/y/4/1-honey-saffola-original-imaftn9ppz2shxzg.jpeg?q=90"
                alt="item3"
              />Iphone 15 <span class="span-text">Just ₹64,999</span>
            </div>
            <div class="section-3-item">
              <img
                src="https://rukminim2.flixcart.com/image/210/210/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=90"
                alt="item3"
              />Iphone 15 <span class="span-text">Just ₹64,999</span>
            </div>
            <div class="section-3-item">
              <img
                src="https://rukminim2.flixcart.com/image/210/210/xif0q/book/l/s/7/lucifer-was-innocent-original-imahfjyquxcpggxf.jpeg?q=90"
                alt="item3"
              />Iphone 15 <span class="span-text">Just ₹64,999</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default QuickSearch