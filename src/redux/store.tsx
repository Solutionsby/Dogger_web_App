import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from './toggleSlice';
import sliderSliceReducer from "./sliderSlice";
import toggleTextReducer from "./toggleText";
import { ToggleState,DogsState,ToogleTextState  } from "./types";


export interface RootState {
    toggle: ToggleState;
    dogs: DogsState;
    toggleText:ToogleTextState;
  }

const store = configureStore({
    reducer:{
        toggle: toggleReducer,
        dogs: sliderSliceReducer,
        toggleText:toggleTextReducer

    },
})

export default store 