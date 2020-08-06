import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  restaurants = () => this.props.restaurants.map((restaurant, id) => <Restaurant key={restaurant.id} restaurant={restaurant} delete={this.props.deleteRestaurant} />)
  render() {
    return (
      <ul>
        {this.restaurants()}
      </ul>
    );
  }
};

export default Restaurants;