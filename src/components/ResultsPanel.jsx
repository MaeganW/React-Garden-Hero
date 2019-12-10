import React from "react";
import { Button } from "react-bootstrap";

function ResultsPanel(props) {
  const {
    setShowResults,
    setShowGame,
    setShowEnd,
    currentEvent,
    chosenSolution,
    setChosenSolution,
    turn
  } = props;

  const pointsSaved =
    currentEvent.solutionId === chosenSolution.id ? currentEvent.damage - 5 : 0;

  const damageDealt =
    currentEvent.solutionId === chosenSolution.id ? 5 : currentEvent.damage;

  const handleContinue = () => {
    setChosenSolution(null);
    if (turn < 4) {
      setShowGame(true);
    } else {
      setShowEnd(true);
    }
    setShowResults(false);
  };

  return (
    <div className="results-panel panel">
      <h2>
        The <span className="red">{currentEvent.name}</span> took{" "}
        <span className="red">{currentEvent.damage} points</span>
      </h2>
      <h2>
        Your <span className="green">{chosenSolution.name}</span> saved{" "}
        <span className="green">{pointsSaved} points</span>
      </h2>
      <br />
      <h2>Total Damage:</h2>
      <h2 className="red">{damageDealt} points</h2>
      <br />
      <Button variant="success" onClick={handleContinue}>
        Continue
      </Button>
    </div>
  );
}

export default ResultsPanel;
