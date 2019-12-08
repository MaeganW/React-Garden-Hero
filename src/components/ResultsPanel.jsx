import React from "react";
import { Button } from "react-bootstrap";

function ResultsPanel(props) {
  const {
    setShowResults,
    setShowGame,
    setShowEnd,
    currentEvent,
    chosenSolution
  } = props;

  const pointsSaved =
    currentEvent.solutionId === chosenSolution.id
      ? currentEvent.unmitigatedDamage - currentEvent.mitigatedDamage
      : 0;

  return (
    <div className="results-panel panel">
      <h1>
        The {currentEvent.name} took {currentEvent.unmitigatedDamage} points
      </h1>
      <h1>
        Your {chosenSolution.name} saved {pointsSaved} points
      </h1>
      <Button variant="success">Continue</Button>
    </div>
  );
}

export default ResultsPanel;
