import React, { Component } from 'react';


class RestaurantInput extends Component {

  state = {
    text: ''
  }
  handleOnSubmit(event) {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })

  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    })
    
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>add restaurant</label>
          <input type="text" onChange={(event) => this.handleOnChange(event)} value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};


export default RestaurantInput;
