import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Posts() {
  const [postsList, setPostsList] = useState([]);

  const fetchTable = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await response.json();
    return jsonData;
  };

  useEffect(() => {
    fetchTable().then((jsonData) => {
      setPostsList(jsonData);
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
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/about-us">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {postsList.map((post) => (
        <div className="card text-center mb-5" key={post.id}>
          <div className="card-header">{post.id}</div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <Link to="/posts">
              <button className="btn btn-primary">Go to Details</button>
            </Link>
          </div>
          <div className="card-footer text-muted">{post.userId}</div>
        </div>
      ))}
    </>
  );
}

export default Posts;
