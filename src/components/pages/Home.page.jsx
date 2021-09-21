import React from "react";

//Components
import EntertainmentCardsSlider from "../Entertainment/Entertainmentcard.component";

const HomePage = () =>{
    return (
        <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 my-3">
        The best of Entertainment
        </h1>
        <EntertainmentCardsSlider/>
        </div>

    );
};

export default HomePage;