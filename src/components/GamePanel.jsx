import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import SolutionsDisplay from "./SolutionsDisplay";
import { useGameState, useGameDispatch } from "../context/gameContext";

function GamePanel(props) {
  const [gameReady, setGameReady] = useState(false);

  const {
    setShowGame,
    setShowResults,
    events,
    currentEvent,
    setCurrentEvent,
    turn,
    setTurn,
    solutions,
    chosenSolution,
    setChosenSolution
  } = props;

  const { health } = useGameState();
  const dispatch = useGameDispatch();

  useEffect(() => {
    setTurn(turn + 1);
  }, []);

  useEffect(() => {
    const randomEventId = Math.ceil(Math.random() * events.length);
    setCurrentEvent(events.find(e => e.id === randomEventId));
    setGameReady(true);
  }, [currentEvent]);

  const solutionsDisplayProps = {
    chosenSolution,
    setChosenSolution,
    solutions
  };

  const calculateHealth = () => {
    if (currentEvent.solutionId === chosenSolution.id) {
      return dispatch({
        type: "decHealth",
        payload: 5
      });
    } else {
      return dispatch({
        type: "decHealth",
        payload: currentEvent.damage
      });
    }
  };

  const handleEndTurn = () => {
    setShowGame(false);
    setShowResults(true);
    calculateHealth();
  };

  return !gameReady ? null : (
    <div className="game-panel panel">
      <div className="game-panel__top">
        <div className="game-panel__event">
          <h2 className="green">Current Event</h2>
          <p>{currentEvent.name}</p>
        </div>
      </div>
      <div className="game-panel__middle">
        <div className="game-panel__health">
          <h2 className="green">Health</h2>
          <p>{health}</p>
        </div>
      </div>
      <div className="game-panel__bottom">
        <div className="game-panel__solutions">
          <SolutionsDisplay {...solutionsDisplayProps} />
        </div>
      </div>
      <Button
        disabled={!chosenSolution}
        onClick={handleEndTurn}
        variant="success"
      >
        End Turn {turn}
      </Button>
    </div>
  );
}

export default GamePanel;
