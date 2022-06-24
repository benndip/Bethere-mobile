import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import rootReducer from './slices/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});
