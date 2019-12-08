import React from "react";
import { Form, Row, Col } from "react-bootstrap";

function SolutionsDisplay(props) {
  const { solutions, setChosenSolution } = props;

  const handleSelectSolution = s => setChosenSolution(s);

  return (
    <Form>
      <fieldset>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={2}>
            Choose Wisely
          </Form.Label>
          <Col sm={10}>
            {solutions.map(s => (
              <Form.Check
                onChange={s => handleSelectSolution(s)}
                type="radio"
                key={s.id}
                label={s.name}
                name="choseSolution"
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
