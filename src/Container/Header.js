import React from 'react';

const Header = () => {
  return(
    <header>
      <p>Send <span>frieght</span></p>
      <div>
        <input type="text" placeholder="search" />
        <i className='fa fa-search'></i>
      </div>
      <div>
        <button>Request Quote</button>
        <button>Send Shipment</button>
      </div>
    </header>
  )
}

export default Header;