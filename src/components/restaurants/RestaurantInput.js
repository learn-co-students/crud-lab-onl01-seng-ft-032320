import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }


  handleChange = event => {
    this.setState({
      text: event.target.value,
    })
  
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Restaurant</label>
          <br></br>
          <input type='text' value={this.state.text} onChange={this.handleChange}></input>
          <br></br>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
