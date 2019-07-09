import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";

import Register from "./component/Register";
import Login from "./component/Login";
import Profile from "./component/Profile";


function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />

        </>
      </Router>
    </div>
  );
}

export default App;
