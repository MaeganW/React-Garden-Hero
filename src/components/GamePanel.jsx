import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import SolutionsDisplay from "./SolutionsDisplay";
import { useGameState, useGameDispatch } from "../context/gameContext";

function GamePanel(props) {
  const [gameReady, setGameReady] = useState(false);
  const { health, turn, chosenSolution, currentEvent } = useGameState();
  const dispatch = useGameDispatch();
  const { events, solutions } = props;

  useEffect(() => {
    dispatch({ type: "incTurn" });
  }, []);

  useEffect(() => {
    const randomEventId = Math.ceil(Math.random() * events.length);
    dispatch({
      type: "setCurrentEvent",
      payload: events.find(e => e.id === randomEventId)
    });
    setGameReady(true);
  }, [currentEvent]);

  const solutionsDisplayProps = {
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
    dispatch({ type: "showResults" });
    calculateHealth();
  };

  return gameReady ? (
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
  ) : null;
}

export default GamePanel;
