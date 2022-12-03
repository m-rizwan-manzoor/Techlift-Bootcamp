import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isUser, setIsUser] = useState(false);

  const checkCredentials = async () => {
    const response = await fetch("http://localhost:3001/users");
    const jsonData = await response.json();

    let filterData = jsonData.filter(
      (user) =>
        user.email.includes(enteredEmail) &&
        user.password.includes(enteredPassword)
    );

    if (filterData.length > 0) {
      localStorage.setItem("loggedUser", JSON.stringify(filterData[0].name));
      localStorage.setItem("loggedUserId", JSON.stringify(filterData[0].id));
      setIsUser(true);
    }

    if (filterData.length == 0 || enteredEmail=="" || enteredPassword=="") {
      setIsUser(false);
      alert("Invalid Credentials!");
    }
  };

  return (
    <>
      <div className="container bg-light mt-5 p-5 rounded-4">
        <h1>Login</h1>
        <br></br>
        <div>
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setEnteredEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setEnteredPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        <br></br>
        <div>
          <button className="btn btn-primary" onClick={checkCredentials}>
            Login
          </button>
        </div>
        <p className="my-2">
          Not a User?
          <span>
            <Link className="mx-2 text-primary" to="/signup">
                Signup
            </Link>
          </span>
        </p>
      </div>
      {isUser && <Navigate to="/" replace={true} />}
    </>
  );
}

export default Login;
