import {configureStore } from "@reduxjs/toolkit";
import noticeReducer from "../modules/notice";
import postLoginAsync from "../modules/login";

export default configureStore({
    reducer:{
        notice:noticeReducer,
        login:postLoginAsync,
    }
})