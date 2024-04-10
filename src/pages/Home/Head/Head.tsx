import React from "react";
import CalImg from "../../../assets/calender.jpg";

function Head() {
    return (<div className="mt-24 md:mt-[25vh]">
        <div className="text-center font-bold text-3xl">The Calendly Blog</div>
        <div className="flex flex-wrap justify-evenly items-center my-3 mx-auto lg:max-w-[70vw] sm:mt-12">
            <button className="text-sm rounded-xl  transition-colors duration-300 px-2 py-2 text-center mx-2 my-1 text-slate-500 focus:bg-blue-500 focus:text-white hover:bg-blue-500 hover:text-white sm:px-4">ALL</button>
            <button className="text-sm rounded-xl  transition-colors duration-300 px-2 py-2 text-center mx-2 my-1 text-slate-500 focus:bg-blue-500 focus:text-white hover:bg-blue-500 hover:text-white sm:px-4">WHAT'S NEW</button>
            <button className="text-sm rounded-xl  transition-colors duration-300 px-2 py-2 text-center mx-2 my-1 text-slate-500 focus:bg-blue-500 focus:text-white hover:bg-blue-500 hover:text-white sm:px-4">SALES</button>
            <button className="text-sm rounded-xl  transition-colors duration-300 px-2 py-2 text-center mx-2 my-1 text-slate-500 focus:bg-blue-500 focus:text-white hover:bg-blue-500 hover:text-white sm:px-4">RECRUITING</button>
            <button className="text-sm rounded-xl  transition-colors duration-300 px-2 py-2 text-center mx-2 my-1 text-slate-500 focus:bg-blue-500 focus:text-white hover:bg-blue-500 hover:text-white sm:px-4">PRODUCTIVITY</button>
            <button className="text-sm rounded-xl  transition-colors duration-300 px-2 py-2 text-center mx-2 my-1 text-slate-500 focus:bg-blue-500 focus:text-white hover:bg-blue-500 hover:text-white sm:px-4">CREATING CALENDY</button>
        </div>
        <div className="flex mt-8 px-[5vw] justify-center">
            <img src={CalImg} alt="calImg" className="w-[42vw] flex-1 hidden md:block" />
            <div className=" place-content-center flex-1 sm:px-16">
                <div className="text-sm sm:text-slate-500">WHAT'S NEW</div>
                <div className=" text-4xl my-4 font-bold">Welcome To Time Economy</div>
                <div className="my-2">Our most precious resource is time - and the next decade will be defined by how we managed it</div>
                <div className=" my-8 flex items-center justify-center sm:justify-start" >
                    <div className="text-sm font-semibold mx-4">Read the article</div>
                    <button className="text-sm text-white bg-black w-7 h-7 rounded-full">&rarr;</button>
                </div>
            </div>
        </div>
    </div>)
}

export default Head;