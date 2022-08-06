import {configureStore } from "@reduxjs/toolkit";
import notice from "../modules/notice";
import postLoginAsync from "../modules/login";

export default configureStore({
    reducer:{
        notice:notice,
        login:postLoginAsync,
    }
})