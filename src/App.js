import "./App.css";

import { useState, useEffect } from "react";

const App = () => {
  const [assignment, setAssignment] = useState([
    {
      course: "TDT4100",
      assignmentName: "Øving 2",
      dueDate: "Sun Jun 19 2022",
      dateCreated: "Tue Jun 21 2022",
      timeDue: "22:00",
      gitHubLink: "random link",
      description: "some random long description",
      delivered: false,
      color: "#00B76A",
      id: "1",
    },
    {
      course: "IT2805",
      assignmentName: "Øving 1",
      dueDate: "Tue Jun 21 2022",
      dateCreated: "Mon Jun 20 2022",
      timeDue: "23:59",
      gitHubLink: "random link",
      description: "some random long description",
      delivered: true,
      color: "#00B76A",
      id: "2",
    },
  ]);

  return (
    <div className="assignments-view-container">
      <div className="assignments-view-header">
        <h1>Upcoming assignments</h1>
        {/* Add sort icon here */}
        <button
          type="text"
          className="sort-by-button"
          onClick={(event) => {
            if (event.currentTarget.textContent === "Due date") {
              event.currentTarget.textContent = "Date created";
              assignment.sort((a, b) => {
                return new Date(a.dateCreated) < new Date(b.dateCreated)
                  ? 1
                  : -1;
              });
            } else {
              event.currentTarget.textContent = "Due date";
              assignment.sort((a, b) => {
                return new Date(a.dueDate) < new Date(b.dueDate) ? 1 : -1;
              });
            }
          }}
        >
          Due date
        </button>
      </div>
      <div className="assignments-view">
        {assignment.map((assignment) => {
          return (
            <div className="assignemt-container" key={assignment.id}>
              <h2>{assignment.course}</h2>
              <p>{assignment.assignmentName}</p>
              <p>{assignment.dueDate}</p>
              <p>{assignment.timeDue}</p>
              <p>{assignment.color}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
