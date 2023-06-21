import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userinfo : {id: null,name: null,email: null,password: null},
    divelog : [],
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userInfo: (state, action) => {
        state.userinfo = action.payload;
    },
    getlogs: (state,action) => {
        state.divelog = action.payload;
    },
    initinfo: (state) =>{
        state.userinfo = {id: null,name: null,email: null,password: null};
        state.divelog = [];
    }
  }
});

export const { userInfo, getlogs,initinfo} = userSlice.actions

export default userSlice.reducer
