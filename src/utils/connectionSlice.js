import { createSlice } from '@reduxjs/toolkit';

const connectionSlice = createSlice({
    name:"connection",
    initialState:[],
    reducers:{
        addConnection: (state, action) => {
            if (Array.isArray(action.payload)) {
              return [...state, ...action.payload]; // Merge connections with current state
            } else {
              console.error("addConnection payload is not iterable:", action.payload);
              return state; // Keep current state if payload isn't iterable
            }
          },
    }
});

export const {addConnection,removeConnection} = connectionSlice.actions;
export default connectionSlice.reducer;