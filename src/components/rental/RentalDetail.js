 import React from 'react';
 import {connect} from 'react-redux';
 import { fetachRentalById, fetchRentalByIdInit } from '../../actions';
 import {RentalCard} from './RentalCard';

 class RentalDetail extends React.Component{
 	constructor(){
 		super();
 	}
 	componentWillMount(){
 		this.props.dispatch(fetchRentalByIdInit());
 		let rentalId = this.props.match.params.id;
 		this.props.dispatch(fetachRentalById(rentalId));
    }
 	render(){
 		 const rental=this.props.rental;
 		 if(rental.id){
 			return(<section id='RentalDetail'>
   					 <h1 class='page-title'>Retal Detail</h1>
	   					<div class='row'>
	     					 <RentalCard rental={rental}/>
	    				</div>
 				 </section>);
 	   }else{
 	   	return(<section id='RentalDetail'>
   					 <h1 class='page-title'>Retal Detail</h1>
	   					<div class='row'>
	     					 Loading..........
	    				</div>
 				 </section>);
 	   }
 	}

 }
function mapStateToProps(state){ 
 	return {rental:state.rental.data}
}
export default connect(mapStateToProps)(RentalDetail);