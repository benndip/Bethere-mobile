import {combineReducers} from 'redux';

import auth from './auth';
import places from './places';
import placetypes from './placetypes';
import towns from './towns';

const rootReducer = combineReducers({
  auth,
  places,
  towns,
  placetypes,
});

export default rootReducer;
