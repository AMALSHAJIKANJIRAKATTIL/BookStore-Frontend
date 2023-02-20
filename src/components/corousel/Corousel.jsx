import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
     fade:true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="w-full pt-1 pl-10 pr-10">
        <Slider {...settings}>
          <div>
            <img src="https://www.bookswagon.com/images/bannerimages/83_inr.jpg"></img>
          </div>
          <div>
          <img src="https://www.bookswagon.com/images/bannerimages/84_inr.jpg"></img>
          </div>
          <div>
          <img src="https://www.bookswagon.com/images/bannerimages/81_inr.jpg"></img>
          </div>
          <div>
          <img src="https://www.bookswagon.com/images/bannerimages/80_inr.jpg"></img>
          </div>
          <div>
          <img src="https://www.bookswagon.com/images/bannerimages/79_inr.jpg"></img>
          </div>
          <div>
          <img src="https://www.bookswagon.com/images/bannerimages/82_inr.jpg"></img>
          </div>
        </Slider>
      </div>
    );
  }
}