import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

const AddUser = ({ onAddUser }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    if (
      username.trim().length === 0 ||
      age.trim().length === 0 ||
      +age < 1 ||
      !isNaN(username.trim())
    ) {
      setError({
        title: "An Error occured!",
        message: "Something went wrong",
      });
      return;
    }

    onAddUser(username, age);
    console.log(username + " " + age);
    setUsername("");
    setAge("");
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const confirmHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={confirmHandler}
        />
      )}
      <Card>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={ageChangeHandler}
          />
          <button type="submit">Add User</button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
