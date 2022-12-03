import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Users() {
  const [usersList, setUsersList] = useState([]);
  const [userName, setUserName] = useState("");

  const fetchTable = async () => {
    const response = await fetch("http://localhost:3001/users");
    const jsonData = await response.json();
    return jsonData;
  };

  useEffect(() => {
    fetchTable().then((jsonData) => {
      setUsersList(jsonData);
    });
  }, []);

  useEffect(() => {
    var logged = localStorage.getItem("loggedUser");
    var loggedUser = JSON.parse(logged);

    setUserName(loggedUser);
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="pt-3 px-3">
              <h5>{userName}</h5>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-primary" to="/login">
                <button
                  className="btn btn-secondary"
                  onClick={() => localStorage.removeItem("loggedUser")}
                >
                  Logout
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/edit">
                <button className="btn btn-dark">Update</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="text-center">
        <h1 className="my-5">Users List</h1>
      </div>

      {usersList.map((user) => (
        <div className="card text-center mb-5" key={user.id}>
          <div className="card-header">{user.name}</div>
          <div className="card-body">
            <h5 className="card-title">{user.email}</h5>
            <Link to={`/posts/${user.id}`}>
              <button className=" mx-2 btn btn-primary">Go to Details</button>
            </Link>
            <Link to={`/edit`}>
              <button className=" mx-2 btn btn-danger">Delete</button>
            </Link>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
      ))}
    </>
  );
}

export default Users;
