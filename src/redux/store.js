import { configureStore } from '@reduxjs/toolkit';
import orgsReducer from './orgsSlice';

export default configureStore({
  reducer: {
    orgs: orgsReducer,
  },
});
