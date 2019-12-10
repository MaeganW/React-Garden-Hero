import React, { createContext, useContext, useReducer } from "react";

// const [showStart, setShowStart] = useState(true);
// const [showGame, setShowGame] = useState(false);
// const [showResults, setShowResults] = useState(false);
// const [showEnd, setShowEnd] = useState(false);

// const [health, setHealth] = useState(100);
// const [currentEvent, setCurrentEvent] = useState(null);
// const [chosenSolution, setChosenSolution] = useState(null);
// const [turn, setTurn] = useState(0);

const GameStateContext = createContext();
const GameDispatchContext = createContext();

function gameReducer(state, action) {
  switch (action.type) {
    case "decHealth": {
      return { health: state.health - action.payload };
    }
    case "setHealth": {
      return { health: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, { health: 100 });
  return (
    <GameStateContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameStateContext.Provider>
  );
}

function useGameState() {
  const context = useContext(GameStateContext);
  if (context === undefined) {
    throw new Error("useGameState must be used within a GameProvider");
  }
  return context;
}

function useGameDispatch() {
  const context = useContext(GameDispatchContext);
  if (context === undefined) {
    throw new Error("useGameDispatch must be used within a GameProvider");
  }
  return context;
}

export { GameProvider, useGameState, useGameDispatch };
