import React from "react";
import { Button } from "react-bootstrap";
import { useGameState, useGameDispatch } from "../context/gameContext";

function StartPanel(props) {
  const { showStart } = useGameState();
  const dispatch = useGameDispatch();

  return showStart ? (
    <div className="start-panel panel">
      <h1 className="green">Rules</h1>
      <p>
        You own a small garden in an unpredictable and sometimes inhospitable
        environment.
      </p>
      <p>
        Between now and harvest several unexpected events are likely to occur.
      </p>
      <p>
        You will be given several tools to combat each event, but may only
        select one.
      </p>
      <p>If your plant's health drops below 50 by the end, you lose.</p>
      <p>Choose wisely.</p>
      <Button onClick={() => dispatch({ type: "showGame" })} variant="success">
        Start Game
      </Button>
    </div>
  ) : null;
}

export default StartPanel;
