import { createSlice } from '@reduxjs/toolkit';

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
