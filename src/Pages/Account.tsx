import React, { useState } from "react";
import { Form, Link } from "react-router-dom";

const Account: React.FC = () => {
  const [accountDetails, setAccountDetails] = useState({
    name: "Jens Hansen",
    email: "JH@gmail.com",
    phone: 80801212,
  });

  return (
    <>
      <div className="card shadow mx-auto w-max-content">
        <div className="card-body">
          <h1 className="mb-0">Mine Informationer</h1>
        </div>
      </div>

      <div className="card shadow mx-auto mt-4" style={{maxWidth:"25rem"}}>
        <div className="card-body">
          <Form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Navn
              </label>
              <input
                type="email"
                className="form-control"
                id="name"
                disabled
                value={accountDetails.name}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                disabled
                value={accountDetails.email}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Telefon
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={accountDetails.phone}
                onChange={(e) =>
                  setAccountDetails({
                    ...accountDetails,
                    phone: e.target.value === "" ? 0 : parseInt(e.target.value),
                  })
                }
              />
            </div>
          </Form>
        </div>
      </div>

      <div className="w-max-content container mt-3">
        <div className="row">
          <Link
            className="btn btn-primary rounded-pill mt-1 Start-btn"
            to={"/"}
          >
            Gem
          </Link>
        </div>
      </div>
    </>
  );
};

export default Account;
