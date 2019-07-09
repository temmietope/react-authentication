import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  async onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
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
          alert("User does not exist. Register");
        }
        localStorage.setItem("authToken", res.token);
        this.props.history.push("/profile");
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
        <input type="email" ref="email" onChange={this.onChange} />
        <h4>Password</h4>
        <input type="password" ref="password" onChange={this.onChange} />
        <div className="submit">
          <input type="submit" value="Submit" className="btn" />
        </div>
      </form>
    );
  }
}

export default Login;
