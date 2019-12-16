import React from "react";
import { Button } from "react-bootstrap";
import { useGameState, useGameDispatch } from "../context/gameContext";

function ResultsPanel(props) {
  const dispatch = useGameDispatch();
  const { health, currentEvent, chosenSolution, turn } = useGameState();

  const handleContinue = () => {
    dispatch({ type: "setChosenSolution", payload: null });
    if (turn < 5 && health > 50) {
      dispatch({ type: "showGame" });
    } else {
      dispatch({ type: "showEnd" });
    }
  };

  return currentEvent ? (
    <div className="results-panel panel">
      <h2>
        The <span className="red">{currentEvent.name}</span> took{" "}
        <span className="red">{currentEvent.damage} points</span>
      </h2>
      <h2>
        Your <span className="green">{chosenSolution.name}</span> saved{" "}
        <span className="green">
          {currentEvent.solutionId === chosenSolution.id
            ? currentEvent.damage - 5
            : 0}{" "}
          points
        </span>
      </h2>
      <br />
      <h2>Total Damage:</h2>
      <h2 className="red">
        {currentEvent.solutionId === chosenSolution.id
          ? 5
          : currentEvent.damage}{" "}
        points
      </h2>
      <br />
      <Button variant="success" onClick={handleContinue}>
        Continue
      </Button>
    </div>
  ) : null;
}

export { ResultsPanel };
