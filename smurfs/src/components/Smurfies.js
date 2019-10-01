import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSmurf, addSmurf} from '../actions'
import AddSmurf from './AddSmurf'
import logo from '../images/smurf.png'

class Smurfies extends Component {
   componentDidMount() {
      this.props.fetchSmurf()
   }

   render() {

      return (


         <div className="container">

            <div className="header">

               <div> <img src={logo} className="logo"/></div>
           

               Build a Smurf
               <h3>Your very own Smurf family!</h3>
               </div>

         <AddSmurf addSmurf={this.props.addSmurf} error={this.props.error}/>

         <div className="smurfsrow">

            {this.props.smurfs.map(x => {

               return (

                  <div id={x.id} className="asmurf">

                     <img src="https://www.stickpng.com/assets/thumbs/5a7b6d1eabc3d121aba71092.png" alt={x.name} className="smurfimg" />
                 
                  <h1>Name: {x.name}</h1>
                  <hr />
                  
                  <h2>Age: {x.age}</h2>
                  <h3>Height: {x.height} </h3>

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