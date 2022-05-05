import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../Login/form.scss";
// import Dashboard from "../Dashboard/dashboard";

export default function SignIn() {
  const [data, setData] = useState("");
  const { register, handleSubmit } = useForm("");

  const submit = handleSubmit((data) => {
    var ID = () => {
      let array = new Uint32Array(8);
      window.crypto.getRandomValues(array);
      let str = "";
      for (let i = 0; i < array.length; i++) {
        str += (i < 2 || i > 5 ? "" : "-") + array[i].toString(16).slice(-4);
      }
      return str;
    };

    setData(JSON.stringify(data));
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
    localStorage.setItem("ID", ID())
  });

  return (
    <div className="wrapper">
      <div className="content-wrapp">
        <form onSubmit={submit}>
          <input
            {...register("email")}
            className="content-wrapp__input"
            placeholder="EMAIL"
            type="email"
            name="email"
          ></input>
          <input
            {...register("password")}
            className="content-wrapp__input"
            placeholder="Password"
            minLength='8'
            type="password"
            name="password"
          ></input>
          <button className="content-wrapp__button" type="submit">
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
}
