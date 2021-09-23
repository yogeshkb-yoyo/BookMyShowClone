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
            src:"https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_.jpg",
            alt:"POC",
            title:"Pirates of the caribbean",
            subtitle:"english",
        },
        {
            src:"https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_.jpg",
            alt:"POC",
            title:"Pirates of the caribbean",
            subtitle:"english",
        },
        {
            src:"https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_.jpg",
            alt:"POC",
            title:"Pirates of the caribbean",
            subtitle:"english",
        },
        {
            src:"https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_.jpg",
            alt:"POC",
            title:"Pirates of the caribbean",
            subtitle:"english",
        },
        {
            src:"https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_.jpg",
            alt:"POC",
            title:"Pirates of the caribbean",
            subtitle:"english",
        },
        {
            src:"https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_.jpg",
            alt:"POC",
            title:"Pirates of the caribbean",
            subtitle:"english",
        },
    ];

    return (
        <div>
            <div className="flex flex-col items-start">
            <h3 className="text-white text-xl font-bold">Premieres</h3>
            <p className="text-white text-sm mb-3">Brand new release every Friday</p>
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