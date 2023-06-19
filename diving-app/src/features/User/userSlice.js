import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userinfo : null,
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
    }
  }
});

export const { userInfo} = userSlice.actions

export default userSlice.reducer
