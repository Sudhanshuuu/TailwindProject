import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type sliderProps = {
    children: React.ReactNode
}

function SliderComponent({ children }: sliderProps) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (<Slider {...settings} >
        {children}
    </Slider>)
}

export default SliderComponent;