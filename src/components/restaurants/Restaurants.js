import React, { Component } from 'react';
import Restaurant from "./Restaurant"

class Restaurants extends Component {

  

  render() {
   
    let restCards = this.props.restaurants.map((restaurant,index) => <Restaurant restaurant={restaurant} key={index} deleteRestaurant={this.props.deleteRestaurant}/>)
    return(
      <ul>
        Restaurants Component
        {restCards}
      </ul>
    );
  }
};

export default Restaurants;