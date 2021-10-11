import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Radio =(props)=>{
  return(
      <label 
        htmlFor={props.labelFor} 
        className={props.labelClass}>
        <input 
          id={props.inputId} 
          type="radio" 
          name={props.inputName} 
          value={props.inputValue} 
          checked={props.checked} 
          onChange={props.handleRadio}/>
        <span 
          className={props.spanClass}>
        {props.spanContent}
        <FontAwesomeIcon 
          className={props.fontClass} 
          icon={props.fontType} 
          title={props.fontTitle} 
          rotation={props.rotate}/>
        </span>
      </label>
  )
  }

  export default Radio;