import "./assignment-container.styles.scss";

const AssignmentContainer = ({ assignment }) => {
  return (
    <div className="assignment-container" key={assignment.id}>
      <div className="left-card">
        <h2>{assignment.course}</h2>
        <p>{assignment.assignmentName}</p>
        <p>{assignment.dueDate}</p>
      </div>
      <div className="right-card">
        <span className={`course-dot ${assignment.color}`}></span>
        <button className="button">Details</button>
      </div>
    </div>
  );
};

export default AssignmentContainer;
