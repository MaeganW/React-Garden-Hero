import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import StartPanel from "./components/StartPanel";
import GamePanel from "./components/GamePanel";
import ResultsPanel from "./components/ResultsPanel";
import EndPanel from "./components/EndPanel";
import { getSolutions } from "./services/SolutionService";
import { getEvents } from "./services/EventService";

function App() {
  const [showStart, setShowStart] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  const [health, setHealth] = useState(100);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [chosenSolution, setChosenSolution] = useState(null);
  const [turn, setTurn] = useState(0);

  const solutions = getSolutions();
  const events = getEvents();

  const startProps = {
    setShowStart,
    setShowGame
  };

  const gameProps = {
    setShowGame,
    setShowResults,
    events,
    currentEvent,
    setCurrentEvent,
    health,
    turn,
    setTurn,
    setChosenSolution,
    solutions
  };

  const resultsProps = {
    setShowResults,
    setShowGame,
    setShowEnd
  };

  const endProps = {
    setShowEnd,
    setShowGame
  };

  return (
    <div className="App">
      {showStart ? <StartPanel {...startProps} /> : null}
      {showGame ? <GamePanel {...gameProps} /> : null}
      {showResults ? <ResultsPanel {...resultsProps} /> : null}
      {showEnd ? <EndPanel {...endProps} /> : null}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
