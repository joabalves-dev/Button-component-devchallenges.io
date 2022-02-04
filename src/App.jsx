import React from "react";
import "./App.css";

/* Routes */
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

/* Pages */
import Home from "./Pages/Home";
import Buttons from "./Pages/Buttons";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Navigate to='/buttons'/>}/> 
          <Route path="buttons" element={<Buttons />} />
          <Route path="*" element={<h1 className="notFound">Pagina Em construção</h1>}/>
        </Route>
      </Routes>
    </Router>
  );

}

export default App;
