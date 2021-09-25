import React from "react";
import {Route} from "react-router-dom";
import MovieLayout from "../layouts/Movie.layout";

const MovieHOC = ({component: Component, ...yoyo}) => {

    return(
        <div>
        <Route
        {...yoyo}
        component={(props) =>(
            <MovieLayout>
            <Component {...props}/>
            </MovieLayout>
        )}
        />
        </div>
    );
};

export default MovieHOC;