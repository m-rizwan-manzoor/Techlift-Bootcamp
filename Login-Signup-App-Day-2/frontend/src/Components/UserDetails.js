import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function UserDetails() {
  let { id } = useParams();

  const [userItem, setUserItem] = useState({});

  const fetchTable = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${id}`
    );
    const jsonData = await response.json();
    return jsonData;
  };

  useEffect(() => {
    fetchTable().then((jsonData) => {
      setUserItem(jsonData);
    });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="card text-center mb-5">
        <div className="card-header">User ID: {userItem.id}</div>
        <div className="card-body">
          <h5 className="card-title">{userItem.name}</h5>
          <p className="card-text">Email: {userItem.email}</p>
          <h6 className="card-title">Date of Birth: {userItem.date}</h6>
          <p className="card-text">Gender: {userItem.gender}</p>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
