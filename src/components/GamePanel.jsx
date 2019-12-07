import React from "react";
import { Button } from "react-bootstrap";

function GamePanel(props) {
  const { setShowGame, setShowResults } = props;

  const handleEndTurn = () => {
    setShowGame(false);
    setShowResults(true);
  };

  return (
    <div className="game-panel panel">
      <div className="game-panel__top" />
      <div className="game-panel__middle" />
      <div className="game-panel__bottom" />
      <Button onClick={handleEndTurn} variant="success">
        End Turn
      </Button>
    </div>
  );
}

export default GamePanel;
