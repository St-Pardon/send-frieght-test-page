import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Service =()=>{
  return(
    <div className="services">
      <label htmlFor="air" className="service-selection">
        <input id="air" type="radio" name="service" value="air freight" />
        <span className="radio">Air Freight</span>
        <FontAwesomeIcon className="plane icon" icon={'plane'} title='search'/>
      </label>
      <label htmlFor="sea" className="service-selection">
        <input id="sea" type="radio" name="service" value="sea freight" />
        <span className="radio">Sea Freight</span>
        <FontAwesomeIcon className="ship icon" icon={'ship'} title='search'/>
      </label>
      <label htmlFor="inland" className="service-selection">
        <input id="inland" type="radio" name="service" value="Inland" />
        <span className="radio">Inland</span>
        <FontAwesomeIcon className="truck icon" icon={'truck'} title='search'/>
      </label>
      <label htmlFor="custom" className="service-selection">
        <input id="custom" type="radio" name="service" value="customs clearance" />
        <span className="radio">Customs Cleareance</span>
        <FontAwesomeIcon className="user icon" icon={'user-tie'} title='search'/>
      </label>
    </div>
  )
}

export default Service;