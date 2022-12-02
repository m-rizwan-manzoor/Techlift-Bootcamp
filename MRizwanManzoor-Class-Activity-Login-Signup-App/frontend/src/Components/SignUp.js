import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [gender, setGender] = useState([]);

  const [date, setDate] = useState([]);
  useEffect(() => {
    var naam = localStorage.getItem("users");
    var newnaam = JSON.parse(naam);

    console.log(newnaam);
  }, []);

  function Post() {
    const user = {
      name: name,
      email: email,
      gender: gender,
      date: date,
      password: password,
    };

    user.user_name = document.getElementById("naam").value;
    user.email = document.getElementById("email").value;

    localStorage.setItem("users", JSON.stringify(user));
    console.log(user);

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((info) => {
        console.log("Response from server" + info);

        // document.getElementById("naam").value = "";
        // document.getElementById("email").value = "";
      });
  }

  return (
    <div className="container mt-5 p-5 border border-secondary rounded-3">
      <h1>Sign Up</h1>
      <br></br>

      <div>
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          id="naam"
          placeholder="Enter Username"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />
      </div>
      <div>
        <label>Date of birth</label>
        <input
          type="date"
          className="form-control"
          id="date"
          placeholder="Enter Date of Birth"
          required
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label>Gender</label>
        <select
          className="form-control"
          onChange={(e) => setGender(e.target.value)}
        >
          <option>Female</option>
          <option>Male</option>
        </select>
      </div>

      <br></br>
      <div>
        <button className="btn btn-primary" onClick={Post}>
          Create User
        </button>
      </div>
      <br></br>
      <div>
        <Link to="/login">
          <button className="btn btn-secondary">
            Login if already registered
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
