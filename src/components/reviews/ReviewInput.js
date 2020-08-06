import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    let newReview = { restaurantId: this.props.restaurantId, text: this.state.text}
    this.props.addReview(newReview);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange}
            />
          <input
            type="submit"
            value="Submit Review"
            />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
