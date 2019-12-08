import React from "react";
import { Button } from "react-bootstrap";

function EndPanel(props) {
  const { setShowEnd, setShowGame, health, setHealth, setTurn } = props;

  const handlePlayAgain = () => {
    setTurn(0);
    setHealth(100);
    setShowEnd(false);
    setShowGame(true);
  };

  return (
    <div className="end-panel panel">
      <h1>Final Score</h1>
      <h2>{health}</h2>
      <h2>You {health > 50 ? "Win" : "Lose"}</h2>
      <Button onClick={handlePlayAgain}>Play Again</Button>
    </div>
  );
}

export default EndPanel;
