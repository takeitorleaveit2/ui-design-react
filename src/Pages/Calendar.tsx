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

const MyComponent: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());

  let [treatments, setTreatments] = useState([
    {
      time: "8:00",
      selected: true,
    },
    {
      time: "9:00",
    },
  ]);

  return (
    <Form method="post" action="/calendar">
      <div className="card shadow mx-auto w-max-content">
        <div className="card-body">
          <h1 className="mb-0">Vælg Dato</h1>
        </div>
      </div>
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
      <input
        type="date"
        className="d-none"
        name="date"
        value={formatDate(selectedDay)}
      />
      <div className="card shadow mx-auto w-max-content">
        <div className="card-body">
          <h1 className="mb-0">
            {selectedDay.toLocaleDateString(undefined, {
              weekday: "long",
              month: "numeric",
              day: "2-digit",
            })}
          </h1>
        </div>
      </div>
      
      <div className="Button-div">
            
            <p>{selectedDay.toLocaleDateString(undefined, {
              day: "2-digit",
            })}</p>
            <button
              onClick={() =>
                setSelectedDay((prevDate) => {
                  let newDate = new Date(prevDate);
                  newDate.setDate(newDate.getDate() + 1);
                  // Skip weekends
                  while (newDate.getDay() === 0 || newDate.getDay() === 6) {
                    newDate.setDate(newDate.getDate() + 1);
                  }
                  return newDate;
                })
              }
            >
              {"->"}
            </button>
          </div>
        

      <div className="card shadow mx-auto w-max-content mt-3">
        <div className="card-body">
          <h1 className="mb-0">Ledige Tider</h1>
        </div>
      </div>

      <div className="card shadow mx-auto w-max-content mt-3">
        <div className="card-body d-grid">
          {treatments.map((treatment, i) => {
            return (
              <>
                <input
                  type="radio"
                  className="btn-check"
                  name="time"
                  id={"time-option" + i}
                  autoComplete="off"
                  defaultChecked={treatment.selected}
                ></input>
                <label
                  className="btn btn-primary d-flex flex-wrap mt-1 text-start"
                  htmlFor={"time-option" + i}
                >
                  {treatment.time}
                </label>
              </>
            );
          })}
          
          <div className="card">hello</div>
        </div>
      </div>

      <div className="container mt-3 w-max-content">
        <Link
          to={"/calendar"}
          className="btn btn-primary rounded-pill mt-5 Start-btn"
        >
          Bestil ny tid
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

export default MyComponent;
