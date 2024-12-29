import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSilce';
import feedReducer from './feedSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer, // Add all slice reducers here
        feed:feedReducer
      },
});

  

export default appStore;