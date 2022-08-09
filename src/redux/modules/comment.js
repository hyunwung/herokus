import { createSlice , createAsyncThunk ,createEntityAdapter} from "@reduxjs/toolkit";
import axios from 'axios';

let url2 = "http://localhost:5000/comments"

export const getCommentIdAsync = createAsyncThunk( // 댓글 조회 , 찾기
    "comment/getTodosAsync",
    async (payload) => {
        const response = await axios.get(url2+`?boardsid=${payload}`)
        return response.data
})
export const postCommentIdAsync = createAsyncThunk( // 댓글 달기
    "comment/postTodosAsync",
    async (payload) => {
        const response = await axios.get(url2+`/${payload}`,{

        })
        return 
})
export const deleteCommentIdAsync = createAsyncThunk( // 댓글 삭제
    "comment/deleteTodosAsync",
    async (payload) => {
        const response = await axios.delete(url2+`/${payload}`)
        return response,payload
})

const commentAdapt = createEntityAdapter({
  selectId: (comment) => comment.id
})

const initialState = [{
    id : 1,
    comment  : "차라리 죽여줘",
}]

export const commentSlice = createSlice({
    name: "comment",
    initialState : initialState,
    reducers: {
        increment:(state)=>{
            state.value +=1
        }
    },
    extraReducers:{
      [getCommentIdAsync.fulfilled]:(state,{payload}) => {
        console.log("data !")
        // console.log(state.payload)
        return payload
      },
      [deleteCommentIdAsync.fulfilled]:(state,{payload}) => {
        state.loading = false
        commentAdapt.removeOne(state.payload)
      }
    }
  });
  
  export const { increment } = commentSlice.actions;
  export default commentSlice.reducer;