import "./App.css";
import { useState, useEffect } from "react";
import BlogPost from "./Components/BlogPost";
import {Routes, Route, Link, Navigate} from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  const fetchTable = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await response.json();
    return jsonData;
  }

  useEffect(() => {
    fetchTable().then((jsonData) => {
      setData(jsonData);
    });
  }, []);

  return (
    <div
      style={{ backgroundColor: "#dddbdb" }}
      className="container-fluid mb-5 p-5 "
    >
      <Link to="/posts">
        <h5 className="mb-5">
          Go to Posts
        </h5>
      </Link>
      <Routes>

        <Route path='/posts' element={<BlogPost postData={data}></BlogPost>}></Route>
      </Routes>
    </div>
  );
}

export default App;
