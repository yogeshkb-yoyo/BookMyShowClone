import Cast from "../cast/Cast.component";
import MovieHero from "../MovieHero/MovieHero.component";
import TempPosters from "../../../src/config/TempPosters.config";
import PosterSlider from "../PosterSlider/PosterSlider.component";
import React,{useContext,useState,useEffect} from "react";
import { MovieContext } from "../../context/Movie.context";
import axios from "axios";
import { useParams } from "react-router";
import Slider from "react-slick";

const Movie = () => {
    const {id} = useParams();
    const {movie} = useContext(MovieContext);
    const [cast,setCast] = useState([]);
    
    useEffect(()=>{
        const requestCast = async () => {
            const getCast = await axios.get(`/movie${id}/credits`)
            setCast(getCast.data.cast);
        };
        requestCast();
    },[]);
    

    const settings = {
        infinity: false,
        speed: 500,
        slidesToShow:4,
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
                slidesToShow:2,
                slidesToscroll:1,
                },
            },
        ],
    
    };

    const settingsCast = {
        infinity: false,
        speed: 500,
        slidesToShow:4,
        slidesToscroll:4,
        InitialSlide:0,
        responsive:[
            {
                breakpoint:1024,
                settings:{
                slidesToShow:4,
                slidesToscroll:3,
                infinite:true,
                },
            },
            {
                breakpoint:600,
                settings:{
                slidesToShow:5,
                slidesToscroll:2,
                InitialSlide:2,
                },
            },
            {
                breakpoint:480,
                settings:{
                slidesToShow:2,
                slidesToscroll:1,
                },
            },
        ],
    
    };

    return (
        <div>
            <MovieHero/>
                <div className="my-12 container px-8 lg:ml-24 lg:w-2/3">
                    <div className="flex flex-col items-start gap-3">
                        <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
                        <p>{movie.overview}</p>
                    </div>
                    <div className="my-8">
                        <hr/>
                    </div>
                <div className="my-8 ">
                    <h2 className="font-bold text-2xl text-gray-800 mb-3">Applicable offers</h2>
                        <div className="flex items-start gap-3 bg-yellow-100 p-3 border-yellow-300 border-dashed border-4 rounded-lg w-2/3">
                            <div className="w-8 h-8">
                            <img alt="offer" className="w-full h-full" style={{borderRadius:"0px",opacity: "1;"}} src="https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?17022021111052"/>
                            </div>
                            <div className="flex flex-col items-start">
                            <h3 className="text-gray-900 text-xl font-semibold">Filmy Pass</h3>
                            <p className="text-gray-700">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                            </div>
                         </div>
                </div>
                    <div className="my-8">
                        <hr/>
                    </div>

                <div>
                    <div className="my-5">
                        <h2 className="text-gray-800 font-bold text-2xl mb-2">Cast & Crew</h2>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Slider {...settingsCast}>
                            {cast.map((castdata)=> (
                                <Cast  
                                image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
                                castName={castdata.original_name}
                                role={castdata.character}
                            />
                        ))} 
                        </Slider>
                    </div>
                </div>

                <div className="my-8">
                    <hr/>
                </div>

                <div className="my-8">
                    <PosterSlider config={settings} images={TempPosters} title="You might also like" isDark={false}/>
                </div>

                <div className="my-8">
                <hr/>
                </div>

                <div className="my-8">
                    <PosterSlider config={settings} images={TempPosters} title="BMS XCLUSIV" isDark={false}/>
                </div>


                </div>
        </div>
    )
}

export default Movie;