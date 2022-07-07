import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  coords: [],
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.coords = action.payload;
    },
  },
});

export const {setLocation} = locationSlice.actions;
export default locationSlice.reducer;
