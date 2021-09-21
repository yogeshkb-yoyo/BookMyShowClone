import React from "react";
import HeroSlider from "react-slick";

//Component
import {NextArrow,PrevArrow} from "./Arrows.component";



const HeroCarousal = () =>{
    
    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding:"300px",
        slidesToShow:1,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,

    };

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
      };

      const images=[
          "https://images.hdqwalls.com/wallpapers/thumb/custom-bike-4k-0v.jpg",
          "https://images.hdqwalls.com/wallpapers/thumb/yamaha-mt-10-2019-w6.jpg",
          "https://images.hdqwalls.com/wallpapers/thumb/yamaha-r1-valentino-rossi-bike-5k-13.jpg",
          "https://images.hdqwalls.com/wallpapers/thumb/tech-noir-helmet-scifi-5k-n4.jpg",
          "https://images.hdqwalls.com/wallpapers/bthumb/biker-4k-l4.jpg"
      ];

    return (
        <div>
            <div className="lg:hidden">
            <HeroSlider {...settings}>
            {images.map((image) =>(
                <div className="w-full h-56 md:h-80 py-3">
                    <img src={image} alt="testing" className="w-full h-full"/>
                </div>
            ))}
             </HeroSlider>
            </div>
 
            <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
            {images.map((image) =>(
                <div className="w-full h-96 px-2 py-3">
                    <img src={image} alt="testing" className="w-full h-full rounded-md"/>
                </div>
            ))}
            </HeroSlider>
            </div>
        </div>
        );
};

export default HeroCarousal;