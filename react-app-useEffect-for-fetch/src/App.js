import logo from "./logo.svg";
import Table from "react-bootstrap/Table";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchTable = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    return jsonData;
  }

  useEffect(() => {
    fetchTable().then((jsonData) => {
      setData(jsonData);
    });
  }, []);

  return (
    <div className="container my-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr. #</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => 
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>{person.address.street}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
