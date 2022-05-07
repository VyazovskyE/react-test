import React from "react";
import { useState } from "react";
import "./form.scss";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function submit(event) {
    console.log("submit");

    // TODO: Validate email and password
    const id = "123123";

    console.log("submit");

    login(id);
    navigate("/dashboard");
  }

  return (
    <div className="wrapper">
      <div className="content-wrapp">
        <form onSubmit={handleSubmit(submit)}>
          <input
            className="content-wrapp__input"
            placeholder="EMAIL"
            name="email"
            type="email"
            id="email"
            {...register("email", {
              required: "This is required",
            })}
          />
          <input
            className="content-wrapp__input"
            placeholder="Password"
            name="password"
            type="password"
            id="password"
            {...register("password", {
              required: "This is required",
            })}
          />
          <input
            className="content-wrapp__button"
            type="submit"
            value="Log In"
          />
        </form>
      </div>
    </div>
  );
}
