import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  renderRestaurants = () => {
    // debugger
    return this.props.restaurants.map((rest, index) => <Restaurant restaurant={rest} key={index} deleteRestaurant={this.props.deleteRestaurant}/>)
  }

  render() {
    return(
      <ul>

        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;