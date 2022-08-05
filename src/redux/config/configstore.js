import {configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import notice from "../modules/notice"

export default configureStore({
    reducer:{
        notice:notice,
    }
})