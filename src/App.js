import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from 'shared/Header';
import RentalListing from 'components/rental/rental-listing/RentalListing';
import RentalDetail from 'components/rental/rental-details/RentalDetail';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
const store=require('reducer').init();
class App extends  Component {
  render(){
   
    return (
    <div className="App">
           <Provider store={store}>
          <Router>
          <Header></Header>
          <div className='container'>
            
                      <Route exact path="/">
                         <Redirect to="/rentals" />
                      </Route>

                      <Route exact path="/rentals/:id" component={RentalDetail} />
                      <Route exact path="/rentals" component={RentalListing} />
          </div>
            </Router>
            </Provider>

     </div>
  );
}
}

export default App;
