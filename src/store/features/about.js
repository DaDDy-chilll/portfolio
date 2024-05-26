import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  menu1: true,
  menu2: false,
  menu3: false,
  menu4: false,
  menu5: false,
  menu6: false,
};
const aboutState = createSlice({
  name: "aboutState",
  initialState,
  reducers: {
    menuOpen: (state, action) => {
      switch (action.payload) {
        case 0:
          state.menu1 = true;
          state.menu2 = false;
          state.menu3 = false;
          state.menu4 = false;
          state.menu5 = false;
          state.menu6 = false;
          break;
        case 1:
          state.menu1 = false;
          state.menu2 = true;
          state.menu3 = false;
          state.menu4 = false;
          state.menu5 = false;
          state.menu6 = false;
          break;
        case 2:
          state.menu1 = false;
          state.menu2 = false;
          state.menu3 = true;
          state.menu4 = false;
          state.menu5 = false;
          state.menu6 = false;

          break;
        case 3:
          state.menu1 = false;
          state.menu2 = false;
          state.menu3 = false;
          state.menu4 = true;
          state.menu5 = false;
          state.menu6 = false;

          break;
        case 4:
          state.menu1 = false;
          state.menu2 = false;
          state.menu3 = false;
          state.menu4 = false;
          state.menu5 = true;
          state.menu6 = false;
          break;
        case 5:
          state.menu1 = false;
          state.menu2 = false;
          state.menu3 = false;
          state.menu4 = false;
          state.menu5 = false;
          state.menu6 = true;
          break;
        default:
          break;
      }
    },
  },
});

export const { menuOpen, downloadCV } = aboutState.actions;
export default aboutState.reducer;
