import axios from 'axios';

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURF_FETCH_SUCESS = "SMURF_FETCH_SUCESS";

export const fetchSmurfs = () => {

   return function(dispatch) {
     dispatch({ type: FETCHING_SMURFS });
     axios
       .get("http://localhost:3333/smurfs")
       .then(res => {
          console.log(res);
            dispatch({ type: SMURF_FETCH_SUCESS, payload: res.data })
       })
       .catch(err => console.error(err));
   };
 };