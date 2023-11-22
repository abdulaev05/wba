import { createSlice } from '@reduxjs/toolkit';

type initType = {
  position: number;
  activeSlideId: number;
};

const initialState: initType = {
  position: 0,
  activeSlideId: 0,
};

const simpleSliderSlice = createSlice({
  name: 'simpleSlider',
  initialState,
  reducers: {
    changeSlide: (state, action) => {
      state.position = action.payload.position;
      state.activeSlideId = action.payload.activeSlideId;
    },
  },
});

export default simpleSliderSlice.reducer;
