import React, { Component } from 'react';  
 
export class ToggleButton extends Component {
  constructor(){
    super();
  
    this.state = {
      isEnabled: false
    }
  }
  
  toggleClick = (event)=>{
    event.preventDefault()
    if (this.state.isEnabled === false){
      this.setState({
        isEnabled: true,
      })
    } else {
      this.setState({
        isEnabled: false,
      })
    }
  }
  
  render(){
    return(
      <button className='toggle-button' onClick={this.toggleClick}>
        I am toggled {this.state.isEnabled ? 'on' : 'off'}
      </button>
    )
  }
};
