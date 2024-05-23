import React, { useState } from "react";
import ToggleButtonGroup from "../Components/ToggleButtonGroup";

const MyComponent: React.FC = () => {
  let [treatments, setTreatments] = useState([
    {
      name: "Dameklip",
      price: 460,
      selected: true,
    },
    {
      name: "Behandling 1",
      price: 460,
    },
    {
      name: "Behandling 1",
      price: 460,
    },
  ]);

  return (
    <form>
      <div className="card shadow mx-auto w-max-content">
        <div className="card-body">
          <h1 className="mb-0">Vælg behandling</h1>
        </div>
      </div>

      <ToggleButtonGroup elements={treatments} name="behandling">
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

      <ToggleButtonGroup elements={treatments} name="tillæg">
        {(treatment) => (
          <>
            <div className="col">{treatment.name}</div>
            <div className="col-auto">kr. {treatment.price}</div>
          </>
        )}
      </ToggleButtonGroup>

      <div className="container mt-3 w-max-content">
        <button
          className="btn btn-primary rounded-pill mt-5 Start-btn"
          type="submit"
        >
          Bestil ny tid
        </button>
      </div>
    </form>
  );
};

export default MyComponent;
