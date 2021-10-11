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
        onFocus={
          (e)=>{document.getElementById(props.inputId).type = props.inputType1}
        } 
        onBlur={
            (e)=>{document.getElementById(props.inputId).type = props.expectedType}
          }
        />
        <span 
          className={props.spanClass2}>{props.spanContent2}
        </span>
    </label>
  )
}

  export default Inputs;