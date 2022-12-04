import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function EditPost() {
  const navigate = useNavigate();

  const [enteredTitle, setTitle] = useState([]);
  const [enteredPost, setPost] = useState([]);
  const [userName, setUserName] = useState("");

  // Getting username from Local Storage

  useEffect(() => {
    var logged = localStorage.getItem("loggedUser");
    var loggedUser = JSON.parse(logged);

    setUserName(loggedUser);
  }, []);

  // Sending user data using POST method

  function Post() {
    const post = {
      name: userName,
      title: enteredTitle,
      body: enteredPost,
    };

    // localStorage.setItem("posts", JSON.stringify(post));
    // console.log(post);

    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((info) => {
        console.log("Response from server" + info);
      });

    navigate("/");
  }

  return (
    <div className="container bg-light mt-5 p-5 rounded-4">
      <h1>Create Post</h1>
      <br></br>

      <div>
        <label>Post Title</label>
        <input
          type="text"
          className="form-control"
          id="naam"
          placeholder="Enter Username"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label className="my-2">Post Details</label>
        <textarea
          type="text"
          rows="5"
          className="form-control"
          id="text"
          placeholder={`${userName}! What do you think?`}
          required
          onChange={(e) => setPost(e.target.value)}
        />
      </div>

      <br></br>
      <div>
        <button className="btn btn-primary" onClick={Post}>
          Submit Post
        </button>
      </div>
      <p className="my-2">
          Go to Posts!
          <span>
            <Link className="mx-2 text-primary" to="/">
                Home
            </Link>
          </span>
        </p>
    </div>
  );
}

export default EditPost;
