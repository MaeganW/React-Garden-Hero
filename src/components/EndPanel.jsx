import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useGameState, useGameDispatch } from "../context/gameContext";

function EndPanel(props) {
  const { health } = useGameState();
  const dispatch = useGameDispatch();
  const history = useHistory();

  const handlePlayAgain = () => {
    dispatch({ type: "resetGame" });
    dispatch({ type: "showGame" });
  };

  const handleChangeDifficulty = () => {
    dispatch({ type: "resetGame" });
    history.push("/");
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
      <Button onClick={handleChangeDifficulty}>Change Difficulty</Button>
    </div>
  );
}

export { EndPanel };
