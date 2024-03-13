import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    menu1:true,
    menu2:false,
    menu3:false,
    menu4:false,
    menu5:false,
}

const aboutState = createSlice({
    name:'aboutState',
    initialState,
    reducers:{
        menuOpen:(state) => {
            state.menu1=true,
            state.menu2=false,
            state.menu3=false,
            state.menu4=false,
            state.menu5=false,
        }
    }
})