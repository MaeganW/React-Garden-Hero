import React from "react";
import { Button } from "react-bootstrap";

function EndPanel(props) {
  const { setShowEnd, setShowGame } = props;
  const score = 45;

  const playAgain = () => {
    // reset score
    setShowEnd(false);
    setShowGame(true);
  };
  return (
    <div className="end-panel panel">
      <h1>Final Score</h1>
      <h2>{score}</h2>
      <h2>You {score > 50 ? "Win" : "Lose"}</h2>
      <Button onClick={handlePlayAgain}>Play Again</Button>
    </div>
  );
}

export default EndPanel;
