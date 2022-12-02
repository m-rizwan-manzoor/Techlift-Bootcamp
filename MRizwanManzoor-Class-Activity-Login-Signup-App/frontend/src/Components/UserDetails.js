import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function UserDetails() {
  let { id } = useParams();

  const [postItem, setPostItem] = useState({});

  const fetchTable = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const jsonData = await response.json();
    return jsonData;
  };

  useEffect(() => {
    fetchTable().then((jsonData) => {
      setPostItem(jsonData);
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
        <div className="card-header">{postItem.id}</div>
        <div className="card-body">
          <h5 className="card-title">{postItem.title}</h5>
          <p className="card-text">{postItem.body}</p>
        </div>
        <div className="card-footer text-muted">{postItem.userId}</div>
      </div>
    </>
  );
}

export default UserDetails;
