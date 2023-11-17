import { combineReducers, configureStore } from '@reduxjs/toolkit';
import burgerMenuReducer from './reducers/burgerMenuSlice';

const rootReducer = combineReducers({
  // burgerMenu: burgerMenuReducer,
  bm: burgerMenuReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
