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

                <EditBox>

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

                </EditBox>
                
            </EditContainer>

            <UpdateButton>
                <button className="button" type = "submit" onClick={submitEdit}>수정하기</button>
            </UpdateButton>
            
        </>
    )
}

export default EditBoard;


const EditContainer = styled.form`
    width: 800px;
    height: 600px;
    /* background-color: green; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin : auto;
    
    
`

const EditInput = styled.input`
    width: 500px;
    height: 300px;
    
`
const EditTitle = styled.input`
    width: 500px;
    height: 100px;
    /* margin: 200px auto; */
`

const EditBtn = styled.button`
    width: 100px;
    height: 30px;
    margin: 20px auto;
    
`

//

const EditBox = styled.div`
    width: 600px;
    height: 550px;
    background-color: white;
    margin: 30px auto auto auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    

`

//display: flex;

const UpdateButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:20px;

`
