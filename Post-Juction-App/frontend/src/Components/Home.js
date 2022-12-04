import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Users() {
  const [postsList, setPostsList] = useState([]);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  const fetchTable = async () => {
    const response = await fetch("http://localhost:3001/posts");
    const jsonData = await response.json();
    return jsonData;
  };

  useEffect(() => {
    fetchTable().then((jsonData) => {
      setPostsList(jsonData);
    });
  }, []);

  useEffect(() => {
    var logged = localStorage.getItem("loggedUser");
    var loggedUser = JSON.parse(logged);

    setUserName(loggedUser);
  }, []);

  useEffect(() => {
    var logged = localStorage.getItem("loggedUserId");
    var loggedUserId = JSON.parse(logged);

    setUserId(loggedUserId);
  });
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
              <Link className="nav-link text-primary" to="/editpost">
                <button className="btn btn-success">Create Post</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="text-center">
        <h1 className="my-5">Posts</h1>
      </div>

      {postsList.map((post) => (
          <div className="w-75 mx-auto card text-center mb-5" key={post.id}>
            <h5 className="card-header">{post.name}</h5>
            <div className="card-body">
              <h6 className="card-title">{post.title}</h6>
              <p className="card-title">{post.body}</p>
              {/* <Link to={`/posts/${post.id}`}>
              <button className=" mx-2 btn btn-primary">Go to Details</button>
            </Link> */}
              {/* <Link to={`/edit`}>
              <button className=" mx-2 btn btn-danger">Delete</button>
            </Link> */}
            </div>
            <div className="card-footer text-muted"></div>
          </div>
      ))}
    </>
  );
}

export default Users;
