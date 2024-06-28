import React from "react";
import Button from "./Button";
import Card from "./Card";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm}>
        <Card className={""}>
          <header className="header">
            <h1>{props.title}</h1>
          </header>
          <div className="content">{props.message}</div>
          <footer>
            <Button className="actions" onClick={props.onConfirm}>
              Okay
            </Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
