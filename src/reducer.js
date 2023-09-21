// reducers/index.js
import { combineReducers } from 'redux';
import someReducer from './someReducer'; // Import your individual reducers

const rootReducer = combineReducers({
  someReducer,
  // ...other reducers
});

export default rootReducer;
