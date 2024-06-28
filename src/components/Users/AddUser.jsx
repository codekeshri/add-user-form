import React from "react";
import { useState, Fragment } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(); //state is null initially
  function userHandler(event) {
    event.preventDefault();
    if (!name.trim().length && !age.trim().length) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });

      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser({ name, age }); // updates the state in App.js/parent component
    setName("");
    setAge("");
  }
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className="input">
        <form action="">
          <h1 style={{ marginLeft: "40%" }}>Ok Google</h1>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
              value={name}
              className="form-control"
            />
            <input
              type="number"
              placeholder="Age"
              onChange={(event) => setAge(event.target.value)}
              value={age}
              className="form-control"
            />
            <Button onClick={userHandler}>Add User</Button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
