import "./styles.css";
import React from "react";
import Login from "./login";
import Space from "./space";
import Logo from "./logo";
import Space2 from "./space-2";

export default function App() {
  return (
    <div className="App">
      <Space />
      <Logo />
      <Space2 />
      <Login />
    </div>
  );
}
