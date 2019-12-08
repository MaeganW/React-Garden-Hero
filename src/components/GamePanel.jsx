import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

function GamePanel(props) {
  const {
    setShowGame,
    setShowResults,
    currentEvent,
    health,
    turn,
    setTurn,
    solutions,
    setChosenSolution
  } = props;

  useEffect(() => setTurn(turn + 1), []);

  const handleEndTurn = () => {
    setShowGame(false);
    setShowResults(true);
  };

  const handleSelectSolution = solution => setChosenSolution(solution);

  return (
    <div className="game-panel panel">
      <div className="game-panel__top">
        <div className="game-panel__event">
          <h2>Current Event</h2>
          <p>{currentEvent}</p>
        </div>
      </div>
      <div className="game-panel__middle">
        <div className="game-panel__health">
          <h2>Health</h2>
          <p>{health}</p>
        </div>
      </div>
      <div className="game-panel__bottom">
        <div className="game-panel__solutions">
          <h2>Choose Wisely</h2>
          {/* {solutions.map(s => (
            <input onChange={handleSelectSolution(s)} type="radio" key={s.id}>
              {s.name}
            </input>
          ))} */}
        </div>
      </div>
      <Button onClick={handleEndTurn} variant="success">
        End Turn {turn}
      </Button>
    </div>
  );
}

export default GamePanel;
