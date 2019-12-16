import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import StartPanel from "./components/StartPanel";
import GamePanel from "./components/GamePanel";
import ResultsPanel from "./components/ResultsPanel";
import EndPanel from "./components/EndPanel";
import ErrorBoundary from "./components/ErrorBoundary";
import { getSolutions } from "./services/SolutionService";
import { getEvents } from "./services/EventService";
import { GameProvider } from "./context/gameContext";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
          <Router>
            <Route exact path="/" render={() => <StartPanel />} />
            <Route path="/game" render={() => <GamePanel {...gameProps} />} />
            <Route exact path="/results" render={() => <ResultsPanel />} />
            <Route exact path="/end" render={() => <EndPanel />} />
          </Router>
        </GameProvider>
      </ErrorBoundary>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
