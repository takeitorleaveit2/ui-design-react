import React, { useState } from "react";

import { Form } from "react-router-dom";
import { BookingStatus } from "../enum/bookingStatus";

interface bookingProps {
  keyValue?: number;
  booking: {
    date: Date;
    treatments: string[];
    status: BookingStatus;
  };
  setActiveBookings?: React.Dispatch<
    React.SetStateAction<
      {
        date: Date;
        status: BookingStatus;
        treatments: string[];
      }[]
    >
  >;

  onDelete?: (key: {
    date: Date;
    status: BookingStatus;
    treatments: string[];
  }) => void;
}

export default function Booking({ keyValue, booking, onDelete }: bookingProps) {
  function renderAction() {
    switch (booking.status) {
      case BookingStatus.booked:
        return (
          <Form>
            <button
              type="button"
              className="btn btn-primary"
              //   data-bs-toggle="modal"
              //   data-bs-target="#staticBackdrop"
              onClick={() => onDelete && onDelete(booking)}
            >
              Aflys tid
            </button>
          </Form>
        );
      case BookingStatus.cancelled:
        return (
          <span className="badge rounded-pill text-bg-secondary fs-2 fw-normal">
            Aflyst
          </span>
        );
      case BookingStatus.completed:
        return (
          <span className="rounded-pill fs-4 fw-normal px-3 py-2 border">
            Behandlet
          </span>
        );
    }
  }

  return (
    <div key={keyValue} className="row align-items-center">
      <div className="col">
        <div className="row align-items-center">
          <div className="col-auto">
            <p className="mb-0 fs-6">
              {booking.date.toLocaleDateString("da-dk", {
                weekday: "long",
                month: "numeric",
                day: "2-digit",
              })}
            </p>
            <p className="mb-0 fs-4">
              kl{" "}
              {booking.date.toLocaleTimeString("en-gb", {
                hour: "numeric",
                minute: "numeric",
              })}
            </p>
          </div>
          <div className="col-auto">
            <div className="col">
              {booking.treatments.map((treatment) => (
                <span
                  key={treatment}
                  className="badge rounded-pill text-bg-primary fs-5 ms-1"
                >
                  {treatment}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="col-auto">{renderAction()}</div>
    </div>
  );
}
