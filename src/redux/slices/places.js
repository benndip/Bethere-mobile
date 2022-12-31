import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  places: [],
  currentPlaces: [],
  selectedTownId: null,
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setPlaces: (state, action) => {
      state.places = action.payload;
      state.currentPlaces = state.places;
    },
    setPlacesByTown: (state, action) => {
      state.selectedTownId = action.payload;
      state.currentPlaces = state.places.filter(
        place => place.town_id == action.payload,
      );
    },
    setPlacesByPlacetype: (state, action) => {
      if (state.selectedTownId) {
        state.currentPlaces = state.places.filter(
          place =>
            place.placetype_id == action.payload &&
            place.town_id == action.payload,
        );
      } else {
        state.currentPlaces = state.places.filter(
          place => place.placetype_id == action.payload,
        );
      }
    },
  },
});

export const {setPlaces, setPlacesByPlacetype, setPlacesByTown} =
  placesSlice.actions;

export default placesSlice.reducer;
