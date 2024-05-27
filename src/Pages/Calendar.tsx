import React, { useState } from "react";
import ToggleButtonGroup from "../Components/ToggleButtonGroup";
import { Form, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const Calendar: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(() => {
    var date = new Date(Date.now());
    return date;
  });

  let [treatments, setTreatments] = useState([
    {
      time: "8:00",
      selected: false,
    },
    {
      time: "9:00",
    },
    {
      time: "10:00",
    },
    {
      time: "11:00",
    },
  ]);

  const [selectedTreatment, setSelectedTreatment] = useState<
    object | undefined
  >(undefined);

  return (
    <Form method="post" action="/calendar">
      <div className="card shadow mx-auto w-max-content">
        <div className="card-body">
          <h1 className="mb-0">Vælg Dato</h1>
        </div>
      </div>
      <div className="w-max-content mx-auto mt-2">
        <DatePicker
          selected={selectedDay}
          onChange={(date) => date && setSelectedDay(date)}
          filterDate={(date) => {
            const day = date.getDay();
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return day !== 0 && day !== 6 && date >= today;
          }}
          dateFormat="dd/MM/yyyy"
          inline
        />
      </div>
      <label className="d-none" htmlFor="date">
        Vælg dato
      </label>
      <input
        type="date"
        id="date"
        className="d-none"
        readOnly
        name="date"
        value={formatDate(selectedDay)}
      />

      <div className="row mx-auto w-max-content align-items-center">
        <div className="col">
          <button
            className="btn btn-primary rounded-pill py-3 px-4"
            onClick={(e) => {
              e.preventDefault();
              setSelectedDay((prevDate) => {
                let newDate = new Date(prevDate);
                newDate.setDate(newDate.getDate() - 1);
                // Don't go back before today and skip weekends
                let today = new Date();
                today.setHours(0, 0, 0, 0);
                while (newDate.getDay() === 0 || newDate.getDay() === 6) {
                  newDate.setDate(newDate.getDate() - 1);
                }
                return newDate;
              });
            }}
            disabled={selectedDay <= new Date()}
          >
            {"<"}
          </button>
        </div>

        <div className="col">
          <div
            className="card shadow mx-auto text-center"
            style={{ minWidth: "12rem" }}
          >
            <div className="card-body">
              <h2 className="mb-0 fs-3">
                {selectedDay.toLocaleDateString("da-dk", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </h2>
            </div>
          </div>
        </div>

        <div className="col">
          <button
            className="btn btn-primary rounded-pill py-3 px-4"
            onClick={(e) => {
              e.preventDefault();
              setSelectedDay((prevDate) => {
                let newDate = new Date(prevDate);
                newDate.setDate(newDate.getDate() + 1);
                // Skip weekends
                while (newDate.getDay() === 0 || newDate.getDay() === 6) {
                  newDate.setDate(newDate.getDate() + 1);
                }
                return newDate;
              });
            }}
          >
            {">"}
          </button>
        </div>
      </div>

      <div className="card shadow mx-auto w-max-content mt-3">
        <div className="card-body">
          <h1 className="mb-0">Ledige Tider</h1>
        </div>
      </div>

      <div className="card shadow mx-auto mt-3">
        <div className="card-body row gx-1">
          {treatments.map((treatment, i) => {
            return (
              <div className="col-4" key={treatment.time}>
                <input
                  type="radio"
                  className="btn-check"
                  name="time"
                  id={"time-option" + i}
                  autoComplete="off"
                  defaultChecked={treatment.selected}
                  value={treatment.time}
                  onChange={(e) => {
                    //console.log(e.target.value);
                    setSelectedTreatment(treatment);
                  }}
                ></input>
                <label
                  className="btn btn-outline-primary mt-1 w-100"
                  htmlFor={"time-option" + i}
                >
                  <div className="w-100 text-black">{treatment.time}</div>
                </label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mt-3 w-max-content">
        <Link
          to={"/confirmation"}
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

export default Calendar;
