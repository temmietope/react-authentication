import React, { Component } from "react";
import {Link} from "react-router-dom";

class Profile extends Component {
  state = {
    user: ""
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
        console.log(this.state);
      });
  }
  renderNewUser = () => {
    const { user } = this.state;
    return (
      <main>
        <section>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Address: {user.address}</p>
          <p>Email: {user.email}</p>
        </section>
        <Link to="/update">Update profile?</Link>
      </main>
    );
  };
  renderLoading() {
    return <div>Loading...</div>;
  }
  render() {
    return (
      <div>
        {this.state.user ? this.renderNewUser() : this.renderLoading()}
      </div>
    );
  }
}
export default Profile;
