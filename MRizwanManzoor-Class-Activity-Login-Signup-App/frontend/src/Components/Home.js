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
            <li className="pt-3 px-5">{userName}</li>
            {!userName && <li className="nav-item">
              <Link className="nav-link text-primary" to="/login">
                <button
                  className="btn btn-secondary"
                >
                  Login
                </button>
              </Link>
            </li>}
            {userName && <li className="nav-item">
              <Link className="nav-link text-primary" to="/login">
                <button
                  className="btn btn-secondary"
                  onClick={() => localStorage.removeItem("loggedUser")}
                >
                  Logout
                </button>
              </Link>
            </li>}
          </ul>
        </div>
      </nav>
      <div className="text-center">
        {!userName && <h1 className="my-5">Please Login to see Users List.</h1>}
        {userName && <h1 className="my-5">Users List</h1>}
      </div>

      {userName &&
        usersList.map((user) => (
          <div className="card text-center mb-5" key={user.id}>
            <div className="card-header">{user.name}</div>
            <div className="card-body">
              <h5 className="card-title">{user.email}</h5>
              <p className="card-text">{user.gender}</p>
              <p className="card-text">{user.date}</p>
              <Link to={`/posts/${user.id}`}>
                <button className="btn btn-primary">Go to Details</button>
              </Link>
            </div>
            <div className="card-footer text-muted">{user.id}</div>
          </div>
        ))}
    </>
  );
}

export default Users;
