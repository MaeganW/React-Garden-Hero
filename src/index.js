import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.scss";
import ErrorBoundary from "./components/ErrorBoundary";
import { StartPage } from "./components/pages/StartPage";
import { GamePage } from "./components/pages/GamePage";
import { GameProvider } from "./context/gameContext";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <GameProvider>
            <Route exact path="/" render={() => <StartPage />} />
            <Route path="/game" render={() => <GamePage />} />
          </GameProvider>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
