import React from 'react'
import PosterCarouselsettings from '../../config/posterCarousel.config';
import Poster from '../Poster/poster.component';
import Slider from "react-slick";

const PosterSlider = (props) => {
    return (
        <div>
        <div className="flex flex-col items-start">
        <h3 className="text-white text-xl font-bold">{props.title}</h3>
        <p className="text-white text-sm mb-3">{props.subtitle}</p>
        </div>
        <Slider {...PosterCarouselsettings}>
            {props.images.map((image)=> (
                <Poster {...image} isDark/>)
            )}
            </Slider>
        </div>
    )
}

export default PosterSlider;