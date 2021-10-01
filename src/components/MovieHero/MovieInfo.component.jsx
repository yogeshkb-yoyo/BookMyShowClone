import React from 'react'

const MovieInfo = () => {
    return (
        <div>
            <div className="flex flex-col gap-3 lg:gap-8">
                <div className="flex items-center md:px-4 gap-3">
                    <div className="w-40 h-8">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                             alt="Premeier"
                             className="w-full h-full "/>
                    </div>  
                    <span className="bg-bms-700 p-1 text-xs font-sans text-white rounded-xl">Streaming from 01 Oct 2021</span>
                </div>
            <h1 className="text-white lg:text-4xl font-bold hidden lg:block ">The Conjuring: The Devil <br/> Made Me Do It</h1>
            <div className="flex flex-col-reverse gap-3  lg:gap-8 lg:flex-col">
                <div className="text-white font-sans flex md:px-4 flex-col gap-5">
                    <h4>4K &bull; English &bull; Languages:<span className="text-bms-400 font-semibold"> Audio(1),Subtitles(1)</span></h4>
                    <h4>1h 54m &bull; Horror,Thriller &bull; A &bull; 13 Aug,2021</h4>
                </div>
                <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full">
                    <button className="bg-bms-400 w-full py-3 text-white font-semibold rounded-lg">Pre-rent ₹499</button>
                    <button className="bg-bms-400 w-full py-3 text-white font-semibold rounded-lg">Pre-buy ₹799</button>

                </div>
            </div>
            </div>
        </div>
    );
};

export default MovieInfo;