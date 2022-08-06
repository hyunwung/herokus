import React from "react";
import { Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Pages from "./components/Pages/Pages";
import BoardWrite from "./components/BoardWrite/BoardWrite";
import Login from "./components/Login/Login";
import "./App.css"
import SignUp from "./components/SignUp/SignUp";

const App = ()=>{
  return (
    <Routes>
      <Route path = {"/"} element = {<MainPage/>}/>
      <Route path = {"/Pages"} element = {<Pages/>}/>
      <Route path = {"/login"} element = {<Login/>}/>
      <Route path = {"/signup"} element = {<SignUp/>}/>
      <Route path = {"/BoardWrite"} element = {<BoardWrite/>}/>
    </Routes>
  );
}

export default App;
