//20191064 정용환 store.js

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/Auth/authSlice';
import userReducer from '../features/User/userSlice';
const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({ //리덕스 저장소를 생성
  reducer: {auth: authReducer,
  user: userReducer},
  middleware,
});
