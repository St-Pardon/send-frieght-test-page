import React from "react";
import Radio from "../components/radio.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Service =()=>{
  const [serviceVal, setServiceVal] = React.useState('air freight');

  const handleRadio = (e) => {
    setServiceVal(e.target.value)
  }
  return(
    <div className="services">
      <h4>Select a service</h4> 
      <div className="service-container-div">
        <Radio 
          labelFor="air" 
          labelClass="service-selection"
          inputId="air"  
          inputName="service" 
          inputValue="air freight"
          spanClass="radio"
          spanContent = "Air Freight" 
          fontClass="plane icon" 
          fontType={'plane'} 
          fontTitle='plane' 
          rotate={270}
          checked={serviceVal === "air freight"}
          handleRadio={handleRadio}
          />
        <Radio 
          labelFor="sea" 
          labelClass="service-selection"
          inputId="sea"  
          inputName="service" 
          inputValue="sea freight"
          spanClass="radio"
          spanContent = "Sea Freight" 
          fontClass="ship icon" 
          fontType={'ship'} 
          fontTitle='ship' 
          rotate={0}
          checked={serviceVal === "sea freight"}
          handleRadio={handleRadio}
        />
        <Radio 
          labelFor="inland" 
          labelClass="service-selection"
          inputId="inland"  
          inputName="service" 
          inputValue="inland"
          spanClass="radio"
          spanContent = "inland" 
          fontClass="truck icon" 
          fontType={'truck'} 
          fontTitle='truck' 
          rotate={0}
          checked={serviceVal === "inland"}
          handleRadio={handleRadio}
        />
        <label htmlFor="inland" className="service-selection">
          <input id="inland" type="radio" name="service" value="Inland" />
          <span className="radio">Inland
          <FontAwesomeIcon className="truck icon" icon={'truck'} title='search'/>
          </span>
        </label>
        <label htmlFor="custom" className="service-selection">
          <input id="custom" type="radio" name="service" value="customs clearance" />
          <span className="radio">Customs Cleareance
          <FontAwesomeIcon className="user icon" icon={'user-tie'} title='search'/>
          </span>
        </label>
      </div>
    </div>
  )
}

export default Service;