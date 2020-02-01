import * as redux from 'redux';
import { combineReducers } from 'redux';
import { rentalReducer, selectedRentalReducer } from './rental-reducer';
import thunk from 'redux-thunk';
export const init =()=>{
	 const combinedReducers=combineReducers({rentals:rentalReducer, rental:selectedRentalReducer});
	 const store=redux.createStore(combinedReducers, redux.applyMiddleware(thunk));
	 return store;
}