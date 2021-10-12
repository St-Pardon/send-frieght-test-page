import React from "react"
import Switch from "../components/switch.js"
import Radio from "../components/radio.js"
import Inputs from "../components/inputs.js"

const Details = () => {
  const [radioVal, setRadioVal] = React.useState('total dimention');
  const [isChecked, setIsChecked] = React.useState(true);

  const handleRadio = (e) => {
    setRadioVal(e.target.value)
  }
  const handleChecked = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div className="details">
      <div className="details-left-div">
        <h4>Cargo Details</h4>
        <div className="details-radio-div">
          <Radio 
            labelFor="total-dimention" 
            labelClass="dimension"
            inputId="total-dimention"  
            inputName="dimension-details" 
            inputValue="total dimention"
            spanClass="dimension-details"
            spanContent = "Total Dimensions" 
            checked= {radioVal === "total dimention"}
            handleRadio={handleRadio}
            fontClass="" 
            fontType={''} 
            fontTitle='' 
            rotate={0}
            />
          <Radio 
            labelFor="package-details" 
            labelClass="dimension"
            inputId="package-details"  
            inputName="dimension-details" 
            inputValue="package details"
            spanClass="dimension-details"
            spanContent = "Package Details" 
            checked= {radioVal === "package details"}
            handleRadio={handleRadio}
            fontClass="" 
            fontType={''} 
            fontTitle='' 
            rotate={0}
          />
        </div>
        <div className="fieldset-div">
          <fieldset>
            <legend>Total volume</legend>
            <Inputs 
              inputType ="number"
              labelFor="total-volume" 
              labelClass="volume"
              inputId="total-volume"  
              inputName="volume" 
              inputValue={this.handleChange}
              placeholder=""
              spanClass2="volume-weight"
              spanContent2 = "cbm" 
            />
          </fieldset>
          <fieldset>
            <legend>Total Weight</legend>
            <Inputs 
              inputType ="number"
              labelFor="total-weight" 
              labelClass="weight"
              inputId="total-weight"  
              inputName="volume" 
              inputValue={this.handleChange}
              placeholder=""
              spanClass2="volume-weight"
              spanContent2 = "Kg" 
            />
          </fieldset>
        </div>
      </div>
      <div className="details-right-div">
        <Switch className="switch add-switch" check={isChecked} handleCheck={handleChecked}/>
        <p>Dangerous Cargo (ex. Chemicals, Battry)</p>
      </div>
    </div>
  )
}

export default Details