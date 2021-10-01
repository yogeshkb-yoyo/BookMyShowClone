import Cast from "../cast/Cast.component";
import MovieHero from "../MovieHero/MovieHero.component";
import TempPosters from "../../../src/config/TempPosters.config";
import PosterSlider from "../PosterSlider/PosterSlider.component";

const Movie = () => {

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

    return (
        <div>
            <MovieHero/>
                <div className="my-12 container px-8 lg:ml-24 lg:w-2/3">
                    <div className="flex flex-col items-start gap-3">
                        <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
                        <p>Paranormal investigators Ed and Lorraine Warren are faced with one of their most challenging cases when a murder suspect claims to be possessed by a demon.</p>
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
                    <Cast  
                        image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/patrick-wilson-4422-24-03-2017-12-35-32.jpg"
                        castName="Patrick Wilson"
                        role="Ed Warren"
                    />
                    <Cast  
                    image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/patrick-wilson-4422-24-03-2017-12-35-32.jpg"
                    castName="Patrick Wilson"
                    role="Ed Warren"
                    />
                    <Cast  
                    image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/patrick-wilson-4422-24-03-2017-12-35-32.jpg"
                    castName="Patrick Wilson"
                    role="Ed Warren"
                    />
                    
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