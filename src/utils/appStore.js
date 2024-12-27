import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSilce';

const appStore = configureStore({
    reducer: {
        user: userReducer, // Add all slice reducers here
      },
});

  

export default appStore;