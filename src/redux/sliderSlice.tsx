import { createSlice, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { dogs } from '../db/dogs.json';

interface Dog {
  id: number;
  name: string;
  age: number;
  gender: string;
  photo: string;
}

interface SliderState {
  dogs: Dog[];
  currentIndex: number;
}

const initialState: SliderState = {
  dogs: dogs,
  currentIndex: 0,
};

const sliderSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {
    updateIndex: (state, action: PayloadAction<number>) => {
      const newIndex = action.payload;
      if (newIndex >= 0 && newIndex < state.dogs.length) {
        state.currentIndex = newIndex;
      }
    },
  },
});

export const { updateIndex } = sliderSlice.actions;
export default createReducer(initialState, (builder) => {
  builder
    .addCase(updateIndex, (state, action) => {
      const newIndex = action.payload;
      if (newIndex >= 0 && newIndex < state.dogs.length) {
        state.currentIndex = newIndex;
      }
    });
});

