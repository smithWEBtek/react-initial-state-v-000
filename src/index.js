import React from 'react';
import ReactDOM from 'react-dom';
import Address from './components/Address'
import ToggleButton from './components/ToggleButton'

ReactDOM.render(
  <div>Components Need To Be Mounted</div>,
  document.getElementById('root')
)

ReactDOM.render(
  <ToggleButton
  />,
  document.querySelector('#root2')
);

ReactDOM.render(
  <Address
  street="Santa Monica Blvd."
  city="Santa Monica"
  />,
  document.querySelector('#root3')
);