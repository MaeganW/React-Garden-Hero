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
import { GameProvider, useGameState } from "./context/gameContext";

function App() {
  const solutions = getSolutions();
  const events = getEvents();

  const gameProps = {
    events,
    solutions
  };

  return (
    <div className="App">
      <ErrorBoundary>
        <GameProvider>
          <StartPanel />
          <GamePanel {...gameProps} />
          <ResultsPanel />
          <EndPanel />
        </GameProvider>
      </ErrorBoundary>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
