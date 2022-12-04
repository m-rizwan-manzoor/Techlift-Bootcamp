import "./App.css";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Auth from "./Components/Auth";
import EditPost from "./Components/EditPost";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Auth>
              <Home />
            </Auth>
          }
        ></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/editpost"
          element={
            <Auth>
              <EditPost />
            </Auth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
