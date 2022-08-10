import React, { useState } from "react";
import styled from 'styled-components'
import Header from "../Header/Header";
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {EditBoardsAsync} from "../../redux/modules/notice"
import { useParams } from "react-router-dom"

function EditBoard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()

    const [title, setTitle] = useState("")
    const [updateBoard, setUpdateBoard] = useState("")

    const TitleChange = (e) => {
        e.preventDefault();
        setTitle(e.target.value)
    }

    const Editcontent = (e) => {
        e.preventDefault();
        setUpdateBoard(e.target.value)
        
    }
    
    const submitEdit = (e) => {
        e.preventDefault();
        if(updateBoard === "" || title === "") {
            alert("수정 한다며")
            return
        }
        dispatch(EditBoardsAsync({
            id : params.id,
            title : title,
            content : updateBoard,
        }))
        setTitle("")
        setUpdateBoard("")
        navigate(`/Pages/${params.id}`)
    }


   
    return (
        <>  <Header/>
            <EditContainer>
                <EditTitle
                type = "text"
                placeholder ="제목을 입력해 주세요"
                value={title}
                onChange={TitleChange}
                />
                <EditInput 
                type = "text"
                placeholder ="내용을 입력해 주세요"
                value={updateBoard}
                onChange={Editcontent}
                />
                <EditBtn type = "submit" onClick={submitEdit}>수정하기</EditBtn>
            </EditContainer>
        </>
    )
}

export default EditBoard;


const EditContainer = styled.form`
    width: 800px;
    height: 800px;
    background-color: green;
    margin: 100px auto;
    display: flex;
    
`

const EditInput = styled.input`
    width: 200px;
    height: 100px;
    margin: 300px auto;
`
const EditTitle = styled.input`
    width: 200px;
    height: 100px;
    margin: 200px auto;
`

const EditBtn = styled.button`
    width: 100px;
    height: 30px;
    margin: 250px auto;
`