import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './countrySlice';

const store = configureStore({
  reducer: {
    Country: countryReducer,
  },
});

export default store;
