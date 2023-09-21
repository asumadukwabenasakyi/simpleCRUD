import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer'; // Import your rootReducer

const store = configureStore({
  reducer: rootReducer, // Pass the rootReducer here
  // ...other store configurations
});

export default store;
