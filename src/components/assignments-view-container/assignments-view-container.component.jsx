import AssignmentContainer from "../assignment-container/assignment-container.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

import "./assignments-view.styles.css";
import Select from "react-select";
import { useState, useEffect } from "react";

const options = [
  { value: "due-date", label: "Due date" },
  { value: "date-created", label: "Date created" },
  { value: "course", label: "Course" },
  { value: "delivered", label: "Delevired" },
];

const AssignmentsViewContainer = () => {
  const [assignments, setAssignments] = useState([
    {
      course: "TDT4100",
      assignmentName: "Øving 2",
      dueDate: "Sun Jun 19 2022",
      dateCreated: "Tue Jun 21 2022",
      timeDue: "22:00",
      gitHubLink: "random link",
      description: "some random long description",
      delivered: false,
      color: "red",
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
      color: "blue",
      id: "2",
    },
    {
      course: "IT2805",
      assignmentName: "Øving 1",
      dueDate: "Wed Jun 22 2022",
      dateCreated: "Mon Jun 20 2022",
      timeDue: "23:59",
      gitHubLink: "random link",
      description: "some random long description",
      delivered: true,
      color: "green",
      id: "3",
    },
  ]);

  const [filteredAssignments, setFilteredAssignments] = useState([]);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    switch (selectedOption.value) {
      case "due-date":
        const dueDateList = JSON.parse(JSON.stringify(assignments));
        dueDateList.sort((a, b) => (a.dueDate > b.dueDate ? 1 : -1));
        setFilteredAssignments(dueDateList);
        break;
      case "date-created":
        const dateCreatedList = JSON.parse(JSON.stringify(assignments));
        dateCreatedList.sort((a, b) => (a.dueDate > b.dueDate ? 1 : -1));
        setFilteredAssignments(dateCreatedList);
        break;
      case "course":
        const courseList = JSON.parse(JSON.stringify(assignments));
        courseList.sort((a, b) => (a.course > b.course ? 1 : -1));
        setFilteredAssignments(courseList);
        break;
      case "delivered":
        const deliveredList = JSON.parse(JSON.stringify(assignments));
        setFilteredAssignments(deliveredList.filter((a) => a.delivered));
        break;
    }
  }, [selectedOption]);

  return (
    <div>
      <div className="assignments-view-header">
        <h1>Upcoming assignments</h1>
        <div className="header-right-icons">
          <FontAwesomeIcon icon={faSort} size="xl" className="sort-icon" />
          <Select
            defaultValue={selectedOption}
            onChange={(event) => setSelectedOption(event)}
            options={options}
            className="sort-select"
          />
        </div>
      </div>
      <div className="assignments-view-container">
        <div className="assignments-view">
          {filteredAssignments.map((assignment) => {
            return (
              <AssignmentContainer
                assignment={assignment}
                key={assignment.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AssignmentsViewContainer;
