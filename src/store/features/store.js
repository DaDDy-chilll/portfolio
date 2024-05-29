import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pageInfo.js";
import homeReducer from "./home.js";
import aboutReducre from "./about";
import skillsReducre from "./skills.js";
import alertReducre from './alert.js'

export const store = configureStore({
  reducer: {
    pageInfo: pageReducer,
    homeState: homeReducer,
    aboutState: aboutReducre,
    skillsState: skillsReducre,
    alertState: alertReducre,
  },
});
