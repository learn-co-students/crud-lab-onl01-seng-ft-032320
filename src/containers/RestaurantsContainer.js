import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants
            addReview={this.props.addReview}
            deleteRestaurant={this.props.deleteRestaurant} 
            restaurants={this.props.restaurants} 
            reviews={this.props.reviews} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {  
  return {
    restaurants: state.restaurants,
    reviews: state.reviews
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {
    addRestaurant: text => dispatch(addRestaurant(text)),
    deleteRestaurant: id => dispatch(deleteRestaurant(id)),
    addReview: payload => dispatch(addReview(payload)),
  }
}

const addRestaurant = (payload) => {
  return {
    type: "ADD_RESTAURANT",
    text: payload
  }
}

const deleteRestaurant = (payload) => {
  return {
    type: "DELETE_RESTAURANT",
    id: payload
  }
}


const addReview = (payload) => {
  return {
    type: "ADD_REVIEW",
    text: payload.text,
    restaurantId: payload.restaurantId
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
