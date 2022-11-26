import "./App.css";

import Posts from "./Components/Posts";
import PostDetails from "./Components/PostDetails";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div
      style={{ backgroundColor: "#dddbdb" }}
      className="container-fluid mb-5 p-5 "
    >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/posts/:id" element={<PostDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
