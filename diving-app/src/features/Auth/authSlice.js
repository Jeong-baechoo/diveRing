import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    islogin : false,
}

const AuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Logined: (state) => {
        state.islogin = true;
    },
    Logouted: (state) =>{
        state.islogin = false;
    }
  }
});

export const { Logined, Logouted} = AuthSlice.actions

export default AuthSlice.reducer
