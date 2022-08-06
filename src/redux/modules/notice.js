import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

let number = 1;
const initialState = [{
    id : nanoid(),    
    title : "뒤질거 같아요",
    content  : "차라리 죽여줘",
}]

export const noticeSlice = createSlice({
    name: "notice",
    initialState:initialState,
    reducers: {
      addnotice: (state, action) => {
        const newNotice = {
          id: nanoid(),
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
  });
  
  export const { addnotice, deletenotice } = noticeSlice.actions;
  export default noticeSlice.reducer;