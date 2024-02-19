import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  pageTitle: "home",
  pageNumber: 1,
};
const pageInfo = createSlice({
  name: "pageInfo",
  initialState,
  reducers: {
    changeInfo: (state, action) => {
      const  path  = action.payload;
      switch (path) {
        case "/":
          state.pageTitle = "home";
          state.pageNumber = 1;
          break;
        case "/about":
          state.pageTitle = "about";
          state.pageNumber = 2;
          break;
        case "/skills":
          state.pageTitle = "skills";
          state.pageNumber = 3;
          break;
        case "/projects":
          state.pageTitle = "projects";
          state.pageNumber = 4;
          break;
        case "/contact":
          state.pageTitle = "contact";
          state.pageNumber = 5;
          break;
        default:
          break;
      }
    },
  },
});

export const { changeInfo } = pageInfo.actions;

export default pageInfo.reducer;