import React, { useState, useEffect } from "react";
import Card from '../../../components/Card/Card';
import SliderComponent from "../../../components/Slider/SliderComponent";
import data from "../../../data/data";


function Slide() {
    let dataArray = data;
    let featureArray = data.slice(0, 3);

    let [useSlider, setSlider] = useState<Boolean>();
    let [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        const handleSlider = () => {
            if (windowWidth < 1024) {
                setSlider(true);
            }
            else {
                setSlider(false);
            }
        }

        window.addEventListener('resize', handleResize);
        handleSlider();

        return () => {
            window.removeEventListener('resize', handleResize);

        };
    }, [windowWidth])


    return (<div className=" w-screen ">
        {useSlider ?
            <SliderComponent>
                < Card buttonName={featureArray[0].buttonName} header={featureArray[0].header} content={featureArray[0].content} time={featureArray[0].time}
                    bgColor="bg-purple-600" color="white" btnColor="white" />
                < Card buttonName={featureArray[1].buttonName} header={featureArray[0].header} content={featureArray[0].content} time={featureArray[0].time}
                    bgColor="bg-blue-950" color="white" btnColor="white" />
                < Card buttonName={featureArray[2].buttonName} header={featureArray[0].header} content={featureArray[0].content} time={featureArray[0].time}
                    bgColor="bg-indigo-800" color="white" btnColor="white" />
            </SliderComponent > :
            <div className="flex justify-center w-screen">
                  < Card buttonName={featureArray[0].buttonName} header={featureArray[0].header} content={featureArray[0].content} time={featureArray[0].time}
                    bgColor="bg-purple-600" color="white" btnColor="white" />
                < Card buttonName={featureArray[1].buttonName} header={featureArray[0].header} content={featureArray[0].content} time={featureArray[0].time}
                    bgColor="bg-blue-950" color="white" btnColor="white" />
                < Card buttonName={featureArray[2].buttonName} header={featureArray[0].header} content={featureArray[0].content} time={featureArray[0].time}
                    bgColor="bg-indigo-800" color="white" btnColor="white" />
            </div>}
        {useSlider ?
            <SliderComponent>
                {dataArray.slice(3, 6).map(({ buttonName, header, content, time }, key) => {
                    return (< Card key={key} buttonName={buttonName} header={header} content={content} time={time} />)
                })}
            </SliderComponent > :
            <div className="flex justify-center w-screen">
                {dataArray.slice(3, 6).map(({ buttonName, header, content, time }, key) => {
                    return (< Card key={key} buttonName={buttonName} header={header} content={content} time={time} />)
                })}
            </div>}

        {useSlider ?
            <SliderComponent>
                {dataArray.slice(6, 9).map(({ buttonName, header, content, time }, key) => {
                    return (< Card key={key} buttonName={buttonName} header={header} content={content} time={time} />)
                })}
            </SliderComponent > :
            <div className="flex justify-center w-screen">
                {dataArray.slice(6, 9).map(({ buttonName, header, content, time }, key) => {
                    return (< Card key={key} buttonName={buttonName} header={header} content={content} time={time} />)
                })}
            </div>}

        {useSlider ?
            <SliderComponent>
                {dataArray.slice(9, 12).map(({ buttonName, header, content, time }, key) => {
                    return (< Card key={key} buttonName={buttonName} header={header} content={content} time={time} />)
                })}
            </SliderComponent > :
            <div className="flex justify-center w-screen">
                {dataArray.slice(9, 12).map(({ buttonName, header, content, time }, key) => {
                    return (< Card key={key} buttonName={buttonName} header={header} content={content} time={time} />)
                })}
            </div>}

        {useSlider ?
            <SliderComponent>
                {dataArray.slice(12, 15).map(({ buttonName, header, content, time }, key) => {
                    return (< Card key={key} buttonName={buttonName} header={header} content={content} time={time} />)
                })}
            </SliderComponent > :
            <div className="flex justify-center w-screen">
                {dataArray.slice(12, 15).map(({ buttonName, header, content, time }, key) => {
                    return (< Card key={key} buttonName={buttonName} header={header} content={content} time={time} />)
                })}
            </div>}

        {useSlider ?
            <SliderComponent>
                {dataArray.slice(15, 18).map(({ buttonName, header, content, time }, key) => {
                    return (< Card key={key} buttonName={buttonName} header={header} content={content} time={time} />)
                })}
            </SliderComponent > :
            <div className="flex justify-center w-screen">
                {dataArray.slice(15, 18).map(({ buttonName, header, content, time }, key) => {
                    return (< Card key={key} buttonName={buttonName} header={header} content={content} time={time} />)
                })}
            </div>}
    </div>
    );
}

export default Slide;