import React, { Component } from 'react';  
import ReactDOM from 'react-dom';


///// using 'state' to store static attributes that belong in 'props ///////////
// class Address extends Component{
//   constructor(props){
//     super(props);

//     this.state = {
//       fullAddress: `${props.street}, ${props.city}`
//     }
//   }
  
//   render() {
//     return (
//       <div className="address">
//         {this.state.fullAddress}
//       </div>
//     );
//   }
// }

// using 'props' for static attributes
class Address extends Component{
  render() {
    return (
      <div className="address">
        {this.props.street}, {this.props.city}
      </div>
    )
  }
};

export default Address;