import React from "react";

function EndPanel() {
  const score = 45;
  return (
    <div className="end-panel panel">
      <h1>Final Score</h1>
      <h2>{score}</h2>
      <h2>You {score > 50 ? "Win" : "Lose"}</h2>
    </div>
  );
}

export default EndPanel;
