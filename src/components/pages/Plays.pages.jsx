import React from 'react';
import PlaysFilter from '../PlaysFilters/PlaysFilters.component';
import Poster from '../Poster/poster.component';


const Plays = () => {
    return (
        <div>
            <div className="container mx-auto px-4">

                <div className="w-full lg:flex lg:flex-row-reverse">

                        <div className="lg:w-3/4">
                            <h2 className="text-2xl font-bold ml-3 mb-4">Plays in Chennai</h2>
                                <div className="flex flex-wrap">
                                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00314550-dnbbnntjxd-portrait.jpg"
                                title="Amarar Kalki-in Ponniyin Selvan Play"
                                subtitle="Tamil (₹300)"
                                />
                                </div>
                                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00314550-dnbbnntjxd-portrait.jpg"
                                title="Amarar Kalki-in Ponniyin Selvan Play"
                                subtitle="Tamil (₹300)"
                                />
                                </div>
                                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00314550-dnbbnntjxd-portrait.jpg"
                                title="Amarar Kalki-in Ponniyin Selvan Play"
                                subtitle="Tamil (₹300)"
                                />
                                </div>
                                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00314550-dnbbnntjxd-portrait.jpg"
                                title="Amarar Kalki-in Ponniyin Selvan Play"
                                subtitle="Tamil (₹300)"
                                />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-3/12">
                            <h2 className="text-2xl font-bold mb-4">Filters</h2>
                            <div>
                                <PlaysFilter/>
                            </div>
                        </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Plays;