import React from "react";

export const NextArrow = (props) => {
    return (
        <div>
        <div 
        className={props.className}
        style={{...props.style,backgroundColor:"black"}}
        onClick={props.onClick}
        />
        </div>
    );
};

export const PrevArrow = (props) => {
    return (
        <div>
        <div 
        className={props.className}
        style={{...props.style,backgroundColor:"black"}}
        onClick={props.onClick}/>
        </div>
    );
};