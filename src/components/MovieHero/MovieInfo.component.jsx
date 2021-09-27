import React from 'react'

const MovieInfo = () => {
    return (
        <div>
            <div>
                <div className="flex items-center gap-3">
                    <div className="w-40 h-8 ">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                             alt="Premeier"
                             className="w-full h-full "/>
                    </div>  
                    <span className="bg-bms-700 p-1 text-xs text-white rounded-xl">Streaming Now</span>
                </div>
            <h1 className="text-white lg:text-4xl font-bold ">The Conjuring: The Devil <br/> Made Me Do It</h1>
            <div></div>
            <div></div>
            </div>
        </div>
    );
};

export default MovieInfo;