import React from "react";
import { Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Pages from "./components/Pages/Pages";
import BoardWrite from "./components/BoardWrite/BoardWrite";
import "./App.css"
import EditBoard from "./components/EditBoard/EditBoard";

const App = ()=>{
  return (
    <Routes>
      <Route path = {`${process.env.PUBLIC_URL}/`} element = {<MainPage/>}/>
      <Route path = {`${process.env.PUBLIC_URL}/Pages/:id`} element = {<Pages/>}/>
      <Route path = {`${process.env.PUBLIC_URL}/BoardWrite`} element = {<BoardWrite/>}/>
      <Route path = {`${process.env.PUBLIC_URL}/Pages/:id/EditBoard`} element = {<EditBoard/>}/>
    </Routes>
  );
}

export default App;
