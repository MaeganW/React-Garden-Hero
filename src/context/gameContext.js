import React, { createContext, useContext, useReducer } from "react";

const initialGameState = {
  health: 100,
  currentEvent: null,
  chosenSolution: null,
  turn: 0,
  showStart: true,
  showGame: false,
  showResults: false,
  showEnd: false
};

const resetPanelState = {
  showStart: false,
  showGame: false,
  showResults: false,
  showEnd: false
};

function gameReducer(state, action) {
  switch (action.type) {
    case "decHealth": {
      return { ...state, health: state.health - action.payload };
    }
    case "setHealth": {
      return { ...state, health: action.payload };
    }
    case "incTurn": {
      return { ...state, turn: state.turn + 1 };
    }
    case "setTurn": {
      return { ...state, turn: action.payload };
    }
    case "setCurrentEvent": {
      return { ...state, currentEvent: action.payload };
    }
    case "setChosenSolution": {
      return { ...state, chosenSolution: action.payload };
    }
    case "showStart": {
      return {
        ...state,
        ...resetPanelState,
        showStart: true
      };
    }
    case "showGame": {
      return {
        ...state,
        ...resetPanelState,
        showGame: true
      };
    }
    case "showResults": {
      return {
        ...state,
        ...resetPanelState,
        showResults: true
      };
    }
    case "showEnd": {
      return {
        ...state,
        ...resetPanelState,
        showEnd: true
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const GameStateContext = createContext();
const GameDispatchContext = createContext();

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

function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);
  return (
    <GameStateContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameStateContext.Provider>
  );
}

export { GameProvider, useGameState, useGameDispatch };