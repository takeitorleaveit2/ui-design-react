import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import ToggleButtonGroup from "../Components/ToggleButtonGroup";
import Booking from "../Components/booking";
import { BookingStatus } from "../enum/bookingStatus";
import { Modal } from "bootstrap";

const MyBookings: React.FC = () => {
  let [bookingConfirmation, setBookingConfirmation] = useState<any>();

  let [activeBookings, setActiveBookings] = useState([
    {
      date: new Date(Date.now()),
      status: BookingStatus.booked,
      treatments: ["Dameklip", "Farve"],
    },
  ]);

  let [oldBookings, setOldBookings] = useState([
    {
      date: new Date(Date.now()),
      status: BookingStatus.completed,
      selected: false,
      treatments: ["Dameklip", "Farve"],
    },
  ]);

  function onDelete(key: {
    date: Date;
    status: BookingStatus;
    treatments: string[];
  }) {}

  return (
    <>
      <div className="card shadow mx-auto w-max-content">
        <div className="card-body">
          <h1 className="mb-0">Mine tider</h1>
        </div>
      </div>
      <div className="card shadow w-100 mt-2">
        <div className="card-body">
          <div className="px-0">
            {activeBookings.map((booking, i) => {
              return (
                <Booking
                  onDelete={(e) => {
                    setBookingConfirmation(e);
                    const myModalAlternative = new Modal(
                      document.getElementById("staticBackdrop")!
                    );

                    myModalAlternative.show();
                  }}
                  key={i}
                  booking={booking}
                  setActiveBookings={setActiveBookings}
                ></Booking>
              );
            })}
          </div>
        </div>
      </div>
      <div className="card shadow mx-auto w-max-content mt-4">
        <div className="card-body">
          <h2 className="mb-0">Historik</h2>
        </div>
      </div>
      <div className="card shadow w-100 mt-2">
        <div className="card-body">
          <div className="px-0">
            {oldBookings.map((booking, i) => {
              return <Booking keyValue={i} booking={booking}></Booking>;
            })}
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Aflys tid
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Er du sikker på at du vil aflyse tiden
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  setActiveBookings(
                    activeBookings.filter((booking) => {
                      if (bookingConfirmation !== booking) {
                        return booking;
                      }
                    })
                  );
                }}
              >
                Aflys
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBookings;
