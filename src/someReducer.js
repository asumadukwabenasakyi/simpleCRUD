// Define your initial state
const initialState = {
   data: [],
   loading: false,
   error: null,
 };
 
 // Define action types (constants)
 const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
 const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
 const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
 
 // Define your reducer function
 const SomeReducer = (state = initialState, action) => {
   switch (action.type) {
     case FETCH_DATA_REQUEST:
       return {
         ...state,
         loading: true,
         error: null,
       };
     case FETCH_DATA_SUCCESS:
       return {
         ...state,
         loading: false,
         data: action.payload, // Update your data with the payload from the action
       };
     case FETCH_DATA_FAILURE:
       return {
         ...state,
         loading: false,
         error: action.payload, // Store any error information in the state
       };
     default:
       return state;
   }
 };
 
 export default SomeReducer;
 