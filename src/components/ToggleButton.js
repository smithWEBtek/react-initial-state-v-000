import React, { Component } from 'react';  
import ReactDOM from 'react-dom';

class ToggleButton extends Component{
  constructor(){
    super();
  
    this.state = {
      isEnabled: false
    }
  }
  render(){
    return(
      <button className='toggle-button'>
        I am toggled {this.state.isEnabled ? 'on' : 'off'}
      </button>
    )
  }
};

export default ToggleButton;