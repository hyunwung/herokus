import {configureStore} from "@reduxjs/toolkit";
import noticeReducer from "../modules/notice";
import comment from "../modules/comment";
import boards from "../modules/boards"
// import postLoginAsync from "../modules/login";

export default configureStore({
    reducer:{
        notice:noticeReducer,
        // login:postLoginAsync,
        comment,
        boards,
    }
})