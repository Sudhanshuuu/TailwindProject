import React from "react";
import instaImg from "../../assets/insta.png";
import fbImg from "../../assets/facebook.png";
import ytImg from "../../assets/youtube.png";

function Footer() {
    return (<div className="flex flex-col justify-evenly my-16 sm:flex-row">
        <div className="px-3  flex-[0.75] sm:pl-24">
            <div className="my-6 text-4xl font-extrabold">
                <div className="text-indigo-950">Easy</div>
                <div className="text-blue-500">ahead</div>
            </div>
            <div>
                We take the work out of connecting with <br /> others so you can accomplish more
            </div>
            <div className="flex my-8">
                <a href="https://www.instagram.com/"><img src={instaImg} alt="instaIcon" className="w-8 mx-1" /></a>
                <a href="https://www.facebook.com/"><img src={fbImg} alt="fbIcon" className="w-8 mx-1" /></a>
                <a href="https://www.youtube.com/"><img src={ytImg} alt="ytIcon" className="w-8 mx-1" /></a>
            </div>
        </div>
        <div className="px-4 flex justify-evenly flex-1">
            <div className="flex-1">
                <div className="my-6 *:my-2 hover:cursor-pointer">
                    <div className="text-md sm:text-lg font-bold text-indigo-950">About</div>
                    <div className="text-xs sm:text-sm text-slate-500">About Calendy</div>
                    <div className="text-xs sm:text-sm text-slate-500">Contact Sales</div>
                    <div className="text-xs sm:text-sm text-slate-500">Newsroom</div>
                    <div className="text-xs sm:text-sm text-slate-500">Careers</div>
                    <div className="text-xs sm:text-sm text-slate-500">Security</div>
                </div>
                <div className="my-6 *:my-2 hover:cursor-pointer">
                    <div className="text-md sm:text-lg font-bold text-indigo-950">Support</div>
                    <div className="text-xs sm:text-sm text-slate-500">Help Center</div>
                    <div className="text-xs sm:text-sm text-slate-500">Video tutorials</div>
                </div>
            </div>
            <div className="flex-1">
                <div className="my-6 *:my-2 hover:cursor-pointer">
                    <div className="text-md sm:text-lg font-bold text-indigo-950">Solutions</div>
                    <div className="text-xs sm:text-sm text-slate-500">Customer Success</div>
                    <div className="text-xs sm:text-sm text-slate-500">Sales</div>
                    <div className="text-xs sm:text-sm text-slate-500">Recruiting</div>
                    <div className="text-xs sm:text-sm text-slate-500">Information Technology</div>
                    <div className="text-xs sm:text-sm text-slate-500">Marketing</div>
                </div>
                <div className="my-6 *:my-2 hover:cursor-pointer">
                    <div className="text-md sm:text-lg font-bold text-indigo-950">Add-Ons</div>
                    <div className="text-xs sm:text-sm text-slate-500">Download for Chrome</div>
                    <div className="text-xs sm:text-sm text-slate-500">Download for firebox</div>
                </div>
            </div>
            <div className="flex-1">
                <div className="my-6 *:my-2 hover:cursor-pointer">
                    <div className="text-md sm:text-lg font-bold text-indigo-950">Popular Features</div>
                    <div className="text-xs sm:text-sm text-slate-500">Calendly</div>
                    <div className="text-xs sm:text-sm text-slate-500">Avaliablity</div>
                    <div className="text-xs sm:text-sm text-slate-500">Sending Notifications</div>
                    <div className="text-xs sm:text-sm text-slate-500">Using Calendy Mobile</div>
                </div>
                <div className="my-6 *:my-2 hover:cursor-pointer">
                    <div className="text-md sm:text-lg font-bold text-indigo-950">Developers</div>
                    <div className="text-xs sm:text-sm text-slate-500">Developers Tools</div>
                </div>
            </div>
        </div>
    </div>)
}

export default Footer;