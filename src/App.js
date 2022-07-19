import Header from "./component/Header";
import Productlist from "./component/Productlist";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
          
     <BrowserRouter>
       <Header />
       <Routes>
      <Route path="/" exact element={<Productlist />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
