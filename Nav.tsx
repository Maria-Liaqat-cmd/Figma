import React from "react";
import {BsSearch} from "react-Icon/bs";
import {BsFacebook, BsTwitter, BsInstagram} from "react-Icons/bs";

export default function Nav() {
    return (
        <>
            <nav className="bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="/" className=" text-4xl font-bold  text-white">
                                    Dine Market
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="al-4 flex items-center spaces-x-4">
                                <a
                                    href="/"
                                    className="text-white black hover:bg-white hover:text-black rounded-lg p-2"
                                >
                                    Female
                                </a>
                                <a
                                    href="/"
                                    className="text-white black hover:bg-white hover:text-black rounded-lg p-2"
                                >
                                    Male
                                </a>
                                <a
                                    href="/"
                                    className="text-white black hover:bg-white hover:text-black rounded-lg p-2"
                                >
                                    Kids
                                </a>
                                <a
                                    href="/"
                                    className="text-white black hover:bg-white hover:text-black rounded-lg p-2"
                                >
                                    All Products
                                </a>
                            </div>
                        </div>
                        <BsSearch/>
                        <div>
                        <div className="border-b border-gray-200 hidden sm:block">
                            <div className="container p-4">
                                <div className="flex justify-between items-center">
                                    <div className="hidden lg:flex gap-1">
                                        <div className="hidden_top_Icon_wrapper">
                                            <BsFacebook/>
                                        </div>
                                        <div className="hidden_top_Icon_wrapper">
                                            <BsTwitter/>
                                    </div>
                                    <div className="hidden_top_Icon_wrapper">
                                            <BsInstagram/>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </nav>
        </>


    );
};

export default Nav;