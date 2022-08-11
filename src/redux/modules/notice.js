import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

let url1 = process.env.REACT_APP_BASE_URI1

export const getBoardsAsync = createAsyncThunk( // 게시판 전체 조회
    "boards/getTodosAsync",
    async ()=>{
        const response = await axios.get(url1)
        return response.data
})

// export const getBoardAsync = createAsyncThunk( // 원하는 게시판 클릭
//     "board/getTodosAsync",
//     async (id)=>{
//         const response = await axios.get(url1+`/${id}`)
//         return response.data
// })
export const __postboards = createAsyncThunk( // 게시글 추가 
  "boards/postboards",
  async (args, thunkAPI) => {
    try {
      const response = await axios.post(url1, {
        title:args.title,
        content:args.content,
      }) 
      return thunkAPI.fulfillWithValue[response.data]; 
    }catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteBoardsAsync = createAsyncThunk( // 게시판 삭제
  "board/deleteBoardsAsync",
  async (id,thunkAPI) => {
    const response = await axios.delete(url1+`/${id}`)
    console.log("complete")
    return response.data
  }
)

export const EditBoardsAsync = createAsyncThunk(// 게시판 수정
"board/EditBoardsAsync",
async (payload, thunkAPI) => {
  const data = await axios.patch(url1+`/${payload.id}`, {
    title : payload.title,
    content : payload.content
  })
  return data.data
}
)

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
      [__postboards.fulfilled] : (state, action) => {
        console.log("처리")
      },
      [deleteBoardsAsync.fulfilled]:(state,{payload}) => {
        console.log(payload)
      },
      [EditBoardsAsync.fulfilled] : (state,{payload}) => {
        console.log(payload)
      },
      // [getCommentAsync.fulfilled]:(state,{payload}) => {
      //   console.log("fetching data !")
      //   return [...payload]
      // },
    }
  });
  
  export const { addnotice, deletenotice } = noticeSlice.actions;
  export default noticeSlice.reducer;