import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  comment: "",
  type: "success",
};

const alertState = createSlice({
  name: "alert",
  initialState,
  reducers: {
    openAlert: (state, action) => {
      console.log(action.payload);
      state.isOpen = true;
      state.comment = action.payload.comment;
      state.type = action.payload.type;
    },

    closeAlert: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openAlert, closeAlert } = alertState.actions;
export default alertState.reducer;
