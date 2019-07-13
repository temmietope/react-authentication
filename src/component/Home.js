import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  register = (email, password) => {
    console.log(email, password);
  };
  render() {
    return (
      <>
        <h4>
          Have an account? <Link to="/login">Sign In</Link>
        </h4>
        <h4>
          First timer? <Link to="/register">Sign Up</Link>
        </h4>
      </>
    );
  }
}

export default Home;
