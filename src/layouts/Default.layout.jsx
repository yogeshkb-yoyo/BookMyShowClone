import React from "react";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
import Navbar from "../components/Navbar/navbar.component";


const DefaultLayout = (props) => {
    return(
        <div>
        <Navbar/>
        <HeroCarousal/>
        {props.children}
        </div>
    );
};

export default DefaultLayout;