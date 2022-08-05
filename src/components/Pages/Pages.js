import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'


function Pages() {
  return (
    <>  
        <Header/>
        <ContentBox>여기엔 내용이 들어갑니당~</ContentBox>
        <CommentContainer>
        <CommentBox>여기엔 댓글이 들어갑니당~</CommentBox>
        <CommentInput type= "text"/>
        <CommentBtn>댓글 추가</CommentBtn>
        </CommentContainer>
    </>
  )
}

export default Pages


const ContentBox = styled.div`
 width: 800px;
 height: 300px;
 margin: 40px auto;
 display: flex;
 border: 1px solid black;
`

const CommentContainer = styled.div`
    width: 800px;
    height: auto;
    margin: 20px auto;
`

const CommentBox = styled.div`
    width: 800px;
    height: 35px;
    margin: 20px auto;
    display: flex;
    border: 1px solid black;
`


const CommentInput = styled.input`
    width: 800px;
    height: 30px;
    margin: 0 auto;
    display: flex;
    border: 1px solid black;
`

const CommentBtn =styled.button`
    width: 80px;
    height: 30px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
`