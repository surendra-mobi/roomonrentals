import React from 'react';
import {connect} from 'react-redux';
import {RentalList} from './RentalList';
import {fetachRentals} from 'actions';

class RentalListing extends React.Component{
    componentWillMount(){
    	this.props.dispatch(fetachRentals());
    }
     render(){
     	        const rentals = this.props.rentals;

     			return(<section id='rentalListing'>
   					 <h1 class='page-title'>Your Home All Around the World</h1>
   					 <RentalList rentals={rentals}/>
   				</section>)
     }
}
function mapStateToProps(state){ 
 	return {rentals:state.rentals.data}
}
export default connect(mapStateToProps)(RentalListing);