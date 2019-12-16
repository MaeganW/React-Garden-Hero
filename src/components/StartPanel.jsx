import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useGameDispatch } from "../context/gameContext";

function StartPanel(props) {
  const history = useHistory();
  const dispatch = useGameDispatch();

  useEffect(() => {
    dispatch({ type: "setTurn", payload: 0 });
    dispatch({ type: "setHealth", payload: 100 });
  }, []);

  return (
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
      <p>If your plant's health drops below 50, you lose.</p>
      <p>Choose wisely.</p>
      <Button onClick={() => history.push("/game")} variant="success">
        Start Game
      </Button>
    </div>
  );
}

export default StartPanel;
