import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentIdAsync ,deleteCommentIdAsync } from "../../redux/modules/comment";
import "./Comment.css"

const Comment = ({id}) => {
    const deleteComment = (commentid) => {
        dispatch(deleteCommentIdAsync(commentid))
    }
    const dispatch = useDispatch();
    const comment = useSelector((state)=>state.comment)
    console.log(comment)
    useEffect(()=>{
        dispatch(getCommentIdAsync(id.id));    
    },[])
    return (
    <div className='comment'>
        {comment.map((comments,index)=>{
            return(
                <div key={index} className="comment-item">
                    <div>{comments.comment}</div>
                    <button onClick={()=>{deleteComment(comments.id)}}>삭제</button>
                </div>
            )
        })}
    </div>
  )
}

export default Comment