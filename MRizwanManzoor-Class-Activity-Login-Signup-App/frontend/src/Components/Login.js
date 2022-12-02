import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isUser, setIsUser] = useState(false);


  const checkCredentials = async() => {
    const response = await fetch("http://localhost:3001/users");
    const jsonData = await response.json();

    let filterData = jsonData.filter(
      (user) =>
        user.email.includes(enteredEmail) &&
        user.password.includes(enteredPassword) 
    );

    if(filterData.length>0){
        localStorage.setItem("loggedUser", JSON.stringify(filterData[0].name));
        setIsUser(true)
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/signup">
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-5 p-5 border border-secondary rounded-3">
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
      </div>
      {isUser && <Navigate to="/"  replace={true} />}
    </>
  );
}

export default Login;
