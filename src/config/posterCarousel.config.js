const settings = {
    infinity: false,
    speed: 500,
    slidesToShow:5,
    slidesToscroll:4,
    InitialSlide:0,
    responsive:[
        {
            breakpoint:1024,
            settings:{
            slidesToShow:3,
            slidesToscroll:3,
            infinite:true,
            },
        },
        {
            breakpoint:600,
            settings:{
            slidesToShow:2,
            slidesToscroll:2,
            InitialSlide:2,
            },
        },
        {
            breakpoint:480,
            settings:{
            slidesToShow:3,
            slidesToscroll:1,
            },
        },
    ],

};

export default settings;