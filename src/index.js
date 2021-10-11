import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faPlane, faTruck, faMapMarkerAlt, faInfoCircle, faUserTie, faArrowLeft, faShip, faCalendar } from '@fortawesome/free-solid-svg-icons'


library.add(faSearch, faPlane, faMapMarkerAlt, faInfoCircle, faTruck, faArrowLeft, faUserTie, faShip, faCalendar )

ReactDOM.render(<App />, document.getElementById("root"));
