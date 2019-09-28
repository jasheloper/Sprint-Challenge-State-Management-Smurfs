import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { fetchSmurfs } from '../actions';

const Smurfies = (props) => {
   useEffect(() => {
       props.fetchSmurfs();
   }, []);

   if (props.isFetching) {
       return <h3>
           Please Wait ...
       </h3>
   }

   return (
      <div>
         Hey
         </div>
   )
}




const mapStateToProps = state => {
   return {isFetching: state.isFetching, smurfs: state.smurfs};
};

export default connect(mapStateToProps, {fetchSmurfs: fetchSmurfs})(Smurfies);