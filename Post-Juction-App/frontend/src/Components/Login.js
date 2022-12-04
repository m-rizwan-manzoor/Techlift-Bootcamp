import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Login() {
  const [enteredName, setEnteredName] = useState("");
  const [isUser, setIsUser] = useState(false);

  const checkCredentials = async () => {
    const response = await fetch("http://localhost:3001/users");
    const jsonData = await response.json();

    let filterData = jsonData.filter(
      (user) =>
        user.name.includes(enteredName)
    );

    if (filterData.length > 0) {
      localStorage.setItem("loggedUser", JSON.stringify(filterData[0].name));
      localStorage.setItem("loggedUserId", JSON.stringify(filterData[0].id));
      setIsUser(true);
    }

    if (filterData.length == 0 || enteredName=="") {
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
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => setEnteredName(e.target.value)}
            placeholder="Enter User Name"
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
                Create User
            </Link>
          </span>
        </p>
      </div>
      {isUser && <Navigate to="/" replace={true} />}
    </>
  );
}

export default Login;
