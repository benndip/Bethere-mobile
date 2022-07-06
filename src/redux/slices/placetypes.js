import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  placetypes: [],
  currentPlacetypes: [],
  showingAllPlaceTypes: false,
};

const placetypeSlice = createSlice({
  name: 'placetypes',
  initialState,
  reducers: {
    setPlacetypes: (state, action) => {
      state.placetypes = action.payload;

      //   get just the first 6 for nice UI
      state.currentPlacetypes = state.placetypes.filter(
        (_, index) => index < 6,
      );
    },
    togglePlacetypes: state => {
      let placeTypes = state.showingAllPlaceTypes
        ? state.placetypes.filter((_, index) => index < 6)
        : state.placetypes;
      state.currentPlacetypes = placeTypes;
      state.showingAllPlaceTypes = !state.showingAllPlaceTypes;
    },
  },
});

export const {setPlacetypes, togglePlacetypes} = placetypeSlice.actions;

export default placetypeSlice.reducer;
