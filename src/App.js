import React from "react";
import { Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Pages from "./components/Pages/Pages";
import BoardWrite from "./components/BoardWrite/BoardWrite";
import "./App.css"
import Comment from "./components/Comment/Comment";

const App = ()=>{
  return (
    <Routes>
      <Route path = {"/"} element = {<MainPage/>}/>
      <Route path = {"/Pages/:id"} element = {<Pages/>}/>
      <Route path = {"/comment"} element = {<Comment/>}/>
      <Route path = {"/BoardWrite"} element = {<BoardWrite/>}/>
    </Routes>
  );
}

export default App;
