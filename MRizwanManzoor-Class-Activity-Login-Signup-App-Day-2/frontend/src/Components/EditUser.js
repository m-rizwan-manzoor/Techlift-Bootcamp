import { useEffect, useState } from "react";

function EditUser() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [date, setDate] = useState([]);
  const [gender, setGender] = useState([]);

  const [usersList, setUsersList] = useState([]);
  const [userItem, setUserItem] = useState({});
  const [userId, setUserId] = useState("");

  // Fetching All Users from db

  const fetchTable = async () => {
    const response = await fetch("http://localhost:3001/users");
    const jsonData = await response.json();
    return jsonData;
  };

  useEffect(() => {
    fetchTable().then((jsonData) => {
      setUsersList(jsonData);
    });
  }, []);

  // Find the logged user

  const findLoggedUser = () => {
    const found = usersList.find((obj) => {
      return obj.id == userId;
    });

    // setUserItem(found);
    console.log(found);
  };

  // Get User ID from local storage
  useEffect(() => {
    var logged = localStorage.getItem("loggedUserId");
    var loggedUserId = JSON.parse(logged);

    setUserId(loggedUserId);
    findLoggedUser();
  });

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

      <div>
        <label>Date of birth</label>
        <input
          type="date"
          className="form-control"
          id="date"
          value={userItem.date}
          required
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label>Gender</label>
        <select
          className="form-control"
          onChange={(e) => setGender(e.target.value)}
          value={userItem.gender}
        >
          <option>Female</option>
          <option>Male</option>
        </select>
      </div>

      <br></br>
      <div>
        <button className="btn btn-primary">Update</button>
      </div>
    </div>
  );
}

export default EditUser;
