import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageTitle: "home",
  pageNumber: 1,
  path: "/",
};
const pageInfo = createSlice({
  name: "pageInfo",
  initialState,
  reducers: {
    changeInfo: (state, action) => {
      const path = action.payload;
      switch (path) {
        case "/":
          state.pageTitle = "home";
          state.pageNumber = 1;
          state.path = "/";
          break;
        case "/about":
          state.pageTitle = "about";
          state.pageNumber = 2;
          state.path = "/about";

          break;
        case "/skills":
          state.pageTitle = "skills";
          state.pageNumber = 3;
          state.path = "/skills";

          break;
        case "/projects":
          state.pageTitle = "projects";
          state.pageNumber = 4;
          state.path = "/projects";

          break;
        case "/contact":
          state.pageTitle = "contact";
          state.pageNumber = 5;
          state.path = "/contact";
          break;
        default:
          break;
      }
    },
  },
});

export const { changeInfo } = pageInfo.actions;

export default pageInfo.reducer;
