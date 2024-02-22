import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    isOpen:false
}

const homeState = createSlice({
    name:"homeState",
    initialState,
    reducers:{
        isMenuOpen:(state) => {
            state.isOpen = !state.isOpen;
        }
    }
})

export const {isMenuOpen} = homeState.actions;
export default homeState.reducer;