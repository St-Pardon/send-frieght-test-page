import React from 'react';
import Button from '../components/Button.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return(
    <header>
      <h1>send <span>freight</span></h1>
      <div className="search-box">
        <input type="text" placeholder="search" />
        <FontAwesomeIcon className="search" icon={'search'} title='search' />
      </div>
      <div className='header-btn'>
        <Button btn="btn" btnVal="Request Quote" />
        <Button btn="btn" btnVal="Send Shipment" />
      </div>
    </header>
  )
}

export default Header;