import React from "react";

//Components
import EntertainmentCardsSlider from "../Entertainment/Entertainmentcard.component";
import Premier from "../Premier/Premier.component";

const HomePage = () =>{
    return (
        <div>
            <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-800 my-3">
            The best of Entertainment
            </h1>
            <EntertainmentCardsSlider />
            </div>

            <div className="bg-bms-800 py-12">
                <div className="container mx-auto px-4 flex flex-col ">
                    <div className="hidden md:flex">
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="premier" className="w-full h-full"/>
                    </div>
                    <Premier/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;