import { createSlice } from '@reduxjs/toolkit';

const feedSlice = createSlice({
    name:"feed",
    initialState:{feed:null},
    reducers:{
        addFeed:(state,action)=>{
            return action.payload;
        },
        removeFeeds:(state,action)=>{
            const newArray = state.filter((r) => r._id !== action.payload);
            return newArray;
        }
    }
});

export const {addFeed,removeFeeds} = feedSlice.actions;
export default feedSlice.reducer;