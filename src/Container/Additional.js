import React from "react";
import Switch from "../components/switch.js";

const Additional = () =>{
  return(
    <div className="additional" style={{marginBottom: "30px"}}>
      <div className="additional-first-roll">
        <div className="additional-radio-div">
          <Switch className="switch add" />
          <div>
            <h5>Export Forwarding</h5>
            <p>We handle customs clearance and documentation.</p>
          </div>
        </div>
        <div className="additional-radio-div">
          <Switch className="switch add" />
          <div>
            <h5>Cargo Insurance</h5>
            <p>Protect your cargo from logistics risks up to its full vaue.</p>
          </div>
        </div>
      </div>
      <div className="additional-second-roll">
        <div className="additional-radio-div">
          <Switch className="switch add" />
          <div>
            <h5>Import Customs Clearance</h5>
            <p>We handle import customs and regulatory requirments.</p>
          </div>
        </div>
        <div className="additional-radio-div">
          <Switch className="switch add" />
          <div>
            <h5>Transport / Delivery</h5>
            <p>We deliver the cargo to your door step from the ports.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Additional;