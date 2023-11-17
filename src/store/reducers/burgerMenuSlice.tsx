import { createSlice } from '@reduxjs/toolkit';

// const TOGGLE_BURGER_MEN = createAction('TOGGLE_BURGER_MEN');

type initType = {
  isActive: boolean;
};

const initialState: initType = {
  isActive: false,
};

const burgerMenuSlice = createSlice({
  name: 'TOGGLE_BURGER_MEN',
  initialState,
  reducers: {
    toggleBurgerMenu: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { toggleBurgerMenu } = burgerMenuSlice.actions;

export default burgerMenuSlice.reducer;
