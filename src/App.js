import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Form from "./components/Form";
import Pokemon from "./components/Pokemon";
import React, { Component } from "react";

// import "./Login.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "Lourdes",
      password: "Jordan",
    };
  }

  // validateUser = () => {
  //   // let steve = console.log("hello");
  //   this.state.username && this.state.password === formInputs ? return true : retur
  //   return steve;
  // };

  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <Form validateUser={this.validateUser} />
        {/* <Pokemon /> */}
      </div>
    );
  }
}

export default App;
