import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import  Yelp  from '../App/util/Yelp';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      businesses: []
    };
    this.searchYelp.bind(this);

  }
  searchYelp(term, location, sortBy){
    Yelp.searchYelp(term, location, sortBy).then((businesses) => {
      this.setState({ businesses: businesses });
    });
   }
  render(){
    return(
      <div className="App">
      <h1>Revenous</h1>
       <SearchBar searchYelp = {this.searchYelp}/>
      <BusinessList business = {this.state.businesses}/>
    </div>
  )
  }
}
export default App;