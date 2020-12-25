import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {


  
  render() {
    
  
   let newRevs = this.props.reviews.filter(r => r.restaurantId === this.props.restaurantId)
   let revCards = newRevs.map((review,index) => <Review key={index} review={review} deleteReview={this.props.deleteReview}  />)
 

    return (
      <ul>
        Reviews
        {console.log(this.props)}
        { revCards}
      </ul>
    );
  }
};

export default Reviews;