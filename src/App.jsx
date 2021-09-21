import {Route} from "react-router-dom";

import DefaultHOC from "./HOC/Default.HOC";
import HomePage from "./components/pages/Home.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
      <div>
        <DefaultHOC path="/" exact component={HomePage}/>
      </div>
    );
};

export default App;
