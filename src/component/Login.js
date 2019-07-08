import React, {Component} from "react";

class Login extends Component{
    // async onSubmit(){
    //     const response = await fetch("https://authuserapi.herokuapp.com/register", {
    //         method: "post",
    //         headers: {
    //           Authorization: `${localStorage.setItem("authToken")}`,
    //           "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //           name,
    //           username,
    //           password,
    //           email,
    //           address,
              
    //         })
    //       }).then(res => res.json());
    // }
    
    render(){
        return(
            <form onSubmit={(e) => {
                this.onSubmit(e);
              }}>
                
                <h4>Email</h4>
                <input type="email"/>
                <h4>Password</h4>
                <input type="password"/>
                
            </form>
        )
    }
}

export default Login