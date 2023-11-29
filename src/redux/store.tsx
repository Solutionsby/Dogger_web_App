import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from './toggleSlice';
import sliderSliceReducer from "./sliderSlice";
import { ToggleState,DogsState  } from "./types";


export interface RootState {
    toggle: ToggleState;
    dogs: DogsState;
  }

const store = configureStore({
    reducer:{
        toggle: toggleReducer,
        dogs: sliderSliceReducer,
    },
})

export default store 