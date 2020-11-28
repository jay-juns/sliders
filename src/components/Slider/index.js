import React, { useEffect, useState } from "react";
import sliderImage from "./../sliderImage";
import Arrows from './../arrow';
import Dots from './../dots';
import SliderContent from './../sliderConetents';
import './styles.css';

const len = sliderImage.length - 1;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex])

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} />
      <Arrows 
        prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
        nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
      />
      <Dots 
        activeIndex={activeIndex}
        onclick={(activeIndex) => setActiveIndex(activeIndex)} 
      />
    </div>
  )
}



export default Slider;