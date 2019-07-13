import React, { Component } from "react";

class UpdateProfile extends Component {
  state = {
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
        this.setState({
          name: res.name,
          username: res.username,
          email: res.email,
          address: res.address
        });
        console.log(this.state);
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
    if (
      !this.refs.name.value ||
      !this.refs.username.value ||
      !this.refs.email.value ||
      !this.refs.address.value
    ) {
      return alert("Fill all the required boxes");
    }
    console.log(name, username, email, address);
    await fetch("https://authuserapi.herokuapp.com/profile/update", {
      method: "post",
      headers: {
        Authorization: `${localStorage.getItem("authToken")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        username,
        email,
        address
      })
    }).then(() => {
      alert("Updated Successfully");
      this.props.history.push("/profile");
    });
  }
  render() {
    const { name, username, address, email } = this.state;
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
            value={name}
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
            value={username}
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
            value={email}
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
            value={address}
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
