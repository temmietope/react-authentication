import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <form
        onSubmit={() => {
          this.onSubmit();
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
        <div className="occupation">
          <h4>
            Occupation: <span style={{ color: "red" }}>*</span>
          </h4>
          <input
            type="text"
            name="occupation"
            placeholder="Occupation"
            ref="occupation"
            onChange={this.onChange}
          />
        </div>
        <div className="company">
          <h4>
            Company: <span style={{ color: "red" }}>*</span>
          </h4>
          <input
            type="text"
            name="company"
            placeholder="Company"
            ref="company"
            onChange={this.onChange}
          />
        </div>
        <div className="role">
          <h4>
            Role: <span style={{ color: "red" }}>*</span>
          </h4>
          <input
            type="text"
            name="role"
            placeholder="Role"
            ref="role"
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
export default Register;
