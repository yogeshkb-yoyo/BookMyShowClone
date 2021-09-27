import React from 'react'
import MovieInfo from './MovieInfo.component';


const MovieHero = () => {
    return (
        <div>
            <div>
                <div className="relative md:hidden" style={{height: "calc(180vw)"}}>
                    <div className="w-full h-56 bg-black z-10 opacity-50 absolute bottom-0"/>
                    <img
                        src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-conjuring-the-devil-made-me-do-it-et00122455-23-09-2021-11-09-16.jpg"
                        alt="poster"
                        className="w-full h-full" />
                    </div>

                <div className="relative hidden md:block w-full lg:hidden" style={{height: "calc(100vw)"}}>

                <div className="w-full h-56 bg-black z-10 opacity-50 absolute bottom-0"/>

                    <img 
                        src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-conjuring-the-devil-made-me-do-it-et00122455-23-09-2021-11-09-16.jpg"
                        alt="poster"
                        className="w-full h-full"
                    />    
                </div>
                
                <div className="relative hidden w-full lg:block" style={{height: "30rem"}}>
                    <div className="absolute z-10 w-full h-full" style={{backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}/>
                    <div className="absolute z-30 left-12 top-12 flex items-center">
                        <div className="w-64 h-96 ">
                        <img 
                        src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-conjuring-the-devil-made-me-do-it-et00122455-23-09-2021-11-09-16.jpg"
                        alt="poster"
                        className="w-full h-full rounded-xl"/>
                        </div>

                        <div>
                            <MovieInfo/>
                        </div>

                    
                    </div>

                    <img 
                    src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/the-conjuring-the-devil-made-me-do-it-et00122455-23-09-2021-11-09-16.jpg"
                    alt="poster"
                    className="w-full h-full"
                    />  
                </div>
            </div>
        </div>
    )
}
export default MovieHero;