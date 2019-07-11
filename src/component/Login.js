import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: ""
  };
  renderLoading() {
    return <div>Logging in...</div>;
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  async onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ isSubmitting: true });
    console.log(email)
    await fetch("https://authuserapi.herokuapp.com/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (!res.success) {
          return this.setState({
            errorMessage: "User does not exist. Register",
            isSubmitting: false
          });
        }
        localStorage.setItem("authToken", res.token);
        this.props.history.push("/profile");
      })
      .catch(e => {
        console.log(e);
        // this.setState({ errorMessage: e });
      });
  }
  render() {
    return (
      <form
        onSubmit={e => {
          this.onSubmit(e);
        }}
      >
        <h4>Email</h4>
        <input type="email" ref="email" name="email" onChange={this.onChange} />
        <h4>Password</h4>
        <input type="password" ref="password" name="password" onChange={this.onChange} />
        <div className="submit">
          <input type="submit" value="Submit" className="btn" />
        </div>
        <div className="message">
          {this.state.isSubmitting ? "Checking details...." : ""}
        </div>
        <div className="errorMessage">{this.state.errorMessage}</div>
      </form>
    );
  }
}

export default Login;
