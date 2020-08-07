import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let reviews = this.props.reviews.map(review => {
      return <Review review={review} key={review.id} deleteReview={this.props.deleteReview}/>
    })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;