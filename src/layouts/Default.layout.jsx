import React from "react";

const DefaultLayout = () =>{
    return(
        <div>
        <h1 className="text-xl">DefaultLayout</h1>
        {props.children}
        </div>
    );
};

export default DefaultLayout;