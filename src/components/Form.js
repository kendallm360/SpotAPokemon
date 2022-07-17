import React, { Component } from "react";
import Pokemon from "./PokemonBucket";
import Header from "./Header";
import OptionalLogins from "./OptionalLogins";
import { Route } from "react-router-dom";

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
    // event.preventDefault();
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
      return (
        <div>
          <Header />
          <Pokemon />
        </div>
      );
    } else {
      return (
        <div className="inputs">
          <Header />
          <OptionalLogins />
          <label className="email">Email address or username</label>
          <input
            className="input-boxes"
            onChange={this.handleChange}
            name="username"
            value={this.state.username}
            type="text"
            placeholder="Email address or username"
          />
          <label className="password">Password</label>
          <input
            className="input-boxes"
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
            type="password"
            placeholder="Password"
          />

          <a href="">Forget your password?</a>
          <div className="login-interaction">
            <input type="checkbox" />
            <label className="remember-me">Remember me</label>
            <button
              className="login-button"
              onClick={() => {
                this.login();
              }}
            >
              Log in
            </button>
          </div>

          <p>Dont have an account</p>
          <button className="spotify-button">Signup for spotify</button>
        </div>
      );
    }
  }
}

export default Form;
