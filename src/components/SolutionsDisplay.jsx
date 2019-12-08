import React from "react";
import { Form, Row, Col } from "react-bootstrap";

function SolutionsDisplay(props) {
  const { solutions, setChosenSolution } = props;

  const handleSelectSolution = s => {
    setChosenSolution(s);
  };

  return (
    <Form>
      <fieldset>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={10}>
            <h2 className="green">Choose Wisely</h2>
          </Form.Label>
          <Col sm={10}>
            {solutions.map(s => (
              <Form.Check
                type="radio"
                key={s.id}
                label={s.name}
                name="choseSolution"
                onChange={() => handleSelectSolution(s)}
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
