
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const url2 = process.env.REACT_APP_BASE_URI2

export const getCommentIdAsync = createAsyncThunk( // 댓글 조회 , 찾기
    "comment/getTodosAsync",
    async (payload) => {
        const response = await axios.get(url2+`?boardsId=${payload}`)
        return response.data
})
export const postCommentIdAsync = createAsyncThunk( // 댓글 달기
    "comment/postTodosAsync",
    async (payload) => {
        const response = await axios.post(url2,{
          boardsId:payload.boardsId,
          comment: payload.comment,
        })
        return response.data
})
export const updateCommentIdAsync = createAsyncThunk( // 댓글 수정
    "comment/postTodosAsync",
    async (payload) => {
        const response = await axios.patch(url2+`/${payload}`,{
          // boardsid:payload.boardsid,
          comment: payload.comment,
        })
        console.log(response.data)
        return response.data

})
export const deleteCommentIdAsync = createAsyncThunk( // 댓글 삭제
    "comment/deleteTodosAsync",
    async (payload) => {
        console.log(payload)
        const response = await axios.delete(url2+`/${payload}`)
        console.log(response.data)
        return response,payload
})


// export const deleteAllCommentAsync = createAsyncThunk( // 게시글 삭제시 댓글도 함께 삭제
//   "comment/deleteAllCommentAsync",
//   async (id,thunkAPI) => {
//     const response = await axios.delete(`http://localhost:5000/comments/${id}`)
//     console.log("진행해."+response)
//     return response.data
//   }
// )


const initialState = [{

}]

export const commentSlice = createSlice({
    name: "comment",
    initialState ,
    reducers: {
        increment:(state)=>{
            state.value +=1
        }
    },
    extraReducers:{
      [getCommentIdAsync.fulfilled]:(state,{payload}) => {
        console.log("data ! 호출")
        // console.log(state.payload)
        return payload
      },
      [postCommentIdAsync.fulfilled]:(state,{payload}) => {
        console.log("data 등록!")
        
      },
      [deleteCommentIdAsync.fulfilled]:(state,{payload}) => {
        console.log("data delete !")
      },
      [updateCommentIdAsync.fulfilled]:(state,{payload}) => {
        console.log("data update !")
      }
    }
  });
  
  export const { increment } = commentSlice.actions;
  export default commentSlice.reducer;