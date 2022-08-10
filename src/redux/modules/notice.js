import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

let url1 = "http://localhost:5000/boards"

export const getBoardsAsync = createAsyncThunk( // 게시판 조회 , 찾기
    "board/getTodosAsync",
    async ()=>{
        const response = await axios.get(url1)
        return response.data
})

const initialState = [{
    id : 1,    
    title : "stay.",
    content  : "차라리 죽여줘",
}]

export const noticeSlice = createSlice({
    name: "notice",
    initialState,
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
      deletenotice: (state, action) => {
        return state.filter((states)=>states.id !== action.payload.id)
      },
    },
    extraReducers:{
      [getBoardsAsync.fulfilled]:(state,{payload}) => {
        console.log("fetching data !")
        return [...payload]
      },
      // [getCommentAsync.fulfilled]:(state,{payload}) => {
      //   console.log("fetching data !")
      //   return [...payload]
      // },
    }
  });
  
  export const { addnotice, deletenotice } = noticeSlice.actions;
  export default noticeSlice.reducer;