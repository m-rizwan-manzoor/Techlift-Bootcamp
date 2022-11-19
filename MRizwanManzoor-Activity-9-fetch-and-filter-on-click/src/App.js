import "./App.css";
import MyForm from "./Components/form";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const [searchedItem, setSearchedItem] = useState("");
  const [enteredSearch, setEnteredSearch] = useState("");

  const fetchTable = async () => {
    const response = await fetch("https://api.github.com/users");
    const jsonData = await response.json();
    return jsonData;
  };

  useEffect(() => {
    fetchTable().then((jsonData) => {
      setData(jsonData);
    });
  }, []);

  const filterData = (event) => {
    setSearchedItem(event.target.value);
    console.log(searchedItem);
  };

  const filterOnClick = () => {
    setEnteredSearch(searchedItem);
    console.log(enteredSearch);

    const results = data.filter((post) => {
      if (searchedItem === "") return data;
      return post.login.toLowerCase().includes(searchedItem.toLowerCase());
    });

    setData(results);
  };

  return (
    <div
      style={{ backgroundColor: "#dddbdb" }}
      className="container my-5 p-5 rounded-2"
    >
      <h3>User Listing</h3>
      <MyForm
        searchedItem={searchedItem}
        filterData={filterData}
        filterOnClick={filterOnClick}
      ></MyForm>
      <p className="m-0">Matching Items</p>
      <textarea value={data.length}></textarea>

      <div style={{ backgroundColor: "#fafafa" }} className="my-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Node ID</th>
              <th>Login</th>
              <th>Profile URL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person, index) => (
              <tr key={index}>
                <td>{person.node_id}</td>
                <td>{person.login}</td>
                <td>
                  <a href={person.html_url} target="_blank">
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
      </div>
    </div>
  );
}

export default App;
