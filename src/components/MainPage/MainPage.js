import React, { useEffect } from "react";
import "./MainPage.css";
import styled from "styled-components";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBoardsAsync } from "../../redux/modules/notice";

const MainPage = ()=>{
  const dispatch = useDispatch();
  const boardGet = useSelector((state)=>state.notice)

  
  useEffect(()=>{
    dispatch(getBoardsAsync());
  },[])
  return (
    <div className="MainPage">
      <Header/>
      <div className="container">
        <StNoticeBoard>
        {boardGet.map((boards,index)=>{
          return(
          
            <Link to={`/Pages/${boards.id}`} key={index}><div className="boards">{boards.title}</div></Link>
          )
        })}
        </StNoticeBoard>

        
        <Link to={"/BoardWrite"}>
          <StButton>게시글 작성</StButton>
        </Link>
      </div>
    </div>
  );
}

const StNoticeBoard = styled.div`
  border: none;
  background-color: white;
  max-width: 1200px;
  width:1000px;
  height : 750px;
  border-radius: 8px;
  display:flex;
  flex-direction: column;
  align-items:center;
  
`;

const StButton = styled.button`
  margin-top:7px;
  border: none;
  background-color: rgb(30, 144, 255);
  width: 150px;
  height: 40px;
  border-radius: 8px;
  color:white;
  cursor: pointer;
  float: right;
  font-size:18px;
  font-weight: bold;
`;

export default MainPage;
export { StNoticeBoard }