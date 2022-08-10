import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentIdAsync ,deleteCommentIdAsync ,updateCommentIdAsync } from "../../redux/modules/comment";
import "./Comment.css"

const Comment = ({id}) => {
    const [state,setState] = useState(false)
    const [update,setUpdate] = useState(false)
    const [inputCm,setInputCm] = useState("")

    const onChange = (e) =>{
        setInputCm(e.target.value)
    }
    const updateComment = () => {
        dispatch(updateCommentIdAsync({
            boardsid:id,
            comment:inputCm
            })
        )
    }
    const updateBtn = (e) => {
        e.preventDefault()
        setUpdate(!update)
    }
    const deleteComment = (commentid,e) => {
        e.preventDefault();
        dispatch(deleteCommentIdAsync(commentid))
        setState(!state)
    }
    const dispatch = useDispatch();
    const comment = useSelector((state)=>state.comment)
    console.log("보여봐라!",comment)
    useEffect(()=>{
        dispatch(getCommentIdAsync(id));   
        // return () => {
        //     dispatch(getCommentIdAsync(id.id));
        // }
    },[state])
    return (
    <div className='comment'>   
        <div className="comment-item">
        {comment.map((comments,index)=>{
            return(
                <div key={index}>{comments.comment}
                    <button onClick={()=>deleteComment(comments.id)}>삭제</button>
                    {update ? <div>
                                <input></input>
                                {/* <input value ={inputCm} onChange={onChange}></input> */}
                                <button onClick={()=>updateComment}>수정하기</button>
                                </div> : null}
                    <button onClick={updateBtn}>수정</button>
                </div>
                )})}
        </div>
    </div>
  )
}

export default React.memo(Comment)