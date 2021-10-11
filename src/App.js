import React from "react";
import "./style.css";
import Header from "./Container/Header.js";
import Service from "./Container/service.js";
import Additional from "./Container/Additional.js";
import Info from "./Container/Info.js";
import Details from "./Container/Details.js";


export default function App() {
  return (
    <div className="container">
      <Header />
      <form className="form">
        <h2 className="intro">New Booking</h2>
        <p className="instruction">Fill in the information below to get a quote or create a new booking</p>
        <Service />
        <Info />
        <Details />
        <Additional />
      </form>
    </div>
  );
}
