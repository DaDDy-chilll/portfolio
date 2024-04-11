import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    activeName:'HTML',
    activeImg:'',
}
const skills = createSlice({
    name:'skills',
    initialState,
    reducers:{
        skillActive:(state,action) => {
            state.activeName= action.payload;
        }
    }

})

export const  { skillActive}= skills.actions;
export default skills.reducer;