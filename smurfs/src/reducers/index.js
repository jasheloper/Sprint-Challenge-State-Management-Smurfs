import {FETCHING_SMURFS, SMURF_FETCH_SUCESS} from '../actions';

const intialState = {
   smurfs: [],
   error: "",
   isFetching: false 

};


const reducer = (state = intialState, action) => {
   switch(action.type) {
   case FETCHING_SMURFS:
      return {
         ...state,
         isFetching: true
      };
 
   case SMURF_FETCH_SUCESS: 
         return {
         ...state,
         smurfs: action.payload,
         error: "",
         isfetching: false
            };
            
   default:
      return state; 
   }
}

export default reducer;