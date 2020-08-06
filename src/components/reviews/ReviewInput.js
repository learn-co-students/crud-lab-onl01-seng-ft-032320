import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state={
    text: ''
  }
  

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log('New Review says: ', this.state.text)
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Reviews: </label>
          <input type='text' onChange={this.handleChange} value={this.state.text}/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
