import React from "react";
import { Button } from "react-bootstrap";

function GamePanel() {
  return (
    <div className="game-panel">
      <div className="game-panel__top" />
      <div className="game-panel__middle" />
      <div className="game-panel__bottom" />
      <Button variant="success">End Turn</Button>
    </div>
  );
}

export default GamePanel;
