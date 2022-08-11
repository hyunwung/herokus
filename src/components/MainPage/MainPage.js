import React, { useEffect, useState } from "react";
import "./MainPage.css";
import styled from "styled-components";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBoardsAsync } from "../../redux/modules/notice";

const MainPage = ()=>{
  const dispatch = useDispatch();
  const boardGet = useSelector((state)=>state.notice)
  const [check,setCheck] = useState(false)
  console.log(boardGet)
  useEffect(()=>{
    dispatch(getBoardsAsync());
  },[check])
  return (
    <div className="MainPage">
      <Header/>
      <div className="container">
        <StNoticeBoard>
        {boardGet.map((boards,index)=>{
          return(
            <Link to={`/Pages/${boards.id}`} key={index} onClick={()=>{setCheck(!check)}}><div className="boards">{boards.title}</div></Link>
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