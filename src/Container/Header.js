import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return(
    <header>
      <p>send <span>freight</span></p>
      <div className="search-box">
        <input type="text" placeholder="search" />
        <FontAwesomeIcon className="search" icon={'search'} title='search' />
      </div>
      <div className='header-btn'>
        <button className="btn">Request Quote</button>
        <button className="btn">Send Shipment</button>
      </div>
    </header>
  )
}

export default Header;