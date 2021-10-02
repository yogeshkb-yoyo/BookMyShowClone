import React ,{useEffect,useContext} from 'react'
import MovieNavbar from '../components/Navbar/MovieNavbar.component';
import { useParams } from 'react-router';
import { MovieContext } from '../context/Movie.context';
import axios from 'axios';

const MovieLayout = (props) => {

    const MovieLayout = (props) =>{
        const{id} = useParams();
    }
    return (
        <div>
        <MovieNavbar/>
        {props.children}
        </div>
    )
}

export default MovieLayout;