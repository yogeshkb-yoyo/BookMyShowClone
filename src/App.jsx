import {Route} from "react-router-dom";

import DefaultHOC from "./HOC/Default.HOC";
import Temp from "./components/temp";
function App() {
  return (
      <div>
        <DefaultHOC path="/" exact component={Temp}/>
      </div>
    );
};

export default App;
