import { combineReducers, configureStore } from '@reduxjs/toolkit';
import burgerMenuSlice from './reducers/burgerMenuSlice';
import simpleSliderSlice from './reducers/sliders/simpleSliderSlice';

const sliderReducer = combineReducers({
  simpleSlider: simpleSliderSlice,
});

const rootReducer = combineReducers({
  burgerMenu: burgerMenuSlice,
  slider: sliderReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
