import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import MainPage from "./components/MainPage/MainPage";
import Pages from "./components/Pages/Pages"




const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<MainPage/>}/>
        <Route path = "Pages" element = {<Pages/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
