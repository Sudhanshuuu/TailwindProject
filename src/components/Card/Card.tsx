import React from "react";

type cardProps = {
    buttonName: string,
    time: string,
    header: string
    content: string,
    bgColor?: string,
    color?: string,
    btnColor?: string
}


function Card({ buttonName, content, time, header, bgColor = "bg-white", color = "black", btnColor = "border-blue-500" }: cardProps) {
    return (<div className={`${bgColor} text-${color} my-3 mx-5 h-[70vh] w-[90vw] px-8 py-5 flex flex-col justify-evenly border border-solid rounded-xl lg:w-1/3 xl:w-1/4 transition-all duration-300 hover:cursor-pointer hover:scale-[105%]`} >
        <div className={` py-1 px-3 text-sm  ${btnColor === "border-blue-500" ? "text-blue-500" : "text-white"} border border-solid rounded-xl ${btnColor} w-fit `}>{buttonName}</div>
        <div className=" font-semibold text-lg">{header}</div>
        <div className="text-sm">READ TIMES : {time} minutes</div>
        <div className="text-md font-medium">{content}</div>
        <div className="my-6 flex items-center">
            <div className="text-sm font-semibold">Read the Article</div>
            <button className={`mx-2 h-6 w-6 bg-${color}  ${color === "white" ? "text-black" : "text-white"} rounded-full `}>&rarr;</button>
        </div>
    </div >)
}



export default Card;