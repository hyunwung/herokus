import { createSlice } from "@reduxjs/toolkit";


const initialState = {
 List : [{

    id : 1,    
    title : "뒤질거 같아요",
    body  : "차라리 죽여줘",
}    
]
    
}

export const noticeSlice = createSlice({
    name: "notice",
    initialState,
    reducers: {
      addnotice: (state, action) => {
        state.number = state.number + action.payload;
      },
  
      deletenotice: (state, action) => {
        state.number = state.number - action.payload;
      },
    },
  });
  
  export const { addnotice, deletenotice } = noticeSlice.actions;
  export default noticeSlice.reducer;