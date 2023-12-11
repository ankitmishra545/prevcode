import React, { Component } from 'react'

export default class LoginPage extends Component {
    
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      email: "",
    //      password: ""
    //   };
    // };

    user = {
        name: "Ankit",
        password: "1234",
        email: "ankit@mail.com",
        city: "hyderabad"
    }

    state = {
        email:"",
        password:""
    }

    validateLogin = () => {
        if(this.state.email === this.user.email && this.state.password === this.user.password){
        }
    }
    
    storeEmail = (event) => {
        this.setState({email: event.target.value});
    }

    storePassword = (event) => {
        this.setState({password: event.target.value});
    }

  render() {

    console.log(this.state.email);
    
    return (
        <div>
          <div></div>
          <form>
              <div>
                  <label>Email: </label>
                  <input type='text' onBlur={this.storeEmail}></input>
              </div>
              <div>
                  <label>Password: </label>
                  <input type='password' onBlur={this.storePassword}></input>
              </div>
              <button type='button' onClick={this.validateLogin}>Sign In</button>
          </form>
        </div>
    )
  }
}
