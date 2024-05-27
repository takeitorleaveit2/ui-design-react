import React, { useState } from "react";
import { Link } from "react-router-dom";

const Start: React.FC = () => {
  return (
    <>
      <div className="row w-max-content mx-auto">
        <div className="card shadow">
          <div className="card-body">
            <h1 className="card-title">Velkommen tilbage: Jens</h1>
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
            to={"/mybookings"}
          >
            Mine tider
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

export default Start;
