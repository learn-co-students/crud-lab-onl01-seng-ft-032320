import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { addReview, deleteReview } from '../actions/index'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews deleteReview={this.props.deleteReview} reviews={this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id )} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (payload) => {
      dispatch(addReview(payload))
    },
    deleteReview: (id) => {
      dispatch(deleteReview(id))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
