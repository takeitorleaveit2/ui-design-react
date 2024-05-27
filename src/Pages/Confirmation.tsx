import React, { useState } from "react";
import ToggleButtonGroup from "../Components/ToggleButtonGroup";
import { Form, Link } from "react-router-dom";

const Confirmation: React.FC = () => {
  let [selectedDate, setSelectedDate] = useState(() => new Date(Date.now()));
  let [employee, setemployee] = useState(() => ({
    name: "Bodil",
    image: "/frisør.png",
  }));

  let [services, setservices] = useState(() => [
    {
      name: "Dameklip",
      price: 460,
    },
  ]);

  return (
    <Form action="/employeSelector" method="post">
      <div className="card shadow mx-auto w-max-content">
        <div className="card-body">
          <h1 className="mb-0">Din Valgte Tid</h1>
        </div>
      </div>

      <div className="card shadow mx-auto mt-2">
        <div className="card-body">
          <h2 className="mb-0">Tidspunkt</h2>
          <p className="mb-0">
            {selectedDate.toLocaleDateString("da-dk", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <p className="mb-0">
            kl.{" "}
            {selectedDate.toLocaleTimeString("da-dk", {
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
          <h2 className="mb-0 mt-4">Ydelser</h2>
          <div className="row">
            {services.map((service) => {
              return (
                <div key={service.name} className="col-12">
                  <div className="d-flex justify-content-between">
                    <p className="mb-0">Dameklip</p>
                    <p className="mb-0">460 kr</p>
                  </div>
                </div>
              );
            })}
          </div>
          <h2 className="mb-0 mt-4">Frisør</h2>
          <div className="row bg-white p-1 mt-1 mx-1 border rounded">
            <div className="col-12">
              <div className="d-flex align-items-center">
                <img src={employee.image} alt="Frisør" />
                <div className="ms-4 fs-3">{employee.name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3 w-max-content">
        {/* TODO: submit form to employeSelector */}
        <Link
          className="btn btn-primary rounded-pill mt-5 Start-btn"
          to={"/mybookings"}
        >
          Bekræft
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

export default Confirmation;
