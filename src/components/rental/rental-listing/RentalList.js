import React from 'react';
import {RentalCard} from './RentalCard';
export class RentalList extends React.Component{
	
    renderRentals(){
    	return this.props.rentals.map((rental, index)=><RentalCard key={index} rental={rental}/>)
    }
    render(){
		return(
 				 
   					<div class='row'>
     					 {this.renderRentals()}
    				</div>
            );
	}
}

