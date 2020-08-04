import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'


class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} 
                      restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews}
                  deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {
    addReview: payload => dispatch(addReview(payload)),
    deleteReview: payload => dispatch(deleteReview(payload))
  }
}

const addReview = (payload) => {
  return {
    type: "ADD_REVIEW",
    review: {text: payload.text,
    restaurantId: payload.restaurantId
    }
  }
}

const deleteReview = (payload) => {
  return{
    type: "DELETE_REVIEW",
    restaurantId: payload
  }
}


export default connect(null, mapDispatchToProps)(ReviewsContainer)