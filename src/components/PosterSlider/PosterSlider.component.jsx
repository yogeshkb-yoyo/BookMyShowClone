import React from 'react'
import PosterCarouselsettings from '../../config/PosterCarousel.config';
import Poster from '../Poster/poster.component';
import Slider from "react-slick";

const PosterSlider = (props) => {

    const SliderConfig = props.config ? props.config : PosterCarouselsettings;
    return (
        <div>
        <div className="flex flex-col items-start my-2">
        <h3 className={` text-2xl font-bold  ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
        <p className={` text-sm mb-3  ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
        </div>
        <Slider {...SliderConfig}>
            {props.images.map((image)=> (
                <Poster {...image} isDark={props.isDark}/>)
            )}
            </Slider>
        </div>
    )
}

export default PosterSlider;