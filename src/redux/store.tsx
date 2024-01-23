import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from './toggleSlice';
import sliderSliceReducer from "./sliderSlice";
import toggleTextReducer from "./toggleText";
import screenReducer from './screenSlice'
import { ToggleState,DogsState,ToogleTextState,ScreenState  } from "./types";


export interface RootState {
    toggle: ToggleState;
    dogs: DogsState;
    toggleText:ToogleTextState;
    screen:ScreenState;
  }

const store = configureStore({
    reducer:{
        toggle: toggleReducer,
        dogs: sliderSliceReducer,
        toggleText:toggleTextReducer,
        screen:screenReducer

    },
})

export default store 