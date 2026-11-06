import React from "react";
import { Button, Card } from "react-bootstrap";

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Card className="task-card" key={task.id}>
          <Card.Body className="task-card-body">
            <div className="task-info">
              <small>Task</small>
              <span>{task.name}</span>
            </div>

            <div className="priority-info">
              <small>Priority</small>
              <span className={`priority-badge ${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>
            </div>

            <div className="status-info">
              <span
                className={`status-badge ${task.status.toLowerCase().replace(" ", "-")}`}
              >
                {task.status}
              </span>
            </div>

            <div
              className={`status-circle ${task.status.toLowerCase().replace(" ", "-")}`}
            ></div>

            <div className="task-actions">
              <Button
                className="edit-btn"
                onClick={() => showEditForm(task)}
                aria-label="Edit task"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10" />
                  <path d="m16 3 5 5-10 10-5 1 1-5Z" />
                </svg>
              </Button>

              <Button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
                aria-label="Delete task"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18" />
                  <path d="M8 6V4h8v2" />
                  <path d="m19 6-1 14H6L5 6" />
                  <path d="M10 11v5M14 11v5" />
                </svg>
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;
