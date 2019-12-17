import React from "react";
import { Spinner } from "react-bootstrap";

function GameSpinner(props) {
  return (
    <div className="spinner__container">
      <Spinner animation="border" variant="success" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export { GameSpinner };
