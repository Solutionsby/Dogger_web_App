import { createSlice } from "@reduxjs/toolkit";
import { ToggleState } from "./types";




const initialState:ToggleState = {
    isToggleOn:false,
};

const ToggleSlice = createSlice({
    name:"toggle",
    initialState,
    reducers:{
        toggleState:(state,action) =>{
            state.isToggleOn = action.payload ??!state.isToggleOn;
        },
    },
});

export const {toggleState} = ToggleSlice.actions;
export default ToggleSlice.reducer;