import React,{useContext,useState} from 'react';
import { MovieContext } from '../../context/Movie.context';
import PaymentModal from '../PaymentModal/Payment.component';


const MovieInfo = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [price,setPrice] = useState(0);
    const {movie} = useContext(MovieContext);
    const genres = movie.genres?.map(({name}) => name).join(", ");

    const rentMovies = () =>{
        setIsOpen(true);
        setPrice(499);
    };

    const buyMovies = () =>{
        setIsOpen(true);
        setPrice(799);
    };

    const num = movie.runtime;
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);

    return (
        <div>
            <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price}/>
            <div className="flex flex-col gap-3 lg:gap-8">
                <div className="flex items-center md:px-4 gap-3">
                    <div className="w-40 h-8">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                             alt="Premeier"
                             className="w-full h-full "/>
                    </div>  
                    <span className="bg-bms-700 p-1 px-3 text-xs font-sans text-white rounded-xl">Streaming Now</span>
                </div>
            <h1 className="text-white lg:text-4xl font-bold hidden lg:block ">{movie.original_title}</h1>
            <div className="flex flex-col-reverse gap-3  lg:gap-8 lg:flex-col">
                <div className="text-white font-sans flex md:px-4 flex-col gap-5">
                    <h4>4K &bull; {movie.original_language}</h4>
                    <h4> {rhours}hr {rminutes}m &bull; {genres}</h4>
                </div>
                <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full">
                    <button onClick={rentMovies} className="bg-bms-400 w-full py-3 text-white font-semibold rounded-lg">Rent ₹499</button>
                    <button onClick={buyMovies} className="bg-bms-400 w-full py-3 text-white font-semibold rounded-lg">Buy ₹799</button>

                </div>
            </div>
            </div>
        </div>
    );
};

export default MovieInfo;