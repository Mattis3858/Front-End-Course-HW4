import Card from "./Card";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ETFSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ marginTop: "10%" }}>
      <Slider {...settings}>
        <div>
          <Card
            src="images/ETF-Content/Bad Clowyn.png"
            name="Bad Clowyn"
            price="0.465"
            creator="Zaskia Elf"
          />
        </div>
        <div>
          <Card
            src="images/ETF-Content/Bad Clowyn.png"
            name="Bad Clowyn"
            price="0.465"
            creator="Zaskia Elf"
          />
        </div>
        <div>
          <Card
            src="images/ETF-Content/Bad Clowyn.png"
            name="Bad Clowyn"
            price="0.465"
            creator="Zaskia Elf"
          />
        </div>
      </Slider>
    </div>
  );
}

export default ETFSlider;
