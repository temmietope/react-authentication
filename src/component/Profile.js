import React, { Component } from "react";

class Profile extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    address: ""
  };
  async componentDidMount() {
    const user = await fetch("https://authuserapi.herokuapp.com/profile", {
      method: "get",
      headers: {
        Authorization: `${localStorage.getItem("authToken")}`
      }
    }).then(res => res.json());
    console.log(user);
  }
  render() {
    return <>Name: UserName: Email: Address:</>;
  }
}
export default Profile;
