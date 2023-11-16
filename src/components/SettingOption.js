import React from "react";
import { Button, Form, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SettingOption = ({ information, submitValue, submitFunction }) => {
  const navigate = useNavigate();

  return (
    <ListGroupItem className="d-flex flex-row align-items-center">
      <p className="m-0">{information}</p>
      <Button
        variant="primary"
        className="ms-auto"
        onClick={() => {
          submitFunction;
        }}
      >
        {submitValue}
      </Button>
    </ListGroupItem>
  );
};

const SettingCheck = ({ information }) => (
  <ListGroupItem className="d-flex flex-row align-items-center">
    <p className="m-0">{information}</p>
    <Form.Switch className="ms-auto" />
  </ListGroupItem>
);

const SettingRadio = ({ information, options, varID }) => (
  <ListGroupItem className="d-flex flex-column">
    <p>{information}</p>
    {options?.map((i) => (
      <Form.Check type="radio" key={i} id={i} name={varID} label={i} />
    ))}
  </ListGroupItem>
);

const SettingSelect = ({ information, options, varID }) => (
  <ListGroupItem className="d-flex flex-row align-items-center">
    <p className="m-0">{information}</p>
    <Form.Select className="ms-auto w-auto">
      {options?.map((i) => (
        <option key={i} value={varID}>
          {i}
        </option>
      ))}
    </Form.Select>
  </ListGroupItem>
);

export { SettingOption, SettingCheck, SettingRadio, SettingSelect };