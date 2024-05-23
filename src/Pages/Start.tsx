import React, { useState } from "react";
import { Link } from "react-router-dom";

const MyComponent: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="card shadow">
          <div className="card-body">
            <h5 className="card-title">Velkommen tilbage: Jens</h5>
            <p className="card-text">
              Tryk på bestil ny tid for at komme igang
            </p>
          </div>
        </div>
      </div>
      <div className="w-max-content container mt-3">
        <div className="row">
          <Link
            className="btn btn-primary rounded-pill mt-1 Start-btn"
            to={"/treatment"}
          >
            Bestil ny tid
          </Link>
        </div>
        <div className="row">
          <Link
            className="btn btn-primary rounded-pill mt-1 Start-btn"
            to={"/bookings"}
          >
            Se tidligere tider
          </Link>
        </div>
        <div className="row">
          <Link
            className="btn btn-primary rounded-pill mt-1 Start-btn"
            to={"/account"}
          >
            Konto
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyComponent;
