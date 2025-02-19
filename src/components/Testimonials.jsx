import React from "react";
import Slider from "react-slick";
import slide1 from "../assets/momo.jpg";
import slide2 from "../assets/momo1.jpg";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      {" "}
      <Slider {...settings}>
        <div>
          <img src={slide1}></img>
        </div>
        <div>
          <img src={slide2}></img>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
