import { FETCH_RENTALS, FETCH_RENTALS_BYID, FETCH_RENTALS_BYID_INIT } from '../actions/types';

const INITIAL_DATA={rentals:{data:[]}, rental:{data:{}}};

export const rentalReducer = (state=INITIAL_DATA.rentals, action) => {
	switch(action.type){
	   case FETCH_RENTALS:
	   return {...state, data:action.rentals} 
	   default:
	   return state;
    }

}
 export const selectedRentalReducer = (state = INITIAL_DATA.rental, action)=>{
 	switch(action.type){
 	   case FETCH_RENTALS_BYID_INIT:
 	   		return {...state, data:{}} 
	   case FETCH_RENTALS_BYID:
	   		return {...state, data:action.rental} 
	   default:
	   		return state;
    }
 }
  
