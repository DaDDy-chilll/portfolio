import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './pageInfo.js';
import homeReducer from './home.js'
import aboutReducre from './about'
export const store = configureStore({
  reducer: {
    pageInfo: pageReducer,
    homeState:homeReducer,
    aboutState:aboutReducre,
  },
})