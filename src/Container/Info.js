import React from "react";
import Radio from "../components/radio.js";
import Inputs from "../components/inputs.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Info extends React.Component {
  constructor(){
    super();
    this.state = {
      value: '',
      isChecked: false
    };

    this.handleChange = this.handleChange.bind(this);
  
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render(){
    return (
      <div className="info">
        <FontAwesomeIcon icon="info-circle" className="info-icon" title="Select an option"/>
        <div className="info-first-roll">
          <div className="info-radio-div">
            <Radio 
              labelFor="import" 
              labelClass="info-selection"
              inputId="import"  
              inputName="import-export" 
              inputValue="import"
              spanClass="import-export"
              spanContent = "Import" 
              fontClass="" 
              fontType={''} 
              fontTitle='' 
              rotate={0}
            />
            <Radio 
              labelFor="export" 
              labelClass="info-selection"
              inputId="export"  
              inputName="import-export" 
              inputValue="import"
              spanClass="import-export"
              spanContent = "Export" 
              fontClass="" 
              fontType={''} 
              fontTitle='' 
              rotate={0}
            />
          </div>
          <Inputs 
            inputType ="text"
            labelFor="from" 
            labelClass="destination"
            inputId="from"  
            inputName="import-export" 
            inputValue={this.hhandleChangee}
            placeholder="City or port"
            spanClass="from-to"
            spanContent = "From" 
            fontClass="pin" 
            fontType={'map-marker-alt'} 
            fontTitle='' 
            rotate={0} 
          />
          <Inputs 
            inputType ="text"
            labelFor="to" 
            labelClass="destination"
            inputId="to"  
            inputName="import-export" 
            inputValue={this.hhandleChangee}
            placeholder="City or port"
            spanClass="from-to"
            spanContent = "To" 
            fontClass="pin" 
            fontType={'map-marker-alt'} 
            fontTitle='' 
            rotate={0} 
          />
        </div>
        <div className="info-second-roll">
        <Inputs 
            inputType ="text"
            inputType1 ="date"
            labelFor="date" 
            labelClass="intercoms"
            inputId="date"  
            inputName="import-export" 
            inputValue={this.hhandleChangee}
            placeholder=""
            spanClass="from-to"
            spanContent = "Ready Date"
            inputId="datefocus"
            expectedType="text" 
            fontClass="pin" 
            fontType={'calendar'} 
            fontTitle='' 
            rotate={0} 
          />
          <label for="channel" className="intercoms select">
            <span className="from-to">Intercoms</span>
            <select name="channel" id="channel">
              <option value="" selected hidden disabled></option>
              <option value="MTN">MTN</option>
              <option value="Glo NG">Glo NG</option>
              <option value="Airtel">Airtel</option>
              <option value="9mobile">9mobile</option>
            </select>
          </label>
        <Inputs 
            inputType ="text"
            labelFor="cargo-value" 
            labelClass="intercoms"
            inputId="cargo-value"  
            inputName="import-export" 
            inputValue={this.handleChangee}
            placeholder=""
            spanClass="from-to"
            spanContent = "Total Cargo Value" 
            fontClass="" 
            fontType={''} 
            fontTitle='' 
            rotate={0} 
          />
        </div>
      </div>
      )
  }
}
export default Info;