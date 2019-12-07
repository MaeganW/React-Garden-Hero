import React from "react";
import { Button } from "react-bootstrap";

function ResultsPanel(props) {
  const { setShowResults, setShowGame, setShowEnd } = props;

  const currentEvent = {
    name: "Groundhog Menace",
    unmitigatedDamage: 20,
    mitigatedDamage: 5,
    solutionId: 5
  };

  const chosenSolution = {
    name: "chicken wire fence",
    id: 5
  };

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
