import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isOpen:false,
    comment:''
}

const alertState = createSlice({
    name:'alert',
    initialState,
    reducers:{
        openAlert:(state,action)=>{
            state.isOpen = true,
            state.comment = action.payload
        }
    }
})

export const {openAlert} = alertState.actions;
export default alertState.reducer;