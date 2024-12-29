import { createSlice } from '@reduxjs/toolkit';

const feedSlice = createSlice({
    name:"feed",
    initialState:{user:null},
    reducers:{
        addFeed:(state,action)=>{
            return action.payload;
        },
        removeFeeds:(state,action)=>{
            return null;
        }
    }
});

export const {addFeed,removeFeeds} = feedSlice.actions;
export default feedSlice.reducer;