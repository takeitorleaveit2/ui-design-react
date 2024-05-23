import React, { useState } from "react";

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
          <button className="btn btn-primary rounded-pill mt-1 Start-btn">
            Bestil ny tid
          </button>
        </div>
        <div className="row">
          <button className="btn btn-primary rounded-pill mt-1 Start-btn">
            Se tidligere tider
          </button>
        </div>
        <div className="row">
          <button className="btn btn-primary rounded-pill mt-3 Start-btn">
            Konto
          </button>
        </div>
      </div>
    </>
  );
};

export default MyComponent;
