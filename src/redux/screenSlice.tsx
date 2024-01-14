import { createSlice } from "@reduxjs/toolkit";

const screenSlice = createSlice({
    name:"screen",
    initialState:{
    isDesktop:window.innerWidth > 768,},
    reducers :{
        setDesktop:(state) =>{
            state.isDesktop = true
        },
        setMobile: (state) =>{
            state.isDesktop = false
        },
    },
});

export const {setDesktop,setMobile} = screenSlice.actions;
export default screenSlice.reducer;