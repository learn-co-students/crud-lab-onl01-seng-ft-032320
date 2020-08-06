import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const filteredList = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)

    const reviews = filteredList.map((review, id) => {
      return <Review key={id} review={review} deleteReview={this.props.deleteReview} />
    })

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;