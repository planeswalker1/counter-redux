import {combineReducers} from 'redux';

import resultsReducer from './results';
import counterReducer from './counter';

const rootReducer = combineReducers({
  counter: counterReducer,
  results: resultsReducer
});

export default rootReducer;
