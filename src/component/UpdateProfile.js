import React, { Component } from "react";

class UpdateProfile extends Component {
  state = {
    user: {},
    name: "",
    username: "",
    email: "",
    address: ""
  };
  async componentDidMount() {
    await fetch("https://authuserapi.herokuapp.com/profile", {
      method: "get",
      headers: {
        Authorization: `${localStorage.getItem("authToken")}`
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ user: res });
      });
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  async onSubmit(e) {
    e.preventDefault();
    const { name, username, email, address } = this.state;
    await fetch("https://authuserapi.herokuapp.com/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        username,
        email,
        address
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.success)
          res.success
            ? this.props.history.push("/login")
            : alert("user already exists!");
      });
  }
  render() {
    return (
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
    );
  }
}

export default UpdateProfile;
