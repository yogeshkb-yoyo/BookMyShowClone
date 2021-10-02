import React , {useContext}from 'react'
import { MovieContext } from '../../context/Movie.context';
import MovieInfo from './MovieInfo.component';


const MovieHero = () => {
    const {movie} = useContext(MovieContext);
    return (
        <div>
            <div>
                <div className="relative md:hidden" style={{height: "calc(180vw)"}}>
                <div className="absolute z-20 bottom-3 left-3">
                    <MovieInfo/>
                </div>
                <div className="w-full h-56 bg-black z-10 opacity-50 absolute bottom-0"/>
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt="poster"
                        className="w-full h-full" />
                    </div>

                <div className="relative hidden md:block w-full lg:hidden" style={{height: "calc(100vw)"}}>
                <div className="absolute z-20 bottom-3 ">
                    <MovieInfo/>
                </div>
                <div className="w-full h-56 bg-black z-10 opacity-50 absolute bottom-0"/>

                    <img 
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt="poster"
                        className="w-full h-full"
                    />    
                </div>
                
                <div className="relative hidden w-full lg:block" style={{height: "30rem"}}>
                    <div className="absolute z-10 w-full h-full" style={{backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}/>
                    <div className="absolute z-30 left-12 top-12 flex items-center gap-7">
                        <div className="w-64 h-96 lg:ml-20">
                        <img 
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt="poster"
                        className="w-full h-full rounded-xl"/>
                        </div>

                        <div>
                            <MovieInfo/>
                        </div>

                    
                    </div>

                    <img 
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt="poster"
                    className="w-full h-full"
                    />  
                </div>
            </div>
        </div>
    )
}
export default MovieHero;