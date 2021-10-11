import React from "react";

const Switch = (props) => {
  return (
  <label className="switch">
    <input type='checkbox' checked={props.check}/>
    <span className="slide"></span>
  </label>
  )
}

export default Switch;