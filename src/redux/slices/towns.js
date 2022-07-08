import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  towns: [],
};

const townsSlice = createSlice({
  name: 'towns',
  initialState,
  reducers: {
    setTowns: (state, action) => {
      state.towns = action.payload;
    },
  },
});

export const {setTowns} = townsSlice.actions;

export default townsSlice.reducer;
