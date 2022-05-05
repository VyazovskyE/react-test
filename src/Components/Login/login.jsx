import React from "react";
import { useState } from "react";
import "./form.scss";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();


  function submit(event) {
    event.preventDefault();

    // TODO: Validate email and password
    const id = '123123'

    console.log('submit')

    login(id);
    navigate('/dashboard')
  }

  return (
    <div className="wrapper">
      <div className="content-wrapp">
        <form>
          <input
            className="content-wrapp__input"
            placeholder="EMAIL"
            name="email"
            type="email"
            value={email}
            onChange={function (e) {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            className="content-wrapp__input"
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={function (e) {
              setPassword(e.target.value);
            }}
          ></input>
          <button className="content-wrapp__button" onClick={submit}>
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}
