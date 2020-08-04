import React, { Component } from 'react';
import Restaurant from "./Restaurant"

class Restaurants extends Component {
  render() {

    const rList = this.props.restaurants.map(r => {
                    return <Restaurant key={r.id} 
                                restaurant={r} 
                                addReview={this.props.addReview}
                                deleteRestaurant={this.props.deleteRestaurant} 
                                reviews={this.props.reviews.filter(review => review.restaurantId === r.id )}/>
                    })
    
    return(
      <ul>
        {rList}
      </ul>
    );
  }
};

export default Restaurants;