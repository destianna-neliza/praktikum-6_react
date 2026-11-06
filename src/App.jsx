import React, { useState } from "react";
import { Button } from "react-bootstrap";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Go to gym",
      priority: "High",
      status: "To Do",
    },
    {
      id: 2,
      name: "Read a book",
      priority: "Low",
      status: "Done",
    },
    {
      id: 3,
      name: "Go to market",
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: 4,
      name: "Restart Learning Solidworks",
      priority: "High",
      status: "To Do",
    },
    {
      id: 5,
      name: "change slider to scroll",
      priority: "High",
      status: "Done",
    },
    {
      id: 6,
      name: "To publish the article",
      priority: "Medium",
      status: "In Progress",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleShowForm = () => setShowForm(true);

  const handleCloseForm = () => {
    setShowForm(false);
    setTaskToEdit(null);
  };

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const showEditForm = (task) => {
    setTaskToEdit(task);
    setShowForm(true);
  };

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <div className="header">
          <h1>Task List</h1>

          <Button className="add-task-btn" onClick={handleShowForm}>
            <span>+</span> Add Task
          </Button>
        </div>

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          showEditForm={showEditForm}
        />

        <TaskForm
          show={showForm}
          handleClose={handleCloseForm}
          addTask={addTask}
          editTask={editTask}
          taskToEdit={taskToEdit}
        />
      </div>
    </div>
  );
}

export default App;
