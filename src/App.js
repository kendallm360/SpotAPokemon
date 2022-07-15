import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Form from "./components/Form";
import Pokemon from "./components/Pokemon";
import React, { Component } from "react";

// import "./Login.css"

const App = () => {
  let validateUser = (username, password) => {
    if (password === "jordan" && username === "lourdes") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="App">
      {/* <Login /> */}
      <Form validateUser={validateUser} />
      {/* <Pokemon /> */}
    </div>
  );
};

// class App extends Component {
// constructor() {
//   super();
//   this.state = {
//     username: "",
//     password: "",
//   };
// }

export default App;
