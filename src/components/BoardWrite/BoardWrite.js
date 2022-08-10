import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import {addnotice,__postboards} from '../../redux/modules/notice';
import { getLoginAsync } from "../../redux/modules/login";
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'

function BoardWrite() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [boards, setBoards] = useState({
    title : "",
    content : "",
  })
  const {title , content} = boards;

  const onChangeHandler = (e)  => {
    const {name, value} = e.target;
    setBoards({...boards,[name] : value})
  }

  // const titleControl = (e) =>{
  //   e.preventDefault();
  //   setBoards(e.target.value)
    
  // }
  // const contentControl = (e) =>{
  //   e.preventDefault();
  //   setCotents(e.target.value)
  // }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (boards.title === "" || boards.content === "")
      return alert("내용을 입력하세요.")
    dispatch(__postboards({
      title : boards.title,
      content : boards.content,
    }))
    navigate("/")
    // setBoards({
    //   title : "",
    //   content : "",
    // })
  }
  // const submitCotent = (e) =>{    
  //   e.preventDefault();
  //   if(titles==="" || contents===""){
  //     alert("둘 다 작성해라..")
  //     return
  //     }
  //     dispatch(addnotice({
  //         title:titles,
  //         content:contents,
  //     }))
  //   setTitles("")
  //   setCotents("")
  // }
  return (
    <>
      <Header/>
      <form className='board-Container'>
        <BorderTitle name = "title" value = {boards.title} onChange={onChangeHandler} type= "text" placeholder = "제목을 입력해 주세요."/>
        <BorderContent name = "content" value = {boards.content} onChange={onChangeHandler} type = "text" placeholder = "내용을 입력해 주세요."/>
        <Addbtn onClick={onSubmitHandler} type="submit">게시글 추가</Addbtn>
      </form>
    </>
  )
}

export default BoardWrite


const BorderTitle = styled.input`
    width: 800px;
    height: 30px;
    margin: 40px auto;
    display: flex;
    border: 1px solid black;
`


const BorderContent = styled.input`
    width: 800px;
    height: 500px;
    margin: 0 auto;
    display: flex;
`

const Addbtn = styled.button`
    width: 90px;
    height: 30;
    margin: 20px auto;
    display: flex;
`