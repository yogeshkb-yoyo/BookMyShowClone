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
        "https://staticecp.uprinting.com/98/450x450/Square_Business_Cards_Marketing_Material_A.jpg",
        "https://staticecp.uprinting.com/98/450x450/Square_Business_Cards_Marketing_Material_A.jpg",
        "https://staticecp.uprinting.com/98/450x450/Square_Business_Cards_Marketing_Material_A.jpg",
        "https://staticecp.uprinting.com/98/450x450/Square_Business_Cards_Marketing_Material_A.jpg",
        "https://staticecp.uprinting.com/98/450x450/Square_Business_Cards_Marketing_Material_A.jpg",
        "https://staticecp.uprinting.com/98/450x450/Square_Business_Cards_Marketing_Material_A.jpg",
        "https://staticecp.uprinting.com/98/450x450/Square_Business_Cards_Marketing_Material_A.jpg",
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