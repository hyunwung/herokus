import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentIdAsync ,deleteCommentIdAsync ,updateCommentIdAsync } from "../../redux/modules/comment";
import "./Comment.css"

const Comment = ({id}) => {
    const [state,setState] = useState(false)
    const [inputCm,setInputCm] = useState("")
    const [idCheck, setIdCheck] = useState(-1)
    
    const onChange = (e) =>{
        setInputCm(e.target.value)
    }
    const updateComment = (id) => {
        console.log(id)
        alert(id,typeof(id))
        if (inputCm===""){
            alert("수정해주세요.")    
            return
        }
        dispatch(updateCommentIdAsync({
            id:id,
            comment:inputCm
            })
        )
    }
    const updateBtn = (e) => {
        e.preventDefault()
        setIdCheck(-1)
    }
    const updateId = (ids,e) =>{
        e.preventDefault();
        setIdCheck(ids)
    }
    const deleteComment = (commentid,e) => {
        e.preventDefault();
        dispatch(deleteCommentIdAsync(commentid))
        setState(!state)
    }
    const dispatch = useDispatch();
    const comment = useSelector((state)=>state.comment)
    
    useEffect(()=>{
        dispatch(getCommentIdAsync(id));   
        // return () => {
        //     dispatch(getCommentIdAsync(id.id));
        // }
    },[state])
    return (
    <div className='comment'>   
        {comment.map((comments,index)=>{
            return(
                <div key={index}>
                {idCheck === comments.id ?
                    <div>
                        <input value ={inputCm} onChange={onChange}></input>
                        <button onClick={(e)=>updateComment(comments.id,e)}>수정하기</button>
                        <button onClick={()=>updateBtn}>수정</button>
                    </div>   
                    :   <div key={index} className="comment-item">{comments.comment}
                            <div onClick={(e)=>deleteComment(comments.id,e)}>삭제</div>
                            <button onClick={()=>updateId(comments.id)}>수정</button>    
                        </div>
                }
                </div>
            )})}
    </div>
  )
}

export default Comment

