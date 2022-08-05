import React from "react";
import "./MainPage.css";
import styled from "styled-components";
import Header from "../Header/Header";
// import { useState } from "react"
import {Link} from "react-router-dom";

function MainPage() {
  return (
    <div className="MainPage">
      <Header/>
      <StNoticeBoard>
        
      </StNoticeBoard>
      <div>
        <Link to={"/BoardWrite"}>
          <StButton>게시글 작성</StButton>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;

const StNoticeBoard = styled.div`
  border: 2px solid black;
  background-color: white;
  height: 600px;
  width: 1000px;
  margin: 150px auto 0 auto;
  border: 2px solid black;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  border-radius: 8px;
`;

const StButton = styled.button`
  border: 2px solid black;
  background-color: white;
  /* border:none; */
  width: 150px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  float: right;
  margin-right: 150px;
  
`;

