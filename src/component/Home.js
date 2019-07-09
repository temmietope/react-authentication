import React, { Component } from "react";
import Register from "./Register";

class Home extends Component {
  register = (email, password) => {
    console.log(email, password);
  };
  render() {
    return (
      <>
        <Register register={this.register} {...this.props} />
      </>
    );
  }
}

export default Home;
