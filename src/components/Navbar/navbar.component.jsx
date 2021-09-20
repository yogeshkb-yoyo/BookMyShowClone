import React from "react";
import {GoChevronRight} from "react-icons/go";
import {BiSearchAlt2} from "react-icons/bi";

const NavSm = () => {
    return(
        <div>
        <div className="text-white flex items-center justify-between">
            <div>
            <h3 className="text-xl font-bold">Hello welcome</h3>
            <span className="text-gray-400 text-xs flex items-center">Coimbatore<GoChevronRight/></span>
            </div>
            <div className="w-8 h-8">
             <BiSearchAlt2 className="w-full h-full"/>
            </div>
        </div>
        </div>
    );
};

const NavMd = () =>{
    return (
        <div className="w-full">
        <input type="search" 
        className="w-full" 
        placeholder="Search for movies, events, Plays, Sports and Activities."/>
        </div>
        );
};
const NavLg = () =>{
    return (
        <div>
        <nav></nav>
        </div>
        );
};

const Navbar = () => {
    return(
        <div>
        <nav className="bg-bms-700 p-4">
        <div className="md:hidden">{}<NavSm/></div>
        <div className="hidden md:flex lg:hidden">{}<NavMd/></div>
        <div className="hidden lg:flex">{}</div>
        </nav>
        </div>
    );
};

export default Navbar; 