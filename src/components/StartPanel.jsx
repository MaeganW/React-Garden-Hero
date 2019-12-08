import React from "react";
import { Button } from "react-bootstrap";

function StartPanel(props) {
  const { setShowStart, setShowGame } = props;

  const handleStart = () => {
    setShowStart(false);
    setShowGame(true);
  };

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
      <p>If you plant's health drops below 50, you lose.</p>
      <p>Choose wisely.</p>
      <Button onClick={handleStart} variant="success">
        Start Game
      </Button>
    </div>
  );
}

export default StartPanel;
