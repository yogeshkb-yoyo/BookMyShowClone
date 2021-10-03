import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) =>{
    return(
        <div>
        <div className="w-full h-30 px-2">
        <img 
        className="w-full h-full rounded-xl"
        src={props.src}
        alt="entertainment image"
        />
        </div>
        </div>
    );
};

const EntertainmentCardsSlider = () =>{

    const EntertainmentImage= [
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTM1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MzUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png",
    ];

    const settings = {
        infinity: false,
        autoplay:false,
        slidesToShow:6,
        sildesToscroll:4,
        InitialSlide:0,
        responsive:[
            {
                breakpoints:1024,
                settings:{
                slidesToShow:3,
                sildesToscroll:2,
                infinite:true,
            },
        },
          {
            breakpoints:600,
            settings:{
            slidesToShow:2,
            sildesToscroll:1,
            InitialSlide:1,
            },
         },
         {
            breakpoints:480,
            settings:{
            slidesToShow:2,
            sildesToscroll:1,
            },
         },
        ],

    };

    return(
        <div>
        <Slider {...settings}>
        {
            EntertainmentImage.map((image)=>(
                <EntertainmentCard src={image}/>
            ))
        }
        </Slider>
        </div>
    );
};

export default EntertainmentCardsSlider;