import React from "react";
import { GamePanel } from "../GamePanel";
import { ResultsPanel } from "../ResultsPanel";
import { EndPanel } from "../EndPanel";
import { getSolutions } from "../../services/SolutionService";
import { getEvents } from "../../services/EventService";
import { useGameState } from "../../context/gameContext";

function GamePage(props) {
  const { showGame, showResults, showEnd } = useGameState();
  const solutions = getSolutions();
  const events = getEvents();

  const gameProps = {
    events,
    solutions
  };

  return (
    <React.Fragment>
      {showGame ? <GamePanel {...gameProps} /> : null}
      {showResults ? <ResultsPanel /> : null}
      {showEnd ? <EndPanel /> : null}
    </React.Fragment>
  );
}

export { GamePage };
