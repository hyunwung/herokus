import React, { useEffect } from "react";
import Header from '../Header/Header';
import {StNoticeBoard} from "../MainPage/MainPage";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCommentIdAsync } from "../../redux/modules/notice";
import "./Comment.css"

const Comment = ({id}) => {
    const dispatch = useDispatch();
    const comment = useSelector((state)=>state.notice)
    console.log(id)
    useEffect(()=>{
        dispatch(getCommentIdAsync(id));
      },[])
    return (
    <div className='comment'>
        {comment.map((comments,index)=>{
            return(
                <div key={index}>
                    <div>{comments.comment}</div>
                </div>
            )
        })}
    </div>
  )
}

export default Comment