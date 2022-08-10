import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

let url1 = "http://localhost:5000/boards"
let url2 = "http://localhost:5000/comment"

export const getLoginAsync = createAsyncThunk( // 아이디 조회 , 찾기
    "login/getTodosAsync",
    async ()=>{
        const response = await axios.get(url1)
        return response.data
})
export const postLoginAsync = createAsyncThunk( // 회원가입 
    "login/postTodosAsync",
    async (payload)=>{
        const response = await axios.post(url1,{
            user: payload.user,
            name: payload.name,
            email: payload.email,
            password: payload.password,
        })
        return response.data
})
export const LoginAsync = createAsyncThunk( // 접속하기 
    "login/todosAsync",
    async (payload)=>{
        const response = await axios.post(url1,{
            user: payload.user,
            name: payload.name,
            email: payload.email,
            password: payload.password,
        })
        return response.data
})
// export const getLoginAsync = createAsyncThunk(
//     "login/getTodosAsync",
//     async ()=>{
//         const response = await axios.get()
//         return response.data
// })
// export const getLoginAsync = createAsyncThunk(
//     "login/getTodosAsync",
//     async ()=>{
//         const response = await axios.get()
//         return response.data
// })

const initialState = [{
    "id": 1,
    "user": "test1",
    "name": "서현웅",
    "email": "sddsk1123@naver.com",
    "password": "1234"
}]

export const loginSlice = createSlice({
    name: "login",
    initialState:{},
    reducers: {},
    extraReducers:{
        [getLoginAsync.fulfilled]:(state,{payload}) => {
            console.log("fetching data !")
            return [...payload]
        },
        [postLoginAsync.fulfilled]:(state,action) => {
            console.log(action.payload)
            return action.payload
        },
    }
  })
  
  export const { addLogin } = loginSlice.actions;
  export default loginSlice.reducer;