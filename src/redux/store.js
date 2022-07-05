import {configureStore} from '@reduxjs/toolkit';

import rootReducer from './slices/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});
