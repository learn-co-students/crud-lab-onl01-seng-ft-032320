import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }
  
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    // console.log('New Restaurant added:',this.state.text)
    this.setState({text: ''})
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Restaurant Name: </label>
          <input name='text' type='text' onChange={this.handleChange} value={this.state.text}/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
