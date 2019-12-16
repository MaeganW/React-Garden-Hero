import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import StartPanel from "./components/StartPanel";
import Game from "./components/Game";
import ErrorBoundary from "./components/ErrorBoundary";
import { GameProvider } from "./context/gameContext";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <GameProvider>
          <Router>
            <Route exact path="/" render={() => <StartPanel />} />
            <Route path="/game" render={() => <Game />} />
          </Router>
        </GameProvider>
      </ErrorBoundary>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
