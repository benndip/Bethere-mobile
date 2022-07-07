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
      let {currentPlaces, places} = state;
      state.selectedTownId = action.payload.id;
      currentPlaces = places.filter(
        place => place.town_id == action.payload.id,
      );
    },
    setPlacesByPlacetype: (state, action) => {
      let {currentPlaces, places} = state;
      if (selectedTownId) {
        currentPlaces = places.filter(
          place =>
            place.placetype_id == action.payload.id &&
            place.town_id == action.payload.id,
        );
      } else {
        currentPlaces = places.filter(
          place => place.placetype_id == action.payload.id,
        );
      }
    },
  },
});

export const {setPlaces, setPlacesByPlacetype, setPlacesByTown} =
  placesSlice.actions;

export default placesSlice.reducer;
