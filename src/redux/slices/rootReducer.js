import {combineReducers} from 'redux';

import auth from './auth';
import places from './places';
import placetypes from './placetypes';

const rootReducer = combineReducers({
  auth,
  places,
  placetypes,
});

export default rootReducer;
