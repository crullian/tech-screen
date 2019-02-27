import { combineReducers } from 'redux';

// Import reducers
import data from './dataReducer';

const rootReducer = combineReducers({
  data
});

export default rootReducer;