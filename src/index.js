import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import StartPanel from "./components/StartPanel";
import GamePanel from "./components/GamePanel";
import ResultsPanel from "./components/ResultsPanel";
import EndPanel from "./components/EndPanel";
import ErrorBoundary from "./components/ErrorBoundary";
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
    setHealth,
    turn,
    setTurn,
    chosenSolution,
    setChosenSolution,
    solutions
  };

  const resultsProps = {
    setShowResults,
    setShowGame,
    setShowEnd,
    currentEvent,
    chosenSolution,
    setChosenSolution,
    turn
  };

  const endProps = {
    setShowEnd,
    setShowGame,
    health,
    setHealth,
    setTurn
  };

  return (
    <div className="App">
      <ErrorBoundary>
        {showStart ? <StartPanel {...startProps} /> : null}
        {showGame ? <GamePanel {...gameProps} /> : null}
        {showResults ? <ResultsPanel {...resultsProps} /> : null}
        {showEnd ? <EndPanel {...endProps} /> : null}
      </ErrorBoundary>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
