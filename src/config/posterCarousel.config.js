const settings = {
    infinity: false,
    speed: 500,
    slidesToShow:5,
    sildesToscroll:4,
    InitialSlide:0,
    responsive:[
        {
            breakpoints:1024,
            settings:{
            slidesToShow:3,
            sildesToscroll:3,
            infinite:true,
        },
    },
      {
        breakpoints:600,
        settings:{
        slidesToShow:2,
        sildesToscroll:2,
        InitialSlide:2,
        },
     },
     {
        breakpoints:480,
        settings:{
        slidesToShow:3,
        sildesToscroll:1,
        },
     },
    ],

};

export default settings;