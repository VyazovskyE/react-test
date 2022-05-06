import React from "react";
import "../Login/form.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: onSubmit,
  });

  const generateId = () => {
    let array = new Uint32Array(8);
    window.crypto.getRandomValues(array);
    let str = "";
    for (let i = 0; i < array.length; i++) {
      str += (i < 2 || i > 5 ? "" : "-") + array[i].toString(16).slice(-4);
    }
    return str;
  };

  function Save(string = "", value) {
    localStorage.setItem(string, value);
  }

  function onSubmit(data) {
    Save("email", data.email);
    Save("password", data.password);
    Save("id", generateId());
    reset()
    navigate('/login')
  }

  return (
    <div className="wrapper">
      <div className="content-wrapp">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="content-wrapp__input"
            placeholder="Enter your email"
            type="email"
            id="email"
            name="email"
            {...register("email", {
              required: "This is required",
            })}
          />
          <div>
            {errors?.email && (
              <p>{errors?.email?.message || "This is required"}</p>
            )}
          </div>
          <input
            className="content-wrapp__input"
            placeholder="Enter your password"
            type="password"
            id="password"
            name="password"
            {...register("password", {
              required: "This is required",
              minLength: {
                value: 8,
                message: "Min length must be 8",
              },
            })}
          />
          <div>
            {errors?.password && (
              <p>{errors?.password?.message || "This is required"}</p>
            )}
          </div>
            <input type='submit' className='content-wrapp__button' value='Sign In'/>
        </form>
      </div>
    </div>
  );
}
