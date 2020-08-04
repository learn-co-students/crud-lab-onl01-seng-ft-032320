import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={() => this.props.deleteRestaurant(this.props.restaurant.id)}> X </button>
          <ReviewsContainer restaurant={this.props.restaurant}
                            reviews={this.props.reviews} 
                            addReview={this.props.addReview} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
