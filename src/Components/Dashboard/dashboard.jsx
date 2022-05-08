import React from "react";
import "./dashboard.scss";
import { useForm } from "react-hook-form";

export default function Dashboard() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      password: "",
      name2: "",
      password2: ""
    },
  });

  const keyGenerator = () => {
    let array = new Uint32Array(8);
    window.crypto.getRandomValues(array);
    let str = "";
    for (let i = 0; i < array.length; i++) {
      str += (i < 2 || i > 5 ? "" : "-") + array[i].toString(16).slice(-2);
    }
    return str;
  };

  const user = localStorage.getItem("user");

  const savedItems = localStorage.getItem(`${user}items`);

  function addNewItem(data) {
    const items = savedItems ? JSON.parse(savedItems) : [];

    const newItem = items.every(
      (item) => item.name !== data.name && item.id !== data.id
    );

    if (!newItem) {
      alert("Item already exists");
      return;
    }

    const item = {
      name: data.name,
      password: data.password,
      id: keyGenerator(),
    };

    (item.name && item.password) !== ""
      ? items.push(item)
      : alert("Please write something at name");
    localStorage.setItem(`${user}items`, JSON.stringify(items));
    reset();
  }

  function editItem(data) {
    const items = JSON.parse(savedItems);
    const item = {
      name: items.name,
      password: items.password,
    };

      item.name = data.name2;
      item.password = data.password2;
      console.log(items);

    items.push(item)
  }


  const getItems = savedItems ? JSON.parse(savedItems) : [""];

  const ElementsCreate = getItems.map((item) =>
    getItems ? (
      <div key={keyGenerator} className="container" id={item.id}>
        <p>{item.name}</p>
        <p>{item.password}</p>
        <form onSubmit={handleSubmit(editItem)}>
          <input type="text" placeholder="Edit name" {...register("name2")} />
          <input
            type="text"
            placeholder="Edit password"
            {...register("password2")}
          />
          <button type="submit">Save</button>
        </form>
        <button id={item.id}>Delete</button>
      </div>
    ) : (
      alert("You dont have any elements, create new!")
    )
  );

  return (
    <div className="dashboard-wrapp">
      <div className="form-wrapp">
        <form
          action="submit"
          className="form"
          onSubmit={handleSubmit(addNewItem)}
        >
          <input
            type="text"
            className="form__input"
            name="name"
            placeholder="Enter name of your tab"
            {...register("name")}
          />
          <input
            type="password"
            className="form__input"
            name="password"
            placeholder="Enter password of your tab"
            {...register("password")}
          />
          <input
            type="submit"
            value="Add new item"
            className="form__button--add"
          />
        </form>
      </div>
      <div className="items-container">{ElementsCreate}</div>
    </div>
  );
}
