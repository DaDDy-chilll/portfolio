import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './pageInfo.js';
import homeReducer from './home.js'
export const store = configureStore({
  reducer: {
    pageInfo: pageReducer,
    homeState:homeReducer,
  },
})