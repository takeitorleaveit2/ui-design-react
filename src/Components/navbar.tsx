import React, { useState } from "react";
import { Form, Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>

        <div className="align-items-center">
          <p className="d-inline me-3">
            Jens
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className="offcanvas offcanvas-end text-white"
          tabIndex={-1}
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Logo
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body position-relative d-flex flex-column justify-content-between">
            <ul className="navbar-nav justify-content-end flex-grow-0 pe-3">
              <li className="nav-item text-white">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `nav-link align-middle ${isActive ? "active" : ""}`
                  }
                >
                  <div className="row g-3">
                    <div className="col-auto">
                      <i className="fa-solid fa-house fs-1 "></i>
                    </div>{" "}
                    <div className="col">
                      <span className="align-middle fs-3">Hjem</span>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/treatment"}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  <div className="row g-3">
                    <div className="col-auto">
                      <i className="fa-solid fa-calendar-check fs-1 "></i>
                    </div>{" "}
                    <div className="col">
                      <span className="align-middle fs-3">Ny tid</span>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/mybookings"}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  <div className="row g-3">
                    <div className="col-auto">
                      <i className="fa-solid fa-calendar-days fs-1 "></i>
                    </div>{" "}
                    <div className="col">
                      <span className="align-middle fs-3">Mine Tider</span>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/account"}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  <div className="row g-3">
                    <div className="col-auto">
                      <i className="fa-solid fa-user fs-1 "></i>
                    </div>{" "}
                    <div className="col">
                      <span className="align-middle fs-3">Konto</span>
                    </div>
                  </div>
                </NavLink>
              </li>
            </ul>
            <div>
              <Form className="row g-3">
                <div className="col-auto">
                  <i className="fa-solid fa-right-from-bracket fs-1"></i>
                </div>{" "}
                <div className="col">
                  <span className="align-middle fs-3">Log ud</span>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
