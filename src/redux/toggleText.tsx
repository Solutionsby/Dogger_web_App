import { createSlice } from '@reduxjs/toolkit';
import { ToogleTextState } from './types';

const initialState:ToogleTextState = {
    isToggleOnText:false,
};


const toggleSlice = createSlice({
  name: 'toggleText',
  initialState,
  reducers: {
    toggleStateText: state => {
      state.isToggleOnText = !state.isToggleOnText;
    },
  },
});

export const { toggleStateText } = toggleSlice.actions;
export default toggleSlice.reducer;
