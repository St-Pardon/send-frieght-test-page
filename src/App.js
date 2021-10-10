import React from "react";
import "./style.css";
import Header from "./Container/Header.js"
import Service from "./Container/service.js"
import Switch from "./components/switch.js"

export default function App() {
  return (
    <div>
      <Header />
      <form>
        <Service />
        <Switch />
      </form>
    </div>
  );
}
