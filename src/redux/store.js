import { configureStore } from '@reduxjs/toolkit';
import calculatorSlice from '../features/calculator/CalcuatorSlice';


export const store = configureStore({
  reducer: {
    calculatorSlice: calculatorSlice,
  },
});
