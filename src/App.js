import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Route exact path="/" component={Register} />
          <Route path="/login" component={Login} />
        </>
      </Router>
    </div>
  );
}

export default App;
