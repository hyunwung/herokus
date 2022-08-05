import React from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'



function BoardWrite() {
  return (
    <>
      <Header/>
      <BorderTitle type= "text"  placeholder = "제목을 입력해 주세요."/>
      <BorderContent type = "text" placeholder = "내용을 입력해 주세요."/>
      <Addbtn>게시글 추가</Addbtn>
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