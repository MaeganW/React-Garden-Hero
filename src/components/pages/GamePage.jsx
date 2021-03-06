import React, { useEffect } from "react";
import { GamePanel } from "../GamePanel";
import { ResultsPanel } from "../ResultsPanel";
import { EndPanel } from "../EndPanel";
import { GameSpinner } from "../GameSpinner";
import { getSolutions } from "../../services/SolutionService";
import { getEvents } from "../../services/EventService";
import { useGameState, useGameDispatch } from "../../context/gameContext";

function GamePage(props) {
  const { events, solutions, showGame, showResults, showEnd } = useGameState();
  const dispatch = useGameDispatch();

  useEffect(() => {
    async function setEventsAndSolutions() {
      try {
        const events = await getEvents();
        const solutions = await getSolutions();
        dispatch({ type: "setEvents", payload: events });
        dispatch({ type: "setSolutions", payload: solutions });
      } catch (err) {
        console.error("Error: ", err);
      }
    }
    setEventsAndSolutions();
  }, [solutions, events]);

  return events && solutions ? (
    <React.Fragment>
      {showGame ? <GamePanel events={events} solutions={solutions} /> : null}
      {showResults ? <ResultsPanel /> : null}
      {showEnd ? <EndPanel /> : null}
    </React.Fragment>
  ) : (
    <GameSpinner />
  );
}

export { GamePage };
