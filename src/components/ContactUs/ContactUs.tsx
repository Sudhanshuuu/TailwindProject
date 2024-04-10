import React from "react";
import bgImage from "../../assets/Untitled.png";

function ContactUs() {
    return (<div className="bg-cover bg-center h-[75vh] w-screen flex justify-center items-center px-12 sm:justify-evenly" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hidden sm:block">
            <div className="text-white text-sm my-3">STAY UPDATED</div>
            <div className="text-white text-5xl font-bold my-3"> Subscribe to <br /> the newsletter</div>
            <div className="text-white text-sm my-6">Submit your email ,and once a month we will send you our <br /> best time saving articles, videos and other resources</div>
        </div>
        <div >
            <form className="bg-white flex flex-col px-6 py-10 rounded-md">
                <div className="flex flex-col lg:flex-row">
                    <div>
                        <label htmlFor="fname" className="block font-semibold">First Name</label>
                        <input name="fname" id="fname" type="text" placeholder="First name"
                            className="mx-1 border border-solid border-gray-200 my-3 px-3 py-2 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="lname" className="block font-semibold">Last Name</label>
                        <input name="lname" id="lname" type="text" placeholder="Last name"
                            className="mx-1 border border-solid border-gray-200 my-3 px-3 py-2 rounded-md" />
                    </div>
                </div>
                <div className="my-6">
                    <label htmlFor="email" className="block font-semibold">Email Address</label>
                    <input name="email" id="email" type="email" placeholder="Enter your email address"
                        className="mx-1 border border-solid border-gray-200 my-3 px-3 py-2 rounded-md w-full" />
                </div>
                <button className="bg-blue-700 text-white py-4 rounded-xl border transition-all duration-300 hover:bg-white hover:text-blue-700 hover:border-blue-700">Submit</button>
            </form>
        </div>
    </div>)
}

export default ContactUs;