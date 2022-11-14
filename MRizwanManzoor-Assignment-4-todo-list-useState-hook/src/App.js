import logo from "./logo.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./App.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [showTaskDiv, setShowTaskDiv] = useState(false);
  const [tasksList, setTasksList] = useState([]);

  const addTask = () => {
    tasksList.push(task);
    setShowTaskDiv(true);
    console.log(tasksList)
  };

  return (
    <div style={{ backgroundColor: "#3ebcee" }} className="container my-5 p-5 ">
      <Form>
        <fieldset className="row">
          <div className="col-md-11">
            <Form.Group className="mb-3">
              <Form.Control
                value={task}
                onChange={(event) => setTask(event.target.value)}
                id="disabledTextInput"
                placeholder="Enter Task"
              />
            </Form.Group>
          </div>
          <div className="col-md-1">
            <Button variant="primary" onClick={addTask}>
              Add
            </Button>
          </div>
        </fieldset>
      </Form>
      {tasksList.map((task, index) => (
        <div
          style={{
            backgroundColor: "#bfdbe6",
            display: showTaskDiv ? "block" : "none",
          }}
          className="rounded-1 my-4 p-2"
          key={index}
        >
          <p className="mt-3">
            {task}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
