import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useGameDispatch } from "../context/gameContext";

function SolutionsDisplay(props) {
  const { solutions } = props;
  const dispatch = useGameDispatch();

  return (
    <Form>
      <fieldset>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={12}>
            <h2 className="green">Choose Wisely</h2>
          </Form.Label>
          <Col sm={12}>
            {solutions.map(s => (
              <Form.Check
                type="radio"
                key={s.id}
                label={s.name}
                name="choseSolution"
                onChange={() =>
                  dispatch({ type: "setChosenSolution", payload: s })
                }
                id={s.id}
              />
            ))}
          </Col>
        </Form.Group>
      </fieldset>
    </Form>
  );
}

export default SolutionsDisplay;
