import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {
    name: "",
    username: "",
    password: "",
    email: "",
    address: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  async onSubmit(e) {
    e.preventDefault();
    const { name, username, password, email, address } = this.state;
    this.props.register(email, password);
    const response = await fetch("https://authuserapi.herokuapp.com/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        username,
        password,
        email,
        address
      })
    }).then(res => res.json());
    console.log(response);
    // if (
    //   !this.refs.name.value ||
    //   !this.refs.username.value ||
    //   !this.refs.password.value ||
    //   !this.refs.email.value ||
    //   !this.refs.address.value ||
    //   !this.refs.occupation.value ||
    //   !this.refs.company.value ||
    //   !this.refs.role.value
    // ) {
    //   return alert("Fill all the required boxes");
    // }
  }
  render() {
    return (
      <>
        <form
          onSubmit={e => {
            this.onSubmit(e);
          }}
        >
          <div className="name">
            <h4>
              Name: <span style={{ color: "red" }}>*</span>
            </h4>
            <input
              type="text"
              name="name"
              placeholder="Name"
              ref="name"
              onChange={this.onChange}
            />
          </div>

          <div className="username">
            <h4>
              Username: <span style={{ color: "red" }}>*</span>
            </h4>
            <input
              type="text"
              name="user-name"
              placeholder="Username"
              ref="username"
              onChange={this.onChange}
            />
          </div>
          <div className="password">
            <h4>
              Password: <span style={{ color: "red" }}>*</span>
            </h4>
            <input
              type="password"
              name="password"
              placeholder="Password"
              ref="password"
              onChange={this.onChange}
            />
          </div>
          <div className="confirm-password">
            <h4>
              Comfirm password: <span style={{ color: "red" }}>*</span>
            </h4>
            <input
              type="password"
              name="confirm-password"
              placeholder="Re-enter your pPassword"
              ref="confirm-password"
              onChange={this.onChange}
            />
          </div>
          <div className="email">
            <h4>
              Email: <span style={{ color: "red" }}>*</span>
            </h4>
            <input
              type="email"
              name="email"
              placeholder="Email"
              ref="email"
              onChange={this.onChange}
            />
          </div>
          <div className="address">
            <h4>
              Address: <span style={{ color: "red" }}>*</span>
            </h4>
            <input
              type="text"
              name="address"
              placeholder="Your address"
              ref="address"
              onChange={this.onChange}
            />
          </div>
          <div className="submit">
            <input type="submit" value="Submit" className="btn" />
          </div>
        </form>
        <Link to="/login">Login</Link>
      </>
    );
  }
}
export default Register;