import React, { Component } from "react";
import Pokemon from "./Pokemon";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  login = () => {
    let username = this.state.username;
    let password = this.state.password;
    if (this.props.validateUser(username, password)) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    if (this.login()) {
      return <Pokemon />;
    } else {
      return (
        <div className="inputs">
          <label>Email address or username</label>
          <input
            className="input-boxes"
            onChange={this.handleChange}
            name="username"
            value={this.state.username}
            type="text"
            placeholder="Email address or username"
          />

          <label>Password</label>
          <input
            className="input-boxes"
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
            type="text"
            placeholder="Password"
          />

          {/* <a href="">Forget your password?</a>
                <label>Remember me</label>
                <input type="checkbox" /> */}
          <button onClick={this.login}>Log in</button>
        </div>
      );
    }
  }
}

export default Form;
