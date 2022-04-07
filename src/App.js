import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Auth from "./routes/Auth"
import Home from "./routes/Home"
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return(
    <Router>
      <Routes>
      { isLoggedIn ? 
        <Route  exact={true}  path="/" element={<Home/>}/>
        :
        <Route  exact={true}  path="/" element={<Auth/>}/>
        }
      </Routes>
    </Router>
  )
}

export default App;

