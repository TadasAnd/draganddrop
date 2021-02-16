import { configureStore } from '@reduxjs/toolkit';
import fileReducer from './FileSlice'

export default configureStore({
  reducer: {
    counter: fileReducer,
  },
});
