import React, { useState ,useEffect } from "react";
import Header from '../Header/Header'
import styled from 'styled-components'
import Comment from '../Comment/Comment'
import { useParams, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {getBoardAsync} from "../../redux/modules/boards"
import {deleteBoardsAsync} from "../../redux/modules/notice" 
import { postCommentIdAsync ,getCommentIdAsync} from "../../redux/modules/comment";
import "./Pages.css";

function Pages() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [check,setCheck] = useState(false)
    const {id} = useParams()
    const params = parseInt(id)

    const board = useSelector((state) => state.boards);
    const [comment,setComment] = useState("")

    const commentHandle = (e) => {
        setComment(e.target.value)
    }
    const addComment = (e) => {
        e.preventDefault();
        if (comment === ""){
            alert("댓글을 작성 해주세요.")
        }
        dispatch(
            postCommentIdAsync({
                boardsId:params,
                comment:comment
            })
        )
        setComment("")
        setCheck(!check)
    }
    useEffect(()=>{
        dispatch(getBoardAsync(params));
        dispatch(getCommentIdAsync(params));
    },[check])


  return (
    <>
        <Header/>
        <div className="pages">  
            <div className="pages-container">
                <ContentBox>
                    <StTitleText>
                        {board["title"]}
                    </StTitleText>
                    <StBodyText>
                        {board["content"]}
                    </StBodyText>
                </ContentBox>
                <StButtons>
                    <button className="button2"
                    onClick={() => {
                        dispatch(deleteBoardsAsync(params))
                        // dispatch(deleteAllCommentAsync(params))
                        navigate("/")
                    }}
                    >삭제하기</button>
                    <button className="button"
                    onClick={() => {
                        navigate("EditBoard")
                    }}>
                    수정하기</button>
                </StButtons>
                <CommentContainer>
                    <Comment id={params}></Comment>
                    <CommentInput value = {comment} type= "text" onChange={commentHandle}/>
                    <CommentBtn onClick={addComment} type="submit">댓글 추가</CommentBtn>
                </CommentContainer>
            </div>
        </div>
    </>
  )
}

export default Pages

const ContentBox = styled.div`
    width: 850px;
    height: 300px;
    margin: 40px auto 0 auto;
    display: flex;
    border: 1px solid black;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 8px
    /* background-color: white; */ 
`

const CommentContainer = styled.form`
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

////
const StButtons = styled.div`
    height: 100px;
    justify-content: center;
    display: flex;
    margin: auto auto auto auto;
    justify-content: space-evenly;
    align-items: center;
`

const StTitleText = styled.div`
    font-size: 50px;
    /* background-color: white; */
    color: rgb(192, 255, 177);
`

const StBodyText = styled.div`
    font-size: 20px;
`



