import logo from "./logo.svg";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchTable = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    await response.json().then((jsonData) => {
      setData(jsonData);
    });;
  };

  return (
    <div className="container my-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>
                {person.address.street +
                  ", " +
                  person.address.city +
                  "," +
                  person.address.zipcode}
              </td>
              <td>
                <a href="https://github.com/m-rizwan-manzoor" target="_blank">
                  <Button variant="primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye-fill"
                      viewBox="0 0 18 18"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                    <span> View Profile</span>
                  </Button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={fetchTable} variant="primary">
        <span>Display Data</span>
      </Button>
    </div>
  );
}

export default App;
