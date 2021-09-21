import React from 'react';
import Slider from 'react-slick';
import Poster from '../Poster/poster.component';


export const Premier = () => {
    const settings = {
        infinity: false,
        autoplay:false,
        slidesToShow:5,
        sildesToscroll:2,
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

    const PremierImages =[
        {
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSic48xoP4nRlRVaAmU1vU0YSvUd1QKPwa8iQ&usqp=CAU",
            alt:"POC",
            title:"Pirates of the caribbean",
            subtitle:"english",
        },
        {
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSic48xoP4nRlRVaAmU1vU0YSvUd1QKPwa8iQ&usqp=CAU",
            alt:"POC",
            title:"Pirates of the caribbean",
            subtitle:"english",
        },
        {
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSic48xoP4nRlRVaAmU1vU0YSvUd1QKPwa8iQ&usqp=CAU",
            alt:"POC",
            title:"Pirates of the caribbean",
            subtitle:"english",
        },
        {
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSic48xoP4nRlRVaAmU1vU0YSvUd1QKPwa8iQ&usqp=CAU",
            alt:"POC",
            title:"Pirates of the caribbean",
            subtitle:"english",
        },
        {
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSic48xoP4nRlRVaAmU1vU0YSvUd1QKPwa8iQ&usqp=CAU",
            alt:"POC",
            title:"Pirates of the caribbean",
            subtitle:"english",
        },
        {
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSic48xoP4nRlRVaAmU1vU0YSvUd1QKPwa8iQ&usqp=CAU",
            alt:"POC",
            title:"Pirates of the caribbean",
            subtitle:"english",
        },
    ];

    return (
        <div>
            <div className="flex flex-col items-start">
            <h3 className="text-white text-xl font-bold">Premier</h3>
            <p className="text-white text-sm">Brand new release every film</p>
            </div>
            <Slider {...settings}>
                {PremierImages.map((image)=> (
                    <Poster {...image} isDark/>)
                )}
                </Slider>
        </div>
    );
};

export default Premier;