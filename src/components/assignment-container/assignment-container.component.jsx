const AssignmentContainer = ({ assignment }) => {
  return (
    <div className="assignment-container" key={assignment.id}>
      <h2>{assignment.course}</h2>
      <p>{assignment.assignmentName}</p>
      <p>{assignment.dueDate}</p>
      <p>{assignment.timeDue}</p>
      <p>{assignment.color}</p>
    </div>
  );
};

export default AssignmentContainer;
