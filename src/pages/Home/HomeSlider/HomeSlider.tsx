import React, { useEffect, useRef, useState } from "react";
import Slide from "./Slide";
import Button from "../../../components/Button/Button";

function HomeSlider() {

    const slideRef = useRef<HTMLDivElement | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const numSlides = 5;

    useEffect(() => {
        if (slideRef.current != null) {
            slideRef.current.scrollTo({
                left: currentSlide * slideRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    }, [currentSlide]);

    const goToSlide = (slideNumber: number): void => {
        setCurrentSlide(slideNumber);
    }

    const handlePrevClick = () => {
        setCurrentSlide(prev => (prev === 0 ? numSlides - 1 : prev - 1));
    }

    const handleNextClick = () => {
        setCurrentSlide(prev => (prev === numSlides - 1 ? 0 : prev + 1));
    }


    return (<div className="my-16">
        <div className="mx-[10vw] my-5">
            Most Popular
        </div>
        <div className="flex w-screen overflow-x-hidden" ref={slideRef}>
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
        </div>
        <div className=" text-center">
            <Button onClick={handlePrevClick}>&lt;</Button>
            <Button onClick={() => goToSlide(0)}>1</Button>
            <Button onClick={() => goToSlide(1)}>2</Button>
            <Button onClick={() => goToSlide(2)}>3</Button>
            <Button onClick={() => goToSlide(3)}>4</Button>
            <Button onClick={() => goToSlide(4)}>5</Button>
            <Button onClick={handleNextClick}>&gt;</Button>
        </div>
    </div>)
}

export default HomeSlider;