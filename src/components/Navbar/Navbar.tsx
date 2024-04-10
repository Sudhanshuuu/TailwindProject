import React, { useState } from "react";

function Navbar() {

    let [toggle, setToggle] = useState<boolean>(true);

    function handleClick(): void {
        setToggle(!toggle);
    }

    return (<div className="fixed top-0 w-full z-20"> 
        <div className="w-full text-right bg-blue-700 py-2 block md:hidden">
            <button className="mx-6 text-3xl text-white" onClick={handleClick}>+</button>
        </div>
        <div className={`flex justify-around items-center text-center flex-col h-[92vh] bg-blue-700 text-white transition ease-in-out  w-screen z-20 absolute
        ${toggle ? "translate-x-full" : "translate-x-0"} md:flex-row md:h-auto md:bg-white md:text-black md:translate-x-0 md:relative`}>
            <div className="flex-[0.75] mx-8 hidden text-blue-950 font-semibold md:block">Calendly</div>
            <div className="flex justify-around flex-grow font-semibold flex-col md:flex-row">
                <div>Indiviuals</div>
                <div>Teams</div>
                <div>Enterprise</div>
                <div>Product</div>
                <div>Pricing</div>
                <div>Resources</div>
            </div>
            <div className="mx-3 flex flex-[0.5] flex-col justify-center md:flex-grow md:flex-row">
                <button className="mx-8 my-5 font-bold">LogIn</button>
                <button className="my-5  bg-white px-6 py-3 rounded-3xl text-sky-500 font-bold md:bg-sky-500 md:text-white">Sign Up</button>
            </div>
        </div>
    </div>)
}

export default Navbar;