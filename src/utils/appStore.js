import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSilce';
import feedReducer from './feedSlice';
import connectionReducer from './connectionSlice';
import requestReducer from "./requestSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer, // Add all slice reducers here
        feed:feedReducer,
        connection:connectionReducer,
        requests: requestReducer,
      },
});

  

export default appStore;