import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import { useGameDispatch, useGameState } from "../../context/gameContext";

function StartPage(props) {
  const history = useHistory();
  const { maxTurn } = useGameState();
  const dispatch = useGameDispatch();
  const difficulties = [
    {
      label: "Easy",
      maxTurn: 3
    },
    {
      label: "Medium",
      maxTurn: 6
    },
    {
      label: "Hard",
      maxTurn: 9
    }
  ];

  useEffect(() => {
    dispatch({ type: "resetGame" });
  }, []);

  return (
    <div className="start-panel panel">
      <h1 className="green">Rules</h1>
      <p>
        You own a small garden in an unpredictable and sometimes inhospitable
        environment.
      </p>
      <p>
        Between now and harvest several unexpected events are likely to occur.
      </p>
      <p>
        You will be given several tools to combat each event, but may only
        select one.
      </p>
      <p>If your plant's health drops below 50, you lose.</p>
      <p>Choose wisely.</p>

      <Form>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={12}>
              <h2 className="green">Choose Wisely</h2>
            </Form.Label>
            <Col sm={12}>
              {difficulties.map((s, i) => (
                <Form.Check
                  type="radio"
                  key={i}
                  defaultChecked={s.maxTurn === maxTurn}
                  label={s.label}
                  name="chosenDifficulty"
                  onChange={() =>
                    dispatch({ type: "setMaxTurn", payload: s.maxTurn })
                  }
                />
              ))}
            </Col>
          </Form.Group>
        </fieldset>
      </Form>
      <Button onClick={() => history.push("/game")} variant="success">
        Start Game
      </Button>
    </div>
  );
}

export { StartPage };
