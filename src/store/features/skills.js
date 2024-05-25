import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    activeName:'HTML',
    activePrecent:0,
}
const skills = createSlice({
    name:'skills',
    initialState,
    reducers:{
        skillActive:(state,action) => {
            state.activeName= action.payload.name;
            state.activePrecent = action.payload.percent;
        }
    }

})

export const  { skillActive}= skills.actions;
export default skills.reducer;