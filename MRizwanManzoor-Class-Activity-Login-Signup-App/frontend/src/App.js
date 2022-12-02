import "./App.css";
import UserDetails from "./Components/UserDetails";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";


function App() {

  return (
    <div
      style={{ backgroundColor: "#dddbdb" }}
      className="container-fluid mb-5 p-5 "
    >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts/:id" element={<UserDetails />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
