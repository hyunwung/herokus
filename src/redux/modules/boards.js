import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

// let url1 = process.env.REACT_APP_BASE_URI1
let url1 = `http://localhost:5000/boards`

export const getBoardAsync = createAsyncThunk( // 원하는 게시판 클릭
    "board/getTodosAsync",
    async (id)=>{
        const response = await axios.get(url1+`/${id}`)
        return response.data
})
const initialState = [{
    id: 1,
    title: "새 개시글",
    content: "ㄱㄱ",
}]

export const noticeSlice = createSlice({
    name: "notice",
    initialState:initialState,
    reducers: {
      addnotice: (state, action) => {
        const newNotice = {
          id: 1,
          title : action.payload.title,
          content : action.payload.content,
        }
        console.log(newNotice)
      state.push(newNotice)
      },
      
    },
    extraReducers:{
      [getBoardAsync.fulfilled]:(state,{payload}) => {
        console.log("이 게시글 조회 !")
        return payload
      },
      [getBoardAsync.rejected]:(state,{payload}) => {
        console.log("fail !")
      }
      // [getCommentAsync.fulfilled]:(state,{payload}) => {
      //   console.log("fetching data !")
      //   return [...payload]
      // },
    }
  });
  
  export const { addnotice } = noticeSlice.actions;
  export default noticeSlice.reducer;