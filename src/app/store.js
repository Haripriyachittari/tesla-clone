import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSClice'


export const store = configureStore({
  reducer: {
    car:carReducer,
  },
});
