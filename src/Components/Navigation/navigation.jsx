import React from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";

export default function Navigation() {
  return (
    <nav className="nav">
      <Link to="../login">Have account? Please Log In</Link>
      <Link to="../SignIn">Don't have an accout? Please Sign In</Link>
    </nav>
  );
}
