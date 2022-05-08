import React from "react";
import "../signIn/signIn.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate("");
  const {
    register,
    handleSubmit,
    formState: { errors }
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

  function onSubmit(data) {
    const savedUsers = localStorage.getItem("users");

    const users = savedUsers ? JSON.parse(savedUsers) : [];

    const isNew = users.every((user) => user.email !== data.email);

    if (!isNew) {
      alert("User already exists");
      navigate('/login');
      return;
    }

    const user = {
      id: generateId(),
      password: data.password,
      email: data.email,
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));
    navigate('/login');
  }

  return (
    <div className="wrapp">
      <div className="sigIn-wrapp">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="sigIn-wrapp__input"
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
            className="sigIn-wrapp__input"
            placeholder="Enter your password"
            type="password"
            id="password"
            name="password"
            {...register("password", {
              required: "This is required",
              minLength: {
                value: 5,
                message: "Min length must be 5",
              },
            })}
          />
          <div>
            {errors?.password && (
              <p>{errors?.password?.message || "This is required"}</p>
            )}
          </div>
          <input
            type="submit"
            className="sigIn-wrapp__button"
            value="Sign In"
          />
        </form>
      </div>
    </div>
  );
}
