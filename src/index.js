import React from 'react';
import ReactDOM from 'react-dom';
import Address from './components/Address'
import { ToggleButton } from './components/ToggleButton'

ReactDOM.render(
  <div>
    <div>Components Need To Be Mounted</div>
    <Address
      street="Santa Monica Blvd."
      city="Santa Monica"
    />
    <ToggleButton />
  </div>
  ,
  document.getElementById('root')
)
