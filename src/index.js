import React from "react";
import ReactDOM from "react-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faPlane, faTruck, faMapMarkerAlt, faInfoCircle, faUserTie, faShip } from '@fortawesome/free-solid-svg-icons'

import App from "./App";

library.add(faSearch, faPlane, faMapMarkerAlt, faInfoCircle, faTruck, faUserTie, faShip )

ReactDOM.render(<App />, document.getElementById("root"));
