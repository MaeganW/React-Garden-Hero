import React from "react";
import { Button } from "react-bootstrap";
import { useGameState, useGameDispatch } from "../context/gameContext";

function EndPanel(props) {
  const { health } = useGameState();
  const dispatch = useGameDispatch();

  const handlePlayAgain = () => {
    dispatch({ type: "setTurn", payload: 0 });
    dispatch({ type: "setHealth", payload: 100 });
    dispatch({ type: "showGame" });
  };

  return (
    <div className="end-panel panel">
      <h2 className="green">Final Score</h2>
      <h2>{health}</h2>
      {health > 50 ? (
        <h2 className="green">You Win</h2>
      ) : (
        <h2 className="red">You Lose</h2>
      )}
      <Button onClick={handlePlayAgain}>Play Again</Button>
    </div>
  );
}

export { EndPanel };
