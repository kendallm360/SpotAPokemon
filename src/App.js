import "./App.css";
import Form from "./components/Form";
import React, { Component } from "react";
import { Route } from "react-router-dom";
// import Login from "./components/Login";
// import OptionalLogins from "./components/OptionalLogins";
// import Pokemon from "./components/Pokemon";
// import Header from "./components/Header";

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
      <Form validateUser={validateUser} />
    </div>
  );
};
export default App;
