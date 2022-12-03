import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function EditUser() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [gender, setGender] = useState([]);
  const [date, setDate] = useState([]);

  // Getting Logged User Details using params

  const [userItem, setUserItem] = useState({});

  const fetchTable = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${id}`
    );
    const jsonData = await response.json();
    return jsonData;
  };

  useEffect(() => {
    fetchTable().then((jsonData) => {
      setUserItem(jsonData);
    });
  }, []);

  // Updating user details using PATCH Method

  useEffect(() => {
    var naam = localStorage.getItem("users");
    var newnaam = JSON.parse(naam);

    console.log(newnaam);
  }, []);

  function Patch() {
    const user = {
      name: name,
      email: email,
      gender: gender,
      date: date,
      // password: password,
    };

    localStorage.setItem("users", JSON.stringify(user));
    console.log(user);

    fetch(`http://localhost:3001/users/${id}`, {
      method: "PATCH",
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

    navigate("/login");
  }

  return (
    <div className="container bg-light mt-5 p-5 rounded-4">
      <h1>Edit User</h1>
      <br></br>

      <div>
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          id="naam"
          placeholder={userItem.name}
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
          placeholder={userItem.email}
          required
        />
      </div>
      {/* <div>
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />
      </div> */}
      <div>
        <label>Date of birth</label>
        <input
          type="date"
          className="form-control"
          id="date"
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
        <button className="btn btn-primary" onClick={Patch}>
          Update
        </button>
      </div>
    </div>
  );
}

export default EditUser;
