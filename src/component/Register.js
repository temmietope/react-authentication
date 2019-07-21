import React, { Component } from "react";

class Register extends Component {
  state = {
    name: "",
    username: "",
    password: "",
    email: "",
    address: "",
    isRegistering: false
  };
  componentDidMount() {
    console.log(this.props.history);
  }
  renderLoading() {
    return <div>Loading...</div>;
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  async onSubmit(e) {
    e.preventDefault();
    const { name, username, password, email, address } = this.state;
    if (
      !this.refs.name.value ||
      !this.refs.username.value ||
      !this.refs.password.value ||
      !this.refs.email.value ||
      !this.refs.address.value
    ) {
      return alert("Fill all the required boxes");
    }
    await fetch("https://authuserapi.herokuapp.com/register", {
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
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.success) {
          this.props.history.push("/login");
        } else {
          return alert("user already exists!");
        }
      });
  }
  render() {
    return (
      <>
        <h3>SignUp</h3>
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
              name="username"
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
      </>
    );
  }
}
export default Register;
