import React, { useEffect } from "react";
import {connect} from 'react-redux';
import { fetchSmurfs } from '../actions';
import AddSmurfForm from './PostForm'

const Smurfies = (props) => {
   useEffect(() => {
       props.fetchSmurfs();
   }, []);




   return (

  
  
       <div className="container">

            <div className="header">
               Smurfs
            </div>



               <div>   
                  <AddSmurfForm />
                  </div>
         



            {props.smurfs.map(x => {
               return (    
               
               <div id={x.id}>

                <h2> {x.name} </h2>
                  <h3> {x.height} </h3>
                   {x.age} 

                  </div>
                  
                  )

            })}

          </div>
      
   );

};

const mapStateToProps = state => {
   return {isFetching: state.isFetching, smurfs: state.smurfs}
};

export default connect(mapStateToProps, {fetchSmurfs: fetchSmurfs})(Smurfies);





