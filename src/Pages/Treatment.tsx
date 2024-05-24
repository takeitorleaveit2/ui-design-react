import React, { useState } from "react";
import ToggleButtonGroup from "../Components/ToggleButtonGroup";
import { Form, Link } from "react-router-dom";

const MyComponent: React.FC = () => {
  let [treatments, setTreatments] = useState([
    {
      name: "Dameklip",
      price: 460,
      selected: false,
    },
    {
      name: "Herreklip",
      price: 360,
    },
    {
      name: "Børneklip (0-11år)",
      price: 350,
    },
    {
      name: "Permanent inkl klip",
      price: 950,
    },
    {
      name: "Farve fra",
      price: 525,
    },
    {
      name: "Reflex fra",
      price: 525,
    },
  ]);

  let [additions, setAdditions] = useState([
    {
      name: "Voksning af øjenbryn",
      price: 95,
      selected: false,
    },
    {
      name: "Farvning af øjenbryn",
      price: 90,
    },
    {
      name: "Voksning og farvning af øjenbryn",
      price: 180,
    },
    {
      name: "Farvning af vipper",
      price: 180,
    },
    {
      name: "Voksning og farvning af bryn og vipper",
      price: 280,
    },
  ]);

  const [treatmentSelected, setTreatmentSelected] = useState<boolean>(false);
  const [addtionSelected, setAddtionSelected] = useState<boolean>(false);

  return (
    <Form action="/employeSelector" method="post">
      <div className="card shadow mx-auto w-max-content">
        <div className="card-body">
          <h1 className="mb-0">Vælg behandling</h1>
        </div>
      </div>

      <ToggleButtonGroup
        elements={treatments}
        name="behandling"
        setSelected={setTreatmentSelected}
        multipleChoice
      >
        {(treatment) => (
          <>
            <div className="col">{treatment.name}</div>
            <div className="col-auto">kr. {treatment.price}</div>
          </>
        )}
      </ToggleButtonGroup>

      <div className="card shadow mx-auto mt-5 w-max-content">
        <div className="card-body">
          <h2 className="mb-0">Vælg tillæg</h2>
        </div>
      </div>

      <ToggleButtonGroup
        elements={additions}
        name="tillæg"
        multipleChoice
        setSelected={setAddtionSelected}
      >
        {(treatment) => (
          <>
            <div className="col">{treatment.name}</div>
            <div className="col-auto">kr. {treatment.price}</div>
          </>
        )}
      </ToggleButtonGroup>

      <div className="container mt-3 w-max-content">
        {/* TODO: submit form to employeSelector */}
        <Link
          className={
            "btn btn-primary rounded-pill mt-5 Start-btn " +
            (addtionSelected || treatmentSelected ? "" : "disabled")
          }
          to={"/employeSelector"}
        >
          Fortsæt
        </Link>
        {/* <button
          className="btn btn-primary rounded-pill mt-5 Start-btn"
          type="submit"
        >
          Bestil ny tid
        </button> */}
      </div>
    </Form>
  );
};

export default MyComponent;
