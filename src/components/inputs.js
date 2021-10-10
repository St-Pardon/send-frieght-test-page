import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Inputs = (props) =>{
  return(
    <label htmlFor={props.labelFor} 
      className={props.labelClass}>
      <FontAwesomeIcon 
        className={props.fontClass} 
        icon={props.fontType} 
        title={props.fontTitle} 
        rotation={props.rotate}/>
        <span 
          className={props.spanClass}>{props.spanContent}
        </span>
      <input 
        id={props.inputId} 
        type={props.inputType} 
        name={props.inputName} 
        value={props.inputValue}
        placeholder={props.placeholder}
        />
    </label>
  )
}

  export default Inputs;