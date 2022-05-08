import React from "react";
import "./form.scss";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function submit(data) {
    const savedUsers = localStorage.getItem("users");
    const users = savedUsers ? JSON.parse(savedUsers) : [];

    const user = users.find((user) => user.email === data.email && user.password === data.password);
    if (!user) {
      alert("Email or password is incorrect");
      return;
    }

    login(user.id);
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