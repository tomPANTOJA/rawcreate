import React from 'react';
import Home from "./pages/Home";
import Login from "./pages/login";
import {BrowserRouter as  Router, Route, Routes} from "react-router-dom";



function App() {
  return (
    <div className="App">


      <Router>
        <Routes>
          <Route path='/Home' element={<Home />}/>
          <Route path='/login' element={<Login />}/>


        </Routes>

      </Router>



    </div>
  );
}

export default App;
