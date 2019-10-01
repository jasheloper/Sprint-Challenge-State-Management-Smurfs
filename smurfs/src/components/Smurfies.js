import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSmurf, addSmurf} from '../actions'
import AddSmurf from './AddSmurf'

class Smurfies extends Component {
   componentDidMount() {
      this.props.fetchSmurf()
   }

   render() {

      return (


         <div>

         <AddSmurf addSmurf={this.props.addSmurf} error={this.props.error}/>

         <div>

            {this.props.smurfs.map(x => {

               return (

                  <div id={x.id}>
                  <h1>{x.name}</h1>
                  <h2>{x.age}</h2>
                  <h3>{x.height} </h3>
                  </div>

               )
              
            })}


         </div>
   
            </div>
      )
      };

   };


const mapStateToProps = state => {
   return {
      smurfs: state.smurfs,
      isFetching: state.isFetching,
      error: state.error
   };
};

export default connect(
   mapStateToProps,
   {  fetchSmurf, addSmurf }
)(Smurfies);