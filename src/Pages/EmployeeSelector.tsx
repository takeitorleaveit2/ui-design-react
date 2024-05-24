import React, { useState } from "react";
import ToggleButtonGroup from "../Components/ToggleButtonGroup";
import { Form, Link } from "react-router-dom";

const MyComponent: React.FC = () => {
  let [treatments, setTreatments] = useState([
    {
      image: "/frisør.png",
      name: "Bodil",
      selected: false,
    },
    {
      image: "/frisør.png",
      name: "Dorte",
      selected: false,
    },
  ]);

  const [selectedTreatment, setSelectedTreatment] = useState<boolean>(false);

  return (
    <Form method="post" action="/calendar">
      <div className="card shadow mx-auto w-max-content">
        <div className="card-body">
          <h1 className="mb-0">Vælg Frisør</h1>
        </div>
      </div>

      <ToggleButtonGroup
        elements={treatments}
        name="behandling"
        setSelected={setSelectedTreatment}
      >
        {(treatment) => (
          <div className="d-flex align-items-center">
            <img src={treatment.image} alt="Frisør" />
            <div className="ms-4 fs-3">{treatment.name}</div>
          </div>
        )}
      </ToggleButtonGroup>

      <div className="container mt-3 w-max-content">
        <Link
          to={"/calendar"}
          className={
            "btn btn-primary rounded-pill mt-5 Start-btn " +
            (selectedTreatment ? "" : "disabled")
          }
        >
          Fortsæt
        </Link>
        {/* TODO: submit form
        <button
          to={"/calendar"}
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
