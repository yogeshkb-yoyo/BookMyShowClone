import axios from "axios";

import DefaultHOC from "./HOC/Default.HOC";
import HomePage from "./components/pages/Home.page";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movie from "./components/pages/Movie.page";
import MovieHOC from "./HOC/Movie.HOC";
import Plays from "./components/pages/Plays.pages";

axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
      <div className="bg-yoyo-900">
        <DefaultHOC path="/" exact component={HomePage}/>
        <MovieHOC path="/movie/:id" exact component={Movie}/>
        <DefaultHOC path="/plays" exact component={Plays}/>
      </div>
    );
};

export default App;
