import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './pageInfo.js';
export const store = configureStore({
  reducer: {
    pageInfo: pageReducer,
  },
})