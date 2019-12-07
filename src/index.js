import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

import StartPanel from "./components/StartPanel";
import GamePanel from "./components/GamePanel";
import ResultsPanel from "./components/ResultsPanel";
import EndPanel from "./components/EndPanel";

function App() {
  const [showStart, setShowStart] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  const startProps = {
    setShowStart,
    setShowGame
  };

  const gameProps = {
    setShowGame,
    setShowResults
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
