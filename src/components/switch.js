import React from "react";

const Switch = (props) => {
  return (
  <label className={props.className}>
    <input type='checkbox' checked={props.check} onChange={props.handleCheck} />
    <span className="slide"></span>
  </label>
  )
}

export default Switch;