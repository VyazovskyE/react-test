import React from "react";
import { useState } from "react";
import "./form.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(event) {
    event.preventDefault();

    var ID = () => {
      let array = new Uint32Array(8);
      window.crypto.getRandomValues(array);
      let str = "";
      for (let i = 0; i < array.length; i++) {
        str += (i < 2 || i > 5 ? "" : "-") + array[i].toString(16).slice(-4);
      }
      return str;
    };
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("ID", ID());
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
